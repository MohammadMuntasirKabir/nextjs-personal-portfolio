#!/usr/bin/env python3
"""Single-page ATS-friendly resume for Mohammad Muntasir Kabir.
Light theme: white + grey, dark text. 2-column grid. All links clickable."""

import os
from io import BytesIO

from PIL import Image, ImageDraw
from reportlab.lib.colors import HexColor, white
from reportlab.lib.pagesizes import LETTER
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.units import inch
from reportlab.platypus import (
    HRFlowable,
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

OUTPUT = "/home/rownak/projects/Mohammad_Muntasir_Kabir_Resume.pdf"
PHOTO_SRC = "/home/rownak/Pictures/Screenshot_20260620_182059.png"

PAGE_W, PAGE_H = LETTER
MARGIN = 0.32 * inch
CONTENT_W = PAGE_W - 2 * MARGIN

LEFT_W = 1.85 * inch
RIGHT_W = CONTENT_W - LEFT_W

BG = white
SIDE_BG = HexColor("#F3F4F6")
DIVIDER = HexColor("#D1D5DB")
ACCENT = HexColor("#2563EB")
DARK = HexColor("#111827")
BODY = HexColor("#1F2937")
MID = HexColor("#4B5563")
LINK_CLR = HexColor("#2563EB")
FB = "Helvetica-Bold"
FR = "Helvetica"
FO = "Helvetica-Oblique"


def ms(**kw):
    return ParagraphStyle("", **kw)


def P(text, size=8.5, leading=None, color=DARK, bold=False, italic=False, align=0, href=None):
    fn = FB if bold else (FO if italic else FR)
    ld = leading or size + 2.2
    s = ms(fontName=fn, fontSize=size, leading=ld, textColor=color, alignment=align, spaceAfter=0)
    if href:
        text = f'<a href="{href}" color="#2563EB">{text}</a>'
    return Paragraph(text, s)


def sec(text):
    return P(text, size=10, leading=13, color=ACCENT, bold=True)


def hr():
    return HRFlowable(width="100%", thickness=0.5, color=DIVIDER, spaceAfter=2, spaceBefore=1)


def make_round_photo(src, size_px):
    img = Image.open(src).convert("RGBA")
    w, h = img.size
    side = min(w, h)
    img = img.crop(((w - side) // 2, (h - side) // 2, (w + side) // 2, (h + side) // 2))
    img = img.resize((size_px, size_px), Image.LANCZOS)
    mask = Image.new("L", (size_px, size_px), 0)
    ImageDraw.Draw(mask).ellipse((0, 0, size_px, size_px), fill=255)
    img.putalpha(mask)
    buf = BytesIO()
    img.save(buf, format="PNG")
    buf.seek(0)
    return buf


def build():
    from reportlab.platypus.flowables import Image as RLImage

    photo_buf = make_round_photo(PHOTO_SRC, 62)
    photo = RLImage(photo_buf, width=0.54 * inch, height=0.54 * inch)

    # ═══════════════════════════════════════════════════════════════
    # HEADER
    # ═══════════════════════════════════════════════════════════════
    header_items = [
        Spacer(1, 5),
        photo,
        Spacer(1, 3),
        P("Mohammad Muntasir Kabir", size=16, leading=19, color=DARK, bold=True, align=1),
        P("Software Engineer  ·  Full-Stack Developer  ·  AI Automation Specialist",
          size=8.5, leading=11.5, color=MID, align=1),
        Spacer(1, 2),
        P("Dhaka, Bangladesh", size=8, leading=10.5, color=MID, align=1),
        Spacer(1, 1),
        # Social links — renamed, clickable
        P("Email: kabirmuntasir96@gmail.com", size=8, leading=10.5, color=LINK_CLR, align=1,
          href="mailto:kabirmuntasir96@gmail.com"),
        P("GitHub: MohammadMuntasirKabir", size=8, leading=10.5, color=LINK_CLR, align=1,
          href="https://github.com/MohammadMuntasirKabir"),
        P("LinkedIn: mohammad-muntasir-kabir", size=8, leading=10.5, color=LINK_CLR, align=1,
          href="https://www.linkedin.com/in/mohammad-muntasir-kabir-642020381"),
        Spacer(1, 5),
    ]

    header_table = Table([[item] for item in header_items], colWidths=[CONTENT_W])
    header_table.setStyle(TableStyle([
        ("ALIGN", (0, 0), (-1, -1), "CENTER"),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 0.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
    ]))

    header_border = HRFlowable(width=CONTENT_W, thickness=1.2, color=DIVIDER, spaceAfter=5, spaceBefore=0)

    # ═══════════════════════════════════════════════════════════════
    # LEFT COLUMN (sidebar)
    # ═══════════════════════════════════════════════════════════════
    left_all = []

    # ── Education ──────────────────────────────────────────────────
    left_all.append(sec("EDUCATION"))
    left_all.append(Spacer(1, 2))
    left_all += [
        P("B.Sc. in Computer Science", size=9, leading=12, bold=True),
        P("Brac University", size=8.5, leading=11.5, color=MID),
        P("Jan 2021 – Jun 2026", size=8.5, leading=11.5, color=MID),
        Spacer(1, 3),
        P("Relevant Coursework:", size=8.5, leading=11.5, bold=True),
    ]
    for c in ["Software Engineering", "Algorithms & Data Structures", "Database Systems",
              "Artificial Intelligence", "Web Technologies", "Operating Systems"]:
        left_all.append(P(f"• {c}", size=8, leading=11, color=BODY))

    left_all.append(Spacer(1, 5))
    left_all.append(hr())

    # ── Technical Skills ───────────────────────────────────────────
    left_all.append(sec("TECHNICAL SKILLS"))
    left_all.append(Spacer(1, 2))
    skill_groups = [
        ("Languages", "Python, JavaScript, TypeScript, PHP, HTML5, CSS3"),
        ("Frameworks", "React, Next.js 16, Laravel 13, Livewire, Vue.js, Tailwind CSS, Node.js, Express"),
        ("Databases", "PostgreSQL, MySQL, SQLite, MongoDB, Neon DB"),
        ("ERP", "Odoo ERP — 23+ modules customized"),
        ("AI Automation", "Claude Code, Codex, OpenCode, Zapier, n8n, OpenClaw, Hermes Agent"),
        ("DevOps & Cloud", "Git, GitHub, GitLab, Docker, AWS, GraphQL, REST APIs"),
        ("Auth & Payments", "NextAuth 5, Clerk, Neon Auth"),
        ("Other", "Figma, MCP, LLMs, Prisma, UploadThing"),
    ]
    for lbl, val in skill_groups:
        left_all.append(P(f"<b>{lbl}:</b> {val}", size=8, leading=11, color=BODY))

    left_all.append(Spacer(1, 5))
    left_all.append(hr())

    # ── Highlights ─────────────────────────────────────────────────
    left_all.append(sec("HIGHLIGHTS"))
    left_all.append(Spacer(1, 2))
    for h in [
        "0.5+ years of professional experience",
        "3+ major projects at Xobotronix IT",
        "7+ AI automation tools used daily",
        "25+ technologies in active use",
        "Client-facing across 3+ concurrent projects",
        "Full-stack + ERP + AI agent development",
    ]:
        left_all.append(P(f"• {h}", size=8, leading=11, color=BODY))

    # ═══════════════════════════════════════════════════════════════
    # RIGHT COLUMN (main content)
    # ═══════════════════════════════════════════════════════════════
    right_all = []

    # ── Professional Summary ───────────────────────────────────────
    right_all.append(sec("PROFESSIONAL SUMMARY"))
    right_all.append(Spacer(1, 2))
    right_all.append(P(
        "Software Engineer and AI Automation Specialist. Full-stack web development with "
        "React, Next.js 16, Laravel 13, and modern JavaScript. Hands-on Odoo ERP experience — "
        "customizing 23+ modules, building workflows, and delivering client-facing solutions. "
        "Leverages Claude Code, Codex, n8n, Zapier, and Hermes Agent to ship quality software "
        "efficiently. Experienced in client communication, requirements gathering, and translating "
        "business needs into technical deliverables across multiple concurrent projects.",
        size=8.5, leading=11.5, color=BODY,
    ))

    right_all.append(Spacer(1, 5))
    right_all.append(hr())

    # ── Professional Experience ─────────────────────────────────────
    right_all.append(sec("PROFESSIONAL EXPERIENCE"))
    right_all.append(Spacer(1, 2))
    right_all += [
        P("Software Developer Intern", size=9.5, leading=12.5, bold=True),
        P("Xobotronix IT — Dhaka, Bangladesh  |  Nov 2025 – May 2026",
          size=8.5, leading=11.5, italic=True, color=MID),
    ]
    for b in [
        "Worked extensively with Odoo ERP — customizing 23+ modules, building workflows, "
        "and delivering client-facing solutions.",
        "Leveraged AI Automation tools (Claude Code, Codex, n8n, Zapier) to ship quality "
        "software in the shortest time possible.",
        "Built Xobo-Pharma digital pharmacy: AI Doctor Chat, appointments, eCommerce, "
        "inventory, accounting — fully automated order-to-invoice workflows.",
        "Built a Learning Management System (LMS) for ESS School and backend services "
        "for Whiteshell Hi-Tech.",
        "Actively involved in client communications across multiple projects, gathering "
        "requirements and translating them into technical deliverables.",
    ]:
        right_all.append(P(f"• {b}", size=8.5, leading=11.5, color=BODY))

    right_all.append(Spacer(1, 3))
    right_all.append(hr())

    # ── Projects ───────────────────────────────────────────────────
    right_all.append(sec("PROJECTS"))
    right_all.append(Spacer(1, 2))

    projects = [
        {
            "name": "AI Travel Planner",
            "date": "Feb – Apr 2026",
            "url": "https://github.com/MohammadMuntasirKabir/ai-travel-planner",
            "stack": "Next.js 16, React 19, Prisma, NextAuth 5, OpenRouter AI, @dnd-kit, react-globe.gl",
            "desc": "AI-powered travel planning with AI-generated itineraries, location suggestions, "
                    "drag-and-drop trip organization, interactive globe view, and AI chat. "
                    "68 tests, rate limiting, error boundaries, input validation.",
        },
        {
            "name": "HRMS System",
            "date": "Oct – Dec 2025",
            "url": "https://github.com/MohammadMuntasirKabir/hrms-system",
            "stack": "Laravel 13, Livewire 4, Flux UI, Spatie Permission, SQLite",
            "desc": "Human Resource Management System: employee management, recruitment workflows, "
                    "payroll, 6-role access control, audit logging, dashboard analytics, API resources. "
                    "209+ tests passing.",
        },
        {
            "name": "Event Planner Pro",
            "date": "Dec 2025 – Feb 2026",
            "url": "https://github.com/MohammadMuntasirKabir/event-planner-pro",
            "stack": "Next.js 16, Clerk, Prisma, Neon DB, Tailwind CSS",
            "desc": "Full-stack event management platform with event creation, attendee management, "
                    "RSVP tracking, invite links, and polished dashboard. Rate limiting, input "
                    "validation, error boundaries. 208 tests passing.",
        },
        {
            "name": "GymAI Dhaka",
            "date": "Jan – Mar 2026",
            "url": "https://github.com/MohammadMuntasirKabir/gymai-dhaka",
            "stack": "Vite, React 19, React Router, Neon DB, Tailwind CSS",
            "desc": "Gym partnership platform in Bangladesh. AI-generated personalized training plans, "
                    "gym discovery, membership management, partner dashboards. Retry logic for AI API, "
                    "form validation, error boundaries.",
        },
    ]

    for i, proj in enumerate(projects):
        if i > 0:
            right_all.append(Spacer(1, 3))
        # Line 1: Project name (left) + Date (right) — same line
        right_all.append(Table(
            [[
                P(proj["name"], size=9.5, leading=12.5, bold=True, color=DARK),
                P(proj["date"], size=8.5, leading=11.5, color=MID, align=2),
            ]],
            colWidths=[RIGHT_W * 0.65, RIGHT_W * 0.35],
        ))
        # Line 2: Technologies
        right_all.append(P(proj["stack"], size=8, leading=11, italic=True, color=MID))
        # Line 3: Description
        right_all.append(P(proj["desc"], size=8.5, leading=11.5, color=BODY))
        # Line 4: GitHub link
        right_all.append(P(f"GitHub: {proj['url']}", size=8, leading=11, color=LINK_CLR, href=proj["url"]))

    # ═══════════════════════════════════════════════════════════════
    # BALANCE COLUMNS — fill remaining space
    # ═══════════════════════════════════════════════════════════════
    while len(left_all) < len(right_all):
        left_all.append(Spacer(1, 1))
    while len(right_all) < len(left_all):
        right_all.append(Spacer(1, 1))

    right_table = Table([[item] for item in right_all], colWidths=[RIGHT_W])
    right_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 0.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
        ("LEFTPADDING", (0, 0), (-1, -1), 10),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ]))

    left_table = Table([[item] for item in left_all], colWidths=[LEFT_W])
    left_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("TOPPADDING", (0, 0), (-1, -1), 0.5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 0.5),
        ("LEFTPADDING", (0, 0), (-1, -1), 8),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
    ]))

    body_table = Table([[left_table, right_table]], colWidths=[LEFT_W, RIGHT_W])
    body_table.setStyle(TableStyle([
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("BACKGROUND", (0, 0), (0, -1), SIDE_BG),
        ("BACKGROUND", (1, 0), (1, -1), BG),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
        ("LEFTPADDING", (0, 0), (-1, -1), 0),
        ("RIGHTPADDING", (0, 0), (-1, -1), 0),
        ("LINEAFTER", (0, 0), (0, -1), 0.7, DIVIDER),
    ]))

    doc = SimpleDocTemplate(
        OUTPUT,
        pagesize=LETTER,
        leftMargin=MARGIN,
        rightMargin=MARGIN,
        topMargin=MARGIN,
        bottomMargin=MARGIN,
        title="Mohammad Muntasir Kabir — Resume",
        author="Mohammad Muntasir Kabir",
    )
    doc.build([header_table, header_border, body_table])
    print(f"Resume: {OUTPUT}  ({os.path.getsize(OUTPUT) / 1024:.1f} KB)")


if __name__ == "__main__":
    build()
