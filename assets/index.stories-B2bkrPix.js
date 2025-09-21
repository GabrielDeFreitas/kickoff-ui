import{j as t}from"./jsx-runtime-D_zvdyIk.js";const d={primary:"bg-stone-900 text-white hover:bg-stone-800 focus:ring-stone-950/10",secondary:"bg-stone-200 text-stone-900 focus:ring-stone-950/10",danger:"bg-red-600 text-white hover:bg-red-800 focus:ring-red-950/10",success:"bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-green-950/10"};function c({icon:e,label:i,variant:l="primary",...o}){return t.jsxs("button",{...o,className:`cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium px-4 py-2 focus:outline-none focus:ring-2 focus:ring-offset-2 ${d[l]} ${o.className}`,children:[e&&t.jsx(e,{className:"w-5 h-5 text-zinc-50 mr-1"}),i]})}c.__docgenInfo={description:"",methods:[],displayName:"Button",props:{label:{required:!0,tsType:{name:"string"},description:""},icon:{required:!1,tsType:{name:"ElementType"},description:""},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "danger" | "success"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"success"'}]},description:"",defaultValue:{value:"'primary'",computed:!1}}},composes:["ButtonHTMLAttributes"]};const p={component:c,tags:["autodocs"],argTypes:{label:{control:"text",description:"text to be displayed inside the button"}}},u=e=>t.jsx("svg",{...e,xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",children:t.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M5 13l4 4L19 7"})}),r={args:{icon:u,variant:"primary",label:"Click here"}},s={args:{variant:"secondary",label:"Click here"}},a={args:{variant:"danger",label:"Click here"}},n={args:{variant:"success",label:"Click here"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    icon: Icon,
    variant: 'primary',
    label: 'Click here'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'secondary',
    label: 'Click here'
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger',
    label: 'Click here'
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success',
    label: 'Click here'
  }
}`,...n.parameters?.docs?.source}}};const g=["Primary","Secondary","Danger","Success"];export{a as Danger,r as Primary,s as Secondary,n as Success,g as __namedExportsOrder,p as default};
