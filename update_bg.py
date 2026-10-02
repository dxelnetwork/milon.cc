import os
import re

css_code = """
/* === Wavy Gradient Background === */
body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite !important;
    position: relative;
    z-index: 0;
    min-height: 100vh;
}

body.dark {
    background: linear-gradient(-45deg, #1a2a6c, #11998e, #38ef7d, #1a2a6c);
    background-size: 400% 400%;
}

body::before, body::after {
    content: "";
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 300px;
    z-index: -1;
    pointer-events: none;
}

body::before {
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255,255,255,0.15)" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,170.7C672,171,768,117,864,112C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') repeat-x;
    background-size: 1440px 100%;
    animation: wave 20s linear infinite;
}

body.dark::before {
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0,0,0,0.15)" d="M0,160L48,144C96,128,192,96,288,106.7C384,117,480,171,576,170.7C672,171,768,117,864,112C960,107,1056,149,1152,154.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') repeat-x;
    background-size: 1440px 100%;
}

body::after {
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(255,255,255,0.1)" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,154.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') repeat-x;
    background-size: 1440px 100%;
    animation: wave 15s linear infinite reverse;
}

body.dark::after {
    background: url('data:image/svg+xml;utf8,<svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="rgba(0,0,0,0.1)" d="M0,128L48,144C96,160,192,192,288,181.3C384,171,480,117,576,106.7C672,96,768,128,864,154.7C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>') repeat-x;
    background-size: 1440px 100%;
}

@keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}

@keyframes wave {
    0% { background-position: 0 0; }
    100% { background-position: 1440px 0; }
}
"""

with open('assets/css/index.css', 'a', encoding='utf-8') as f:
    f.write(css_code)

files_to_update = [f for f in os.listdir('.') if f.endswith('.html')]

# We'll remove bg-gradient-to-br, from-..., via-..., to-... from the body class.
class_pattern = re.compile(r'\b(bg-gradient-to-br|from-[\w-]+|via-[\w-]+|to-[\w-]+|dark:from-[\w-]+|dark:via-[\w-]+|dark:to-[\w-]+)\b\s*')

for file in files_to_update:
    with open(file, 'r', encoding='utf-8') as f:
        content = f.read()

    def replace_body_class(match):
        old_classes = match.group(1)
        new_classes = class_pattern.sub('', old_classes).strip()
        # Ensure it has something else so it doesn't leave an empty class=""
        # Or just return the modified class
        return f'<body\n  class="{new_classes}">'
    
    # In the HTML files, body is like:
    # <body
    #   class="...">
    # We can use regex to match body and its class attribute
    new_content = re.sub(r'<body[^>]*class="([^"]*)"[^>]*>', replace_body_class, content)

    if new_content != content:
        with open(file, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"Updated {file}")

print("Done.")
