function Minimize(styles) {    
var root = {};    
var options = {};    
function createVariable(value) {    
  var propV = `--xyz${Math.floor(Math.random()*8263)}`;    
  if(!root[value]) {    
   root[value] = propV;    
   returnRoot().style.setProperty(propV,value);    
  }    
  return `var(${root[value]})`;    
}    
function returnRoot() {    
  var isRoot = false;    
  var root = false;    
  Array.from(styles.cssRules).forEach((r)=>{    
    if(r.selectorText != ":root") {    
      isRoot = false;    
      root = false;    
    } else {    
      isRoot = true;    
      root = r;    
    }    
  });    
  if(!root) {    
    styles.insertRule(`:root {    
          
    }`,styles.cssRules.length);    
    Array.from(styles.cssRules).forEach((r)=>{    
    if(r.selectorText != ":root") {    
      isRoot = false;    
      root = false;    
    } else {    
      isRoot = true;    
      root = r;    
    }    
  });    
  }    
  return root;    
}    
const rootRule = returnRoot();    
function toKebabCase(prop) {    
  return prop.replace(/([A-Z])/g, "-$1").toLowerCase();    
};    
function findRule(obj) {    
  var res = [];    
  var e = 0;    
  var ed = {};    
  var props = [];    
  window.obj = obj;    
  Array.from(obj.sheet.cssRules).forEach(function (rule,i){    
      Object.keys(rule.style).forEach((prop)=>{    
    if(String(rule.style[prop]).trim() == String(obj.value).trim()) {    
    if(String(rule.style[prop]) != "initial") {    
    if(String(rule.style[prop]).trim() == String(obj.value).trim()) {    
            ed = obj.sheet.cssRules[i];    
            e = i;    
            if (new RegExp(`\\b${toKebabCase(prop)}\\s*:`, "i").test(ed.cssText)) {    
    if(!props.includes(prop)){    
      props.push(prop);    
    }    
}    
          }    
          }    
              
        }    
      });    
      if(ed && ed instanceof CSSRule && !res.includes(ed)) {    
        res.push(ed);    
        ed = {};    
      }    
    });    
  var x = {    
  rule: res,    
  props,    
  value: String(obj.value).trim()    
  };    
  if(res.length >= 3) {    
    return x;    
  } else {    
    return false;    
  }    
  }    
function Compress(res) {    
  var props = res.props;    
  var rules = res.rule;    
  rules.forEach((rule)=>{    
    if(rule) {    
   props.forEach((wanted)=>{    
    rule.style[wanted] = createVariable(rule.style[wanted]);    
  });    
    }    
  });    
  return rules;    
}    
function exportSheet(sheet) {    
  var cssText = "";    
  Array.from(sheet.cssRules).forEach((rule)=>{    
    cssText+=`\n${rule.selectorText} {    
 ${String(rule.style.cssText).replaceAll(";",";\n").trim()}    
 }`;    
  });    
  return String(cssText);    
}    
function deepClean(sheet) {    
  Array.from(sheet.cssRules).forEach((rule)=>{    
    Object.keys(rule.style).forEach((p)=>{    
      if(rule.style[p] != "" && !String(rule.style[p]).startsWith("var(")) {    
        const r = findRule({ sheet: styles,value: rule.style[p]});    
        if(r) {    
          Compress(r);    
        }    
      }    
    });    
  });    
}    
deepClean(styles);    
return exportSheet(styles);    
}
const root = new CSSStyleSheet();
root.replaceSync(`.div-7576290 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.div-556414 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.p-9265697 {
  
 }
.div-1776744 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.div-6685159 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }
.div-8414768 {
  width: 250px;
  padding: 15px 20px;
  background: rgb(255, 255, 255);
  border-left: 4px solid rgb(51, 51, 51);
  border-radius: 8px;
  font-family: Helvetica, sans-serif;
  color: rgb(51, 51, 51);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 10px;
  margin: 10px;
 
 }`);
console.log(Minimize(root))
