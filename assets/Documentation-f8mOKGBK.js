import{b as l,r as c,j as e}from"./index-C6qJhUCG.js";const u=()=>{const{theme:r}=l(),[o,n]=c.useState("getting-started"),a=[{id:"getting-started",title:"Getting Started",content:"Learn how to quickly start using EaseMyTools in your projects.",subsections:[{title:"Quick Start",content:`# Quick Start

Start using EaseMyTools in just a few minutes:

1. **Choose Your Tool** - Browse our collection of 50+ tools
2. **Upload Your File** - Drag and drop or click to upload
3. **Process** - Let our tools work their magic
4. **Download** - Get your processed file instantly

All processing happens locally in your browser for maximum privacy and speed.`},{title:"Creating an Account",content:`# Creating an Account

While not required, creating an account unlocks additional features:

- **Save Preferences** - Remember your favorite settings
- **Usage History** - Track your past conversions
- **Advanced Features** - Access premium tools

Sign up for free at [https://easemytools.com/signup](https://easemytools.com/signup)`}]},{id:"api-integration",title:"API Integration",content:"Learn how to integrate our tools into your applications.",subsections:[{title:"Authentication",content:`# Authentication

All API requests require authentication using your API key:

\`\`\`javascript
const headers = {
  'Authorization': 'Bearer YOUR_API_KEY',
  'Content-Type': 'application/json'
};
\`\`\`

Get your API key from the [API Dashboard](https://easemytools.com/api)`},{title:"Rate Limiting",content:`# Rate Limiting

We implement rate limiting to ensure fair usage:

- **Free Tier**: 1,000 requests/month
- **Startup Tier**: 50,000 requests/month
- **Enterprise Tier**: 500,000 requests/month

Rate limits reset at the beginning of each calendar month.`}]},{id:"tutorials",title:"Tutorials",content:"Step-by-step guides for common use cases.",subsections:[{title:"Bulk File Processing",content:`# Bulk File Processing

Learn how to process multiple files efficiently:

1. **Prepare Your Files** - Organize files in a single folder
2. **Use Batch Tools** - Select tools that support batch processing
3. **Monitor Progress** - Track processing in real-time
4. **Download Results** - Get all processed files at once

Pro Tip: Use our desktop app for faster bulk processing.`},{title:"Automating Workflows",content:`# Automating Workflows

Create automated workflows using our API:

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

This example shows how to automate image processing for a folder of images.`}]}];return e.jsx("div",{className:`documentation-page ${r}`,children:e.jsxs("div",{className:"docs-container",children:[e.jsxs("header",{className:"docs-header",children:[e.jsx("h1",{children:"Documentation"}),e.jsx("p",{className:"docs-subtitle",children:"Comprehensive guides and tutorials for EaseMyTools"})]}),e.jsxs("div",{className:"docs-layout",children:[e.jsx("nav",{className:"docs-sidebar",children:e.jsxs("div",{className:"sidebar-content",children:[e.jsx("h3",{children:"Contents"}),e.jsx("ul",{className:"sidebar-nav",children:a.map(t=>e.jsxs("li",{children:[e.jsx("button",{className:`nav-item ${o===t.id?"active":""}`,onClick:()=>n(t.id),children:t.title}),o===t.id&&e.jsx("ul",{className:"subsections",children:t.subsections.map((s,i)=>e.jsx("li",{children:e.jsx("a",{href:`#${s.title.toLowerCase().replace(/\s+/g,"-")}`,children:s.title})},i))})]},t.id))})]})}),e.jsx("main",{className:"docs-content",children:a.filter(t=>t.id===o).map(t=>e.jsxs("div",{className:"section-content",children:[e.jsx("h2",{children:t.title}),e.jsx("p",{className:"section-description",children:t.content}),t.subsections.map((s,i)=>e.jsx("article",{className:"subsection",id:s.title.toLowerCase().replace(/\s+/g,"-"),children:e.jsx("div",{className:"subsection-content",children:e.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:s.content.replace(/\n/g,"<br/>").replace(/# (.*?)\n/g,"<h3>$1</h3>").replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/`(.*?)`/g,"<code>$1</code>").replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank">$1</a>')}})})},i))]},t.id))})]}),e.jsxs("div",{className:"docs-support",children:[e.jsx("h2",{children:"Need Help?"}),e.jsx("p",{children:"Can't find what you're looking for? Our support team is here to help."}),e.jsxs("div",{className:"support-links",children:[e.jsx("a",{href:"/contact",className:"support-link",children:"Contact Support"}),e.jsx("a",{href:"/api",className:"support-link",children:"API Reference"}),e.jsx("a",{href:"/faq",className:"support-link",children:"View FAQ"})]})]})]})})};export{u as default};
