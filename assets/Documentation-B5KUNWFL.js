import{u as l,b as d,r as u,j as e}from"./index-DO95cRH1.js";const g=()=>{const{t}=l(),{theme:n}=d(),[i,c]=u.useState("getting-started"),r=[{id:"getting-started",title:t("docs.gettingStarted.title","Getting Started"),content:t("docs.gettingStarted.content","Learn how to quickly start using EaseMyTools in your projects."),subsections:[{title:t("docs.gettingStarted.quickStart","Quick Start"),content:`# ${t("docs.gettingStarted.quickStart","Quick Start")}

${t("docs.gettingStarted.quickStartText","Start using EaseMyTools in just a few minutes:")}

1. **${t("docs.gettingStarted.step1","Choose Your Tool")}** - Browse our collection of 50+ tools
2. **${t("docs.gettingStarted.step2","Upload Your File")}** - Drag and drop or click to upload
3. **${t("docs.gettingStarted.step3","Process")}** - Let our tools work their magic
4. **${t("docs.gettingStarted.step4","Download")}** - Get your processed file instantly

${t("docs.gettingStarted.note","All processing happens locally in your browser for maximum privacy and speed.")}`},{title:t("docs.gettingStarted.account","Creating an Account"),content:`# ${t("docs.gettingStarted.account","Creating an Account")}

${t("docs.gettingStarted.accountText","While not required, creating an account unlocks additional features:")}

- **${t("docs.gettingStarted.benefit1","Save Preferences")}** - Remember your favorite settings
- **${t("docs.gettingStarted.benefit2","Usage History")}** - Track your past conversions
- **${t("docs.gettingStarted.benefit3","Advanced Features")}** - Access premium tools

${t("docs.gettingStarted.signup","Sign up for free at")} [${t("docs.gettingStarted.signupLink","https://easemytools.com/signup")}](https://easemytools.com/signup)`}]},{id:"api-integration",title:t("docs.api.title","API Integration"),content:t("docs.api.content","Learn how to integrate our tools into your applications."),subsections:[{title:t("docs.api.authentication","Authentication"),content:`# ${t("docs.api.authentication","Authentication")}

${t("docs.api.authText","All API requests require authentication using your API key:")}

\`\`\`javascript
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
};
\`\`\`

${t("docs.api.getKey","Get your API key from the")} [${t("docs.api.apiDashboard","API Dashboard")}](https://easemytools.com/api)`},{title:t("docs.api.rateLimiting","Rate Limiting"),content:`# ${t("docs.api.rateLimiting","Rate Limiting")}

${t("docs.api.rateText","We implement rate limiting to ensure fair usage:")}

- **${t("docs.api.freeTier","Free Tier")}**: 1,000 requests/month
- **${t("docs.api.startupTier","Startup Tier")}**: 50,000 requests/month
- **${t("docs.api.enterpriseTier","Enterprise Tier")}**: 500,000 requests/month

${t("docs.api.rateNote","Rate limits reset at the beginning of each calendar month.")}`}]},{id:"tutorials",title:t("docs.tutorials.title","Tutorials"),content:t("docs.tutorials.content","Step-by-step guides for common use cases."),subsections:[{title:t("docs.tutorials.bulkProcessing","Bulk File Processing"),content:`# ${t("docs.tutorials.bulkProcessing","Bulk File Processing")}

${t("docs.tutorials.bulkText","Learn how to process multiple files efficiently:")}

1. **${t("docs.tutorials.step1","Prepare Your Files")}** - Organize files in a single folder
2. **${t("docs.tutorials.step2","Use Batch Tools")}** - Select tools that support batch processing
3. **${t("docs.tutorials.step3","Monitor Progress")}** - Track processing in real-time
4. **${t("docs.tutorials.step4","Download Results")}** - Get all processed files at once

${t("docs.tutorials.tip","Pro Tip: Use our desktop app for faster bulk processing.")}`},{title:t("docs.tutorials.workflow","Automating Workflows"),content:`# ${t("docs.tutorials.workflow","Automating Workflows")}

${t("docs.tutorials.workflowText","Create automated workflows using our API:")}

\`\`\`python
import requests
import os

def process_images(folder_path):
    for filename in os.listdir(folder_path):
        if filename.endswith(('.png', '.jpg', '.jpeg')):
            # Process each image through our API
            response = process_image(os.path.join(folder_path, filename))
            save_result(response)
\`\`\`

${t("docs.tutorials.workflowNote","This example shows how to automate image processing for a folder of images.")}`}]}];return e.jsx("div",{className:`documentation-page ${n}`,children:e.jsxs("div",{className:"docs-container",children:[e.jsxs("header",{className:"docs-header",children:[e.jsx("h1",{children:t("docs.title","Documentation")}),e.jsx("p",{className:"docs-subtitle",children:t("docs.subtitle","Comprehensive guides and tutorials for EaseMyTools")})]}),e.jsxs("div",{className:"docs-layout",children:[e.jsx("nav",{className:"docs-sidebar",children:e.jsxs("div",{className:"sidebar-content",children:[e.jsx("h3",{children:t("docs.contents","Contents")}),e.jsx("ul",{className:"sidebar-nav",children:r.map(s=>e.jsxs("li",{children:[e.jsx("button",{className:`nav-item ${i===s.id?"active":""}`,onClick:()=>c(s.id),children:s.title}),i===s.id&&e.jsx("ul",{className:"subsections",children:s.subsections.map((o,a)=>e.jsx("li",{children:e.jsx("a",{href:`#${o.title.toLowerCase().replace(/\s+/g,"-")}`,children:o.title})},a))})]},s.id))})]})}),e.jsx("main",{className:"docs-content",children:r.filter(s=>s.id===i).map(s=>e.jsxs("div",{className:"section-content",children:[e.jsx("h2",{children:s.title}),e.jsx("p",{className:"section-description",children:s.content}),s.subsections.map((o,a)=>e.jsx("article",{className:"subsection",id:o.title.toLowerCase().replace(/\s+/g,"-"),children:e.jsx("div",{className:"subsection-content",children:e.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:o.content.replace(/\n/g,"<br/>").replace(/# (.*?)\n/g,"<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank">$1</a>')}})})},a))]},s.id))})]}),e.jsxs("div",{className:"docs-support",children:[e.jsx("h2",{children:t("docs.needHelp","Need Help?")}),e.jsx("p",{children:t("docs.supportText","Can't find what you're looking for? Our support team is here to help.")}),e.jsxs("div",{className:"support-links",children:[e.jsx("a",{href:"/contact",className:"support-link",children:t("docs.contactSupport","Contact Support")}),e.jsx("a",{href:"/api",className:"support-link",children:t("docs.apiReference","API Reference")}),e.jsx("a",{href:"/faq",className:"support-link",children:t("docs.viewFaq","View FAQ")})]})]})]})})};export{g as default};
