import{b as A,a as B,c as C,d as M}from"./_baseEach.XPLUTvI3.js";import{i as m,a as b}from"./toString.8PGGVYZ3.js";import{i as k,h as w}from"./_getTag.1801gKJ-.js";import{i as L,b as x,a as t}from"./_isIterateeCall.3YwRjA99.js";import{i as y}from"./isArray.CqO_RI43.js";function E(r,n){var u=-1,f=k(r)?Array(r.length):[];return A(r,function(c,i,a){f[++u]=n(c,i,a)}),f}function F(r,n){var u=r.length;for(r.sort(n);u--;)r[u]=r[u].value;return r}function G(r,n){if(r!==n){var u=r!==void 0,f=r===null,c=r===r,i=m(r),a=n!==void 0,p=n===null,g=n===n,d=m(n);if(!p&&!d&&!i&&r>n||i&&a&&g&&!p&&!d||f&&a&&g||!u&&g||!c)return 1;if(!f&&!i&&!d&&r<n||d&&u&&c&&!f&&!i||p&&u&&c||!a&&c||!g)return-1}return 0}function O(r,n,u){for(var f=-1,c=r.criteria,i=n.criteria,a=c.length,p=u.length;++f<a;){var g=G(c[f],i[f]);if(g){if(f>=p)return g;var d=u[f];return g*(d=="desc"?-1:1)}}return r.index-n.index}function U(r,n,u){n.length?n=b(n,function(i){return y(i)?function(a){return B(a,i.length===1?i[0]:i)}:i}):n=[L];var f=-1;n=b(n,w(C));var c=E(r,function(i,a,p){var g=b(n,function(d){return d(i)});return{criteria:g,index:++f,value:i}});return F(c,function(i,a){return O(i,a,u)})}var H=x(function(r,n){if(r==null)return[];var u=n.length;return u>1&&t(r,n[0],n[1])?n=[]:u>2&&t(n[0],n[1],n[2])&&(n=[n[0]]),U(r,M(n,1),[])});export{E as b,H as s};
