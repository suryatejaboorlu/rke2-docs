"use strict";(self.webpackChunkrke_2_docs=self.webpackChunkrke_2_docs||[]).push([[438],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3286:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={title:"SELinux"},c=void 0,s={unversionedId:"security/selinux",id:"security/selinux",title:"SELinux",description:"RKE2 can be run on SELinux-enabled systems which is the default when installed on CentOS/RHEL 7 &amp; 8.",source:"@site/docs/security/selinux.md",sourceDirName:"security",slug:"/security/selinux",permalink:"/rke2-docs/security/selinux",draft:!1,editUrl:"https://github.com/rancher/rke2-docs/edit/main/docs/security/selinux.md",tags:[],version:"current",lastUpdatedAt:1667383543,formattedLastUpdatedAt:"11/2/2022",frontMatter:{title:"SELinux"},sidebar:"mySidebar",previous:{title:"Default Policy Configuration",permalink:"/rke2-docs/security/policies"},next:{title:"Secrets Encryption",permalink:"/rke2-docs/security/secrets_encryption"}},u={},p=[{value:"Custom Context Labels",id:"custom-context-labels",level:4},{value:"Configuration",id:"configuration",level:4}],d={toc:p};function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"RKE2 can be run on SELinux-enabled systems which is the default when installed on CentOS/RHEL 7 ","&"," 8.\nThe ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux"},"policy")," supporting this is a specialization of the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux"},"container-selinux")," policy for containerd. It accounts\nfor the non-standard location(s) which containerd is installed and places persistent and ephemeral state."),(0,a.kt)("h4",{id:"custom-context-labels"},"Custom Context Labels"),(0,a.kt)("p",null,"RKE2 runs control-plane services as static pods which require access to multiple\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L59"},(0,a.kt)("inlineCode",{parentName:"a"},"container_var_lib_t")),"\nlocations. The ",(0,a.kt)("inlineCode",{parentName:"p"},"etcd")," container must be able to read-write under ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/db")," and read,\nalong with ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-apiserver"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-controller-manager"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"kube-scheduler"),", from ",(0,a.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/server/tls"),".\nTo make this work without over-privileging, e.g.,\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containers/container-selinux/blob/RHEL7.5/container.te#L47-L49"},(0,a.kt)("inlineCode",{parentName:"a"},"spc_t")),", the RKE2 SELinux policy\nintroduces the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L15-L21"},(0,a.kt)("inlineCode",{parentName:"a"},"rke2_service_db_t"))," and\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/rke2-selinux/blob/v0.3.latest.1/rke2.te#L9-L13"},(0,a.kt)("inlineCode",{parentName:"a"},"rke2_service_t"))," context labels for\nread-write and read-only access, respectively. These labels will only be applied to the RKE2 control-plane static pods.  "),(0,a.kt)("h4",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"RKE2 support for SELinux amounts to a single configuration item, the ",(0,a.kt)("inlineCode",{parentName:"p"},"--selinux")," boolean flag. This is a pass-through\nto the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/containerd/cri/blob/release/1.4/docs/config.md"},(0,a.kt)("inlineCode",{parentName:"a"},"enable_selinux")," boolean in the cri section of the containerd/cri toml"),".\nIf RKE2 was installed via tarball then SELinux will not be enabled without additional configuration. The recommended\nmethod to configure such is via an entry in the RKE2 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml"),", e.g.:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"# /etc/rancher/rke2/config.yaml is the default location\nselinux: true\n")),(0,a.kt)("p",null,"This is equivalent to passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"--selinux")," flag to ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 server")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2 agent")," command-line or setting the\n",(0,a.kt)("inlineCode",{parentName:"p"},"RKE2_SELINUX=true")," environment variable."))}m.isMDXComponent=!0}}]);