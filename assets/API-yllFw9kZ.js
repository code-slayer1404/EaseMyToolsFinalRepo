import{b as l,r as d,j as e}from"./index-C6qJhUCG.js";const p=()=>{const{theme:n}=l(),[i,c]=d.useState(0),r=[{name:"remove-background",method:"POST",path:"/api/v1/remove-background",description:"Remove background from images using AI",parameters:[{name:"image",type:"file",required:!0,description:"Image file (JPEG, PNG, WebP)"},{name:"bg_mode",type:"string",required:!1,description:"Background mode: transparent or color"}],response:`{
  "success": true,
  "result": {
    "image_url": "https://api.easemytools.com/results/abc123.png",
    "processing_time": 1.23
  }
}`},{name:"image-resize",method:"POST",path:"/api/v1/image-resize",description:"Resize images with quality preservation",parameters:[{name:"image",type:"file",required:!0,description:"Image file to resize"},{name:"width",type:"integer",required:!0,description:"Target width in pixels"},{name:"height",type:"integer",required:!0,description:"Target height in pixels"}],response:`{
  "success": true,
  "result": {
    "image_url": "https://api.easemytools.com/results/def456.png",
    "original_size": "1920x1080",
    "new_size": "800x450"
  }
}`}],t=[{language:"JavaScript",code:`// Remove background example
const formData = new FormData();
formData.append('image', imageFile);
formData.append('bg_mode', 'transparent');

const response = await fetch('https://api.easemytools.com/api/v1/remove-background', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  },
  body: formData
});

const result = await response.json();
console.log(result);`},{language:"Python",code:`import requests

url = "https://api.easemytools.com/api/v1/remove-background"
headers = {"Authorization": "Bearer YOUR_API_KEY"}

with open("image.png", "rb") as image_file:
    files = {"image": image_file}
    data = {"bg_mode": "transparent"}
    response = requests.post(url, files=files, data=data, headers=headers)

print(response.json())`}];return e.jsx("div",{className:`api-page ${n}`,children:e.jsxs("div",{className:"api-container",children:[e.jsxs("header",{className:"api-header",children:[e.jsx("h1",{children:"EaseMyTools API"}),e.jsx("p",{className:"api-subtitle",children:"Integrate our powerful tools directly into your applications with our REST API"}),e.jsxs("div",{className:"api-actions",children:[e.jsx("button",{className:"primary-button",children:"Get API Key"}),e.jsx("button",{className:"secondary-button",children:"View Documentation"})]})]}),e.jsxs("section",{className:"api-features",children:[e.jsx("h2",{children:"Why Use Our API?"}),e.jsxs("div",{className:"features-grid",children:[e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"⚡"}),e.jsx("h3",{children:"High Performance"}),e.jsx("p",{children:"Process thousands of requests per second with our scalable infrastructure"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"🔒"}),e.jsx("h3",{children:"Secure & Reliable"}),e.jsx("p",{children:"Enterprise-grade security with 99.9% uptime SLA"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"📚"}),e.jsx("h3",{children:"Comprehensive Docs"}),e.jsx("p",{children:"Detailed documentation with code examples in multiple languages"})]}),e.jsxs("div",{className:"feature-card",children:[e.jsx("div",{className:"feature-icon",children:"💬"}),e.jsx("h3",{children:"Developer Support"}),e.jsx("p",{children:"Dedicated support team to help you integrate our API"})]})]})]}),e.jsxs("section",{className:"api-endpoints",children:[e.jsx("h2",{children:"Available Endpoints"}),e.jsxs("div",{className:"endpoints-container",children:[e.jsx("div",{className:"endpoints-sidebar",children:r.map((s,a)=>e.jsxs("button",{className:`endpoint-item ${i===a?"active":""}`,onClick:()=>c(a),children:[e.jsx("span",{className:`method ${s.method.toLowerCase()}`,children:s.method}),e.jsx("span",{className:"endpoint-path",children:s.path})]},a))}),e.jsx("div",{className:"endpoint-details",children:r[i]&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"endpoint-header",children:[e.jsx("h3",{children:r[i].name}),e.jsx("p",{children:r[i].description})]}),e.jsxs("div",{className:"parameters-section",children:[e.jsx("h4",{children:"Parameters"}),e.jsxs("div",{className:"parameters-table",children:[e.jsxs("div",{className:"table-header",children:[e.jsx("span",{children:"Parameter"}),e.jsx("span",{children:"Type"}),e.jsx("span",{children:"Required"}),e.jsx("span",{children:"Description"})]}),r[i].parameters.map((s,a)=>e.jsxs("div",{className:"table-row",children:[e.jsx("span",{className:"param-name",children:s.name}),e.jsx("span",{className:"param-type",children:s.type}),e.jsx("span",{className:"param-required",children:s.required?"✓":"✗"}),e.jsx("span",{className:"param-description",children:s.description})]},a))]})]}),e.jsxs("div",{className:"response-section",children:[e.jsx("h4",{children:"Response"}),e.jsx("pre",{className:"response-code",children:e.jsx("code",{children:r[i].response})})]})]})})]})]}),e.jsxs("section",{className:"code-examples",children:[e.jsx("h2",{children:"Code Examples"}),e.jsx("div",{className:"examples-tabs",children:t.map((s,a)=>e.jsxs("div",{className:"code-example",children:[e.jsx("div",{className:"example-header",children:e.jsx("span",{className:"language",children:s.language})}),e.jsx("pre",{className:"example-code",children:e.jsx("code",{children:s.code})})]},a))})]}),e.jsxs("section",{className:"api-pricing",children:[e.jsx("h2",{children:"Simple Pricing"}),e.jsxs("div",{className:"pricing-cards",children:[e.jsxs("div",{className:"pricing-card",children:[e.jsx("h3",{children:"Developer"}),e.jsx("div",{className:"price",children:"$0"}),e.jsx("p",{children:"Perfect for testing and development"}),e.jsxs("ul",{children:[e.jsx("li",{children:"1,000 requests/month"}),e.jsx("li",{children:"Basic support"}),e.jsx("li",{children:"All tools available"})]}),e.jsx("button",{className:"pricing-button",children:"Get Started"})]}),e.jsxs("div",{className:"pricing-card highlighted",children:[e.jsx("h3",{children:"Startup"}),e.jsxs("div",{className:"price",children:["$29",e.jsx("span",{children:"/month"})]}),e.jsx("p",{children:"For growing applications"}),e.jsxs("ul",{children:[e.jsx("li",{children:"50,000 requests/month"}),e.jsx("li",{children:"Priority support"}),e.jsx("li",{children:"Advanced features"})]}),e.jsx("button",{className:"pricing-button primary",children:"Get Started"})]}),e.jsxs("div",{className:"pricing-card",children:[e.jsx("h3",{children:"Enterprise"}),e.jsxs("div",{className:"price",children:["$199",e.jsx("span",{children:"/month"})]}),e.jsx("p",{children:"For high-volume applications"}),e.jsxs("ul",{children:[e.jsx("li",{children:"500,000 requests/month"}),e.jsx("li",{children:"24/7 support"}),e.jsx("li",{children:"Custom solutions"})]}),e.jsx("button",{className:"pricing-button",children:"Contact Sales"})]})]})]})]})})};export{p as default};
