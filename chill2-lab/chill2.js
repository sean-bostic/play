(()=>{var rp=/\/[^/]+-lab\//.test(location.pathname);if(rp)for(let s of["getItem","setItem","removeItem"]){let e=Storage.prototype[s];Storage.prototype[s]=function(t,...n){return e.call(this,`lab:${t}`,...n)}}function Yh(){addEventListener("keydown",s=>{s.code==="Escape"&&(s.preventDefault(),s.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400))},!0)}var kc="160";var op=0,Zh=1,ap=2;var Bf=1,Gc=2,di=3,Bn=0,sn=1,Ft=2;var ei=0,$s=1,Qs=2,Kh=3,$h=4,lp=5,rs=100,cp=101,hp=102,Jh=103,jh=104,up=200,fp=201,dp=202,pp=203,$l=204,Jl=205,mp=206,gp=207,xp=208,_p=209,yp=210,vp=211,Mp=212,Sp=213,Ep=214,bp=0,Tp=1,wp=2,ia=3,Ap=4,Rp=5,Cp=6,Pp=7,zf=0,Lp=1,Ip=2,Ni=0,Vc=1,Wc=2,Xc=3,ao=4,Dp=5,qc=6,Qh="attached",Np="detached",Hf=300,er=301,tr=302,jl=303,Ql=304,Ha=306,En=1e3,yn=1001,Vr=1002,Yt=1003,sa=1004;var Ur=1005;var an=1006,Yc=1007;var Oi=1008;var Ui=1009,Up=1010,Op=1011,Zc=1012,kf=1013,Ii=1014,pi=1015,vn=1016,Gf=1017,Vf=1018,ls=1020,Fp=1021,On=1023,Bp=1024,zp=1025,cs=1026,nr=1027,Hp=1028,Wf=1029,kp=1030,Xf=1031,qf=1033,dl=33776,pl=33777,ml=33778,gl=33779,eu=35840,tu=35841,nu=35842,iu=35843,Yf=36196,su=37492,ru=37496,ou=37808,au=37809,lu=37810,cu=37811,hu=37812,uu=37813,fu=37814,du=37815,pu=37816,mu=37817,gu=37818,xu=37819,_u=37820,yu=37821,xl=36492,vu=36494,Mu=36495,Gp=36283,Su=36284,Eu=36285,bu=36286,Vp=2200,Wp=2201,Xp=2202,ir=2300,us=2301,_l=2302,Xs=2400,qs=2401,ra=2402,Kc=2500,qp=2501,Zf=0,ka=1,lo=2,Kf=3e3,hs=3001,Yp=3200,Zp=3201,$f=0,Kp=1,ln="",gt="srgb",$t="srgb-linear",$c="display-p3",Ga="display-p3-linear",oa="linear",bt="srgb",aa="rec709",la="p3";var bs=7680;var Tu=519,$p=512,Jp=513,jp=514,Jf=515,Qp=516,em=517,tm=518,nm=519,ec=35044;var wu="300 es",tc=1035,mi=2e3,ca=2001,gi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let i=this._listeners[e];if(i!==void 0){let r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}},dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=1234567,Or=Math.PI/180,sr=180/Math.PI;function Fn(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(dn[s&255]+dn[s>>8&255]+dn[s>>16&255]+dn[s>>24&255]+"-"+dn[e&255]+dn[e>>8&255]+"-"+dn[e>>16&15|64]+dn[e>>24&255]+"-"+dn[t&63|128]+dn[t>>8&255]+"-"+dn[t>>16&255]+dn[t>>24&255]+dn[n&255]+dn[n>>8&255]+dn[n>>16&255]+dn[n>>24&255]).toLowerCase()}function Zt(s,e,t){return Math.max(e,Math.min(t,s))}function Jc(s,e){return(s%e+e)%e}function im(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function sm(s,e,t){return s!==e?(t-s)/(e-s):0}function Fr(s,e,t){return(1-t)*s+t*e}function rm(s,e,t,n){return Fr(s,e,1-Math.exp(-t*n))}function om(s,e=1){return e-Math.abs(Jc(s,e*2)-e)}function am(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function lm(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function cm(s,e){return s+Math.floor(Math.random()*(e-s+1))}function hm(s,e){return s+Math.random()*(e-s)}function um(s){return s*(.5-Math.random())}function fm(s){s!==void 0&&(Au=s);let e=Au+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dm(s){return s*Or}function pm(s){return s*sr}function nc(s){return(s&s-1)===0&&s!==0}function mm(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function ha(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function gm(s,e,t,n,i){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),f=o((e-n)/2),d=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*f,a*l);break;case"YZY":s.set(c*f,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*f,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*d,a*l);break;case"YXY":s.set(c*d,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Qn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function St(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}var jf={DEG2RAD:Or,RAD2DEG:sr,generateUUID:Fn,clamp:Zt,euclideanModulo:Jc,mapLinear:im,inverseLerp:sm,lerp:Fr,damp:rm,pingpong:om,smoothstep:am,smootherstep:lm,randInt:cm,randFloat:hm,randFloatSpread:um,seededRandom:fm,degToRad:dm,radToDeg:pm,isPowerOfTwo:nc,ceilPowerOfTwo:mm,floorPowerOfTwo:ha,setQuaternionFromProperEuler:gm,normalize:St,denormalize:Qn},me=class s{constructor(e=0,t=0){s.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ot=class s{constructor(e,t,n,i,r,o,a,c,l){s.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){let u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=i[0],m=i[3],p=i[6],v=i[1],x=i[4],M=i[7],I=i[2],A=i[5],b=i[8];return r[0]=o*_+a*v+c*I,r[3]=o*m+a*x+c*A,r[6]=o*p+a*M+c*b,r[1]=l*_+u*v+h*I,r[4]=l*m+u*x+h*A,r[7]=l*p+u*M+h*b,r[2]=f*_+d*v+g*I,r[5]=f*m+d*x+g*A,r[8]=f*p+d*M+g*b,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,f=a*c-u*r,d=l*r-o*c,g=t*h+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=h*_,e[1]=(i*l-u*n)*_,e[2]=(a*n-i*o)*_,e[3]=f*_,e[4]=(u*t-i*c)*_,e[5]=(i*r-a*t)*_,e[6]=d*_,e[7]=(n*c-l*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(yl.makeScale(e,t)),this}rotate(e){return this.premultiply(yl.makeRotation(-e)),this}translate(e,t){return this.premultiply(yl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},yl=new ot;function Qf(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Wr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function xm(){let s=Wr("canvas");return s.style.display="block",s}var Ru={};function Br(s){s in Ru||(Ru[s]=!0,console.warn(s))}var Cu=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Pu=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Eo={[$t]:{transfer:oa,primaries:aa,toReference:s=>s,fromReference:s=>s},[gt]:{transfer:bt,primaries:aa,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ga]:{transfer:oa,primaries:la,toReference:s=>s.applyMatrix3(Pu),fromReference:s=>s.applyMatrix3(Cu)},[$c]:{transfer:bt,primaries:la,toReference:s=>s.convertSRGBToLinear().applyMatrix3(Pu),fromReference:s=>s.applyMatrix3(Cu).convertLinearToSRGB()}},_m=new Set([$t,Ga]),ut={enabled:!0,_workingColorSpace:$t,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!_m.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;let n=Eo[e].toReference,i=Eo[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Eo[s].primaries},getTransfer:function(s){return s===ln?oa:Eo[s].transfer}};function Js(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function vl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ts,ua=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ts===void 0&&(Ts=Wr("canvas")),Ts.width=e.width,Ts.height=e.height;let n=Ts.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ts}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Wr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Js(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Js(t[n]/255)*255):t[n]=Js(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ym=0,fa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Fn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ml(i[o].image)):r.push(Ml(i[o]))}else r=Ml(i);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ml(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ua.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var vm=0,cn=class s extends gi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,n=yn,i=yn,r=an,o=Oi,a=On,c=Ui,l=s.DEFAULT_ANISOTROPY,u=ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:vm++}),this.uuid=Fn(),this.name="",this.source=new fa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===hs?gt:ln),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case En:e.x=e.x-Math.floor(e.x);break;case yn:e.x=e.x<0?0:1;break;case Vr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case En:e.y=e.y-Math.floor(e.y);break;case yn:e.y=e.y<0?0:1;break;case Vr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===gt?hs:Kf}set encoding(e){Br("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===hs?gt:ln}};cn.DEFAULT_IMAGE=null;cn.DEFAULT_MAPPING=Hf;cn.DEFAULT_ANISOTROPY=1;var pt=class s{constructor(e=0,t=0,n=0,i=1){s.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r,c=e.elements,l=c[0],u=c[4],h=c[8],f=c[1],d=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(l+1)/2,M=(d+1)/2,I=(p+1)/2,A=(u+f)/4,b=(h+_)/4,F=(g+m)/4;return x>M&&x>I?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=b/n):M>I?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=F/i):I<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(I),n=b/r,i=F/r),this.set(n,i,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(h-_)/v,this.z=(f-u)/v,this.w=Math.acos((l+d+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},ic=class extends gi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new pt(0,0,e,t),this.scissorTest=!1,this.viewport=new pt(0,0,e,t);let i={width:e,height:t,depth:1};n.encoding!==void 0&&(Br("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===hs?gt:ln),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:an,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new cn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new fa(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends ic{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},da=class extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var sc=class extends cn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Kt=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3],f=r[o+0],d=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=_;return}if(h!==_||c!==f||l!==d||u!==g){let m=1-a,p=c*f+l*d+u*g+h*_,v=p>=0?1:-1,x=1-p*p;if(x>Number.EPSILON){let I=Math.sqrt(x),A=Math.atan2(I,p*v);m=Math.sin(m*A)/I,a=Math.sin(a*A)/I}let M=a*v;if(c=c*m+f*M,l=l*m+d*M,u=u*m+g*M,h=h*m+_*M,m===1-a){let I=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=I,l*=I,u*=I,h*=I}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){let a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*d-l*f,e[t+1]=c*g+u*f+l*h-a*d,e[t+2]=l*g+u*d+a*f-c*h,e[t+3]=u*g-a*h-c*f-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),f=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h+f*d*g;break;case"YZX":this._x=f*u*h+l*d*g,this._y=l*d*h+f*u*g,this._z=l*u*g-f*d*h,this._w=l*u*h-f*d*g;break;case"XZY":this._x=f*u*h-l*d*g,this._y=l*d*h-f*u*g,this._z=l*u*g+f*d*h,this._w=l*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Zt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,i=this._y,r=this._z,o=this._w,a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*i+t*this._y,this._z=d*r+t*this._z,this.normalize(),this}let l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,f=Math.sin(t*u)/l;return this._w=o*h+this._w*f,this._x=n*h+this._x*f,this._y=i*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class s{constructor(e=0,t=0,n=0){s.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lu.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Zt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sl=new C,Lu=new Kt,Mn=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Wn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Wn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Wn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Wn):Wn.fromBufferAttribute(r,o),Wn.applyMatrix4(e.matrixWorld),this.expandByPoint(Wn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}let i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Wn),Wn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Tr),To.subVectors(this.max,Tr),ws.subVectors(e.a,Tr),As.subVectors(e.b,Tr),Rs.subVectors(e.c,Tr),Ai.subVectors(As,ws),Ri.subVectors(Rs,As),es.subVectors(ws,Rs);let t=[0,-Ai.z,Ai.y,0,-Ri.z,Ri.y,0,-es.z,es.y,Ai.z,0,-Ai.x,Ri.z,0,-Ri.x,es.z,0,-es.x,-Ai.y,Ai.x,0,-Ri.y,Ri.x,0,-es.y,es.x,0];return!El(t,ws,As,Rs,To)||(t=[1,0,0,0,1,0,0,0,1],!El(t,ws,As,Rs,To))?!1:(wo.crossVectors(Ai,Ri),t=[wo.x,wo.y,wo.z],El(t,ws,As,Rs,To))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Wn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Wn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},ai=[new C,new C,new C,new C,new C,new C,new C,new C],Wn=new C,bo=new Mn,ws=new C,As=new C,Rs=new C,Ai=new C,Ri=new C,es=new C,Tr=new C,To=new C,wo=new C,ts=new C;function El(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ts.fromArray(s,r);let a=i.x*Math.abs(ts.x)+i.y*Math.abs(ts.y)+i.z*Math.abs(ts.z),c=e.dot(ts),l=t.dot(ts),u=n.dot(ts);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}var Mm=new Mn,wr=new C,bl=new C,Ln=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Mm.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wr.subVectors(e,this.center);let t=wr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(wr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(bl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wr.copy(e.center).add(bl)),this.expandByPoint(wr.copy(e.center).sub(bl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},li=new C,Tl=new C,Ao=new C,Ci=new C,wl=new C,Ro=new C,Al=new C,rr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(li.copy(this.origin).addScaledVector(this.direction,t),li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Tl.copy(e).add(t).multiplyScalar(.5),Ao.copy(t).sub(e).normalize(),Ci.copy(this.origin).sub(Tl);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Ao),a=Ci.dot(this.direction),c=-Ci.dot(Ao),l=Ci.lengthSq(),u=Math.abs(1-o*o),h,f,d,g;if(u>0)if(h=o*c-a,f=o*a-c,g=r*u,h>=0)if(f>=-g)if(f<=g){let _=1/u;h*=_,f*=_,d=h*(h+o*f+2*a)+f*(o*h+f+2*c)+l}else f=r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f=-r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;else f<=-g?(h=Math.max(0,-(-o*r+a)),f=h>0?-r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l):f<=g?(h=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(h=Math.max(0,-(o*r+a)),f=h>0?r:Math.min(Math.max(-r,-c),r),d=-h*h+f*(f+2*c)+l);else f=o>0?-r:r,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Tl).addScaledVector(Ao,f),d}intersectSphere(e,t){li.subVectors(e.center,this.origin);let n=li.dot(this.direction),i=li.dot(li)-n*n,r=e.radius*e.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return l>=0?(n=(e.min.x-f.x)*l,i=(e.max.x-f.x)*l):(n=(e.max.x-f.x)*l,i=(e.min.x-f.x)*l),u>=0?(r=(e.min.y-f.y)*u,o=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,o=(e.min.y-f.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-f.z)*h,c=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,c=(e.min.z-f.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,li)!==null}intersectTriangle(e,t,n,i,r){wl.subVectors(t,e),Ro.subVectors(n,e),Al.crossVectors(wl,Ro);let o=this.direction.dot(Al),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ci.subVectors(this.origin,e);let c=a*this.direction.dot(Ro.crossVectors(Ci,Ro));if(c<0)return null;let l=a*this.direction.dot(wl.cross(Ci));if(l<0||c+l>o)return null;let u=-a*Ci.dot(Al);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ve=class s{constructor(e,t,n,i,r,o,a,c,l,u,h,f,d,g,_,m){s.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,f,d,g,_,m)}set(e,t,n,i,r,o,a,c,l,u,h,f,d,g,_,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,i=1/Cs.setFromMatrixColumn(e,0).length(),r=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=d+g*l,t[5]=f-_*l,t[9]=-a*c,t[2]=_-f*l,t[6]=g+d*l,t[10]=o*c}else if(e.order==="YXZ"){let f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f+_*a,t[4]=g*a-d,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=d*a-g,t[6]=_+f*a,t[10]=o*c}else if(e.order==="ZXY"){let f=c*u,d=c*h,g=l*u,_=l*h;t[0]=f-_*a,t[4]=-o*h,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*u,t[9]=_-f*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let f=o*u,d=o*h,g=a*u,_=a*h;t[0]=c*u,t[4]=g*l-d,t[8]=f*l+_,t[1]=c*h,t[5]=_*l+f,t[9]=d*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=_-f*h,t[8]=g*h+d,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*h+g,t[10]=f-_*h}else if(e.order==="XZY"){let f=o*c,d=o*l,g=a*c,_=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=f*h+_,t[5]=o*u,t[9]=d*h-g,t[2]=g*h-d,t[6]=a*u,t[10]=_*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sm,e,Em)}lookAt(e,t,n){let i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Pi.crossVectors(n,Cn),Pi.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Pi.crossVectors(n,Cn)),Pi.normalize(),Co.crossVectors(Cn,Pi),i[0]=Pi.x,i[4]=Co.x,i[8]=Cn.x,i[1]=Pi.y,i[5]=Co.y,i[9]=Cn.y,i[2]=Pi.z,i[6]=Co.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],v=n[3],x=n[7],M=n[11],I=n[15],A=i[0],b=i[4],F=i[8],S=i[12],E=i[1],w=i[5],O=i[9],q=i[13],U=i[2],B=i[6],W=i[10],re=i[14],se=i[3],j=i[7],ce=i[11],de=i[15];return r[0]=o*A+a*E+c*U+l*se,r[4]=o*b+a*w+c*B+l*j,r[8]=o*F+a*O+c*W+l*ce,r[12]=o*S+a*q+c*re+l*de,r[1]=u*A+h*E+f*U+d*se,r[5]=u*b+h*w+f*B+d*j,r[9]=u*F+h*O+f*W+d*ce,r[13]=u*S+h*q+f*re+d*de,r[2]=g*A+_*E+m*U+p*se,r[6]=g*b+_*w+m*B+p*j,r[10]=g*F+_*O+m*W+p*ce,r[14]=g*S+_*q+m*re+p*de,r[3]=v*A+x*E+M*U+I*se,r[7]=v*b+x*w+M*B+I*j,r[11]=v*F+x*O+M*W+I*ce,r[15]=v*S+x*q+M*re+I*de,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],f=e[10],d=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+r*c*h-i*l*h-r*a*f+n*l*f+i*a*d-n*c*d)+_*(+t*c*d-t*l*f+r*o*f-i*o*d+i*l*u-r*c*u)+m*(+t*l*h-t*a*d-r*o*h+n*o*d+r*a*u-n*l*u)+p*(-i*a*u-t*c*h+t*a*f+i*o*h-n*o*f+n*c*u)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],f=e[10],d=e[11],g=e[12],_=e[13],m=e[14],p=e[15],v=h*m*l-_*f*l+_*c*d-a*m*d-h*c*p+a*f*p,x=g*f*l-u*m*l-g*c*d+o*m*d+u*c*p-o*f*p,M=u*_*l-g*h*l+g*a*d-o*_*d-u*a*p+o*h*p,I=g*h*c-u*_*c-g*a*f+o*_*f+u*a*m-o*h*m,A=t*v+n*x+i*M+r*I;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let b=1/A;return e[0]=v*b,e[1]=(_*f*r-h*m*r-_*i*d+n*m*d+h*i*p-n*f*p)*b,e[2]=(a*m*r-_*c*r+_*i*l-n*m*l-a*i*p+n*c*p)*b,e[3]=(h*c*r-a*f*r-h*i*l+n*f*l+a*i*d-n*c*d)*b,e[4]=x*b,e[5]=(u*m*r-g*f*r+g*i*d-t*m*d-u*i*p+t*f*p)*b,e[6]=(g*c*r-o*m*r-g*i*l+t*m*l+o*i*p-t*c*p)*b,e[7]=(o*f*r-u*c*r+u*i*l-t*f*l-o*i*d+t*c*d)*b,e[8]=M*b,e[9]=(g*h*r-u*_*r-g*n*d+t*_*d+u*n*p-t*h*p)*b,e[10]=(o*_*r-g*a*r+g*n*l-t*_*l-o*n*p+t*a*p)*b,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*d-t*a*d)*b,e[12]=I*b,e[13]=(u*_*i-g*h*i+g*n*f-t*_*f-u*n*m+t*h*m)*b,e[14]=(g*a*i-o*_*i-g*n*c+t*_*c+o*n*m-t*a*m)*b,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*f+t*a*f)*b,this}scale(e){let t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,f=r*l,d=r*u,g=r*h,_=o*u,m=o*h,p=a*h,v=c*l,x=c*u,M=c*h,I=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*I,i[1]=(d+M)*I,i[2]=(g-x)*I,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(f+p))*A,i[6]=(m+v)*A,i[7]=0,i[8]=(g+x)*b,i[9]=(m-v)*b,i[10]=(1-(f+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements,r=Cs.set(i[0],i[1],i[2]).length(),o=Cs.set(i[4],i[5],i[6]).length(),a=Cs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Xn.copy(this);let l=1/r,u=1/o,h=1/a;return Xn.elements[0]*=l,Xn.elements[1]*=l,Xn.elements[2]*=l,Xn.elements[4]*=u,Xn.elements[5]*=u,Xn.elements[6]*=u,Xn.elements[8]*=h,Xn.elements[9]*=h,Xn.elements[10]*=h,t.setFromRotationMatrix(Xn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=mi){let c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),f=(n+i)/(n-i),d,g;if(a===mi)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ca)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=mi){let c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),f=(t+e)*l,d=(n+i)*u,g,_;if(a===mi)g=(o+r)*h,_=-2*h;else if(a===ca)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=_,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},Cs=new C,Xn=new Ve,Sm=new C(0,0,0),Em=new C(1,1,1),Pi=new C,Co=new C,Cn=new C,Iu=new Ve,Du=new Kt,or=class s{constructor(e=0,t=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Zt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Zt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Zt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Zt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Zt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Zt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Iu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Iu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Du.setFromEuler(this),this.setFromQuaternion(Du,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};or.DEFAULT_ORDER="XYZ";var pa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},bm=0,Nu=new C,Ps=new Kt,ci=new Ve,Po=new C,Ar=new C,Tm=new C,wm=new Kt,Uu=new C(1,0,0),Ou=new C(0,1,0),Fu=new C(0,0,1),Am={type:"added"},Rm={type:"removed"},It=class s extends gi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=Fn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new C,t=new or,n=new Kt,i=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ve},normalMatrix:{value:new ot}}),this.matrix=new Ve,this.matrixWorld=new Ve,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.multiply(Ps),this}rotateOnWorldAxis(e,t){return Ps.setFromAxisAngle(e,t),this.quaternion.premultiply(Ps),this}rotateX(e){return this.rotateOnAxis(Uu,e)}rotateY(e){return this.rotateOnAxis(Ou,e)}rotateZ(e){return this.rotateOnAxis(Fu,e)}translateOnAxis(e,t){return Nu.copy(e).applyQuaternion(this.quaternion),this.position.add(Nu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Uu,e)}translateY(e){return this.translateOnAxis(Ou,e)}translateZ(e){return this.translateOnAxis(Fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ci.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Po.copy(e):Po.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ci.lookAt(Ar,Po,this.up):ci.lookAt(Po,Ar,this.up),this.quaternion.setFromRotationMatrix(ci),i&&(ci.extractRotation(i.matrixWorld),Ps.setFromRotationMatrix(ci),this.quaternion.premultiply(Ps.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Am)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Rm)),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ci.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ci.multiply(e.parent.matrixWorld)),e.applyMatrix4(ci),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,e,Tm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ar,wm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++){let r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){let i=this.children;for(let r=0,o=i.length;r<o;r++){let a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let c=[];for(let l in a){let u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};It.DEFAULT_UP=new C(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var qn=new C,hi=new C,Rl=new C,ui=new C,Ls=new C,Is=new C,Bu=new C,Cl=new C,Pl=new C,Ll=new C,Lo=!1,as=class s{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),qn.subVectors(e,t),i.cross(qn);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){qn.subVectors(i,t),hi.subVectors(n,t),Rl.subVectors(e,t);let o=qn.dot(qn),a=qn.dot(hi),c=qn.dot(Rl),l=hi.dot(hi),u=hi.dot(Rl),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;let f=1/h,d=(l*c-a*u)*f,g=(o*u-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getUV(e,t,n,i,r,o,a,c){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(o,ui.y),c.addScaledVector(a,ui.z),c)}static isFrontFacing(e,t,n,i){return qn.subVectors(n,t),hi.subVectors(e,t),qn.cross(hi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),qn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Lo===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lo=!0),s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return s.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,r=this.c,o,a;Ls.subVectors(i,n),Is.subVectors(r,n),Cl.subVectors(e,n);let c=Ls.dot(Cl),l=Is.dot(Cl);if(c<=0&&l<=0)return t.copy(n);Pl.subVectors(e,i);let u=Ls.dot(Pl),h=Is.dot(Pl);if(u>=0&&h<=u)return t.copy(i);let f=c*h-u*l;if(f<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(Ls,o);Ll.subVectors(e,r);let d=Ls.dot(Ll),g=Is.dot(Ll);if(g>=0&&d<=g)return t.copy(r);let _=d*l-c*g;if(_<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Is,a);let m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Bu.subVectors(r,i),a=(h-u)/(h-u+(d-g)),t.copy(i).addScaledVector(Bu,a);let p=1/(m+_+f);return o=_*p,a=f*p,t.copy(n).addScaledVector(Ls,o).addScaledVector(Is,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},ed={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Li={h:0,s:0,l:0},Io={h:0,s:0,l:0};function Il(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var Fe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=ut.workingColorSpace){if(e=Jc(e,1),t=Zt(t,0,1),n=Zt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Il(o,r,e+1/3),this.g=Il(o,r,e),this.b=Il(o,r,e-1/3)}return ut.toWorkingColorSpace(this,i),this}setStyle(e,t=gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=gt){let n=ed[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Js(e.r),this.g=Js(e.g),this.b=Js(e.b),this}copyLinearToSRGB(e){return this.r=vl(e.r),this.g=vl(e.g),this.b=vl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=gt){return ut.fromWorkingColorSpace(pn.copy(this),e),Math.round(Zt(pn.r*255,0,255))*65536+Math.round(Zt(pn.g*255,0,255))*256+Math.round(Zt(pn.b*255,0,255))}getHexString(e=gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.fromWorkingColorSpace(pn.copy(this),t);let n=pn.r,i=pn.g,r=pn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),c,l,u=(a+o)/2;if(a===o)c=0,l=0;else{let h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=ut.workingColorSpace){return ut.fromWorkingColorSpace(pn.copy(this),t),e.r=pn.r,e.g=pn.g,e.b=pn.b,e}getStyle(e=gt){ut.fromWorkingColorSpace(pn.copy(this),e);let t=pn.r,n=pn.g,i=pn.b;return e!==gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Li),this.setHSL(Li.h+e,Li.s+t,Li.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Li),e.getHSL(Io);let n=Fr(Li.h,Io.h,t),i=Fr(Li.s,Io.s,t),r=Fr(Li.l,Io.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},pn=new Fe;Fe.NAMES=ed;var Cm=0,bn=class extends gi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Cm++}),this.uuid=Fn(),this.name="",this.type="Material",this.blending=$s,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Jl,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Fe(0,0,0),this.blendAlpha=0,this.depthFunc=ia,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(n.blending=this.blending),this.side!==Bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$l&&(n.blendSrc=this.blendSrc),this.blendDst!==Jl&&(n.blendDst=this.blendDst),this.blendEquation!==rs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ia&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Tn=class extends bn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=zf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Wt=new C,Do=new me,Ct=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Do.fromBufferAttribute(this,t),Do.applyMatrix3(e),this.setXY(t,Do.x,Do.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Qn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=St(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qn(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qn(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qn(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ec&&(e.usage=this.usage),e}};var ma=class extends Ct{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var ga=class extends Ct{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var We=class extends Ct{constructor(e,t,n){super(new Float32Array(e),t,n)}};var Pm=0,Un=new Ve,Dl=new It,Ds=new C,Pn=new Mn,Rr=new Mn,nn=new C,xt=class s extends gi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Fn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qf(e)?ga:ma)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ot().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Dl.lookAt(e),Dl.updateMatrix(),this.applyMatrix4(Dl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(e){let t=[];for(let n=0,i=e.length;n<i;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new We(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Mn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let r=t[n];Pn.setFromBufferAttribute(r),this.morphTargetsRelative?(nn.addVectors(this.boundingBox.min,Pn.min),this.boundingBox.expandByPoint(nn),nn.addVectors(this.boundingBox.max,Pn.max),this.boundingBox.expandByPoint(nn)):(this.boundingBox.expandByPoint(Pn.min),this.boundingBox.expandByPoint(Pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ln);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Rr.setFromBufferAttribute(a),this.morphTargetsRelative?(nn.addVectors(Pn.min,Rr.min),Pn.expandByPoint(nn),nn.addVectors(Pn.max,Rr.max),Pn.expandByPoint(nn)):(Pn.expandByPoint(Rr.min),Pn.expandByPoint(Rr.max))}Pn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)nn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(nn));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)nn.fromBufferAttribute(a,l),c&&(Ds.fromBufferAttribute(e,l),nn.add(Ds)),i=Math.max(i,n.distanceToSquared(nn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ct(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],u=[];for(let E=0;E<a;E++)l[E]=new C,u[E]=new C;let h=new C,f=new C,d=new C,g=new me,_=new me,m=new me,p=new C,v=new C;function x(E,w,O){h.fromArray(i,E*3),f.fromArray(i,w*3),d.fromArray(i,O*3),g.fromArray(o,E*2),_.fromArray(o,w*2),m.fromArray(o,O*2),f.sub(h),d.sub(h),_.sub(g),m.sub(g);let q=1/(_.x*m.y-m.x*_.y);isFinite(q)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-_.y).multiplyScalar(q),v.copy(d).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(q),l[E].add(p),l[w].add(p),l[O].add(p),u[E].add(v),u[w].add(v),u[O].add(v))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let E=0,w=M.length;E<w;++E){let O=M[E],q=O.start,U=O.count;for(let B=q,W=q+U;B<W;B+=3)x(n[B+0],n[B+1],n[B+2])}let I=new C,A=new C,b=new C,F=new C;function S(E){b.fromArray(r,E*3),F.copy(b);let w=l[E];I.copy(w),I.sub(b.multiplyScalar(b.dot(w))).normalize(),A.crossVectors(F,w);let q=A.dot(u[E])<0?-1:1;c[E*4]=I.x,c[E*4+1]=I.y,c[E*4+2]=I.z,c[E*4+3]=q}for(let E=0,w=M.length;E<w;++E){let O=M[E],q=O.start,U=O.count;for(let B=q,W=q+U;B<W;B+=3)S(n[B+0]),S(n[B+1]),S(n[B+2])}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ct(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new C,r=new C,o=new C,a=new C,c=new C,l=new C,u=new C,h=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),_=e.getX(f+1),m=e.getX(f+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)nn.fromBufferAttribute(e,t),nn.normalize(),e.setXYZ(t,nn.x,nn.y,nn.z)}toNonIndexed(){function e(a,c){let l=a.array,u=a.itemSize,h=a.normalized,f=new l.constructor(c.length*u),d=0,g=0;for(let _=0,m=c.length;_<m;_++){a.isInterleavedBufferAttribute?d=c[_]*a.data.stride+a.offset:d=c[_]*u;for(let p=0;p<u;p++)f[g++]=l[d++]}return new Ct(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,n=this.index.array,i=this.attributes;for(let a in i){let c=i[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){let f=l[u],d=e(f,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let i={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,f=l.length;h<f;h++){let d=l[h];u.push(d.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let i=e.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(t))}let r=e.morphAttributes;for(let l in r){let u=[],h=r[l];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,u=o.length;l<u;l++){let h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zu=new Ve,ns=new rr,No=new Ln,Hu=new C,Ns=new C,Us=new C,Os=new C,Nl=new C,Uo=new C,Oo=new me,Fo=new me,Bo=new me,ku=new C,Gu=new C,Vu=new C,zo=new C,Ho=new C,ze=class extends It{constructor(e=new xt,t=new Tn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(r&&a){Uo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=a[c],h=r[c];u!==0&&(Nl.fromBufferAttribute(h,e),o?Uo.addScaledVector(Nl,u):Uo.addScaledVector(Nl.sub(t),u))}t.add(Uo)}return t}raycast(e,t){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),No.copy(n.boundingSphere),No.applyMatrix4(r),ns.copy(e.ray).recast(e.near),!(No.containsPoint(ns.origin)===!1&&(ns.intersectSphere(No,Hu)===null||ns.origin.distanceToSquared(Hu)>(e.far-e.near)**2))&&(zu.copy(r).invert(),ns.copy(e.ray).applyMatrix4(zu),!(n.boundingBox!==null&&ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ns)))}_computeIntersections(e,t,n){let i,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,I=x;M<I;M+=3){let A=a.getX(M),b=a.getX(M+1),F=a.getX(M+2);i=ko(this,p,e,n,l,u,h,A,b,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(a.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=a.getX(m),x=a.getX(m+1),M=a.getX(m+2);i=ko(this,o,e,n,l,u,h,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){let m=f[g],p=o[m.materialIndex],v=Math.max(m.start,d.start),x=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let M=v,I=x;M<I;M+=3){let A=M,b=M+1,F=M+2;i=ko(this,p,e,n,l,u,h,A,b,F),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),_=Math.min(c.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){let v=m,x=m+1,M=m+2;i=ko(this,o,e,n,l,u,h,v,x,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}};function Lm(s,e,t,n,i,r,o,a){let c;if(e.side===sn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Bn,a),c===null)return null;Ho.copy(a),Ho.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Ho);return l<t.near||l>t.far?null:{distance:l,point:Ho.clone(),object:s}}function ko(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Ns),s.getVertexPosition(c,Us),s.getVertexPosition(l,Os);let u=Lm(s,e,t,n,Ns,Us,Os,zo);if(u){i&&(Oo.fromBufferAttribute(i,a),Fo.fromBufferAttribute(i,c),Bo.fromBufferAttribute(i,l),u.uv=as.getInterpolation(zo,Ns,Us,Os,Oo,Fo,Bo,new me)),r&&(Oo.fromBufferAttribute(r,a),Fo.fromBufferAttribute(r,c),Bo.fromBufferAttribute(r,l),u.uv1=as.getInterpolation(zo,Ns,Us,Os,Oo,Fo,Bo,new me),u.uv2=u.uv1),o&&(ku.fromBufferAttribute(o,a),Gu.fromBufferAttribute(o,c),Vu.fromBufferAttribute(o,l),u.normal=as.getInterpolation(zo,Ns,Us,Os,ku,Gu,Vu,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a,b:c,c:l,normal:new C,materialIndex:0};as.getNormal(Ns,Us,Os,h.normal),u.face=h}return u}var Ue=class s extends xt{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],u=[],h=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new We(l,3)),this.setAttribute("normal",new We(u,3)),this.setAttribute("uv",new We(h,2));function g(_,m,p,v,x,M,I,A,b,F,S){let E=M/b,w=I/F,O=M/2,q=I/2,U=A/2,B=b+1,W=F+1,re=0,se=0,j=new C;for(let ce=0;ce<W;ce++){let de=ce*w-q;for(let Se=0;Se<B;Se++){let te=Se*E-O;j[_]=te*v,j[m]=de*x,j[p]=U,l.push(j.x,j.y,j.z),j[_]=0,j[m]=0,j[p]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(Se/b),h.push(1-ce/F),re+=1}}for(let ce=0;ce<F;ce++)for(let de=0;de<b;de++){let Se=f+de+B*ce,te=f+de+B*(ce+1),z=f+(de+1)+B*(ce+1),oe=f+(de+1)+B*ce;c.push(Se,te,oe),c.push(te,z,oe),se+=6}a.addGroup(d,se,S),d+=se,f+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function ar(s){let e={};for(let t in s){e[t]={};for(let n in s[t]){let i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function _n(s){let e={};for(let t=0;t<s.length;t++){let n=ar(s[t]);for(let i in n)e[i]=n[i]}return e}function Im(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function td(s){return s.getRenderTarget()===null?s.outputColorSpace:ut.workingColorSpace}var $n={clone:ar,merge:_n},Dm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Nm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Bt=class extends bn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Dm,this.fragmentShader=Nm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ar(e.uniforms),this.uniformsGroups=Im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},xa=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ve,this.projectionMatrix=new Ve,this.projectionMatrixInverse=new Ve,this.coordinateSystem=mi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Gt=class extends xa{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=sr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Or*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sr*2*Math.atan(Math.tan(Or*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Or*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Fs=-90,Bs=1,rc=class extends It{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Gt(Fs,Bs,e,t);i.layers=this.layers,this.add(i);let r=new Gt(Fs,Bs,e,t);r.layers=this.layers,this.add(r);let o=new Gt(Fs,Bs,e,t);o.layers=this.layers,this.add(o);let a=new Gt(Fs,Bs,e,t);a.layers=this.layers,this.add(a);let c=new Gt(Fs,Bs,e,t);c.layers=this.layers,this.add(c);let l=new Gt(Fs,Bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===mi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ca)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},_a=class extends cn{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:er,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},oc=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(Br("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===hs?gt:ln),this.texture=new _a(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:an}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ue(5,5,5),r=new Bt({name:"CubemapFromEquirect",uniforms:ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:sn,blending:ei});r.uniforms.tEquirect.value=t;let o=new ze(i,r),a=t.minFilter;return t.minFilter===Oi&&(t.minFilter=an),new rc(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}},Ul=new C,Um=new C,Om=new ot,Yn=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Ul.subVectors(n,t).cross(Um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Ul),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Om.getNormalMatrix(e),i=this.coplanarPoint(Ul).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},is=new Ln,Go=new C,Xr=class{constructor(e=new Yn,t=new Yn,n=new Yn,i=new Yn,r=new Yn,o=new Yn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=mi){let n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],f=i[7],d=i[8],g=i[9],_=i[10],m=i[11],p=i[12],v=i[13],x=i[14],M=i[15];if(n[0].setComponents(c-r,f-l,m-d,M-p).normalize(),n[1].setComponents(c+r,f+l,m+d,M+p).normalize(),n[2].setComponents(c+o,f+u,m+g,M+v).normalize(),n[3].setComponents(c-o,f-u,m-g,M-v).normalize(),n[4].setComponents(c-a,f-h,m-_,M-x).normalize(),t===mi)n[5].setComponents(c+a,f+h,m+_,M+x).normalize();else if(t===ca)n[5].setComponents(a,h,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),is.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),is.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(is)}intersectsSprite(e){return is.center.set(0,0,0),is.radius=.7071067811865476,is.applyMatrix4(e.matrixWorld),this.intersectsSphere(is)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Go.x=i.normal.x>0?e.max.x:e.min.x,Go.y=i.normal.y>0?e.max.y:e.min.y,Go.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Go)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function nd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function Fm(s,e){let t=e.isWebGL2,n=new WeakMap;function i(l,u){let h=l.array,f=l.usage,d=h.byteLength,g=s.createBuffer();s.bindBuffer(u,g),s.bufferData(u,h,f),l.onUploadCallback();let _;if(h instanceof Float32Array)_=s.FLOAT;else if(h instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)_=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=s.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=s.SHORT;else if(h instanceof Uint32Array)_=s.UNSIGNED_INT;else if(h instanceof Int32Array)_=s.INT;else if(h instanceof Int8Array)_=s.BYTE;else if(h instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,u,h){let f=u.array,d=u._updateRange,g=u.updateRanges;if(s.bindBuffer(h,l),d.count===-1&&g.length===0&&s.bufferSubData(h,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let p=g[_];t?s.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):s.bufferSubData(h,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}u.clearUpdateRanges()}d.count!==-1&&(t?s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):s.bufferSubData(h,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);if(h===void 0)n.set(l,i(l,u));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,l,u),h.version=l.version}}return{get:o,remove:a,update:c}}var Xt=class s extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,f=t/c,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let v=p*f-o;for(let x=0;x<l;x++){let M=x*h-r;g.push(M,-v,0),_.push(0,0,1),m.push(x/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<a;v++){let x=v+l*p,M=v+l*(p+1),I=v+1+l*(p+1),A=v+1+l*p;d.push(x,M,A),d.push(M,I,A)}this.setIndex(d),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}},Bm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Hm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Vm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wm=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,qm=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ym=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Km=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,$m=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jm=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jm=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Qm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,e0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,t0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,n0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,i0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,s0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,r0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,o0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,a0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,l0=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,c0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,h0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,u0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,f0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,p0="gl_FragColor = linearToOutputTexel( gl_FragColor );",m0=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,g0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,x0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,y0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,M0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,S0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,E0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,b0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,T0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,w0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,A0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,R0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,C0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,P0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,L0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,I0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,D0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,N0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,U0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,O0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,F0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,B0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,z0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,H0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,k0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,G0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,V0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,W0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,X0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,q0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Y0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Z0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,K0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,J0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Q0=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ng=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ig=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,og=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ag=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ug=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,fg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,dg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,_g=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yg=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vg=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Tg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wg=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ag=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ig=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Dg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ng=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Og=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Fg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xg=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qg=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Zg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kg=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$g=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jg=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qg=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ex=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tx=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ix=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,sx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,rx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ox=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ax=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ux=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,fx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,px=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:Bm,alphahash_pars_fragment:zm,alphamap_fragment:Hm,alphamap_pars_fragment:km,alphatest_fragment:Gm,alphatest_pars_fragment:Vm,aomap_fragment:Wm,aomap_pars_fragment:Xm,batching_pars_vertex:qm,batching_vertex:Ym,begin_vertex:Zm,beginnormal_vertex:Km,bsdfs:$m,iridescence_fragment:Jm,bumpmap_pars_fragment:jm,clipping_planes_fragment:Qm,clipping_planes_pars_fragment:e0,clipping_planes_pars_vertex:t0,clipping_planes_vertex:n0,color_fragment:i0,color_pars_fragment:s0,color_pars_vertex:r0,color_vertex:o0,common:a0,cube_uv_reflection_fragment:l0,defaultnormal_vertex:c0,displacementmap_pars_vertex:h0,displacementmap_vertex:u0,emissivemap_fragment:f0,emissivemap_pars_fragment:d0,colorspace_fragment:p0,colorspace_pars_fragment:m0,envmap_fragment:g0,envmap_common_pars_fragment:x0,envmap_pars_fragment:_0,envmap_pars_vertex:y0,envmap_physical_pars_fragment:L0,envmap_vertex:v0,fog_vertex:M0,fog_pars_vertex:S0,fog_fragment:E0,fog_pars_fragment:b0,gradientmap_pars_fragment:T0,lightmap_fragment:w0,lightmap_pars_fragment:A0,lights_lambert_fragment:R0,lights_lambert_pars_fragment:C0,lights_pars_begin:P0,lights_toon_fragment:I0,lights_toon_pars_fragment:D0,lights_phong_fragment:N0,lights_phong_pars_fragment:U0,lights_physical_fragment:O0,lights_physical_pars_fragment:F0,lights_fragment_begin:B0,lights_fragment_maps:z0,lights_fragment_end:H0,logdepthbuf_fragment:k0,logdepthbuf_pars_fragment:G0,logdepthbuf_pars_vertex:V0,logdepthbuf_vertex:W0,map_fragment:X0,map_pars_fragment:q0,map_particle_fragment:Y0,map_particle_pars_fragment:Z0,metalnessmap_fragment:K0,metalnessmap_pars_fragment:$0,morphcolor_vertex:J0,morphnormal_vertex:j0,morphtarget_pars_vertex:Q0,morphtarget_vertex:eg,normal_fragment_begin:tg,normal_fragment_maps:ng,normal_pars_fragment:ig,normal_pars_vertex:sg,normal_vertex:rg,normalmap_pars_fragment:og,clearcoat_normal_fragment_begin:ag,clearcoat_normal_fragment_maps:lg,clearcoat_pars_fragment:cg,iridescence_pars_fragment:hg,opaque_fragment:ug,packing:fg,premultiplied_alpha_fragment:dg,project_vertex:pg,dithering_fragment:mg,dithering_pars_fragment:gg,roughnessmap_fragment:xg,roughnessmap_pars_fragment:_g,shadowmap_pars_fragment:yg,shadowmap_pars_vertex:vg,shadowmap_vertex:Mg,shadowmask_pars_fragment:Sg,skinbase_vertex:Eg,skinning_pars_vertex:bg,skinning_vertex:Tg,skinnormal_vertex:wg,specularmap_fragment:Ag,specularmap_pars_fragment:Rg,tonemapping_fragment:Cg,tonemapping_pars_fragment:Pg,transmission_fragment:Lg,transmission_pars_fragment:Ig,uv_pars_fragment:Dg,uv_pars_vertex:Ng,uv_vertex:Ug,worldpos_vertex:Og,background_vert:Fg,background_frag:Bg,backgroundCube_vert:zg,backgroundCube_frag:Hg,cube_vert:kg,cube_frag:Gg,depth_vert:Vg,depth_frag:Wg,distanceRGBA_vert:Xg,distanceRGBA_frag:qg,equirect_vert:Yg,equirect_frag:Zg,linedashed_vert:Kg,linedashed_frag:$g,meshbasic_vert:Jg,meshbasic_frag:jg,meshlambert_vert:Qg,meshlambert_frag:ex,meshmatcap_vert:tx,meshmatcap_frag:nx,meshnormal_vert:ix,meshnormal_frag:sx,meshphong_vert:rx,meshphong_frag:ox,meshphysical_vert:ax,meshphysical_frag:lx,meshtoon_vert:cx,meshtoon_frag:hx,points_vert:ux,points_frag:fx,shadow_vert:dx,shadow_frag:px,sprite_vert:mx,sprite_frag:gx},Ae={common:{diffuse:{value:new Fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new Fe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},jn={basic:{uniforms:_n([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:_n([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:_n([Ae.common,Ae.specularmap,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)},specular:{value:new Fe(1118481)},shininess:{value:30}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:_n([Ae.common,Ae.envmap,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.roughnessmap,Ae.metalnessmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:_n([Ae.common,Ae.aomap,Ae.lightmap,Ae.emissivemap,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.gradientmap,Ae.fog,Ae.lights,{emissive:{value:new Fe(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:_n([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,Ae.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:_n([Ae.points,Ae.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:_n([Ae.common,Ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:_n([Ae.common,Ae.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:_n([Ae.common,Ae.bumpmap,Ae.normalmap,Ae.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:_n([Ae.sprite,Ae.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distanceRGBA:{uniforms:_n([Ae.common,Ae.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distanceRGBA_vert,fragmentShader:tt.distanceRGBA_frag},shadow:{uniforms:_n([Ae.lights,Ae.fog,{color:{value:new Fe(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};jn.physical={uniforms:_n([jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new Fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new Fe(0)},specularColor:{value:new Fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Vo={r:0,b:0,g:0};function xx(s,e,t,n,i,r,o){let a=new Fe(0),c=r===!0?0:1,l,u,h=null,f=0,d=null;function g(m,p){let v=!1,x=p.isScene===!0?p.background:null;x&&x.isTexture&&(x=(p.backgroundBlurriness>0?t:e).get(x)),x===null?_(a,c):x&&x.isColor&&(_(x,1),v=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?n.buffers.color.setClear(0,0,0,1,o):M==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||v)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ha)?(u===void 0&&(u=new ze(new Ue(1,1,1),new Bt({name:"BackgroundCubeMaterial",uniforms:ar(jn.backgroundCube.uniforms),vertexShader:jn.backgroundCube.vertexShader,fragmentShader:jn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(I,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=ut.getTransfer(x.colorSpace)!==bt,(h!==x||f!==x.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new ze(new Xt(2,2),new Bt({name:"BackgroundMaterial",uniforms:ar(jn.background.uniforms),vertexShader:jn.background.vertexShader,fragmentShader:jn.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=ut.getTransfer(x.colorSpace)!==bt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,d=s.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function _(m,p){m.getRGB(Vo,td(s)),n.buffers.color.setClear(Vo.r,Vo.g,Vo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,_(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,_(a,c)},render:g}}function _x(s,e,t,n){let i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,u=!1;function h(U,B,W,re,se){let j=!1;if(o){let ce=_(re,W,B);l!==ce&&(l=ce,d(l.object)),j=p(U,re,W,se),j&&v(U,re,W,se)}else{let ce=B.wireframe===!0;(l.geometry!==re.id||l.program!==W.id||l.wireframe!==ce)&&(l.geometry=re.id,l.program=W.id,l.wireframe=ce,j=!0)}se!==null&&t.update(se,s.ELEMENT_ARRAY_BUFFER),(j||u)&&(u=!1,F(U,B,W,re),se!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(se).buffer))}function f(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(U){return n.isWebGL2?s.bindVertexArray(U):r.bindVertexArrayOES(U)}function g(U){return n.isWebGL2?s.deleteVertexArray(U):r.deleteVertexArrayOES(U)}function _(U,B,W){let re=W.wireframe===!0,se=a[U.id];se===void 0&&(se={},a[U.id]=se);let j=se[B.id];j===void 0&&(j={},se[B.id]=j);let ce=j[re];return ce===void 0&&(ce=m(f()),j[re]=ce),ce}function m(U){let B=[],W=[],re=[];for(let se=0;se<i;se++)B[se]=0,W[se]=0,re[se]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:W,attributeDivisors:re,object:U,attributes:{},index:null}}function p(U,B,W,re){let se=l.attributes,j=B.attributes,ce=0,de=W.getAttributes();for(let Se in de)if(de[Se].location>=0){let z=se[Se],oe=j[Se];if(oe===void 0&&(Se==="instanceMatrix"&&U.instanceMatrix&&(oe=U.instanceMatrix),Se==="instanceColor"&&U.instanceColor&&(oe=U.instanceColor)),z===void 0||z.attribute!==oe||oe&&z.data!==oe.data)return!0;ce++}return l.attributesNum!==ce||l.index!==re}function v(U,B,W,re){let se={},j=B.attributes,ce=0,de=W.getAttributes();for(let Se in de)if(de[Se].location>=0){let z=j[Se];z===void 0&&(Se==="instanceMatrix"&&U.instanceMatrix&&(z=U.instanceMatrix),Se==="instanceColor"&&U.instanceColor&&(z=U.instanceColor));let oe={};oe.attribute=z,z&&z.data&&(oe.data=z.data),se[Se]=oe,ce++}l.attributes=se,l.attributesNum=ce,l.index=re}function x(){let U=l.newAttributes;for(let B=0,W=U.length;B<W;B++)U[B]=0}function M(U){I(U,0)}function I(U,B){let W=l.newAttributes,re=l.enabledAttributes,se=l.attributeDivisors;W[U]=1,re[U]===0&&(s.enableVertexAttribArray(U),re[U]=1),se[U]!==B&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](U,B),se[U]=B)}function A(){let U=l.newAttributes,B=l.enabledAttributes;for(let W=0,re=B.length;W<re;W++)B[W]!==U[W]&&(s.disableVertexAttribArray(W),B[W]=0)}function b(U,B,W,re,se,j,ce){ce===!0?s.vertexAttribIPointer(U,B,W,se,j):s.vertexAttribPointer(U,B,W,re,se,j)}function F(U,B,W,re){if(n.isWebGL2===!1&&(U.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();let se=re.attributes,j=W.getAttributes(),ce=B.defaultAttributeValues;for(let de in j){let Se=j[de];if(Se.location>=0){let te=se[de];if(te===void 0&&(de==="instanceMatrix"&&U.instanceMatrix&&(te=U.instanceMatrix),de==="instanceColor"&&U.instanceColor&&(te=U.instanceColor)),te!==void 0){let z=te.normalized,oe=te.itemSize,le=t.get(te);if(le===void 0)continue;let ne=le.buffer,ve=le.type,Ee=le.bytesPerElement,H=n.isWebGL2===!0&&(ve===s.INT||ve===s.UNSIGNED_INT||te.gpuType===kf);if(te.isInterleavedBufferAttribute){let J=te.data,D=J.stride,ee=te.offset;if(J.isInstancedInterleavedBuffer){for(let Q=0;Q<Se.locationSize;Q++)I(Se.location+Q,J.meshPerAttribute);U.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Q=0;Q<Se.locationSize;Q++)M(Se.location+Q);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let Q=0;Q<Se.locationSize;Q++)b(Se.location+Q,oe/Se.locationSize,ve,z,D*Ee,(ee+oe/Se.locationSize*Q)*Ee,H)}else{if(te.isInstancedBufferAttribute){for(let J=0;J<Se.locationSize;J++)I(Se.location+J,te.meshPerAttribute);U.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let J=0;J<Se.locationSize;J++)M(Se.location+J);s.bindBuffer(s.ARRAY_BUFFER,ne);for(let J=0;J<Se.locationSize;J++)b(Se.location+J,oe/Se.locationSize,ve,z,oe*Ee,oe/Se.locationSize*J*Ee,H)}}else if(ce!==void 0){let z=ce[de];if(z!==void 0)switch(z.length){case 2:s.vertexAttrib2fv(Se.location,z);break;case 3:s.vertexAttrib3fv(Se.location,z);break;case 4:s.vertexAttrib4fv(Se.location,z);break;default:s.vertexAttrib1fv(Se.location,z)}}}}A()}function S(){O();for(let U in a){let B=a[U];for(let W in B){let re=B[W];for(let se in re)g(re[se].object),delete re[se];delete B[W]}delete a[U]}}function E(U){if(a[U.id]===void 0)return;let B=a[U.id];for(let W in B){let re=B[W];for(let se in re)g(re[se].object),delete re[se];delete B[W]}delete a[U.id]}function w(U){for(let B in a){let W=a[B];if(W[U.id]===void 0)continue;let re=W[U.id];for(let se in re)g(re[se].object),delete re[se];delete W[U.id]}}function O(){q(),u=!0,l!==c&&(l=c,d(l.object))}function q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:h,reset:O,resetDefaultState:q,dispose:S,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:M,disableUnusedAttributes:A}}function yx(s,e,t,n){let i=n.isWebGL2,r;function o(u){r=u}function a(u,h){s.drawArrays(r,u,h),t.update(h,r,1)}function c(u,h,f){if(f===0)return;let d,g;if(i)d=s,g="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,u,h,f),t.update(h,r,f)}function l(u,h,f){if(f===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(u[g],h[g]);else{d.multiDrawArraysWEBGL(r,u,0,h,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_];t.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function vx(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext",a=t.precision!==void 0?t.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),f=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_TEXTURE_SIZE),g=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),m=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),p=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,M=o||e.has("OES_texture_float"),I=x&&M,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:M,floatVertexTextures:I,maxSamples:A}}function Mx(s){let e=this,t=null,n=0,i=!1,r=!1,o=new Yn,a=new ot,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,d){let g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):l();else{let v=r?0:n,x=v*4,M=p.clippingState||null;c.value=M,M=u(g,f,x,d);for(let I=0;I!==x;++I)M[I]=t[I];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,d,g){let _=h!==null?h.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=d+_*4,v=f.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let x=0,M=d;x!==_;++x,M+=4)o.copy(h[x]).applyMatrix4(v,a),o.normal.toArray(m,M),m[M+3]=o.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Sx(s){let e=new WeakMap;function t(o,a){return a===jl?o.mapping=er:a===Ql&&(o.mapping=tr),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===jl||a===Ql)if(e.has(o)){let c=e.get(o).texture;return t(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new oc(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var Fi=class extends xa{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ys=4,Wu=[.125,.215,.35,.446,.526,.582],os=20,Ol=new Fi,Xu=new Fe,Fl=null,Bl=0,zl=0,ss=(1+Math.sqrt(5))/2,zs=1/ss,qu=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ss,zs),new C(0,ss,-zs),new C(zs,0,ss),new C(-zs,0,ss),new C(ss,zs,0),new C(-ss,zs,0)],lr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Fl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Fl,Bl,zl),e.scissorTest=!1,Wo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===er||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fl=this._renderer.getRenderTarget(),Bl=this._renderer.getActiveCubeFace(),zl=this._renderer.getActiveMipmapLevel();let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:an,minFilter:an,generateMipmaps:!1,type:vn,format:On,colorSpace:$t,depthBuffer:!1},i=Yu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yu(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ex(r)),this._blurMaterial=bx(r,e,t)}return i}_compileMaterial(e){let t=new ze(this._lodPlanes[0],e);this._renderer.compile(t,Ol)}_sceneToCubeUV(e,t,n,i){let a=new Gt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Xu),u.toneMapping=Ni,u.autoClear=!1;let d=new Tn({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),g=new ze(new Ue,d),_=!1,m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,_=!0):(d.color.copy(Xu),_=!0);for(let p=0;p<6;p++){let v=p%3;v===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):v===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let x=this._cubeSize;Wo(i,v*x,p>2?x:0,x,x),u.setRenderTarget(i),_&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===er||e.mapping===tr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zu());let r=i?this._cubemapMaterial:this._equirectMaterial,o=new ze(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;let c=this._cubeSize;Wo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ol)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){let r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=qu[(i-1)%qu.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let u=3,h=new ze(this._lodPlanes[i],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*os-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):os;m>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${os}`);let p=[],v=0;for(let b=0;b<os;++b){let F=b/_,S=Math.exp(-F*F/2);p.push(S),b===0?v+=S:b<m&&(v+=2*S)}for(let b=0;b<p.length;b++)p[b]=p[b]/v;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let M=this._sizeLods[i],I=3*M*(i>x-Ys?i-x+Ys:0),A=4*(this._cubeSize-M);Wo(t,I,A,3*M,2*M),c.setRenderTarget(t),c.render(h,Ol)}};function Ex(s){let e=[],t=[],n=[],i=s,r=s-Ys+1+Wu.length;for(let o=0;o<r;o++){let a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Ys?c=Wu[o-s+Ys-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),u=-l,h=1+l,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,v=new Float32Array(_*g*d),x=new Float32Array(m*g*d),M=new Float32Array(p*g*d);for(let A=0;A<d;A++){let b=A%3*2/3-1,F=A>2?0:-1,S=[b,F,0,b+2/3,F,0,b+2/3,F+1,0,b,F,0,b+2/3,F+1,0,b,F+1,0];v.set(S,_*g*A),x.set(f,m*g*A);let E=[A,A,A,A,A,A];M.set(E,p*g*A)}let I=new xt;I.setAttribute("position",new Ct(v,_)),I.setAttribute("uv",new Ct(x,m)),I.setAttribute("faceIndex",new Ct(M,p)),e.push(I),i>Ys&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Yu(s,e,t){let n=new Jt(s,e,t);return n.texture.mapping=Ha,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Wo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function bx(s,e,t){let n=new Float32Array(os),i=new C(0,1,0);return new Bt({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Zu(){return new Bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Ku(){return new Bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function jc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Tx(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===jl||c===Ql,u=c===er||c===tr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let h=e.get(a);return t===null&&(t=new lr(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),e.set(a,h),h.texture}else{if(e.has(a))return e.get(a).texture;{let h=a.image;if(l&&h&&h.height>0||u&&h&&i(h)){t===null&&(t=new lr(s));let f=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function i(a){let c=0,l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function wx(s){let e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){let i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ax(s,e,t,n){let i={},r=new WeakMap;function o(h){let f=h.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)e.remove(_[m])}f.removeEventListener("dispose",o),delete i[f.id];let d=r.get(f);d&&(e.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function c(h){let f=h.attributes;for(let g in f)e.update(f[g],s.ARRAY_BUFFER);let d=h.morphAttributes;for(let g in d){let _=d[g];for(let m=0,p=_.length;m<p;m++)e.update(_[m],s.ARRAY_BUFFER)}}function l(h){let f=[],d=h.index,g=h.attributes.position,_=0;if(d!==null){let v=d.array;_=d.version;for(let x=0,M=v.length;x<M;x+=3){let I=v[x+0],A=v[x+1],b=v[x+2];f.push(I,A,A,b,b,I)}}else if(g!==void 0){let v=g.array;_=g.version;for(let x=0,M=v.length/3-1;x<M;x+=3){let I=x+0,A=x+1,b=x+2;f.push(I,A,A,b,b,I)}}else return;let m=new(Qf(f)?ga:ma)(f,1);m.version=_;let p=r.get(h);p&&e.remove(p),r.set(h,m)}function u(h){let f=r.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function Rx(s,e,t,n){let i=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function u(d,g){s.drawElements(r,g,a,d*c),t.update(g,r,1)}function h(d,g,_){if(_===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,_),t.update(g,r,_)}function f(d,g,_){if(_===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<_;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,_);let p=0;for(let v=0;v<_;v++)p+=g[v];t.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=f}function Cx(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Px(s,e){return s[0]-e[0]}function Lx(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Ix(s,e,t){let n={},i=new Float32Array(8),r=new WeakMap,o=new pt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,h){let f=l.morphTargetInfluences;if(e.isWebGL2===!0){let d=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=d!==void 0?d.length:0,_=r.get(u);if(_===void 0||_.count!==g){let U=function(){O.dispose(),r.delete(u),u.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();let v=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,M=u.morphAttributes.color!==void 0,I=u.morphAttributes.position||[],A=u.morphAttributes.normal||[],b=u.morphAttributes.color||[],F=0;v===!0&&(F=1),x===!0&&(F=2),M===!0&&(F=3);let S=u.attributes.position.count*F,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*E*4*g),O=new da(w,S,E,g);O.type=pi,O.needsUpdate=!0;let q=F*4;for(let B=0;B<g;B++){let W=I[B],re=A[B],se=b[B],j=S*E*4*B;for(let ce=0;ce<W.count;ce++){let de=ce*q;v===!0&&(o.fromBufferAttribute(W,ce),w[j+de+0]=o.x,w[j+de+1]=o.y,w[j+de+2]=o.z,w[j+de+3]=0),x===!0&&(o.fromBufferAttribute(re,ce),w[j+de+4]=o.x,w[j+de+5]=o.y,w[j+de+6]=o.z,w[j+de+7]=0),M===!0&&(o.fromBufferAttribute(se,ce),w[j+de+8]=o.x,w[j+de+9]=o.y,w[j+de+10]=o.z,w[j+de+11]=se.itemSize===4?o.w:1)}}_={count:g,texture:O,size:new me(S,E)},r.set(u,_),u.addEventListener("dispose",U)}let m=0;for(let v=0;v<f.length;v++)m+=f[v];let p=u.morphTargetsRelative?1:1-m;h.getUniforms().setValue(s,"morphTargetBaseInfluence",p),h.getUniforms().setValue(s,"morphTargetInfluences",f),h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}else{let d=f===void 0?0:f.length,g=n[u.id];if(g===void 0||g.length!==d){g=[];for(let x=0;x<d;x++)g[x]=[x,0];n[u.id]=g}for(let x=0;x<d;x++){let M=g[x];M[0]=x,M[1]=f[x]}g.sort(Lx);for(let x=0;x<8;x++)x<d&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Px);let _=u.morphAttributes.position,m=u.morphAttributes.normal,p=0;for(let x=0;x<8;x++){let M=a[x],I=M[0],A=M[1];I!==Number.MAX_SAFE_INTEGER&&A?(_&&u.getAttribute("morphTarget"+x)!==_[I]&&u.setAttribute("morphTarget"+x,_[I]),m&&u.getAttribute("morphNormal"+x)!==m[I]&&u.setAttribute("morphNormal"+x,m[I]),i[x]=A,p+=A):(_&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),m&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),i[x]=0)}let v=u.morphTargetsRelative?1:1-p;h.getUniforms().setValue(s,"morphTargetBaseInfluence",v),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Dx(s,e,t,n){let i=new WeakMap;function r(c){let l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==l&&(f.update(),i.set(f,l))}return h}function o(){i=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}var ya=class extends cn{constructor(e,t,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:cs,u!==cs&&u!==nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===cs&&(n=Ii),n===void 0&&u===nr&&(n=ls),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Yt,this.minFilter=c!==void 0?c:Yt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},id=new cn,sd=new ya(1,1);sd.compareFunction=Jf;var rd=new da,od=new sc,ad=new _a,$u=[],Ju=[],ju=new Float32Array(16),Qu=new Float32Array(9),ef=new Float32Array(4);function mr(s,e,t){let n=s[0];if(n<=0||n>0)return s;let i=e*t,r=$u[i];if(r===void 0&&(r=new Float32Array(i),$u[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function jt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Qt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Va(s,e){let t=Ju[e];t===void 0&&(t=new Int32Array(e),Ju[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function Nx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ux(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2fv(this.addr,e),Qt(t,e)}}function Ox(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(jt(t,e))return;s.uniform3fv(this.addr,e),Qt(t,e)}}function Fx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4fv(this.addr,e),Qt(t,e)}}function Bx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;ef.set(n),s.uniformMatrix2fv(this.addr,!1,ef),Qt(t,n)}}function zx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;Qu.set(n),s.uniformMatrix3fv(this.addr,!1,Qu),Qt(t,n)}}function Hx(s,e){let t=this.cache,n=e.elements;if(n===void 0){if(jt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Qt(t,e)}else{if(jt(t,n))return;ju.set(n),s.uniformMatrix4fv(this.addr,!1,ju),Qt(t,n)}}function kx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Gx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2iv(this.addr,e),Qt(t,e)}}function Vx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3iv(this.addr,e),Qt(t,e)}}function Wx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4iv(this.addr,e),Qt(t,e)}}function Xx(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function qx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(jt(t,e))return;s.uniform2uiv(this.addr,e),Qt(t,e)}}function Yx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(jt(t,e))return;s.uniform3uiv(this.addr,e),Qt(t,e)}}function Zx(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(jt(t,e))return;s.uniform4uiv(this.addr,e),Qt(t,e)}}function Kx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r=this.type===s.SAMPLER_2D_SHADOW?sd:id;t.setTexture2D(e||r,i)}function $x(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||od,i)}function Jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||ad,i)}function jx(s,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||rd,i)}function Qx(s){switch(s){case 5126:return Nx;case 35664:return Ux;case 35665:return Ox;case 35666:return Fx;case 35674:return Bx;case 35675:return zx;case 35676:return Hx;case 5124:case 35670:return kx;case 35667:case 35671:return Gx;case 35668:case 35672:return Vx;case 35669:case 35673:return Wx;case 5125:return Xx;case 36294:return qx;case 36295:return Yx;case 36296:return Zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Kx;case 35679:case 36299:case 36307:return $x;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return jx}}function e_(s,e){s.uniform1fv(this.addr,e)}function t_(s,e){let t=mr(e,this.size,2);s.uniform2fv(this.addr,t)}function n_(s,e){let t=mr(e,this.size,3);s.uniform3fv(this.addr,t)}function i_(s,e){let t=mr(e,this.size,4);s.uniform4fv(this.addr,t)}function s_(s,e){let t=mr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function r_(s,e){let t=mr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function o_(s,e){let t=mr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function a_(s,e){s.uniform1iv(this.addr,e)}function l_(s,e){s.uniform2iv(this.addr,e)}function c_(s,e){s.uniform3iv(this.addr,e)}function h_(s,e){s.uniform4iv(this.addr,e)}function u_(s,e){s.uniform1uiv(this.addr,e)}function f_(s,e){s.uniform2uiv(this.addr,e)}function d_(s,e){s.uniform3uiv(this.addr,e)}function p_(s,e){s.uniform4uiv(this.addr,e)}function m_(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||id,r[o])}function g_(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||od,r[o])}function x_(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||ad,r[o])}function __(s,e,t){let n=this.cache,i=e.length,r=Va(t,i);jt(n,r)||(s.uniform1iv(this.addr,r),Qt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||rd,r[o])}function y_(s){switch(s){case 5126:return e_;case 35664:return t_;case 35665:return n_;case 35666:return i_;case 35674:return s_;case 35675:return r_;case 35676:return o_;case 5124:case 35670:return a_;case 35667:case 35671:return l_;case 35668:case 35672:return c_;case 35669:case 35673:return h_;case 5125:return u_;case 36294:return f_;case 36295:return d_;case 36296:return p_;case 35678:case 36198:case 36298:case 36306:case 35682:return m_;case 35679:case 36299:case 36307:return g_;case 35680:case 36300:case 36308:case 36293:return x_;case 36289:case 36303:case 36311:case 36292:return __}}var ac=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Qx(t.type)}},lc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=y_(t.type)}},cc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(e,t[a.id],n)}}},Hl=/(\w+)(\])?(\[|\.)?/g;function tf(s,e){s.seq.push(e),s.map[e.id]=e}function v_(s,e,t){let n=s.name,i=n.length;for(Hl.lastIndex=0;;){let r=Hl.exec(n),o=Hl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){tf(t,l===void 0?new ac(a,s,e):new lc(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new cc(a),tf(t,h)),t=h}}}var js=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){let r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);v_(r,o,this)}}setValue(e,t,n,i){let r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,r=e.length;i!==r;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function nf(s,e,t){let n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}var M_=37297,S_=0;function E_(s,e){let t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function b_(s){let e=ut.getPrimaries(ut.workingColorSpace),t=ut.getPrimaries(s),n;switch(e===t?n="":e===la&&t===aa?n="LinearDisplayP3ToLinearSRGB":e===aa&&t===la&&(n="LinearSRGBToLinearDisplayP3"),s){case $t:case Ga:return[n,"LinearTransferOETF"];case gt:case $c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function sf(s,e,t){let n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";let r=/ERROR: 0:(\d+)/.exec(i);if(r){let o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+E_(s.getShaderSource(e),o)}else return i}function T_(s,e){let t=b_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function w_(s,e){let t;switch(e){case Vc:t="Linear";break;case Wc:t="Reinhard";break;case Xc:t="OptimizedCineon";break;case ao:t="ACESFilmic";break;case qc:t="AgX";break;case Dp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function A_(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zs).join(`
`)}function R_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Zs).join(`
`)}function C_(s){let e=[];for(let t in s){let n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function P_(s,e){let t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(e,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Zs(s){return s!==""}function rf(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function of(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var L_=/^[ \t]*#include +<([\w\d./]+)>/gm;function hc(s){return s.replace(L_,D_)}var I_=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function D_(s,e){let t=tt[e];if(t===void 0){let n=I_.get(e);if(n!==void 0)t=tt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return hc(t)}var N_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function af(s){return s.replace(N_,U_)}function U_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function lf(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function O_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bf?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Gc?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function F_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case er:case tr:e="ENVMAP_TYPE_CUBE";break;case Ha:e="ENVMAP_TYPE_CUBE_UV";break}return e}function B_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function z_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case zf:e="ENVMAP_BLENDING_MULTIPLY";break;case Lp:e="ENVMAP_BLENDING_MIX";break;case Ip:e="ENVMAP_BLENDING_ADD";break}return e}function H_(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function k_(s,e,t,n){let i=s.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=O_(t),l=F_(t),u=B_(t),h=z_(t),f=H_(t),d=t.isWebGL2?"":A_(t),g=R_(t),_=C_(r),m=i.createProgram(),p,v,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),p.length>0&&(p+=`
`),v=[d,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Zs).join(`
`),v.length>0&&(v+=`
`)):(p=[lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zs).join(`
`),v=[d,lf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ni?"#define TONE_MAPPING":"",t.toneMapping!==Ni?tt.tonemapping_pars_fragment:"",t.toneMapping!==Ni?w_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,T_("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zs).join(`
`)),o=hc(o),o=rf(o,t),o=of(o,t),a=hc(a),a=rf(a,t),a=of(a,t),o=af(o),a=af(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===wu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);let M=x+p+o,I=x+v+a,A=nf(i,i.VERTEX_SHADER,M),b=nf(i,i.FRAGMENT_SHADER,I);i.attachShader(m,A),i.attachShader(m,b),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function F(O){if(s.debug.checkShaderErrors){let q=i.getProgramInfoLog(m).trim(),U=i.getShaderInfoLog(A).trim(),B=i.getShaderInfoLog(b).trim(),W=!0,re=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,m,A,b);else{let se=sf(i,A,"vertex"),j=sf(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Program Info Log: `+q+`
`+se+`
`+j)}else q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",q):(U===""||B==="")&&(re=!1);re&&(O.diagnostics={runnable:W,programLog:q,vertexShader:{log:U,prefix:p},fragmentShader:{log:B,prefix:v}})}i.deleteShader(A),i.deleteShader(b),S=new js(i,m),E=P_(i,m)}let S;this.getUniforms=function(){return S===void 0&&F(this),S};let E;this.getAttributes=function(){return E===void 0&&F(this),E};let w=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=i.getProgramParameter(m,M_)),w},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=S_++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=A,this.fragmentShader=b,this}var G_=0,uc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new fc(e),t.set(e,n)),n}},fc=class{constructor(e){this.id=G_++,this.code=e,this.usedTimes=0}};function V_(s,e,t,n,i,r,o){let a=new pa,c=new uc,l=[],u=i.isWebGL2,h=i.logarithmicDepthBuffer,f=i.vertexTextures,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return S===0?"uv":`uv${S}`}function m(S,E,w,O,q){let U=O.fog,B=q.geometry,W=S.isMeshStandardMaterial?O.environment:null,re=(S.isMeshStandardMaterial?t:e).get(S.envMap||W),se=re&&re.mapping===Ha?re.image.height:null,j=g[S.type];S.precision!==null&&(d=i.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));let ce=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,de=ce!==void 0?ce.length:0,Se=0;B.morphAttributes.position!==void 0&&(Se=1),B.morphAttributes.normal!==void 0&&(Se=2),B.morphAttributes.color!==void 0&&(Se=3);let te,z,oe,le;if(j){let ft=jn[j];te=ft.vertexShader,z=ft.fragmentShader}else te=S.vertexShader,z=S.fragmentShader,c.update(S),oe=c.getVertexShaderID(S),le=c.getFragmentShaderID(S);let ne=s.getRenderTarget(),ve=q.isInstancedMesh===!0,Ee=q.isBatchedMesh===!0,H=!!S.map,J=!!S.matcap,D=!!re,ee=!!S.aoMap,Q=!!S.lightMap,ue=!!S.bumpMap,ie=!!S.normalMap,we=!!S.displacementMap,ge=!!S.emissiveMap,R=!!S.metalnessMap,T=!!S.roughnessMap,Y=S.anisotropy>0,he=S.clearcoat>0,pe=S.iridescence>0,Z=S.sheen>0,xe=S.transmission>0,_e=Y&&!!S.anisotropyMap,Me=he&&!!S.clearcoatMap,De=he&&!!S.clearcoatNormalMap,He=he&&!!S.clearcoatRoughnessMap,P=pe&&!!S.iridescenceMap,$=pe&&!!S.iridescenceThicknessMap,be=Z&&!!S.sheenColorMap,Re=Z&&!!S.sheenRoughnessMap,Pe=!!S.specularMap,Le=!!S.specularColorMap,ke=!!S.specularIntensityMap,et=xe&&!!S.transmissionMap,mt=xe&&!!S.thicknessMap,qe=!!S.gradientMap,Te=!!S.alphaMap,G=S.alphaTest>0,ae=!!S.alphaHash,fe=!!S.extensions,Oe=!!B.attributes.uv1,Ie=!!B.attributes.uv2,je=!!B.attributes.uv3,lt=Ni;return S.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(lt=s.toneMapping),{isWebGL2:u,shaderID:j,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:z,defines:S.defines,customVertexShaderID:oe,customFragmentShaderID:le,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ee,instancing:ve,instancingColor:ve&&q.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:ne===null?s.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$t,map:H,matcap:J,envMap:D,envMapMode:D&&re.mapping,envMapCubeUVHeight:se,aoMap:ee,lightMap:Q,bumpMap:ue,normalMap:ie,displacementMap:f&&we,emissiveMap:ge,normalMapObjectSpace:ie&&S.normalMapType===Kp,normalMapTangentSpace:ie&&S.normalMapType===$f,metalnessMap:R,roughnessMap:T,anisotropy:Y,anisotropyMap:_e,clearcoat:he,clearcoatMap:Me,clearcoatNormalMap:De,clearcoatRoughnessMap:He,iridescence:pe,iridescenceMap:P,iridescenceThicknessMap:$,sheen:Z,sheenColorMap:be,sheenRoughnessMap:Re,specularMap:Pe,specularColorMap:Le,specularIntensityMap:ke,transmission:xe,transmissionMap:et,thicknessMap:mt,gradientMap:qe,opaque:S.transparent===!1&&S.blending===$s,alphaMap:Te,alphaTest:G,alphaHash:ae,combine:S.combine,mapUv:H&&_(S.map.channel),aoMapUv:ee&&_(S.aoMap.channel),lightMapUv:Q&&_(S.lightMap.channel),bumpMapUv:ue&&_(S.bumpMap.channel),normalMapUv:ie&&_(S.normalMap.channel),displacementMapUv:we&&_(S.displacementMap.channel),emissiveMapUv:ge&&_(S.emissiveMap.channel),metalnessMapUv:R&&_(S.metalnessMap.channel),roughnessMapUv:T&&_(S.roughnessMap.channel),anisotropyMapUv:_e&&_(S.anisotropyMap.channel),clearcoatMapUv:Me&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:De&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:He&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:P&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:$&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:be&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(S.sheenRoughnessMap.channel),specularMapUv:Pe&&_(S.specularMap.channel),specularColorMapUv:Le&&_(S.specularColorMap.channel),specularIntensityMapUv:ke&&_(S.specularIntensityMap.channel),transmissionMapUv:et&&_(S.transmissionMap.channel),thicknessMapUv:mt&&_(S.thicknessMap.channel),alphaMapUv:Te&&_(S.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ie||Y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,vertexUv1s:Oe,vertexUv2s:Ie,vertexUv3s:je,pointsUvs:q.isPoints===!0&&!!B.attributes.uv&&(H||Te),fog:!!U,useFog:S.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:q.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Se,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:s.shadowMap.enabled&&w.length>0,shadowMapType:s.shadowMap.type,toneMapping:lt,useLegacyLights:s._useLegacyLights,decodeVideoTexture:H&&S.map.isVideoTexture===!0&&ut.getTransfer(S.map.colorSpace)===bt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Ft,flipSided:S.side===sn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:fe&&S.extensions.derivatives===!0,extensionFragDepth:fe&&S.extensions.fragDepth===!0,extensionDrawBuffers:fe&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:fe&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:fe&&S.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()}}function p(S){let E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(let w in S.defines)E.push(w),E.push(S.defines[w]);return S.isRawShaderMaterial===!1&&(v(E,S),x(E,S),E.push(s.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function v(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function x(S,E){a.disableAll(),E.isWebGL2&&a.enable(0),E.supportsVertexTextures&&a.enable(1),E.instancing&&a.enable(2),E.instancingColor&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),S.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.skinning&&a.enable(4),E.morphTargets&&a.enable(5),E.morphNormals&&a.enable(6),E.morphColors&&a.enable(7),E.premultipliedAlpha&&a.enable(8),E.shadowMapEnabled&&a.enable(9),E.useLegacyLights&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),S.push(a.mask)}function M(S){let E=g[S.type],w;if(E){let O=jn[E];w=$n.clone(O.uniforms)}else w=S.uniforms;return w}function I(S,E){let w;for(let O=0,q=l.length;O<q;O++){let U=l[O];if(U.cacheKey===E){w=U,++w.usedTimes;break}}return w===void 0&&(w=new k_(s,E,S,r),l.push(w)),w}function A(S){if(--S.usedTimes===0){let E=l.indexOf(S);l[E]=l[l.length-1],l.pop(),S.destroy()}}function b(S){c.remove(S)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:I,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:F}}function W_(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function X_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function cf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function hf(){let s=[],e=0,t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,f,d,g,_,m){let p=s[e];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},s[e]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):t.push(p)}function c(h,f,d,g,_,m){let p=o(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):t.unshift(p)}function l(h,f){t.length>1&&t.sort(h||X_),n.length>1&&n.sort(f||cf),i.length>1&&i.sort(f||cf)}function u(){for(let h=e,f=s.length;h<f;h++){let d=s[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function q_(){let s=new WeakMap;function e(n,i){let r=s.get(n),o;return r===void 0?(o=new hf,s.set(n,[o])):i>=r.length?(o=new hf,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Y_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Fe};break;case"SpotLight":t={position:new C,direction:new C,color:new Fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Fe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Fe,groundColor:new Fe};break;case"RectAreaLight":t={color:new Fe,position:new C,halfWidth:new C,halfHeight:new C};break}return s[e.id]=t,t}}}function Z_(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var K_=0;function $_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function J_(s,e){let t=new Y_,n=Z_(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new C);let r=new C,o=new Ve,a=new Ve;function c(u,h){let f=0,d=0,g=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let _=0,m=0,p=0,v=0,x=0,M=0,I=0,A=0,b=0,F=0,S=0;u.sort($_);let E=h===!0?Math.PI:1;for(let O=0,q=u.length;O<q;O++){let U=u[O],B=U.color,W=U.intensity,re=U.distance,se=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)f+=B.r*W*E,d+=B.g*W*E,g+=B.b*W*E;else if(U.isLightProbe){for(let j=0;j<9;j++)i.probe[j].addScaledVector(U.sh.coefficients[j],W);S++}else if(U.isDirectionalLight){let j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*E),U.castShadow){let ce=U.shadow,de=n.get(U);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,i.directionalShadow[_]=de,i.directionalShadowMap[_]=se,i.directionalShadowMatrix[_]=U.shadow.matrix,M++}i.directional[_]=j,_++}else if(U.isSpotLight){let j=t.get(U);j.position.setFromMatrixPosition(U.matrixWorld),j.color.copy(B).multiplyScalar(W*E),j.distance=re,j.coneCos=Math.cos(U.angle),j.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),j.decay=U.decay,i.spot[p]=j;let ce=U.shadow;if(U.map&&(i.spotLightMap[b]=U.map,b++,ce.updateMatrices(U),U.castShadow&&F++),i.spotLightMatrix[p]=ce.matrix,U.castShadow){let de=n.get(U);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,i.spotShadow[p]=de,i.spotShadowMap[p]=se,A++}p++}else if(U.isRectAreaLight){let j=t.get(U);j.color.copy(B).multiplyScalar(W),j.halfWidth.set(U.width*.5,0,0),j.halfHeight.set(0,U.height*.5,0),i.rectArea[v]=j,v++}else if(U.isPointLight){let j=t.get(U);if(j.color.copy(U.color).multiplyScalar(U.intensity*E),j.distance=U.distance,j.decay=U.decay,U.castShadow){let ce=U.shadow,de=n.get(U);de.shadowBias=ce.bias,de.shadowNormalBias=ce.normalBias,de.shadowRadius=ce.radius,de.shadowMapSize=ce.mapSize,de.shadowCameraNear=ce.camera.near,de.shadowCameraFar=ce.camera.far,i.pointShadow[m]=de,i.pointShadowMap[m]=se,i.pointShadowMatrix[m]=U.shadow.matrix,I++}i.point[m]=j,m++}else if(U.isHemisphereLight){let j=t.get(U);j.skyColor.copy(U.color).multiplyScalar(W*E),j.groundColor.copy(U.groundColor).multiplyScalar(W*E),i.hemi[x]=j,x++}}v>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_FLOAT_1,i.rectAreaLTC2=Ae.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=Ae.LTC_HALF_1,i.rectAreaLTC2=Ae.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=f,i.ambient[1]=d,i.ambient[2]=g;let w=i.hash;(w.directionalLength!==_||w.pointLength!==m||w.spotLength!==p||w.rectAreaLength!==v||w.hemiLength!==x||w.numDirectionalShadows!==M||w.numPointShadows!==I||w.numSpotShadows!==A||w.numSpotMaps!==b||w.numLightProbes!==S)&&(i.directional.length=_,i.spot.length=p,i.rectArea.length=v,i.point.length=m,i.hemi.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=I,i.pointShadowMap.length=I,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=I,i.spotLightMatrix.length=A+b-F,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=F,i.numLightProbes=S,w.directionalLength=_,w.pointLength=m,w.spotLength=p,w.rectAreaLength=v,w.hemiLength=x,w.numDirectionalShadows=M,w.numPointShadows=I,w.numSpotShadows=A,w.numSpotMaps=b,w.numLightProbes=S,i.version=K_++)}function l(u,h){let f=0,d=0,g=0,_=0,m=0,p=h.matrixWorldInverse;for(let v=0,x=u.length;v<x;v++){let M=u[v];if(M.isDirectionalLight){let I=i.directional[f];I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),f++}else if(M.isSpotLight){let I=i.spot[g];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(p),I.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),I.direction.sub(r),I.direction.transformDirection(p),g++}else if(M.isRectAreaLight){let I=i.rectArea[_];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(p),a.identity(),o.copy(M.matrixWorld),o.premultiply(p),a.extractRotation(o),I.halfWidth.set(M.width*.5,0,0),I.halfHeight.set(0,M.height*.5,0),I.halfWidth.applyMatrix4(a),I.halfHeight.applyMatrix4(a),_++}else if(M.isPointLight){let I=i.point[d];I.position.setFromMatrixPosition(M.matrixWorld),I.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){let I=i.hemi[m];I.direction.setFromMatrixPosition(M.matrixWorld),I.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:i}}function uf(s,e){let t=new J_(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(h){n.push(h)}function a(h){i.push(h)}function c(h){t.setup(n,h)}function l(h){t.setupView(n,h)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function j_(s,e){let t=new WeakMap;function n(r,o=0){let a=t.get(r),c;return a===void 0?(c=new uf(s,e),t.set(r,[c])):o>=a.length?(c=new uf(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}var dc=class extends bn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Yp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},pc=class extends bn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},Q_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ey=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ty(s,e,t){let n=new Xr,i=new me,r=new me,o=new pt,a=new dc({depthPacking:Zp}),c=new pc,l={},u=t.maxTextureSize,h={[Bn]:sn,[sn]:Bn,[Ft]:Ft},f=new Bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Q_,fragmentShader:ey}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Ct(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ze(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bf;let p=this.type;this.render=function(A,b,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;let S=s.getRenderTarget(),E=s.getActiveCubeFace(),w=s.getActiveMipmapLevel(),O=s.state;O.setBlending(ei),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let q=p!==di&&this.type===di,U=p===di&&this.type!==di;for(let B=0,W=A.length;B<W;B++){let re=A[B],se=re.shadow;if(se===void 0){console.warn("THREE.WebGLShadowMap:",re,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;i.copy(se.mapSize);let j=se.getFrameExtents();if(i.multiply(j),r.copy(se.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/j.x),i.x=r.x*j.x,se.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/j.y),i.y=r.y*j.y,se.mapSize.y=r.y)),se.map===null||q===!0||U===!0){let de=this.type!==di?{minFilter:Yt,magFilter:Yt}:{};se.map!==null&&se.map.dispose(),se.map=new Jt(i.x,i.y,de),se.map.texture.name=re.name+".shadowMap",se.camera.updateProjectionMatrix()}s.setRenderTarget(se.map),s.clear();let ce=se.getViewportCount();for(let de=0;de<ce;de++){let Se=se.getViewport(de);o.set(r.x*Se.x,r.y*Se.y,r.x*Se.z,r.y*Se.w),O.viewport(o),se.updateMatrices(re,de),n=se.getFrustum(),M(b,F,se.camera,re,this.type)}se.isPointLightShadow!==!0&&this.type===di&&v(se,F),se.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(S,E,w)};function v(A,b){let F=e.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,d.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jt(i.x,i.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,F,f,_,null),d.uniforms.shadow_pass.value=A.mapPass.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,F,d,_,null)}function x(A,b,F,S){let E=null,w=F.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(w!==void 0)E=w;else if(E=F.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){let O=E.uuid,q=b.uuid,U=l[O];U===void 0&&(U={},l[O]=U);let B=U[q];B===void 0&&(B=E.clone(),U[q]=B,b.addEventListener("dispose",I)),E=B}if(E.visible=b.visible,E.wireframe=b.wireframe,S===di?E.side=b.shadowSide!==null?b.shadowSide:b.side:E.side=b.shadowSide!==null?b.shadowSide:h[b.side],E.alphaMap=b.alphaMap,E.alphaTest=b.alphaTest,E.map=b.map,E.clipShadows=b.clipShadows,E.clippingPlanes=b.clippingPlanes,E.clipIntersection=b.clipIntersection,E.displacementMap=b.displacementMap,E.displacementScale=b.displacementScale,E.displacementBias=b.displacementBias,E.wireframeLinewidth=b.wireframeLinewidth,E.linewidth=b.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let O=s.properties.get(E);O.light=F}return E}function M(A,b,F,S,E){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===di)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,A.matrixWorld);let q=e.update(A),U=A.material;if(Array.isArray(U)){let B=q.groups;for(let W=0,re=B.length;W<re;W++){let se=B[W],j=U[se.materialIndex];if(j&&j.visible){let ce=x(A,j,S,E);A.onBeforeShadow(s,A,b,F,q,ce,se),s.renderBufferDirect(F,null,q,ce,A,se),A.onAfterShadow(s,A,b,F,q,ce,se)}}}else if(U.visible){let B=x(A,U,S,E);A.onBeforeShadow(s,A,b,F,q,B,null),s.renderBufferDirect(F,null,q,B,A,null),A.onAfterShadow(s,A,b,F,q,B,null)}}let O=A.children;for(let q=0,U=O.length;q<U;q++)M(O[q],b,F,S,E)}function I(A){A.target.removeEventListener("dispose",I);for(let F in l){let S=l[F],E=A.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}function ny(s,e,t){let n=t.isWebGL2;function i(){let G=!1,ae=new pt,fe=null,Oe=new pt(0,0,0,0);return{setMask:function(Ie){fe!==Ie&&!G&&(s.colorMask(Ie,Ie,Ie,Ie),fe=Ie)},setLocked:function(Ie){G=Ie},setClear:function(Ie,je,lt,Ke,ft){ft===!0&&(Ie*=Ke,je*=Ke,lt*=Ke),ae.set(Ie,je,lt,Ke),Oe.equals(ae)===!1&&(s.clearColor(Ie,je,lt,Ke),Oe.copy(ae))},reset:function(){G=!1,fe=null,Oe.set(-1,0,0,0)}}}function r(){let G=!1,ae=null,fe=null,Oe=null;return{setTest:function(Ie){Ie?Ee(s.DEPTH_TEST):H(s.DEPTH_TEST)},setMask:function(Ie){ae!==Ie&&!G&&(s.depthMask(Ie),ae=Ie)},setFunc:function(Ie){if(fe!==Ie){switch(Ie){case bp:s.depthFunc(s.NEVER);break;case Tp:s.depthFunc(s.ALWAYS);break;case wp:s.depthFunc(s.LESS);break;case ia:s.depthFunc(s.LEQUAL);break;case Ap:s.depthFunc(s.EQUAL);break;case Rp:s.depthFunc(s.GEQUAL);break;case Cp:s.depthFunc(s.GREATER);break;case Pp:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}fe=Ie}},setLocked:function(Ie){G=Ie},setClear:function(Ie){Oe!==Ie&&(s.clearDepth(Ie),Oe=Ie)},reset:function(){G=!1,ae=null,fe=null,Oe=null}}}function o(){let G=!1,ae=null,fe=null,Oe=null,Ie=null,je=null,lt=null,Ke=null,ft=null;return{setTest:function($e){G||($e?Ee(s.STENCIL_TEST):H(s.STENCIL_TEST))},setMask:function($e){ae!==$e&&!G&&(s.stencilMask($e),ae=$e)},setFunc:function($e,Et,gn){(fe!==$e||Oe!==Et||Ie!==gn)&&(s.stencilFunc($e,Et,gn),fe=$e,Oe=Et,Ie=gn)},setOp:function($e,Et,gn){(je!==$e||lt!==Et||Ke!==gn)&&(s.stencilOp($e,Et,gn),je=$e,lt=Et,Ke=gn)},setLocked:function($e){G=$e},setClear:function($e){ft!==$e&&(s.clearStencil($e),ft=$e)},reset:function(){G=!1,ae=null,fe=null,Oe=null,Ie=null,je=null,lt=null,Ke=null,ft=null}}}let a=new i,c=new r,l=new o,u=new WeakMap,h=new WeakMap,f={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,I=null,A=null,b=null,F=null,S=new Fe(0,0,0),E=0,w=!1,O=null,q=null,U=null,B=null,W=null,re=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),se=!1,j=0,ce=s.getParameter(s.VERSION);ce.indexOf("WebGL")!==-1?(j=parseFloat(/^WebGL (\d)/.exec(ce)[1]),se=j>=1):ce.indexOf("OpenGL ES")!==-1&&(j=parseFloat(/^OpenGL ES (\d)/.exec(ce)[1]),se=j>=2);let de=null,Se={},te=s.getParameter(s.SCISSOR_BOX),z=s.getParameter(s.VIEWPORT),oe=new pt().fromArray(te),le=new pt().fromArray(z);function ne(G,ae,fe,Oe){let Ie=new Uint8Array(4),je=s.createTexture();s.bindTexture(G,je),s.texParameteri(G,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(G,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let lt=0;lt<fe;lt++)n&&(G===s.TEXTURE_3D||G===s.TEXTURE_2D_ARRAY)?s.texImage3D(ae,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(ae+lt,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return je}let ve={};ve[s.TEXTURE_2D]=ne(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=ne(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ve[s.TEXTURE_2D_ARRAY]=ne(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=ne(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ee(s.DEPTH_TEST),c.setFunc(ia),ge(!1),R(Zh),Ee(s.CULL_FACE),ie(ei);function Ee(G){f[G]!==!0&&(s.enable(G),f[G]=!0)}function H(G){f[G]!==!1&&(s.disable(G),f[G]=!1)}function J(G,ae){return d[G]!==ae?(s.bindFramebuffer(G,ae),d[G]=ae,n&&(G===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=ae),G===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=ae)),!0):!1}function D(G,ae){let fe=_,Oe=!1;if(G)if(fe=g.get(ae),fe===void 0&&(fe=[],g.set(ae,fe)),G.isWebGLMultipleRenderTargets){let Ie=G.texture;if(fe.length!==Ie.length||fe[0]!==s.COLOR_ATTACHMENT0){for(let je=0,lt=Ie.length;je<lt;je++)fe[je]=s.COLOR_ATTACHMENT0+je;fe.length=Ie.length,Oe=!0}}else fe[0]!==s.COLOR_ATTACHMENT0&&(fe[0]=s.COLOR_ATTACHMENT0,Oe=!0);else fe[0]!==s.BACK&&(fe[0]=s.BACK,Oe=!0);Oe&&(t.isWebGL2?s.drawBuffers(fe):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(fe))}function ee(G){return m!==G?(s.useProgram(G),m=G,!0):!1}let Q={[rs]:s.FUNC_ADD,[cp]:s.FUNC_SUBTRACT,[hp]:s.FUNC_REVERSE_SUBTRACT};if(n)Q[Jh]=s.MIN,Q[jh]=s.MAX;else{let G=e.get("EXT_blend_minmax");G!==null&&(Q[Jh]=G.MIN_EXT,Q[jh]=G.MAX_EXT)}let ue={[up]:s.ZERO,[fp]:s.ONE,[dp]:s.SRC_COLOR,[$l]:s.SRC_ALPHA,[yp]:s.SRC_ALPHA_SATURATE,[xp]:s.DST_COLOR,[mp]:s.DST_ALPHA,[pp]:s.ONE_MINUS_SRC_COLOR,[Jl]:s.ONE_MINUS_SRC_ALPHA,[_p]:s.ONE_MINUS_DST_COLOR,[gp]:s.ONE_MINUS_DST_ALPHA,[vp]:s.CONSTANT_COLOR,[Mp]:s.ONE_MINUS_CONSTANT_COLOR,[Sp]:s.CONSTANT_ALPHA,[Ep]:s.ONE_MINUS_CONSTANT_ALPHA};function ie(G,ae,fe,Oe,Ie,je,lt,Ke,ft,$e){if(G===ei){p===!0&&(H(s.BLEND),p=!1);return}if(p===!1&&(Ee(s.BLEND),p=!0),G!==lp){if(G!==v||$e!==w){if((x!==rs||A!==rs)&&(s.blendEquation(s.FUNC_ADD),x=rs,A=rs),$e)switch(G){case $s:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFunc(s.ONE,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}else switch(G){case $s:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Qs:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Kh:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $h:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",G);break}M=null,I=null,b=null,F=null,S.set(0,0,0),E=0,v=G,w=$e}return}Ie=Ie||ae,je=je||fe,lt=lt||Oe,(ae!==x||Ie!==A)&&(s.blendEquationSeparate(Q[ae],Q[Ie]),x=ae,A=Ie),(fe!==M||Oe!==I||je!==b||lt!==F)&&(s.blendFuncSeparate(ue[fe],ue[Oe],ue[je],ue[lt]),M=fe,I=Oe,b=je,F=lt),(Ke.equals(S)===!1||ft!==E)&&(s.blendColor(Ke.r,Ke.g,Ke.b,ft),S.copy(Ke),E=ft),v=G,w=!1}function we(G,ae){G.side===Ft?H(s.CULL_FACE):Ee(s.CULL_FACE);let fe=G.side===sn;ae&&(fe=!fe),ge(fe),G.blending===$s&&G.transparent===!1?ie(ei):ie(G.blending,G.blendEquation,G.blendSrc,G.blendDst,G.blendEquationAlpha,G.blendSrcAlpha,G.blendDstAlpha,G.blendColor,G.blendAlpha,G.premultipliedAlpha),c.setFunc(G.depthFunc),c.setTest(G.depthTest),c.setMask(G.depthWrite),a.setMask(G.colorWrite);let Oe=G.stencilWrite;l.setTest(Oe),Oe&&(l.setMask(G.stencilWriteMask),l.setFunc(G.stencilFunc,G.stencilRef,G.stencilFuncMask),l.setOp(G.stencilFail,G.stencilZFail,G.stencilZPass)),Y(G.polygonOffset,G.polygonOffsetFactor,G.polygonOffsetUnits),G.alphaToCoverage===!0?Ee(s.SAMPLE_ALPHA_TO_COVERAGE):H(s.SAMPLE_ALPHA_TO_COVERAGE)}function ge(G){O!==G&&(G?s.frontFace(s.CW):s.frontFace(s.CCW),O=G)}function R(G){G!==op?(Ee(s.CULL_FACE),G!==q&&(G===Zh?s.cullFace(s.BACK):G===ap?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):H(s.CULL_FACE),q=G}function T(G){G!==U&&(se&&s.lineWidth(G),U=G)}function Y(G,ae,fe){G?(Ee(s.POLYGON_OFFSET_FILL),(B!==ae||W!==fe)&&(s.polygonOffset(ae,fe),B=ae,W=fe)):H(s.POLYGON_OFFSET_FILL)}function he(G){G?Ee(s.SCISSOR_TEST):H(s.SCISSOR_TEST)}function pe(G){G===void 0&&(G=s.TEXTURE0+re-1),de!==G&&(s.activeTexture(G),de=G)}function Z(G,ae,fe){fe===void 0&&(de===null?fe=s.TEXTURE0+re-1:fe=de);let Oe=Se[fe];Oe===void 0&&(Oe={type:void 0,texture:void 0},Se[fe]=Oe),(Oe.type!==G||Oe.texture!==ae)&&(de!==fe&&(s.activeTexture(fe),de=fe),s.bindTexture(G,ae||ve[G]),Oe.type=G,Oe.texture=ae)}function xe(){let G=Se[de];G!==void 0&&G.type!==void 0&&(s.bindTexture(G.type,null),G.type=void 0,G.texture=void 0)}function _e(){try{s.compressedTexImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function De(){try{s.texSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function He(){try{s.texSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function P(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function $(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function be(){try{s.texStorage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Re(){try{s.texStorage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Pe(){try{s.texImage2D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function Le(){try{s.texImage3D.apply(s,arguments)}catch(G){console.error("THREE.WebGLState:",G)}}function ke(G){oe.equals(G)===!1&&(s.scissor(G.x,G.y,G.z,G.w),oe.copy(G))}function et(G){le.equals(G)===!1&&(s.viewport(G.x,G.y,G.z,G.w),le.copy(G))}function mt(G,ae){let fe=h.get(ae);fe===void 0&&(fe=new WeakMap,h.set(ae,fe));let Oe=fe.get(G);Oe===void 0&&(Oe=s.getUniformBlockIndex(ae,G.name),fe.set(G,Oe))}function qe(G,ae){let Oe=h.get(ae).get(G);u.get(ae)!==Oe&&(s.uniformBlockBinding(ae,Oe,G.__bindingPointIndex),u.set(ae,Oe))}function Te(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),f={},de=null,Se={},d={},g=new WeakMap,_=[],m=null,p=!1,v=null,x=null,M=null,I=null,A=null,b=null,F=null,S=new Fe(0,0,0),E=0,w=!1,O=null,q=null,U=null,B=null,W=null,oe.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ee,disable:H,bindFramebuffer:J,drawBuffers:D,useProgram:ee,setBlending:ie,setMaterial:we,setFlipSided:ge,setCullFace:R,setLineWidth:T,setPolygonOffset:Y,setScissorTest:he,activeTexture:pe,bindTexture:Z,unbindTexture:xe,compressedTexImage2D:_e,compressedTexImage3D:Me,texImage2D:Pe,texImage3D:Le,updateUBOMapping:mt,uniformBlockBinding:qe,texStorage2D:be,texStorage3D:Re,texSubImage2D:De,texSubImage3D:He,compressedTexSubImage2D:P,compressedTexSubImage3D:$,scissor:ke,viewport:et,reset:Te}}function iy(s,e,t,n,i,r,o){let a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return d?new OffscreenCanvas(R,T):Wr("canvas")}function _(R,T,Y,he){let pe=1;if((R.width>he||R.height>he)&&(pe=he/Math.max(R.width,R.height)),pe<1||T===!0)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap){let Z=T?ha:Math.floor,xe=Z(pe*R.width),_e=Z(pe*R.height);h===void 0&&(h=g(xe,_e));let Me=Y?g(xe,_e):h;return Me.width=xe,Me.height=_e,Me.getContext("2d").drawImage(R,0,0,xe,_e),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+R.width+"x"+R.height+") to ("+xe+"x"+_e+")."),Me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+R.width+"x"+R.height+")."),R;return R}function m(R){return nc(R.width)&&nc(R.height)}function p(R){return a?!1:R.wrapS!==yn||R.wrapT!==yn||R.minFilter!==Yt&&R.minFilter!==an}function v(R,T){return R.generateMipmaps&&T&&R.minFilter!==Yt&&R.minFilter!==an}function x(R){s.generateMipmap(R)}function M(R,T,Y,he,pe=!1){if(a===!1)return T;if(R!==null){if(s[R]!==void 0)return s[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=T;if(T===s.RED&&(Y===s.FLOAT&&(Z=s.R32F),Y===s.HALF_FLOAT&&(Z=s.R16F),Y===s.UNSIGNED_BYTE&&(Z=s.R8)),T===s.RED_INTEGER&&(Y===s.UNSIGNED_BYTE&&(Z=s.R8UI),Y===s.UNSIGNED_SHORT&&(Z=s.R16UI),Y===s.UNSIGNED_INT&&(Z=s.R32UI),Y===s.BYTE&&(Z=s.R8I),Y===s.SHORT&&(Z=s.R16I),Y===s.INT&&(Z=s.R32I)),T===s.RG&&(Y===s.FLOAT&&(Z=s.RG32F),Y===s.HALF_FLOAT&&(Z=s.RG16F),Y===s.UNSIGNED_BYTE&&(Z=s.RG8)),T===s.RGBA){let xe=pe?oa:ut.getTransfer(he);Y===s.FLOAT&&(Z=s.RGBA32F),Y===s.HALF_FLOAT&&(Z=s.RGBA16F),Y===s.UNSIGNED_BYTE&&(Z=xe===bt?s.SRGB8_ALPHA8:s.RGBA8),Y===s.UNSIGNED_SHORT_4_4_4_4&&(Z=s.RGBA4),Y===s.UNSIGNED_SHORT_5_5_5_1&&(Z=s.RGB5_A1)}return(Z===s.R16F||Z===s.R32F||Z===s.RG16F||Z===s.RG32F||Z===s.RGBA16F||Z===s.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function I(R,T,Y){return v(R,Y)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==an?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){return R===Yt||R===sa||R===Ur?s.NEAREST:s.LINEAR}function b(R){let T=R.target;T.removeEventListener("dispose",b),S(T),T.isVideoTexture&&u.delete(T)}function F(R){let T=R.target;T.removeEventListener("dispose",F),w(T)}function S(R){let T=n.get(R);if(T.__webglInit===void 0)return;let Y=R.source,he=f.get(Y);if(he){let pe=he[T.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&E(R),Object.keys(he).length===0&&f.delete(Y)}n.remove(R)}function E(R){let T=n.get(R);s.deleteTexture(T.__webglTexture);let Y=R.source,he=f.get(Y);delete he[T.__cacheKey],o.memory.textures--}function w(R){let T=R.texture,Y=n.get(R),he=n.get(T);if(he.__webglTexture!==void 0&&(s.deleteTexture(he.__webglTexture),o.memory.textures--),R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Y.__webglFramebuffer[pe]))for(let Z=0;Z<Y.__webglFramebuffer[pe].length;Z++)s.deleteFramebuffer(Y.__webglFramebuffer[pe][Z]);else s.deleteFramebuffer(Y.__webglFramebuffer[pe]);Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer[pe])}else{if(Array.isArray(Y.__webglFramebuffer))for(let pe=0;pe<Y.__webglFramebuffer.length;pe++)s.deleteFramebuffer(Y.__webglFramebuffer[pe]);else s.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&s.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let pe=0;pe<Y.__webglColorRenderbuffer.length;pe++)Y.__webglColorRenderbuffer[pe]&&s.deleteRenderbuffer(Y.__webglColorRenderbuffer[pe]);Y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(R.isWebGLMultipleRenderTargets)for(let pe=0,Z=T.length;pe<Z;pe++){let xe=n.get(T[pe]);xe.__webglTexture&&(s.deleteTexture(xe.__webglTexture),o.memory.textures--),n.remove(T[pe])}n.remove(T),n.remove(R)}let O=0;function q(){O=0}function U(){let R=O;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),O+=1,R}function B(R){let T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function W(R,T){let Y=n.get(R);if(R.isVideoTexture&&we(R),R.isRenderTargetTexture===!1&&R.version>0&&Y.__version!==R.version){let he=R.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{oe(Y,R,T);return}}t.bindTexture(s.TEXTURE_2D,Y.__webglTexture,s.TEXTURE0+T)}function re(R,T){let Y=n.get(R);if(R.version>0&&Y.__version!==R.version){oe(Y,R,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,Y.__webglTexture,s.TEXTURE0+T)}function se(R,T){let Y=n.get(R);if(R.version>0&&Y.__version!==R.version){oe(Y,R,T);return}t.bindTexture(s.TEXTURE_3D,Y.__webglTexture,s.TEXTURE0+T)}function j(R,T){let Y=n.get(R);if(R.version>0&&Y.__version!==R.version){le(Y,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Y.__webglTexture,s.TEXTURE0+T)}let ce={[En]:s.REPEAT,[yn]:s.CLAMP_TO_EDGE,[Vr]:s.MIRRORED_REPEAT},de={[Yt]:s.NEAREST,[sa]:s.NEAREST_MIPMAP_NEAREST,[Ur]:s.NEAREST_MIPMAP_LINEAR,[an]:s.LINEAR,[Yc]:s.LINEAR_MIPMAP_NEAREST,[Oi]:s.LINEAR_MIPMAP_LINEAR},Se={[$p]:s.NEVER,[nm]:s.ALWAYS,[Jp]:s.LESS,[Jf]:s.LEQUAL,[jp]:s.EQUAL,[tm]:s.GEQUAL,[Qp]:s.GREATER,[em]:s.NOTEQUAL};function te(R,T,Y){if(Y?(s.texParameteri(R,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ce[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,de[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,de[T.minFilter])):(s.texParameteri(R,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(R,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(T.wrapS!==yn||T.wrapT!==yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(R,s.TEXTURE_MAG_FILTER,A(T.magFilter)),s.texParameteri(R,s.TEXTURE_MIN_FILTER,A(T.minFilter)),T.minFilter!==Yt&&T.minFilter!==an&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Se[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){let he=e.get("EXT_texture_filter_anisotropic");if(T.magFilter===Yt||T.minFilter!==Ur&&T.minFilter!==Oi||T.type===pi&&e.has("OES_texture_float_linear")===!1||a===!1&&T.type===vn&&e.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(R,he.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function z(R,T){let Y=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",b));let he=T.source,pe=f.get(he);pe===void 0&&(pe={},f.set(he,pe));let Z=B(T);if(Z!==R.__cacheKey){pe[Z]===void 0&&(pe[Z]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,Y=!0),pe[Z].usedTimes++;let xe=pe[R.__cacheKey];xe!==void 0&&(pe[R.__cacheKey].usedTimes--,xe.usedTimes===0&&E(T)),R.__cacheKey=Z,R.__webglTexture=pe[Z].texture}return Y}function oe(R,T,Y){let he=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(he=s.TEXTURE_3D);let pe=z(R,T),Z=T.source;t.bindTexture(he,R.__webglTexture,s.TEXTURE0+Y);let xe=n.get(Z);if(Z.version!==xe.__version||pe===!0){t.activeTexture(s.TEXTURE0+Y);let _e=ut.getPrimaries(ut.workingColorSpace),Me=T.colorSpace===ln?null:ut.getPrimaries(T.colorSpace),De=T.colorSpace===ln||_e===Me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,De);let He=p(T)&&m(T.image)===!1,P=_(T.image,He,!1,i.maxTextureSize);P=ge(T,P);let $=m(P)||a,be=r.convert(T.format,T.colorSpace),Re=r.convert(T.type),Pe=M(T.internalFormat,be,Re,T.colorSpace,T.isVideoTexture);te(he,T,$);let Le,ke=T.mipmaps,et=a&&T.isVideoTexture!==!0&&Pe!==Yf,mt=xe.__version===void 0||pe===!0,qe=I(T,P,$);if(T.isDepthTexture)Pe=s.DEPTH_COMPONENT,a?T.type===pi?Pe=s.DEPTH_COMPONENT32F:T.type===Ii?Pe=s.DEPTH_COMPONENT24:T.type===ls?Pe=s.DEPTH24_STENCIL8:Pe=s.DEPTH_COMPONENT16:T.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===cs&&Pe===s.DEPTH_COMPONENT&&T.type!==Zc&&T.type!==Ii&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Ii,Re=r.convert(T.type)),T.format===nr&&Pe===s.DEPTH_COMPONENT&&(Pe=s.DEPTH_STENCIL,T.type!==ls&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=ls,Re=r.convert(T.type))),mt&&(et?t.texStorage2D(s.TEXTURE_2D,1,Pe,P.width,P.height):t.texImage2D(s.TEXTURE_2D,0,Pe,P.width,P.height,0,be,Re,null));else if(T.isDataTexture)if(ke.length>0&&$){et&&mt&&t.texStorage2D(s.TEXTURE_2D,qe,Pe,ke[0].width,ke[0].height);for(let Te=0,G=ke.length;Te<G;Te++)Le=ke[Te],et?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,be,Re,Le.data):t.texImage2D(s.TEXTURE_2D,Te,Pe,Le.width,Le.height,0,be,Re,Le.data);T.generateMipmaps=!1}else et?(mt&&t.texStorage2D(s.TEXTURE_2D,qe,Pe,P.width,P.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,P.width,P.height,be,Re,P.data)):t.texImage2D(s.TEXTURE_2D,0,Pe,P.width,P.height,0,be,Re,P.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){et&&mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,qe,Pe,ke[0].width,ke[0].height,P.depth);for(let Te=0,G=ke.length;Te<G;Te++)Le=ke[Te],T.format!==On?be!==null?et?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,P.depth,be,Le.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Te,Pe,Le.width,Le.height,P.depth,0,Le.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage3D(s.TEXTURE_2D_ARRAY,Te,0,0,0,Le.width,Le.height,P.depth,be,Re,Le.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Te,Pe,Le.width,Le.height,P.depth,0,be,Re,Le.data)}else{et&&mt&&t.texStorage2D(s.TEXTURE_2D,qe,Pe,ke[0].width,ke[0].height);for(let Te=0,G=ke.length;Te<G;Te++)Le=ke[Te],T.format!==On?be!==null?et?t.compressedTexSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,be,Le.data):t.compressedTexImage2D(s.TEXTURE_2D,Te,Pe,Le.width,Le.height,0,Le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,Le.width,Le.height,be,Re,Le.data):t.texImage2D(s.TEXTURE_2D,Te,Pe,Le.width,Le.height,0,be,Re,Le.data)}else if(T.isDataArrayTexture)et?(mt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,qe,Pe,P.width,P.height,P.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,P.width,P.height,P.depth,be,Re,P.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Pe,P.width,P.height,P.depth,0,be,Re,P.data);else if(T.isData3DTexture)et?(mt&&t.texStorage3D(s.TEXTURE_3D,qe,Pe,P.width,P.height,P.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,P.width,P.height,P.depth,be,Re,P.data)):t.texImage3D(s.TEXTURE_3D,0,Pe,P.width,P.height,P.depth,0,be,Re,P.data);else if(T.isFramebufferTexture){if(mt)if(et)t.texStorage2D(s.TEXTURE_2D,qe,Pe,P.width,P.height);else{let Te=P.width,G=P.height;for(let ae=0;ae<qe;ae++)t.texImage2D(s.TEXTURE_2D,ae,Pe,Te,G,0,be,Re,null),Te>>=1,G>>=1}}else if(ke.length>0&&$){et&&mt&&t.texStorage2D(s.TEXTURE_2D,qe,Pe,ke[0].width,ke[0].height);for(let Te=0,G=ke.length;Te<G;Te++)Le=ke[Te],et?t.texSubImage2D(s.TEXTURE_2D,Te,0,0,be,Re,Le):t.texImage2D(s.TEXTURE_2D,Te,Pe,be,Re,Le);T.generateMipmaps=!1}else et?(mt&&t.texStorage2D(s.TEXTURE_2D,qe,Pe,P.width,P.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,be,Re,P)):t.texImage2D(s.TEXTURE_2D,0,Pe,be,Re,P);v(T,$)&&x(he),xe.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function le(R,T,Y){if(T.image.length!==6)return;let he=z(R,T),pe=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+Y);let Z=n.get(pe);if(pe.version!==Z.__version||he===!0){t.activeTexture(s.TEXTURE0+Y);let xe=ut.getPrimaries(ut.workingColorSpace),_e=T.colorSpace===ln?null:ut.getPrimaries(T.colorSpace),Me=T.colorSpace===ln||xe===_e?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);let De=T.isCompressedTexture||T.image[0].isCompressedTexture,He=T.image[0]&&T.image[0].isDataTexture,P=[];for(let Te=0;Te<6;Te++)!De&&!He?P[Te]=_(T.image[Te],!1,!0,i.maxCubemapSize):P[Te]=He?T.image[Te].image:T.image[Te],P[Te]=ge(T,P[Te]);let $=P[0],be=m($)||a,Re=r.convert(T.format,T.colorSpace),Pe=r.convert(T.type),Le=M(T.internalFormat,Re,Pe,T.colorSpace),ke=a&&T.isVideoTexture!==!0,et=Z.__version===void 0||he===!0,mt=I(T,$,be);te(s.TEXTURE_CUBE_MAP,T,be);let qe;if(De){ke&&et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Le,$.width,$.height);for(let Te=0;Te<6;Te++){qe=P[Te].mipmaps;for(let G=0;G<qe.length;G++){let ae=qe[G];T.format!==On?Re!==null?ke?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,ae.width,ae.height,Re,ae.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,Le,ae.width,ae.height,0,ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,0,0,ae.width,ae.height,Re,Pe,ae.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G,Le,ae.width,ae.height,0,Re,Pe,ae.data)}}}else{qe=T.mipmaps,ke&&et&&(qe.length>0&&mt++,t.texStorage2D(s.TEXTURE_CUBE_MAP,mt,Le,P[0].width,P[0].height));for(let Te=0;Te<6;Te++)if(He){ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,P[Te].width,P[Te].height,Re,Pe,P[Te].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Le,P[Te].width,P[Te].height,0,Re,Pe,P[Te].data);for(let G=0;G<qe.length;G++){let fe=qe[G].image[Te].image;ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,fe.width,fe.height,Re,Pe,fe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,Le,fe.width,fe.height,0,Re,Pe,fe.data)}}else{ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,0,0,Re,Pe,P[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,0,Le,Re,Pe,P[Te]);for(let G=0;G<qe.length;G++){let ae=qe[G];ke?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,0,0,Re,Pe,ae.image[Te]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Te,G+1,Le,Re,Pe,ae.image[Te])}}}v(T,be)&&x(s.TEXTURE_CUBE_MAP),Z.__version=pe.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ne(R,T,Y,he,pe,Z){let xe=r.convert(Y.format,Y.colorSpace),_e=r.convert(Y.type),Me=M(Y.internalFormat,xe,_e,Y.colorSpace);if(!n.get(T).__hasExternalTextures){let He=Math.max(1,T.width>>Z),P=Math.max(1,T.height>>Z);pe===s.TEXTURE_3D||pe===s.TEXTURE_2D_ARRAY?t.texImage3D(pe,Z,Me,He,P,T.depth,0,xe,_e,null):t.texImage2D(pe,Z,Me,He,P,0,xe,_e,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ie(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,pe,n.get(Y).__webglTexture,0,ue(T)):(pe===s.TEXTURE_2D||pe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,pe,n.get(Y).__webglTexture,Z),t.bindFramebuffer(s.FRAMEBUFFER,null)}function ve(R,T,Y){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer&&!T.stencilBuffer){let he=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(Y||ie(T)){let pe=T.depthTexture;pe&&pe.isDepthTexture&&(pe.type===pi?he=s.DEPTH_COMPONENT32F:pe.type===Ii&&(he=s.DEPTH_COMPONENT24));let Z=ue(T);ie(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,he,T.width,T.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,he,T.width,T.height)}else s.renderbufferStorage(s.RENDERBUFFER,he,T.width,T.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,R)}else if(T.depthBuffer&&T.stencilBuffer){let he=ue(T);Y&&ie(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,T.width,T.height):ie(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,s.DEPTH24_STENCIL8,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,R)}else{let he=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let pe=0;pe<he.length;pe++){let Z=he[pe],xe=r.convert(Z.format,Z.colorSpace),_e=r.convert(Z.type),Me=M(Z.internalFormat,xe,_e,Z.colorSpace),De=ue(T);Y&&ie(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,De,Me,T.width,T.height):ie(T)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,De,Me,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Me,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),W(T.depthTexture,0);let he=n.get(T.depthTexture).__webglTexture,pe=ue(T);if(T.depthTexture.format===cs)ie(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,he,0);else if(T.depthTexture.format===nr)ie(T)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,he,0);else throw new Error("Unknown depthTexture format")}function H(R){let T=n.get(R),Y=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Ee(T.__webglFramebuffer,R)}else if(Y){T.__webglDepthbuffer=[];for(let he=0;he<6;he++)t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[he]),T.__webglDepthbuffer[he]=s.createRenderbuffer(),ve(T.__webglDepthbuffer[he],R,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),ve(T.__webglDepthbuffer,R,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function J(R,T,Y){let he=n.get(R);T!==void 0&&ne(he.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Y!==void 0&&H(R)}function D(R){let T=R.texture,Y=n.get(R),he=n.get(T);R.addEventListener("dispose",F),R.isWebGLMultipleRenderTargets!==!0&&(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=T.version,o.memory.textures++);let pe=R.isWebGLCubeRenderTarget===!0,Z=R.isWebGLMultipleRenderTargets===!0,xe=m(R)||a;if(pe){Y.__webglFramebuffer=[];for(let _e=0;_e<6;_e++)if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer[_e]=[];for(let Me=0;Me<T.mipmaps.length;Me++)Y.__webglFramebuffer[_e][Me]=s.createFramebuffer()}else Y.__webglFramebuffer[_e]=s.createFramebuffer()}else{if(a&&T.mipmaps&&T.mipmaps.length>0){Y.__webglFramebuffer=[];for(let _e=0;_e<T.mipmaps.length;_e++)Y.__webglFramebuffer[_e]=s.createFramebuffer()}else Y.__webglFramebuffer=s.createFramebuffer();if(Z)if(i.drawBuffers){let _e=R.texture;for(let Me=0,De=_e.length;Me<De;Me++){let He=n.get(_e[Me]);He.__webglTexture===void 0&&(He.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&R.samples>0&&ie(R)===!1){let _e=Z?T:[T];Y.__webglMultisampledFramebuffer=s.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let Me=0;Me<_e.length;Me++){let De=_e[Me];Y.__webglColorRenderbuffer[Me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Y.__webglColorRenderbuffer[Me]);let He=r.convert(De.format,De.colorSpace),P=r.convert(De.type),$=M(De.internalFormat,He,P,De.colorSpace,R.isXRRenderTarget===!0),be=ue(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,be,$,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Me,s.RENDERBUFFER,Y.__webglColorRenderbuffer[Me])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(Y.__webglDepthRenderbuffer=s.createRenderbuffer(),ve(Y.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pe){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),te(s.TEXTURE_CUBE_MAP,T,xe);for(let _e=0;_e<6;_e++)if(a&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)ne(Y.__webglFramebuffer[_e][Me],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Me);else ne(Y.__webglFramebuffer[_e],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0);v(T,xe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Z){let _e=R.texture;for(let Me=0,De=_e.length;Me<De;Me++){let He=_e[Me],P=n.get(He);t.bindTexture(s.TEXTURE_2D,P.__webglTexture),te(s.TEXTURE_2D,He,xe),ne(Y.__webglFramebuffer,R,He,s.COLOR_ATTACHMENT0+Me,s.TEXTURE_2D,0),v(He,xe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let _e=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(a?_e=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(_e,he.__webglTexture),te(_e,T,xe),a&&T.mipmaps&&T.mipmaps.length>0)for(let Me=0;Me<T.mipmaps.length;Me++)ne(Y.__webglFramebuffer[Me],R,T,s.COLOR_ATTACHMENT0,_e,Me);else ne(Y.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,_e,0);v(T,xe)&&x(_e),t.unbindTexture()}R.depthBuffer&&H(R)}function ee(R){let T=m(R)||a,Y=R.isWebGLMultipleRenderTargets===!0?R.texture:[R.texture];for(let he=0,pe=Y.length;he<pe;he++){let Z=Y[he];if(v(Z,T)){let xe=R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,_e=n.get(Z).__webglTexture;t.bindTexture(xe,_e),x(xe),t.unbindTexture()}}}function Q(R){if(a&&R.samples>0&&ie(R)===!1){let T=R.isWebGLMultipleRenderTargets?R.texture:[R.texture],Y=R.width,he=R.height,pe=s.COLOR_BUFFER_BIT,Z=[],xe=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,_e=n.get(R),Me=R.isWebGLMultipleRenderTargets===!0;if(Me)for(let De=0;De<T.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,_e.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglFramebuffer);for(let De=0;De<T.length;De++){Z.push(s.COLOR_ATTACHMENT0+De),R.depthBuffer&&Z.push(xe);let He=_e.__ignoreDepthValues!==void 0?_e.__ignoreDepthValues:!1;if(He===!1&&(R.depthBuffer&&(pe|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&(pe|=s.STENCIL_BUFFER_BIT)),Me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,_e.__webglColorRenderbuffer[De]),He===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[xe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[xe])),Me){let P=n.get(T[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,P,0)}s.blitFramebuffer(0,0,Y,he,0,0,Y,he,pe,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Z)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Me)for(let De=0;De<T.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,_e.__webglColorRenderbuffer[De]);let He=n.get(T[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,_e.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,He,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,_e.__webglMultisampledFramebuffer)}}function ue(R){return Math.min(i.maxSamples,R.samples)}function ie(R){let T=n.get(R);return a&&R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function we(R){let T=o.render.frame;u.get(R)!==T&&(u.set(R,T),R.update())}function ge(R,T){let Y=R.colorSpace,he=R.format,pe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||R.format===tc||Y!==$t&&Y!==ln&&(ut.getTransfer(Y)===bt?a===!1?e.has("EXT_sRGB")===!0&&he===On?(R.format=tc,R.minFilter=an,R.generateMipmaps=!1):T=ua.sRGBToLinear(T):(he!==On||pe!==Ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),T}this.allocateTextureUnit=U,this.resetTextureUnits=q,this.setTexture2D=W,this.setTexture2DArray=re,this.setTexture3D=se,this.setTextureCube=j,this.rebindTextures=J,this.setupRenderTarget=D,this.updateRenderTargetMipmap=ee,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=H,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=ie}function sy(s,e,t){let n=t.isWebGL2;function i(r,o=ln){let a,c=ut.getTransfer(o);if(r===Ui)return s.UNSIGNED_BYTE;if(r===Gf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Vf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Up)return s.BYTE;if(r===Op)return s.SHORT;if(r===Zc)return s.UNSIGNED_SHORT;if(r===kf)return s.INT;if(r===Ii)return s.UNSIGNED_INT;if(r===pi)return s.FLOAT;if(r===vn)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===Fp)return s.ALPHA;if(r===On)return s.RGBA;if(r===Bp)return s.LUMINANCE;if(r===zp)return s.LUMINANCE_ALPHA;if(r===cs)return s.DEPTH_COMPONENT;if(r===nr)return s.DEPTH_STENCIL;if(r===tc)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Hp)return s.RED;if(r===Wf)return s.RED_INTEGER;if(r===kp)return s.RG;if(r===Xf)return s.RG_INTEGER;if(r===qf)return s.RGBA_INTEGER;if(r===dl||r===pl||r===ml||r===gl)if(c===bt)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===dl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===pl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===gl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===dl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===pl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===ml)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===gl)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===eu||r===tu||r===nu||r===iu)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===eu)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===tu)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===nu)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===iu)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Yf)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===su||r===ru)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===su)return c===bt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ru)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===ou||r===au||r===lu||r===cu||r===hu||r===uu||r===fu||r===du||r===pu||r===mu||r===gu||r===xu||r===_u||r===yu)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===ou)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===au)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===lu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===cu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===hu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===uu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===fu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===du)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===pu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===mu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===gu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===xu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===_u)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===yu)return c===bt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===xl||r===vu||r===Mu)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===xl)return c===bt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vu)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Mu)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Gp||r===Su||r===Eu||r===bu)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===xl)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Su)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Eu)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bu)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ls?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}var mc=class extends Gt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},Ye=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},ry={type:"move"},zr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ye,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ye,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ye,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let _ of e.hand.values()){let m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ry)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ye;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},gc=class extends gi{constructor(e,t){super();let n=this,i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,f=null,d=null,g=null,_=t.getContextAttributes(),m=null,p=null,v=[],x=[],M=new me,I=null,A=new Gt;A.layers.enable(1),A.viewport=new pt;let b=new Gt;b.layers.enable(2),b.viewport=new pt;let F=[A,b],S=new mc;S.layers.enable(1),S.layers.enable(2);let E=null,w=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let z=v[te];return z===void 0&&(z=new zr,v[te]=z),z.getTargetRaySpace()},this.getControllerGrip=function(te){let z=v[te];return z===void 0&&(z=new zr,v[te]=z),z.getGripSpace()},this.getHand=function(te){let z=v[te];return z===void 0&&(z=new zr,v[te]=z),z.getHandSpace()};function O(te){let z=x.indexOf(te.inputSource);if(z===-1)return;let oe=v[z];oe!==void 0&&(oe.update(te.inputSource,te.frame,l||o),oe.dispatchEvent({type:te.type,data:te.inputSource}))}function q(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",U);for(let te=0;te<v.length;te++){let z=x[te];z!==null&&(x[te]=null,v[te].disconnect(z))}E=null,w=null,e.setRenderTarget(m),d=null,f=null,h=null,i=null,p=null,Se.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(M.width,M.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){r=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(te){l=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(m=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",q),i.addEventListener("inputsourceschange",U),_.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(M),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){let z={antialias:i.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,t,z),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Jt(d.framebufferWidth,d.framebufferHeight,{format:On,type:Ui,colorSpace:e.outputColorSpace,stencilBuffer:_.stencil})}else{let z=null,oe=null,le=null;_.depth&&(le=_.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,z=_.stencil?nr:cs,oe=_.stencil?ls:Ii);let ne={colorFormat:t.RGBA8,depthFormat:le,scaleFactor:r};h=new XRWebGLBinding(i,t),f=h.createProjectionLayer(ne),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),p=new Jt(f.textureWidth,f.textureHeight,{format:On,type:Ui,depthTexture:new ya(f.textureWidth,f.textureHeight,oe,void 0,void 0,void 0,void 0,void 0,void 0,z),stencilBuffer:_.stencil,colorSpace:e.outputColorSpace,samples:_.antialias?4:0});let ve=e.properties.get(p);ve.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),Se.setContext(i),Se.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function U(te){for(let z=0;z<te.removed.length;z++){let oe=te.removed[z],le=x.indexOf(oe);le>=0&&(x[le]=null,v[le].disconnect(oe))}for(let z=0;z<te.added.length;z++){let oe=te.added[z],le=x.indexOf(oe);if(le===-1){for(let ve=0;ve<v.length;ve++)if(ve>=x.length){x.push(oe),le=ve;break}else if(x[ve]===null){x[ve]=oe,le=ve;break}if(le===-1)break}let ne=v[le];ne&&ne.connect(oe)}}let B=new C,W=new C;function re(te,z,oe){B.setFromMatrixPosition(z.matrixWorld),W.setFromMatrixPosition(oe.matrixWorld);let le=B.distanceTo(W),ne=z.projectionMatrix.elements,ve=oe.projectionMatrix.elements,Ee=ne[14]/(ne[10]-1),H=ne[14]/(ne[10]+1),J=(ne[9]+1)/ne[5],D=(ne[9]-1)/ne[5],ee=(ne[8]-1)/ne[0],Q=(ve[8]+1)/ve[0],ue=Ee*ee,ie=Ee*Q,we=le/(-ee+Q),ge=we*-ee;z.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(ge),te.translateZ(we),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert();let R=Ee+we,T=H+we,Y=ue-ge,he=ie+(le-ge),pe=J*H/T*R,Z=D*H/T*R;te.projectionMatrix.makePerspective(Y,he,pe,Z,R,T),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}function se(te,z){z===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(z.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;S.near=b.near=A.near=te.near,S.far=b.far=A.far=te.far,(E!==S.near||w!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),E=S.near,w=S.far);let z=te.parent,oe=S.cameras;se(S,z);for(let le=0;le<oe.length;le++)se(oe[le],z);oe.length===2?re(S,A,b):S.projectionMatrix.copy(A.projectionMatrix),j(te,S,z)};function j(te,z,oe){oe===null?te.matrix.copy(z.matrixWorld):(te.matrix.copy(oe.matrixWorld),te.matrix.invert(),te.matrix.multiply(z.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(z.projectionMatrix),te.projectionMatrixInverse.copy(z.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=sr*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(te){c=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)};let ce=null;function de(te,z){if(u=z.getViewerPose(l||o),g=z,u!==null){let oe=u.views;d!==null&&(e.setRenderTargetFramebuffer(p,d.framebuffer),e.setRenderTarget(p));let le=!1;oe.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let ne=0;ne<oe.length;ne++){let ve=oe[ne],Ee=null;if(d!==null)Ee=d.getViewport(ve);else{let J=h.getViewSubImage(f,ve);Ee=J.viewport,ne===0&&(e.setRenderTargetTextures(p,J.colorTexture,f.ignoreDepthValues?void 0:J.depthStencilTexture),e.setRenderTarget(p))}let H=F[ne];H===void 0&&(H=new Gt,H.layers.enable(ne),H.viewport=new pt,F[ne]=H),H.matrix.fromArray(ve.transform.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale),H.projectionMatrix.fromArray(ve.projectionMatrix),H.projectionMatrixInverse.copy(H.projectionMatrix).invert(),H.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),ne===0&&(S.matrix.copy(H.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(H)}}for(let oe=0;oe<v.length;oe++){let le=x[oe],ne=v[oe];le!==null&&ne!==void 0&&ne.update(le,z,l||o)}ce&&ce(te,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),g=null}let Se=new nd;Se.setAnimationLoop(de),this.setAnimationLoop=function(te){ce=te},this.dispose=function(){}}};function oy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,td(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,v,x,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,M)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,v,x):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===sn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===sn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p).envMap;if(v&&(m.envMap.value=v,m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let x=s._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*x,t(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,x){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=x*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===sn&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ay(s,e,t,n){let i={},r={},o=[],a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(v,x){let M=x.program;n.uniformBlockBinding(v,M)}function l(v,x){let M=i[v.id];M===void 0&&(g(v),M=u(v),i[v.id]=M,v.addEventListener("dispose",m));let I=x.program;n.updateUBOMapping(v,I);let A=e.render.frame;r[v.id]!==A&&(f(v),r[v.id]=A)}function u(v){let x=h();v.__bindingPointIndex=x;let M=s.createBuffer(),I=v.__size,A=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,I,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,M),M}function h(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){let x=i[v.id],M=v.uniforms,I=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,b=M.length;A<b;A++){let F=Array.isArray(M[A])?M[A]:[M[A]];for(let S=0,E=F.length;S<E;S++){let w=F[S];if(d(w,A,S,I)===!0){let O=w.__offset,q=Array.isArray(w.value)?w.value:[w.value],U=0;for(let B=0;B<q.length;B++){let W=q[B],re=_(W);typeof W=="number"||typeof W=="boolean"?(w.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,O+U,w.__data)):W.isMatrix3?(w.__data[0]=W.elements[0],w.__data[1]=W.elements[1],w.__data[2]=W.elements[2],w.__data[3]=0,w.__data[4]=W.elements[3],w.__data[5]=W.elements[4],w.__data[6]=W.elements[5],w.__data[7]=0,w.__data[8]=W.elements[6],w.__data[9]=W.elements[7],w.__data[10]=W.elements[8],w.__data[11]=0):(W.toArray(w.__data,U),U+=re.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,O,w.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function d(v,x,M,I){let A=v.value,b=x+"_"+M;if(I[b]===void 0)return typeof A=="number"||typeof A=="boolean"?I[b]=A:I[b]=A.clone(),!0;{let F=I[b];if(typeof A=="number"||typeof A=="boolean"){if(F!==A)return I[b]=A,!0}else if(F.equals(A)===!1)return F.copy(A),!0}return!1}function g(v){let x=v.uniforms,M=0,I=16;for(let b=0,F=x.length;b<F;b++){let S=Array.isArray(x[b])?x[b]:[x[b]];for(let E=0,w=S.length;E<w;E++){let O=S[E],q=Array.isArray(O.value)?O.value:[O.value];for(let U=0,B=q.length;U<B;U++){let W=q[U],re=_(W),se=M%I;se!==0&&I-se<re.boundary&&(M+=I-se),O.__data=new Float32Array(re.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=M,M+=re.storage}}}let A=M%I;return A>0&&(M+=I-A),v.__size=M,v.__cache={},this}function _(v){let x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function m(v){let x=v.target;x.removeEventListener("dispose",m);let M=o.indexOf(x.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function p(){for(let v in i)s.deleteBuffer(i[v]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}var qr=class{constructor(e={}){let{canvas:t=xm(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,p=[],v=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=gt,this._useLegacyLights=!1,this.toneMapping=Ni,this.toneMappingExposure=1;let x=this,M=!1,I=0,A=0,b=null,F=-1,S=null,E=new pt,w=new pt,O=null,q=new Fe(0),U=0,B=t.width,W=t.height,re=1,se=null,j=null,ce=new pt(0,0,B,W),de=new pt(0,0,B,W),Se=!1,te=new Xr,z=!1,oe=!1,le=null,ne=new Ve,ve=new me,Ee=new C,H={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function J(){return b===null?re:1}let D=n;function ee(L,y){for(let N=0;N<L.length;N++){let k=L[N],V=t.getContext(k,y);if(V!==null)return V}return null}try{let L={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${kc}`),t.addEventListener("webglcontextlost",Te,!1),t.addEventListener("webglcontextrestored",G,!1),t.addEventListener("webglcontextcreationerror",ae,!1),D===null){let y=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&y.shift(),D=ee(y,L),D===null)throw ee(y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&D instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),D.getShaderPrecisionFormat===void 0&&(D.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let Q,ue,ie,we,ge,R,T,Y,he,pe,Z,xe,_e,Me,De,He,P,$,be,Re,Pe,Le,ke,et;function mt(){Q=new wx(D),ue=new vx(D,Q,e),Q.init(ue),Le=new sy(D,Q,ue),ie=new ny(D,Q,ue),we=new Cx(D),ge=new W_,R=new iy(D,Q,ie,ge,ue,Le,we),T=new Sx(x),Y=new Tx(x),he=new Fm(D,ue),ke=new _x(D,Q,he,ue),pe=new Ax(D,he,we,ke),Z=new Dx(D,pe,he,we),be=new Ix(D,ue,R),He=new Mx(ge),xe=new V_(x,T,Y,Q,ue,ke,He),_e=new oy(x,ge),Me=new q_,De=new j_(Q,ue),$=new xx(x,T,Y,ie,Z,f,c),P=new ty(x,Z,ue),et=new ay(D,we,ue,ie),Re=new yx(D,Q,we,ue),Pe=new Rx(D,Q,we,ue),we.programs=xe.programs,x.capabilities=ue,x.extensions=Q,x.properties=ge,x.renderLists=Me,x.shadowMap=P,x.state=ie,x.info=we}mt();let qe=new gc(x,D);this.xr=qe,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let L=Q.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){let L=Q.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(L){L!==void 0&&(re=L,this.setSize(B,W,!1))},this.getSize=function(L){return L.set(B,W)},this.setSize=function(L,y,N=!0){if(qe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=L,W=y,t.width=Math.floor(L*re),t.height=Math.floor(y*re),N===!0&&(t.style.width=L+"px",t.style.height=y+"px"),this.setViewport(0,0,L,y)},this.getDrawingBufferSize=function(L){return L.set(B*re,W*re).floor()},this.setDrawingBufferSize=function(L,y,N){B=L,W=y,re=N,t.width=Math.floor(L*N),t.height=Math.floor(y*N),this.setViewport(0,0,L,y)},this.getCurrentViewport=function(L){return L.copy(E)},this.getViewport=function(L){return L.copy(ce)},this.setViewport=function(L,y,N,k){L.isVector4?ce.set(L.x,L.y,L.z,L.w):ce.set(L,y,N,k),ie.viewport(E.copy(ce).multiplyScalar(re).floor())},this.getScissor=function(L){return L.copy(de)},this.setScissor=function(L,y,N,k){L.isVector4?de.set(L.x,L.y,L.z,L.w):de.set(L,y,N,k),ie.scissor(w.copy(de).multiplyScalar(re).floor())},this.getScissorTest=function(){return Se},this.setScissorTest=function(L){ie.setScissorTest(Se=L)},this.setOpaqueSort=function(L){se=L},this.setTransparentSort=function(L){j=L},this.getClearColor=function(L){return L.copy($.getClearColor())},this.setClearColor=function(){$.setClearColor.apply($,arguments)},this.getClearAlpha=function(){return $.getClearAlpha()},this.setClearAlpha=function(){$.setClearAlpha.apply($,arguments)},this.clear=function(L=!0,y=!0,N=!0){let k=0;if(L){let V=!1;if(b!==null){let ye=b.texture.format;V=ye===qf||ye===Xf||ye===Wf}if(V){let ye=b.texture.type,Ce=ye===Ui||ye===Ii||ye===Zc||ye===ls||ye===Gf||ye===Vf,Ne=$.getClearColor(),Ze=$.getClearAlpha(),nt=Ne.r,Je=Ne.g,Qe=Ne.b;Ce?(d[0]=nt,d[1]=Je,d[2]=Qe,d[3]=Ze,D.clearBufferuiv(D.COLOR,0,d)):(g[0]=nt,g[1]=Je,g[2]=Qe,g[3]=Ze,D.clearBufferiv(D.COLOR,0,g))}else k|=D.COLOR_BUFFER_BIT}y&&(k|=D.DEPTH_BUFFER_BIT),N&&(k|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Te,!1),t.removeEventListener("webglcontextrestored",G,!1),t.removeEventListener("webglcontextcreationerror",ae,!1),Me.dispose(),De.dispose(),ge.dispose(),T.dispose(),Y.dispose(),Z.dispose(),ke.dispose(),et.dispose(),xe.dispose(),qe.dispose(),qe.removeEventListener("sessionstart",ft),qe.removeEventListener("sessionend",$e),le&&(le.dispose(),le=null),Et.stop()};function Te(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function G(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;let L=we.autoReset,y=P.enabled,N=P.autoUpdate,k=P.needsUpdate,V=P.type;mt(),we.autoReset=L,P.enabled=y,P.autoUpdate=N,P.needsUpdate=k,P.type=V}function ae(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function fe(L){let y=L.target;y.removeEventListener("dispose",fe),Oe(y)}function Oe(L){Ie(L),ge.remove(L)}function Ie(L){let y=ge.get(L).programs;y!==void 0&&(y.forEach(function(N){xe.releaseProgram(N)}),L.isShaderMaterial&&xe.releaseShaderCache(L))}this.renderBufferDirect=function(L,y,N,k,V,ye){y===null&&(y=H);let Ce=V.isMesh&&V.matrixWorld.determinant()<0,Ne=So(L,y,N,k,V);ie.setMaterial(k,Ce);let Ze=N.index,nt=1;if(k.wireframe===!0){if(Ze=pe.getWireframeAttribute(N),Ze===void 0)return;nt=2}let Je=N.drawRange,Qe=N.attributes.position,kt=Je.start*nt,Rn=(Je.start+Je.count)*nt;ye!==null&&(kt=Math.max(kt,ye.start*nt),Rn=Math.min(Rn,(ye.start+ye.count)*nt)),Ze!==null?(kt=Math.max(kt,0),Rn=Math.min(Rn,Ze.count)):Qe!=null&&(kt=Math.max(kt,0),Rn=Math.min(Rn,Qe.count));let tn=Rn-kt;if(tn<0||tn===1/0)return;ke.setup(V,k,Ne,N,Ze);let oi,Pt=Re;if(Ze!==null&&(oi=he.get(Ze),Pt=Pe,Pt.setIndex(oi)),V.isMesh)k.wireframe===!0?(ie.setLineWidth(k.wireframeLinewidth*J()),Pt.setMode(D.LINES)):Pt.setMode(D.TRIANGLES);else if(V.isLine){let rt=k.linewidth;rt===void 0&&(rt=1),ie.setLineWidth(rt*J()),V.isLineSegments?Pt.setMode(D.LINES):V.isLineLoop?Pt.setMode(D.LINE_LOOP):Pt.setMode(D.LINE_STRIP)}else V.isPoints?Pt.setMode(D.POINTS):V.isSprite&&Pt.setMode(D.TRIANGLES);if(V.isBatchedMesh)Pt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Pt.renderInstances(kt,tn,V.count);else if(N.isInstancedBufferGeometry){let rt=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,cl=Math.min(N.instanceCount,rt);Pt.renderInstances(kt,tn,cl)}else Pt.render(kt,tn)};function je(L,y,N){L.transparent===!0&&L.side===Ft&&L.forceSinglePass===!1?(L.side=sn,L.needsUpdate=!0,Ut(L,y,N),L.side=Bn,L.needsUpdate=!0,Ut(L,y,N),L.side=Ft):Ut(L,y,N)}this.compile=function(L,y,N=null){N===null&&(N=L),m=De.get(N),m.init(),v.push(m),N.traverseVisible(function(V){V.isLight&&V.layers.test(y.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),L!==N&&L.traverseVisible(function(V){V.isLight&&V.layers.test(y.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x._useLegacyLights);let k=new Set;return L.traverse(function(V){let ye=V.material;if(ye)if(Array.isArray(ye))for(let Ce=0;Ce<ye.length;Ce++){let Ne=ye[Ce];je(Ne,N,V),k.add(Ne)}else je(ye,N,V),k.add(ye)}),v.pop(),m=null,k},this.compileAsync=function(L,y,N=null){let k=this.compile(L,y,N);return new Promise(V=>{function ye(){if(k.forEach(function(Ce){ge.get(Ce).currentProgram.isReady()&&k.delete(Ce)}),k.size===0){V(L);return}setTimeout(ye,10)}Q.get("KHR_parallel_shader_compile")!==null?ye():setTimeout(ye,10)})};let lt=null;function Ke(L){lt&&lt(L)}function ft(){Et.stop()}function $e(){Et.start()}let Et=new nd;Et.setAnimationLoop(Ke),typeof self<"u"&&Et.setContext(self),this.setAnimationLoop=function(L){lt=L,qe.setAnimationLoop(L),L===null?Et.stop():Et.start()},qe.addEventListener("sessionstart",ft),qe.addEventListener("sessionend",$e),this.render=function(L,y){if(y!==void 0&&y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),y.parent===null&&y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),qe.enabled===!0&&qe.isPresenting===!0&&(qe.cameraAutoUpdate===!0&&qe.updateCamera(y),y=qe.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,y,b),m=De.get(L,v.length),m.init(),v.push(m),ne.multiplyMatrices(y.projectionMatrix,y.matrixWorldInverse),te.setFromProjectionMatrix(ne),oe=this.localClippingEnabled,z=He.init(this.clippingPlanes,oe),_=Me.get(L,p.length),_.init(),p.push(_),gn(L,y,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(se,j),this.info.render.frame++,z===!0&&He.beginShadows();let N=m.state.shadowsArray;if(P.render(N,L,y),z===!0&&He.endShadows(),this.info.autoReset===!0&&this.info.reset(),$.render(_,L),m.setupLights(x._useLegacyLights),y.isArrayCamera){let k=y.cameras;for(let V=0,ye=k.length;V<ye;V++){let Ce=k[V];at(_,L,Ce,Ce.viewport)}}else at(_,L,y);b!==null&&(R.updateMultisampleRenderTarget(b),R.updateRenderTargetMipmap(b)),L.isScene===!0&&L.onAfterRender(x,L,y),ke.resetDefaultState(),F=-1,S=null,v.pop(),v.length>0?m=v[v.length-1]:m=null,p.pop(),p.length>0?_=p[p.length-1]:_=null};function gn(L,y,N,k){if(L.visible===!1)return;if(L.layers.test(y.layers)){if(L.isGroup)N=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(y);else if(L.isLight)m.pushLight(L),L.castShadow&&m.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||te.intersectsSprite(L)){k&&Ee.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ne);let Ce=Z.update(L),Ne=L.material;Ne.visible&&_.push(L,Ce,Ne,N,Ee.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||te.intersectsObject(L))){let Ce=Z.update(L),Ne=L.material;if(k&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),Ee.copy(L.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ee.copy(Ce.boundingSphere.center)),Ee.applyMatrix4(L.matrixWorld).applyMatrix4(ne)),Array.isArray(Ne)){let Ze=Ce.groups;for(let nt=0,Je=Ze.length;nt<Je;nt++){let Qe=Ze[nt],kt=Ne[Qe.materialIndex];kt&&kt.visible&&_.push(L,Ce,kt,N,Ee.z,Qe)}}else Ne.visible&&_.push(L,Ce,Ne,N,Ee.z,null)}}let ye=L.children;for(let Ce=0,Ne=ye.length;Ce<Ne;Ce++)gn(ye[Ce],y,N,k)}function at(L,y,N,k){let V=L.opaque,ye=L.transmissive,Ce=L.transparent;m.setupLightsView(N),z===!0&&He.setGlobalState(x.clippingPlanes,N),ye.length>0&&Jn(V,ye,y,N),k&&ie.viewport(E.copy(k)),V.length>0&&wn(V,y,N),ye.length>0&&wn(ye,y,N),Ce.length>0&&wn(Ce,y,N),ie.buffers.depth.setTest(!0),ie.buffers.depth.setMask(!0),ie.buffers.color.setMask(!0),ie.setPolygonOffset(!1)}function Jn(L,y,N,k){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;let ye=ue.isWebGL2;le===null&&(le=new Jt(1,1,{generateMipmaps:!0,type:Q.has("EXT_color_buffer_half_float")?vn:Ui,minFilter:Oi,samples:ye?4:0})),x.getDrawingBufferSize(ve),ye?le.setSize(ve.x,ve.y):le.setSize(ha(ve.x),ha(ve.y));let Ce=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(q),U=x.getClearAlpha(),U<1&&x.setClearColor(16777215,.5),x.clear();let Ne=x.toneMapping;x.toneMapping=Ni,wn(L,N,k),R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le);let Ze=!1;for(let nt=0,Je=y.length;nt<Je;nt++){let Qe=y[nt],kt=Qe.object,Rn=Qe.geometry,tn=Qe.material,oi=Qe.group;if(tn.side===Ft&&kt.layers.test(k.layers)){let Pt=tn.side;tn.side=sn,tn.needsUpdate=!0,An(kt,N,k,Rn,tn,oi),tn.side=Pt,tn.needsUpdate=!0,Ze=!0}}Ze===!0&&(R.updateMultisampleRenderTarget(le),R.updateRenderTargetMipmap(le)),x.setRenderTarget(Ce),x.setClearColor(q,U),x.toneMapping=Ne}function wn(L,y,N){let k=y.isScene===!0?y.overrideMaterial:null;for(let V=0,ye=L.length;V<ye;V++){let Ce=L[V],Ne=Ce.object,Ze=Ce.geometry,nt=k===null?Ce.material:k,Je=Ce.group;Ne.layers.test(N.layers)&&An(Ne,y,N,Ze,nt,Je)}}function An(L,y,N,k,V,ye){L.onBeforeRender(x,y,N,k,V,ye),L.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),V.onBeforeRender(x,y,N,k,L,ye),V.transparent===!0&&V.side===Ft&&V.forceSinglePass===!1?(V.side=sn,V.needsUpdate=!0,x.renderBufferDirect(N,y,k,V,L,ye),V.side=Bn,V.needsUpdate=!0,x.renderBufferDirect(N,y,k,V,L,ye),V.side=Ft):x.renderBufferDirect(N,y,k,V,L,ye),L.onAfterRender(x,y,N,k,V,ye)}function Ut(L,y,N){y.isScene!==!0&&(y=H);let k=ge.get(L),V=m.state.lights,ye=m.state.shadowsArray,Ce=V.state.version,Ne=xe.getParameters(L,V.state,ye,y,N),Ze=xe.getProgramCacheKey(Ne),nt=k.programs;k.environment=L.isMeshStandardMaterial?y.environment:null,k.fog=y.fog,k.envMap=(L.isMeshStandardMaterial?Y:T).get(L.envMap||k.environment),nt===void 0&&(L.addEventListener("dispose",fe),nt=new Map,k.programs=nt);let Je=nt.get(Ze);if(Je!==void 0){if(k.currentProgram===Je&&k.lightsStateVersion===Ce)return wi(L,Ne),Je}else Ne.uniforms=xe.getUniforms(L),L.onBuild(N,Ne,x),L.onBeforeCompile(Ne,x),Je=xe.acquireProgram(Ne,Ze),nt.set(Ze,Je),k.uniforms=Ne.uniforms;let Qe=k.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Qe.clippingPlanes=He.uniform),wi(L,Ne),k.needsLights=ll(L),k.lightsStateVersion=Ce,k.needsLights&&(Qe.ambientLightColor.value=V.state.ambient,Qe.lightProbe.value=V.state.probe,Qe.directionalLights.value=V.state.directional,Qe.directionalLightShadows.value=V.state.directionalShadow,Qe.spotLights.value=V.state.spot,Qe.spotLightShadows.value=V.state.spotShadow,Qe.rectAreaLights.value=V.state.rectArea,Qe.ltc_1.value=V.state.rectAreaLTC1,Qe.ltc_2.value=V.state.rectAreaLTC2,Qe.pointLights.value=V.state.point,Qe.pointLightShadows.value=V.state.pointShadow,Qe.hemisphereLights.value=V.state.hemi,Qe.directionalShadowMap.value=V.state.directionalShadowMap,Qe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Qe.spotShadowMap.value=V.state.spotShadowMap,Qe.spotLightMatrix.value=V.state.spotLightMatrix,Qe.spotLightMap.value=V.state.spotLightMap,Qe.pointShadowMap.value=V.state.pointShadowMap,Qe.pointShadowMatrix.value=V.state.pointShadowMatrix),k.currentProgram=Je,k.uniformsList=null,Je}function un(L){if(L.uniformsList===null){let y=L.currentProgram.getUniforms();L.uniformsList=js.seqWithValue(y.seq,L.uniforms)}return L.uniformsList}function wi(L,y){let N=ge.get(L);N.outputColorSpace=y.outputColorSpace,N.batching=y.batching,N.instancing=y.instancing,N.instancingColor=y.instancingColor,N.skinning=y.skinning,N.morphTargets=y.morphTargets,N.morphNormals=y.morphNormals,N.morphColors=y.morphColors,N.morphTargetsCount=y.morphTargetsCount,N.numClippingPlanes=y.numClippingPlanes,N.numIntersection=y.numClipIntersection,N.vertexAlphas=y.vertexAlphas,N.vertexTangents=y.vertexTangents,N.toneMapping=y.toneMapping}function So(L,y,N,k,V){y.isScene!==!0&&(y=H),R.resetTextureUnits();let ye=y.fog,Ce=k.isMeshStandardMaterial?y.environment:null,Ne=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:$t,Ze=(k.isMeshStandardMaterial?Y:T).get(k.envMap||Ce),nt=k.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,Je=!!N.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Qe=!!N.morphAttributes.position,kt=!!N.morphAttributes.normal,Rn=!!N.morphAttributes.color,tn=Ni;k.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(tn=x.toneMapping);let oi=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Pt=oi!==void 0?oi.length:0,rt=ge.get(k),cl=m.state.lights;if(z===!0&&(oe===!0||L!==S)){let Nn=L===S&&k.id===F;He.setState(k,L,Nn)}let Ot=!1;k.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==cl.state.version||rt.outputColorSpace!==Ne||V.isBatchedMesh&&rt.batching===!1||!V.isBatchedMesh&&rt.batching===!0||V.isInstancedMesh&&rt.instancing===!1||!V.isInstancedMesh&&rt.instancing===!0||V.isSkinnedMesh&&rt.skinning===!1||!V.isSkinnedMesh&&rt.skinning===!0||V.isInstancedMesh&&rt.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&rt.instancingColor===!1&&V.instanceColor!==null||rt.envMap!==Ze||k.fog===!0&&rt.fog!==ye||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==He.numPlanes||rt.numIntersection!==He.numIntersection)||rt.vertexAlphas!==nt||rt.vertexTangents!==Je||rt.morphTargets!==Qe||rt.morphNormals!==kt||rt.morphColors!==Rn||rt.toneMapping!==tn||ue.isWebGL2===!0&&rt.morphTargetsCount!==Pt)&&(Ot=!0):(Ot=!0,rt.__version=k.version);let ji=rt.currentProgram;Ot===!0&&(ji=Ut(k,y,V));let Xh=!1,br=!1,hl=!1,fn=ji.getUniforms(),Qi=rt.uniforms;if(ie.useProgram(ji.program)&&(Xh=!0,br=!0,hl=!0),k.id!==F&&(F=k.id,br=!0),Xh||S!==L){fn.setValue(D,"projectionMatrix",L.projectionMatrix),fn.setValue(D,"viewMatrix",L.matrixWorldInverse);let Nn=fn.map.cameraPosition;Nn!==void 0&&Nn.setValue(D,Ee.setFromMatrixPosition(L.matrixWorld)),ue.logarithmicDepthBuffer&&fn.setValue(D,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&fn.setValue(D,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,br=!0,hl=!0)}if(V.isSkinnedMesh){fn.setOptional(D,V,"bindMatrix"),fn.setOptional(D,V,"bindMatrixInverse");let Nn=V.skeleton;Nn&&(ue.floatVertexTextures?(Nn.boneTexture===null&&Nn.computeBoneTexture(),fn.setValue(D,"boneTexture",Nn.boneTexture,R)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(fn.setOptional(D,V,"batchingTexture"),fn.setValue(D,"batchingTexture",V._matricesTexture,R));let ul=N.morphAttributes;if((ul.position!==void 0||ul.normal!==void 0||ul.color!==void 0&&ue.isWebGL2===!0)&&be.update(V,N,ji),(br||rt.receiveShadow!==V.receiveShadow)&&(rt.receiveShadow=V.receiveShadow,fn.setValue(D,"receiveShadow",V.receiveShadow)),k.isMeshGouraudMaterial&&k.envMap!==null&&(Qi.envMap.value=Ze,Qi.flipEnvMap.value=Ze.isCubeTexture&&Ze.isRenderTargetTexture===!1?-1:1),br&&(fn.setValue(D,"toneMappingExposure",x.toneMappingExposure),rt.needsLights&&Er(Qi,hl),ye&&k.fog===!0&&_e.refreshFogUniforms(Qi,ye),_e.refreshMaterialUniforms(Qi,k,re,W,le),js.upload(D,un(rt),Qi,R)),k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(js.upload(D,un(rt),Qi,R),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&fn.setValue(D,"center",V.center),fn.setValue(D,"modelViewMatrix",V.modelViewMatrix),fn.setValue(D,"normalMatrix",V.normalMatrix),fn.setValue(D,"modelMatrix",V.matrixWorld),k.isShaderMaterial||k.isRawShaderMaterial){let Nn=k.uniformsGroups;for(let fl=0,sp=Nn.length;fl<sp;fl++)if(ue.isWebGL2){let qh=Nn[fl];et.update(qh,ji),et.bind(qh,ji)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ji}function Er(L,y){L.ambientLightColor.needsUpdate=y,L.lightProbe.needsUpdate=y,L.directionalLights.needsUpdate=y,L.directionalLightShadows.needsUpdate=y,L.pointLights.needsUpdate=y,L.pointLightShadows.needsUpdate=y,L.spotLights.needsUpdate=y,L.spotLightShadows.needsUpdate=y,L.rectAreaLights.needsUpdate=y,L.hemisphereLights.needsUpdate=y}function ll(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(L,y,N){ge.get(L.texture).__webglTexture=y,ge.get(L.depthTexture).__webglTexture=N;let k=ge.get(L);k.__hasExternalTextures=!0,k.__hasExternalTextures&&(k.__autoAllocateDepthBuffer=N===void 0,k.__autoAllocateDepthBuffer||Q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),k.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,y){let N=ge.get(L);N.__webglFramebuffer=y,N.__useDefaultFramebuffer=y===void 0},this.setRenderTarget=function(L,y=0,N=0){b=L,I=y,A=N;let k=!0,V=null,ye=!1,Ce=!1;if(L){let Ze=ge.get(L);Ze.__useDefaultFramebuffer!==void 0?(ie.bindFramebuffer(D.FRAMEBUFFER,null),k=!1):Ze.__webglFramebuffer===void 0?R.setupRenderTarget(L):Ze.__hasExternalTextures&&R.rebindTextures(L,ge.get(L.texture).__webglTexture,ge.get(L.depthTexture).__webglTexture);let nt=L.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(Ce=!0);let Je=ge.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Je[y])?V=Je[y][N]:V=Je[y],ye=!0):ue.isWebGL2&&L.samples>0&&R.useMultisampledRTT(L)===!1?V=ge.get(L).__webglMultisampledFramebuffer:Array.isArray(Je)?V=Je[N]:V=Je,E.copy(L.viewport),w.copy(L.scissor),O=L.scissorTest}else E.copy(ce).multiplyScalar(re).floor(),w.copy(de).multiplyScalar(re).floor(),O=Se;if(ie.bindFramebuffer(D.FRAMEBUFFER,V)&&ue.drawBuffers&&k&&ie.drawBuffers(L,V),ie.viewport(E),ie.scissor(w),ie.setScissorTest(O),ye){let Ze=ge.get(L.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+y,Ze.__webglTexture,N)}else if(Ce){let Ze=ge.get(L.texture),nt=y||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ze.__webglTexture,N||0,nt)}F=-1},this.readRenderTargetPixels=function(L,y,N,k,V,ye,Ce){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ge.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ne=Ne[Ce]),Ne){ie.bindFramebuffer(D.FRAMEBUFFER,Ne);try{let Ze=L.texture,nt=Ze.format,Je=Ze.type;if(nt!==On&&Le.convert(nt)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Qe=Je===vn&&(Q.has("EXT_color_buffer_half_float")||ue.isWebGL2&&Q.has("EXT_color_buffer_float"));if(Je!==Ui&&Le.convert(Je)!==D.getParameter(D.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Je===pi&&(ue.isWebGL2||Q.has("OES_texture_float")||Q.has("WEBGL_color_buffer_float")))&&!Qe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}y>=0&&y<=L.width-k&&N>=0&&N<=L.height-V&&D.readPixels(y,N,k,V,Le.convert(nt),Le.convert(Je),ye)}finally{let Ze=b!==null?ge.get(b).__webglFramebuffer:null;ie.bindFramebuffer(D.FRAMEBUFFER,Ze)}}},this.copyFramebufferToTexture=function(L,y,N=0){let k=Math.pow(2,-N),V=Math.floor(y.image.width*k),ye=Math.floor(y.image.height*k);R.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,N,0,0,L.x,L.y,V,ye),ie.unbindTexture()},this.copyTextureToTexture=function(L,y,N,k=0){let V=y.image.width,ye=y.image.height,Ce=Le.convert(N.format),Ne=Le.convert(N.type);R.setTexture2D(N,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,N.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,N.unpackAlignment),y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,k,L.x,L.y,V,ye,Ce,Ne,y.image.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,k,L.x,L.y,y.mipmaps[0].width,y.mipmaps[0].height,Ce,y.mipmaps[0].data):D.texSubImage2D(D.TEXTURE_2D,k,L.x,L.y,Ce,Ne,y.image),k===0&&N.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),ie.unbindTexture()},this.copyTextureToTexture3D=function(L,y,N,k,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let ye=L.max.x-L.min.x+1,Ce=L.max.y-L.min.y+1,Ne=L.max.z-L.min.z+1,Ze=Le.convert(k.format),nt=Le.convert(k.type),Je;if(k.isData3DTexture)R.setTexture3D(k,0),Je=D.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)R.setTexture2DArray(k,0),Je=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,k.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,k.unpackAlignment);let Qe=D.getParameter(D.UNPACK_ROW_LENGTH),kt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Rn=D.getParameter(D.UNPACK_SKIP_PIXELS),tn=D.getParameter(D.UNPACK_SKIP_ROWS),oi=D.getParameter(D.UNPACK_SKIP_IMAGES),Pt=N.isCompressedTexture?N.mipmaps[V]:N.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Pt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Pt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,L.min.x),D.pixelStorei(D.UNPACK_SKIP_ROWS,L.min.y),D.pixelStorei(D.UNPACK_SKIP_IMAGES,L.min.z),N.isDataTexture||N.isData3DTexture?D.texSubImage3D(Je,V,y.x,y.y,y.z,ye,Ce,Ne,Ze,nt,Pt.data):N.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),D.compressedTexSubImage3D(Je,V,y.x,y.y,y.z,ye,Ce,Ne,Ze,Pt.data)):D.texSubImage3D(Je,V,y.x,y.y,y.z,ye,Ce,Ne,Ze,nt,Pt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Qe),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,kt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Rn),D.pixelStorei(D.UNPACK_SKIP_ROWS,tn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,oi),V===0&&k.generateMipmaps&&D.generateMipmap(Je),ie.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?R.setTextureCube(L,0):L.isData3DTexture?R.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?R.setTexture2DArray(L,0):R.setTexture2D(L,0),ie.unbindTexture()},this.resetState=function(){I=0,A=0,b=null,ie.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=ut.workingColorSpace===Ga?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===gt?hs:Kf}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===hs?gt:$t}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}},xc=class extends qr{};xc.prototype.isWebGL1Renderer=!0;var va=class s{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Fe(e),this.near=t,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},cr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}},hr=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ec,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Fn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xn=new C,fs=class s{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyMatrix4(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.applyNormalMatrix(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xn.fromBufferAttribute(this,t),xn.transformDirection(e),this.setXYZ(t,xn.x,xn.y,xn.z);return this}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Qn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Qn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Qn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Qn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=St(t,this.array),n=St(n,this.array),i=St(i,this.array),r=St(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Ct(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},xi=class extends bn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Hs,Cr=new C,ks=new C,Gs=new C,Vs=new me,Pr=new me,ld=new Ve,Xo=new C,Lr=new C,qo=new C,ff=new me,kl=new me,df=new me,Bi=class extends It{constructor(e=new xi){if(super(),this.isSprite=!0,this.type="Sprite",Hs===void 0){Hs=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new hr(t,5);Hs.setIndex([0,1,2,0,2,3]),Hs.setAttribute("position",new fs(n,3,0,!1)),Hs.setAttribute("uv",new fs(n,2,3,!1))}this.geometry=Hs,this.material=e,this.center=new me(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ks.setFromMatrixScale(this.matrixWorld),ld.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ks.multiplyScalar(-Gs.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Yo(Xo.set(-.5,-.5,0),Gs,o,ks,i,r),Yo(Lr.set(.5,-.5,0),Gs,o,ks,i,r),Yo(qo.set(.5,.5,0),Gs,o,ks,i,r),ff.set(0,0),kl.set(1,0),df.set(1,1);let a=e.ray.intersectTriangle(Xo,Lr,qo,!1,Cr);if(a===null&&(Yo(Lr.set(-.5,.5,0),Gs,o,ks,i,r),kl.set(0,1),a=e.ray.intersectTriangle(Xo,qo,Lr,!1,Cr),a===null))return;let c=e.ray.origin.distanceTo(Cr);c<e.near||c>e.far||t.push({distance:c,point:Cr.clone(),uv:as.getInterpolation(Cr,Xo,Lr,qo,ff,kl,df,new me),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Yo(s,e,t,n,i,r){Vs.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Pr.x=r*Vs.x-i*Vs.y,Pr.y=i*Vs.x+r*Vs.y):Pr.copy(Vs),s.copy(e),s.x+=Pr.x,s.y+=Pr.y,s.applyMatrix4(ld)}var pf=new C,mf=new pt,gf=new pt,ly=new C,xf=new Ve,Zo=new C,Gl=new Ln,_f=new Ve,Vl=new rr,Ma=class extends ze{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Qh,this.bindMatrix=new Ve,this.bindMatrixInverse=new Ve,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Mn),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingBox.expandByPoint(Zo)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ln),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Zo),this.boundingSphere.expandByPoint(Zo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gl.copy(this.boundingSphere),Gl.applyMatrix4(i),e.ray.intersectsSphere(Gl)!==!1&&(_f.copy(i).invert(),Vl.copy(e.ray).applyMatrix4(_f),!(this.boundingBox!==null&&Vl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new pt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Qh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Np?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,i=this.geometry;mf.fromBufferAttribute(i.attributes.skinIndex,e),gf.fromBufferAttribute(i.attributes.skinWeight,e),pf.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){let o=gf.getComponent(r);if(o!==0){let a=mf.getComponent(r);xf.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(ly.copy(pf).applyMatrix4(xf),o)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}},Yr=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},_c=class extends cn{constructor(e=null,t=1,n=1,i,r,o,a,c,l=Yt,u=Yt,h,f){super(null,o,a,c,l,u,i,r,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},yf=new Ve,cy=new Ve,Sa=class s{constructor(e=[],t=[]){this.uuid=Fn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new Ve;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){let a=e[r]?e[r].matrixWorld:cy;yf.multiplyMatrices(a,t[r]),yf.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new _c(t,e,e,On,pi);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){let r=e.bones[n],o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Yr),this.bones.push(o),this.boneInverses.push(new Ve().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){let o=t[i];e.bones.push(o.uuid);let a=n[i];e.boneInverses.push(a.toArray())}return e}},ds=class extends Ct{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ws=new Ve,vf=new Ve,Ko=[],Mf=new Mn,hy=new Ve,Ir=new ze,Dr=new Ln,zi=class extends ze{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ds(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,hy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Mn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Mf.copy(e.boundingBox).applyMatrix4(Ws),this.boundingBox.union(Mf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ln),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ws),Dr.copy(e.boundingSphere).applyMatrix4(Ws),this.boundingSphere.union(Dr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ir.geometry=this.geometry,Ir.material=this.material,Ir.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Dr.copy(this.boundingSphere),Dr.applyMatrix4(n),e.ray.intersectsSphere(Dr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ws),vf.multiplyMatrices(n,Ws),Ir.matrixWorld=vf,Ir.raycast(e,Ko);for(let o=0,a=Ko.length;o<a;o++){let c=Ko[o];c.instanceId=r,c.object=this,t.push(c)}Ko.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new ds(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Zr=class extends bn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sf=new C,Ef=new C,bf=new Ve,Wl=new rr,$o=new Ln,ur=class extends It{constructor(e=new xt,t=new Zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)Sf.fromBufferAttribute(t,i-1),Ef.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=Sf.distanceTo(Ef);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$o.copy(n.boundingSphere),$o.applyMatrix4(i),$o.radius+=r,e.ray.intersectsSphere($o)===!1)return;bf.copy(i).invert(),Wl.copy(e.ray).applyMatrix4(bf);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new C,u=new C,h=new C,f=new C,d=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){let p=Math.max(0,o.start),v=Math.min(g.count,o.start+o.count);for(let x=p,M=v-1;x<M;x+=d){let I=g.getX(x),A=g.getX(x+1);if(l.fromBufferAttribute(m,I),u.fromBufferAttribute(m,A),Wl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let F=e.ray.origin.distanceTo(f);F<e.near||F>e.far||t.push({distance:F,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{let p=Math.max(0,o.start),v=Math.min(m.count,o.start+o.count);for(let x=p,M=v-1;x<M;x+=d){if(l.fromBufferAttribute(m,x),u.fromBufferAttribute(m,x+1),Wl.distanceSqToSegment(l,u,f,h)>c)continue;f.applyMatrix4(this.matrixWorld);let A=e.ray.origin.distanceTo(f);A<e.near||A>e.far||t.push({distance:A,point:h.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}},Tf=new C,wf=new C,Ea=class extends ur{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Tf.fromBufferAttribute(t,i),wf.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Tf.distanceTo(wf);e.setAttribute("lineDistance",new We(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},ba=class extends ur{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Kr=class extends bn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Af=new Ve,yc=new rr,Jo=new Ln,jo=new C,Ta=class extends It{constructor(e=new xt,t=new Kr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(i),Jo.radius+=r,e.ray.intersectsSphere(Jo)===!1)return;Af.copy(i).invert(),yc.copy(e.ray).applyMatrix4(Af);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){let f=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let g=f,_=d;g<_;g++){let m=l.getX(g);jo.fromBufferAttribute(h,m),Rf(jo,m,c,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let g=f,_=d;g<_;g++)jo.fromBufferAttribute(h,g),Rf(jo,g,c,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Rf(s,e,t,n,i,r,o){let a=yc.distanceSqToPoint(s);if(a<t){let c=new C;yc.closestPointToPoint(s,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}var fr=class extends cn{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},zn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),i=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(i=Math.floor(a+(c-a)/2),l=n[i]-o,l<0)a=i+1;else if(l>0)c=i-1;else{c=i;break}if(i=c,n[i]===o)return i/(r-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),c=t||(o.isVector2?new me:new C);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,i=[],r=[],o=[],a=new C,c=new Ve;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new C)}r[0]=new C,o[0]=new C;let l=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=l&&(l=u,n.set(1,0,0)),h<=l&&(l=h,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Zt(i[d-1].dot(i[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(i[d],r[d])}if(t===!0){let d=Math.acos(Zt(r[0].dot(r[e]),-1,1));d/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],r[g])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},$r=class extends zn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t){let n=t||new me,i=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*u-d*h+this.aX,l=f*h+d*u+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},vc=class extends $r{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Qc(){let s=0,e=0,t=0,n=0;function i(r,o,a,c){s=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){i(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,u,h){let f=(o-r)/l-(a-r)/(l+u)+(a-o)/u,d=(a-o)/u-(c-o)/(u+h)+(c-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return s+e*r+t*o+n*a}}}var Qo=new C,Xl=new Qc,ql=new Qc,Yl=new Qc,Jr=class extends zn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){let n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,u;this.closed||a>0?l=i[(a-1)%r]:(Qo.subVectors(i[0],i[1]).add(i[0]),l=Qo);let h=i[a%r],f=i[(a+1)%r];if(this.closed||a+2<r?u=i[(a+2)%r]:(Qo.subVectors(i[r-1],i[r-2]).add(i[r-1]),u=Qo),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(h),d),_=Math.pow(h.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(u),d);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),Xl.initNonuniformCatmullRom(l.x,h.x,f.x,u.x,g,_,m),ql.initNonuniformCatmullRom(l.y,h.y,f.y,u.y,g,_,m),Yl.initNonuniformCatmullRom(l.z,h.z,f.z,u.z,g,_,m)}else this.curveType==="catmullrom"&&(Xl.initCatmullRom(l.x,h.x,f.x,u.x,this.tension),ql.initCatmullRom(l.y,h.y,f.y,u.y,this.tension),Yl.initCatmullRom(l.z,h.z,f.z,u.z,this.tension));return n.set(Xl.calc(c),ql.calc(c),Yl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Cf(s,e,t,n,i){let r=(n-e)*.5,o=(i-t)*.5,a=s*s,c=s*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*s+t}function uy(s,e){let t=1-s;return t*t*e}function fy(s,e){return 2*(1-s)*s*e}function dy(s,e){return s*s*e}function Hr(s,e,t,n){return uy(s,e)+fy(s,t)+dy(s,n)}function py(s,e){let t=1-s;return t*t*t*e}function my(s,e){let t=1-s;return 3*t*t*s*e}function gy(s,e){return 3*(1-s)*s*s*e}function xy(s,e){return s*s*s*e}function kr(s,e,t,n,i){return py(s,e)+my(s,t)+gy(s,n)+xy(s,i)}var wa=class extends zn{constructor(e=new me,t=new me,n=new me,i=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,i.x,r.x,o.x,a.x),kr(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Mc=class extends zn{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){let n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(kr(e,i.x,r.x,o.x,a.x),kr(e,i.y,r.y,o.y,a.y),kr(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends zn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Sc=class extends zn{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends zn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,i.x,r.x,o.x),Hr(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ec=class extends zn{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Hr(e,i.x,r.x,o.x),Hr(e,i.y,r.y,o.y),Hr(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ca=class extends zn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,c=i[o===0?o:o-1],l=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Cf(a,c.x,l.x,u.x,h.x),Cf(a,c.y,l.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new me().fromArray(i))}return this}},bc=Object.freeze({__proto__:null,ArcCurve:vc,CatmullRomCurve3:Jr,CubicBezierCurve:wa,CubicBezierCurve3:Mc,EllipseCurve:$r,LineCurve:Aa,LineCurve3:Sc,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:Ec,SplineCurve:Ca}),Tc=class extends zn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new bc[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),r=0;for(;r<i.length;){if(i[r]>=n){let o=i[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,r=this.curves;i<r.length;i++){let o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let u=c[l];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new bc[i.type]().fromJSON(i))}return this}},jr=class extends Tc{constructor(e){super(),this.type="Path",this.currentPoint=new me,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Aa(this.currentPoint.clone(),new me(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let r=new Ra(this.currentPoint.clone(),new me(e,t),new me(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){let a=new wa(this.currentPoint.clone(),new me(e,t),new me(n,i),new me(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ca(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,c){let l=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+l,t+u,n,i,r,o,a,c),this}absellipse(e,t,n,i,r,o,a,c){let l=new $r(e,t,n,i,r,o,a,c);if(this.curves.length>0){let h=l.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(l);let u=l.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ps=class s extends xt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=Zt(i,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],u=1/t,h=new C,f=new me,d=new C,g=new C,_=new C,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,_.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=_.x,d.y+=_.y,d.z+=_.z,d.normalize(),c.push(d.x,d.y,d.z),_.copy(g)}for(let v=0;v<=t;v++){let x=n+v*u*i,M=Math.sin(x),I=Math.cos(x);for(let A=0;A<=e.length-1;A++){h.x=e[A].x*M,h.y=e[A].y,h.z=e[A].x*I,o.push(h.x,h.y,h.z),f.x=v/t,f.y=A/(e.length-1),a.push(f.x,f.y);let b=c[3*A+0]*M,F=c[3*A+1],S=c[3*A+0]*I;l.push(b,F,S)}}for(let v=0;v<t;v++)for(let x=0;x<e.length-1;x++){let M=x+v*e.length,I=M,A=M+e.length,b=M+e.length+1,F=M+1;r.push(I,A,F),r.push(b,F,A)}this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("uv",new We(a,2)),this.setAttribute("normal",new We(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}},Pa=class s extends ps{constructor(e=1,t=1,n=4,i=8){let r=new jr;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new s(e.radius,e.length,e.capSegments,e.radialSegments)}},La=class s extends xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new C,u=new me;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,f=3;h<=t;h++,f+=3){let d=n+h/t*i;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[f]/e+1)/2,u.y=(o[f+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new We(o,3)),this.setAttribute("normal",new We(a,3)),this.setAttribute("uv",new We(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},it=class s extends xt{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;i=Math.floor(i),r=Math.floor(r);let u=[],h=[],f=[],d=[],g=0,_=[],m=n/2,p=0;v(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new We(h,3)),this.setAttribute("normal",new We(f,3)),this.setAttribute("uv",new We(d,2));function v(){let M=new C,I=new C,A=0,b=(t-e)/n;for(let F=0;F<=r;F++){let S=[],E=F/r,w=E*(t-e)+e;for(let O=0;O<=i;O++){let q=O/i,U=q*c+a,B=Math.sin(U),W=Math.cos(U);I.x=w*B,I.y=-E*n+m,I.z=w*W,h.push(I.x,I.y,I.z),M.set(B,b,W).normalize(),f.push(M.x,M.y,M.z),d.push(q,1-E),S.push(g++)}_.push(S)}for(let F=0;F<i;F++)for(let S=0;S<r;S++){let E=_[S][F],w=_[S+1][F],O=_[S+1][F+1],q=_[S][F+1];u.push(E,w,q),u.push(w,O,q),A+=6}l.addGroup(p,A,0),p+=A}function x(M){let I=g,A=new me,b=new C,F=0,S=M===!0?e:t,E=M===!0?1:-1;for(let O=1;O<=i;O++)h.push(0,m*E,0),f.push(0,E,0),d.push(.5,.5),g++;let w=g;for(let O=0;O<=i;O++){let U=O/i*c+a,B=Math.cos(U),W=Math.sin(U);b.x=S*W,b.y=m*E,b.z=S*B,h.push(b.x,b.y,b.z),f.push(0,E,0),A.x=B*.5+.5,A.y=W*.5*E+.5,d.push(A.x,A.y),g++}for(let O=0;O<i;O++){let q=I+O,U=w+O;M===!0?u.push(U,U+1,q):u.push(U+1,U,q),F+=3}l.addGroup(p,F,M===!0?1:2),p+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var wc=class s extends xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let r=[],o=[];a(i),l(n),u(),this.setAttribute("position",new We(r,3)),this.setAttribute("normal",new We(r.slice(),3)),this.setAttribute("uv",new We(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let x=new C,M=new C,I=new C;for(let A=0;A<t.length;A+=3)d(t[A+0],x),d(t[A+1],M),d(t[A+2],I),c(x,M,I,v)}function c(v,x,M,I){let A=I+1,b=[];for(let F=0;F<=A;F++){b[F]=[];let S=v.clone().lerp(M,F/A),E=x.clone().lerp(M,F/A),w=A-F;for(let O=0;O<=w;O++)O===0&&F===A?b[F][O]=S:b[F][O]=S.clone().lerp(E,O/w)}for(let F=0;F<A;F++)for(let S=0;S<2*(A-F)-1;S++){let E=Math.floor(S/2);S%2===0?(f(b[F][E+1]),f(b[F+1][E]),f(b[F][E])):(f(b[F][E+1]),f(b[F+1][E+1]),f(b[F+1][E]))}}function l(v){let x=new C;for(let M=0;M<r.length;M+=3)x.x=r[M+0],x.y=r[M+1],x.z=r[M+2],x.normalize().multiplyScalar(v),r[M+0]=x.x,r[M+1]=x.y,r[M+2]=x.z}function u(){let v=new C;for(let x=0;x<r.length;x+=3){v.x=r[x+0],v.y=r[x+1],v.z=r[x+2];let M=m(v)/2/Math.PI+.5,I=p(v)/Math.PI+.5;o.push(M,1-I)}g(),h()}function h(){for(let v=0;v<o.length;v+=6){let x=o[v+0],M=o[v+2],I=o[v+4],A=Math.max(x,M,I),b=Math.min(x,M,I);A>.9&&b<.1&&(x<.2&&(o[v+0]+=1),M<.2&&(o[v+2]+=1),I<.2&&(o[v+4]+=1))}}function f(v){r.push(v.x,v.y,v.z)}function d(v,x){let M=v*3;x.x=e[M+0],x.y=e[M+1],x.z=e[M+2]}function g(){let v=new C,x=new C,M=new C,I=new C,A=new me,b=new me,F=new me;for(let S=0,E=0;S<r.length;S+=9,E+=6){v.set(r[S+0],r[S+1],r[S+2]),x.set(r[S+3],r[S+4],r[S+5]),M.set(r[S+6],r[S+7],r[S+8]),A.set(o[E+0],o[E+1]),b.set(o[E+2],o[E+3]),F.set(o[E+4],o[E+5]),I.copy(v).add(x).add(M).divideScalar(3);let w=m(I);_(A,E+0,v,w),_(b,E+2,x,w),_(F,E+4,M,w)}}function _(v,x,M,I){I<0&&v.x===1&&(o[x]=v.x-1),M.x===0&&M.z===0&&(o[x]=I/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.details)}};var Qr=class extends jr{constructor(e){super(e),this.uuid=Fn(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new jr().fromJSON(i))}return this}},_y={triangulate:function(s,e,t=2){let n=e&&e.length,i=n?e[0]*t:s.length,r=cd(s,0,i,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,u,h,f,d;if(n&&(r=Ey(s,e,r,t)),s.length>80*t){a=l=s[0],c=u=s[1];for(let g=t;g<i;g+=t)h=s[g],f=s[g+1],h<a&&(a=h),f<c&&(c=f),h>l&&(l=h),f>u&&(u=f);d=Math.max(l-a,u-c),d=d!==0?32767/d:0}return eo(r,o,t,a,c,d,0),o}};function cd(s,e,t,n,i){let r,o;if(i===Ny(s,e,t,n)>0)for(r=e;r<t;r+=n)o=Pf(r,s[r],s[r+1],o);else for(r=t-n;r>=e;r-=n)o=Pf(r,s[r],s[r+1],o);return o&&Wa(o,o.next)&&(no(o),o=o.next),o}function ms(s,e){if(!s)return s;e||(e=s);let t=s,n;do if(n=!1,!t.steiner&&(Wa(t,t.next)||Lt(t.prev,t,t.next)===0)){if(no(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function eo(s,e,t,n,i,r,o){if(!s)return;!o&&r&&Ry(s,n,i,r);let a=s,c,l;for(;s.prev!==s.next;){if(c=s.prev,l=s.next,r?vy(s,n,i,r):yy(s)){e.push(c.i/t|0),e.push(s.i/t|0),e.push(l.i/t|0),no(s),s=l.next,a=l.next;continue}if(s=l,s===a){o?o===1?(s=My(ms(s),e,t),eo(s,e,t,n,i,r,2)):o===2&&Sy(s,e,t,n,i,r):eo(ms(s),e,t,n,i,r,1);break}}}function yy(s){let e=s.prev,t=s,n=s.next;if(Lt(e,t,n)>=0)return!1;let i=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,u=i<r?i<o?i:o:r<o?r:o,h=a<c?a<l?a:l:c<l?c:l,f=i>r?i>o?i:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==e;){if(g.x>=u&&g.x<=f&&g.y>=h&&g.y<=d&&Ks(i,a,r,c,o,l,g.x,g.y)&&Lt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function vy(s,e,t,n){let i=s.prev,r=s,o=s.next;if(Lt(i,r,o)>=0)return!1;let a=i.x,c=r.x,l=o.x,u=i.y,h=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=u<h?u<f?u:f:h<f?h:f,_=a>c?a>l?a:l:c>l?c:l,m=u>h?u>f?u:f:h>f?h:f,p=Ac(d,g,e,t,n),v=Ac(_,m,e,t,n),x=s.prevZ,M=s.nextZ;for(;x&&x.z>=p&&M&&M.z<=v;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ks(a,u,c,h,l,f,x.x,x.y)&&Lt(x.prev,x,x.next)>=0||(x=x.prevZ,M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ks(a,u,c,h,l,f,M.x,M.y)&&Lt(M.prev,M,M.next)>=0))return!1;M=M.nextZ}for(;x&&x.z>=p;){if(x.x>=d&&x.x<=_&&x.y>=g&&x.y<=m&&x!==i&&x!==o&&Ks(a,u,c,h,l,f,x.x,x.y)&&Lt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;M&&M.z<=v;){if(M.x>=d&&M.x<=_&&M.y>=g&&M.y<=m&&M!==i&&M!==o&&Ks(a,u,c,h,l,f,M.x,M.y)&&Lt(M.prev,M,M.next)>=0)return!1;M=M.nextZ}return!0}function My(s,e,t){let n=s;do{let i=n.prev,r=n.next.next;!Wa(i,r)&&hd(i,n,n.next,r)&&to(i,r)&&to(r,i)&&(e.push(i.i/t|0),e.push(n.i/t|0),e.push(r.i/t|0),no(n),no(n.next),n=s=r),n=n.next}while(n!==s);return ms(n)}function Sy(s,e,t,n,i,r){let o=s;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Ly(o,a)){let c=ud(o,a);o=ms(o,o.next),c=ms(c,c.next),eo(o,e,t,n,i,r,0),eo(c,e,t,n,i,r,0);return}a=a.next}o=o.next}while(o!==s)}function Ey(s,e,t,n){let i=[],r,o,a,c,l;for(r=0,o=e.length;r<o;r++)a=e[r]*n,c=r<o-1?e[r+1]*n:s.length,l=cd(s,a,c,n,!1),l===l.next&&(l.steiner=!0),i.push(Py(l));for(i.sort(by),r=0;r<i.length;r++)t=Ty(i[r],t);return t}function by(s,e){return s.x-e.x}function Ty(s,e){let t=wy(s,e);if(!t)return e;let n=ud(t,s);return ms(n,n.next),ms(t,t.next)}function wy(s,e){let t=e,n=-1/0,i,r=s.x,o=s.y;do{if(o<=t.y&&o>=t.next.y&&t.next.y!==t.y){let f=t.x+(o-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=r&&f>n&&(n=f,i=t.x<t.next.x?t:t.next,f===r))return i}t=t.next}while(t!==e);if(!i)return null;let a=i,c=i.x,l=i.y,u=1/0,h;t=i;do r>=t.x&&t.x>=c&&r!==t.x&&Ks(o<l?r:n,o,c,l,o<l?n:r,o,t.x,t.y)&&(h=Math.abs(o-t.y)/(r-t.x),to(t,s)&&(h<u||h===u&&(t.x>i.x||t.x===i.x&&Ay(i,t)))&&(i=t,u=h)),t=t.next;while(t!==a);return i}function Ay(s,e){return Lt(s.prev,s,e.prev)<0&&Lt(e.next,s,s.next)<0}function Ry(s,e,t,n){let i=s;do i.z===0&&(i.z=Ac(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==s);i.prevZ.nextZ=null,i.prevZ=null,Cy(i)}function Cy(s){let e,t,n,i,r,o,a,c,l=1;do{for(t=s,s=null,r=null,o=0;t;){for(o++,n=t,a=0,e=0;e<l&&(a++,n=n.nextZ,!!n);e++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||t.z<=n.z)?(i=t,t=t.nextZ,a--):(i=n,n=n.nextZ,c--),r?r.nextZ=i:s=i,i.prevZ=r,r=i;t=n}r.nextZ=null,l*=2}while(o>1);return s}function Ac(s,e,t,n,i){return s=(s-t)*i|0,e=(e-n)*i|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function Py(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Ks(s,e,t,n,i,r,o,a){return(i-o)*(e-a)>=(s-o)*(r-a)&&(s-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(i-o)*(n-a)}function Ly(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!Iy(s,e)&&(to(s,e)&&to(e,s)&&Dy(s,e)&&(Lt(s.prev,s,e.prev)||Lt(s,e.prev,e))||Wa(s,e)&&Lt(s.prev,s,s.next)>0&&Lt(e.prev,e,e.next)>0)}function Lt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Wa(s,e){return s.x===e.x&&s.y===e.y}function hd(s,e,t,n){let i=ta(Lt(s,e,t)),r=ta(Lt(s,e,n)),o=ta(Lt(t,n,s)),a=ta(Lt(t,n,e));return!!(i!==r&&o!==a||i===0&&ea(s,t,e)||r===0&&ea(s,n,e)||o===0&&ea(t,s,n)||a===0&&ea(t,e,n))}function ea(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ta(s){return s>0?1:s<0?-1:0}function Iy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&hd(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function to(s,e){return Lt(s.prev,s,s.next)<0?Lt(s,e,s.next)>=0&&Lt(s,s.prev,e)>=0:Lt(s,e,s.prev)<0||Lt(s,s.next,e)<0}function Dy(s,e){let t=s,n=!1,i=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&i<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==s);return n}function ud(s,e){let t=new Rc(s.i,s.x,s.y),n=new Rc(e.i,e.x,e.y),i=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=i,i.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Pf(s,e,t,n){let i=new Rc(s,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function no(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Rc(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Ny(s,e,t,n){let i=0;for(let r=e,o=t-n;r<t;r+=n)i+=(s[o]-s[r])*(s[r+1]+s[o+1]),o=r;return i}var Gr=class s{static area(e){let t=e.length,n=0;for(let i=t-1,r=0;r<t;i=r++)n+=e[i].x*e[r].y-e[r].x*e[i].y;return n*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let n=[],i=[],r=[];Lf(e),If(n,e);let o=e.length;t.forEach(Lf);for(let c=0;c<t.length;c++)i.push(o),o+=t[c].length,If(n,t[c]);let a=_y.triangulate(n,i);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Lf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function If(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ia=class s extends xt{constructor(e=new Qr([new me(.5,.5),new me(-.5,.5),new me(-.5,-.5),new me(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,i=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new We(i,3)),this.setAttribute("uv",new We(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:d-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:Uy,x,M=!1,I,A,b,F;p&&(x=p.getSpacedPoints(u),M=!0,f=!1,I=p.computeFrenetFrames(u,!1),A=new C,b=new C,F=new C),f||(m=0,d=0,g=0,_=0);let S=a.extractPoints(l),E=S.shape,w=S.holes;if(!Gr.isClockWise(E)){E=E.reverse();for(let D=0,ee=w.length;D<ee;D++){let Q=w[D];Gr.isClockWise(Q)&&(w[D]=Q.reverse())}}let q=Gr.triangulateShape(E,w),U=E;for(let D=0,ee=w.length;D<ee;D++){let Q=w[D];E=E.concat(Q)}function B(D,ee,Q){return ee||console.error("THREE.ExtrudeGeometry: vec does not exist"),D.clone().addScaledVector(ee,Q)}let W=E.length,re=q.length;function se(D,ee,Q){let ue,ie,we,ge=D.x-ee.x,R=D.y-ee.y,T=Q.x-D.x,Y=Q.y-D.y,he=ge*ge+R*R,pe=ge*Y-R*T;if(Math.abs(pe)>Number.EPSILON){let Z=Math.sqrt(he),xe=Math.sqrt(T*T+Y*Y),_e=ee.x-R/Z,Me=ee.y+ge/Z,De=Q.x-Y/xe,He=Q.y+T/xe,P=((De-_e)*Y-(He-Me)*T)/(ge*Y-R*T);ue=_e+ge*P-D.x,ie=Me+R*P-D.y;let $=ue*ue+ie*ie;if($<=2)return new me(ue,ie);we=Math.sqrt($/2)}else{let Z=!1;ge>Number.EPSILON?T>Number.EPSILON&&(Z=!0):ge<-Number.EPSILON?T<-Number.EPSILON&&(Z=!0):Math.sign(R)===Math.sign(Y)&&(Z=!0),Z?(ue=-R,ie=ge,we=Math.sqrt(he)):(ue=ge,ie=R,we=Math.sqrt(he/2))}return new me(ue/we,ie/we)}let j=[];for(let D=0,ee=U.length,Q=ee-1,ue=D+1;D<ee;D++,Q++,ue++)Q===ee&&(Q=0),ue===ee&&(ue=0),j[D]=se(U[D],U[Q],U[ue]);let ce=[],de,Se=j.concat();for(let D=0,ee=w.length;D<ee;D++){let Q=w[D];de=[];for(let ue=0,ie=Q.length,we=ie-1,ge=ue+1;ue<ie;ue++,we++,ge++)we===ie&&(we=0),ge===ie&&(ge=0),de[ue]=se(Q[ue],Q[we],Q[ge]);ce.push(de),Se=Se.concat(de)}for(let D=0;D<m;D++){let ee=D/m,Q=d*Math.cos(ee*Math.PI/2),ue=g*Math.sin(ee*Math.PI/2)+_;for(let ie=0,we=U.length;ie<we;ie++){let ge=B(U[ie],j[ie],ue);ne(ge.x,ge.y,-Q)}for(let ie=0,we=w.length;ie<we;ie++){let ge=w[ie];de=ce[ie];for(let R=0,T=ge.length;R<T;R++){let Y=B(ge[R],de[R],ue);ne(Y.x,Y.y,-Q)}}}let te=g+_;for(let D=0;D<W;D++){let ee=f?B(E[D],Se[D],te):E[D];M?(b.copy(I.normals[0]).multiplyScalar(ee.x),A.copy(I.binormals[0]).multiplyScalar(ee.y),F.copy(x[0]).add(b).add(A),ne(F.x,F.y,F.z)):ne(ee.x,ee.y,0)}for(let D=1;D<=u;D++)for(let ee=0;ee<W;ee++){let Q=f?B(E[ee],Se[ee],te):E[ee];M?(b.copy(I.normals[D]).multiplyScalar(Q.x),A.copy(I.binormals[D]).multiplyScalar(Q.y),F.copy(x[D]).add(b).add(A),ne(F.x,F.y,F.z)):ne(Q.x,Q.y,h/u*D)}for(let D=m-1;D>=0;D--){let ee=D/m,Q=d*Math.cos(ee*Math.PI/2),ue=g*Math.sin(ee*Math.PI/2)+_;for(let ie=0,we=U.length;ie<we;ie++){let ge=B(U[ie],j[ie],ue);ne(ge.x,ge.y,h+Q)}for(let ie=0,we=w.length;ie<we;ie++){let ge=w[ie];de=ce[ie];for(let R=0,T=ge.length;R<T;R++){let Y=B(ge[R],de[R],ue);M?ne(Y.x,Y.y+x[u-1].y,x[u-1].x+Q):ne(Y.x,Y.y,h+Q)}}}z(),oe();function z(){let D=i.length/3;if(f){let ee=0,Q=W*ee;for(let ue=0;ue<re;ue++){let ie=q[ue];ve(ie[2]+Q,ie[1]+Q,ie[0]+Q)}ee=u+m*2,Q=W*ee;for(let ue=0;ue<re;ue++){let ie=q[ue];ve(ie[0]+Q,ie[1]+Q,ie[2]+Q)}}else{for(let ee=0;ee<re;ee++){let Q=q[ee];ve(Q[2],Q[1],Q[0])}for(let ee=0;ee<re;ee++){let Q=q[ee];ve(Q[0]+W*u,Q[1]+W*u,Q[2]+W*u)}}n.addGroup(D,i.length/3-D,0)}function oe(){let D=i.length/3,ee=0;le(U,ee),ee+=U.length;for(let Q=0,ue=w.length;Q<ue;Q++){let ie=w[Q];le(ie,ee),ee+=ie.length}n.addGroup(D,i.length/3-D,1)}function le(D,ee){let Q=D.length;for(;--Q>=0;){let ue=Q,ie=Q-1;ie<0&&(ie=D.length-1);for(let we=0,ge=u+m*2;we<ge;we++){let R=W*we,T=W*(we+1),Y=ee+ue+R,he=ee+ie+R,pe=ee+ie+T,Z=ee+ue+T;Ee(Y,he,pe,Z)}}}function ne(D,ee,Q){c.push(D),c.push(ee),c.push(Q)}function ve(D,ee,Q){H(D),H(ee),H(Q);let ue=i.length/3,ie=v.generateTopUV(n,i,ue-3,ue-2,ue-1);J(ie[0]),J(ie[1]),J(ie[2])}function Ee(D,ee,Q,ue){H(D),H(ee),H(ue),H(ee),H(Q),H(ue);let ie=i.length/3,we=v.generateSideWallUV(n,i,ie-6,ie-3,ie-2,ie-1);J(we[0]),J(we[1]),J(we[3]),J(we[1]),J(we[2]),J(we[3])}function H(D){i.push(c[D*3+0]),i.push(c[D*3+1]),i.push(c[D*3+2])}function J(D){r.push(D.x),r.push(D.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Oy(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let i=e.options.extrudePath;return i!==void 0&&(e.options.extrudePath=new bc[i.type]().fromJSON(i)),new s(n,e.options)}},Uy={generateTopUV:function(s,e,t,n,i){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[i*3],u=e[i*3+1];return[new me(r,o),new me(a,c),new me(l,u)]},generateSideWallUV:function(s,e,t,n,i,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],u=e[n*3+1],h=e[n*3+2],f=e[i*3],d=e[i*3+1],g=e[i*3+2],_=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(a-u)<Math.abs(o-l)?[new me(o,1-c),new me(l,1-h),new me(f,1-g),new me(_,1-p)]:[new me(a,1-c),new me(u,1-h),new me(d,1-g),new me(m,1-p)]}};function Oy(s,e,t){if(t.shapes=[],Array.isArray(s))for(let n=0,i=s.length;n<i;n++){let r=s[n];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Da=class s extends wc{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}};var st=class s extends xt{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,u=[],h=new C,f=new C,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let v=[],x=p/n,M=0;p===0&&o===0?M=.5/t:p===n&&c===Math.PI&&(M=-.5/t);for(let I=0;I<=t;I++){let A=I/t;h.x=-e*Math.cos(i+A*r)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(i+A*r)*Math.sin(o+x*a),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(A+M,1-x),v.push(l++)}u.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let x=u[p][v+1],M=u[p][v],I=u[p+1][v],A=u[p+1][v+1];(p!==0||o>0)&&d.push(x,M,A),(p!==n-1||c<Math.PI)&&d.push(M,I,A)}this.setIndex(d),this.setAttribute("position",new We(g,3)),this.setAttribute("normal",new We(_,3)),this.setAttribute("uv",new We(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Hi=class s extends xt{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],c=[],l=[],u=new C,h=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let _=g/i*r,m=d/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(_),h.y=(e+t*Math.cos(m))*Math.sin(_),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(_),u.y=e*Math.sin(_),f.subVectors(h,u).normalize(),c.push(f.x,f.y,f.z),l.push(g/i),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let _=(i+1)*d+g-1,m=(i+1)*(d-1)+g-1,p=(i+1)*(d-1)+g,v=(i+1)*d+g;o.push(_,m,v),o.push(m,p,v)}this.setIndex(o),this.setAttribute("position",new We(a,3)),this.setAttribute("normal",new We(c,3)),this.setAttribute("uv",new We(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}};var Na=class extends Bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Be=class extends bn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Fe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=$f,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Sn=class extends Be{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Zt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Fe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Fe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Fe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};function na(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Fy(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function By(s){function e(i,r){return s[i]-s[r]}let t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Df(s,e,t){let n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){let a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function fd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}var ki=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Cc=class extends ki{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Xs,endingEnd:Xs}}intervalChanged_(e,t,n){let i=this.parameterPositions,r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case qs:r=e,a=2*t-n;break;case ra:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case qs:o=e,c=2*n-t;break;case ra:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}let l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),_=g*g,m=_*g,p=-f*m+2*f*_-f*g,v=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-d)*m+(1.5+d)*_+.5*g,M=d*m-d*_;for(let I=0;I!==a;++I)r[I]=p*o[u+I]+v*o[l+I]+x*o[c+I]+M*o[h+I];return r}},Ua=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let f=0;f!==a;++f)r[f]=o[l+f]*h+o[c+f]*u;return r}},Pc=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Hn=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=na(t,this.TimeBufferType),this.values=na(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:na(e.times,Array),values:na(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Cc(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ir:t=this.InterpolantFactoryMethodDiscrete;break;case us:t=this.InterpolantFactoryMethodLinear;break;case _l:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ir;case this.InterpolantFactoryMethodLinear:return us;case this.InterpolantFactoryMethodSmooth:return _l}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&Fy(i))for(let a=0,c=i.length;a!==c;++a){let l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===_l,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{let h=a*n,f=h-n,d=h+n;for(let g=0;g!==n;++g){let _=t[h+g];if(_!==t[f+g]||_!==t[d+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[h+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=us;var Gi=class extends Hn{};Gi.prototype.ValueTypeName="bool";Gi.prototype.ValueBufferType=Array;Gi.prototype.DefaultInterpolation=ir;Gi.prototype.InterpolantFactoryMethodLinear=void 0;Gi.prototype.InterpolantFactoryMethodSmooth=void 0;var Oa=class extends Hn{};Oa.prototype.ValueTypeName="color";var _i=class extends Hn{};_i.prototype.ValueTypeName="number";var Lc=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t),l=e*a;for(let u=l+a;l!==u;l+=4)Kt.slerpFlat(r,0,o,l-a,o,l,c);return r}},Zn=class extends Hn{InterpolantFactoryMethodLinear(e){return new Lc(this.times,this.values,this.getValueSize(),e)}};Zn.prototype.ValueTypeName="quaternion";Zn.prototype.DefaultInterpolation=us;Zn.prototype.InterpolantFactoryMethodSmooth=void 0;var Vi=class extends Hn{};Vi.prototype.ValueTypeName="string";Vi.prototype.ValueBufferType=Array;Vi.prototype.DefaultInterpolation=ir;Vi.prototype.InterpolantFactoryMethodLinear=void 0;Vi.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends Hn{};ti.prototype.ValueTypeName="vector";var gs=class{constructor(e,t=-1,n,i=Kc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=Fn(),this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hy(n[o]).scale(i));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){let t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Hn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){let r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);let u=By(c);c=Df(c,1,u),l=Df(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new _i(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){let l=e[a],u=l.name.match(r);if(u&&u.length>1){let h=u[1],f=i[h];f||(i[h]=f=[]),f.push(l)}}let o=[];for(let a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;let n=function(h,f,d,g,_){if(d.length!==0){let m=[],p=[];fd(d,m,p,g),m.length!==0&&_.push(new h(f,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode,c=e.length||-1,l=e.hierarchy||[];for(let h=0;h<l.length;h++){let f=l[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){let d={},g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let _=0;_<f[g].morphTargets.length;_++)d[f[g].morphTargets[_]]=-1;for(let _ in d){let m=[],p=[];for(let v=0;v!==f[g].morphTargets.length;++v){let x=f[g];m.push(x.time),p.push(x.morphTarget===_?1:0)}i.push(new _i(".morphTargetInfluence["+_+"]",m,p))}c=d.length*o}else{let d=".bones["+t[h].name+"]";n(ti,d+".position",f,"pos",i),n(Zn,d+".quaternion",f,"rot",i),n(ti,d+".scale",f,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){let e=this.tracks,t=0;for(let n=0,i=e.length;n!==i;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}};function zy(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _i;case"vector":case"vector2":case"vector3":case"vector4":return ti;case"color":return Oa;case"quaternion":return Zn;case"bool":case"boolean":return Gi;case"string":return Vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Hy(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=zy(s.type);if(s.times===void 0){let t=[],n=[];fd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}var Di={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}},Ic=class{constructor(e,t,n){let i=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=l.length;h<f;h+=2){let d=l[h],g=l[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}},ky=new Ic,yi=class{constructor(e){this.manager=e!==void 0?e:ky,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};yi.DEFAULT_MATERIAL_NAME="__DEFAULT";var fi={},Dc=class extends Error{constructor(e,t){super(e),this.response=t}},io=class extends yi{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Di.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(fi[e]!==void 0){fi[e].push({onLoad:t,onProgress:n,onError:i});return}fi[e]=[],fi[e].push({onLoad:t,onProgress:n,onError:i});let o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=fi[e],h=l.body.getReader(),f=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=f?parseInt(f):0,g=d!==0,_=0,m=new ReadableStream({start(p){v();function v(){h.read().then(({done:x,value:M})=>{if(x)p.close();else{_+=M.byteLength;let I=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:d});for(let A=0,b=u.length;A<b;A++){let F=u[A];F.onProgress&&F.onProgress(I)}p.enqueue(M),v()}})}}});return new Response(m)}else throw new Dc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(a),f=h&&h[1]?h[1].toLowerCase():void 0,d=new TextDecoder(f);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Di.add(e,l);let u=fi[e];delete fi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onLoad&&d.onLoad(l)}}).catch(l=>{let u=fi[e];if(u===void 0)throw this.manager.itemError(e),l;delete fi[e];for(let h=0,f=u.length;h<f;h++){let d=u[h];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}};var Nc=class extends yi{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;let a=Wr("img");function c(){u(),Di.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}};var dr=class extends yi{constructor(e){super(e)}load(e,t,n,i){let r=new cn,o=new Nc(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}},so=class extends It{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Fe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}};var Zl=new Ve,Nf=new C,Uf=new C,ro=class{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new Ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new pt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Nf.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nf),Uf.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Uf),t.updateMatrixWorld(),Zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Uc=class extends ro{constructor(){super(new Gt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){let t=this.camera,n=sr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}},Fa=class extends so{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Uc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Of=new Ve,Nr=new C,Kl=new C,Oc=class extends ro{constructor(){super(new Gt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new pt(2,1,1,1),new pt(0,1,1,1),new pt(3,1,1,1),new pt(1,1,1,1),new pt(3,0,1,1),new pt(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Nr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nr),Kl.copy(n.position),Kl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Kl),n.updateMatrixWorld(),i.makeTranslation(-Nr.x,-Nr.y,-Nr.z),Of.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Of)}},Kn=class extends so{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Oc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},Fc=class extends ro{constructor(){super(new Fi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},pr=class extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Fc}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}};var Wi=class{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Ba=class extends yi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,o=Di.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}let a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;let c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Di.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),Di.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});Di.add(e,c),r.manager.itemStart(e)}};var za=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=Ff();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function Ff(){return(typeof performance>"u"?Date:performance).now()}var Bc=class{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let n=this.buffer,i=this.valueSize,r=e*i+i,o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;let a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){let t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(n,i,c,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(n[c]!==n[c+t]){a.setValue(n,i);break}}saveOriginalState(){let e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){Kt.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){let o=this._workIndex*r;Kt.multiplyQuaternionsFlat(e,o,e,t,e,n),Kt.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){let o=1-i;for(let a=0;a!==r;++a){let c=t+a;e[c]=e[c]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){let a=t+o;e[a]=e[a]+e[n+o]*i}}},eh="\\[\\]\\.:\\/",Gy=new RegExp("["+eh+"]","g"),th="[^"+eh+"]",Vy="[^"+eh.replace("\\.","")+"]",Wy=/((?:WC+[\/:])*)/.source.replace("WC",th),Xy=/(WCOD+)?/.source.replace("WCOD",Vy),qy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",th),Yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",th),Zy=new RegExp("^"+Wy+Xy+qy+Yy+"$"),Ky=["material","materials","bones","map"],zc=class{constructor(e,t,n){let i=n||Tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Tt=class s{constructor(e,t,n){this.path=t,this.parsedPath=n||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,n):new s(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Gy,"")}static parseTrackName(e){let t=Zy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);Ky.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[i];if(o===void 0){let l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=zc;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hc=class{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;let r=t.tracks,o=r.length,a=new Array(o),c={endingStart:Xs,endingEnd:Xs};for(let l=0;l!==o;++l){let u=r[l].createInterpolant(null);a[l]=u,u.settings=c}this._interpolantSettings=c,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Wp,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){let i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){let i=this._mixer,r=i.time,o=this.timeScale,a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);let c=a.parameterPositions,l=a.sampleValues;return c[0]=r,c[1]=r+n,l[0]=e/o,l[1]=t/o,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*n;c<0||n===0?t=0:(this._startTime=null,t=n*c)}t*=this._updateTimeScale(e);let o=this._updateTime(t),a=this._updateWeight(e);if(a>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case qp:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulateAdditive(a);break;case Kc:default:for(let u=0,h=c.length;u!==h;++u)c[u].evaluate(o),l[u].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let n=this._weightInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let n=this._timeScaleInterpolant;if(n!==null){let i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,n=this.loop,i=this.time+e,r=this._loopCount,o=n===Xp;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===Vp){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){let a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){let i=this._interpolantSettings;n?(i.endingStart=qs,i.endingEnd=qs):(e?i.endingStart=this.zeroSlopeAtStart?qs:Xs:i.endingStart=ra,t?i.endingEnd=this.zeroSlopeAtEnd?qs:Xs:i.endingEnd=ra)}_scheduleFading(e,t,n){let i=this._mixer,r=i.time,o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);let a=o.parameterPositions,c=o.sampleValues;return a[0]=r,c[0]=t,a[1]=r+e,c[1]=n,this}},$y=new Float32Array(1),oo=class extends gi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){let n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,c=n.uuid,l=this._bindingsByRootAndName,u=l[c];u===void 0&&(u={},l[c]=u);for(let h=0;h!==r;++h){let f=i[h],d=f.name,g=u[d];if(g!==void 0)++g.referenceCount,o[h]=g;else{if(g=o[h],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,d));continue}let _=t&&t._propertyBindings[h].binding.parsedPath;g=new Bc(Tt.create(n,d,_),f.ValueTypeName,f.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,d),o[h]=g}a[h].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){let i=this._actions,r=this._actionsByClip,o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{let a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){let t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,o=this._actionsByClip,a=o[r],c=a.knownActions,l=c[c.length-1],u=e._byClipCacheIndex;l._byClipCacheIndex=u,c[u]=l,c.pop(),e._byClipCacheIndex=null;let h=a.actionByRoot,f=(e._localRoot||this._root).uuid;delete h[f],c.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){let r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){let t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){let i=this._bindingsByRootAndName,r=this._bindings,o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){let t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){let t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,n=e[t];return n===void 0&&(n=new Ua(new Float32Array(2),new Float32Array(2),1,$y),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){let t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){let i=t||this._root,r=i.uuid,o=typeof e=="string"?gs.findByName(i,e):e,a=o!==null?o.uuid:e,c=this._actionsByClip[a],l=null;if(n===void 0&&(o!==null?n=o.blendMode:n=Kc),c!==void 0){let h=c.actionByRoot[r];if(h!==void 0&&h.blendMode===n)return h;l=c.knownActions[0],o===null&&(o=l._clip)}if(o===null)return null;let u=new Hc(this,o,t,n);return this._bindAction(u,l),this._addInactiveAction(u,a,r),u}existingAction(e,t){let n=t||this._root,i=n.uuid,r=typeof e=="string"?gs.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;let t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let l=0;l!==n;++l)t[l]._update(i,e,r,o);let a=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)a[l].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){let o=r.knownActions;for(let a=0,c=o.length;a!==c;++a){let l=o[a];this._deactivateAction(l);let u=l._cacheIndex,h=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(l)}delete i[n]}}uncacheRoot(e){let t=e.uuid,n=this._actionsByClip;for(let o in n){let a=n[o].actionByRoot,c=a[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(let o in r){let a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){let n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:kc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=kc);var Xa={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var In=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Jy=new Fi(-1,1,1,-1,0,1),nh=class extends xt{constructor(){super(),this.setAttribute("position",new We([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new We([0,2,0,0,2,0],2))}},jy=new nh,Xi=class{constructor(e){this._mesh=new ze(jy,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Jy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qa=class extends In{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$n.clone(e.uniforms),this.material=new Bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Xi(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var co=class extends In{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}},Ya=class extends In{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Za=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new me);this._width=n.width,this._height=n.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qa(Xa),this.copyPass.material.blending=ei,this.clock=new za}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,r=this.passes.length;i<r;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}co!==void 0&&(o instanceof co?n=!0:o instanceof Ya&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Ka=class extends In{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Fe}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var dd={name:"LuminosityHighPassShader",shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Fe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var gr=class s extends In{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new me(e.x,e.y):new me(256,256),this.clearColor=new Fe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(r,o,{type:vn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new Jt(r,o,{type:vn});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let d=new Jt(r,o,{type:vn});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),o=Math.round(o/2)}let a=dd;this.highPassUniforms=$n.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Bt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new me(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;let u=Xa;this.copyUniforms=$n.clone(u.uniforms),this.blendMaterial=new Bt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Qs,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Fe,this.oldClearAlpha=1,this.basic=new Tn,this.fsQuad=new Xi(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new me(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){let t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Bt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new me(.5,.5)},direction:{value:new me(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new Bt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}};gr.BlurDirectionX=new me(1,0);gr.BlurDirectionY=new me(0,1);var pd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = OptimizedCineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var $a=class extends In{constructor(){super();let e=pd;this.uniforms=$n.clone(e.uniforms),this.material=new Na({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Xi(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qc&&(this.material.defines.AGX_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};function ni(s,e=!1){let t=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new xt,l=0;for(let u=0;u<s.length;++u){let h=s[u],f=0;if(t!==(h.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in h.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(h.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==h.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in h.morphAttributes){if(!i.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(h.morphAttributes[d])}if(e){let d;if(t)d=h.index.count;else if(h.attributes.position!==void 0)d=h.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,u),l+=d}}if(t){let u=0,h=[];for(let f=0;f<s.length;++f){let d=s[f].index;for(let g=0;g<d.count;++g)h.push(d.getX(g)+u);u+=s[f].attributes.position.count}c.setIndex(h)}for(let u in r){let h=md(r[u]);if(!h)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;c.setAttribute(u,h)}for(let u in o){let h=o[u][0].length;if(h===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[u]=[];for(let f=0;f<h;++f){let d=[];for(let _=0;_<o[u].length;++_)d.push(o[u][_][f]);let g=md(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;c.morphAttributes[u].push(g)}}return c}function md(s){let e,t,n,i=-1,r=0;for(let l=0;l<s.length;++l){let u=s[l];if(u.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=u.itemSize),t!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=u.normalized),n!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=u.gpuType),i!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=u.array.length}let o=new e(r),a=0;for(let l=0;l<s.length;++l)o.set(s[l].array,a),a+=s[l].array.length;let c=new Ct(o,t,n);return i!==void 0&&(c.gpuType=i),c}function ih(s,e){if(e===Zf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===lo||e===ka){let t=s.getIndex();if(t===null){let o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let n=t.count-2,i=[];if(e===lo)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");let r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Ja=class extends yi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new hh(t)}),this.register(function(t){return new yh(t)}),this.register(function(t){return new vh(t)}),this.register(function(t){return new Mh(t)}),this.register(function(t){return new fh(t)}),this.register(function(t){return new dh(t)}),this.register(function(t){return new ph(t)}),this.register(function(t){return new mh(t)}),this.register(function(t){return new ch(t)}),this.register(function(t){return new gh(t)}),this.register(function(t){return new uh(t)}),this.register(function(t){return new _h(t)}),this.register(function(t){return new xh(t)}),this.register(function(t){return new ah(t)}),this.register(function(t){return new Sh(t)}),this.register(function(t){return new Eh(t)})}load(e,t,n,i){let r=this,o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){let l=Wi.extractUrlBase(e);o=Wi.resolveURL(l,this.path)}else o=Wi.extractUrlBase(e);this.manager.itemStart(e);let a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new io(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r,o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===vd){try{o[ct.KHR_BINARY_GLTF]=new bh(e)}catch(h){i&&i(h);return}r=JSON.parse(o[ct.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Lh(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],f=r.extensionsRequired||[];switch(h){case ct.KHR_MATERIALS_UNLIT:o[h]=new lh;break;case ct.KHR_DRACO_MESH_COMPRESSION:o[h]=new Th(r,this.dracoLoader);break;case ct.KHR_TEXTURE_TRANSFORM:o[h]=new wh;break;case ct.KHR_MESH_QUANTIZATION:o[h]=new Ah;break;default:f.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){let n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}};function Qy(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}var ct={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ah=class{constructor(e){this.parser=e,this.name=ct.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,i=t.cache.get(n);if(i)return i;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,u=new Fe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],$t);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new pr(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Kn(u),l.distance=h;break;case"spot":l=new Fa(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Yi(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}},lh=class{constructor(){this.name=ct.KHR_MATERIALS_UNLIT}getMaterialType(){return Tn}extendParams(e,t,n){let i=[];e.color=new Fe(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],$t),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,gt))}return Promise.all(i)}},ch=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}},hh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){let a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(r)}},uh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}},fh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SHEEN}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[];t.sheenColor=new Fe(0,0,0),t.sheenRoughness=0,t.sheen=1;let o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){let a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],$t)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}},dh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}},ph=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_VOLUME}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;let a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Fe().setRGB(a[0],a[1],a[2],$t),Promise.all(r)}},mh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_IOR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}},gh=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_SPECULAR}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));let a=o.specularColorFactor||[1,1,1];return t.specularColor=new Fe().setRGB(a[0],a[1],a[2],$t),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,gt)),Promise.all(r)}},xh=class{constructor(e){this.parser=e,this.name=ct.EXT_MATERIALS_BUMP}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}},_h=class{constructor(e){this.parser=e,this.name=ct.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){let n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Sn}extendMaterialParams(e,t){let n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();let r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}},yh=class{constructor(e){this.parser=e,this.name=ct.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;let r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}},vh=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Mh=class{constructor(e){this.parser=e,this.name=ct.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){let t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;let o=r.extensions[t],a=i.images[o.source],c=n.textureLoader;if(a.uri){let l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){let t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}},Sh=class{constructor(e){this.name=ct.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){let c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,f=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,f,i.mode,i.filter).then(function(d){return d.buffer}):o.ready.then(function(){let d=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(d),u,h,f,i.mode,i.filter),d})})}else return null}},Eh=class{constructor(e){this.name=ct.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let i=t.meshes[n.mesh];for(let l of i.primitives)if(l.mode!==Gn.TRIANGLES&&l.mode!==Gn.TRIANGLE_STRIP&&l.mode!==Gn.TRIANGLE_FAN&&l.mode!==void 0)return null;let o=n.extensions[this.name].attributes,a=[],c={};for(let l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],f=l[0].count,d=[];for(let g of h){let _=new Ve,m=new C,p=new Kt,v=new C(1,1,1),x=new zi(g.geometry,g.material,f);for(let M=0;M<f;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),x.setMatrixAt(M,_.compose(m,p,v));for(let M in c)if(M==="_COLOR_0"){let I=c[M];x.instanceColor=new ds(I.array,I.itemSize,I.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,c[M]);It.prototype.copy.call(x,g),this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}},vd="glTF",ho=12,gd={JSON:1313821514,BIN:5130562},bh=class{constructor(e){this.name=ct.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,ho),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==vd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let i=this.header.length-ho,r=new DataView(e,ho),o=0;for(;o<i;){let a=r.getUint32(o,!0);o+=4;let c=r.getUint32(o,!0);if(o+=4,c===gd.JSON){let l=new Uint8Array(e,ho+o,a);this.content=n.decode(l)}else if(c===gd.BIN){let l=ho+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Th=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ct.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(let u in o){let h=Ch[u]||u.toLowerCase();a[h]=o[u]}for(let u in e.attributes){let h=Ch[u]||u.toLowerCase();if(o[u]!==void 0){let f=n.accessors[e.attributes[u]],d=xr[f.componentType];l[h]=d.name,c[h]=f.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,f){i.decodeDracoFile(u,function(d){for(let g in d.attributes){let _=d.attributes[g],m=c[g];m!==void 0&&(_.normalized=m)}h(d)},a,l,$t,f)})})}},wh=class{constructor(){this.name=ct.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}},Ah=class{constructor(){this.name=ct.KHR_MESH_QUANTIZATION}},ja=class extends ki{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,f=h*h,d=f*h,g=e*l,_=g-l,m=-2*d+3*f,p=d-f,v=1-m,x=p-f+h;for(let M=0;M!==a;M++){let I=o[_+M+a],A=o[_+M+c]*u,b=o[g+M+a],F=o[g+M]*u;r[M]=v*I+x*A+m*b+p*F}return r}},ev=new Kt,Rh=class extends ja{interpolate_(e,t,n,i){let r=super.interpolate_(e,t,n,i);return ev.fromArray(r).normalize().toArray(r),r}},Gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},xr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},xd={9728:Yt,9729:an,9984:sa,9985:Yc,9986:Ur,9987:Oi},_d={33071:yn,33648:Vr,10497:En},sh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ch={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},tv={CUBICSPLINE:void 0,LINEAR:us,STEP:ir},rh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function nv(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new Be({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Bn})),s.DefaultMaterial}function xs(s,e,t){for(let n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Yi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function iv(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){let h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);let o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){let h=e[l];if(n){let f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(f)}if(i){let f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(f)}if(r){let f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(f)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],f=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=f),s.morphTargetsRelative=!0,s})}function sv(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function rv(s){let e,t=s.extensions&&s.extensions[ct.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oh(t.attributes):e=s.indices+":"+oh(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+oh(s.targets[n]);return e}function oh(s){let e="",t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ph(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ov(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}var av=new Ve,Lh=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=!1,r=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,i=navigator.userAgent.indexOf("Firefox")>-1,r=i?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||i&&r<98?this.textureLoader=new dr(this.options.manager):this.textureLoader=new Ba(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new io(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){let a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return xs(r,a,i),Yi(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){let o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){let o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let i=n.clone(),r=(o,a)=>{let c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(let[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let i=e(t[n]);if(i)return i}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let i=0;i<t.length;i++){let r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ct.KHR_BINARY_GLTF].body);let i=this.options;return new Promise(function(r,o){n.load(Wi.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){let t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){let o=sh[i.type],a=xr[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new Ct(l,o,c))}let r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){let a=o[0],c=sh[i.type],l=xr[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,f=i.byteOffset||0,d=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0,_,m;if(d&&d!==h){let p=Math.floor(f/d),v="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count,x=t.cache.get(v);x||(_=new l(a,p*d,i.count*d/u),x=new hr(_,d/u),t.cache.add(v,x)),m=new fs(x,c,f%d/u,g)}else a===null?_=new l(i.count*c):_=new l(a,f,i.count*c),m=new Ct(_,c,g);if(i.sparse!==void 0){let p=sh.SCALAR,v=xr[i.sparse.indices.componentType],x=i.sparse.indices.byteOffset||0,M=i.sparse.values.byteOffset||0,I=new v(o[1],x,i.sparse.count*p),A=new l(o[2],M,i.sparse.count*c);a!==null&&(m=new Ct(m.array.slice(),m.itemSize,m.normalized));for(let b=0,F=I.length;b<F;b++){let S=I[b];if(m.setX(S,A[b*c]),c>=2&&m.setY(S,A[b*c+1]),c>=3&&m.setZ(S,A[b*c+2]),c>=4&&m.setW(S,A[b*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r],a=this.textureLoader;if(o.uri){let c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){let i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);let f=(r.samplers||{})[o.sampler]||{};return u.magFilter=xd[f.magFilter]||an,u.minFilter=xd[f.minFilter]||Oi,u.wrapS=_d[f.wrapS]||En,u.wrapT=_d[f.wrapT]||En,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());let o=i.images[e],a=self.URL||self.webkitURL,c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;let f=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(f),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(f,d){let g=f;t.isImageBitmapLoader===!0&&(g=function(_){let m=new cn(_);m.needsUpdate=!0,f(m)}),t.load(Wi.resolveURL(h,r.path),g,void 0,d)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),h.userData.mimeType=o.mimeType||ov(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){let r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ct.KHR_TEXTURE_TRANSFORM]){let a=n.extensions!==void 0?n.extensions[ct.KHR_TEXTURE_TRANSFORM]:void 0;if(a){let c=r.associations.get(o);o=r.extensions[ct.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){let t=e.geometry,n=e.material,i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){let a="PointsMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Kr,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){let a="LineBasicMaterial:"+n.uuid,c=this.cache.get(a);c||(c=new Zr,bn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Be}loadMaterial(e){let t=this,n=this.json,i=this.extensions,r=n.materials[e],o,a={},c=r.extensions||{},l=[];if(c[ct.KHR_MATERIALS_UNLIT]){let h=i[ct.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{let h=r.pbrMetallicRoughness||{};if(a.color=new Fe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){let f=h.baseColorFactor;a.color.setRGB(f[0],f[1],f[2],$t),a.opacity=f[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,gt)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Ft);let u=r.alphaMode||rh.OPAQUE;if(u===rh.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===rh.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Tn&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new me(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Tn&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Tn){let h=r.emissiveFactor;a.emissive=new Fe().setRGB(h[0],h[1],h[2],$t)}return r.emissiveTexture!==void 0&&o!==Tn&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,gt)),Promise.all(l).then(function(){let h=new o(a);return r.name&&(h.name=r.name),Yi(h,r),t.associations.set(h,{materials:e}),r.extensions&&xs(i,h,r),h})}createUniqueName(e){let t=Tt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ct.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return yd(c,a,t)})}let o=[];for(let a=0,c=e.length;a<c;a++){let l=e[a],u=rv(l),h=i[u];if(h)o.push(h.promise);else{let f;l.extensions&&l.extensions[ct.KHR_DRACO_MESH_COMPRESSION]?f=r(l):f=yd(new xt,l,t),i[u]={primitive:l,promise:f},o.push(f)}}return Promise.all(o)}loadMesh(e){let t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){let u=o[c].material===void 0?nv(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let d=0,g=u.length;d<g;d++){let _=u[d],m=o[d],p,v=l[d];if(m.mode===Gn.TRIANGLES||m.mode===Gn.TRIANGLE_STRIP||m.mode===Gn.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new Ma(_,v):new ze(_,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Gn.TRIANGLE_STRIP?p.geometry=ih(p.geometry,ka):m.mode===Gn.TRIANGLE_FAN&&(p.geometry=ih(p.geometry,lo));else if(m.mode===Gn.LINES)p=new Ea(_,v);else if(m.mode===Gn.LINE_STRIP)p=new ur(_,v);else if(m.mode===Gn.LINE_LOOP)p=new ba(_,v);else if(m.mode===Gn.POINTS)p=new Ta(_,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&sv(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Yi(p,r),m.extensions&&xs(i,p,m),t.assignFinalMaterial(p),h.push(p)}for(let d=0,g=h.length;d<g;d++)t.associations.set(h[d],{meshes:e,primitives:d});if(h.length===1)return r.extensions&&xs(i,h[0],r),h[0];let f=new Ye;r.extensions&&xs(i,f,r),t.associations.set(f,{meshes:e});for(let d=0,g=h.length;d<g;d++)f.add(h[d]);return f})}loadCamera(e){let t,n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Gt(jf.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new Fi(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Yi(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){let r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){let h=o[l];if(h){a.push(h);let f=new Ve;r!==null&&f.fromArray(r.array,l*16),c.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Sa(a,c)})}loadAnimation(e){let t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,f=i.channels.length;h<f;h++){let d=i.channels[h],g=i.samplers[d.sampler],_=d.target,m=_.node,p=i.parameters!==void 0?i.parameters[g.input]:g.input,v=i.parameters!==void 0?i.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),u.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let f=h[0],d=h[1],g=h[2],_=h[3],m=h[4],p=[];for(let v=0,x=f.length;v<x;v++){let M=f[v],I=d[v],A=g[v],b=_[v],F=m[v];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let S=n._createAnimationTracks(M,I,A,b,F);if(S)for(let E=0;E<S.length;E++)p.push(S[E])}return new gs(r,void 0,p)})}createNodeMesh(e){let t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){let o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){let t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));let c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){let u=l[0],h=l[1],f=l[2];f!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(f,av)});for(let d=0,g=h.length;d<g;d++)u.add(h[d]);return u})}_loadNodeShallow(e){let t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Yr:l.length>1?u=new Ye:l.length===1?u=l[0]:u=new It,u!==l[0])for(let h=0,f=l.length;h<f;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Yi(u,r),r.extensions&&xs(n,u,r),r.matrix!==void 0){let h=new Ve;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],i=this,r=new Ye;n.name&&(r.name=i.createUniqueName(n.name)),Yi(r,n),n.extensions&&xs(t,r,n);let o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);let l=u=>{let h=new Map;for(let[f,d]of i.associations)(f instanceof bn||f instanceof cn)&&h.set(f,d);return u.traverse(f=>{let d=i.associations.get(f);d!=null&&h.set(f,d)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){let o=[],a=e.name?e.name:e.uuid,c=[];qi[r.path]===qi.weights?e.traverse(function(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}):c.push(a);let l;switch(qi[r.path]){case qi.weights:l=_i;break;case qi.rotation:l=Zn;break;case qi.position:case qi.scale:l=ti;break;default:switch(n.itemSize){case 1:l=_i;break;case 2:case 3:default:l=ti;break}break}let u=i.interpolation!==void 0?tv[i.interpolation]:us,h=this._getArrayFromAccessor(n);for(let f=0,d=c.length;f<d;f++){let g=new l(c[f]+"."+qi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Ph(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let i=this instanceof Zn?Rh:ja;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function lv(s,e,t){let n=e.attributes,i=new Mn;if(n.POSITION!==void 0){let a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new C(c[0],c[1],c[2]),new C(l[0],l[1],l[2])),a.normalized){let u=Ph(xr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let a=new C,c=new C;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let f=t.json.accessors[h.POSITION],d=f.min,g=f.max;if(d!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(g[2]))),f.normalized){let _=Ph(xr[f.componentType]);c.multiplyScalar(_)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;let o=new Ln;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function yd(s,e,t){let n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(let o in n){let a=Ch[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){let o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return ut.workingColorSpace!==$t&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${ut.workingColorSpace}" not supported.`),Yi(s,e),lv(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?iv(s,e.targets,t):s})}var{TEX:Md,MODELS:Sd,SKIES:Ed}=window.CHILL2;var _s={},_r={},Ih={};async function bd(s,e){let t=new dr,n=Math.min(8,s.capabilities.getMaxAnisotropy()),i=[];for(let[a,c]of Object.entries(Md)){_s[a]={};for(let[l,u]of Object.entries(c))i.push(t.loadAsync(u).then(h=>{h.wrapS=h.wrapT=En,h.colorSpace=l==="d"?gt:ln,h.anisotropy=n,_s[a][l]=h}))}for(let[a,c]of Object.entries(Ed))i.push(t.loadAsync(c.jpg).then(l=>{l.wrapS=En,l.wrapT=yn,l.colorSpace=ln,l.generateMipmaps=!1,l.minFilter=l.magFilter=an,Ih[a]={map:l,info:c.info}}));let r=new Ja;for(let[a,c]of Object.entries(Sd))i.push(r.parseAsync(c.buffer.slice(c.byteOffset,c.byteOffset+c.byteLength),"").then(l=>{l.scene.traverse(u=>{u.isMesh&&(u.castShadow=u.receiveShadow=!0,u.material.map&&(u.material.map.anisotropy=n))}),l.scene.userData.box=new Mn().setFromObject(l.scene),l.scene.userData.clips=l.animations,_r[a]=l.scene}));let o=0;for(let a of i)a.then(()=>e==null?void 0:e(++o/i.length));await Promise.all(i)}function _t(s,e,t,n,i,r=0,o=1,a=null){let c=_r[s].clone(),l=new Ye,u=_r[s].userData.box;return a&&(c.traverse(h=>{h.isMesh&&!a(h.name)&&(h.visible=!1)}),u=new Mn,c.updateMatrixWorld(!0),c.traverse(h=>{h.isMesh&&h.visible&&u.expandByObject(h)}),c.position.set(-(u.min.x+u.max.x)/2,0,-(u.min.z+u.max.z)/2)),c.position.y=-u.min.y,l.add(c),l.position.set(t,n,i),l.rotation.y=r,l.scale.setScalar(o),e.add(l),l}var Qa=class extends ze{constructor(e,t={}){super(e),this.isWater=!0;let n=this,i=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,o=t.clipBias!==void 0?t.clipBias:0,a=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,u=t.sunDirection!==void 0?t.sunDirection:new C(.70707,.70707,0),h=new Fe(t.sunColor!==void 0?t.sunColor:16777215),f=new Fe(t.waterColor!==void 0?t.waterColor:8355711),d=t.eye!==void 0?t.eye:new C(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,_=t.side!==void 0?t.side:Bn,m=t.fog!==void 0?t.fog:!1,p=new Yn,v=new C,x=new C,M=new C,I=new Ve,A=new C(0,0,-1),b=new pt,F=new C,S=new C,E=new pt,w=new Ve,O=new Gt,q=new Jt(i,r),U={name:"MirrorShader",uniforms:$n.merge([Ae.fog,Ae.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Ve},sunColor:{value:new Fe(8355711)},sunDirection:{value:new C(.70707,.70707,0)},eye:{value:new C},waterColor:{value:new Fe(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.3;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), ( vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight ), reflectance);
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},B=new Bt({name:U.name,uniforms:$n.clone(U.uniforms),vertexShader:U.vertexShader,fragmentShader:U.fragmentShader,lights:!0,side:_,fog:m});B.uniforms.mirrorSampler.value=q.texture,B.uniforms.textureMatrix.value=w,B.uniforms.alpha.value=a,B.uniforms.time.value=c,B.uniforms.normalSampler.value=l,B.uniforms.sunColor.value=h,B.uniforms.waterColor.value=f,B.uniforms.sunDirection.value=u,B.uniforms.distortionScale.value=g,B.uniforms.eye.value=d,n.material=B,n.onBeforeRender=function(W,re,se){if(x.setFromMatrixPosition(n.matrixWorld),M.setFromMatrixPosition(se.matrixWorld),I.extractRotation(n.matrixWorld),v.set(0,0,1),v.applyMatrix4(I),F.subVectors(x,M),F.dot(v)>0)return;F.reflect(v).negate(),F.add(x),I.extractRotation(se.matrixWorld),A.set(0,0,-1),A.applyMatrix4(I),A.add(M),S.subVectors(x,A),S.reflect(v).negate(),S.add(x),O.position.copy(F),O.up.set(0,1,0),O.up.applyMatrix4(I),O.up.reflect(v),O.lookAt(S),O.far=se.far,O.updateMatrixWorld(),O.projectionMatrix.copy(se.projectionMatrix),w.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),w.multiply(O.projectionMatrix),w.multiply(O.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(v,x),p.applyMatrix4(O.matrixWorldInverse),b.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let j=O.projectionMatrix;E.x=(Math.sign(b.x)+j.elements[8])/j.elements[0],E.y=(Math.sign(b.y)+j.elements[9])/j.elements[5],E.z=-1,E.w=(1+j.elements[10])/j.elements[14],b.multiplyScalar(2/b.dot(E)),j.elements[2]=b.x,j.elements[6]=b.y,j.elements[10]=b.z+1-o,j.elements[14]=b.w,d.setFromMatrixPosition(se.matrixWorld);let ce=W.getRenderTarget(),de=W.xr.enabled,Se=W.shadowMap.autoUpdate;n.visible=!1,W.xr.enabled=!1,W.shadowMap.autoUpdate=!1,W.setRenderTarget(q),W.state.buffers.depth.setMask(!0),W.autoClear===!1&&W.clear(),W.render(re,O),n.visible=!0,W.xr.enabled=de,W.shadowMap.autoUpdate=Se,W.setRenderTarget(ce);let te=se.viewport;te!==void 0&&W.state.viewport(te)}}};var wt=(s,e,t)=>Math.max(e,Math.min(t,s)),yt=(s,e,t)=>s+(e-s)*t,rn=(s,e,t)=>{let n=wt((t-s)/(e-s),0,1);return n*n*(3-2*n)},ys=s=>()=>(s=Math.imul(s,1664525)+1013904223>>>0)/4294967296,Zi=(s,e,t)=>{let n=((e-s+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;return s+wt(n,-t,t)},el=(s,e)=>{let t=Math.imul(s,374761393)+Math.imul(e,668265263);return t=Math.imul(t^t>>>13,1274126177),((t^t>>>16)>>>0)/4294967296};function uo(s,e){let t=Math.floor(s),n=Math.floor(e),i=s-t,r=e-n,o=i*i*(3-2*i),a=r*r*(3-2*r);return yt(yt(el(t,n),el(t+1,n),o),yt(el(t,n+1),el(t+1,n+1),o),a)}var yr=(s,e,t=4)=>{let n=0,i=.5;for(let r=0;r<t;r++)n+=i*uo(s,e),s*=2.03,e*=2.03,i*=.5;return n};function qt(s,e={}){let t=_s[s],{color:n=16777215,metal:i=!1,env:r=1,bump:o=1,...a}=e;return new Be({map:t.d,normalMap:t.n,normalScale:new me(o,o),aoMap:t.arm,roughnessMap:t.arm,metalnessMap:i?t.arm:null,metalness:i?1:0,roughness:1,color:n,envMapIntensity:r,...a})}var ht=(s,e={})=>new Be({color:s,roughness:.8,metalness:0,...e});function cv(s,e,t){let n=s.attributes.position,i=s.attributes.normal,r=new Float32Array(n.count*2);for(let o=0;o<n.count;o++){let a=Math.abs(i.getX(o)),c=Math.abs(i.getY(o)),l=Math.abs(i.getZ(o)),u,h;c>=a&&c>=l?(u=n.getX(o),h=n.getZ(o)):a>=l?(u=n.getZ(o),h=n.getY(o)):(u=n.getX(o),h=n.getY(o)),t&&([u,h]=[h,u]),r[o*2]=u/e,r[o*2+1]=h/e}s.setAttribute("uv",new Ct(r,2))}var Dh=new Ve,hv=new or,vi=class{constructor(){this.by=new Map}add(e,t,n,i={}){e.index&&(e=e.toNonIndexed()),n&&e.applyMatrix4(n),i.keep||cv(e,i.tile||1,i.swap);for(let o of Object.keys(e.attributes))o!=="position"&&o!=="normal"&&o!=="uv"&&e.deleteAttribute(o);let r=this.by.get(t);return r||this.by.set(t,r=[]),r.push(e),this}at(e,t,n,i){return i?Dh.makeRotationFromEuler(hv.set(i[0],i[1],i[2],"YXZ")):Dh.identity(),Dh.setPosition(e,t,n).clone()}box(e,t,n,i,r,o,a,c={}){return this.add(new Ue(r,o,a),e,this.at(t,n,i,c.rot),c)}span(e,t,n,i,r,o,a,c={}){return this.box(e,(t+r)/2,(n+o)/2,(i+a)/2,Math.abs(r-t),Math.abs(o-n),Math.abs(a-i),c)}cyl(e,t,n,i,r,o,a,c={}){return this.add(new it(r,o,a,c.sides||12,1,!!c.open),e,this.at(t,n,i,c.rot),{keep:!0,...c})}beam(e,t,n,i,r,o={}){let a=new C(n[0]-t[0],n[1]-t[1],n[2]-t[2]),c=a.length(),l=new Kt().setFromUnitVectors(new C(1,0,0),a.normalize()),u=new Ve().compose(new C((t[0]+n[0])/2,(t[1]+n[1])/2,(t[2]+n[2])/2),l,new C(1,1,1));return this.add(new Ue(c,r,i),e,u,o)}build(e,t={}){let n=[];for(let[i,r]of this.by){let o=new ze(ni(r),i);o.castShadow=t.cast!==!1,o.receiveShadow=t.receive!==!1,e.add(o),n.push(o)}return this.by.clear(),n}};function Mi(s,e,t=16,n=8,i=1){let r=[],o=[],a=[],c=[],l=new C,u=new C,h=new C,f=new C,d=new C,g=new C(0,1,0);for(let m=0;m<=t;m++){let p=m/t;l.copy(s(p)),u.copy(s(Math.min(1,p+.01))),h.copy(u).sub(s(Math.max(0,p-.01))).normalize(),f.crossVectors(h,Math.abs(h.y)>.95?new C(1,0,0):g).normalize(),d.crossVectors(h,f).normalize();for(let v=0;v<=n;v++){let x=v/n*Math.PI*2,M=Math.cos(x),I=Math.sin(x),A=e(p),b=f.x*M+d.x*I,F=f.y*M+d.y*I,S=f.z*M+d.z*I;r.push(l.x+b*A,l.y+F*A,l.z+S*A),o.push(b,F,S),a.push(v/n,p*i)}}for(let m=0;m<t;m++)for(let p=0;p<n;p++){let v=m*(n+1)+p;c.push(v,v+1,v+n+1,v+1,v+n+2,v+n+1)}let _=new xt;return _.setAttribute("position",new We(r,3)),_.setAttribute("normal",new We(o,3)),_.setAttribute("uv",new We(a,2)),_.setIndex(c),_}function tl(s){s.updateMatrixWorld(!0);let e=new Ve().copy(s.matrixWorld).invert(),t=new Map,n=[];s.traverse(i=>{if(!i.isMesh||Array.isArray(i.material))return;let r=i.geometry.clone();r.index&&(r=r.toNonIndexed()),r.applyMatrix4(new Ve().multiplyMatrices(e,i.matrixWorld));for(let a of Object.keys(r.attributes))a!=="position"&&a!=="normal"&&a!=="uv"&&r.deleteAttribute(a);let o=t.get(i.material);o||t.set(i.material,o=[]),o.push(r),n.push(i)});for(let i of n)i.removeFromParent();for(let[i,r]of t){let o=new ze(ni(r),i);o.castShadow=o.receiveShadow=!0,s.add(o)}return s}function vt(s,e,t,n=!0){let i=document.createElement("canvas");i.width=s,i.height=e,t(i.getContext("2d"),s,e);let r=new fr(i);return r.colorSpace=n?gt:ln,r.anisotropy=8,r}var Dn=-.35,uv=.55,K=3,fo=[],Nh=[],Uh=[],hn=(s,e,t,n,i,r)=>{let o={x0:Math.min(s,e),x1:Math.max(s,e),z0:Math.min(t,n),z1:Math.max(t,n),y0:i,y1:r};return fo.push(o),o},Si=(s,e,t,n,i)=>{let r={x0:Math.min(s,e),x1:Math.max(s,e),z0:Math.min(t,n),z1:Math.max(t,n),y:i};return Nh.push(r),r};function Ei(s,e){let t=(s-2)/34,n=(e-28)/44,i=Math.atan2(n,t);return(1+.06*Math.sin(i*3+1)+.035*Math.sin(i*7+2.3)-Math.hypot(t,n))*38}var fv=(s,e)=>Math.max(rn(26,18,Math.hypot(s+1,(e-2)*1.2)),rn(4,0,Math.max(Math.abs(s-18)-6,Math.abs(e-3)-7)));function Rt(s,e){let t=Ei(s,e),n=fv(s,e);return-1.9+1.9*rn(-9,6.5,t)+(yr(s*.045+7,e*.045+3)-.45)*.9*rn(5,16,t)*(1-n)+(yr(s*.4,e*.4,2)-.5)*.06*(1-n)}function ii(s,e,t){let n=Rt(s,e);for(let i of Nh)if(s>=i.x0&&s<=i.x1&&e>=i.z0&&e<=i.z1){let r=typeof i.y=="function"?i.y(s,e):i.y;r<=t+uv&&r>n&&(n=r)}return n}function vs(s,e,t,n,i=1.7){let r=s.x+e,o=s.z+t,a=s.y+.35,c=s.y+i;for(let l=0;l<2;l++)for(let u of fo){if(u.y1<=a||u.y0>=c||r<u.x0-n||r>u.x1+n||o<u.z0-n||o>u.z1+n)continue;let h=Math.max(u.x0,Math.min(u.x1,r)),f=Math.max(u.z0,Math.min(u.z1,o)),d=r-h,g=o-f,_=Math.hypot(d,g);if(!(_>=n))if(_>1e-6)r=h+d/_*n,o=f+g/_*n;else{let m=r-u.x0,p=u.x1-r,v=o-u.z0,x=u.z1-o,M=Math.min(m,p,v,x);M===m?r=u.x0-n:M===p?r=u.x1+n:M===v?o=u.z0-n:o=u.z1+n}}s.x=r,s.z=o}function Td(s,e,t){let n=t;for(let i of fo){let r=0,o=n,a=!0;for(let[c,l,u]of[["x",i.x0,i.x1],["y",i.y0,i.y1],["z",i.z0,i.z1]]){if(Math.abs(e[c])<1e-8){if(s[c]<l||s[c]>u){a=!1;break}continue}let h=(l-s[c])/e[c],f=(u-s[c])/e[c];if(h>f&&([h,f]=[f,h]),r=Math.max(r,h),o=Math.min(o,f),r>o){a=!1;break}}a&&r<n&&(n=r)}for(let i of Nh){if(typeof i.y!="number"||Math.abs(e.y)<1e-8)continue;let r=(i.y-s.y)/e.y;if(r<=.05||r>=n)continue;let o=s.x+e.x*r,a=s.z+e.z*r;o>=i.x0&&o<=i.x1&&a>=i.z0&&a<=i.z1&&(n=r)}for(let i of Uh){if(Math.abs(e.y)<1e-8)continue;let r=(i.y-s.y)/e.y;if(r<=.05||r>=n)continue;let o=s.x+e.x*r,a=s.z+e.z*r;o>=i.x0&&o<=i.x1&&a>=i.z0&&a<=i.z1&&(n=r)}return n}var wd={dusk:{gain:.42,envGain:1,sun:16768188,power:4.4,lift:.3,exposure:1.1,sea:732986,sunSea:16762250,lamps:1,fogNear:120,fogFar:2200},day:{gain:1.25,envGain:1,sun:16774372,power:4.2,lift:0,exposure:.85,sea:674394,sunSea:16777215,lamps:.15,fogNear:200,fogFar:3200}},po=Math.atan2(.6,-.8);function Ad(s){let{scene:e,renderer:t,hi:n}=s,i=new Bt({side:sn,depthWrite:!1,fog:!1,uniforms:{map:{value:null},rot:{value:0},keep:{value:.56},maxv:{value:8},gain:{value:1}},vertexShader:"varying vec3 vDir; void main() { vDir = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`uniform sampler2D map; uniform float rot, keep, maxv, gain; varying vec3 vDir;
      void main() { vec3 d = normalize(vDir); float u = (atan(d.z, d.x) + rot) / 6.2831853, v = (1.5707963 - asin(clamp(d.y, -1.0, 1.0))) / (3.14159265 * keep);
        vec3 c = texture2D(map, vec2(u, 1.0 - min(v, 0.998))).rgb; gl_FragColor = vec4(pow(c, vec3(2.2)) * maxv * gain, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`}),r=new ze(new st(4500,48,24),i);r.renderOrder=-10,r.frustumCulled=!1,e.add(r);let o=new pr(16777215,3);o.castShadow=!0;let a=n?4096:2048,c=n?30:22;o.shadow.mapSize.set(a,a),Object.assign(o.shadow.camera,{left:-c,right:c,top:c,bottom:-c,near:1,far:260}),o.shadow.camera.updateProjectionMatrix(),o.shadow.bias=-4e-4,o.shadow.normalBias=.035,e.add(o,o.target);let l=new C,u=new va(8947848,100,2e3);e.fog=u;let h=new lr(t),f=new cr,d=new ze(new st(50,32,16),i),g=new ze(new La(50,24),new Tn({color:9075298}));g.rotation.x=-Math.PI/2,g.position.y=-1.2,f.add(d,g);let _=null,m=vt(256,256,(M,I,A)=>{let b=M.createImageData(I,A),F=[[1,2,.5,0],[3,-1,.28,1.3],[-2,5,.2,2.1],[6,3,.12,4],[-7,-4,.1,.7],[9,-8,.06,5.2],[13,5,.04,3.3]],S=(E,w)=>{let O=0;for(let[q,U,B,W]of F)O+=B*Math.sin((q*E+U*w)*2*Math.PI+W);return O};for(let E=0;E<A;E++)for(let w=0;w<I;w++){let O=w/I,q=E/A,U=1/I,B=(S(O+U,q)-S(O-U,q))*5,W=(S(O,q+U)-S(O,q-U))*5,re=Math.hypot(B,W,1),se=(E*I+w)*4;b.data[se]=127.5*(1-B/re),b.data[se+1]=127.5*(1-W/re),b.data[se+2]=127.5*(1+1/re),b.data[se+3]=255}M.putImageData(b,0,0)},!1);m.wrapS=m.wrapT=En;let p,v;if(n)p=new Qa(new Xt(9e3,9e3),{textureWidth:768,textureHeight:768,waterNormals:m,sunDirection:new C,sunColor:16777215,waterColor:732986,distortionScale:1.6,fog:!0}),p.material.uniforms.size.value=.12,p.material.uniforms.mirrorSampler.value.type=vn,p.material.fragmentShader=p.material.fragmentShader.replace("float rf0 = 0.3;","float rf0 = 0.06;").replace("vec3( 0.1 ) + reflectionSample * 0.9 + reflectionSample * specularLight","reflectionSample + sunColor * specularLight * 0.35");else{let M=m.clone();M.repeat.set(900,900),v=new Be({color:732986,roughness:.14,metalness:0,normalMap:M,normalScale:new me(.22,.22),envMapIntensity:.8}),p=new ze(new Xt(9e3,9e3),v)}p.rotation.x=-Math.PI/2,p.position.y=Dn,p.receiveShadow=!1,e.add(p);let x={names:Object.keys(wd),now:null,sun:o,dir:l,lamps:1,set(M){let I=wd[M],{map:A,info:b}=Ih[M];x.now=M,x.lamps=I.lamps,Object.assign(i.uniforms,{}),i.uniforms.map.value=A,i.uniforms.keep.value=b.keep,i.uniforms.maxv.value=b.max,i.uniforms.gain.value=I.gain,i.uniforms.rot.value=b.sun.u*2*Math.PI-po;let F=Math.max(b.sun.el,I.lift);if(l.set(Math.cos(F)*Math.cos(po),Math.sin(F),Math.cos(F)*Math.sin(po)),o.color.set(I.sun),o.intensity=I.power,t.toneMappingExposure=I.exposure,u.color.setRGB(b.haze[0]*I.gain,b.haze[1]*I.gain,b.haze[2]*I.gain),u.near=I.fogNear,u.far=I.fogFar,i.uniforms.gain.value=I.envGain,_==null||_.dispose(),_=h.fromScene(f,0,.1,100),e.environment=_.texture,i.uniforms.gain.value=I.gain,n){let S=p.material.uniforms;S.sunDirection.value.set(Math.cos(b.sun.el)*Math.cos(po),Math.sin(Math.max(b.sun.el,.12)),Math.cos(b.sun.el)*Math.sin(po)).normalize(),S.sunColor.value.set(I.sunSea),S.waterColor.value.set(I.sea)}else v.color.set(I.sea)},update(M,I,A){r.position.copy(I.position);let b=2*c/a,F=A||I.position;o.target.position.set(Math.round(F.x/b)*b,0,Math.round(F.z/b)*b),o.position.copy(o.target.position).addScaledVector(l,120),n?p.material.uniforms.time.value+=M*.35:(v.normalMap.offset.x+=M*.012,v.normalMap.offset.y+=M*.007)}};return x}var Ki={x:2,z:34,rx:19,rz:24};function mo(s,e){let t=Math.atan2((e-Ki.z)/Ki.rz,(s-Ki.x)/Ki.rx),n=Ki.x+Math.cos(t)*Ki.rx,i=Ki.z+Math.sin(t)*Ki.rz,r=Math.hypot(s-n,e-i),o=wt((e-1)/9.5,0,1);return r=Math.min(r,Math.hypot(s-(-1+3*o),e-(1+9.5*o))-1.2*(1-o)),Math.min(r,Math.hypot(s-12.5,e-4.5)-1.5)}var Rd={value:0};function Oh(s,e=.25,t=!1){return s.onBeforeCompile=n=>{n.uniforms.wind=Rd,n.vertexShader=`uniform float wind; attribute float sway;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      ${t?"vec3 wp = instanceMatrix[3].xyz;":"vec3 wp = position;"}
      float ph = wind * 1.3 + wp.x * 0.35 + wp.z * 0.27, g = sin(ph) * 0.6 + sin(ph * 2.3 + 1.7) * 0.3 + sin(wind * 4.1 + wp.x * 2.1) * 0.1;
      transformed.x += g * sway * ${e.toFixed(3)}; transformed.z += cos(ph * 0.8) * sway * ${(e*.6).toFixed(3)}; transformed.y -= abs(g) * sway * ${(e*.25).toFixed(3)};`)},s}function Cd(s){let{scene:e,hi:t}=s,n=ys(20261125),i=t?220:150,r=300,o=new Xt(r,r,i,i);o.rotateX(-Math.PI/2);let a=o.attributes.position,c=new Float32Array(a.count*3),l=o.attributes.uv;for(let z=0;z<a.count;z++){let oe=a.getX(z)/(r/2),le=a.getZ(z)/(r/2),ne=2+Math.sign(oe)*Math.abs(oe)**1.7*(r/2),ve=26+Math.sign(le)*Math.abs(le)**1.7*(r/2),Ee=Rt(ne,ve),H=Ei(ne,ve);a.setXYZ(z,ne,Ee,ve),l.setXY(z,ne/3.2,ve/3.2);let J=rn(2.6,1.1,mo(ne,ve)+(uo(ne*.9,ve*.9)-.5)*1.2),D=rn(2,0,Math.max(Math.abs(ne+1)-7.5,Math.abs(ve+1)-5.5));c[z*3]=wt(rn(.42,.62,yr(ne*.07+40,ve*.07+11))*rn(5,12,H)*(1-J)*(1-D*.9)*(1-rn(1.5,0,Math.max(Math.abs(ne-18)-5,Math.abs(ve-3)-6))),0,1),c[z*3+1]=Math.max(J,D*.6)*rn(1,5,H),c[z*3+2]=rn(Dn+.3,Dn+.02,Ee)}o.setAttribute("splat",new Ct(c,3)),o.computeVertexNormals();let u=qt("sand",{env:.5});u.color.setRGB(2.5,2.4,2.18),u.onBeforeCompile=z=>{z.uniforms.tGrass={value:_s.grass.d},z.uniforms.tDirt={value:_s.drive.d},z.vertexShader=`attribute vec3 splat; varying vec3 vSplat;
`+z.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vSplat = splat;`),z.fragmentShader=`uniform sampler2D tGrass, tDirt; varying vec3 vSplat;
`+z.fragmentShader.replace("#include <map_fragment>",`
      vec4 cs = texture2D(map, vMapUv), cg = texture2D(tGrass, vMapUv * 1.31), cd = texture2D(tDirt, vMapUv * 0.83);
      vec4 far = texture2D(map, vMapUv * 0.13); cs.rgb *= 0.55 + far.rgb * 1.1; cs.rgb = mix(vec3(dot(cs.rgb, vec3(0.3, 0.6, 0.1))), cs.rgb, 0.32); // (a second, bigger helping of the same sand hides the repeat)
      vec4 tc = mix(cs, vec4(mix(vec3(dot(cd.rgb, vec3(0.3, 0.6, 0.1))), cd.rgb, 0.4) * vec3(0.66, 0.63, 0.58), 1.0), smoothstep(0.25, 0.75, vSplat.y + (cd.r - 0.5) * 0.5));
      tc = mix(tc, cg * vec4(0.6, 0.66, 0.45, 1.0), smoothstep(0.35, 0.7, vSplat.x + (cg.g - 0.35) * 0.9));
      tc.rgb *= mix(1.0, 0.5, vSplat.z); diffuseColor *= tc;`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
 roughnessFactor = mix(roughnessFactor, 0.22, vSplat.z);`)};let h=new ze(o,u);h.receiveShadow=!0,e.add(h);let f=vt(256,1024,(z,oe,le)=>{z.clearRect(0,0,oe,le);let ne=ys(7);for(let ve=0;ve<150;ve++){let Ee=ve/150,H=le-30-Ee*(le-50),J=oe*.47*Math.sin(Math.PI*(.12+Ee*.88))**.6*(.85+ne()*.2),D=18+ne()*26;for(let ee of[-1,1]){let Q=70+ne()*70;z.strokeStyle=`rgb(${40+ne()*50}, ${Q+40}, ${20+ne()*30})`,z.lineWidth=5+ne()*4,z.beginPath(),z.moveTo(oe/2,H),z.quadraticCurveTo(oe/2+ee*J*.55,H-D*.2,oe/2+ee*J,H+D*(.3+ne()*.5)),z.stroke()}}z.strokeStyle="#7d8a3c",z.lineWidth=7,z.beginPath(),z.moveTo(oe/2,le),z.lineTo(oe/2,12),z.stroke()}),d=Oh(new Be({map:f,alphaTest:.45,alphaToCoverage:t,side:Ft,roughness:.62,vertexColors:!0,envMapIntensity:.7}),.55),g=qt("bark",{color:14207152,env:.5}),_=[],m=[],p=[],v=[];function x(z,oe,le,ne,ve){let H=[],J=[],D=[],ee=[],Q=[],ue=Math.cos(oe),ie=Math.sin(oe),we=ne*.21;for(let R=0;R<=9;R++){let T=R/9,Y=ne*(T*Math.cos(le)+.12*T*T),he=ne*(T*Math.sin(le)-.62*T*T),pe=we*(.35+.65*Math.sin(Math.PI*Math.min(1,.1+T*.92))**.5);for(let[Z,xe]of[[0,-1],[1,0],[2,1]])H.push(z.x+ue*Y-ie*xe*pe,z.y+he-Math.abs(xe)*pe*.42,z.z+ie*Y+ue*xe*pe),J.push(.5+xe*.5,T),D.push(ve[0],ve[1],ve[2]),ee.push(T*T);if(R<9){let Z=R*3;Q.push(Z,Z+1,Z+3,Z+1,Z+4,Z+3,Z+1,Z+2,Z+4,Z+2,Z+5,Z+4)}}let ge=new xt;return ge.setAttribute("position",new We(H,3)),ge.setAttribute("uv",new We(J,2)),ge.setAttribute("color",new We(D,3)),ge.setAttribute("sway",new We(ee,1)),ge.setIndex(Q),ge.computeVertexNormals(),ge}function M(z,oe,le,ne,ve){let Ee=Rt(z,oe)-.15,H=ee=>new C(z+ne*ee*ee,Ee+le*ee,oe+ve*ee*ee),J=H(1);m.push(Mi(H,ee=>.2*(1-.42*ee)+.13*Math.max(0,1-ee*7)**2+.05*Math.max(0,ee-.94)*8,14,9,le/1.1));let D=17+Math.floor(n()*6);for(let ee=0;ee<D;ee++){let Q=ee/D,ue=1.05-Q*1.55+(n()-.5)*.2,ie=.75+n()*.4,we=Q>.8?.5:0;_.push(x(J,ee*2.4+n()*.5,ue,2.9+n()*1.1-Q*.5,[ie*(1+we*.7),ie*(1-we*.25),ie*(.9-we*.5)]))}for(let ee=0;ee<4;ee++){let Q=n()*6.28,ue=new st(.13,8,6);ue.translate(J.x+Math.cos(Q)*.22,J.y-.2-n()*.1,J.z+Math.sin(Q)*.22),v.push(ue)}return hn(z-.2,z+.2,oe-.2,oe+.2,Ee,Ee+3),p.push({x:z,z:oe,top:J,tall:le}),p[p.length-1]}M(-17.2,12.2,6.2,.5,.3),M(-13.6,13.4,6.8,-.4,.5),M(-2.5,-9.5,10.5,-1.4,.6),M(1.5,-11,9.2,.9,-.5),M(11.2,-1.2,6.4,.8,.5),M(-11,-6,8,-1.2,-.3);for(let z=0,oe=0;oe<(t?26:16)&&z<600;z++){let le=-34+n()*72,ne=-14+n()*86,ve=Ei(le,ne);ve<4||ve>26&&n()<.5||mo(le,ne)<4||Math.hypot(le+1,ne-1)<15||Math.abs(le-18)<8&&Math.abs(ne-3)<9||p.some(Ee=>Math.hypot(Ee.x-le,Ee.z-ne)<4.5)||Math.hypot(le+21,ne-22)<5||(M(le,ne,5.5+n()*5,(n()-.5)*2.4,(n()-.5)*2.4),oe++)}let I=new ze(ni(m),g),A=new ze(ni(_),d),b=new ze(ni(v),new Be({color:4872738,roughness:.6}));for(let z of[I,A,b])z.castShadow=!0,z.receiveShadow=!0,e.add(z);let F=vt(256,256,(z,oe,le)=>{let ne=ys(3);z.clearRect(0,0,oe,le);for(let ve=0;ve<260;ve++){let Ee=14+ne()*(oe-28),H=14+ne()*(le-28),J=ne()*6.28,D=6+ne()*6,ee=62+ne()*50;z.save(),z.translate(Ee,H),z.rotate(J),z.fillStyle=`rgb(${34+ne()*30}, ${ee}, ${24+ne()*22})`,z.beginPath(),z.ellipse(0,0,D,D*.62,0,0,6.28),z.fill(),z.strokeStyle="rgba(150,170,100,0.35)",z.lineWidth=1,z.beginPath(),z.moveTo(-D,0),z.lineTo(D,0),z.stroke(),z.restore()}}),S=Oh(new Be({map:F,alphaTest:.5,alphaToCoverage:t,side:Ft,roughness:.55,vertexColors:!0,envMapIntensity:.6}),.07),E=[];function w(z,oe,le,ne){let ve=Rt(z,oe),Ee=Math.round(26*le*ne);for(let H=0;H<Ee;H++){let J=n()*6.28,D=n()**.7*1.45,ee=.55+n()*.45,Q=Math.cos(J)*Math.cos(D)*le*ee,ue=Math.sin(D)*ne*ee,ie=Math.sin(J)*Math.cos(D)*le*ee,we=.7+n()*.5,ge=new Xt(we,we);ge.rotateX((n()-.5)*1.4),ge.rotateY(n()*6.28),ge.translate(z+Q,ve+ue+.1,oe+ie);let R=new C(Q,ue+ne*.6,ie).normalize(),T=.55+.5*(ue/ne)+n()*.15,Y=[],he=[],pe=[];for(let Z=0;Z<4;Z++)he.push(R.x,R.y,R.z),Y.push(T,T,T*.9),pe.push(ue/ne);ge.setAttribute("normal",new We(he,3)),ge.setAttribute("color",new We(Y,3)),ge.setAttribute("sway",new We(pe,1)),E.push(ge)}}for(let[z,oe,le,ne]of[[-10.6,5.6,1.5,1.3],[-10.4,.5,1.8,1.6],[-10,-3.8,1.6,1.9],[-5,-7.6,2.2,1.7],[3.5,-7.8,2.4,2],[8.2,-7.2,1.8,1.5],[11.4,-3.6,1.6,1.4],[-3.2,5.6,1,.9],[9.2,5.3,1.1,.9],[11.6,2.2,1.2,1]])w(z,oe,le,ne);for(let z=0,oe=0;oe<(t?34:16)&&z<500;z++){let le=-34+n()*72,ne=-14+n()*86;Ei(le,ne)<5||mo(le,ne)<3.5||Math.hypot(le+1,ne-1)<14||Math.hypot(le+13,ne-15)<6||Math.abs(le-18)<7&&Math.abs(ne-3)<8||Math.hypot(le+21,ne-22)<5||(w(le,ne,.9+n()*1.4,.7+n()*1.1),oe++)}let O=new ze(ni(E),S);O.castShadow=!0,O.receiveShadow=!0,e.add(O);let q=vt(256,256,(z,oe,le)=>{let ne=ys(11);z.clearRect(0,0,oe,le);for(let ve=0;ve<46;ve++){let Ee=oe*.5+(ne()-.5)*oe*.3,H=Ee+(ne()-.5)*oe*.8,J=le*(.45+ne()*.5);z.strokeStyle=`rgb(${150+ne()*60}, ${140+ne()*50}, ${80+ne()*40})`,z.lineWidth=2.5+ne()*3,z.beginPath(),z.moveTo(Ee,le),z.quadraticCurveTo(Ee,le-J*.6,H,le-J),z.stroke()}}),U=ni([0,1,2].map(z=>{let oe=new Xt(1,1);return oe.translate(0,.5,0),oe.rotateY(z*Math.PI/3),oe}));U.setAttribute("sway",new We(Array.from({length:U.attributes.position.count},(z,oe)=>U.attributes.position.getY(oe)**2),1));{let z=U.attributes.normal;for(let oe=0;oe<z.count;oe++)z.setXYZ(oe,0,1,0)}let B=t?3600:1400,W=new zi(U,Oh(new Be({map:q,alphaTest:.4,alphaToCoverage:t,side:Ft,roughness:.9,envMapIntensity:.5}),.16,!0),B),re=new Ve,se=new Kt,j=new Fe,ce=0;for(let z=0;ce<B&&z<B*12;z++){let oe=n()<.6,le=oe?-1+(n()-.5)*70:-34+n()*72,ne=oe?8+(n()-.5)*60:-14+n()*86,ve=Ei(le,ne),Ee=rn(.44,.62,yr(le*.07+40,ne*.07+11))*.85+.015+rn(1.2,.4,Math.abs(mo(le,ne)-2.4))*.3;if(ve<4.5||mo(le,ne)<1.7||n()>Ee||Math.abs(le+1)<8&&Math.abs(ne+1)<6||Math.abs(le-18)<5.3&&Math.abs(ne-3)<6.3)continue;let H=.2+n()*.32;re.compose(new C(le,Rt(le,ne)-.03,ne),se.setFromAxisAngle(new C(0,1,0),n()*6.28),new C(H*(.8+n()*.6),H,H*(.8+n()*.6))),W.setMatrixAt(ce,re),W.setColorAt(ce,j.setRGB(1.5+n()*.6,1.5+n()*.5,1+n()*.5)),ce++}W.count=ce,W.receiveShadow=!0,W.frustumCulled=!1,e.add(W);let de=qt("concrete",{color:10130568,env:.6}),Se=[];for(let z=0,oe=0;oe<26&&z<400;z++){let le=n()*6.28,ne=2+Math.cos(le)*36,ve=28+Math.sin(le)*47,Ee=Ei(ne,ve);if(Ee<-.5||Ee>3.5||Math.abs(ve-6)<4&&ne<-20)continue;let H=new Da(.4+n()*.7,2),J=H.attributes.position;for(let D=0;D<J.count;D++){let ee=.75+.5*uo(J.getX(D)*2.5+z,J.getY(D)*2.5+J.getZ(D)*1.7);J.setXYZ(D,J.getX(D)*ee*1.3,J.getY(D)*ee*.7,J.getZ(D)*ee)}H.computeVertexNormals(),H.translate(ne,Rt(ne,ve)+.1,ve),Se.push(H.toNonIndexed()),oe++}if(Se.length){let z=new ze(ni(Se),de);z.castShadow=z.receiveShadow=!0,e.add(z)}let te=new Be({color:1911586,roughness:1,envMapIntensity:.3});for(let[z,oe,le,ne]of[[.3,520,260,16],[1.2,800,420,20],[2,460,180,13],[2.9,950,520,22],[3.7,600,300,15],[4.6,420,150,12],[5.5,700,380,18]]){let ve=new st(1,24,10),Ee=ve.attributes.position;for(let J=0;J<Ee.count;J++){let D=1+.5*uo(Ee.getX(J)*3+z*9,Ee.getZ(J)*3);Ee.setY(J,Math.max(0,Ee.getY(J))*D)}let H=new ze(ve,te);H.scale.set(le,ne,le*.35),H.position.set(Math.cos(z)*oe,Dn-.5,28+Math.sin(z)*oe),H.rotation.y=-z+Math.PI/2,e.add(H)}return{palms:p,update(z){Rd.value+=z}}}var X={x0:-6,x1:5,z0:-5.5,z1:.5,part:1,top:K+2.7,deckW:-8.5,deckE:6.5,deckS:4,annexE:9.5,stair:{x0:6.5,x1:11.6,z0:2.4,z1:3.9}};function Pd(s){let{scene:e}=s,t=new vi,n=new vi,i=.16,r={siding:qt("siding",{env:.55}),shutter:qt("siding",{env:.5}),trim:qt("wall",{color:15854038,env:.5}),deck:qt("deck",{env:.5}),post:qt("deck",{env:.4}),roof:qt("roof",{metal:!0,color:14275270,env:1}),floor:qt("floor",{env:.3}),wall:qt("wall",{color:16183782,env:.3}),concrete:qt("concrete",{env:.4}),dark:ht(658702,{roughness:.9}),glass:new Be({color:10338240,metalness:.9,roughness:.04,transparent:!0,opacity:.3,envMapIntensity:1.4,depthWrite:!1}),door:qt("wall",{color:14141864,env:.4}),steel:ht(9080207,{metalness:.9,roughness:.35}),white:ht(15328991,{roughness:.5}),cable:ht(1052688,{roughness:.7})};r.siding.color.setRGB(1,1.55,1.38),r.shutter.color.setRGB(.6,1.05,.95),r.deck.color.setRGB(1.7,1.62,1.55),r.post.color.setRGB(1.15,1.08,1.02);let o={tile:1.6},a={tile:2.2},c={tile:1.5},l={tile:1.5,swap:!0};function u(H,J,D,ee,Q,ue,ie,we,ge=i){let R=we?r.siding:r.wall,T=we||1,Y=(Z,xe,_e,Me)=>{if(xe-Z<.01||Me-_e<.01)return;let De=(Z+xe)/2,He=xe-Z,P=(_e+Me)/2,$=Me-_e;H==="x"?(t.box(R,De,P,J+T*ge/4,He,$,ge/2,we?o:a),t.box(r.wall,De,P,J-T*ge/4,He,$,ge/2,a),hn(Z,xe,J-ge/2,J+ge/2,_e,Me)):(t.box(R,J+T*ge/4,P,De,ge/2,$,He,we?o:a),t.box(r.wall,J-T*ge/4,P,De,ge/2,$,He,a),hn(J-ge/2,J+ge/2,Z,xe,_e,Me))},he=(Z,xe,_e,Me,De,He=0,P=ge+.06)=>{let $=(Z+xe)/2,be=xe-Z,Re=(_e+Me)/2,Pe=Me-_e;H==="x"?(De===r.glass?n:t).box(De,$,Re,J+He,be,Pe,P,a):(De===r.glass?n:t).box(De,J+He,Re,$,P,Pe,be,a)},pe=D;for(let Z of[...ie].sort((xe,_e)=>xe.a0-_e.a0)){let xe=Q+(Z.sill||0),_e=Q+Z.head;Y(pe,Z.a0,Q,ue),Y(Z.a0,Z.a1,Q,xe),Y(Z.a0,Z.a1,_e,ue),pe=Z.a1;let Me=.09;if(he(Z.a0-Me,Z.a0,xe-(Z.sill?Me:0),_e+Me,r.trim),he(Z.a1,Z.a1+Me,xe-(Z.sill?Me:0),_e+Me,r.trim),he(Z.a0,Z.a1,_e,_e+Me,r.trim),Z.kind==="window"&&(he(Z.a0-.04,Z.a1+.04,xe-Me,xe,r.trim,T*.03,ge+.12),he(Z.a0,Z.a1,xe,_e,r.glass,0,.012),he((Z.a0+Z.a1)/2-.02,(Z.a0+Z.a1)/2+.02,xe,_e,r.trim,0,.05),he(Z.a0,Z.a1,(xe+_e)/2-.02,(xe+_e)/2+.02,r.trim,0,.05),Z.shutters&&we)){let De=(Z.a1-Z.a0)/2-.02;for(let[He,P]of[[Z.a0-Me-De,Z.a0-Me],[Z.a1+Me,Z.a1+Me+De]]){he(He,P,xe,_e,r.shutter,T*(ge/2+.03),.035);for(let $=0;$<3;$++)he(He+.03,P-.03,xe+.08+$*(_e-xe-.2)/2,xe+.12+$*(_e-xe-.2)/2,r.shutter,T*(ge/2+.055),.02)}}}Y(pe,ee,Q,ue)}let h=X.top;u("x",X.z1,X.x0-i/2,X.x1+i/2,K,h,[{a0:-5,a1:-3,sill:.85,head:2.1,kind:"window",shutters:1},{a0:-1.6,a1:-.6,head:2.1,kind:"door"},{a0:2.2,a1:3.8,sill:.85,head:2.1,kind:"window",shutters:1}],1),u("x",X.z0,X.x0-i/2,X.x1+i/2,K,h,[{a0:-5.6,a1:-4.4,sill:1,head:2.05,kind:"window",shutters:1},{a0:2.3,a1:3.9,sill:1,head:2.05,kind:"window",shutters:1}],-1),u("z",X.x0,X.z0,X.z1,K,h,[{a0:-3.8,a1:-1.4,head:2.1,kind:"gap"}],-1),u("z",X.x1,X.z0,X.z1,K,h,[{a0:-2.5,a1:-1.6,head:2.1,kind:"door"}],1),u("z",X.part,X.z0,X.z1,K,h,[{a0:-1.3,a1:-.3,head:2.1,kind:"door"}],0,.12);for(let[H,J]of[[X.x0,X.z0],[X.x0,X.z1],[X.x1,X.z0],[X.x1,X.z1]])t.box(r.trim,H+Math.sign(H)*.05,(K+h)/2-.1,J+Math.sign(J)*.05,.14,h-K+.2,.14,a);n.box(r.glass,X.x0,K+1.05,-3.2,.012,2.06,1.2),n.box(r.glass,X.x0+.05,K+1.05,-3.1,.012,2.06,1.2),hn(X.x0-i/2,X.x0+i/2,-3.8,-2.6,K,K+2.1);for(let H of[-3.8,-2.6,-3.7,-2.5])t.box(r.white,X.x0+(H===-3.7||H===-2.5?.05:0),K+1.05,H,.04,2.1,.05);t.box(r.white,X.x0+.02,K+.02,-2.6,.12,.04,2.4),t.box(r.door,-1.62,K+1.05,X.z1-.52,.045,2.08,.98,a),t.box(r.steel,-1.585,K+1,X.z1-.92,.04,.03,.12),t.box(r.door,X.x1+.5,K+1.05,-2.52,.9,2.08,.045,a),t.span(r.floor,X.x0,K-.04,X.z0,X.x1,K,X.z1,{tile:2.2}),t.span(r.post,X.x0,K-.12,X.z0,X.x1,K-.04,X.z1,c),Si(X.x0,X.x1,X.z0,X.z1,K),t.span(r.wall,X.x0,h,X.z0,X.x1,h+.08,X.z1,a),Uh.push({x0:X.x0,x1:X.x1,z0:X.z0,z1:X.z1,y:h}),t.span(r.deck,X.deckW,K-.07,X.z1,X.deckE,K-.015,X.deckS,c),Si(X.deckW,X.deckE,X.z1,X.deckS,K),t.span(r.deck,X.deckW,K-.07,X.z0,X.x0,K-.015,X.z1,c),Si(X.deckW,X.x0,X.z0,X.z1,K);for(let H of[-5.5,-2.5,.5,4])t.span(r.post,X.deckW,K-.6,H-.07,H>.4?X.deckE:X.x1,K-.32,H+.07,c);for(let H=X.deckW+.05;H<X.deckE;H+=.6)t.span(r.post,H-.03,K-.32,H<X.x0?X.z0:H>X.x1?X.z1:X.z0,H+.03,K-.12,X.deckS,{tile:1.5,swap:!1});let f=[];for(let H of[-8.5,-6,-3.25,-.5,2.25,5,6.5])for(let J of[-5.5,-2.5,.5,4]){if(H===6.5&&J<4||H===5&&J<4)continue;f.push([H,J]);let D=H+(H===-8.5?.13:H===6.5?-.13:0),ee=J+(J===4?-.13:J===-5.5?.13:0);t.box(r.post,D,(K-.6)/2-.2,ee,.26,K-.6+.4,.26,l),hn(D-.15,D+.15,ee-.15,ee+.15,0,K)}for(let[H,J]of[[[-8.37,-5.37],[-8.37,-2.5]],[[-8.37,-2.5],[-8.37,.5]],[[-6,-5.37],[-3.25,-5.37]],[[-.5,-5.37],[2.25,-5.37]],[[-8.37,.5],[-8.37,3.87]]])t.beam(r.post,[H[0],.25,H[1]],[J[0],K-.7,J[1]],.05,.14,c),t.beam(r.post,[H[0],K-.7,H[1]],[J[0],.25,J[1]],.05,.14,c);let d=X.x1+i/2,g=X.annexE,_=K-.07;t.span(r.siding,d,0,X.z0,g,_,X.z1,o),hn(d,g,X.z0,X.z1,0,_),t.span(r.concrete,d-.1,-.3,X.z0-.1,g+.1,.08,X.z1+.1,{tile:3}),t.span(r.deck,X.x1+i/2,K-.07,X.z0,g,K-.015,X.z1,c),Si(X.x1,g,X.z0,X.z1,K);for(let[H,J]of[[d,X.z1],[g,X.z1],[g,X.z0],[d,X.z0]])t.box(r.trim,H+(H>7?.04:-.04),_/2,J+(J>0?.04:-.04),.13,_,.13,a);let m=(H,J,D,ee,Q,ue)=>{t.span(r.trim,H-.08,D-.08,Q,J+.08,ee+.08,Q+.05,a),t.span(ue?r.dark:r.door,H,D,Q+.03,J,ee,Q+.07,a),ue&&(n.span(r.glass,H,D,Q+.075,J,ee,Q+.085),t.span(r.trim,(H+J)/2-.02,D,Q+.07,(H+J)/2+.02,ee,Q+.1,a))};m(6.2,7.1,.08,2.1,X.z1,!1),t.box(r.steel,7,1.05,X.z1+.09,.03,.12,.05),m(7.8,9,1,2,X.z1,!0),t.span(r.trim,g,.9,-3.9,g+.05,2.1,-2.3,a),t.span(r.dark,g+.03,1,-3.8,g+.07,2,-2.4),n.span(r.glass,g+.075,1,-3.8,g+.085,2,-2.4);function p(H,J,D,ee,Q,ue={}){let ie=Math.hypot(D-H,ee-J),we=(D-H)/ie,ge=(ee-J)/ie,R=Math.max(1,Math.round(ie/1.7)),T=Math.abs(we)>.5;for(let xe=ue.noStart?1:0;xe<=R-(ue.noEnd?1:0);xe++)t.box(r.post,H+we*ie*xe/R,Q+.52,J+ge*ie*xe/R,.1,1.08,.1,l);let Y=(H+D)/2,he=(J+ee)/2,pe=T?ie:0,Z=T?0:ie;t.box(r.deck,Y,Q+1.05,he,pe+.15,.045,Z+.15,{tile:1.5,swap:!T}),t.box(r.post,Y,Q+.98,he,pe+.05,.09,Z+.05,{tile:1.5,swap:!T}),t.box(r.post,Y,Q+.12,he,pe+.05,.07,Z+.05,{tile:1.5,swap:!T});for(let xe=.12;xe<ie-.05;xe+=.125)t.box(r.post,H+we*xe,Q+.55,J+ge*xe,.034,.8,.034,l);hn(Math.min(H,D)-.05,Math.max(H,D)+.05,Math.min(J,ee)-.05,Math.max(J,ee)+.05,Q,Q+1.08)}let v=.06;p(X.deckW+v,X.z0+v,X.deckW+v,X.deckS-v,K),p(X.deckW+v,X.z0+v,X.x0-.1,X.z0+v,K,{noStart:1}),p(X.deckW+v,X.deckS-v,X.deckE-v,X.deckS-v,K,{noStart:1}),p(X.deckE-v,X.z1+.05,X.deckE-v,X.stair.z0-.05,K),p(X.deckE+.1,X.z1-v,g-v,X.z1-v,K,{noStart:1}),p(g-v,X.z1-v,g-v,X.z0+v,K,{noStart:1}),p(g-v,X.z0+v,X.x1+.2,X.z0+v,K,{noStart:1});let x=X.stair,M=17,I=K/M,A=(x.x1-x.x0)/M,b=(x.z0+x.z1)/2;for(let H=1;H<M;H++)t.box(r.deck,x.x0+(H-.5)*A+.02,K-H*I-.022,b,A+.04,.045,x.z1-x.z0,{tile:1.5,swap:!0});for(let H of[x.z0+.04,x.z1-.04]){t.beam(r.post,[x.x0-.1,K-.22,H],[x.x1+.1,-.22,H],.06,.3,c),t.beam(r.deck,[x.x0,K+1.02,H],[x.x1,1.02,H],.12,.045,c),t.beam(r.post,[x.x0,K+.95,H],[x.x1,.95,H],.05,.08,c),t.beam(r.post,[x.x0,K+.2,H],[x.x1,.2,H],.05,.07,c);for(let J=0;J<=M;J+=4.25){let D=x.x0+J*A,ee=K-J*I;t.box(r.post,D,ee+.45,H,.1,1.2,.1,l)}for(let J=.12;J<x.x1-x.x0;J+=.125){let D=K-J/(x.x1-x.x0)*K;t.box(r.post,x.x0+J,D+.58,H,.034,.75,.034,l)}}Si(x.x0,x.x1+.3,x.z0,x.z1,H=>Math.max(0,K*(1-(H-x.x0)/(x.x1-x.x0)))),hn(x.x0,x.x1,x.z0-.06,x.z0+.02,0,K+1.05),hn(x.x0,x.x1,x.z1-.02,x.z1+.06,0,K+1.05),hn(8.25,8.33,x.z0,x.z1,0,1.95);for(let H=0;H<9;H++){let J=8.3+H*.38;for(let D of[x.z0-.02,x.z1+.02]){let ee=K*(1-(J-x.x0)/(x.x1-x.x0))-.3;ee>.3&&(t.beam(r.post,[J,.02,D],[J+Math.min(ee,1.2),Math.min(ee,1.2),D],.012,.04,c),t.beam(r.post,[J+.38,.02,D],[J+.38-Math.min(ee,1.2),Math.min(ee,1.2),D],.012,.04,c))}}t.span(r.concrete,x.x1-.1,-.2,x.z0-.3,x.x1+1.3,.03,x.z1+.3,{tile:3});let F=(X.z0+X.z1)/2,S=1.25,E=(X.z1-X.z0)/2,w=.6,O=Math.atan(S/E),q=Math.hypot(E+w,S*(E+w)/E),U=S*(E+w)/E;for(let H of[1,-1]){t.box(r.roof,(X.x0+X.x1)/2,h+S-U/2+.07,F+H*(E+w)/2,X.x1-X.x0+1.3,.05,q,{rot:[H*O,0,0],tile:1.5}),t.box(r.post,(X.x0+X.x1)/2,h+S-U/2+.02,F+H*(E+w)/2,X.x1-X.x0+1.2,.04,q-.04,{rot:[H*O,0,0],tile:1.5}),t.box(r.trim,(X.x0+X.x1)/2,h+S-U+.02,F+H*(E+w),X.x1-X.x0+1.3,.16,.03,a);for(let J of[X.x0-.62,X.x1+.62])t.beam(r.trim,[J,h+S+.02,F],[J,h+S-U+.02,F+H*(E+w)],.03,.16,a)}t.box(r.roof,(X.x0+X.x1)/2,h+S+.1,F,X.x1-X.x0+1.3,.05,.3,{tile:1.5});for(let H of[X.x0-.04,X.x1+.04]){let J=new xt,D=[H,h,X.z0-.08,H,h,X.z1+.08,H,h+S,F],ee=[H,h,X.z1+.08,H,h,X.z0-.08,H,h+S,F];J.setAttribute("position",new We([...H>0?ee:D,...H>0?D:ee],3)),J.setAttribute("normal",new We([...Array(3).fill([Math.sign(H),0,0]).flat(),...Array(3).fill([-Math.sign(H),0,0]).flat()],3)),J.setAttribute("uv",new We(new Float32Array(12),2)),t.add(J,r.siding,null,o),t.box(r.dark,H+Math.sign(H)*.03,h+.45,F,.03,.5,.5),t.box(r.trim,H+Math.sign(H)*.035,h+.45,F,.02,.6,.6,a)}let B=new Ye,W=new ze(new st(.75,24,10,0,Math.PI*2,0,.62),r.white);W.material.side=Ft,W.rotation.x=Math.PI,W.position.y=.75,W.scale.set(1,.55,1),B.add(W);let re=new ze(new it(.012,.012,.5),r.steel);re.position.y=.6,B.add(re);let se=new ze(new it(.03,.04,.09),r.white);se.position.y=.85,B.add(se),B.rotation.set(-1.05,.5,0),B.position.set(4.6,K+.95,X.deckS+.12),B.traverse(H=>{H.castShadow=!0}),e.add(B),t.cyl(r.steel,4.6,K+.75,X.deckS+.06,.025,.025,.7),t.box(r.steel,X.x1+.12,1.5,X.z1+.12,.3,.45,.14),t.cyl(r.steel,X.x1+.12,2.3,X.z1+.13,.02,.02,1.4);let j=15.5,ce=-9.5;t.cyl(r.post,j,3.4,ce,.1,.14,7.6,{sides:10}),t.box(r.post,j,6.7,ce,.1,.1,1.5,l),hn(j-.15,j+.15,ce-.15,ce+.15,0,7);let de=(H,J,D)=>{let ee=new C(...H),Q=new C(...J),ue=Mi(we=>new C().lerpVectors(ee,Q,we).setY(ee.y+(Q.y-ee.y)*we-D*4*we*(1-we)),()=>.012,20,4),ie=new ze(ue,r.cable);return e.add(ie),ie};de([j,6.75,ce+.6],[X.x1+.6,h+.5,F+.3],.5),de([j,6.75,ce-.6],[70,8,-60],2.5);let Se=[],te=[[X.x0+.3,h-.12,X.z1+.62],[X.deckW+.08,K+2.5,X.deckS-.08],[-1,K+2.5,X.deckS-.08],[X.deckE-.08,K+2.5,X.deckS-.08],[X.x1-.3,h-.12,X.z1+.62]];for(let H of[X.deckW+.08,-1,X.deckE-.08])t.box(r.post,H,K+1.8,X.deckS-.08,.07,1.5,.07,l);for(let H=0;H<te.length-1;H++){let J=new C(...te[H]),D=new C(...te[H+1]),ee=J.distanceTo(D),Q=.05*ee,ue=ie=>new C().lerpVectors(J,D,ie).setY(J.y+(D.y-J.y)*ie-Q*4*ie*(1-ie));e.add(new ze(Mi(ue,()=>.006,14,4),r.cable));for(let ie=1;ie<ee/.55;ie++)Se.push(ue(ie*.55/ee).add(new C(0,-.05,0)))}let z=new Be({color:3353116,emissive:16757854,emissiveIntensity:3,roughness:.3}),oe=new zi(new st(.035,8,6),z,Se.length),le=new Ve;Se.forEach((H,J)=>oe.setMatrixAt(J,le.makeTranslation(H.x,H.y,H.z))),e.add(oe);let ne=new Kn(16758896,0,12,2);ne.position.set(-2,K+2.3,2.6),e.add(ne);let ve=new Kn(16769730,0,11,2);ve.position.set(-2.6,K+2.2,-2.6),e.add(ve);let Ee=new Kn(16763024,0,7,2);return Ee.position.set(4.4,K+.9,-4.6),e.add(Ee),t.build(e),n.build(e,{cast:!1,receive:!1}),{M:r,posts:f,setLamps(H){z.emissiveIntensity=.4+3.2*H,ne.intensity=14*H,ve.intensity=9+9*H,Ee.intensity=2+5*H}}}var Mt=320,Dt=180,go=[{name:"Bass Tour",glow:9418713,draw(s,e){let t=s.createLinearGradient(0,0,0,95);t.addColorStop(0,"#f6c98a"),t.addColorStop(1,"#f2e7cf"),s.fillStyle=t,s.fillRect(0,0,Mt,95),s.fillStyle="#2f4a3a",s.beginPath(),s.moveTo(0,95);for(let l=0;l<=Mt;l+=8)s.lineTo(l,84-7*Math.sin(l*.05)-4*Math.sin(l*.13+1));s.lineTo(Mt,95),s.fill();let n=s.createLinearGradient(0,95,0,Dt);n.addColorStop(0,"#6d9bb0"),n.addColorStop(1,"#27475a"),s.fillStyle=n,s.fillRect(0,95,Mt,Dt-95),s.strokeStyle="#ffffff30";for(let l=0;l<9;l++){let u=102+l*8,h=(e*9+l*37)%60;s.beginPath(),s.moveTo(h+l*23%Mt,u),s.lineTo(h+l*23%Mt+26,u),s.stroke()}let i=78+3*Math.sin(e*.6),r=112+Math.sin(e*1.3);s.fillStyle="#1b2428",s.beginPath(),s.moveTo(i-34,r),s.lineTo(i+40,r),s.lineTo(i+30,r+9),s.lineTo(i-28,r+9),s.fill(),s.fillRect(i-6,r-20,7,20),s.beginPath(),s.arc(i-2,r-24,4.5,0,7),s.fill();let o=.5+.5*Math.sin(e*.8),a=i+120+o*20,c=128;s.strokeStyle="#1b2428",s.beginPath(),s.moveTo(i,r-14),s.lineTo(i+34,r-40),s.stroke(),s.strokeStyle="#ffffff90",s.beginPath(),s.moveTo(i+34,r-40),s.quadraticCurveTo(i+90,r-30,a,c),s.stroke(),s.fillStyle="#e8402a",s.beginPath(),s.arc(a,c+Math.sin(e*5)*(Math.sin(e*.4)>.6?3:.6),3,0,7),s.fill(),s.strokeStyle="#ffffff70",s.beginPath(),s.ellipse(a,c+2,6+e*6%10,2+e*2%3,0,0,7),s.stroke(),Ld(s,"BASS TOUR",`Lake Okeechobee \xB7 Hank is "pretty sure" there's a big one in here`,e)}},{name:"The Game",glow:8373370,draw(s,e){s.fillStyle="#2f7a3a",s.fillRect(0,0,Mt,Dt);let t=e*14%32;for(let n=-t;n<Mt;n+=32)s.fillStyle=Math.floor((n+t+e*14)/32)%2?"#2a7034":"#34853f",s.fillRect(n,24,32,Dt-24),s.fillStyle="#ffffffb0",s.fillRect(n,24,1.5,Dt-24);for(let n=0;n<22;n++){let i=n<11,r=n%11,o=(i?132:178)+(i?-1:1)*(r%3)*16+10*Math.sin(e*(.7+r*.13)+n),a=44+r*11.5+5*Math.cos(e*(.9+r*.1)+n*2);s.fillStyle=i?"#f08a24":"#f1f1f1",s.beginPath(),s.arc(o,a,4,0,7),s.fill(),s.fillStyle=i?"#1c3f8a":"#b11f2a",s.beginPath(),s.arc(o,a,2,0,7),s.fill()}s.fillStyle="#8a4b1e",s.beginPath(),s.ellipse(150+40*Math.sin(e*.9),100+30*Math.sin(e*1.7),4,2.5,e,0,7),s.fill(),s.fillStyle="#10151c",s.fillRect(0,0,Mt,24),s.fillStyle="#fff",s.font="bold 13px sans-serif",s.fillText("GATORS 17",10,16),s.fillText("DAWGS 14",110,16),s.fillStyle="#ffd24a",s.fillText(`3RD  ${Math.floor(4-e/60%4)}:${String(Math.floor(59-e%60)).padStart(2,"0")}`,220,16)}},{name:"Late Night Deals",glow:15253578,draw(s,e){s.fillStyle="#b3122a",s.fillRect(0,0,Mt,Dt),s.save(),s.translate(Mt/2,Dt/2),s.rotate(e*.3);for(let i=0;i<16;i++)s.rotate(Math.PI/8),s.fillStyle=i%2?"#d41f38":"#f0b429",s.beginPath(),s.moveTo(0,0),s.lineTo(260,-52),s.lineTo(260,52),s.fill();s.restore(),s.fillStyle="#fff",s.strokeStyle="#000",s.lineWidth=4,s.textAlign="center",s.font="bold 26px sans-serif",s.strokeText("GRILL-O-MATIC 9000",Mt/2,52),s.fillText("GRILL-O-MATIC 9000",Mt/2,52),s.font="bold 15px sans-serif";let t=["IT GRILLS!","IT ALSO GRILLS!","DISHWASHER SAFE-ISH","BUT WAIT"][Math.floor(e/2.5)%4];s.strokeText(t,Mt/2,84),s.fillText(t,Mt/2,84);let n=1+.08*Math.sin(e*6);s.save(),s.translate(Mt/2,122),s.scale(n,n),s.fillStyle="#ffe14a",s.font="bold 40px sans-serif",s.strokeText("$19.95",0,12),s.fillText("$19.95",0,12),s.restore(),Math.floor(e*2)%2&&(s.fillStyle="#fff",s.font="bold 14px sans-serif",s.fillText("CALL NOW \xB7 OPERATORS ARE ASLEEP",Mt/2,168)),s.textAlign="left",s.lineWidth=1}},{name:"The Reef",glow:4169680,draw(s,e){let t=s.createLinearGradient(0,0,0,Dt);t.addColorStop(0,"#2aa3c9"),t.addColorStop(1,"#073a5c"),s.fillStyle=t,s.fillRect(0,0,Mt,Dt),s.fillStyle="#ffffff12";for(let n=0;n<5;n++){let i=30+n*66+14*Math.sin(e*.4+n);s.beginPath(),s.moveTo(i,0),s.lineTo(i+26,0),s.lineTo(i+60+20*Math.sin(e*.3+n),Dt),s.lineTo(i-10,Dt),s.fill()}for(let n=0;n<7;n++){s.fillStyle=["#d0553f","#e09a3e","#8f4fa0","#3f8f6a"][n%4];let i=20+n*46,r=22+n*37%24;s.beginPath(),s.moveTo(i-20,Dt),s.quadraticCurveTo(i-14+4*Math.sin(e+n),Dt-r,i,Dt-r-6),s.quadraticCurveTo(i+14+4*Math.sin(e+n),Dt-r,i+20,Dt),s.fill()}for(let n=0;n<12;n++){let i=12+n*7%15,r=n%2?1:-1,o=((e*i*r+n*53)%(Mt+40)+Mt+40)%(Mt+40)-20,a=24+n*29%110+5*Math.sin(e*1.5+n),c=5+n*3%6;s.fillStyle=["#ffd84a","#ff8a3a","#e9f1ff","#59d0ff"][n%4],s.beginPath(),s.ellipse(o,a,c,c*.5,0,0,7),s.fill(),s.beginPath(),s.moveTo(o-r*c,a),s.lineTo(o-r*(c+5),a-4),s.lineTo(o-r*(c+5),a+4),s.fill()}Ld(s,"THE REEF AT DUSK","Nobody here has anywhere to be either",e)}},{name:"Weather",glow:7315680,draw(s,e){s.fillStyle="#12306a",s.fillRect(0,0,Mt,Dt),s.fillStyle="#2f8f5a",s.beginPath(),s.moveTo(150,20),s.quadraticCurveTo(215,60,200,130),s.quadraticCurveTo(190,160,172,150),s.quadraticCurveTo(150,90,120,50),s.fill(),s.fillStyle="#ffffff35";for(let t=0;t<6;t++)s.beginPath(),s.arc((e*5+t*70)%(Mt+80)-40,40+t*19,20,0,7),s.fill();s.fillStyle="#ffd84a",s.beginPath(),s.arc(60,52,18+Math.sin(e*2),0,7),s.fill(),s.fillStyle="#fff",s.font="bold 34px sans-serif",s.fillText("78\xB0",30,112),s.font="13px sans-serif",s.fillText("Tonight: perfect.",20,134),s.fillText("Tomorrow: same.",20,152),s.fillStyle="#ffd84a",s.font="bold 11px sans-serif",s.fillText("TIDE: LOW",232,162)}}];function Ld(s,e,t,n){s.fillStyle="#0b1622d0",s.fillRect(0,Dt-34,Mt,34),s.fillStyle="#ffd24a",s.font="bold 12px sans-serif",s.fillText(e,8,Dt-20),s.fillStyle="#fff",s.font="10px sans-serif",s.fillText(t,8,Dt-7),s.fillStyle="#e03a2a",s.fillRect(Mt-44,8,36,14),s.fillStyle="#fff",s.font="bold 9px sans-serif",s.fillText(Math.floor(n)%2?"LIVE":"LIVE \xB7",Mt-39,18)}function Id(){let s=document.createElement("canvas");s.width=Mt,s.height=Dt;let e=s.getContext("2d"),t=new fr(s);t.colorSpace=gt;let n=0,i=0,r=1,o=0,a={tex:t,on:!1,glow:new Fe(0),get name(){return go[n].name},set(c){a.on=c,c?(o=.25,r=1):(e.fillStyle="#030405",e.fillRect(0,0,Mt,Dt),t.needsUpdate=!0,a.glow.set(0))},next(){return n=(n+1)%go.length,o=.22,r=1,go[n].name},update(c){if(a.on&&(i+=c,r+=c,!(r<1/12))){if(r=0,o>0){o-=1/12;let l=e.createImageData(Mt,Dt);for(let u=0;u<l.data.length;u+=4){let h=Math.random()*255;l.data[u]=l.data[u+1]=l.data[u+2]=h,l.data[u+3]=255}e.putImageData(l,0,0),a.glow.set(10132122)}else e.save(),go[n].draw(e,i),e.restore(),a.glow.set(go[n].glow);t.needsUpdate=!0}}};return a.set(!1),a}var Xe=null,zt=null,Fh=null,dv=null,xo=null,Vn=null,$i=null,Dd=!1,mn={radio:null,tv:null,fire:null};function Ss(){if(!Xe){try{Xe=new(window.AudioContext||window.webkitAudioContext)}catch{return}zt=Xe.createGain(),zt.gain.value=.8,zt.connect(Xe.destination),Fh=Xe.createBuffer(1,Xe.sampleRate*2,Xe.sampleRate);let s=Fh.getChannelData(0);for(let e=0;e<s.length;e++)s[e]=Math.random()*2-1}Xe.state==="suspended"&&Xe.resume(),Dd||(Dd=!0,pv())}var _o=(s=!0)=>{let e=Xe.createBufferSource();return e.buffer=Fh,e.loop=s,e},Ms=(s,e=zt)=>{let t=Xe.createGain();return t.gain.value=s,t.connect(e),t},bi=(s,e,t,n)=>{let i=Xe.createBiquadFilter();return i.type=s,i.frequency.value=e,i.Q.value=t,i.connect(n),i};function Nt(s,e,t,n,i,r=zt,o=0,a=.005){let c=Xe.createOscillator(),l=Xe.createGain();c.type=s,c.frequency.setValueAtTime(e,t),o&&c.frequency.exponentialRampToValueAtTime(Math.max(20,e*o),t+n),l.gain.setValueAtTime(1e-4,t),l.gain.linearRampToValueAtTime(i,t+a),l.gain.exponentialRampToValueAtTime(1e-4,t+n),c.connect(l),l.connect(r),c.start(t),c.stop(t+n+.05)}function en(s,e,t,n,i,r=1,o=zt,a=0){let c=_o(!1),l=Xe.createGain(),u=Xe.createBiquadFilter();u.type=n,u.frequency.setValueAtTime(i,s),a&&u.frequency.exponentialRampToValueAtTime(i*a,s+e),u.Q.value=r,l.gain.setValueAtTime(1e-4,s),l.gain.linearRampToValueAtTime(t,s+.01),l.gain.exponentialRampToValueAtTime(1e-4,s+e),c.connect(u),u.connect(l),l.connect(o),c.start(s,Math.random()),c.stop(s+e+.05)}function pv(){let s=Ms(0),e=bi("lowpass",520,.3,s),t=_o();t.connect(e),t.start(),dv=s;let n=Xe.createOscillator(),i=Xe.createGain();n.frequency.value=.13,i.gain.value=.035,n.connect(i),i.connect(s.gain),n.start(),s.gain.value=.085;let r=Ms(.012),o=bi("bandpass",1900,.6,r),a=_o();a.connect(o),a.start();let c=Xe.createOscillator(),l=Xe.createGain();c.frequency.value=.21,l.gain.value=.008,c.connect(l),l.connect(r.gain),c.start(),xo=Ms(0);let u=Xe.createOscillator(),h=Xe.createGain(),f=Xe.createOscillator(),d=Xe.createGain();u.type="sine",u.frequency.value=4300,f.type="square",f.frequency.value=17,d.gain.value=.5,h.gain.value=.5,f.connect(d),d.connect(h.gain),u.connect(h),h.connect(xo),u.start(),f.start(),setInterval(()=>{if(Xe.state==="running"&&xo.gain.value<.004&&Math.random()<.3){let g=Xe.currentTime,_=2+Math.floor(Math.random()*3);for(let m=0;m<_;m++)Nt("sawtooth",1500+Math.random()*300,g+m*.28,.2,.012,zt,.72,.03)}},9e3)}function Ud(s){xo&&xo.gain.setTargetAtTime(.011*s,Xe.currentTime,1.5)}function At(s,e=1){if(!Xe||Xe.state!=="running")return;let t=Xe.currentTime;switch(s){case"cap":en(t,.28,.22*e,"highpass",3500),Nt("sine",900,t,.06,.12*e,zt,.4),Nt("triangle",2400,t+.2,.25,.03*e,zt,.9);break;case"gulp":Nt("sine",190,t,.12,.2*e,zt,.55),Nt("sine",150,t+.3,.14,.18*e,zt,.5);break;case"lighter":en(t,.05,.14*e,"highpass",5e3),en(t+.11,.06,.16*e,"highpass",5e3),en(t+.18,.5,.05*e,"lowpass",900);break;case"puff":en(t,1.3,.09*e,"bandpass",700,.5,zt,1.6);break;case"bite":en(t,.09,.2*e,"bandpass",1800,1.2),en(t+.22,.07,.13*e,"bandpass",1400,1.2),en(t+.4,.07,.1*e,"bandpass",1300,1.2);break;case"step":en(t,.11,.05*e,"lowpass",700+Math.random()*300);break;case"wood":Nt("sine",95+Math.random()*25,t,.09,.14*e,zt,.6),en(t,.04,.035*e,"bandpass",1100,2);break;case"thump":Nt("sine",150,t,.16,.4*e,zt,.45),en(t,.03,.08*e,"bandpass",900,1);break;case"swish":en(t,.3,.2*e,"bandpass",2600,.8,zt,.55);break;case"rim":Nt("triangle",620,t,.5,.12*e,zt,.98),Nt("sine",1487,t,.35,.06*e),Nt("sine",233,t,.2,.12*e);break;case"bark":for(let n of[0,.19])Nt("sawtooth",520,t+n,.11,.16*e,bi("lowpass",1500,2,zt),.5,.012),en(t+n,.07,.05*e,"bandpass",1200,1);break;case"click":Nt("square",1400,t,.025,.05*e);break;case"door":Nt("sine",82,t,.22,.3*e,zt,.6),en(t,.05,.08*e,"lowpass",600);break;case"horn":for(let n of[311,392])Nt("sawtooth",n,t,.5,.09*e,bi("lowpass",1800,1,zt),1,.03);break;case"splash":en(t,.5,.18*e,"lowpass",1800,.5,zt,.3);break;case"pop":Nt("sine",420,t,.07,.18*e,zt,1.8);break;case"match":en(t,.35,.16*e,"highpass",2500,.7,zt,.5);break;case"chill":[392,494,587,740].forEach((n,i)=>Nt("sine",n,t+i*.13,1.4,.05*e));break}}function nl(s,e){let t=mn[s];t&&t.gain.setTargetAtTime(e,Xe.currentTime,.15)}function Od(s){if(Xe)if(s&&!mn.tv){let e=Ms(0),t=bi("bandpass",600,1.2,e),n=_o();n.connect(t),n.start();let i=Xe.createOscillator(),r=Xe.createGain();i.type="sawtooth",i.frequency.value=3.1,r.gain.value=260,i.connect(r),r.connect(t.frequency),i.start(),mn.tv=e,e.stopAll=()=>{n.stop(),i.stop()}}else!s&&mn.tv&&(mn.tv.stopAll(),mn.tv.disconnect(),mn.tv=null)}function Fd(s){if(Xe)if(s&&!mn.fire){let e=Ms(0),t=bi("lowpass",420,.5,e),n=_o();n.connect(t),n.start(),mn.fire=e,e.timer=setInterval(()=>{Xe.state==="running"&&e.gain.value>.01&&en(Xe.currentTime,.03,.5*e.gain.value*Math.random(),"highpass",2500+Math.random()*3e3)},130),e.stopAll=()=>{n.stop(),clearInterval(e.timer)}}else!s&&mn.fire&&(mn.fire.stopAll(),mn.fire.disconnect(),mn.fire=null)}var mv=[[62,66,69,73],[59,62,66,69],[55,59,62,66],[57,61,64,67]],Nd=[74,76,78,81,83,86],vr=s=>440*2**((s-69)/12);function Bd(s){if(!Xe)return!1;if(!s){if(Vn){clearInterval(Vn.timer);let r=mn.radio;r.gain.setTargetAtTime(0,Xe.currentTime,.1),setTimeout(()=>r.disconnect(),600),Vn=null,mn.radio=null}return!1}if(Vn)return!0;let e=Ms(0),t=bi("lowpass",2600,.7,e),n=bi("highpass",140,.5,t);mn.radio=e;let i=60/74;return Vn={next:Xe.currentTime+.1,step:0},Vn.timer=setInterval(()=>{if(Xe.state!=="running"){Vn.next=Xe.currentTime+.1;return}for(;Vn.next<Xe.currentTime+.25;){let r=Vn.next,o=Vn.step%32,a=Math.floor(o/8)%4,c=o%8,l=mv[a],u=c%2?i*.08:0;c===0&&l.forEach((h,f)=>{Nt("sine",vr(h),r+f*.012,2.6,.05,n),Nt("triangle",vr(h)*2,r+f*.012,.7,.012,n)}),(c===3||c===6)&&l.slice(1).forEach(h=>Nt("sine",vr(h),r+u,.5,.028,n)),(c===0||c===5)&&Nt("triangle",vr(l[0]-24),r+u,.7,.16,n,1,.02),c===4&&Nt("triangle",vr(l[0]-17),r,.5,.1,n,1,.02),(c===0||c===5)&&Nt("sine",110,r+u,.16,.22,n,.4),(c===2||c===6)&&en(r+u,.16,.05,"bandpass",1900,.8,n),en(r+u,.04,c%2?.012:.022,"highpass",7e3,1,n),Math.random()<.16&&Nt("sine",vr(Nd[Math.floor(Math.random()*Nd.length)]),r+u,1.1,.035,n,1,.04),Vn.next+=i/2,Vn.step++}},60),!0}function Bh(s){if(!Xe||($i&&($i.stop(),$i=null),!s))return;let e=Ms(0),t=bi("lowpass",300,1,e),n=Xe.createOscillator(),i=Xe.createOscillator(),r=Xe.createOscillator(),o=Xe.createGain(),a=Xe.createGain();n.type=i.type="sawtooth",r.type="sine",a.gain.value=.6,o.gain.value=.4,n.connect(a),i.connect(a),r.connect(o),o.connect(a.gain),a.connect(t),n.start(),i.start(),r.start(),e.gain.setTargetAtTime(s==="bike"?.1:.12,Xe.currentTime,.2),$i={kind:s,rev(c){let l=s==="bike"?58:36,u=l*(1+c*2.6),h=Xe.currentTime;n.frequency.setTargetAtTime(u,h,.06),i.frequency.setTargetAtTime(u*1.5,h,.06),r.frequency.setTargetAtTime(u/2,h,.06),t.frequency.setTargetAtTime(260+c*1500,h,.08)},stop(){e.gain.setTargetAtTime(0,Xe.currentTime,.15),setTimeout(()=>{n.stop(),i.stop(),r.stop(),e.disconnect()},800)}},$i.rev(0)}var zd=s=>$i==null?void 0:$i.rev(s);var dt=(s,e,t)=>new C(s,e,t),il=(s,e)=>Math.atan2(-s,-e),sl=(s,e)=>Math.atan2(s,e);function Hd(s){let{scene:e}=s,t=new vi,n=qt("deck",{env:.4}),i=qt("floor",{env:.35}),r=ht(15592162,{roughness:.35,envMapIntensity:.6}),o=ht(10132896,{metalness:.9,roughness:.3}),a=ht(723981,{roughness:.4}),c=ht(8227468,{roughness:.95}),l=(y,N,k=0,V=0,ye=0,Ce=e)=>{let Ne=new ze(y,N);return Ne.position.set(k,V,ye),Ne.castShadow=Ne.receiveShadow=!0,Ce.add(Ne),Ne},u=(y,N,k,V,ye,Ce)=>hn(y-k/2,y+k/2,N-V/2,N+V/2,ye,ye+Ce),h=[],f=vt(256,128,(y,N,k)=>{y.fillStyle="#f2ead2",y.fillRect(0,0,N,k),y.fillStyle="#1f6f78",y.fillRect(0,0,N,16),y.fillRect(0,k-16,N,16),y.fillStyle="#e9843a",y.beginPath(),y.arc(64,64,26,Math.PI,0),y.fill(),y.fillStyle="#1f6f78",y.fillRect(30,64,68,4),y.font="bold 26px sans-serif",y.fillText("LOW",112,58),y.fillText("TIDE",112,86),y.font="11px sans-serif",y.fillText("LAGER \xB7 ICE COLD",112,104)}),d=new Be({color:4858888,roughness:.08,metalness:.25,transparent:!0,opacity:.88,envMapIntensity:1.4}),g=new Be({map:f,roughness:.6}),_=new ps([[0,0],[.03,0],[.031,.006],[.031,.12],[.027,.145],[.014,.18],[.0125,.222],[.0145,.224],[.0145,.23],[0,.23]].map(y=>new me(y[0],y[1])),16),m=new it(.0316,.0316,.065,16,1,!0).translate(0,.07,0),p=(y=null)=>{let N=new Ye,k=new ze(_,d),V=new ze(m,g);return k.castShadow=!0,N.add(k,V),y==null||y.add(N),N},v=ht(15262416,{roughness:.9}),x=new Be({color:3346440,emissive:16734740,emissiveIntensity:.6}),M=()=>{let y=new Ye;return y.add(new ze(new it(.0055,.0035,.075,8).rotateX(Math.PI/2),v),new ze(new st(.006,6,5).translate(0,0,-.039),x.clone())),y},I=vt(256,256,(y,N,k)=>{let V=ys(5);y.fillStyle="#b9772f",y.beginPath(),y.arc(128,128,126,0,7),y.fill(),y.fillStyle="#e2b54b",y.beginPath(),y.arc(128,128,110,0,7),y.fill();for(let ye=0;ye<60;ye++)y.fillStyle=`rgba(${200+V()*40}, ${120+V()*60}, 40, 0.5)`,y.beginPath(),y.arc(128+(V()-.5)*200,128+(V()-.5)*200,6+V()*14,0,7),y.fill();for(let ye=0;ye<22;ye++){let Ce=V()*6.28,Ne=20+V()*80;y.fillStyle="#8f2a1c",y.beginPath(),y.arc(128+Math.cos(Ce)*Ne,128+Math.sin(Ce)*Ne,11,0,7),y.fill(),y.fillStyle="#6f1c12",y.beginPath(),y.arc(128+Math.cos(Ce)*Ne+2,128+Math.sin(Ce)*Ne+2,6,0,7),y.fill()}}),A=[ht(12154671,{roughness:.9}),new Be({map:I,roughness:.75}),ht(10119722,{roughness:.9})],b=y=>new it(.165,.165,.014,5,1,!1,y*Math.PI/4,Math.PI/4),F=(y,N)=>{s.drop(y.hand),N&&s.note(N)},S={beer(){let y={kind:"beer",hand:"R",mesh:p(),left:6,dur:1.9,fp:{at:[.25,-.3,-.5],up:[.07,-.19,-.34],tilt:1.15},tp:{at:[0,-.02,.085],rot:[-Math.PI/2,0,0]},label:()=>y.left>1?"Sip":"Finish it",use(){s.busy(y,()=>{At("gulp"),y.left--,s.feel("buzz",.07),s.chill(2),y.left<=0&&F(y,["That one's done.","Dead soldier.","Good to the last drop."][s.count("beers")%3])})}};return s.count("beers",1),y},joint(){let y=!1,N={kind:"joint",hand:"L",mesh:M(),left:6,dur:2.6,fp:{at:[-.2,-.22,-.42],up:[-.03,-.1,-.26],tilt:.25},tp:{at:[.01,-.03,-.04],rot:[.5,0,0]},label:()=>y?N.left>1?"Take a hit":"Last hit":"Spark it",use(){y||At("lighter"),y=!0,N.mesh.children[1].material.emissiveIntensity=2.5,s.busy(N,()=>{N.mesh.children[1].material.emissiveIntensity=7},()=>{N.mesh.children[1].material.emissiveIntensity=2.5,At("puff"),s.exhale(),N.left--,s.feel("high",.16),s.chill(4),N.left<=0&&F(N,"Roach. That'll do.")})}};return N},slice(){let y=new ze(b(0).rotateY(Math.PI*7/8).translate(0,0,.09),A);y.castShadow=!0;let N=new Ye;N.add(y);let k={kind:"slice",hand:"R",mesh:N,left:3,dur:1.5,fp:{at:[.22,-.26,-.46],up:[.04,-.17,-.3],tilt:.5},tp:{at:[0,-.04,-.02],rot:[-.3,0,0]},label:()=>k.left>1?"Take a bite":"Last bite",use(){s.busy(k,()=>{At("bite"),k.left--,y.scale.z=k.left/3+.12,s.chill(2),k.left<=0&&F(k,["Cold. Perfect.","Better than last night.","Breakfast of champions."][s.count("slices")%3])})}};return s.count("slices",1),k}},E=y=>{var N;if(((N=s.holding("R"))==null?void 0:N.kind)==="beer")return s.note("Finish the one you've got.");At("cap"),s.hold(S.beer()),s.note(y||"Cold one."),s.chill(1)},w=X.z0+.1;_t("sofa",e,-2.6,K,-2.15,Math.PI),u(-2.6,-2.15,2.6,.9,K,.75),_t("table",e,-2.6,K,-3.6,Math.PI/2),u(-2.6,-3.6,1.2,.6,K,.4),_t("lounger",e,-.45,K,-2.75,sl(-2.1,-2.5)),u(-.45,-2.75,.7,.7,K,.7);let O=vt(256,256,(y,N,k)=>{y.fillStyle="#7a3b2c",y.fillRect(0,0,N,k);for(let V=0;V<9;V++)y.strokeStyle=["#d8b26a","#2f5a5c","#e7dcc2"][V%3],y.lineWidth=5,y.strokeRect(10+V*13,10+V*13,N-20-V*26,k-20-V*26);for(let V=0;V<5e3;V++)y.fillStyle=`rgba(0,0,0,${Math.random()*.12})`,y.fillRect(Math.random()*N,Math.random()*k,2,2)});l(new Xt(3.4,2.4).rotateX(-Math.PI/2),new Be({map:O,roughness:1,envMapIntensity:.2}),-2.6,K+.006,-3.2).castShadow=!1,t.span(i,-3.6,K+.42,w,-1.6,K+.47,w+.42,{tile:1.6});for(let y of[-3.5,-2.6,-1.7])t.span(i,y-.02,K,w+.04,y+.02,K+.42,w+.4,{tile:1.6});t.span(i,-3.6,K+.2,w+.02,-1.6,K+.23,w+.4,{tile:1.6}),u(-2.6,w+.21,2,.42,K,.5);let q=Id(),U=new Be({color:329223,emissive:16777215,emissiveMap:q.tex,emissiveIntensity:0,roughness:.25,metalness:.2}),B=dt(-2.6,K+.47+.42,w+.2);l(new Ue(1.32,.77,.035),a,B.x,B.y,B.z-.02),l(new Xt(1.26,.71),U,B.x,B.y,B.z+.001).castShadow=!1,l(new Ue(.3,.05,.16),a,B.x,K+.495,B.z-.02),l(new Ue(.9,.06,.08),a,B.x,K+.5,B.z+.14);let W=new Kn(16777215,0,7,2);W.position.set(B.x,B.y,B.z+.5),e.add(W),_t("crate",e,-5.35,K,-.35,.2),_t("crt",e,-5.35,K+.25,-.35,sl(1,-1)),_t("gamepad",e,-4.7,K+.01,-.8,.6,.8),u(-5.35,-.35,.55,.5,K,.7);let re=_t("fan",e,-2.6,X.top-0,-2.9),se=re.getObjectByName("ceiling_fan_blades");re.children[0].position.y=0;{let y=_t("dartboard",e,X.x0+.1,K+1.7,-4.75,Math.PI/2);y.children[0].position.y=0}_t("plant",e,-5.45,K,-1,0,3.2),_t("plant",e,-1.75,K+.47,w+.2,1,1.4),_t("uke",e,-1.05,K,-2.02,2.6).rotation.x=-.22;let j=new Ye;j.position.set(.5,K,X.z0+.42),e.add(j),l(new Ue(.72,1.72,.62),r,0,.86,-.02,j);let ce=new Be({color:14673640,emissive:13625087,emissiveIntensity:0,roughness:.6});l(new Ue(.62,1.05,.46),ce,0,.58,.066,j).material.side=sn;for(let y=0;y<3;y++){l(new Ue(.62,.012,.44),o,0,.3+y*.3,.06,j);for(let N=0;N<6;N++){let k=p(j);k.position.set(-.24+N*.096,.306+y*.3,.12+N%2*.07),k.rotation.y=N*1.7}}let de=new Ye;de.position.set(.36,0,.295),j.add(de),l(new Ue(.72,1.14,.05),r,-.36,.58,.025,de),l(new Ue(.025,.4,.03),o,-.66,.8,.065,de);let Se=vt(128,128,y=>{y.fillStyle="#edeae2",y.fillRect(0,0,128,128),y.fillStyle="#d0452c",y.fillRect(14,20,34,22),y.fillStyle="#f2b84b",y.beginPath(),y.arc(84,34,14,0,7),y.fill(),y.fillStyle="#fff",y.fillRect(30,62,60,44),y.fillStyle="#333",y.font="9px sans-serif",y.fillText("TONY'S PIZZA",34,76),y.fillText("555-0142",34,90),y.fillText('"just bring cash"',32,102)});l(new Xt(.5,.5),new Be({map:Se,roughness:.4}),-.36,.72,.0512,de).castShadow=!1,l(new Ue(.72,.54,.05),r,0,1.44,.32,j),l(new Ue(.025,.2,.03),o,-.3,1.36,.36,j),u(.5,X.z0+.4,.74,.7,K,1.8);let te=.32,z=X.part-.06;t.span(r,te+.03,K+.1,-4.55,z,K+.86,-1.6,{tile:2}),t.span(a,te+.08,K,-4.5,z,K+.1,-1.65),t.span(i,te-.02,K+.86,-4.58,z,K+.9,-1.57,{tile:1.2,swap:!0}),u((te+z)/2,-3.08,z-te,3,K,.9);for(let y of[-4,-3.4,-2.8,-2.2])t.box(a,te+.025,K+.48,y+.3,.008,.7,.008),t.box(o,te+.015,K+.62,y+.05,.02,.1,.015);t.span(o,te+.1,K+.84,-3.9,z-.08,K+.905,-3.3),t.span(a,te+.14,K+.86,-3.86,z-.12,K+.91,-3.34),t.cyl(o,z-.07,K+1.02,-3.6,.012,.012,.24),t.box(o,z-.14,K+1.13,-3.6,.16,.02,.02),t.box(a,.66,K+1.05,-2.2,.36,.28,.5),t.box(ht(1714732,{roughness:.15,metalness:.6}),.475,K+1.05,-2.27,.01,.2,.3),t.span(i,z-.24,K+1.55,-4.5,z,K+1.58,-2,{tile:1.2,swap:!0});for(let y=0;y<7;y++)p(e).position.set(z-.12-y%2*.06,K+1.58,-4.35+y*.31);let oe=vt(256,256,(y,N,k)=>{y.fillStyle="#c9b48a",y.fillRect(0,0,N,k),y.strokeStyle="#b3122a",y.lineWidth=8,y.strokeRect(14,14,N-28,k-28),y.fillStyle="#b3122a",y.font="bold 44px serif",y.textAlign="center",y.fillText("TONY'S",N/2,112),y.font="italic 22px serif",y.fillText("hot & fresh",N/2,146),y.font="14px sans-serif",y.fillText("(yesterday)",N/2,180);for(let V=0;V<14;V++)y.fillStyle="rgba(120,80,20,0.18)",y.beginPath(),y.arc(Math.random()*N,Math.random()*k,8+Math.random()*22,0,7),y.fill()}),le=ht(12166268,{roughness:.95}),ne=[le,le,new Be({map:oe,roughness:.9}),le,le,le];for(let y=0;y<3;y++)l(new Ue(.42,.045,.42),ne,.63,K+.925+y*.046,-2.95-y*.012).rotation.y=.1*y-.1;let ve=K+.392,Ee=new Ye;Ee.position.set(-2.82,ve,-3.6),Ee.rotation.y=.18,e.add(Ee),l(new Ue(.42,.012,.42),le,0,.006,0,Ee);for(let[y,N,k,V]of[[0,.205,.42,.012],[-.205,0,.012,.42],[.205,0,.012,.42],[0,-.205,.42,.012]])l(new Ue(k,.04,V),le,y,.026,N,Ee);let H=new Ye;H.position.set(0,.045,-.21),H.rotation.x=-1.95,Ee.add(H),l(new Ue(.42,.012,.42),ne,0,0,.21,H);let J=[0,1,2,4,5].map(y=>{let N=l(b(y),A,0,.022,0,Ee);return N.rotation.y=y%2*.05,N}),D=new Ye;D.position.set(-2.25,ve,-3.52),e.add(D),l(new it(.06,.05,.022,16),new Be({color:9416880,roughness:.08,metalness:.3,transparent:!0,opacity:.7}),0,.011,0,D);let ee=M();ee.position.set(.01,.028,0),ee.rotation.y=.8,D.add(ee);for(let[y,N,k]of[[-2.05,-3.72,0],[-2.14,-3.44,0],[-3.12,-3.42,1]]){let V=p(e);V.position.set(y,ve+(k?.031:0),N),k&&V.rotation.set(Math.PI/2,0,.6)}l(new Ue(.045,.016,.16),a,-2.5,ve+.008,-3.42).rotation.y=.4;let Q=vt(256,256,(y,N,k)=>{y.fillStyle="#2c4a4f",y.fillRect(0,0,N,k);for(let V=0;V<8;V++)y.fillStyle="rgba(230,220,190,0.22)",y.fillRect(V*32+6,0,8,k),y.fillRect(0,V*32+6,N,8),y.fillStyle="rgba(180,60,40,0.3)",y.fillRect(V*32+22,0,3,k),y.fillRect(0,V*32+22,N,3)});t.span(i,2.35,K,-5.38,3.95,K+.22,-3.35,{tile:1.6}),u(3.15,-4.36,1.6,2.05,K,.5),l(new Ue(1.5,.2,1.95),ht(15131092,{roughness:1}),3.15,K+.32,-4.37);let ue=l(new Ue(1.56,.06,1.25,10,1,8),new Be({map:Q,roughness:1}),3.15,K+.44,-4);ue.rotation.y=.06;{let y=ue.geometry.attributes.position;for(let N=0;N<y.count;N++)y.getY(N)>0&&y.setY(N,y.getY(N)+.03*Math.sin(y.getX(N)*9)*Math.cos(y.getZ(N)*7)+.02);ue.geometry.computeVertexNormals()}for(let y of[2.75,3.5])l(new st(.2,12,8).scale(1.35,.4,.9),ht(15789282,{roughness:1}),y,K+.47,-5.08).rotation.y=(y-3)*.4;_t("side",e,4.45,K,-5,0),u(4.45,-5,.5,.45,K,.55);let ie=new Be({color:15260084,emissive:16761466,emissiveIntensity:1.2,roughness:.9,side:Ft});l(new it(.03,.06,.25,10),ht(6965804),4.45,K+.675,-5),l(new it(.09,.14,.18,14,1,!0),ie,4.45,K+.87,-5).castShadow=!1;let we=vt(256,384,(y,N,k)=>{let V=y.createLinearGradient(0,0,0,k);V.addColorStop(0,"#f08a3c"),V.addColorStop(.55,"#e8556a"),V.addColorStop(1,"#27304f"),y.fillStyle=V,y.fillRect(0,0,N,k),y.fillStyle="#ffe9b0",y.beginPath(),y.arc(N/2,210,60,0,7),y.fill(),y.fillStyle="#1b2440";for(let ye=0;ye<5;ye++)y.fillRect(0,230+ye*16,N,6+ye*2);y.fillRect(0,300,N,90),y.fillStyle="#10152a",y.beginPath(),y.moveTo(30,300),y.quadraticCurveTo(60,180,54,120),y.lineTo(62,120),y.quadraticCurveTo(70,190,50,300),y.fill();for(let ye=0;ye<7;ye++)y.beginPath(),y.moveTo(58,122),y.quadraticCurveTo(58+50*Math.cos(ye),90+30*Math.sin(ye*1.3),58+80*Math.cos(ye*.9),130+40*Math.sin(ye)),y.lineWidth=5,y.strokeStyle="#10152a",y.stroke();y.fillStyle="#ffe9b0",y.font="bold 30px sans-serif",y.textAlign="center",y.fillText("NO SHOES",N/2,340),y.font="15px sans-serif",y.fillText("NO SHIRT \xB7 NO PROBLEM",N/2,364)});l(new Xt(.62,.93).rotateY(Math.PI/2),new Be({map:we,roughness:.7}),X.part+.065,K+1.55,-3.4).castShadow=!1,_t("crate",e,1.5,K,-.05,1.5),l(new st(.3,10,8).scale(1.4,.45,1),c,4.35,K+.1,-.2);let ge=[],R=(y,N,k,V,ye,Ce="chair")=>{_t(Ce,e,y,N,k,sl(V,ye)),u(y,k,.5,.5,N,.5);let Ne=il(V,ye);return ge.push({pos:dt(y-Math.sin(Ne)*-.02,N-.07,k-Math.cos(Ne)*-.02),yaw:Ne,up:dt(y-Math.sin(Ne)*.75,N,k-Math.cos(Ne)*.75),at:dt(y,N,k),label:"Kick back"}),ge[ge.length-1]};R(-7.25,K,2.25,-.75,.66),R(-5.5,K,3,-.8,.6),_t("side",e,-6.4,K,2.9,.4),u(-6.4,2.9,.5,.45,K,.55);let T=_t("boombox",e,-6.42,K+.55,2.92,sl(-.2,-1)),Y=M();Y.position.set(-6.2,K+.565,3.06),e.add(Y);let he=new Ye;he.position.set(-4.55,K,3.3),he.rotation.y=-.3,e.add(he);let pe=ht(2060186,{roughness:.5});l(new Ue(.62,.36,.36),pe,0,.18,0,he),l(new Ue(.56,.02,.3),ht(15988472,{roughness:.25}),0,.355,0,he);let Z=new Ye;Z.position.set(0,.36,-.18),Z.rotation.x=-1.25,he.add(Z),l(new Ue(.64,.05,.38),ht(15659248,{roughness:.5}),0,.025,.19,Z);for(let y=0;y<5;y++){let N=p(he);N.position.set(-.2+y*.1,.16,y%2*.1-.05),N.rotation.z=(y-2)*.12}u(-4.55,3.3,.6,.4,K,.4),_t("plant",e,-.2,K,1,.5,3.4),_t("plant",e,2,K,.95,2,2.6),l(new Ue(.9,.012,.5),ht(5916210,{roughness:1}),-1.1,K+0,.95).castShadow=!1,R(8.6,K,-1.3,1,.15),_t("propane",e,8.95,K,-4.9,0),_t("buoy",e,X.annexE-.12,K+.6,-3,-Math.PI/2).children[0].position.y=0;let xe=new Ye;xe.position.set(8.2,K,-4.8),e.add(xe);let _e=ht(1053204,{roughness:.25,metalness:.4});l(new st(.29,20,10,0,6.3,Math.PI/2,Math.PI/2),_e,0,.8,0,xe),l(new st(.295,20,10,0,6.3,0,Math.PI/2).scale(1,.75,1),_e,0,.81,0,xe),l(new it(.02,.02,.05),o,0,1.05,0,xe);for(let y=0;y<3;y++){let N=y*2.094;l(new it(.012,.012,.62),o,Math.cos(N)*.2,.3,Math.sin(N)*.2,xe).rotation.set(Math.sin(N)*.2,0,-Math.cos(N)*.2)}u(8.2,-4.8,.6,.6,K,1),_t("aircon",e,5.75,1.25,X.z1+.2,0,.8,y=>!y.includes("rusted"));for(let[y,N,k,V]of[[-4.9,-4.6,0,1],[-4.85,-4.55,.17,1],[-4.1,-4.9,0,0]]){let ye=_t("tyre",e,y,k+(V?.085:0),N,V?0:.5);V?(ye.rotation.x=Math.PI/2,ye.children[0].position.y=0):ye.rotation.z=.12}u(-4.9,-4.6,.6,.6,0,.4),_t("crate",e,3.7,0,-1.2,.3),_t("crate",e,3.72,.25,-1.18,.5),_t("propane",e,4.35,0,-1.6,1),u(3.9,-1.3,1,.6,0,.5),_t("buoy",e,-.5,1.75,X.z1+.16,0).children[0].position.y=0;let Me=new st(1,20,12).scale(.36,.2,1.75),De=Me.attributes.position;for(let y=0;y<De.count;y++){let N=De.getZ(y)/1.75,k=Math.max(0,1-Math.abs(N)**2.6);De.setX(y,De.getX(y)*(.2+.8*k**.5)/Math.max(.2,Math.sqrt(1-N*N))),De.getY(y)>.06&&De.setY(y,.06+(De.getY(y)-.06)*.3)}Me.computeVertexNormals();let He=l(Me,ht(12728866,{roughness:.35,envMapIntensity:1}),4.6,.19,6.6);He.rotation.set(0,1.25,.12),l(new it(.2,.2,.03,16).scale(1,1,1.6),a,0,.07,.1,He),u(4.6,6.6,3,.7,0,.35);let P=new st(1,16,10).scale(.26,.035,1.05),$=vt(64,256,(y,N,k)=>{y.fillStyle="#efe9d6",y.fillRect(0,0,N,k),y.fillStyle="#1f6f78",y.fillRect(26,0,12,k),y.fillStyle="#e9843a",y.fillRect(20,0,3,k),y.fillRect(41,0,3,k)});l(P,new Be({map:$,roughness:.25,envMapIntensity:1}),-3.25,1.05,3.72).rotation.set(Math.PI/2-.16,0,0);let[Re,Pe]=s.land.palms,Le=dt(Re.x+.03,Rt(Re.x,Re.z)+1.5,Re.z+.02),ke=dt(Pe.x-.03,Rt(Pe.x,Pe.z)+1.5,Pe.z+.03),et=ke.clone().sub(Le),mt=et.length(),qe=et.clone().normalize(),Te=dt(-qe.z,0,qe.x),G=new Xt(1,1,14,6),ae=G.attributes.position,fe=(y,N)=>{let k=.16+y*.68,V=.62*4*k*(1-k)+.18*(1-(2*N)**2);return Le.clone().addScaledVector(qe,mt*k).addScaledVector(Te,N*1*(.35+.65*Math.sin(Math.PI*y))).add(dt(0,-V+Math.abs(N)*.5,0))};for(let y=0;y<ae.count;y++){let N=fe(ae.getX(y)+.5,ae.getY(y));ae.setXYZ(y,N.x,N.y,N.z)}G.computeVertexNormals();let Oe=vt(64,64,y=>{for(let N=0;N<8;N++)y.fillStyle=["#e8dcc0","#c8553a","#e8dcc0","#2f6f7a"][N%4],y.fillRect(0,N*8,64,8)});l(G,new Be({map:Oe,side:Ft,roughness:1}));for(let[y,N]of[[Le,0],[ke,1]])for(let k of[-.5,0,.5]){let V=fe(N,k);l(Mi(ye=>new C().lerpVectors(y,V,ye),()=>.008,4,4),ht(13483930,{roughness:1}))}let Ie=fe(.5,0),je=il(qe.x,qe.z),lt={pos:dt(Ie.x-qe.x*.25,Ie.y-.2,Ie.z-qe.z*.25),yaw:je,pose:"lie",eye:dt(Ie.x-qe.x*.55,Ie.y+.42,Ie.z-qe.z*.55),pitch:.75,sway:1,up:dt(Ie.x+Te.x*1.1,0,Ie.z+Te.z*1.1),at:dt(Ie.x,Rt(Ie.x,Ie.z),Ie.z),label:"Lie in the hammock",r:1.9,say:"Swing low."},Ke=6,ft=.55,$e=-20.5,Et=-40;t.span(n,Et,ft-.06,Ke-.8,$e,ft,Ke+.8,{tile:1.5,swap:!0}),Si(Et,$e,Ke-.8,Ke+.8,ft),t.beam(n,[$e+.02,ft-.03,Ke],[-17.6,.02,Ke],1.6,.06,{tile:1.5,swap:!0}),Si($e,-17.6,Ke-.8,Ke+.8,y=>yt(ft,.02,wt((y-$e)/(-17.6-$e),0,1)));for(let y=$e-.6;y>Et-.5;y-=3.2)for(let N of[-1,1])t.cyl(n,y,-.9,Ke+N*.86,.11,.13,3.4,{sides:9}),t.span(n,y-.06,ft-.2,Ke-.8,y+.06,ft-.06,Ke+.8,{tile:1.5});for(let y of[-1,1])t.span(n,Et,ft-.2,Ke+y*.78-.04,$e,ft-.06,Ke+y*.78+.04,{tile:1.5,swap:!0});t.cyl(o,Et+.5,ft+.06,Ke-.6,.03,.05,.12);let gn={pos:dt(Et+.22,ft-.5+.02,Ke+.15),yaw:il(-1,.25),up:dt(Et+1.2,ft,Ke+.15),at:dt(Et+.7,ft,Ke),label:"Sit on the end of the dock",r:1.6,say:"Feet over the edge. Tide's out."},at=dt(-20,Rt(-20,22),22);_t("firepit",e,at.x,at.y-.02,at.z,.4),u(at.x,at.z,1.2,1.2,at.y,.35),_t("picnic",e,-15.6,Rt(-15.6,26.2),26.2,.5,.8),u(-15.6,26.2,1.9,2.2,Rt(-15.6,26.2),.7),R(-21.5,Rt(-21.5,20.7),20.7,1.5,1.3),R(-18.4,Rt(-18.4,20.9),20.9,-1.6,1.1);for(let y=0;y<4;y++)l(new it(.05,.06,.6,7),ht(2759698,{roughness:1}),at.x+Math.cos(y*1.6)*.12,at.y+.22,at.z+Math.sin(y*1.6)*.12).rotation.set(1,y*1.6,0);let Jn=vt(64,64,y=>{let N=y.createRadialGradient(32,40,2,32,34,30);N.addColorStop(0,"rgba(255,240,190,1)"),N.addColorStop(.35,"rgba(255,150,40,0.85)"),N.addColorStop(1,"rgba(200,40,0,0)"),y.fillStyle=N,y.fillRect(0,0,64,64)}),wn=Array.from({length:9},(y,N)=>{let k=new Bi(new xi({map:Jn,blending:Qs,depthWrite:!1,transparent:!0}));return k.visible=!1,e.add(k),{s:k,ph:N/9}}),An=new Kn(16747066,0,16,2);An.position.set(at.x,at.y+.7,at.z),e.add(An);let Ut=!1,un=0;t.build(e),s.spot({at:dt(.35,K,-4.35),r:1.5,label:"Grab a cold one",go(){At("door");let y=0;ce.emissiveIntensity=1.5,h.push(N=>{if(y+=N,de.rotation.y=Math.sin(Math.min(1,y/1.5)*Math.PI)*1.5,y>1.5)return de.rotation.y=0,ce.emissiveIntensity=0,At("door",.6),!0}),E(["Cold one.","Fridge is stocked. Life is good.","One for the road to the couch."][s.count("beers")%3])}}),s.spot({at:dt(-4.55,K,3.3),r:1.3,label:"Grab a cold one",go(){E(["Still on ice.","Cooler beer. Best beer."][s.count("beers")%2])}});let wi=y=>()=>{if(s.holding("L"))return s.note("You've already got one going.");y.visible=!1,s.hold(S.joint()),s.note("Rolled it this morning."),setTimeout(()=>{y.visible=!0},24e4)};s.spot({at:dt(-2.25,K,-3.3),r:1.15,label:"Pick up the joint",when:()=>ee.visible,go:wi(ee)}),s.spot({at:dt(-6.2,K,3.06),r:1.1,label:"Pick up the joint",when:()=>Y.visible,go:wi(Y)}),s.spot({at:dt(-2.82,K,-3.35),r:1.15,label:()=>J.some(y=>y.visible)?"Grab a slice":"Check the box",go(){let y=J.find(N=>N.visible);if(!y){s.note("Empty. Tony's opens at four."),setTimeout(()=>J.forEach(N=>{N.visible=!0}),9e4);return}if(s.holding("R"))return s.note("Hands are full.");y.visible=!1,s.hold(S.slice()),s.note("Day-old. The best kind.")}});let So=y=>{q.set(y),U.emissiveIntensity=y?1.7:0,Od(y),y||(W.intensity=0)},Er={pos:dt(-2.6,K-.02,-2.3),yaw:0,eye:dt(-2.6,K+1.14,-2.42),up:dt(-1,K,-3.3),at:dt(-2.6,K,-2.9),r:1.35,label:"Watch TV",say:null,act:{label:()=>"Change the channel",go(){At("click"),s.note(q.next())}},onSit(){q.on||(So(!0),s.note(q.name))}},ll={pos:dt(-.5,K-.05,-2.78),yaw:il(-2.1,-2.5),up:dt(-1.2,K,-1.3),at:dt(-.75,K,-3.1),r:1,label:"Sink into the lounger",act:Er.act,onSit:Er.onSit};for(let y of[Er,ll,lt,gn,...ge])s.spot({at:y.at,r:y.r||1.2,label:y.label,go(){var N;s.sit(y),(N=y.onSit)==null||N.call(y),y.say&&s.note(y.say)}});s.spot({at:dt(-2.6,K,w+.9),r:1,label:()=>q.on?"Turn the TV off":"Turn the TV on",go(){At("click"),So(!q.on)}});let L=!1;return s.spot({at:dt(-6.42,K,2.92),r:1.25,label:()=>L?"Turn the radio off":"Turn the radio on",go(){At("click"),L=Bd(!L),L&&s.note("WLOW 96.1 \xB7 slow jams till the sun's gone")}}),s.spot({at:dt(3.15,K,-3.05),r:1.3,label:"Take a nap",go(){s.nap()}}),s.spot({at,r:2,label:()=>Ut?"Put the fire out":"Light the fire",go(){Ut=!Ut,At(Ut?"match":"puff"),Fd(Ut),Ut&&s.chill(3,"There she goes.")}}),s.spot({at:dt(8.2,K,-4.2),r:1.1,label:"Check the grill",go(){s.note(["Still warm from last night. Probably fine.","One sausage. Unclear vintage."][s.count("grill",1)%2])}}),{items:S,tv:q,update(y){for(let Ce=h.length-1;Ce>=0;Ce--)h[Ce](y)&&h.splice(Ce,1);se&&(se.rotation.y+=y*2.2),q.update(y),q.on&&(W.color.lerp(q.glow,.2),W.intensity=5+Math.sin(performance.now()/90)*.6+Math.random()*.5);let N=s.me.pos,k=N.distanceTo(B),V=Math.hypot(N.x+6.42,N.z-2.92)+Math.abs(N.y-K)*2,ye=N.distanceTo(at);nl("tv",q.on?.05*wt(1.6-k/6,0,1):0),nl("radio",s.me.ride?.55:wt(1.15-V/16,.06,1)*.75),nl("fire",.3*wt(1.3-ye/12,0,1)),un=yt(un,Ut?1:0,Math.min(1,y*2)),An.intensity=un*(26+Math.sin(performance.now()/70)*5+Math.random()*5);for(let Ce of wn){Ce.ph=(Ce.ph+y*(.9+Ce.ph*.3))%1,Ce.s.visible=un>.03;let Ne=Ce.ph;Ce.s.position.set(at.x+Math.sin(Ne*9+Ce.ph*40)*.1*(1-Ne),at.y+.25+Ne*.95,at.z+Math.cos(Ne*7)*.1*(1-Ne)),Ce.s.scale.setScalar((.75-Ne*.5)*un),Ce.s.material.opacity=(1-Ne)*un}}}}var Vt=new Be({color:14672870,metalness:1,roughness:.08,envMapIntensity:1.3}),gv=new Be({color:1184274,roughness:.85}),si=new Be({color:789774,roughness:.55}),xv=new Be({color:1712678,metalness:.95,roughness:.04,envMapIntensity:1.5,transparent:!0,opacity:.82}),Mr=new Be({color:5593437,metalness:.9,roughness:.4}),Ge=(s,e,t=0,n=0,i=0)=>{let r=new ze(s,e);return r.position.set(t,n,i),r.castShadow=!0,r.receiveShadow=!0,r};function yo(s,e,t=.03){let n=new Qr;s.forEach((r,o)=>{r.length>2?n.absarc(r[0],r[1],r[2],r[3],r[4],r[5]):o?n.lineTo(r[0],r[1]):n.moveTo(r[0],r[1])});let i=new Ia(n,{depth:e-t*2,bevelEnabled:t>0,bevelThickness:t,bevelSize:t,bevelSegments:3,curveSegments:14});return i.translate(0,0,-(e-t*2)/2),i.rotateY(Math.PI/2),i}function kd(s,e,t){let n=new Ye,i=[[s*.62,-e/2],[s*.9,-e/2],[s,-e*.32],[s,e*.32],[s*.9,e/2],[s*.62,e/2]].map(o=>new me(o[0],o[1])),r=Ge(new ps(i,28).rotateZ(Math.PI/2),gv);if(n.add(r),n.add(Ge(new it(s*.64,s*.64,e*.9,24,1,!0).rotateZ(Math.PI/2),Vt),Ge(new it(s*.6,s*.6,e*.5,24).rotateZ(Math.PI/2),Mr),Ge(new it(s*.17,s*.2,e*.62,12).rotateZ(Math.PI/2),Vt)),t)for(let o=0;o<5;o++){let a=o*Math.PI*2/5,c=Ge(new Ue(e*.54,s*.2,s*.13),si,0,Math.cos(a)*s*.4,Math.sin(a)*s*.4);c.rotation.x=a,n.add(c)}else for(let o=0;o<12;o++){let a=Ge(new it(.004,.004,s*1.2,4),Vt);a.rotation.x=o*Math.PI/12,n.add(a)}return tl(n)}function _v(){let s=new Sn({color:15312139,roughness:.4,metalness:.1,clearcoat:.75,clearcoatRoughness:.1,envMapIntensity:1}),e=new Be({color:723723,roughness:.65,envMapIntensity:.4}),t=new Be({color:2759700,roughness:.7}),n=new Be({color:4851206,emissive:16718346,emissiveIntensity:.9,roughness:.3}),i=new Be({color:16774880,emissive:16773320,emissiveIntensity:1.4,roughness:.2}),r=new Ye,o=new Ye;r.add(o);let a=2.95,c=.345,l=a/2,u=.96,h=[[-2.62,.4],[-l-.47,.3],[-l,.3,.47,Math.PI,0,!0],[l-.47,.3],[l,.3,.47,Math.PI,0,!0],[2.52,.33],[2.6,.5],[2.58,.8],[2.2,.9],[.95,.955],[-.6,.955],[-2.55,.93],[-2.64,.78]];for(let _ of[-1,1])o.add(Ge(yo(h,.2,.035),s,_*(u-.1),0,0));o.add(Ge(yo([[-.62,.32],[2.5,.34],[2.57,.5],[2.55,.78],[2.2,.885],[.98,.94],[.9,.5],[-.62,.5]],1.55,.02),s)),o.add(Ge(new Ue(1.56,.06,2),si,0,.55,1.6),Ge(new Ue(1.56,.42,.06),s,0,.74,.98),Ge(new Ue(1.56,.4,.07),s,0,.74,2.58));for(let _=0;_<9;_++)o.add(Ge(new Ue(.05,.015,1.56),Mr,-.62+_*.155,.585,1.79));o.add(Ge(yo([[-.95,.94],[1.08,.93],[.36,1.3],[-.4,1.3]],1.52,.03),xv)),o.add(Ge(yo([[-.5,1.295],[.42,1.295],[.34,1.345],[-.42,1.345]],1.6,.03),s));for(let _ of[-1,1]){o.add(Ge(yo([[-1,.95],[-.28,.95],[-.3,1.31],[-.44,1.31]],.06,.012),s,_*.775,0,0));let m=new ze(new Ue(.055,.82,.06),s);m.position.set(_*.775,1.115,-.72),m.rotation.x=1.085,m.castShadow=!0,o.add(m),o.add(Ge(new Ue(.015,.5,.012),si,_*(u+.004),.66,-.95),Ge(new Ue(.015,.5,.012),si,_*(u+.004),.66,.3),Ge(new Ue(.03,.03,.16),Vt,_*(u+.012),.86,.12),Ge(new Ue(.012,.035,1.9),Vt,_*(u+.006),.46,0),Ge(new Ue(.012,.035,.5),Vt,_*(u+.006),.46,-2.28),Ge(new Ue(.012,.035,.55),Vt,_*(u+.006),.46,2.3),Ge(new Ue(.1,.07,.05),Vt,_*(u+.07),1,-.86))}for(let _ of[-1,1])o.add(Ge(new Ue(.2,.012,1.18),e,_*.3,.92,-1.6).rotateX(-.045));o.add(Ge(new Ue(.5,.06,.6),e,0,.95,-1.5)),o.add(Ge(new Ue(1.5,.2,.04),si,0,.66,-2.585),Ge(new Ue(1.62,.03,.05),Vt,0,.78,-2.59),Ge(new Ue(1.62,.03,.05),Vt,0,.55,-2.59));for(let _=0;_<9;_++)o.add(Ge(new Ue(1,.008,.02),Vt,0,.58+_*.02,-2.6));for(let _ of[-.78,-.58,.58,.78])o.add(Ge(new it(.085,.085,.04,18).rotateX(Math.PI/2),Vt,_,.665,-2.6),Ge(new it(.07,.07,.045,18).rotateX(Math.PI/2),i,_,.665,-2.605));o.add(Ge(new Ue(1.98,.13,.12).translate(0,0,0),Vt,0,.44,-2.66),Ge(new Ue(1.98,.13,.12),Vt,0,.47,2.68));for(let _ of[-1,1])o.add(Ge(new Ue(.3,.1,.03),n,_*.72,.64,2.63),Ge(new it(.035,.04,.3,10).rotateX(Math.PI/2),Vt,_*.55,.3,2.6));let f=vt(128,64,(_,m,p)=>{_.fillStyle="#f3efe2",_.fillRect(0,0,m,p),_.fillStyle="#1b6b5a",_.font="bold 34px sans-serif",_.textAlign="center",_.fillText("LO TIDE",m/2,46),_.font="10px sans-serif",_.fillText("SUNSHINE STATE",m/2,13)});o.add(Ge(new Xt(.3,.15),new Be({map:f,roughness:.5}),0,.5,2.745)),o.children[o.children.length-1].castShadow=!1,o.add(Ge(new Ue(1.4,.16,.5),t,0,.62,.22),Ge(new Ue(1.4,.5,.14),t,0,.9,.5).rotateX(.12),Ge(new Ue(1.46,.12,.25),si,0,.88,-.86));let d=Ge(new Hi(.16,.014,8,22),si,-.38,.9,-.5);d.rotation.x=-.5,o.add(d,Ge(new it(.018,.018,.3,8).rotateX(Math.PI/2-.5),Mr,-.38,.86,-.62)),tl(o);let g=[];for(let[_,m,p]of[[-1,-l,1],[1,-l,1],[-1,l,0],[1,l,0]]){let v=new Ye,x=kd(c,.24,!0);v.position.set(_*(u-.13),c,m),v.add(x),r.add(v),g.push({pivot:v,w:x,front:p})}return{kind:"car",name:"the El Camino",group:r,body:o,wheels:g,WB:a,R:c,top:16,acc:4.6,seat:new C(-.38,.2,.18),eye:new C(-.38,1.16,.08),door:new C(-1.7,0,.1),bed:new C(.15,.6,1.5),cam:[6.4,2.3],radius:1.15,steer:.55,lamp:i}}function yv(){let s=new Sn({color:1058335,roughness:.3,metalness:.3,clearcoat:1,clearcoatRoughness:.08,envMapIntensity:1.3}),e=new Be({color:2759184,roughness:.6}),t=new Be({color:16774880,emissive:16773320,emissiveIntensity:1.2,roughness:.2}),n=new Ye,i=new Ye;n.add(i);let r=.33,o=.74,a=(u,h,f)=>new C(u,h,f),c=(u,h,f=si,d=12)=>{let g=new Jr(u.map(_=>a(..._)));return Ge(Mi(_=>g.getPoint(_),()=>h,d,8),f)};i.add(c([[0,.95,-.52],[0,.9,-.1],[0,.76,.42]],.022),c([[0,.92,-.52],[0,.42,-.36],[0,.3,.05],[0,.4,.4],[0,.76,.42]],.02));for(let u of[-1,1])i.add(c([[u*.09,.4,.3],[u*.1,r,o]],.018),c([[u*.09,.74,.4],[u*.1,r+.02,o]],.014,Vt),c([[u*.08,.98,-.5],[u*.085,r,-o-.03]],.02,Vt),c([[u*.11,.5,-.2],[u*.14,.3,-.05],[u*.15,.27,.45],[u*.16,.3,.95]],.026,Vt,16),Ge(new it(.045,.04,.4,12).rotateX(Math.PI/2),Vt,u*.16,.3,.86));i.add(Ge(new st(.2,20,14).scale(.72,.62,1.35),s,0,.9,-.2),Ge(new Ue(.26,.07,.62),e,0,.82,.38),Ge(new st(.13,12,8).scale(1,.5,1.2),e,0,.84,.62)),i.add(Ge(new Ue(.28,.2,.34),Mr,0,.4,.02),Ge(new it(.1,.1,.34,14).rotateZ(Math.PI/2),Mr,0,.38,.22));for(let[u,h]of[[-.06,-.25],[.1,.25]])for(let f=0;f<6;f++){let d=Ge(new Ue(.2,.012,.17),Mr,0,.53+f*.03,u+h*(.1+f*.03));d.rotation.x=-h,i.add(d)}i.add(c([[-.33,1.1,-.42],[-.2,1.08,-.5],[0,1.02,-.5],[.2,1.08,-.5],[.33,1.1,-.42]],.014,Vt,14),Ge(new it(.02,.02,.12,8).rotateZ(Math.PI/2),si,-.33,1.1,-.41),Ge(new it(.02,.02,.12,8).rotateZ(Math.PI/2),si,.33,1.1,-.41)),i.add(Ge(new st(.1,16,12).scale(1,1,.8),Vt,0,.92,-.64),Ge(new it(.085,.085,.02,18).rotateX(Math.PI/2),t,0,.92,-.725),Ge(new Ue(.1,.05,.03),new Be({color:4851206,emissive:16718346,emissiveIntensity:.9}),0,.72,.92)),i.add(Ge(new Hi(r+.035,.05,6,16,2).rotateY(Math.PI/2).rotateX(1.2),s,0,r,o),Ge(new Hi(r+.035,.04,6,16,1.3).rotateY(Math.PI/2).rotateX(1),s,0,r,-o)),tl(i);let l=[];for(let[u,h]of[[-o,1],[o,0]]){let f=new Ye,d=kd(r,.11,!1);f.position.set(0,r,u),f.add(d),n.add(f),l.push({pivot:f,w:d,front:h})}return{kind:"bike",name:"the bike",group:n,body:i,wheels:l,WB:o*2,R:r,top:20,acc:6,seat:new C(0,.02,.36),eye:new C(0,1.48,.22),door:new C(-.8,0,.2),bed:null,cam:[4.6,2],radius:.6,steer:.5,lamp:t,stand:.2}}function Gd(s){let e=_v(),t=yv(),n=[e,t],i=[],r=(l,u,h,f)=>{l.pos=new C(u,Rt(u,h),h),l.yaw=f,l.v=0,l.st=0,l.roll=0,l.pitch=0,l.spin=0,l.driven=!1,s.scene.add(l.group),o(l,1)};function o(l,u){let h=-Math.sin(l.yaw),f=-Math.cos(l.yaw),d=l.WB/2,g=Rt(l.pos.x+h*d,l.pos.z+f*d),_=Rt(l.pos.x-h*d,l.pos.z-f*d),m=Math.min(1,u*10);l.pos.y=yt(l.pos.y,(g+_)/2,m),l.pitch=yt(l.pitch,Math.atan2(g-_,l.WB),m);let p=0;if(l.kind==="car"){let v=Rt(l.pos.x-f*-.8,l.pos.z+h*-.8),x=Rt(l.pos.x+f*-.8,l.pos.z-h*-.8);p=Math.atan2(x-v,1.6)}else p=l.driven?wt(l.st*l.v*.09,-.6,.6):l.stand;l.roll=yt(l.roll,p,Math.min(1,u*6)),l.group.position.copy(l.pos),l.group.rotation.set(l.pitch,l.yaw,l.roll,"YXZ"),l.body.rotation.z=l.kind==="car"?wt(-l.st*l.v*.012,-.06,.06):0,l.body.rotation.x=l.kind==="car"?wt((l.dv||0)*.006,-.04,.03):0;for(let v of l.wheels)v.w.rotation.x=l.spin,v.front&&(v.pivot.rotation.y=l.st)}r(e,-6.6,8.6,-1.75),r(t,1.3,6.1,-2.2);let a=new xi({map:vt(64,64,l=>{let u=l.createRadialGradient(32,32,2,32,32,30);u.addColorStop(0,"rgba(225,205,170,0.6)"),u.addColorStop(1,"rgba(225,205,170,0)"),l.fillStyle=u,l.fillRect(0,0,64,64)}),transparent:!0,depthWrite:!1});for(let l=0;l<26;l++){let u=new Bi(a.clone());u.visible=!1,s.scene.add(u),i.push({s:u,life:0})}let c=0;for(let l of n)l.drive=(u,h,f)=>{let d=l.v;l.driven=!0,f>.05?l.v+=l.acc*f*u*(l.v<0?2.5:1-.6*l.v/l.top):f<-.05?l.v+=(l.v>.4?-15:-4.5)*-f*u:l.v-=Math.sign(l.v)*Math.min(Math.abs(l.v),1.8*u),l.v=wt(l.v,-5,l.top),l.dv=(l.v-d)/u,l.st=yt(l.st,-h*l.steer/(1+Math.abs(l.v)*.075),Math.min(1,u*5)),l.yaw+=l.v*Math.tan(l.st)/l.WB*u;let g=-Math.sin(l.yaw),_=-Math.cos(l.yaw),m=l.pos.x,p=l.pos.z;if(vs(l.pos,g*l.v*u,_*l.v*u,l.radius,1.2),Rt(l.pos.x,l.pos.z)<Dn+.12&&(l.pos.x=m,l.pos.z=p,l.v*=-.25),Math.hypot(l.pos.x-m,l.pos.z-p)<Math.abs(l.v)*u*.5&&(l.v*=.6),l.spin-=l.v*u/l.R,o(l,u),Math.abs(l.v)>3&&(c+=u)>.05){c=0;let x=i.find(M=>M.life<=0);x&&(x.life=1,x.s.visible=!0,x.s.position.set(l.pos.x-g*l.WB*.5+(Math.random()-.5),l.pos.y+.2,l.pos.z-_*l.WB*.5+(Math.random()-.5)),x.s.scale.setScalar(.8))}},l.idle=u=>{if(Math.abs(l.v)>.01){l.v*=Math.max(0,1-3*u);let h=-Math.sin(l.yaw),f=-Math.cos(l.yaw);vs(l.pos,h*l.v*u,f*l.v*u,l.radius,1.2),l.spin-=l.v*u/l.R,l.st=yt(l.st,0,u*3)}else l.driven=!1;o(l,u)};return{car:e,bike:t,all:n,update(l){for(let u of i)u.life>0&&(u.life-=l*.9,u.s.position.y+=l*.5,u.s.scale.setScalar(.8+(1-u.life)*2.6),u.s.material.opacity=u.life*.55,u.life<=0&&(u.s.visible=!1))}}}var on={x0:13,x1:23,z0:-3.2,z1:9,hoop:new C(18,3.05,-2.2),board:-2.62};function Vd(s){let{scene:e}=s,t=new vi,n=ht(2896696,{metalness:.7,roughness:.45}),i=on.hoop,r=qt("concrete",{env:.45});r.color.setRGB(1.7,1.68,1.62),t.span(r,on.x0,-.3,on.z0,on.x1,.035,on.z1,{tile:3.2}),t.build(e);let o=vt(512,640,(w,O,q)=>{let U=O/10,B=q/12.2,W=se=>(se-on.x0)*U,re=se=>(se-on.z0)*B;w.strokeStyle="rgba(240,236,224,0.85)",w.lineWidth=4,w.strokeRect(3,3,O-6,q-6),w.strokeRect(W(16.2),re(on.z0),3.6*U,5.6*B),w.beginPath(),w.ellipse(W(18),re(2.4),1.8*U,1.8*B,0,0,Math.PI),w.stroke(),w.beginPath(),w.ellipse(W(18),re(i.z),4.6*U,6.6*B,0,.12,Math.PI-.12),w.stroke()}),a=new ze(new Xt(10,12.2).rotateX(-Math.PI/2),new Be({map:o,transparent:!0,roughness:.8,polygonOffset:!0,polygonOffsetFactor:-2}));a.position.set(18,.04,(on.z0+on.z1)/2),a.receiveShadow=!0,e.add(a);let c=new ze(new it(.07,.08,3.5,12),n);c.position.set(18,1.75,-3.6);let l=new ze(new Ue(.08,.08,1.05),n);l.position.set(18,3.4,-3.12),l.rotation.x=.2;let u=vt(256,160,(w,O,q)=>{w.fillStyle="#eeeae0",w.fillRect(0,0,O,q),w.strokeStyle="#d2531f",w.lineWidth=6,w.strokeRect(4,4,O-8,q-8),w.strokeRect(O/2-42,q-86,84,62);for(let U=0;U<400;U++)w.fillStyle=`rgba(90,80,60,${Math.random()*.06})`,w.fillRect(Math.random()*O,Math.random()*q,2+Math.random()*14,1+Math.random()*3)}),h=new ze(new Ue(1.8,1.1,.04),[ht(14210248),ht(14210248),ht(14210248),ht(14210248),new Be({map:u,roughness:.5}),ht(9079430)]);h.position.set(18,3.45,on.board-.02);let f=new ze(new Hi(.23,.011,8,28).rotateX(Math.PI/2),ht(13783839,{metalness:.5,roughness:.4}));f.position.copy(i);let d=new ze(new Ue(.1,.02,.2),f.material);d.position.set(18,3.05,i.z-.32);let g=vt(128,128,(w,O,q)=>{w.clearRect(0,0,O,q),w.strokeStyle="rgba(245,245,240,0.95)",w.lineWidth=3;for(let U=-8;U<16;U++)w.beginPath(),w.moveTo(U*16,0),w.lineTo(U*16+64,q),w.stroke(),w.beginPath(),w.moveTo(U*16+64,0),w.lineTo(U*16,q),w.stroke()}),_=new ze(new it(.225,.13,.42,16,4,!0),new Be({map:g,alphaTest:.4,side:Ft,roughness:.9}));_.position.set(i.x,i.y-.21,i.z);for(let w of[c,l,h,f,d,_])w.castShadow=!0,e.add(w);hn(17.85,18.15,-3.75,-3.45,0,3.5);let m=vt(256,128,(w,O,q)=>{w.fillStyle="#c65a1e",w.fillRect(0,0,O,q);for(let U=0;U<2500;U++)w.fillStyle=`rgba(60,20,0,${Math.random()*.25})`,w.fillRect(Math.random()*O,Math.random()*q,1.5,1.5);w.strokeStyle="#1a0f08",w.lineWidth=3,w.beginPath(),w.moveTo(0,q/2),w.lineTo(O,q/2),w.stroke();for(let U of[0,O/4,O/2,3*O/4,O])w.beginPath(),w.moveTo(U,0),w.lineTo(U,q),w.stroke()}),p=(w,O,q,U,B)=>{let W=new ze(new st(w,24,16),O);W.castShadow=!0,e.add(W);let re={pos:new C(q,U,B),vel:new C,mesh:W,r:w,held:!1,carried:!1,resting:!0,t:99,home:new C(q,U,B),drop(se,j,ce){re.pos.set(se,j,ce),re.vel.set(0,0,0),re.resting=!1,re.held=!1,re.t=99}};return W.position.copy(re.pos),re},v=p(.12,new Be({map:m,roughness:.75}),18.6,.16,3.4),x=p(.035,new Be({color:13166138,roughness:.95}),2.6,.04,10.4),M=0,I=0,A=0,b=0,F=new C;function S(w,O,q){if(w.held||w.carried||w.resting)return;w.t+=O;let U=w.pos.y;w.pos.addScaledVector(w.vel,O),w.pos.y-=4.9*O*O,w.vel.y-=9.8*O;let B=ii(w.pos.x,w.pos.z,Math.max(w.pos.y,U)+.1)+w.r;if(w.pos.y<B){w.pos.y=B,w.vel.y<-1.2&&At(w===v?"thump":"pop",wt(-w.vel.y/7,.1,1)*(w===v?1:.3)),w.vel.y=Math.abs(w.vel.y)>.9?-w.vel.y*q:0;let W=w===v?.82:.66;w.vel.x*=W,w.vel.z*=W,w.vel.lengthSq()<.03&&(w.vel.set(0,0,0),w.resting=!0)}if(w===v){Math.abs(w.pos.x-i.x)<.9+w.r&&w.pos.y>2.9-w.r&&w.pos.y<4+w.r&&w.pos.z<on.board+w.r&&w.pos.z>on.board-.3&&w.vel.z<0&&(w.pos.z=on.board+w.r,w.vel.z*=-.55,w.vel.x*=.8,At("thump",.5));let W=w.pos.x-i.x,re=w.pos.z-i.z,se=Math.hypot(W,re)||1e-6,j=i.x+W/se*.23,ce=i.z+re/se*.23;F.set(w.pos.x-j,w.pos.y-i.y,w.pos.z-ce);let de=F.length(),Se=.095;if(de<Se){F.divideScalar(de||1),w.pos.addScaledVector(F,Se-de);let te=w.vel.dot(F);te<0&&(w.vel.addScaledVector(F,-1.55*te),te<-1&&At("rim",wt(-te/6,.15,.8)))}U>i.y&&w.pos.y<=i.y&&w.vel.y<0&&se<.2&&!w.scored&&(w.scored=!0,M++,I++,b=1,At("swish"),s.chill(4,I>2?`${I} in a row.`:["Bucket.","Wet.","Nothing but net.","Money."][M%4]),s.score(`Buckets ${M}${I>1?` \xB7 ${I} in a row`:""}`)),w.resting&&!w.scored&&w.shot&&(I=0,s.score(`Buckets ${M}`)),w.resting&&(w.shot=!1)}E(w)?(A+=O,A>2.5&&(A=0,w.drop(w.home.x,w.home.y+.5,w.home.z),s.note(w===v?"The tide brought the ball back.":"Mia found another one."))):(w===v||w===x)&&(A=Math.max(0,A-O)),w.mesh.position.copy(w.pos)}let E=w=>w.pos.y<Dn+.05||Ei(w.pos.x,w.pos.z)<.5;return{ball:v,tennis:x,get made(){return M},near:w=>w.x>on.x0-4&&w.x<on.x1+4&&w.z>on.z0-3&&w.z<on.z1+6&&w.y<1,shoot(w,O,q){let U=v,B=i.x-w.x,W=i.z-w.z,re=Math.hypot(B,W),se=Math.atan2(-B,-W),j=((O-se+Math.PI)%(2*Math.PI)+2*Math.PI)%(2*Math.PI)-Math.PI;if(U.held=!1,U.resting=!1,U.t=0,U.scored=!1,U.shot=!0,U.pos.copy(w),re>15||Math.abs(j)>1.1){U.vel.set(-Math.sin(O)*6,5,-Math.cos(O)*6);return}j=Math.sign(j)*Math.max(0,Math.abs(j)-.07)*.5+(Math.random()-.5)*(.006+re*.003+q*.03);let ce=wt(1-re*.02,.8,1.02),de=i.y-w.y,Se=Math.sqrt(9.8*re*re/(2*Math.cos(ce)**2*Math.max(.2,re*Math.tan(ce)-de)))*(1+(Math.random()-.5)*(.004+re*.0015+q*.04)),te=se+j;U.vel.set(-Math.sin(te)*Math.cos(ce)*Se,Math.sin(ce)*Se,-Math.cos(te)*Math.cos(ce)*Se)},toss(w,O,q,U,B=8.5){w.held=!1,w.resting=!1,w.t=0,w.pos.copy(O);let W=wt(U+.35,.1,1.1);w.vel.set(-Math.sin(q)*Math.cos(W)*B,Math.sin(W)*B,-Math.cos(q)*Math.cos(W)*B)},update(w){let O=Math.max(1,Math.ceil(w/.008));for(let q=0;q<O;q++)S(v,w/O,.68),S(x,w/O,.55);b>0&&(b=Math.max(0,b-w*1.6),_.scale.set(1-.18*Math.sin(b*9)*b,1+.2*b,1-.18*Math.sin(b*9)*b),_.position.y=i.y-.21*(1+.2*b))}}}function Wd(s){let e=new Map,t=new Map,n=s.clone();return Xd(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;let r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Xd(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Xd(s.children[n],e.children[n],t)}var vv=.2,Mv=1.5,zh=5.6;function qd(s){let e=Wd(_r.dog),t=new Ye;e.scale.setScalar(vv),t.add(e),s.scene.add(t),e.traverse(E=>{if(!E.isMesh)return;E.castShadow=!0,E.frustumCulled=!1;let w=O=>{let q=O.clone();return O.name==="Main"?q.color.set(15854818):O.name==="Main_Light"&&q.color.set(16777215),q.roughness=.85,q.metalness=0,q.envMapIntensity=.6,q};E.material=Array.isArray(E.material)?E.material.map(w):w(E.material)});let n=new oo(e),i={};for(let E of _r.dog.userData.clips)i[E.name]=n.clipAction(E);let r=null,o=(E,w=.25,O=1)=>{let q=i[E];q&&(q.timeScale=O,r!==q&&(q.reset().fadeIn(w).play(),r==null||r.fadeOut(w),r=q))},a=e.getObjectByName("Head"),c=new Ye;c.position.set(0,.2,1.2),a==null||a.add(c);let l=new C(1.5,0,9.5),u=s.me,h=2.4,f="idle",d=0,g=null,_=null,m=0,p=0,v=4,x=null,M=E=>E.y>2&&E.x>X.x0&&E.x<X.x1&&E.z>X.z0&&E.z<X.z1,I=(E,w)=>{let O=Math.abs(l.x+1.1)<.25;return E.set(-1.1,3,w?O?1.3:-.2:O?-.4:1.2)};function A(E){let w=E.y-l.y;return l.x>6.4&&l.x<11.9&&Math.abs(l.z-3.15)<.75&&Math.abs(w)>.3?w>0?E.set(6,3,3.15):E.set(12.6,0,3.15):w>1.5?E.set(11.7,0,3.15):w<-1.5?M(l)?I(E,!0):E.set(6.7,3,3.15):l.y>2&&M(l)!==M(E)?I(E,M(l)):E}let b=new C;function F(E,w,O){let q=A(b.copy(E)),U=q.x-l.x,B=q.z-l.z,W=Math.hypot(U,B);if(W<.25)return q.distanceTo(E)<.3;h=Zi(h,Math.atan2(U,B),O*7);let re=l.x+l.z,se=Math.min(W,w*O);vs(l,Math.sin(h)*se,Math.cos(h)*se,.22,.6);let j=ii(l.x,l.z,l.y);return l.y+=wt(j-l.y,-6*O,5*O),m=Math.abs(l.x+l.z-re)<se*.2?m+O:0,!1}let S={pos:l,group:t,get busy(){return f==="fetch"||f==="bring"},get riding(){return!!_},fetch(E){_||(g=E,f="fetch",At("bark",.8))},pet(){p=3.5,f="pet",d=3.2,At("bark",.5)},ride(E){!E&&_&&(_.group.localToWorld(l.set(1.7,0,1.3)),l.y=ii(l.x,l.z,1),f="idle",v=3,x=null),_=E},update(E){if(n.update(E),p=Math.max(0,p-E),_){_.group.localToWorld(l.copy(_.bed)),t.position.copy(l),t.quaternion.copy(_.group.quaternion),t.rotateY(Math.PI),o(Math.abs(_.v)>2?"Idle_2":"Idle",.3);return}let w=Math.hypot(u.pos.x-l.x,u.pos.z-l.z)+Math.abs(u.pos.y-l.y)*2;if(f==="fetch")!g||g.held?f="idle":g.resting||g.t>2.5?((F(g.pos,zh,E)||Math.hypot(g.pos.x-l.x,g.pos.z-l.z)<.5)&&(g.carried=!0,c.add(g.mesh),g.mesh.position.set(0,0,0),f="bring"),o("Gallop",.15)):(h=Zi(h,Math.atan2(g.pos.x-l.x,g.pos.z-l.z),E*6),o("Idle",.2));else if(f==="bring")o("Gallop",.15),w<1.5||m>2.5?(s.scene.add(g.mesh),g.carried=!1,g.drop(l.x+Math.sin(h)*.35,l.y+.25,l.z+Math.cos(h)*.35),g=null,f="idle",v=6,m=0,s.chill(3,"Good girl.")):F(u.pos,zh,E);else if(f==="pet")h=Zi(h,Math.atan2(u.pos.x-l.x,u.pos.z-l.z),E*5),o("Idle_2",.2,1.6),d-=E,d<=0&&(f="idle",v=5);else{let O=u.mode==="ride"?14:4.2;m>2&&(x=u.pos.clone(),m=0),x&&x.distanceTo(u.pos)>4&&(x=null),w>O&&!x?(F(u.pos,w>8?zh:Mv,E),o(w>8?"Gallop":"Walk",.2,w>8?1:1.25),v=2+Math.random()*5):(h=Zi(h,Math.atan2(u.pos.x-l.x,u.pos.z-l.z),E*(w<3?1.5:0)),v-=E,o(v<0?"Idle_2_HeadLow":"Idle",.5),v<-9&&(v=5+Math.random()*6))}t.position.copy(l),t.rotation.set(0,h,0)}};return t.position.copy(l),t.rotation.y=h,o("Idle",0),S}function Yd(){let s=new Be({color:12089941,roughness:.58,envMapIntensity:.55}),e=new Be({color:15328472,roughness:.85,envMapIntensity:.5}),t=vt(128,128,(x,M,I)=>{x.fillStyle="#1f6f78",x.fillRect(0,0,M,I);for(let A=0;A<26;A++){x.fillStyle=["#f2b84b","#e96d4e","#f4efe0"][A%3];let b=A*53%M,F=A*91%I;for(let S=0;S<5;S++)x.beginPath(),x.ellipse(b+7*Math.cos(S*1.257),F+7*Math.sin(S*1.257),5,2.6,S*1.257,0,7),x.fill()}});t.wrapS=t.wrapT=En,t.repeat.set(2,1);let n=new Be({map:t,roughness:.8,envMapIntensity:.5}),i=new Be({color:2891026,roughness:.9}),r=new Be({color:11680298,roughness:.8}),o=new Be({color:789516,roughness:.25,metalness:.3}),a=new Be({color:1581610,roughness:.9}),c=(x,M,I=0,A=0,b=0)=>{let F=new ze(x,M);return F.position.set(I,A,b),F.castShadow=!0,F},l=(x,M)=>new Pa(x,M,5,12),u=new Ye,h=new Ye;h.position.y=.95,u.add(h),h.add(c(new st(.17,16,12).scale(1.1,.8,.84),n,0,0,0));let f=new Ye;h.add(f),f.add(c(l(.15,.2).scale(1.1,1,.86),e,0,.2,.008),c(l(.16,.13).scale(1.16,1,.8),e,0,.4,0),c(new st(.06,10,8).scale(1.5,.7,1),s,0,.555,0));let d=c(new it(.052,.06,.1,10),s,0,.6,0);f.add(d);let g=new Ye;g.position.set(0,.73,-.005),f.add(g),g.add(c(new st(.105,18,14).scale(.9,1.1,1),s),c(new st(.1,14,10,0,6.3,1.5,1.2).scale(.93,1.05,1).translate(0,-.012,-.012),i),c(new st(.11,16,10,0,6.3,0,1.25).scale(.93,1.02,1.02).translate(0,.012,0),r),c(new Ue(.15,.012,.1).translate(0,.045,.14),r),c(new Ue(.17,.035,.02).translate(0,.022,-.097),o),c(new st(.018,8,6).translate(0,-.01,-.106),s),c(new st(.02,8,6).scale(.5,1,1).translate(.098,.01,0),s),c(new st(.02,8,6).scale(.5,1,1).translate(-.098,.01,0),s));let _=(x,M,I,A,b,F,S=A*.72)=>{let E=new Ye;E.position.set(M,I,0),x.add(E),E.add(c(new it(A,S,b,14),F,0,-b/2,0),c(new st(A,12,9),F),c(new st(S,10,8),F,0,-b,0));let w=new Ye;return w.position.y=-b,E.add(w),[E,w]},m={};for(let[x,M]of[["L",-1],["R",1]]){let[I,A]=_(h,M*.092,-.03,.086,.44,s,.058);I.add(c(new it(.1,.092,.33,14),n,0,-.15,0));let[b,F]=_(A,0,0,.056,.43,s,.036);b.add(c(new st(.058,10,8).scale(.95,1.9,1.05),s,0,-.15,.012)),F.add(c(new st(.05,10,8).scale(.95,.55,2.3).translate(0,-.035,-.06),s),c(new Ue(.1,.016,.26).translate(0,-.066,-.06),a));let[S,E]=_(f,M*.215,.5,.052,.29,s,.04),[w,O]=_(E,0,0,.041,.26,s,.028);O.add(c(new st(.04,10,8).scale(.6,1.3,1),s,0,-.045,0));let q=new Ye;q.position.set(0,-.06,-.02),O.add(q),m[x]={thigh:I,shin:A,upper:S,fore:E,hand:q}}let p=0,v={thL:0,thR:0,shL:0,shR:0,upL:0,upR:0,foL:.15,foR:.15,lean:0,hip:.95,spL:0,spR:0,head:0};return{group:u,handR:m.R.hand,handL:m.L.hand,head:g,update(x,M={}){let I=M.speed||0,A=Math.min(1,I/2.2),b={...v,lean:0,hip:.95,spL:.06,spR:.06,head:0};p+=x*(2.4+I*1.5)*(I>.1?1:0);let F=Math.sin(p),S=Math.cos(p),E=I>3.4?1.35:1;M.pose==="sit"||M.pose==="drive"?(b.thL=b.thR=1.5,b.shL=b.shR=-1.45,b.lean=-.16,b.hip=.5,b.upL=b.upR=M.pose==="drive"?1:.35,b.foL=b.foR=M.pose==="drive"?.45:.9,M.pose==="drive"&&(b.upL=1.15)):M.pose==="ride"?(b.thL=b.thR=1.25,b.shL=b.shR=-1.6,b.lean=.32,b.hip=.86,b.upL=b.upR=1.05,b.foL=b.foR=.25,b.spL=b.spR=.3,b.head=-.25):M.pose==="lie"?(b.thL=.35,b.thR=.2,b.shL=-.5,b.shR=-.15,b.lean=-.25,b.hip=.3,b.upL=b.upR=2.7,b.foL=b.foR=2.2,b.spL=b.spR=.6):(b.thL=F*.55*A*E,b.thR=-F*.55*A*E,b.shL=-(.5-.5*S)*.95*A*E-.03,b.shR=-(.5+.5*S)*.95*A*E-.03,b.upL=-F*.45*A*E,b.upR=F*.45*A*E,b.foL=b.foR=.15+.35*A*E,b.lean=.06*A*E,b.hip=.95+Math.abs(S)*.035*A-.01),M.carry&&(b.upL=b.upR=.75,b.foL=b.foR=1.25,b.spL=b.spR=-.28),M.raiseR&&(b.upR=yt(b.upR,.95,M.raiseR),b.foR=yt(b.foR,2.15,M.raiseR),b.spR=yt(b.spR,-.1,M.raiseR)),M.raiseL?(b.upL=yt(b.upL,.95,M.raiseL),b.foL=yt(b.foL,2.15,M.raiseL),b.spL=yt(b.spL,-.1,M.raiseL)):M.holdR&&!M.raiseR&&M.pose!=="drive"&&M.pose!=="ride"&&!M.carry&&(b.upR=yt(b.upR,.25,.7),b.foR=.95);let w=1-Math.exp(-x*(I>.1&&!M.pose?30:9));for(let O of Object.keys(v))v[O]=yt(v[O],b[O],w);m.L.thigh.rotation.x=v.thL,m.R.thigh.rotation.x=v.thR,m.L.shin.rotation.x=v.shL,m.R.shin.rotation.x=v.shR,m.L.upper.rotation.x=v.upL,m.R.upper.rotation.x=v.upR,m.L.fore.rotation.x=v.foL,m.R.fore.rotation.x=v.foR,m.L.upper.rotation.z=-v.spL,m.R.upper.rotation.z=v.spR,f.rotation.x=-v.lean+Math.sin(performance.now()/1700)*.012,h.position.y=v.hip,g.rotation.x=v.head,M.pose==="lie"?h.rotation.x=yt(h.rotation.x,1.05,w):h.rotation.x=yt(h.rotation.x,0,w)}}}var al=matchMedia("(pointer: coarse)").matches,ol=new Set,Es={act:!1,use0:!1,use1:!1,hop:!1,view:!1,sky:!1,menu:!1},Ji={x:0,y:0},ri={x:0,y:0},Zd={},Hh=50,Kd=.15,$d=1.9,Jd=.0023,rl=.0052,jd=2.6,Sv={KeyE:"act",Enter:"act",KeyF:"use0",KeyG:"use1",Space:"hop",KeyV:"view",KeyT:"sky",KeyM:"menu"},vo=null,Sr=null,Mo=null,kh=0,Gh=0,Vh=!1,Wh=!1,Ti=(...s)=>s.some(e=>ol.has(e))?1:0,Qd=s=>Math.max(-1,Math.min(1,s));function ep(){addEventListener("keydown",o=>{if(o.repeat||o.metaKey||o.ctrlKey)return;Ss(),ol.add(o.code);let a=Sv[o.code];a&&(Es[a]=!0),(a||o.code.startsWith("Arrow")||o.code==="Space")&&o.preventDefault()}),addEventListener("keyup",o=>ol.delete(o.code)),addEventListener("blur",()=>ol.clear());let s=document.getElementById("look"),e=document.getElementById("stick");Sr=document.getElementById("ring");let t=document.getElementById("nub");s.addEventListener("pointerdown",o=>{var a;if(Ss(),o.pointerType==="mouse"){Vh?Es.use0=!0:(Wh=!0,(a=s.requestPointerLock)==null||a.call(s));return}Mo===null&&(Mo=o.pointerId,kh=o.clientX,Gh=o.clientY,s.setPointerCapture(o.pointerId))}),s.addEventListener("pointermove",o=>{if(o.pointerType==="mouse"){Vh?(ri.x+=o.movementX*Jd,ri.y+=o.movementY*Jd):Wh&&(ri.x+=o.movementX*rl,ri.y+=o.movementY*rl);return}o.pointerId===Mo&&(ri.x+=(o.clientX-kh)*rl,ri.y+=(o.clientY-Gh)*rl,kh=o.clientX,Gh=o.clientY)});let n=o=>{o.pointerType==="mouse"?Wh=!1:o.pointerId===Mo&&(Mo=null)};s.addEventListener("pointerup",n),s.addEventListener("pointercancel",n),document.addEventListener("pointerlockchange",()=>{Vh=document.pointerLockElement===s});let i=o=>{let a=Sr.getBoundingClientRect(),c=o.clientX-(a.left+a.width/2),l=o.clientY-(a.top+a.height/2),u=Math.hypot(c,l),h=Math.min(u,Hh),f=u?c/u:0,d=u?l/u:0;Ji.x=h/Hh*f,Ji.y=h/Hh*d,t.style.transform=`translate(calc(-50% + ${f*h}px), calc(-50% + ${d*h}px))`};e.addEventListener("pointerdown",o=>{Ss(),vo===null&&(vo=o.pointerId,e.setPointerCapture(o.pointerId),Sr.style.display="block",Sr.style.left=`${o.clientX}px`,Sr.style.top=`${o.clientY}px`,i(o))}),e.addEventListener("pointermove",o=>{o.pointerId===vo&&i(o)});let r=o=>{o.pointerId===vo&&(vo=null,Ji.x=Ji.y=0,Sr.style.display="none",t.style.transform="translate(-50%, -50%)")};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r);for(let[o,a]of[["act","act"],["use0","use0"],["use1","use1"],["jump","hop"],["cam","view"],["sky","sky"],["gear","menu"]]){let c=document.getElementById(o);c.addEventListener("pointerdown",l=>{l.preventDefault(),l.stopPropagation(),Ss(),Es[a]=!0,c.classList.add("on"),setTimeout(()=>c.classList.remove("on"),160)})}}function Ev(){var i;let s=[...((i=navigator.getGamepads)==null?void 0:i.call(navigator))||[]].find(r=>r&&r.connected&&r.mapping==="standard");if(!s)return null;let e=r=>{var o;return!!((o=s.buttons[r])!=null&&o.pressed)},t=r=>Math.abs(r)<.18?0:r,n={x:t(s.axes[0]||0)+e(15)-e(14),y:t(s.axes[1]||0)+e(13)-e(12),lx:t(s.axes[2]||0),ly:t(s.axes[3]||0),run:e(5)||e(7)};for(let[r,o]of[["act",0],["use0",2],["use1",1],["view",3],["hop",4],["menu",9]]){let a=e(o);a&&!Zd[r]&&(Es[r]=!0),Zd[r]=a}return n}function tp(s){let e=Ev()||{},t=Math.abs(Ji.x)<Kd?0:Ji.x,n=Math.abs(Ji.y)<Kd?0:Ji.y,i={mx:Qd(Ti("KeyD")-Ti("KeyA")+t+(e.x||0)),mz:Qd(Ti("KeyW")-Ti("KeyS")-n-(e.y||0)),run:!!Ti("ShiftLeft","ShiftRight")||!!e.run||Math.hypot(t,n)>.92,yaw:-ri.x-(Ti("ArrowRight")-Ti("ArrowLeft"))*$d*s-(e.lx||0)*jd*s,pitch:-ri.y+(Ti("ArrowUp")-Ti("ArrowDown"))*$d*.7*s-(e.ly||0)*jd*.7*s,...Es};ri.x=ri.y=0;for(let r of Object.keys(Es))Es[r]=!1;return i}var Ht=s=>document.getElementById(s),bv=1.64,Tv=2.5,np=4.6;async function ip(){let s=new URLSearchParams(location.search),e=Ht("view"),t=(P,$)=>{try{return localStorage.getItem(P)??$}catch{return $}},n=(P,$)=>{try{localStorage.setItem(P,$)}catch{}},i=s.has("hi")?s.get("hi")!=="0":t("chill2.gfx",al?"low":"high")==="high",r=new qr({canvas:e,antialias:!i,powerPreference:"high-performance"}),o=Math.min(devicePixelRatio,i?2:1.5),a=0,c=0;r.setPixelRatio(o),r.shadowMap.enabled=!0,r.shadowMap.type=Gc,r.toneMapping=ao,r.info.autoReset=!1;let l=new cr,u=new Gt(58,1,.08,9e3);u.rotation.order="YXZ",l.add(u),await bd(r,P=>{Ht("bar").style.width=`${P*92}%`});let h={pos:new C(-12.5,0,14.5),vy:0,yaw:-.7,camYaw:-.7,camPitch:.06,mode:"walk",seat:null,ride:null,third:!s.has("first")&&t("chill2.view","third")==="third",speed:0,R:null,L:null,sat:0,stride:0,shot:0};if(s.has("at")){let P=s.get("at").split(",").map(Number);h.pos.set(P[0],P[1],P[2]),h.yaw=h.camYaw=(P[3]||0)*Math.PI/180,h.camPitch=(P[4]||0)*Math.PI/180}let f=[],d={},g={buzz:0,high:0},_=0,m=!1,p=!1,v=0,x=0,M=0,I=(P,$,be=0)=>P.set(-Math.sin($)*Math.cos(be),Math.sin(be),-Math.cos($)*Math.cos(be)),A={scene:l,renderer:r,camera:u,hi:i,me:h,spots:f,spot:P=>(f.push(P),P),note(P,$=4){let be=Ht("note");be.textContent=P,be.classList.add("on"),v=$},score(P){let $=Ht("score");$.textContent=P,$.classList.add("on"),x=6},chill(P,$){_=Math.min(100,_+P),Ht("chillbar").style.width=`${_}%`,$&&A.note($),_>=100&&!m&&(m=!0,At("chill"),setTimeout(()=>A.note("Maximum chill. Nothing left to do. Do it anyway.",7),1500))},count(P,$=0){return d[P]=(d[P]||0)+$,d[P]},feel(P,$){g[P]=Math.min(1,g[P]+$)},holding:P=>h[P],hold(P){h[P.hand]&&A.drop(P.hand),h[P.hand]=P,P.busyT=0,ce(P)},drop(P){var be;let $=h[P];$&&(h[P]=null,$.mesh.removeFromParent(),(be=$.onDrop)==null||be.call($))},busy(P,$,be){P.busyT>0||(P.busyT=P.dur,P.mid=$,P.end=be)},exhale(){let P=de(new C),$=I(new C,h.third?h.yaw:h.camYaw,h.third?0:h.camPitch);for(let be=0;be<9;be++)z(P,$,be*.07)},sit(P){h.mode="sit",h.seat=P,h.sat=0,h.yaw=h.camYaw=P.yaw,h.camPitch=P.pitch??-.05,A.chill(1),A.count("sat",1)===1&&setTimeout(()=>A.note(al?"Push the stick to get up.":"W gets you up. No rush."),4200)},nap(){D("zzz",()=>{U(b.now==="dusk"?"day":"dusk"),g.buzz*=.3,g.high*=.3,A.chill(6),A.note(b.now==="day"?"Slept right through to lunchtime.":"Woke up at golden hour. Perfect timing.",6)})}},b=Ad(A);A.sky=b,A.land=Cd(A);let F=Pd(A),S=Vd(A),E=Gd(A),w=Hd(A),O=Yd(),q=qd(A);A.dog=q,l.add(O.group);let U=P=>{b.set(P),F.setLamps(b.lamps),Ud(b.lamps),Ht("sky").textContent=P==="dusk"?"\u2600":"\u263E"};U(s.get("sky")||"dusk");let B=null,W=null;i&&(B=new Za(r,new Jt(4,4,{type:vn,samples:4})),B.addPass(new Ka(l,u)),W=new gr(new me(4,4),.2,.7,1.5),B.addPass(W),B.addPass(new $a));let re=()=>{let P=innerWidth,$=innerHeight;r.setSize(P,$,!1),B==null||B.setSize(P,$),u.aspect=P/$,u.updateProjectionMatrix()};addEventListener("resize",re),re();let se=new Ye;u.add(se);let j=new Ye;j.position.set(0,1.12,-.36),O.group.add(j);function ce(P){let $=P.mesh;if(P.kind==="ball"){(h.third?j:se).add($),$.position.set(0,h.third?0:-.36,h.third?0:-.62);return}h.third?((P.hand==="R"?O.handR:O.handL).add($),$.position.set(...P.tp.at),$.rotation.set(...P.tp.rot)):(se.add($),$.position.set(...P.fp.at),$.rotation.set(0,0,0))}let de=P=>h.third?O.head.getWorldPosition(P).add(I(new C,h.yaw).multiplyScalar(.14)):u.getWorldPosition(P).add(I(new C,h.camYaw,h.camPitch).multiplyScalar(.3)).add(new C(0,-.07,0)),Se=vt(64,64,P=>{let $=P.createRadialGradient(32,32,1,32,32,31);$.addColorStop(0,"rgba(235,235,230,0.55)"),$.addColorStop(1,"rgba(235,235,230,0)"),P.fillStyle=$,P.fillRect(0,0,64,64)}),te=Array.from({length:30},()=>{let P=new Bi(new xi({map:Se,transparent:!0,depthWrite:!1}));return P.visible=!1,l.add(P),{s:P,life:0,wait:0,v:new C}});function z(P,$,be){let Re=te.find(Pe=>Pe.life<=0&&Pe.wait<=0);Re&&(Re.wait=be+.001,Re.s.position.copy(P),Re.v.copy($).multiplyScalar(.9+Math.random()*.5).add(new C((Math.random()-.5)*.25,.1+Math.random()*.2,(Math.random()-.5)*.25)))}let oe=new C,le=new C,ne=(P,$,be)=>({kind:"ball",hand:"R",mesh:P.mesh,dur:.01,label:$,use:be,onDrop(){l.add(P.mesh),P.held&&P.drop(h.pos.x-Math.sin(h.yaw)*.5,h.pos.y+.9,h.pos.z-Math.cos(h.yaw)*.5)}}),ve=P=>P.copy(h.pos).add(I(new C,h.camYaw).multiplyScalar(.45)).setY(h.pos.y+(h.mode==="sit"?1.3:1.95)),Ee=(P,$,be,Re)=>()=>{if(h.R)return A.note("Hands are full.");P.held=!0,P.resting=!1,P.vel.set(0,0,0),A.hold(ne(P,$,be)),Re&&A.note(Re)},H=P=>{P.held=!1,h.R=null,l.add(P.mesh),h.yaw=h.camYaw,h.shot=.35};A.spot({at:()=>S.ball.pos,r:1.3,low:!0,label:"Pick up the ball",when:()=>!S.ball.held&&S.ball.vel.lengthSq()<9,go:Ee(S.ball,()=>Math.hypot(h.pos.x-18,h.pos.z+2.2)<15&&h.pos.y<1?"Shoot":"Toss it",()=>{H(S.ball),S.shoot(ve(new C),h.camYaw,h.speed/np)})}),A.spot({at:()=>S.tennis.pos,r:1.2,low:!0,label:"Pick up the tennis ball",when:()=>!S.tennis.held&&!S.tennis.carried&&S.tennis.vel.lengthSq()<4,go:Ee(S.tennis,()=>"Throw it for Mia",()=>{H(S.tennis),S.toss(S.tennis,ve(new C),h.camYaw,h.camPitch),q.fetch(S.tennis),A.chill(1)},"Mia's seen it. She's ready.")}),A.spot({at:()=>q.pos,r:1.5,low:!0,label:"Scratch Mia's ears",when:()=>!q.busy&&!q.riding,go(){q.pet(),A.chill(3,["Who's a good girl.","She leans into it.","Best dog on the island. Only dog on the island."][A.count("pets",1)%3])}});for(let P of E.all)A.spot({at:()=>P.group.localToWorld(le.copy(P.door)),r:P.kind==="car"?1.7:1.4,low:!0,label:P.kind==="car"?"Drive the El Camino":"Ride the bike",go(){var $;(($=h.R)==null?void 0:$.kind)==="ball"&&A.drop("R");for(let be of["R","L"])h[be]&&(h[be].mesh.visible=!1);(h.R||h.L)&&A.note(P.kind==="car"?"Drink goes in the cup holder.":"That can wait in your pocket."),h.mode="ride",h.ride=P,h.camYaw=P.yaw,h.camPitch=-.12,P.group.add(O.group),O.group.position.copy(P.seat),O.group.rotation.set(0,0,0),Bh(P.kind),At("door"),P.kind==="car"&&Math.hypot(q.pos.x-P.pos.x,q.pos.z-P.pos.z)<30&&Math.abs(q.pos.y-P.pos.y)<1.5&&(q.ride(P),setTimeout(()=>A.note("Mia's in the back."),900)),A.chill(2),A.count("rides",1)===1&&setTimeout(()=>A.note(al?"Stick up is the gas. Left and right steer.":"W is the gas, S the brake, A and D steer. E gets out.",6),2600)}});function J(){let P=h.ride;P.group.localToWorld(oe.copy(P.door)),h.pos.set(oe.x,ii(oe.x,oe.z,P.pos.y+1),oe.z),h.yaw=h.camYaw=P.yaw,h.mode="walk",h.ride=null,h.vy=0,l.add(O.group),O.group.rotation.set(0,h.yaw,0),Bh(null),At("door"),q.riding&&q.ride(null);for(let $ of["R","L"])h[$]&&(h[$].mesh.visible=!0,ce(h[$]))}function D(P,$){let be=Ht("fade");be.textContent=P,be.classList.add("on"),setTimeout(()=>{$(),setTimeout(()=>be.classList.remove("on"),500)},900)}function ee(P){h.third=P,n("chill2.view",P?"third":"first"),document.body.classList.toggle("first",!P),Ht("cam").textContent=P?"\u{1F441}":"\u{1F9CD}";for(let $ of["R","L"])h[$]&&ce(h[$])}let Q=()=>{p||(p=!0,Ss(),document.body.classList.add("play"),ee(h.third))};Ht("go").addEventListener("click",Q),ep();let ue=[["Graphics",()=>i?"High":"Low (phones)",()=>{n("chill2.gfx",i?"low":"high");let P=new URL(location.href);P.searchParams.delete("hi"),location.href=P}],["View",()=>h.third?"Over the shoulder":"Your own eyes",()=>ee(!h.third)],["Sky",()=>b.now==="dusk"?"Golden hour":"Daytime",()=>U(b.now==="dusk"?"day":"dusk")]],ie=()=>{Ht("rows").replaceChildren(...ue.map(([P,$,be])=>{let Re=document.createElement("button");return Re.innerHTML=`<span>${P}</span><b>${$()}</b>`,Re.addEventListener("click",()=>{be(),ie()}),Re}))},we=P=>{var $;Ht("menu").hidden=!P,P&&(ie(),($=document.exitPointerLock)==null||$.call(document))};Ht("shut").addEventListener("click",()=>we(!1));let ge="";function R(P,$){let be=`${(P==null?void 0:P.label)||""}|${$.map(ke=>ke.label).join("|")}`;if(be===ge)return;ge=be;let Re=[];P&&Re.push(`<kbd>E</kbd>${P.label}`),$.forEach((ke,et)=>Re.push(`<kbd>${"FG"[et]}</kbd>${ke.label}`));let Pe=Ht("prompt");Pe.innerHTML=Re.join("&emsp;"),Pe.classList.toggle("on",Re.length>0);let Le=Ht("act");Le.hidden=!P,P&&(Le.textContent=P.label);for(let ke=0;ke<2;ke++){let et=Ht(`use${ke}`);et.hidden=!$[ke],$[ke]&&(et.textContent=$[ke].label)}}let T=new C,Y=new C,he=new C,pe=3.3,Z=0,xe=0,_e="",Me=s.has("cam")?s.get("cam").split(",").map(Number):null;function De(P){var G;M+=P;let $=tp(P);(!p||!Ht("menu").hidden)&&($.mx=$.mz=$.yaw=$.pitch=0,$.act=$.use0=$.use1=$.hop=!1),$.menu&&p&&we(Ht("menu").hidden),$.view&&p&&ee(!h.third),$.sky&&p&&U(b.now==="dusk"?"day":"dusk");let be=Math.hypot($.mx,$.mz)>.15;$.yaw||$.pitch?Z=0:Z+=P,h.camYaw+=$.yaw,h.camPitch=wt(h.camPitch+$.pitch,-1.2,1.25);let Re=null,Pe=[];if(h.mode==="walk"){let ae=($.run?np:Tv)*(1-.25*g.high),fe=I(oe,h.camYaw),Oe=(fe.x*$.mz-fe.z*$.mx)*ae,Ie=(fe.z*$.mz+fe.x*$.mx)*ae,je=h.pos.x,lt=h.pos.z;vs(h.pos,Oe*P,Ie*P,.28);for(let at of E.all)for(let Jn of at.kind==="car"?[-1.35,0,1.35]:[0]){let wn=at.pos.x-Math.sin(at.yaw)*Jn,An=at.pos.z-Math.cos(at.yaw)*Jn,Ut=Math.hypot(h.pos.x-wn,h.pos.z-An),un=(at.kind==="car"?1:.45)+.28;Ut<un&&Ut>1e-4&&Math.abs(h.pos.y-at.pos.y)<1.2&&(h.pos.x=wn+(h.pos.x-wn)/Ut*un,h.pos.z=An+(h.pos.z-An)/Ut*un)}let Ke=ii(h.pos.x,h.pos.z,h.pos.y);Ke<Dn-.55&&(h.pos.x=je,h.pos.z=lt,Ke=ii(je,lt,h.pos.y)),h.speed=Math.hypot(h.pos.x-je,h.pos.z-lt)/Math.max(P,1e-4);let ft=h.pos.y<=Ke+.1&&h.vy<=0;$.hop&&ft&&(h.vy=3.7),ft&&h.vy<=0?(h.pos.y=Ke,h.vy=0):(h.vy-=11*P,h.pos.y+=h.vy*P,h.pos.y<=Ke&&(h.pos.y=Ke,h.vy=0)),h.speed>.3&&(h.stride+=h.speed*P,h.stride>.78&&(h.stride=0,At(h.pos.y>.3?"wood":"step",$.run?1:.7))),be&&h.third?h.yaw=Zi(h.yaw,Math.atan2(-Oe,-Ie),P*9):h.third||(h.yaw=h.camYaw),h.shot=Math.max(0,h.shot-P);let $e=null,Et=1e9,gn=I(oe,h.camYaw);for(let at of f){if(at.when&&!at.when())continue;let Jn=typeof at.at=="function"?at.at():at.at,wn=Jn.x-h.pos.x,An=Jn.z-h.pos.z,Ut=Math.hypot(wn,An);if(Ut>at.r||Math.abs(Jn.y-h.pos.y)>(at.low?1.2:1.7))continue;let un=Ut<.75?1:(wn*gn.x+An*gn.z)/Ut;if(un<(h.third?-.3:.2))continue;let wi=Ut-un*.6;wi<Et&&(Et=wi,$e=at)}$e&&(Re={label:typeof $e.label=="function"?$e.label():$e.label,go:$e.go})}else if(h.mode==="sit"){let ae=h.seat;h.sat+=P,h.speed=0;let fe=h.sat>.7&&(be||$.hop);ae.act?Re={label:ae.act.label(),go:ae.act.go}:Re={label:"Get up",go:()=>{fe=!0}},$.act&&!ae.act&&(fe=!0),fe?(h.mode="walk",h.seat=null,h.pos.copy(ae.up),h.pos.y=ii(ae.up.x,ae.up.z,ae.up.y+.5),h.vy=0,Re=null,$.act=!1):(h.pos.copy(ae.pos),Math.floor(h.sat/6)!==Math.floor((h.sat-P)/6)&&A.chill(1))}else{let ae=h.ride;ae.drive(P,$.mx,$.mz),h.pos.copy(ae.pos),h.speed=0,zd(wt(Math.abs(ae.v)/ae.top*.8+Math.abs($.mz)*.25,0,1)),Z>1.2&&(h.camYaw=Zi(h.camYaw,ae.yaw,P*(.6+Math.abs(ae.v)*.25))),Math.abs(ae.v)<2.5&&(Re={label:"Get out",go:J}),Pe.push({label:"Honk",use:()=>{At("horn"),A.count("honks",1)===3&&A.note("Nobody out here to hear it.")}}),Math.floor((M-P)/20)!==Math.floor(M/20)&&Math.abs(ae.v)>4&&A.chill(1)}for(let ae of E.all)ae!==h.ride&&ae.idle(P);if(h.mode!=="ride")for(let ae of["R","L"]){let fe=h[ae];fe&&Pe.push({label:fe.label(),use:fe.use})}$.act&&Re&&Re.go(),$.use0&&Pe[0]&&Pe[0].use(),$.use1&&Pe[1]&&Pe[1].use();let Le=0,ke=0;for(let ae of["R","L"]){let fe=h[ae];if(!fe||fe.kind==="ball")continue;let Oe=0;if(fe.busyT>0){fe.busyT-=P;let Ie=1-Math.max(0,fe.busyT)/fe.dur;if(Oe=rn(0,.22,Ie)*rn(1,.78,Ie),Ie>=.5&&fe.mid){let je=fe.mid;fe.mid=null,je()}if(fe.busyT<=0){let je=fe.end;fe.end=null,je==null||je()}}if(h[ae]===fe&&(ae==="R"?Le=Oe:ke=Oe,!h.third)){let Ie=Math.sin(M*1.7+(ae==="R"?0:2))*.004+Math.sin(h.stride*8)*.006*Math.min(1,h.speed);fe.mesh.position.set(yt(fe.fp.at[0],fe.fp.up[0],Oe),yt(fe.fp.at[1],fe.fp.up[1],Oe)+Ie,yt(fe.fp.at[2],fe.fp.up[2],Oe)),fe.mesh.rotation.x=fe.fp.tilt*Oe}}R(p?Re:null,p?Pe:[]),O.group.visible=h.third||!p,h.mode==="walk"?(O.group.position.copy(h.pos),O.group.rotation.set(0,h.yaw,0)):h.mode==="sit"&&(O.group.position.copy(h.seat.pos),O.group.rotation.set(0,h.seat.yaw,0)),O.update(P,{speed:h.mode==="walk"?h.speed:0,pose:h.mode==="sit"?h.seat.pose||"sit":h.mode==="ride"?h.ride.kind==="car"?"drive":"ride":null,raiseR:Math.max(Le,h.shot>0?1:0),raiseL:ke,carry:((G=h.R)==null?void 0:G.kind)==="ball",holdR:!!h.R}),q.update(P),S.update(P),E.update(P),w.update(P),A.land.update(P);for(let ae of te){if(ae.wait>0){ae.wait-=P,ae.wait<=0&&(ae.life=1,ae.s.visible=!0,ae.s.scale.setScalar(.06));continue}ae.life<=0||(ae.life-=P*.42,ae.s.position.addScaledVector(ae.v,P),ae.v.multiplyScalar(1-1.4*P),ae.v.y+=.12*P,ae.s.scale.setScalar(.06+(1-ae.life)*.75),ae.s.material.opacity=ae.life*.5,ae.life<=0&&(ae.s.visible=!1))}g.buzz=Math.max(0,g.buzz-P*.004),g.high=Math.max(0,g.high-P*.0035),v>0&&(v-=P)<=0&&Ht("note").classList.remove("on"),x>0&&(x-=P)<=0&&!S.near(h.pos)&&Ht("score").classList.remove("on");let et=g.buzz*.014*Math.sin(M*.9)+g.high*.01*Math.sin(M*.43),mt=h.mode==="sit"&&h.seat.sway?Math.sin(M*1.15):0;if(Me)u.position.set(Me[0],Me[1],Me[2]),u.rotation.set((Me[4]||0)*Math.PI/180,(Me[3]||0)*Math.PI/180,0);else if(p){let ae=h.camYaw,fe=h.camPitch,Oe;if(h.mode==="ride"?Oe=h.ride.group.localToWorld(oe.copy(h.ride.eye)):h.mode==="sit"?(Oe=oe.copy(h.seat.eye||h.seat.pos),h.seat.eye||(Oe.y+=1.2)):Oe=oe.copy(h.pos).setY(h.pos.y+bv+Math.sin(h.stride*8)*.012*Math.min(1,h.speed)),mt&&Oe.add(le.set(Math.cos(h.seat.yaw),0,-Math.sin(h.seat.yaw)).multiplyScalar(mt*.07)),!h.third)u.position.copy(Oe),u.rotation.set(fe,ae,et+mt*.035);else{let Ie=h.mode==="ride"?h.ride.cam[0]:h.mode==="sit"?2.7:3.3;Y.copy(Oe),h.mode==="ride"?Y.y=h.ride.pos.y+h.ride.cam[1]*.62:h.mode==="walk"&&(Y.y-=.12),I(he,ae,fe).negate();let je=h.mode==="walk"?.42:0;Y.x+=Math.cos(ae)*je,Y.z-=Math.sin(ae)*je;let lt=Td(Y,he,Ie+.3)-.3;pe=lt<pe?Math.max(.35,lt):yt(pe,Math.min(Ie,lt),Math.min(1,P*4)),T.copy(Y).addScaledVector(he,pe),T.y=Math.max(T.y,Rt(T.x,T.z)+.25,Dn+.3),u.position.copy(T),u.rotation.set(fe,ae,et*.6+mt*.02)}}else{xe+=P;let ae=-.72+Math.sin(xe*.07)*.2,fe=21+Math.sin(xe*.05)*1.5;u.position.set(-1+Math.sin(ae)*fe,1.9+Math.sin(xe*.06)*.3,.5+Math.cos(ae)*fe),u.lookAt(-.5,3.6,-1)}let qe=58+g.high*(3+2.5*Math.sin(M*.5))+(h.mode==="ride"?wt(Math.abs(h.ride.v)*.5,0,9):0);Math.abs(qe-u.fov)>.05&&(u.fov=yt(u.fov,qe,Math.min(1,P*3)),u.updateProjectionMatrix());let Te=g.high>.03||g.buzz>.03?`saturate(${(1+.45*g.high+.1*g.buzz).toFixed(2)}) contrast(${(1+.05*g.high).toFixed(2)})`:"";if(Te!==_e&&(e.style.filter=_e=Te),W&&(W.strength=.2+g.high*.45),b.update(P,u,h.pos),r.info.reset(),p&&(a++,(c+=P)>2.5)){let ae=a/c;a=c=0,ae<31&&o>1&&(o=Math.max(1,o-.25),r.setPixelRatio(o),re())}B?B.render(P):r.render(l,u)}De(.016),Ht("bar").style.width="100%";let He=performance.now();r.setAnimationLoop(P=>{let $=Math.min(.05,(P-He)/1e3);He=P,De($)}),Ht("loading").remove(),s.has("auto")&&(Ht("title").style.display="none",Q()),s.has("do")&&setTimeout(()=>{var P,$;for(let be of s.get("do").split(";")){let Re=be.toLowerCase(),Pe=f.find(Le=>(typeof Le.label=="function"?Le.label():Le.label).toLowerCase().includes(Re));Re==="use"?(P=h.R||h.L)==null||P.use():Re==="use1"?($=h.L)==null||$.use():Pe?Pe.go():console.log("no button says",be)}},1500),window.chill2={G:A,me:h,hoops:S,dog:q,rides:E,sky:b,solids:fo,press:P=>{let $=f.find(be=>(!be.when||be.when())&&(typeof be.label=="function"?be.label():be.label).toLowerCase().includes(P.toLowerCase()));return $==null||$.go(),!!$},info:()=>({calls:r.info.render.calls,tris:r.info.render.triangles,at:h.pos.toArray().map(P=>+P.toFixed(2)),mode:h.mode,chill:_})}}Yh();ip().catch(s=>{let e=document.getElementById("loading");throw e&&(e.textContent=`It wouldn't start: ${s.message}`),s});})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
