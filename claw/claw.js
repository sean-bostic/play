(()=>{var qo="160";var Tu=0,Lc=1,Pu=2;var lh=0,hh=1,Yo=2,Cn=3,en=0,Se=1,Re=2;var Wn=0,Bi=1,Dc=2,Ic=3,Nc=4,Ru=5,si=100,Cu=101,Lu=102,Oc=103,Uc=104,Du=200,Iu=201,Nu=202,Ou=203,to=204,eo=205,Uu=206,Hu=207,Bu=208,zu=209,Fu=210,ku=211,Gu=212,Vu=213,Xu=214,Wu=0,ju=1,qu=2,gr=3,Yu=4,Zu=5,Ju=6,Ku=7,uh=0,Qu=1,$u=2,vn=0,tf=1,ef=2,nf=3,Zo=4,sf=5,rf=6;var fh=300,ki=301,Gi=302,no=303,io=304,Kr=306,vs=1e3,ln=1001,so=1002,pe=1003,Hc=1004;var Aa=1005;var $e=1006,af=1007;var ys=1008;var jn=1009,of=1010,cf=1011,Jo=1012,dh=1013,Vn=1014,Xn=1015,As=1016,ph=1017,mh=1018,ai=1020,lf=1021,hn=1023,hf=1024,uf=1025,oi=1026,Vi=1027,Ko=1028,gh=1029,ff=1030,xh=1031,vh=1033,Ma=33776,ba=33777,Sa=33778,_a=33779,Bc=35840,zc=35841,Fc=35842,kc=35843,yh=36196,Gc=37492,Vc=37496,Xc=37808,Wc=37809,jc=37810,qc=37811,Yc=37812,Zc=37813,Jc=37814,Kc=37815,Qc=37816,$c=37817,tl=37818,el=37819,nl=37820,il=37821,wa=36492,sl=36494,rl=36495,df=36283,al=36284,ol=36285,cl=36286;var xr=2300,vr=2301,Ea=2302,ll=2400,hl=2401,ul=2402;var Ah=3e3,ci=3001,pf=3200,mf=3201,Qo=0,gf=1,tn="",ue="srgb",In="srgb-linear",$o="display-p3",Qr="display-p3-linear",yr="linear",ee="srgb",Ar="rec709",Mr="p3";var gi=7680;var fl=519,xf=512,vf=513,yf=514,Mh=515,Af=516,Mf=517,bf=518,Sf=519,dl=35044;var pl="300 es",ro=1035,Dn=2e3,br=2001,qn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let n=this._listeners[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},Te=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ml=1234567,us=Math.PI/180,Xi=180/Math.PI;function di(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Te[i&255]+Te[i>>8&255]+Te[i>>16&255]+Te[i>>24&255]+"-"+Te[t&255]+Te[t>>8&255]+"-"+Te[t>>16&15|64]+Te[t>>24&255]+"-"+Te[e&63|128]+Te[e>>8&255]+"-"+Te[e>>16&255]+Te[e>>24&255]+Te[n&255]+Te[n>>8&255]+Te[n>>16&255]+Te[n>>24&255]).toLowerCase()}function me(i,t,e){return Math.max(t,Math.min(e,i))}function tc(i,t){return(i%t+t)%t}function _f(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wf(i,t,e){return i!==t?(e-i)/(t-i):0}function fs(i,t,e){return(1-e)*i+e*t}function Ef(i,t,e,n){return fs(i,t,1-Math.exp(-e*n))}function Tf(i,t=1){return t-Math.abs(tc(i,t*2)-t)}function Pf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Rf(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cf(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Lf(i,t){return i+Math.random()*(t-i)}function Df(i){return i*(.5-Math.random())}function If(i){i!==void 0&&(ml=i);let t=ml+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nf(i){return i*us}function Of(i){return i*Xi}function ao(i){return(i&i-1)===0&&i!==0}function Uf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Sr(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Hf(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),f=o((t-n)/2),d=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*u,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*u,a*l);break;case"ZXZ":i.set(c*u,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*d,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ii(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ne(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var bh={DEG2RAD:us,RAD2DEG:Xi,generateUUID:di,clamp:me,euclideanModulo:tc,mapLinear:_f,inverseLerp:wf,lerp:fs,damp:Ef,pingpong:Tf,smoothstep:Pf,smootherstep:Rf,randInt:Cf,randFloat:Lf,randFloatSpread:Df,seededRandom:If,degToRad:Nf,radToDeg:Of,isPowerOfTwo:ao,ceilPowerOfTwo:Uf,floorPowerOfTwo:Sr,setQuaternionFromProperEuler:Hf,normalize:Ne,denormalize:Ii},at=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Xt=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],x=s[0],m=s[3],p=s[6],S=s[1],v=s[4],w=s[7],D=s[2],E=s[5],T=s[8];return r[0]=o*x+a*S+c*D,r[3]=o*m+a*v+c*E,r[6]=o*p+a*w+c*T,r[1]=l*x+h*S+u*D,r[4]=l*m+h*v+u*E,r[7]=l*p+h*w+u*T,r[2]=f*x+d*S+g*D,r[5]=f*m+d*v+g*E,r[8]=f*p+d*w+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,f=a*c-h*r,d=l*r-o*c,g=e*u+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return t[0]=u*x,t[1]=(s*l-h*n)*x,t[2]=(a*n-s*o)*x,t[3]=f*x,t[4]=(h*e-s*c)*x,t[5]=(s*r-a*e)*x,t[6]=d*x,t[7]=(n*c-l*e)*x,t[8]=(o*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ta.makeScale(t,e)),this}rotate(t){return this.premultiply(Ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Ta=new Xt;function Sh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function _r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Bf(){let i=_r("canvas");return i.style.display="block",i}var gl={};function ds(i){i in gl||(gl[i]=!0,console.warn(i))}var xl=new Xt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),vl=new Xt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vs={[In]:{transfer:yr,primaries:Ar,toReference:i=>i,fromReference:i=>i},[ue]:{transfer:ee,primaries:Ar,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Qr]:{transfer:yr,primaries:Mr,toReference:i=>i.applyMatrix3(vl),fromReference:i=>i.applyMatrix3(xl)},[$o]:{transfer:ee,primaries:Mr,toReference:i=>i.convertSRGBToLinear().applyMatrix3(vl),fromReference:i=>i.applyMatrix3(xl).convertLinearToSRGB()}},zf=new Set([In,Qr]),Zt={enabled:!0,_workingColorSpace:In,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!zf.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;let n=Vs[t].toReference,s=Vs[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Vs[i].primaries},getTransfer:function(i){return i===tn?yr:Vs[i].transfer}};function zi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Pa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var xi,wr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xi===void 0&&(xi=_r("canvas")),xi.width=t.width,xi.height=t.height;let n=xi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=xi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=_r("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=zi(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(zi(e[n]/255)*255):e[n]=zi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Ff=0,Er=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=di(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ra(s[o].image)):r.push(Ra(s[o]))}else r=Ra(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ra(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var kf=0,Ye=class i extends qn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=ln,s=ln,r=$e,o=ys,a=hn,c=jn,l=i.DEFAULT_ANISOTROPY,h=tn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=di(),this.name="",this.source=new Er(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ci?ue:tn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vs:t.x=t.x-Math.floor(t.x);break;case ln:t.x=t.x<0?0:1;break;case so:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vs:t.y=t.y-Math.floor(t.y);break;case ln:t.y=t.y<0?0:1;break;case so:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ue?ci:Ah}set encoding(t){ds("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ci?ue:tn}};Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=fh;Ye.DEFAULT_ANISOTROPY=1;var re=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],u=c[8],f=c[1],d=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(l+1)/2,w=(d+1)/2,D=(p+1)/2,E=(h+f)/4,T=(u+x)/4,j=(g+m)/4;return v>w&&v>D?v<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(v),s=E/n,r=T/n):w>D?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=E/s,r=j/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=T/r,s=j/r),this.set(n,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-x)/S,this.z=(f-h)/S,this.w=Math.acos((l+d+p-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},oo=class extends qn{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new re(0,0,t,e),this.scissorTest=!1,this.viewport=new re(0,0,t,e);let s={width:t,height:e,depth:1};n.encoding!==void 0&&(ds("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===ci?ue:tn),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Ye(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new Er(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class extends oo{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Tr=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var co=class extends Ye{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],u=n[s+3],f=r[o+0],d=r[o+1],g=r[o+2],x=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=x;return}if(u!==x||c!==f||l!==d||h!==g){let m=1-a,p=c*f+l*d+h*g+u*x,S=p>=0?1:-1,v=1-p*p;if(v>Number.EPSILON){let D=Math.sqrt(v),E=Math.atan2(D,p*S);m=Math.sin(m*E)/D,a=Math.sin(a*E)/D}let w=a*S;if(c=c*m+f*w,l=l*m+d*w,h=h*m+g*w,u=u*m+x*w,m===1-a){let D=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=D,l*=D,h*=D,u*=D}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],u=r[o],f=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*d-l*f,t[e+1]=c*g+h*f+l*u-a*d,t[e+2]=l*g+h*d+a*f-c*u,t[e+3]=h*g-a*u-c*f-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),u=a(r/2),f=c(n/2),d=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u+f*d*g;break;case"YZX":this._x=f*h*u+l*d*g,this._y=l*d*u+f*h*g,this._z=l*h*g-f*d*u,this._w=l*h*u-f*d*g;break;case"XZY":this._x=f*h*u-l*d*g,this._y=l*d*u-f*h*g,this._z=l*h*g+f*d*u,this._w=l*h*u+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(me(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),n*Math.sin(r),n*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yl.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=s+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ca.copy(this).projectOnVector(t),this.sub(Ca)}reflect(t){return this.sub(Ca.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Ca=new R,yl=new yn,On=class{constructor(t=new R(1/0,1/0,1/0),e=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(an.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(an.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=an.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,an):an.fromBufferAttribute(r,o),an.applyMatrix4(t.matrixWorld),this.expandByPoint(an);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Xs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(t.matrixWorld),this.union(Xs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,an),an.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ss),Ws.subVectors(this.max,ss),vi.subVectors(t.a,ss),yi.subVectors(t.b,ss),Ai.subVectors(t.c,ss),Bn.subVectors(yi,vi),zn.subVectors(Ai,yi),$n.subVectors(vi,Ai);let e=[0,-Bn.z,Bn.y,0,-zn.z,zn.y,0,-$n.z,$n.y,Bn.z,0,-Bn.x,zn.z,0,-zn.x,$n.z,0,-$n.x,-Bn.y,Bn.x,0,-zn.y,zn.x,0,-$n.y,$n.x,0];return!La(e,vi,yi,Ai,Ws)||(e=[1,0,0,0,1,0,0,0,1],!La(e,vi,yi,Ai,Ws))?!1:(js.crossVectors(Bn,zn),e=[js.x,js.y,js.z],La(e,vi,yi,Ai,Ws))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,an).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(an).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},wn=[new R,new R,new R,new R,new R,new R,new R,new R],an=new R,Xs=new On,vi=new R,yi=new R,Ai=new R,Bn=new R,zn=new R,$n=new R,ss=new R,Ws=new R,js=new R,ti=new R;function La(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ti.fromArray(i,r);let a=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),c=t.dot(ti),l=e.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Gf=new On,rs=new R,Da=new R,li=class{constructor(t=new R,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Gf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;rs.subVectors(t,this.center);let e=rs.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(rs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Da.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(rs.copy(t.center).add(Da)),this.expandByPoint(rs.copy(t.center).sub(Da))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},En=new R,Ia=new R,qs=new R,Fn=new R,Na=new R,Ys=new R,Oa=new R,lo=class{constructor(t=new R,e=new R(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Ia.copy(t).add(e).multiplyScalar(.5),qs.copy(e).sub(t).normalize(),Fn.copy(this.origin).sub(Ia);let r=t.distanceTo(e)*.5,o=-this.direction.dot(qs),a=Fn.dot(this.direction),c=-Fn.dot(qs),l=Fn.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*c-a,f=o*a-c,g=r*h,u>=0)if(f>=-g)if(f<=g){let x=1/h;u*=x,f*=x,d=u*(u+o*f+2*a)+f*(o*u+f+2*c)+l}else f=r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f=-r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-c),r),d=f*(f+2*c)+l):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-c),r),d=-u*u+f*(f+2*c)+l);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Ia).addScaledVector(qs,f),d}intersectSphere(t,e){En.subVectors(t.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,c=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,c=(t.min.z-f.z)*u),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,n,s,r){Na.subVectors(e,t),Ys.subVectors(n,t),Oa.crossVectors(Na,Ys);let o=this.direction.dot(Oa),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fn.subVectors(this.origin,t);let c=a*this.direction.dot(Ys.crossVectors(Fn,Ys));if(c<0)return null;let l=a*this.direction.dot(Na.cross(Fn));if(l<0||c+l>o)return null;let h=-a*Fn.dot(Oa);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ne=class i{constructor(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m)}set(t,e,n,s,r,o,a,c,l,h,u,f,d,g,x,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=f,p[3]=d,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/Mi.setFromMatrixColumn(t,0).length(),r=1/Mi.setFromMatrixColumn(t,1).length(),o=1/Mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=d+g*l,e[5]=f-x*l,e[9]=-a*c,e[2]=x-f*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f+x*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=d*a-g,e[6]=x+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,d=c*u,g=l*h,x=l*u;e[0]=f-x*a,e[4]=-o*u,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*h,e[9]=x-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,d=o*u,g=a*h,x=a*u;e[0]=c*h,e[4]=g*l-d,e[8]=f*l+x,e[1]=c*u,e[5]=x*l+f,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=x-f*u,e[8]=g*u+d,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=d*u+g,e[10]=f-x*u}else if(t.order==="XZY"){let f=o*c,d=o*l,g=a*c,x=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=f*u+x,e[5]=o*h,e[9]=d*u-g,e[2]=g*u-d,e[6]=a*h,e[10]=x*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Vf,t,Xf)}lookAt(t,e,n){let s=this.elements;return je.subVectors(t,e),je.lengthSq()===0&&(je.z=1),je.normalize(),kn.crossVectors(n,je),kn.lengthSq()===0&&(Math.abs(n.z)===1?je.x+=1e-4:je.z+=1e-4,je.normalize(),kn.crossVectors(n,je)),kn.normalize(),Zs.crossVectors(je,kn),s[0]=kn.x,s[4]=Zs.x,s[8]=je.x,s[1]=kn.y,s[5]=Zs.y,s[9]=je.y,s[2]=kn.z,s[6]=Zs.z,s[10]=je.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],x=n[6],m=n[10],p=n[14],S=n[3],v=n[7],w=n[11],D=n[15],E=s[0],T=s[4],j=s[8],M=s[12],_=s[1],H=s[5],Y=s[9],st=s[13],C=s[2],U=s[6],X=s[10],K=s[14],q=s[3],N=s[7],W=s[11],V=s[15];return r[0]=o*E+a*_+c*C+l*q,r[4]=o*T+a*H+c*U+l*N,r[8]=o*j+a*Y+c*X+l*W,r[12]=o*M+a*st+c*K+l*V,r[1]=h*E+u*_+f*C+d*q,r[5]=h*T+u*H+f*U+d*N,r[9]=h*j+u*Y+f*X+d*W,r[13]=h*M+u*st+f*K+d*V,r[2]=g*E+x*_+m*C+p*q,r[6]=g*T+x*H+m*U+p*N,r[10]=g*j+x*Y+m*X+p*W,r[14]=g*M+x*st+m*K+p*V,r[3]=S*E+v*_+w*C+D*q,r[7]=S*T+v*H+w*U+D*N,r[11]=S*j+v*Y+w*X+D*W,r[15]=S*M+v*st+w*K+D*V,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],f=t[10],d=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+r*c*u-s*l*u-r*a*f+n*l*f+s*a*d-n*c*d)+x*(+e*c*d-e*l*f+r*o*f-s*o*d+s*l*h-r*c*h)+m*(+e*l*u-e*a*d-r*o*u+n*o*d+r*a*h-n*l*h)+p*(-s*a*h-e*c*u+e*a*f+s*o*u-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],f=t[10],d=t[11],g=t[12],x=t[13],m=t[14],p=t[15],S=u*m*l-x*f*l+x*c*d-a*m*d-u*c*p+a*f*p,v=g*f*l-h*m*l-g*c*d+o*m*d+h*c*p-o*f*p,w=h*x*l-g*u*l+g*a*d-o*x*d-h*a*p+o*u*p,D=g*u*c-h*x*c-g*a*f+o*x*f+h*a*m-o*u*m,E=e*S+n*v+s*w+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/E;return t[0]=S*T,t[1]=(x*f*r-u*m*r-x*s*d+n*m*d+u*s*p-n*f*p)*T,t[2]=(a*m*r-x*c*r+x*s*l-n*m*l-a*s*p+n*c*p)*T,t[3]=(u*c*r-a*f*r-u*s*l+n*f*l+a*s*d-n*c*d)*T,t[4]=v*T,t[5]=(h*m*r-g*f*r+g*s*d-e*m*d-h*s*p+e*f*p)*T,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*p-e*c*p)*T,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*d+e*c*d)*T,t[8]=w*T,t[9]=(g*u*r-h*x*r-g*n*d+e*x*d+h*n*p-e*u*p)*T,t[10]=(o*x*r-g*a*r+g*n*l-e*x*l-o*n*p+e*a*p)*T,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*d-e*a*d)*T,t[12]=D*T,t[13]=(h*x*s-g*u*s+g*n*f-e*x*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*x*s-g*n*c+e*x*c+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*c-e*u*c-o*n*f+e*a*f)*T,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,f=r*l,d=r*h,g=r*u,x=o*h,m=o*u,p=a*u,S=c*l,v=c*h,w=c*u,D=n.x,E=n.y,T=n.z;return s[0]=(1-(x+p))*D,s[1]=(d+w)*D,s[2]=(g-v)*D,s[3]=0,s[4]=(d-w)*E,s[5]=(1-(f+p))*E,s[6]=(m+S)*E,s[7]=0,s[8]=(g+v)*T,s[9]=(m-S)*T,s[10]=(1-(f+x))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=Mi.set(s[0],s[1],s[2]).length(),o=Mi.set(s[4],s[5],s[6]).length(),a=Mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],on.copy(this);let l=1/r,h=1/o,u=1/a;return on.elements[0]*=l,on.elements[1]*=l,on.elements[2]*=l,on.elements[4]*=h,on.elements[5]*=h,on.elements[6]*=h,on.elements[8]*=u,on.elements[9]*=u,on.elements[10]*=u,e.setFromRotationMatrix(on),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Dn){let c=this.elements,l=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),d,g;if(a===Dn)d=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===br)d=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=d,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Dn){let c=this.elements,l=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*l,d=(n+s)*h,g,x;if(a===Dn)g=(o+r)*u,x=-2*u;else if(a===br)g=r*u,x=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-f,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-d,c[2]=0,c[6]=0,c[10]=x,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Mi=new R,on=new ne,Vf=new R(0,0,0),Xf=new R(1,1,1),kn=new R,Zs=new R,je=new R,Al=new ne,Ml=new yn,Yn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],u=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(me(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Al.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Al,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ml.setFromEuler(this),this.setFromQuaternion(Ml,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Yn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,bl=new R,bi=new yn,Tn=new ne,Js=new R,as=new R,jf=new R,qf=new yn,Sl=new R(1,0,0),_l=new R(0,1,0),wl=new R(0,0,1),Yf={type:"added"},Zf={type:"removed"},ge=class i extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new R,e=new Yn,n=new yn,s=new R(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ne},normalMatrix:{value:new Xt}}),this.matrix=new ne,this.matrixWorld=new ne,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.multiply(bi),this}rotateOnWorldAxis(t,e){return bi.setFromAxisAngle(t,e),this.quaternion.premultiply(bi),this}rotateX(t){return this.rotateOnAxis(Sl,t)}rotateY(t){return this.rotateOnAxis(_l,t)}rotateZ(t){return this.rotateOnAxis(wl,t)}translateOnAxis(t,e){return bl.copy(t).applyQuaternion(this.quaternion),this.position.add(bl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Sl,t)}translateY(t){return this.translateOnAxis(_l,t)}translateZ(t){return this.translateOnAxis(wl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Js.copy(t):Js.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),as.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(as,Js,this.up):Tn.lookAt(Js,as,this.up),this.quaternion.setFromRotationMatrix(Tn),s&&(Tn.extractRotation(s.matrixWorld),bi.setFromRotationMatrix(Tn),this.quaternion.premultiply(bi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Yf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Zf)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,t,jf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(as,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++){let r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};ge.DEFAULT_UP=new R(0,1,0);ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var cn=new R,Pn=new R,Ua=new R,Rn=new R,Si=new R,_i=new R,El=new R,Ha=new R,Ba=new R,za=new R,Ks=!1,Ni=class i{constructor(t=new R,e=new R,n=new R){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),cn.subVectors(t,e),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){cn.subVectors(s,e),Pn.subVectors(n,e),Ua.subVectors(t,e);let o=cn.dot(cn),a=cn.dot(Pn),c=cn.dot(Ua),l=Pn.dot(Pn),h=Pn.dot(Ua),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;let f=1/u,d=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Rn)===null?!1:Rn.x>=0&&Rn.y>=0&&Rn.x+Rn.y<=1}static getUV(t,e,n,s,r,o,a,c){return Ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ks=!0),this.getInterpolation(t,e,n,s,r,o,a,c)}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,Rn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Rn.x),c.addScaledVector(o,Rn.y),c.addScaledVector(a,Rn.z),c)}static isFrontFacing(t,e,n,s){return cn.subVectors(n,e),Pn.subVectors(t,e),cn.cross(Pn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return cn.subVectors(this.c,this.b),Pn.subVectors(this.a,this.b),cn.cross(Pn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,s,r){return Ks===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ks=!0),i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;Si.subVectors(s,n),_i.subVectors(r,n),Ha.subVectors(t,n);let c=Si.dot(Ha),l=_i.dot(Ha);if(c<=0&&l<=0)return e.copy(n);Ba.subVectors(t,s);let h=Si.dot(Ba),u=_i.dot(Ba);if(h>=0&&u<=h)return e.copy(s);let f=c*u-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Si,o);za.subVectors(t,r);let d=Si.dot(za),g=_i.dot(za);if(g>=0&&d<=g)return e.copy(r);let x=d*l-c*g;if(x<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(_i,a);let m=h*g-d*u;if(m<=0&&u-h>=0&&d-g>=0)return El.subVectors(r,s),a=(u-h)/(u-h+(d-g)),e.copy(s).addScaledVector(El,a);let p=1/(m+x+f);return o=x*p,a=f*p,e.copy(n).addScaledVector(Si,o).addScaledVector(_i,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},_h={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gn={h:0,s:0,l:0},Qs={h:0,s:0,l:0};function Fa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var wt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ue){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Zt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Zt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Zt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Zt.workingColorSpace){if(t=tc(t,1),e=me(e,0,1),n=me(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Fa(o,r,t+1/3),this.g=Fa(o,r,t),this.b=Fa(o,r,t-1/3)}return Zt.toWorkingColorSpace(this,s),this}setStyle(t,e=ue){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ue){let n=_h[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zi(t.r),this.g=zi(t.g),this.b=zi(t.b),this}copyLinearToSRGB(t){return this.r=Pa(t.r),this.g=Pa(t.g),this.b=Pa(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ue){return Zt.fromWorkingColorSpace(Pe.copy(this),t),Math.round(me(Pe.r*255,0,255))*65536+Math.round(me(Pe.g*255,0,255))*256+Math.round(me(Pe.b*255,0,255))}getHexString(t=ue){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Zt.workingColorSpace){Zt.fromWorkingColorSpace(Pe.copy(this),e);let n=Pe.r,s=Pe.g,r=Pe.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-n)/u+2;break;case r:c=(n-s)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Zt.workingColorSpace){return Zt.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ue){Zt.fromWorkingColorSpace(Pe.copy(this),t);let e=Pe.r,n=Pe.g,s=Pe.b;return t!==ue?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Gn),this.setHSL(Gn.h+t,Gn.s+e,Gn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Gn),t.getHSL(Qs);let n=fs(Gn.h,Qs.h,e),s=fs(Gn.s,Qs.s,e),r=fs(Gn.l,Qs.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Pe=new wt;wt.NAMES=_h;var Jf=0,Zn=class extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Jf++}),this.uuid=di(),this.name="",this.type="Material",this.blending=Bi,this.side=en,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=to,this.blendDst=eo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=gr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=fl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gi,this.stencilZFail=gi,this.stencilZPass=gi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Bi&&(n.blending=this.blending),this.side!==en&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==to&&(n.blendSrc=this.blendSrc),this.blendDst!==eo&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==gr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==fl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==gi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==gi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},un=class extends Zn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=uh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var fe=new R,$s=new at,Ue=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=dl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Xn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ii(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ne(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ii(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ii(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ii(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ii(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ne(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ne(e,this.array),n=Ne(n,this.array),s=Ne(s,this.array),r=Ne(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==dl&&(t.usage=this.usage),t}};var Rr=class extends Ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Cr=class extends Ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var Jt=class extends Ue{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Kf=0,Qe=new ne,ka=new ge,wi=new R,qe=new On,os=new On,be=new R,He=class i extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Sh(t)?Cr:Rr)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Qe.makeRotationFromQuaternion(t),this.applyMatrix4(Qe),this}rotateX(t){return Qe.makeRotationX(t),this.applyMatrix4(Qe),this}rotateY(t){return Qe.makeRotationY(t),this.applyMatrix4(Qe),this}rotateZ(t){return Qe.makeRotationZ(t),this.applyMatrix4(Qe),this}translate(t,e,n){return Qe.makeTranslation(t,e,n),this.applyMatrix4(Qe),this}scale(t,e,n){return Qe.makeScale(t,e,n),this.applyMatrix4(Qe),this}lookAt(t){return ka.lookAt(t),ka.updateMatrix(),this.applyMatrix4(ka.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(wi).negate(),this.translate(wi.x,wi.y,wi.z),this}setFromPoints(t){let e=[];for(let n=0,s=t.length;n<s;n++){let r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new On);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];qe.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,qe.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,qe.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(qe.min),this.boundingBox.expandByPoint(qe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new li);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new R,1/0);return}if(t){let n=this.boundingSphere.center;if(qe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];os.setFromBufferAttribute(a),this.morphTargetsRelative?(be.addVectors(qe.min,os.min),qe.expandByPoint(be),be.addVectors(qe.max,os.max),qe.expandByPoint(be)):(qe.expandByPoint(os.min),qe.expandByPoint(os.max))}qe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)be.fromBufferAttribute(a,l),c&&(wi.fromBufferAttribute(t,l),be.add(wi)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ue(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let _=0;_<a;_++)l[_]=new R,h[_]=new R;let u=new R,f=new R,d=new R,g=new at,x=new at,m=new at,p=new R,S=new R;function v(_,H,Y){u.fromArray(s,_*3),f.fromArray(s,H*3),d.fromArray(s,Y*3),g.fromArray(o,_*2),x.fromArray(o,H*2),m.fromArray(o,Y*2),f.sub(u),d.sub(u),x.sub(g),m.sub(g);let st=1/(x.x*m.y-m.x*x.y);isFinite(st)&&(p.copy(f).multiplyScalar(m.y).addScaledVector(d,-x.y).multiplyScalar(st),S.copy(d).multiplyScalar(x.x).addScaledVector(f,-m.x).multiplyScalar(st),l[_].add(p),l[H].add(p),l[Y].add(p),h[_].add(S),h[H].add(S),h[Y].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:n.length}]);for(let _=0,H=w.length;_<H;++_){let Y=w[_],st=Y.start,C=Y.count;for(let U=st,X=st+C;U<X;U+=3)v(n[U+0],n[U+1],n[U+2])}let D=new R,E=new R,T=new R,j=new R;function M(_){T.fromArray(r,_*3),j.copy(T);let H=l[_];D.copy(H),D.sub(T.multiplyScalar(T.dot(H))).normalize(),E.crossVectors(j,H);let st=E.dot(h[_])<0?-1:1;c[_*4]=D.x,c[_*4+1]=D.y,c[_*4+2]=D.z,c[_*4+3]=st}for(let _=0,H=w.length;_<H;++_){let Y=w[_],st=Y.start,C=Y.count;for(let U=st,X=st+C;U<X;U+=3)M(n[U+0]),M(n[U+1]),M(n[U+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let s=new R,r=new R,o=new R,a=new R,c=new R,l=new R,h=new R,u=new R;if(t)for(let f=0,d=t.count;f<d;f+=3){let g=t.getX(f+0),x=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,x),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,x),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(x,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,u=a.normalized,f=new l.constructor(c.length*h),d=0,g=0;for(let x=0,m=c.length;x<m;x++){a.isInterleavedBufferAttribute?d=c[x]*a.data.stride+a.offset:d=c[x]*h;for(let p=0;p<h;p++)f[g++]=l[d++]}return new Ue(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){let f=l[h],d=t(f,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,f=l.length;u<f;u++){let d=l[u];h.push(d.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],u=r[l];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Tl=new ne,ei=new lo,tr=new li,Pl=new R,Ei=new R,Ti=new R,Pi=new R,Ga=new R,er=new R,nr=new at,ir=new at,sr=new at,Rl=new R,Cl=new R,Ll=new R,rr=new R,ar=new R,Yt=class extends ge{constructor(t=new He,e=new un){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],u=r[c];h!==0&&(Ga.fromBufferAttribute(u,t),o?er.addScaledVector(Ga,h):er.addScaledVector(Ga.sub(e),h))}e.add(er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(r),ei.copy(t.ray).recast(t.near),!(tr.containsPoint(ei.origin)===!1&&(ei.intersectSphere(tr,Pl)===null||ei.origin.distanceToSquared(Pl)>(t.far-t.near)**2))&&(Tl.copy(r).invert(),ei.copy(t.ray).applyMatrix4(Tl),!(n.boundingBox!==null&&ei.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ei)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(a.count,Math.min(m.start+m.count,d.start+d.count));for(let w=S,D=v;w<D;w+=3){let E=a.getX(w),T=a.getX(w+1),j=a.getX(w+2);s=or(this,p,t,n,l,h,u,E,T,j),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(a.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=a.getX(m),v=a.getX(m+1),w=a.getX(m+2);s=or(this,o,t,n,l,h,u,S,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,x=f.length;g<x;g++){let m=f[g],p=o[m.materialIndex],S=Math.max(m.start,d.start),v=Math.min(c.count,Math.min(m.start+m.count,d.start+d.count));for(let w=S,D=v;w<D;w+=3){let E=w,T=w+1,j=w+2;s=or(this,p,t,n,l,h,u,E,T,j),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,d.start),x=Math.min(c.count,d.start+d.count);for(let m=g,p=x;m<p;m+=3){let S=m,v=m+1,w=m+2;s=or(this,o,t,n,l,h,u,S,v,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Qf(i,t,e,n,s,r,o,a){let c;if(t.side===Se?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===en,a),c===null)return null;ar.copy(a),ar.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ar);return l<e.near||l>e.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,Ei),i.getVertexPosition(c,Ti),i.getVertexPosition(l,Pi);let h=Qf(i,t,e,n,Ei,Ti,Pi,rr);if(h){s&&(nr.fromBufferAttribute(s,a),ir.fromBufferAttribute(s,c),sr.fromBufferAttribute(s,l),h.uv=Ni.getInterpolation(rr,Ei,Ti,Pi,nr,ir,sr,new at)),r&&(nr.fromBufferAttribute(r,a),ir.fromBufferAttribute(r,c),sr.fromBufferAttribute(r,l),h.uv1=Ni.getInterpolation(rr,Ei,Ti,Pi,nr,ir,sr,new at),h.uv2=h.uv1),o&&(Rl.fromBufferAttribute(o,a),Cl.fromBufferAttribute(o,c),Ll.fromBufferAttribute(o,l),h.normal=Ni.getInterpolation(rr,Ei,Ti,Pi,Rl,Cl,Ll,new R),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new R,materialIndex:0};Ni.getNormal(Ei,Ti,Pi,u.normal),h.face=u}return h}var te=class i extends He{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Jt(l,3)),this.setAttribute("normal",new Jt(h,3)),this.setAttribute("uv",new Jt(u,2));function g(x,m,p,S,v,w,D,E,T,j,M){let _=w/T,H=D/j,Y=w/2,st=D/2,C=E/2,U=T+1,X=j+1,K=0,q=0,N=new R;for(let W=0;W<X;W++){let V=W*H-st;for(let it=0;it<U;it++){let B=it*_-Y;N[x]=B*S,N[m]=V*v,N[p]=C,l.push(N.x,N.y,N.z),N[x]=0,N[m]=0,N[p]=E>0?1:-1,h.push(N.x,N.y,N.z),u.push(it/T),u.push(1-W/j),K+=1}}for(let W=0;W<j;W++)for(let V=0;V<T;V++){let it=f+V+U*W,B=f+V+U*(W+1),Q=f+(V+1)+U*(W+1),ht=f+(V+1)+U*W;c.push(it,B,ht),c.push(B,Q,ht),q+=6}a.addGroup(d,q,M),d+=q,f+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Wi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Oe(i){let t={};for(let e=0;e<i.length;e++){let n=Wi(i[e]);for(let s in n)t[s]=n[s]}return t}function $f(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function wh(i){return i.getRenderTarget()===null?i.outputColorSpace:Zt.workingColorSpace}var td={clone:Wi,merge:Oe},ed=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fn=class extends Zn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ed,this.fragmentShader=nd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=$f(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Lr=class extends ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ne,this.projectionMatrix=new ne,this.projectionMatrixInverse=new ne,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},we=class extends Lr{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Xi*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(us*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Xi*2*Math.atan(Math.tan(us*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(us*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ri=-90,Ci=1,ho=class extends ge{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new we(Ri,Ci,t,e);s.layers=this.layers,this.add(s);let r=new we(Ri,Ci,t,e);r.layers=this.layers,this.add(r);let o=new we(Ri,Ci,t,e);o.layers=this.layers,this.add(o);let a=new we(Ri,Ci,t,e);a.layers=this.layers,this.add(a);let c=new we(Ri,Ci,t,e);c.layers=this.layers,this.add(c);let l=new we(Ri,Ci,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===br)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=x,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Dr=class extends Ye{constructor(t,e,n,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},uo=class extends Nn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];e.encoding!==void 0&&(ds("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ci?ue:tn),this.texture=new Dr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$e}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new te(5,5,5),r=new fn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Se,blending:Wn});r.uniforms.tEquirect.value=e;let o=new Yt(s,r),a=e.minFilter;return e.minFilter===ys&&(e.minFilter=$e),new ho(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Va=new R,id=new R,sd=new Xt,Ln=class{constructor(t=new R(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Va.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Va),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||sd.getNormalMatrix(t),s=this.coplanarPoint(Va).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},ni=new li,cr=new R,Ms=class{constructor(t=new Ln,e=new Ln,n=new Ln,s=new Ln,r=new Ln,o=new Ln){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Dn){let n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],u=s[6],f=s[7],d=s[8],g=s[9],x=s[10],m=s[11],p=s[12],S=s[13],v=s[14],w=s[15];if(n[0].setComponents(c-r,f-l,m-d,w-p).normalize(),n[1].setComponents(c+r,f+l,m+d,w+p).normalize(),n[2].setComponents(c+o,f+h,m+g,w+S).normalize(),n[3].setComponents(c-o,f-h,m-g,w-S).normalize(),n[4].setComponents(c-a,f-u,m-x,w-v).normalize(),e===Dn)n[5].setComponents(c+a,f+u,m+x,w+v).normalize();else if(e===br)n[5].setComponents(a,u,x,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ni.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ni.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ni)}intersectsSprite(t){return ni.center.set(0,0,0),ni.radius=.7071067811865476,ni.applyMatrix4(t.matrixWorld),this.intersectsSphere(ni)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(cr.x=s.normal.x>0?t.max.x:t.min.x,cr.y=s.normal.y>0?t.max.y:t.min.y,cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(cr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Eh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rd(i,t){let e=t.isWebGL2,n=new WeakMap;function s(l,h){let u=l.array,f=l.usage,d=u.byteLength,g=i.createBuffer();i.bindBuffer(h,g),i.bufferData(h,u,f),l.onUploadCallback();let x;if(u instanceof Float32Array)x=i.FLOAT;else if(u instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)x=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else x=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)x=i.SHORT;else if(u instanceof Uint32Array)x=i.UNSIGNED_INT;else if(u instanceof Int32Array)x=i.INT;else if(u instanceof Int8Array)x=i.BYTE;else if(u instanceof Uint8Array)x=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)x=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:x,bytesPerElement:u.BYTES_PER_ELEMENT,version:l.version,size:d}}function r(l,h,u){let f=h.array,d=h._updateRange,g=h.updateRanges;if(i.bindBuffer(u,l),d.count===-1&&g.length===0&&i.bufferSubData(u,0,f),g.length!==0){for(let x=0,m=g.length;x<m;x++){let p=g[x];e?i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f,p.start,p.count):i.bufferSubData(u,p.start*f.BYTES_PER_ELEMENT,f.subarray(p.start,p.start+p.count))}h.clearUpdateRanges()}d.count!==-1&&(e?i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f,d.offset,d.count):i.bufferSubData(u,d.offset*f.BYTES_PER_ELEMENT,f.subarray(d.offset,d.offset+d.count)),d.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=n.get(l);h&&(i.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let f=n.get(l);(!f||f.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let u=n.get(l);if(u===void 0)n.set(l,s(l,h));else if(u.version<l.version){if(u.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,l,h),u.version=l.version}}return{get:o,remove:a,update:c}}var Be=class i extends He{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,u=t/a,f=e/c,d=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let S=p*f-o;for(let v=0;v<l;v++){let w=v*u-r;g.push(w,-S,0),x.push(0,0,1),m.push(v/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let S=0;S<a;S++){let v=S+l*p,w=S+l*(p+1),D=S+1+l*(p+1),E=S+1+l*p;d.push(v,w,E),d.push(w,D,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}},ad=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,od=`#ifdef USE_ALPHAHASH
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
#endif`,cd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ld=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
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
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yd=`#ifdef USE_IRIDESCENCE
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
#endif`,Ad=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ed=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Pd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rd=`#define PI 3.141592653589793
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
} // validated`,Cd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Od=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ud="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hd=`
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
}`,Bd=`#ifdef USE_ENVMAP
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
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Fd=`#ifdef USE_ENVMAP
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
#endif`,kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
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
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qd=`#ifdef USE_GRADIENTMAP
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
}`,Yd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Zd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Qd=`uniform bool receiveShadow;
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
#endif`,$d=`#ifdef USE_ENVMAP
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
#endif`,tp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,np=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ip=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sp=`PhysicalMaterial material;
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
#endif`,rp=`struct PhysicalMaterial {
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
}`,ap=`
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
#endif`,op=`#if defined( RE_IndirectDiffuse )
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
#endif`,cp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hp=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,fp=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gp=`#if defined( USE_POINTS_UV )
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
#endif`,xp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,yp=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ap=`#ifdef USE_MORPHNORMALS
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
#endif`,Mp=`#ifdef USE_MORPHTARGETS
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
#endif`,bp=`#ifdef USE_MORPHTARGETS
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
#endif`,Sp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pp=`#ifdef USE_NORMALMAP
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
#endif`,Rp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Np=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Op=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Up=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xp=`float getShadowMask() {
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
}`,Wp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jp=`#ifdef USE_SKINNING
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
#endif`,qp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yp=`#ifdef USE_SKINNING
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
#endif`,Zp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
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
#endif`,tm=`#ifdef USE_TRANSMISSION
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
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,am=`uniform sampler2D t2D;
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
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
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
}`,fm=`#if DEPTH_PACKING == 3200
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
}`,dm=`#define DISTANCE
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
}`,pm=`#define DISTANCE
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
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xm=`uniform float scale;
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
}`,vm=`uniform vec3 diffuse;
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
}`,ym=`#include <common>
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
}`,Am=`uniform vec3 diffuse;
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
}`,Mm=`#define LAMBERT
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
}`,bm=`#define LAMBERT
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
}`,Sm=`#define MATCAP
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
}`,_m=`#define MATCAP
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
}`,wm=`#define NORMAL
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
}`,Em=`#define NORMAL
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
}`,Tm=`#define PHONG
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
}`,Pm=`#define PHONG
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
}`,Rm=`#define STANDARD
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
}`,Cm=`#define STANDARD
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
}`,Lm=`#define TOON
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
}`,Dm=`#define TOON
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
}`,Im=`uniform float size;
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
}`,Nm=`uniform vec3 diffuse;
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
}`,Om=`#include <common>
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
}`,Um=`uniform vec3 color;
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
}`,Hm=`uniform float rotation;
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
}`,Bm=`uniform vec3 diffuse;
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
}`,zt={alphahash_fragment:ad,alphahash_pars_fragment:od,alphamap_fragment:cd,alphamap_pars_fragment:ld,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:fd,aomap_pars_fragment:dd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:xd,bsdfs:vd,iridescence_fragment:yd,bumpmap_pars_fragment:Ad,clipping_planes_fragment:Md,clipping_planes_pars_fragment:bd,clipping_planes_pars_vertex:Sd,clipping_planes_vertex:_d,color_fragment:wd,color_pars_fragment:Ed,color_pars_vertex:Td,color_vertex:Pd,common:Rd,cube_uv_reflection_fragment:Cd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Dd,displacementmap_vertex:Id,emissivemap_fragment:Nd,emissivemap_pars_fragment:Od,colorspace_fragment:Ud,colorspace_pars_fragment:Hd,envmap_fragment:Bd,envmap_common_pars_fragment:zd,envmap_pars_fragment:Fd,envmap_pars_vertex:kd,envmap_physical_pars_fragment:$d,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Xd,fog_fragment:Wd,fog_pars_fragment:jd,gradientmap_pars_fragment:qd,lightmap_fragment:Yd,lightmap_pars_fragment:Zd,lights_lambert_fragment:Jd,lights_lambert_pars_fragment:Kd,lights_pars_begin:Qd,lights_toon_fragment:tp,lights_toon_pars_fragment:ep,lights_phong_fragment:np,lights_phong_pars_fragment:ip,lights_physical_fragment:sp,lights_physical_pars_fragment:rp,lights_fragment_begin:ap,lights_fragment_maps:op,lights_fragment_end:cp,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:hp,logdepthbuf_pars_vertex:up,logdepthbuf_vertex:fp,map_fragment:dp,map_pars_fragment:pp,map_particle_fragment:mp,map_particle_pars_fragment:gp,metalnessmap_fragment:xp,metalnessmap_pars_fragment:vp,morphcolor_vertex:yp,morphnormal_vertex:Ap,morphtarget_pars_vertex:Mp,morphtarget_vertex:bp,normal_fragment_begin:Sp,normal_fragment_maps:_p,normal_pars_fragment:wp,normal_pars_vertex:Ep,normal_vertex:Tp,normalmap_pars_fragment:Pp,clearcoat_normal_fragment_begin:Rp,clearcoat_normal_fragment_maps:Cp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,opaque_fragment:Ip,packing:Np,premultiplied_alpha_fragment:Op,project_vertex:Up,dithering_fragment:Hp,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:Fp,shadowmap_pars_fragment:kp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Xp,skinbase_vertex:Wp,skinning_pars_vertex:jp,skinning_vertex:qp,skinnormal_vertex:Yp,specularmap_fragment:Zp,specularmap_pars_fragment:Jp,tonemapping_fragment:Kp,tonemapping_pars_fragment:Qp,transmission_fragment:$p,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:am,backgroundCube_vert:om,backgroundCube_frag:cm,cube_vert:lm,cube_frag:hm,depth_vert:um,depth_frag:fm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:xm,linedashed_frag:vm,meshbasic_vert:ym,meshbasic_frag:Am,meshlambert_vert:Mm,meshlambert_frag:bm,meshmatcap_vert:Sm,meshmatcap_frag:_m,meshnormal_vert:wm,meshnormal_frag:Em,meshphong_vert:Tm,meshphong_frag:Pm,meshphysical_vert:Rm,meshphysical_frag:Cm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Im,points_frag:Nm,shadow_vert:Om,shadow_frag:Um,sprite_vert:Hm,sprite_frag:Bm},lt={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},xn={basic:{uniforms:Oe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Oe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Oe([lt.common,lt.specularmap,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Oe([lt.common,lt.envmap,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.roughnessmap,lt.metalnessmap,lt.fog,lt.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Oe([lt.common,lt.aomap,lt.lightmap,lt.emissivemap,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.gradientmap,lt.fog,lt.lights,{emissive:{value:new wt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Oe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,lt.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Oe([lt.points,lt.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Oe([lt.common,lt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Oe([lt.common,lt.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Oe([lt.common,lt.bumpmap,lt.normalmap,lt.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Oe([lt.sprite,lt.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Oe([lt.common,lt.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Oe([lt.lights,lt.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};xn.physical={uniforms:Oe([xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var lr={r:0,b:0,g:0};function zm(i,t,e,n,s,r,o){let a=new wt(0),c=r===!0?0:1,l,h,u=null,f=0,d=null;function g(m,p){let S=!1,v=p.isScene===!0?p.background:null;v&&v.isTexture&&(v=(p.backgroundBlurriness>0?e:t).get(v)),v===null?x(a,c):v&&v.isColor&&(x(v,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),v&&(v.isCubeTexture||v.mapping===Kr)?(h===void 0&&(h=new Yt(new te(1,1,1),new fn({name:"BackgroundCubeMaterial",uniforms:Wi(xn.backgroundCube.uniforms),vertexShader:xn.backgroundCube.vertexShader,fragmentShader:xn.backgroundCube.fragmentShader,side:Se,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,h.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,(u!==v||f!==v.version||d!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(l===void 0&&(l=new Yt(new Be(2,2),new fn({name:"BackgroundMaterial",uniforms:Wi(xn.background.uniforms),vertexShader:xn.background.vertexShader,fragmentShader:xn.background.fragmentShader,side:en,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=v,l.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,l.material.toneMapped=Zt.getTransfer(v.colorSpace)!==ee,v.matrixAutoUpdate===!0&&v.updateMatrix(),l.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=v,f=v.version,d=i.toneMapping),l.layers.enableAll(),m.unshift(l,l.geometry,l.material,0,0,null))}function x(m,p){m.getRGB(lr,wh(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),c=p,x(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(m){c=m,x(a,c)},render:g}}function Fm(i,t,e,n){let s=i.getParameter(i.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=m(null),l=c,h=!1;function u(C,U,X,K,q){let N=!1;if(o){let W=x(K,X,U);l!==W&&(l=W,d(l.object)),N=p(C,K,X,q),N&&S(C,K,X,q)}else{let W=U.wireframe===!0;(l.geometry!==K.id||l.program!==X.id||l.wireframe!==W)&&(l.geometry=K.id,l.program=X.id,l.wireframe=W,N=!0)}q!==null&&e.update(q,i.ELEMENT_ARRAY_BUFFER),(N||h)&&(h=!1,j(C,U,X,K),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function f(){return n.isWebGL2?i.createVertexArray():r.createVertexArrayOES()}function d(C){return n.isWebGL2?i.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return n.isWebGL2?i.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function x(C,U,X){let K=X.wireframe===!0,q=a[C.id];q===void 0&&(q={},a[C.id]=q);let N=q[U.id];N===void 0&&(N={},q[U.id]=N);let W=N[K];return W===void 0&&(W=m(f()),N[K]=W),W}function m(C){let U=[],X=[],K=[];for(let q=0;q<s;q++)U[q]=0,X[q]=0,K[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:X,attributeDivisors:K,object:C,attributes:{},index:null}}function p(C,U,X,K){let q=l.attributes,N=U.attributes,W=0,V=X.getAttributes();for(let it in V)if(V[it].location>=0){let Q=q[it],ht=N[it];if(ht===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(ht=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(ht=C.instanceColor)),Q===void 0||Q.attribute!==ht||ht&&Q.data!==ht.data)return!0;W++}return l.attributesNum!==W||l.index!==K}function S(C,U,X,K){let q={},N=U.attributes,W=0,V=X.getAttributes();for(let it in V)if(V[it].location>=0){let Q=N[it];Q===void 0&&(it==="instanceMatrix"&&C.instanceMatrix&&(Q=C.instanceMatrix),it==="instanceColor"&&C.instanceColor&&(Q=C.instanceColor));let ht={};ht.attribute=Q,Q&&Q.data&&(ht.data=Q.data),q[it]=ht,W++}l.attributes=q,l.attributesNum=W,l.index=K}function v(){let C=l.newAttributes;for(let U=0,X=C.length;U<X;U++)C[U]=0}function w(C){D(C,0)}function D(C,U){let X=l.newAttributes,K=l.enabledAttributes,q=l.attributeDivisors;X[C]=1,K[C]===0&&(i.enableVertexAttribArray(C),K[C]=1),q[C]!==U&&((n.isWebGL2?i:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,U),q[C]=U)}function E(){let C=l.newAttributes,U=l.enabledAttributes;for(let X=0,K=U.length;X<K;X++)U[X]!==C[X]&&(i.disableVertexAttribArray(X),U[X]=0)}function T(C,U,X,K,q,N,W){W===!0?i.vertexAttribIPointer(C,U,X,q,N):i.vertexAttribPointer(C,U,X,K,q,N)}function j(C,U,X,K){if(n.isWebGL2===!1&&(C.isInstancedMesh||K.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;v();let q=K.attributes,N=X.getAttributes(),W=U.defaultAttributeValues;for(let V in N){let it=N[V];if(it.location>=0){let B=q[V];if(B===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(B=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(B=C.instanceColor)),B!==void 0){let Q=B.normalized,ht=B.itemSize,yt=e.get(B);if(yt===void 0)continue;let pt=yt.buffer,Et=yt.type,Lt=yt.bytesPerElement,Mt=n.isWebGL2===!0&&(Et===i.INT||Et===i.UNSIGNED_INT||B.gpuType===dh);if(B.isInterleavedBufferAttribute){let It=B.data,P=It.stride,ot=B.offset;if(It.isInstancedInterleavedBuffer){for(let J=0;J<it.locationSize;J++)D(it.location+J,It.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=It.meshPerAttribute*It.count)}else for(let J=0;J<it.locationSize;J++)w(it.location+J);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let J=0;J<it.locationSize;J++)T(it.location+J,ht/it.locationSize,Et,Q,P*Lt,(ot+ht/it.locationSize*J)*Lt,Mt)}else{if(B.isInstancedBufferAttribute){for(let It=0;It<it.locationSize;It++)D(it.location+It,B.meshPerAttribute);C.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let It=0;It<it.locationSize;It++)w(it.location+It);i.bindBuffer(i.ARRAY_BUFFER,pt);for(let It=0;It<it.locationSize;It++)T(it.location+It,ht/it.locationSize,Et,Q,ht*Lt,ht/it.locationSize*It*Lt,Mt)}}else if(W!==void 0){let Q=W[V];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(it.location,Q);break;case 3:i.vertexAttrib3fv(it.location,Q);break;case 4:i.vertexAttrib4fv(it.location,Q);break;default:i.vertexAttrib1fv(it.location,Q)}}}}E()}function M(){Y();for(let C in a){let U=a[C];for(let X in U){let K=U[X];for(let q in K)g(K[q].object),delete K[q];delete U[X]}delete a[C]}}function _(C){if(a[C.id]===void 0)return;let U=a[C.id];for(let X in U){let K=U[X];for(let q in K)g(K[q].object),delete K[q];delete U[X]}delete a[C.id]}function H(C){for(let U in a){let X=a[U];if(X[C.id]===void 0)continue;let K=X[C.id];for(let q in K)g(K[q].object),delete K[q];delete X[C.id]}}function Y(){st(),h=!0,l!==c&&(l=c,d(l.object))}function st(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:u,reset:Y,resetDefaultState:st,dispose:M,releaseStatesOfGeometry:_,releaseStatesOfProgram:H,initAttributes:v,enableAttribute:w,disableUnusedAttributes:E}}function km(i,t,e,n){let s=n.isWebGL2,r;function o(h){r=h}function a(h,u){i.drawArrays(r,h,u),e.update(u,r,1)}function c(h,u,f){if(f===0)return;let d,g;if(s)d=i,g="drawArraysInstanced";else if(d=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[g](r,h,u,f),e.update(u,r,f)}function l(h,u,f){if(f===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{d.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let x=0;x<f;x++)g+=u[x];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function Gm(i,t,e){let n;function s(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");n=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),d=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),x=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=f>0,w=o||t.has("OES_texture_float"),D=v&&w,E=o?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:d,maxCubemapSize:g,maxAttributes:x,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:S,vertexTextures:v,floatFragmentTextures:w,floatVertexTextures:D,maxSamples:E}}function Vm(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ln,a=new Xt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||s;return s=f,n=u.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let S=r?0:n,v=S*4,w=p.clippingState||null;c.value=w,w=h(g,f,v,d);for(let D=0;D!==v;++D)w[D]=e[D];p.clippingState=w,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,d,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=d+x*4,S=f.matrixWorldInverse;a.getNormalMatrix(S),(m===null||m.length<p)&&(m=new Float32Array(p));for(let v=0,w=d;v!==x;++v,w+=4)o.copy(u[v]).applyMatrix4(S,a),o.normal.toArray(m,w),m[w+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Xm(i){let t=new WeakMap;function e(o,a){return a===no?o.mapping=ki:a===io&&(o.mapping=Gi),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===no||a===io)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new uo(c.height/2);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Ir=class extends Lr{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Oi=4,Dl=[.125,.215,.35,.446,.526,.582],ri=20,Xa=new Ir,Il=new wt,Wa=null,ja=0,qa=0,ii=(1+Math.sqrt(5))/2,Li=1/ii,Nl=[new R(1,1,1),new R(-1,1,1),new R(1,1,-1),new R(-1,1,-1),new R(0,ii,Li),new R(0,ii,-Li),new R(Li,0,ii),new R(-Li,0,ii),new R(ii,Li,0),new R(-ii,Li,0)],ji=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Wa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ul(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Wa,ja,qa),t.scissorTest=!1,hr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Gi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Wa=this._renderer.getRenderTarget(),ja=this._renderer.getActiveCubeFace(),qa=this._renderer.getActiveMipmapLevel();let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:$e,minFilter:$e,generateMipmaps:!1,type:As,format:hn,colorSpace:In,depthBuffer:!1},s=Ol(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ol(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wm(r)),this._blurMaterial=jm(r,t,e)}return s}_compileMaterial(t){let e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Xa)}_sceneToCubeUV(t,e,n,s){let a=new we(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Il),h.toneMapping=vn,h.autoClear=!1;let d=new un({name:"PMREM.Background",side:Se,depthWrite:!1,depthTest:!1}),g=new Yt(new te,d),x=!1,m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,x=!0):(d.color.copy(Il),x=!0);for(let p=0;p<6;p++){let S=p%3;S===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):S===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));let v=this._cubeSize;hr(s,S*v,p>2?v:0,v,v),h.setRenderTarget(s),x&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ki||t.mapping===Gi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ul());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;hr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Xa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Nl[(s-1)%Nl.length];this._blur(t,s-1,s,r,o)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new Yt(this._lodPlanes[s],l),f=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*ri-1),x=r/g,m=isFinite(r)?1+Math.floor(h*x):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);let p=[],S=0;for(let T=0;T<ri;++T){let j=T/x,M=Math.exp(-j*j/2);p.push(M),T===0?S+=M:T<m&&(S+=2*M)}for(let T=0;T<p.length;T++)p[T]=p[T]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let w=this._sizeLods[s],D=3*w*(s>v-Oi?s-v+Oi:0),E=4*(this._cubeSize-w);hr(e,D,E,3*w,2*w),c.setRenderTarget(e),c.render(u,Xa)}};function Wm(i){let t=[],e=[],n=[],s=i,r=i-Oi+1+Dl.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Oi?c=Dl[o-i+Oi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,u=1+l,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,x=3,m=2,p=1,S=new Float32Array(x*g*d),v=new Float32Array(m*g*d),w=new Float32Array(p*g*d);for(let E=0;E<d;E++){let T=E%3*2/3-1,j=E>2?0:-1,M=[T,j,0,T+2/3,j,0,T+2/3,j+1,0,T,j,0,T+2/3,j+1,0,T,j+1,0];S.set(M,x*g*E),v.set(f,m*g*E);let _=[E,E,E,E,E,E];w.set(_,p*g*E)}let D=new He;D.setAttribute("position",new Ue(S,x)),D.setAttribute("uv",new Ue(v,m)),D.setAttribute("faceIndex",new Ue(w,p)),t.push(D),s>Oi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Ol(i,t,e){let n=new Nn(i,t,e);return n.texture.mapping=Kr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function hr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function jm(i,t,e){let n=new Float32Array(ri),s=new R(0,1,0);return new fn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Ul(){return new fn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ec(),fragmentShader:`

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
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function Hl(){return new fn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ec(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wn,depthTest:!1,depthWrite:!1})}function ec(){return`

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
	`}function qm(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===no||c===io,h=c===ki||c===Gi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=t.get(a);return e===null&&(e=new ji(i)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),t.set(a,u),u.texture}else{if(t.has(a))return t.get(a).texture;{let u=a.image;if(l&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new ji(i));let f=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,f),a.addEventListener("dispose",r),f.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ym(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){let s=e(n);return s===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Zm(i,t,e,n){let s={},r=new WeakMap;function o(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let x=f.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}f.removeEventListener("dispose",o),delete s[f.id];let d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(u){let f=u.attributes;for(let g in f)t.update(f[g],i.ARRAY_BUFFER);let d=u.morphAttributes;for(let g in d){let x=d[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],i.ARRAY_BUFFER)}}function l(u){let f=[],d=u.index,g=u.attributes.position,x=0;if(d!==null){let S=d.array;x=d.version;for(let v=0,w=S.length;v<w;v+=3){let D=S[v+0],E=S[v+1],T=S[v+2];f.push(D,E,E,T,T,D)}}else if(g!==void 0){let S=g.array;x=g.version;for(let v=0,w=S.length/3-1;v<w;v+=3){let D=v+0,E=v+1,T=v+2;f.push(D,E,E,T,T,D)}}else return;let m=new(Sh(f)?Cr:Rr)(f,1);m.version=x;let p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){let f=r.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Jm(i,t,e,n){let s=n.isWebGL2,r;function o(d){r=d}let a,c;function l(d){a=d.type,c=d.bytesPerElement}function h(d,g){i.drawElements(r,g,a,d*c),e.update(g,r,1)}function u(d,g,x){if(x===0)return;let m,p;if(s)m=i,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,g,a,d*c,x),e.update(g,r,x)}function f(d,g,x){if(x===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<x;p++)this.render(d[p]/c,g[p]);else{m.multiDrawElementsWEBGL(r,g,0,a,d,0,x);let p=0;for(let S=0;S<x;S++)p+=g[S];e.update(p,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function Km(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,t){return i[0]-t[0]}function $m(i,t){return Math.abs(t[1])-Math.abs(i[1])}function tg(i,t,e){let n={},s=new Float32Array(8),r=new WeakMap,o=new re,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,u){let f=l.morphTargetInfluences;if(t.isWebGL2===!0){let d=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=d!==void 0?d.length:0,x=r.get(h);if(x===void 0||x.count!==g){let C=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",C)};x!==void 0&&x.texture.dispose();let S=h.morphAttributes.position!==void 0,v=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],E=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],j=0;S===!0&&(j=1),v===!0&&(j=2),w===!0&&(j=3);let M=h.attributes.position.count*j,_=1;M>t.maxTextureSize&&(_=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let H=new Float32Array(M*_*4*g),Y=new Tr(H,M,_,g);Y.type=Xn,Y.needsUpdate=!0;let st=j*4;for(let U=0;U<g;U++){let X=D[U],K=E[U],q=T[U],N=M*_*4*U;for(let W=0;W<X.count;W++){let V=W*st;S===!0&&(o.fromBufferAttribute(X,W),H[N+V+0]=o.x,H[N+V+1]=o.y,H[N+V+2]=o.z,H[N+V+3]=0),v===!0&&(o.fromBufferAttribute(K,W),H[N+V+4]=o.x,H[N+V+5]=o.y,H[N+V+6]=o.z,H[N+V+7]=0),w===!0&&(o.fromBufferAttribute(q,W),H[N+V+8]=o.x,H[N+V+9]=o.y,H[N+V+10]=o.z,H[N+V+11]=q.itemSize===4?o.w:1)}}x={count:g,texture:Y,size:new at(M,_)},r.set(h,x),h.addEventListener("dispose",C)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];let p=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(i,"morphTargetBaseInfluence",p),u.getUniforms().setValue(i,"morphTargetInfluences",f),u.getUniforms().setValue(i,"morphTargetsTexture",x.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",x.size)}else{let d=f===void 0?0:f.length,g=n[h.id];if(g===void 0||g.length!==d){g=[];for(let v=0;v<d;v++)g[v]=[v,0];n[h.id]=g}for(let v=0;v<d;v++){let w=g[v];w[0]=v,w[1]=f[v]}g.sort($m);for(let v=0;v<8;v++)v<d&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(Qm);let x=h.morphAttributes.position,m=h.morphAttributes.normal,p=0;for(let v=0;v<8;v++){let w=a[v],D=w[0],E=w[1];D!==Number.MAX_SAFE_INTEGER&&E?(x&&h.getAttribute("morphTarget"+v)!==x[D]&&h.setAttribute("morphTarget"+v,x[D]),m&&h.getAttribute("morphNormal"+v)!==m[D]&&h.setAttribute("morphNormal"+v,m[D]),s[v]=E,p+=E):(x&&h.hasAttribute("morphTarget"+v)===!0&&h.deleteAttribute("morphTarget"+v),m&&h.hasAttribute("morphNormal"+v)===!0&&h.deleteAttribute("morphNormal"+v),s[v]=0)}let S=h.morphTargetsRelative?1:1-p;u.getUniforms().setValue(i,"morphTargetBaseInfluence",S),u.getUniforms().setValue(i,"morphTargetInfluences",s)}}return{update:c}}function eg(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,u=t.get(c,h);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var Nr=class extends Ye{constructor(t,e,n,s,r,o,a,c,l,h){if(h=h!==void 0?h:oi,h!==oi&&h!==Vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===oi&&(n=Vn),n===void 0&&h===Vi&&(n=ai),super(null,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:pe,this.minFilter=c!==void 0?c:pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Th=new Ye,Ph=new Nr(1,1);Ph.compareFunction=Mh;var Rh=new Tr,Ch=new co,Lh=new Dr,Bl=[],zl=[],Fl=new Float32Array(16),kl=new Float32Array(9),Gl=new Float32Array(4);function $i(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Bl[s];if(r===void 0&&(r=new Float32Array(s),Bl[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function xe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $r(i,t){let e=zl[t];e===void 0&&(e=new Int32Array(t),zl[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function ng(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function ig(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function sg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(xe(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function rg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function ag(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Gl.set(n),i.uniformMatrix2fv(this.addr,!1,Gl),ve(e,n)}}function og(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;kl.set(n),i.uniformMatrix3fv(this.addr,!1,kl),ve(e,n)}}function cg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(xe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(xe(e,n))return;Fl.set(n),i.uniformMatrix4fv(this.addr,!1,Fl),ve(e,n)}}function lg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function dg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function pg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(xe(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function mg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(xe(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function gg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(xe(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function xg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r=this.type===i.SAMPLER_2D_SHADOW?Ph:Th;e.setTexture2D(t||r,s)}function vg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ch,s)}function yg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Lh,s)}function Ag(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Rh,s)}function Mg(i){switch(i){case 5126:return ng;case 35664:return ig;case 35665:return sg;case 35666:return rg;case 35674:return ag;case 35675:return og;case 35676:return cg;case 5124:case 35670:return lg;case 35667:case 35671:return hg;case 35668:case 35672:return ug;case 35669:case 35673:return fg;case 5125:return dg;case 36294:return pg;case 36295:return mg;case 36296:return gg;case 35678:case 36198:case 36298:case 36306:case 35682:return xg;case 35679:case 36299:case 36307:return vg;case 35680:case 36300:case 36308:case 36293:return yg;case 36289:case 36303:case 36311:case 36292:return Ag}}function bg(i,t){i.uniform1fv(this.addr,t)}function Sg(i,t){let e=$i(t,this.size,2);i.uniform2fv(this.addr,e)}function _g(i,t){let e=$i(t,this.size,3);i.uniform3fv(this.addr,e)}function wg(i,t){let e=$i(t,this.size,4);i.uniform4fv(this.addr,e)}function Eg(i,t){let e=$i(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Tg(i,t){let e=$i(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Pg(i,t){let e=$i(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Rg(i,t){i.uniform1iv(this.addr,t)}function Cg(i,t){i.uniform2iv(this.addr,t)}function Lg(i,t){i.uniform3iv(this.addr,t)}function Dg(i,t){i.uniform4iv(this.addr,t)}function Ig(i,t){i.uniform1uiv(this.addr,t)}function Ng(i,t){i.uniform2uiv(this.addr,t)}function Og(i,t){i.uniform3uiv(this.addr,t)}function Ug(i,t){i.uniform4uiv(this.addr,t)}function Hg(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Th,r[o])}function Bg(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Ch,r[o])}function zg(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Lh,r[o])}function Fg(i,t,e){let n=this.cache,s=t.length,r=$r(e,s);xe(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Rh,r[o])}function kg(i){switch(i){case 5126:return bg;case 35664:return Sg;case 35665:return _g;case 35666:return wg;case 35674:return Eg;case 35675:return Tg;case 35676:return Pg;case 5124:case 35670:return Rg;case 35667:case 35671:return Cg;case 35668:case 35672:return Lg;case 35669:case 35673:return Dg;case 5125:return Ig;case 36294:return Ng;case 36295:return Og;case 36296:return Ug;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return zg;case 36289:case 36303:case 36311:case 36292:return Fg}}var fo=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mg(e.type)}},po=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=kg(e.type)}},mo=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},Ya=/(\w+)(\])?(\[|\.)?/g;function Vl(i,t){i.seq.push(t),i.map[t.id]=t}function Gg(i,t,e){let n=i.name,s=n.length;for(Ya.lastIndex=0;;){let r=Ya.exec(n),o=Ya.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Vl(e,l===void 0?new fo(a,i,t):new po(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new mo(a),Vl(e,u)),e=u}}}var Fi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);Gg(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function Xl(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Vg=37297,Xg=0;function Wg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function jg(i){let t=Zt.getPrimaries(Zt.workingColorSpace),e=Zt.getPrimaries(i),n;switch(t===e?n="":t===Mr&&e===Ar?n="LinearDisplayP3ToLinearSRGB":t===Ar&&e===Mr&&(n="LinearSRGBToLinearDisplayP3"),i){case In:case Qr:return[n,"LinearTransferOETF"];case ue:case $o:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Wl(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Wg(i.getShaderSource(t),o)}else return s}function qg(i,t){let e=jg(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Yg(i,t){let e;switch(t){case tf:e="Linear";break;case ef:e="Reinhard";break;case nf:e="OptimizedCineon";break;case Zo:e="ACESFilmic";break;case rf:e="AgX";break;case sf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Zg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ui).join(`
`)}function Jg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ui).join(`
`)}function Kg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Qg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function Ui(i){return i!==""}function jl(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ql(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function go(i){return i.replace($g,e0)}var t0=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function e0(i,t){let e=zt[t];if(e===void 0){let n=t0.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return go(e)}var n0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yl(i){return i.replace(n0,i0)}function i0(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Zl(i){let t="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function s0(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===hh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Yo?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Cn&&(t="SHADOWMAP_TYPE_VSM"),t}function r0(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ki:case Gi:t="ENVMAP_TYPE_CUBE";break;case Kr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function a0(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Gi:t="ENVMAP_MODE_REFRACTION";break}return t}function o0(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case uh:t="ENVMAP_BLENDING_MULTIPLY";break;case Qu:t="ENVMAP_BLENDING_MIX";break;case $u:t="ENVMAP_BLENDING_ADD";break}return t}function c0(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function l0(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=s0(e),l=r0(e),h=a0(e),u=o0(e),f=c0(e),d=e.isWebGL2?"":Zg(e),g=Jg(e),x=Kg(r),m=s.createProgram(),p,S,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ui).join(`
`),p.length>0&&(p+=`
`),S=[d,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x].filter(Ui).join(`
`),S.length>0&&(S+=`
`)):(p=[Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ui).join(`
`),S=[d,Zl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,x,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?zt.tonemapping_pars_fragment:"",e.toneMapping!==vn?Yg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,qg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ui).join(`
`)),o=go(o),o=jl(o,e),o=ql(o,e),a=go(a),a=jl(a,e),a=ql(a,e),o=Yl(o),a=Yl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===pl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=v+p+o,D=v+S+a,E=Xl(s,s.VERTEX_SHADER,w),T=Xl(s,s.FRAGMENT_SHADER,D);s.attachShader(m,E),s.attachShader(m,T),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function j(Y){if(i.debug.checkShaderErrors){let st=s.getProgramInfoLog(m).trim(),C=s.getShaderInfoLog(E).trim(),U=s.getShaderInfoLog(T).trim(),X=!0,K=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,E,T);else{let q=Wl(s,E,"vertex"),N=Wl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+st+`
`+q+`
`+N)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(C===""||U==="")&&(K=!1);K&&(Y.diagnostics={runnable:X,programLog:st,vertexShader:{log:C,prefix:p},fragmentShader:{log:U,prefix:S}})}s.deleteShader(E),s.deleteShader(T),M=new Fi(s,m),_=Qg(s,m)}let M;this.getUniforms=function(){return M===void 0&&j(this),M};let _;this.getAttributes=function(){return _===void 0&&j(this),_};let H=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(m,Vg)),H},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Xg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=E,this.fragmentShader=T,this}var h0=0,xo=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vo(t),e.set(t,n)),n}},vo=class{constructor(t){this.id=h0++,this.code=t,this.usedTimes=0}};function u0(i,t,e,n,s,r,o){let a=new Pr,c=new xo,l=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,d=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function m(M,_,H,Y,st){let C=Y.fog,U=st.geometry,X=M.isMeshStandardMaterial?Y.environment:null,K=(M.isMeshStandardMaterial?e:t).get(M.envMap||X),q=K&&K.mapping===Kr?K.image.height:null,N=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));let W=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,V=W!==void 0?W.length:0,it=0;U.morphAttributes.position!==void 0&&(it=1),U.morphAttributes.normal!==void 0&&(it=2),U.morphAttributes.color!==void 0&&(it=3);let B,Q,ht,yt;if(N){let De=xn[N];B=De.vertexShader,Q=De.fragmentShader}else B=M.vertexShader,Q=M.fragmentShader,c.update(M),ht=c.getVertexShaderID(M),yt=c.getFragmentShaderID(M);let pt=i.getRenderTarget(),Et=st.isInstancedMesh===!0,Lt=st.isBatchedMesh===!0,Mt=!!M.map,It=!!M.matcap,P=!!K,ot=!!M.aoMap,J=!!M.lightMap,rt=!!M.bumpMap,Z=!!M.normalMap,St=!!M.displacementMap,mt=!!M.emissiveMap,A=!!M.metalnessMap,y=!!M.roughnessMap,O=M.anisotropy>0,nt=M.clearcoat>0,tt=M.iridescence>0,$=M.sheen>0,At=M.transmission>0,ut=O&&!!M.anisotropyMap,xt=nt&&!!M.clearcoatMap,Tt=nt&&!!M.clearcoatNormalMap,Ut=nt&&!!M.clearcoatRoughnessMap,et=tt&&!!M.iridescenceMap,jt=tt&&!!M.iridescenceThicknessMap,Wt=$&&!!M.sheenColorMap,Nt=$&&!!M.sheenRoughnessMap,_t=!!M.specularMap,vt=!!M.specularColorMap,Bt=!!M.specularIntensityMap,qt=At&&!!M.transmissionMap,ce=At&&!!M.thicknessMap,Gt=!!M.gradientMap,ct=!!M.alphaMap,L=M.alphaTest>0,ft=!!M.alphaHash,dt=!!M.extensions,Ct=!!U.attributes.uv1,Pt=!!U.attributes.uv2,Kt=!!U.attributes.uv3,Qt=vn;return M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Qt=i.toneMapping),{isWebGL2:h,shaderID:N,shaderType:M.type,shaderName:M.name,vertexShader:B,fragmentShader:Q,defines:M.defines,customVertexShaderID:ht,customFragmentShaderID:yt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Lt,instancing:Et,instancingColor:Et&&st.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:pt===null?i.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:In,map:Mt,matcap:It,envMap:P,envMapMode:P&&K.mapping,envMapCubeUVHeight:q,aoMap:ot,lightMap:J,bumpMap:rt,normalMap:Z,displacementMap:f&&St,emissiveMap:mt,normalMapObjectSpace:Z&&M.normalMapType===gf,normalMapTangentSpace:Z&&M.normalMapType===Qo,metalnessMap:A,roughnessMap:y,anisotropy:O,anisotropyMap:ut,clearcoat:nt,clearcoatMap:xt,clearcoatNormalMap:Tt,clearcoatRoughnessMap:Ut,iridescence:tt,iridescenceMap:et,iridescenceThicknessMap:jt,sheen:$,sheenColorMap:Wt,sheenRoughnessMap:Nt,specularMap:_t,specularColorMap:vt,specularIntensityMap:Bt,transmission:At,transmissionMap:qt,thicknessMap:ce,gradientMap:Gt,opaque:M.transparent===!1&&M.blending===Bi,alphaMap:ct,alphaTest:L,alphaHash:ft,combine:M.combine,mapUv:Mt&&x(M.map.channel),aoMapUv:ot&&x(M.aoMap.channel),lightMapUv:J&&x(M.lightMap.channel),bumpMapUv:rt&&x(M.bumpMap.channel),normalMapUv:Z&&x(M.normalMap.channel),displacementMapUv:St&&x(M.displacementMap.channel),emissiveMapUv:mt&&x(M.emissiveMap.channel),metalnessMapUv:A&&x(M.metalnessMap.channel),roughnessMapUv:y&&x(M.roughnessMap.channel),anisotropyMapUv:ut&&x(M.anisotropyMap.channel),clearcoatMapUv:xt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:Tt&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ut&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:jt&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&x(M.sheenRoughnessMap.channel),specularMapUv:_t&&x(M.specularMap.channel),specularColorMapUv:vt&&x(M.specularColorMap.channel),specularIntensityMapUv:Bt&&x(M.specularIntensityMap.channel),transmissionMapUv:qt&&x(M.transmissionMap.channel),thicknessMapUv:ce&&x(M.thicknessMap.channel),alphaMapUv:ct&&x(M.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(Z||O),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,vertexUv1s:Ct,vertexUv2s:Pt,vertexUv3s:Kt,pointsUvs:st.isPoints===!0&&!!U.attributes.uv&&(Mt||ct),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:st.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:it,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:Qt,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Mt&&M.map.isVideoTexture===!0&&Zt.getTransfer(M.map.colorSpace)===ee,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Re,flipSided:M.side===Se,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:dt&&M.extensions.derivatives===!0,extensionFragDepth:dt&&M.extensions.fragDepth===!0,extensionDrawBuffers:dt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:dt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:dt&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function p(M){let _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(let H in M.defines)_.push(H),_.push(M.defines[H]);return M.isRawShaderMaterial===!1&&(S(_,M),v(_,M),_.push(i.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function S(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function v(M,_){a.disableAll(),_.isWebGL2&&a.enable(0),_.supportsVertexTextures&&a.enable(1),_.instancing&&a.enable(2),_.instancingColor&&a.enable(3),_.matcap&&a.enable(4),_.envMap&&a.enable(5),_.normalMapObjectSpace&&a.enable(6),_.normalMapTangentSpace&&a.enable(7),_.clearcoat&&a.enable(8),_.iridescence&&a.enable(9),_.alphaTest&&a.enable(10),_.vertexColors&&a.enable(11),_.vertexAlphas&&a.enable(12),_.vertexUv1s&&a.enable(13),_.vertexUv2s&&a.enable(14),_.vertexUv3s&&a.enable(15),_.vertexTangents&&a.enable(16),_.anisotropy&&a.enable(17),_.alphaHash&&a.enable(18),_.batching&&a.enable(19),M.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.skinning&&a.enable(4),_.morphTargets&&a.enable(5),_.morphNormals&&a.enable(6),_.morphColors&&a.enable(7),_.premultipliedAlpha&&a.enable(8),_.shadowMapEnabled&&a.enable(9),_.useLegacyLights&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function w(M){let _=g[M.type],H;if(_){let Y=xn[_];H=td.clone(Y.uniforms)}else H=M.uniforms;return H}function D(M,_){let H;for(let Y=0,st=l.length;Y<st;Y++){let C=l[Y];if(C.cacheKey===_){H=C,++H.usedTimes;break}}return H===void 0&&(H=new l0(i,_,M,r),l.push(H)),H}function E(M){if(--M.usedTimes===0){let _=l.indexOf(M);l[_]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function j(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:D,releaseProgram:E,releaseShaderCache:T,programs:l,dispose:j}}function f0(){let i=new WeakMap;function t(r){let o=i.get(r);return o===void 0&&(o={},i.set(r,o)),o}function e(r){i.delete(r)}function n(r,o,a){i.get(r)[o]=a}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function d0(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Jl(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kl(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,d,g,x,m){let p=i[t];return p===void 0?(p={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},i[t]=p):(p.id=u.id,p.object=u,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=x,p.group=m),t++,p}function a(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function c(u,f,d,g,x,m){let p=o(u,f,d,g,x,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function l(u,f){e.length>1&&e.sort(u||d0),n.length>1&&n.sort(f||Jl),s.length>1&&s.sort(f||Jl)}function h(){for(let u=t,f=i.length;u<f;u++){let d=i[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function p0(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new Kl,i.set(n,[o])):s>=r.length?(o=new Kl,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function m0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new R,color:new wt};break;case"SpotLight":e={position:new R,direction:new R,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new R,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new R,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new R,halfWidth:new R,halfHeight:new R};break}return i[t.id]=e,e}}}function g0(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var x0=0;function v0(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function y0(i,t){let e=new m0,n=g0(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new R);let r=new R,o=new ne,a=new ne;function c(h,u){let f=0,d=0,g=0;for(let Y=0;Y<9;Y++)s.probe[Y].set(0,0,0);let x=0,m=0,p=0,S=0,v=0,w=0,D=0,E=0,T=0,j=0,M=0;h.sort(v0);let _=u===!0?Math.PI:1;for(let Y=0,st=h.length;Y<st;Y++){let C=h[Y],U=C.color,X=C.intensity,K=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=U.r*X*_,d+=U.g*X*_,g+=U.b*X*_;else if(C.isLightProbe){for(let N=0;N<9;N++)s.probe[N].addScaledVector(C.sh.coefficients[N],X);M++}else if(C.isDirectionalLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity*_),C.castShadow){let W=C.shadow,V=n.get(C);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,s.directionalShadow[x]=V,s.directionalShadowMap[x]=q,s.directionalShadowMatrix[x]=C.shadow.matrix,w++}s.directional[x]=N,x++}else if(C.isSpotLight){let N=e.get(C);N.position.setFromMatrixPosition(C.matrixWorld),N.color.copy(U).multiplyScalar(X*_),N.distance=K,N.coneCos=Math.cos(C.angle),N.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),N.decay=C.decay,s.spot[p]=N;let W=C.shadow;if(C.map&&(s.spotLightMap[T]=C.map,T++,W.updateMatrices(C),C.castShadow&&j++),s.spotLightMatrix[p]=W.matrix,C.castShadow){let V=n.get(C);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,s.spotShadow[p]=V,s.spotShadowMap[p]=q,E++}p++}else if(C.isRectAreaLight){let N=e.get(C);N.color.copy(U).multiplyScalar(X),N.halfWidth.set(C.width*.5,0,0),N.halfHeight.set(0,C.height*.5,0),s.rectArea[S]=N,S++}else if(C.isPointLight){let N=e.get(C);if(N.color.copy(C.color).multiplyScalar(C.intensity*_),N.distance=C.distance,N.decay=C.decay,C.castShadow){let W=C.shadow,V=n.get(C);V.shadowBias=W.bias,V.shadowNormalBias=W.normalBias,V.shadowRadius=W.radius,V.shadowMapSize=W.mapSize,V.shadowCameraNear=W.camera.near,V.shadowCameraFar=W.camera.far,s.pointShadow[m]=V,s.pointShadowMap[m]=q,s.pointShadowMatrix[m]=C.shadow.matrix,D++}s.point[m]=N,m++}else if(C.isHemisphereLight){let N=e.get(C);N.skyColor.copy(C.color).multiplyScalar(X*_),N.groundColor.copy(C.groundColor).multiplyScalar(X*_),s.hemi[v]=N,v++}}S>0&&(t.isWebGL2?i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):i.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_FLOAT_1,s.rectAreaLTC2=lt.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=lt.LTC_HALF_1,s.rectAreaLTC2=lt.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=d,s.ambient[2]=g;let H=s.hash;(H.directionalLength!==x||H.pointLength!==m||H.spotLength!==p||H.rectAreaLength!==S||H.hemiLength!==v||H.numDirectionalShadows!==w||H.numPointShadows!==D||H.numSpotShadows!==E||H.numSpotMaps!==T||H.numLightProbes!==M)&&(s.directional.length=x,s.spot.length=p,s.rectArea.length=S,s.point.length=m,s.hemi.length=v,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=D,s.pointShadowMap.length=D,s.spotShadow.length=E,s.spotShadowMap.length=E,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=D,s.spotLightMatrix.length=E+T-j,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=j,s.numLightProbes=M,H.directionalLength=x,H.pointLength=m,H.spotLength=p,H.rectAreaLength=S,H.hemiLength=v,H.numDirectionalShadows=w,H.numPointShadows=D,H.numSpotShadows=E,H.numSpotMaps=T,H.numLightProbes=M,s.version=x0++)}function l(h,u){let f=0,d=0,g=0,x=0,m=0,p=u.matrixWorldInverse;for(let S=0,v=h.length;S<v;S++){let w=h[S];if(w.isDirectionalLight){let D=s.directional[f];D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),f++}else if(w.isSpotLight){let D=s.spot[g];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(p),D.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),D.direction.sub(r),D.direction.transformDirection(p),g++}else if(w.isRectAreaLight){let D=s.rectArea[x];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(p),a.identity(),o.copy(w.matrixWorld),o.premultiply(p),a.extractRotation(o),D.halfWidth.set(w.width*.5,0,0),D.halfHeight.set(0,w.height*.5,0),D.halfWidth.applyMatrix4(a),D.halfHeight.applyMatrix4(a),x++}else if(w.isPointLight){let D=s.point[d];D.position.setFromMatrixPosition(w.matrixWorld),D.position.applyMatrix4(p),d++}else if(w.isHemisphereLight){let D=s.hemi[m];D.direction.setFromMatrixPosition(w.matrixWorld),D.direction.transformDirection(p),m++}}}return{setup:c,setupView:l,state:s}}function Ql(i,t){let e=new y0(i,t),n=[],s=[];function r(){n.length=0,s.length=0}function o(u){n.push(u)}function a(u){s.push(u)}function c(u){e.setup(n,u)}function l(u){e.setupView(n,u)}return{init:r,state:{lightsArray:n,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function A0(i,t){let e=new WeakMap;function n(r,o=0){let a=e.get(r),c;return a===void 0?(c=new Ql(i,t),e.set(r,[c])):o>=a.length?(c=new Ql(i,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:n,dispose:s}}var yo=class extends Zn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=pf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ao=class extends Zn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},M0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,b0=`uniform sampler2D shadow_pass;
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
}`;function S0(i,t,e){let n=new Ms,s=new at,r=new at,o=new re,a=new yo({depthPacking:mf}),c=new Ao,l={},h=e.maxTextureSize,u={[en]:Se,[Se]:en,[Re]:Re},f=new fn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:M0,fragmentShader:b0}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new He;g.setAttribute("position",new Ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Yt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=hh;let p=this.type;this.render=function(E,T,j){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;let M=i.getRenderTarget(),_=i.getActiveCubeFace(),H=i.getActiveMipmapLevel(),Y=i.state;Y.setBlending(Wn),Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);let st=p!==Cn&&this.type===Cn,C=p===Cn&&this.type!==Cn;for(let U=0,X=E.length;U<X;U++){let K=E[U],q=K.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let N=q.getFrameExtents();if(s.multiply(N),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/N.x),s.x=r.x*N.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/N.y),s.y=r.y*N.y,q.mapSize.y=r.y)),q.map===null||st===!0||C===!0){let V=this.type!==Cn?{minFilter:pe,magFilter:pe}:{};q.map!==null&&q.map.dispose(),q.map=new Nn(s.x,s.y,V),q.map.texture.name=K.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();let W=q.getViewportCount();for(let V=0;V<W;V++){let it=q.getViewport(V);o.set(r.x*it.x,r.y*it.y,r.x*it.z,r.y*it.w),Y.viewport(o),q.updateMatrices(K,V),n=q.getFrustum(),w(T,j,q.camera,K,this.type)}q.isPointLightShadow!==!0&&this.type===Cn&&S(q,j),q.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,_,H)};function S(E,T){let j=t.update(x);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Nn(s.x,s.y)),f.uniforms.shadow_pass.value=E.map.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(T,null,j,f,x,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(T,null,j,d,x,null)}function v(E,T,j,M){let _=null,H=j.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(H!==void 0)_=H;else if(_=j.isPointLight===!0?c:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let Y=_.uuid,st=T.uuid,C=l[Y];C===void 0&&(C={},l[Y]=C);let U=C[st];U===void 0&&(U=_.clone(),C[st]=U,T.addEventListener("dispose",D)),_=U}if(_.visible=T.visible,_.wireframe=T.wireframe,M===Cn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:u[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,j.isPointLight===!0&&_.isMeshDistanceMaterial===!0){let Y=i.properties.get(_);Y.light=j}return _}function w(E,T,j,M,_){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&_===Cn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,E.matrixWorld);let st=t.update(E),C=E.material;if(Array.isArray(C)){let U=st.groups;for(let X=0,K=U.length;X<K;X++){let q=U[X],N=C[q.materialIndex];if(N&&N.visible){let W=v(E,N,M,_);E.onBeforeShadow(i,E,T,j,st,W,q),i.renderBufferDirect(j,null,st,W,E,q),E.onAfterShadow(i,E,T,j,st,W,q)}}}else if(C.visible){let U=v(E,C,M,_);E.onBeforeShadow(i,E,T,j,st,U,null),i.renderBufferDirect(j,null,st,U,E,null),E.onAfterShadow(i,E,T,j,st,U,null)}}let Y=E.children;for(let st=0,C=Y.length;st<C;st++)w(Y[st],T,j,M,_)}function D(E){E.target.removeEventListener("dispose",D);for(let j in l){let M=l[j],_=E.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}function _0(i,t,e){let n=e.isWebGL2;function s(){let L=!1,ft=new re,dt=null,Ct=new re(0,0,0,0);return{setMask:function(Pt){dt!==Pt&&!L&&(i.colorMask(Pt,Pt,Pt,Pt),dt=Pt)},setLocked:function(Pt){L=Pt},setClear:function(Pt,Kt,Qt,Ae,De){De===!0&&(Pt*=Ae,Kt*=Ae,Qt*=Ae),ft.set(Pt,Kt,Qt,Ae),Ct.equals(ft)===!1&&(i.clearColor(Pt,Kt,Qt,Ae),Ct.copy(ft))},reset:function(){L=!1,dt=null,Ct.set(-1,0,0,0)}}}function r(){let L=!1,ft=null,dt=null,Ct=null;return{setTest:function(Pt){Pt?Lt(i.DEPTH_TEST):Mt(i.DEPTH_TEST)},setMask:function(Pt){ft!==Pt&&!L&&(i.depthMask(Pt),ft=Pt)},setFunc:function(Pt){if(dt!==Pt){switch(Pt){case Wu:i.depthFunc(i.NEVER);break;case ju:i.depthFunc(i.ALWAYS);break;case qu:i.depthFunc(i.LESS);break;case gr:i.depthFunc(i.LEQUAL);break;case Yu:i.depthFunc(i.EQUAL);break;case Zu:i.depthFunc(i.GEQUAL);break;case Ju:i.depthFunc(i.GREATER);break;case Ku:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}dt=Pt}},setLocked:function(Pt){L=Pt},setClear:function(Pt){Ct!==Pt&&(i.clearDepth(Pt),Ct=Pt)},reset:function(){L=!1,ft=null,dt=null,Ct=null}}}function o(){let L=!1,ft=null,dt=null,Ct=null,Pt=null,Kt=null,Qt=null,Ae=null,De=null;return{setTest:function($t){L||($t?Lt(i.STENCIL_TEST):Mt(i.STENCIL_TEST))},setMask:function($t){ft!==$t&&!L&&(i.stencilMask($t),ft=$t)},setFunc:function($t,Ie,gn){(dt!==$t||Ct!==Ie||Pt!==gn)&&(i.stencilFunc($t,Ie,gn),dt=$t,Ct=Ie,Pt=gn)},setOp:function($t,Ie,gn){(Kt!==$t||Qt!==Ie||Ae!==gn)&&(i.stencilOp($t,Ie,gn),Kt=$t,Qt=Ie,Ae=gn)},setLocked:function($t){L=$t},setClear:function($t){De!==$t&&(i.clearStencil($t),De=$t)},reset:function(){L=!1,ft=null,dt=null,Ct=null,Pt=null,Kt=null,Qt=null,Ae=null,De=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,u=new WeakMap,f={},d={},g=new WeakMap,x=[],m=null,p=!1,S=null,v=null,w=null,D=null,E=null,T=null,j=null,M=new wt(0,0,0),_=0,H=!1,Y=null,st=null,C=null,U=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,N=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(W)[1]),q=N>=1):W.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),q=N>=2);let V=null,it={},B=i.getParameter(i.SCISSOR_BOX),Q=i.getParameter(i.VIEWPORT),ht=new re().fromArray(B),yt=new re().fromArray(Q);function pt(L,ft,dt,Ct){let Pt=new Uint8Array(4),Kt=i.createTexture();i.bindTexture(L,Kt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Qt=0;Qt<dt;Qt++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(ft,0,i.RGBA,1,1,Ct,0,i.RGBA,i.UNSIGNED_BYTE,Pt):i.texImage2D(ft+Qt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Pt);return Kt}let Et={};Et[i.TEXTURE_2D]=pt(i.TEXTURE_2D,i.TEXTURE_2D,1),Et[i.TEXTURE_CUBE_MAP]=pt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Et[i.TEXTURE_2D_ARRAY]=pt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Et[i.TEXTURE_3D]=pt(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(i.DEPTH_TEST),c.setFunc(gr),mt(!1),A(Lc),Lt(i.CULL_FACE),Z(Wn);function Lt(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Mt(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function It(L,ft){return d[L]!==ft?(i.bindFramebuffer(L,ft),d[L]=ft,n&&(L===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=ft),L===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=ft)),!0):!1}function P(L,ft){let dt=x,Ct=!1;if(L)if(dt=g.get(ft),dt===void 0&&(dt=[],g.set(ft,dt)),L.isWebGLMultipleRenderTargets){let Pt=L.texture;if(dt.length!==Pt.length||dt[0]!==i.COLOR_ATTACHMENT0){for(let Kt=0,Qt=Pt.length;Kt<Qt;Kt++)dt[Kt]=i.COLOR_ATTACHMENT0+Kt;dt.length=Pt.length,Ct=!0}}else dt[0]!==i.COLOR_ATTACHMENT0&&(dt[0]=i.COLOR_ATTACHMENT0,Ct=!0);else dt[0]!==i.BACK&&(dt[0]=i.BACK,Ct=!0);Ct&&(e.isWebGL2?i.drawBuffers(dt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(dt))}function ot(L){return m!==L?(i.useProgram(L),m=L,!0):!1}let J={[si]:i.FUNC_ADD,[Cu]:i.FUNC_SUBTRACT,[Lu]:i.FUNC_REVERSE_SUBTRACT};if(n)J[Oc]=i.MIN,J[Uc]=i.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(J[Oc]=L.MIN_EXT,J[Uc]=L.MAX_EXT)}let rt={[Du]:i.ZERO,[Iu]:i.ONE,[Nu]:i.SRC_COLOR,[to]:i.SRC_ALPHA,[Fu]:i.SRC_ALPHA_SATURATE,[Bu]:i.DST_COLOR,[Uu]:i.DST_ALPHA,[Ou]:i.ONE_MINUS_SRC_COLOR,[eo]:i.ONE_MINUS_SRC_ALPHA,[zu]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA,[ku]:i.CONSTANT_COLOR,[Gu]:i.ONE_MINUS_CONSTANT_COLOR,[Vu]:i.CONSTANT_ALPHA,[Xu]:i.ONE_MINUS_CONSTANT_ALPHA};function Z(L,ft,dt,Ct,Pt,Kt,Qt,Ae,De,$t){if(L===Wn){p===!0&&(Mt(i.BLEND),p=!1);return}if(p===!1&&(Lt(i.BLEND),p=!0),L!==Ru){if(L!==S||$t!==H){if((v!==si||E!==si)&&(i.blendEquation(i.FUNC_ADD),v=si,E=si),$t)switch(L){case Bi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.ONE,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Bi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dc:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Ic:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Nc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}w=null,D=null,T=null,j=null,M.set(0,0,0),_=0,S=L,H=$t}return}Pt=Pt||ft,Kt=Kt||dt,Qt=Qt||Ct,(ft!==v||Pt!==E)&&(i.blendEquationSeparate(J[ft],J[Pt]),v=ft,E=Pt),(dt!==w||Ct!==D||Kt!==T||Qt!==j)&&(i.blendFuncSeparate(rt[dt],rt[Ct],rt[Kt],rt[Qt]),w=dt,D=Ct,T=Kt,j=Qt),(Ae.equals(M)===!1||De!==_)&&(i.blendColor(Ae.r,Ae.g,Ae.b,De),M.copy(Ae),_=De),S=L,H=!1}function St(L,ft){L.side===Re?Mt(i.CULL_FACE):Lt(i.CULL_FACE);let dt=L.side===Se;ft&&(dt=!dt),mt(dt),L.blending===Bi&&L.transparent===!1?Z(Wn):Z(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let Ct=L.stencilWrite;l.setTest(Ct),Ct&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),O(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Lt(i.SAMPLE_ALPHA_TO_COVERAGE):Mt(i.SAMPLE_ALPHA_TO_COVERAGE)}function mt(L){Y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),Y=L)}function A(L){L!==Tu?(Lt(i.CULL_FACE),L!==st&&(L===Lc?i.cullFace(i.BACK):L===Pu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Mt(i.CULL_FACE),st=L}function y(L){L!==C&&(q&&i.lineWidth(L),C=L)}function O(L,ft,dt){L?(Lt(i.POLYGON_OFFSET_FILL),(U!==ft||X!==dt)&&(i.polygonOffset(ft,dt),U=ft,X=dt)):Mt(i.POLYGON_OFFSET_FILL)}function nt(L){L?Lt(i.SCISSOR_TEST):Mt(i.SCISSOR_TEST)}function tt(L){L===void 0&&(L=i.TEXTURE0+K-1),V!==L&&(i.activeTexture(L),V=L)}function $(L,ft,dt){dt===void 0&&(V===null?dt=i.TEXTURE0+K-1:dt=V);let Ct=it[dt];Ct===void 0&&(Ct={type:void 0,texture:void 0},it[dt]=Ct),(Ct.type!==L||Ct.texture!==ft)&&(V!==dt&&(i.activeTexture(dt),V=dt),i.bindTexture(L,ft||Et[L]),Ct.type=L,Ct.texture=ft)}function At(){let L=it[V];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ut(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function et(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function jt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Wt(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Nt(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(L){ht.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ht.copy(L))}function qt(L){yt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),yt.copy(L))}function ce(L,ft){let dt=u.get(ft);dt===void 0&&(dt=new WeakMap,u.set(ft,dt));let Ct=dt.get(L);Ct===void 0&&(Ct=i.getUniformBlockIndex(ft,L.name),dt.set(L,Ct))}function Gt(L,ft){let Ct=u.get(ft).get(L);h.get(ft)!==Ct&&(i.uniformBlockBinding(ft,Ct,L.__bindingPointIndex),h.set(ft,Ct))}function ct(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},V=null,it={},d={},g=new WeakMap,x=[],m=null,p=!1,S=null,v=null,w=null,D=null,E=null,T=null,j=null,M=new wt(0,0,0),_=0,H=!1,Y=null,st=null,C=null,U=null,X=null,ht.set(0,0,i.canvas.width,i.canvas.height),yt.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Lt,disable:Mt,bindFramebuffer:It,drawBuffers:P,useProgram:ot,setBlending:Z,setMaterial:St,setFlipSided:mt,setCullFace:A,setLineWidth:y,setPolygonOffset:O,setScissorTest:nt,activeTexture:tt,bindTexture:$,unbindTexture:At,compressedTexImage2D:ut,compressedTexImage3D:xt,texImage2D:_t,texImage3D:vt,updateUBOMapping:ce,uniformBlockBinding:Gt,texStorage2D:Wt,texStorage3D:Nt,texSubImage2D:Tt,texSubImage3D:Ut,compressedTexSubImage2D:et,compressedTexSubImage3D:jt,scissor:Bt,viewport:qt,reset:ct}}function w0(i,t,e,n,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return d?new OffscreenCanvas(A,y):_r("canvas")}function x(A,y,O,nt){let tt=1;if((A.width>nt||A.height>nt)&&(tt=nt/Math.max(A.width,A.height)),tt<1||y===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){let $=y?Sr:Math.floor,At=$(tt*A.width),ut=$(tt*A.height);u===void 0&&(u=g(At,ut));let xt=O?g(At,ut):u;return xt.width=At,xt.height=ut,xt.getContext("2d").drawImage(A,0,0,At,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+At+"x"+ut+")."),xt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function m(A){return ao(A.width)&&ao(A.height)}function p(A){return a?!1:A.wrapS!==ln||A.wrapT!==ln||A.minFilter!==pe&&A.minFilter!==$e}function S(A,y){return A.generateMipmaps&&y&&A.minFilter!==pe&&A.minFilter!==$e}function v(A){i.generateMipmap(A)}function w(A,y,O,nt,tt=!1){if(a===!1)return y;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=y;if(y===i.RED&&(O===i.FLOAT&&($=i.R32F),O===i.HALF_FLOAT&&($=i.R16F),O===i.UNSIGNED_BYTE&&($=i.R8)),y===i.RED_INTEGER&&(O===i.UNSIGNED_BYTE&&($=i.R8UI),O===i.UNSIGNED_SHORT&&($=i.R16UI),O===i.UNSIGNED_INT&&($=i.R32UI),O===i.BYTE&&($=i.R8I),O===i.SHORT&&($=i.R16I),O===i.INT&&($=i.R32I)),y===i.RG&&(O===i.FLOAT&&($=i.RG32F),O===i.HALF_FLOAT&&($=i.RG16F),O===i.UNSIGNED_BYTE&&($=i.RG8)),y===i.RGBA){let At=tt?yr:Zt.getTransfer(nt);O===i.FLOAT&&($=i.RGBA32F),O===i.HALF_FLOAT&&($=i.RGBA16F),O===i.UNSIGNED_BYTE&&($=At===ee?i.SRGB8_ALPHA8:i.RGBA8),O===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),O===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function D(A,y,O){return S(A,O)===!0||A.isFramebufferTexture&&A.minFilter!==pe&&A.minFilter!==$e?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function E(A){return A===pe||A===Hc||A===Aa?i.NEAREST:i.LINEAR}function T(A){let y=A.target;y.removeEventListener("dispose",T),M(y),y.isVideoTexture&&h.delete(y)}function j(A){let y=A.target;y.removeEventListener("dispose",j),H(y)}function M(A){let y=n.get(A);if(y.__webglInit===void 0)return;let O=A.source,nt=f.get(O);if(nt){let tt=nt[y.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&_(A),Object.keys(nt).length===0&&f.delete(O)}n.remove(A)}function _(A){let y=n.get(A);i.deleteTexture(y.__webglTexture);let O=A.source,nt=f.get(O);delete nt[y.__cacheKey],o.memory.textures--}function H(A){let y=A.texture,O=n.get(A),nt=n.get(y);if(nt.__webglTexture!==void 0&&(i.deleteTexture(nt.__webglTexture),o.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(O.__webglFramebuffer[tt]))for(let $=0;$<O.__webglFramebuffer[tt].length;$++)i.deleteFramebuffer(O.__webglFramebuffer[tt][$]);else i.deleteFramebuffer(O.__webglFramebuffer[tt]);O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer[tt])}else{if(Array.isArray(O.__webglFramebuffer))for(let tt=0;tt<O.__webglFramebuffer.length;tt++)i.deleteFramebuffer(O.__webglFramebuffer[tt]);else i.deleteFramebuffer(O.__webglFramebuffer);if(O.__webglDepthbuffer&&i.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&i.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let tt=0;tt<O.__webglColorRenderbuffer.length;tt++)O.__webglColorRenderbuffer[tt]&&i.deleteRenderbuffer(O.__webglColorRenderbuffer[tt]);O.__webglDepthRenderbuffer&&i.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let tt=0,$=y.length;tt<$;tt++){let At=n.get(y[tt]);At.__webglTexture&&(i.deleteTexture(At.__webglTexture),o.memory.textures--),n.remove(y[tt])}n.remove(y),n.remove(A)}let Y=0;function st(){Y=0}function C(){let A=Y;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),Y+=1,A}function U(A){let y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function X(A,y){let O=n.get(A);if(A.isVideoTexture&&St(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){let nt=A.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ht(O,A,y);return}}e.bindTexture(i.TEXTURE_2D,O.__webglTexture,i.TEXTURE0+y)}function K(A,y){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ht(O,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,O.__webglTexture,i.TEXTURE0+y)}function q(A,y){let O=n.get(A);if(A.version>0&&O.__version!==A.version){ht(O,A,y);return}e.bindTexture(i.TEXTURE_3D,O.__webglTexture,i.TEXTURE0+y)}function N(A,y){let O=n.get(A);if(A.version>0&&O.__version!==A.version){yt(O,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+y)}let W={[vs]:i.REPEAT,[ln]:i.CLAMP_TO_EDGE,[so]:i.MIRRORED_REPEAT},V={[pe]:i.NEAREST,[Hc]:i.NEAREST_MIPMAP_NEAREST,[Aa]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[af]:i.LINEAR_MIPMAP_NEAREST,[ys]:i.LINEAR_MIPMAP_LINEAR},it={[xf]:i.NEVER,[Sf]:i.ALWAYS,[vf]:i.LESS,[Mh]:i.LEQUAL,[yf]:i.EQUAL,[bf]:i.GEQUAL,[Af]:i.GREATER,[Mf]:i.NOTEQUAL};function B(A,y,O){if(O?(i.texParameteri(A,i.TEXTURE_WRAP_S,W[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,W[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,W[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,V[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,V[y.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(y.wrapS!==ln||y.wrapT!==ln)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,E(y.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,E(y.minFilter)),y.minFilter!==pe&&y.minFilter!==$e&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,it[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let nt=t.get("EXT_texture_filter_anisotropic");if(y.magFilter===pe||y.minFilter!==Aa&&y.minFilter!==ys||y.type===Xn&&t.has("OES_texture_float_linear")===!1||a===!1&&y.type===As&&t.has("OES_texture_half_float_linear")===!1)return;(y.anisotropy>1||n.get(y).__currentAnisotropy)&&(i.texParameterf(A,nt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy)}}function Q(A,y){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));let nt=y.source,tt=f.get(nt);tt===void 0&&(tt={},f.set(nt,tt));let $=U(y);if($!==A.__cacheKey){tt[$]===void 0&&(tt[$]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,O=!0),tt[$].usedTimes++;let At=tt[A.__cacheKey];At!==void 0&&(tt[A.__cacheKey].usedTimes--,At.usedTimes===0&&_(y)),A.__cacheKey=$,A.__webglTexture=tt[$].texture}return O}function ht(A,y,O){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);let tt=Q(A,y),$=y.source;e.bindTexture(nt,A.__webglTexture,i.TEXTURE0+O);let At=n.get($);if($.version!==At.__version||tt===!0){e.activeTexture(i.TEXTURE0+O);let ut=Zt.getPrimaries(Zt.workingColorSpace),xt=y.colorSpace===tn?null:Zt.getPrimaries(y.colorSpace),Tt=y.colorSpace===tn||ut===xt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);let Ut=p(y)&&m(y.image)===!1,et=x(y.image,Ut,!1,s.maxTextureSize);et=mt(y,et);let jt=m(et)||a,Wt=r.convert(y.format,y.colorSpace),Nt=r.convert(y.type),_t=w(y.internalFormat,Wt,Nt,y.colorSpace,y.isVideoTexture);B(nt,y,jt);let vt,Bt=y.mipmaps,qt=a&&y.isVideoTexture!==!0&&_t!==yh,ce=At.__version===void 0||tt===!0,Gt=D(y,et,jt);if(y.isDepthTexture)_t=i.DEPTH_COMPONENT,a?y.type===Xn?_t=i.DEPTH_COMPONENT32F:y.type===Vn?_t=i.DEPTH_COMPONENT24:y.type===ai?_t=i.DEPTH24_STENCIL8:_t=i.DEPTH_COMPONENT16:y.type===Xn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===oi&&_t===i.DEPTH_COMPONENT&&y.type!==Jo&&y.type!==Vn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=Vn,Nt=r.convert(y.type)),y.format===Vi&&_t===i.DEPTH_COMPONENT&&(_t=i.DEPTH_STENCIL,y.type!==ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=ai,Nt=r.convert(y.type))),ce&&(qt?e.texStorage2D(i.TEXTURE_2D,1,_t,et.width,et.height):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,Wt,Nt,null));else if(y.isDataTexture)if(Bt.length>0&&jt){qt&&ce&&e.texStorage2D(i.TEXTURE_2D,Gt,_t,Bt[0].width,Bt[0].height);for(let ct=0,L=Bt.length;ct<L;ct++)vt=Bt[ct],qt?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,vt.width,vt.height,Wt,Nt,vt.data):e.texImage2D(i.TEXTURE_2D,ct,_t,vt.width,vt.height,0,Wt,Nt,vt.data);y.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(i.TEXTURE_2D,Gt,_t,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,et.width,et.height,Wt,Nt,et.data)):e.texImage2D(i.TEXTURE_2D,0,_t,et.width,et.height,0,Wt,Nt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){qt&&ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,_t,Bt[0].width,Bt[0].height,et.depth);for(let ct=0,L=Bt.length;ct<L;ct++)vt=Bt[ct],y.format!==hn?Wt!==null?qt?e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,et.depth,Wt,vt.data,0,0):e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ct,_t,vt.width,vt.height,et.depth,0,vt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage3D(i.TEXTURE_2D_ARRAY,ct,0,0,0,vt.width,vt.height,et.depth,Wt,Nt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,ct,_t,vt.width,vt.height,et.depth,0,Wt,Nt,vt.data)}else{qt&&ce&&e.texStorage2D(i.TEXTURE_2D,Gt,_t,Bt[0].width,Bt[0].height);for(let ct=0,L=Bt.length;ct<L;ct++)vt=Bt[ct],y.format!==hn?Wt!==null?qt?e.compressedTexSubImage2D(i.TEXTURE_2D,ct,0,0,vt.width,vt.height,Wt,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,ct,_t,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,vt.width,vt.height,Wt,Nt,vt.data):e.texImage2D(i.TEXTURE_2D,ct,_t,vt.width,vt.height,0,Wt,Nt,vt.data)}else if(y.isDataArrayTexture)qt?(ce&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Gt,_t,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,Wt,Nt,et.data)):e.texImage3D(i.TEXTURE_2D_ARRAY,0,_t,et.width,et.height,et.depth,0,Wt,Nt,et.data);else if(y.isData3DTexture)qt?(ce&&e.texStorage3D(i.TEXTURE_3D,Gt,_t,et.width,et.height,et.depth),e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,Wt,Nt,et.data)):e.texImage3D(i.TEXTURE_3D,0,_t,et.width,et.height,et.depth,0,Wt,Nt,et.data);else if(y.isFramebufferTexture){if(ce)if(qt)e.texStorage2D(i.TEXTURE_2D,Gt,_t,et.width,et.height);else{let ct=et.width,L=et.height;for(let ft=0;ft<Gt;ft++)e.texImage2D(i.TEXTURE_2D,ft,_t,ct,L,0,Wt,Nt,null),ct>>=1,L>>=1}}else if(Bt.length>0&&jt){qt&&ce&&e.texStorage2D(i.TEXTURE_2D,Gt,_t,Bt[0].width,Bt[0].height);for(let ct=0,L=Bt.length;ct<L;ct++)vt=Bt[ct],qt?e.texSubImage2D(i.TEXTURE_2D,ct,0,0,Wt,Nt,vt):e.texImage2D(i.TEXTURE_2D,ct,_t,Wt,Nt,vt);y.generateMipmaps=!1}else qt?(ce&&e.texStorage2D(i.TEXTURE_2D,Gt,_t,et.width,et.height),e.texSubImage2D(i.TEXTURE_2D,0,0,0,Wt,Nt,et)):e.texImage2D(i.TEXTURE_2D,0,_t,Wt,Nt,et);S(y,jt)&&v(nt),At.__version=$.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function yt(A,y,O){if(y.image.length!==6)return;let nt=Q(A,y),tt=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+O);let $=n.get(tt);if(tt.version!==$.__version||nt===!0){e.activeTexture(i.TEXTURE0+O);let At=Zt.getPrimaries(Zt.workingColorSpace),ut=y.colorSpace===tn?null:Zt.getPrimaries(y.colorSpace),xt=y.colorSpace===tn||At===ut?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Tt=y.isCompressedTexture||y.image[0].isCompressedTexture,Ut=y.image[0]&&y.image[0].isDataTexture,et=[];for(let ct=0;ct<6;ct++)!Tt&&!Ut?et[ct]=x(y.image[ct],!1,!0,s.maxCubemapSize):et[ct]=Ut?y.image[ct].image:y.image[ct],et[ct]=mt(y,et[ct]);let jt=et[0],Wt=m(jt)||a,Nt=r.convert(y.format,y.colorSpace),_t=r.convert(y.type),vt=w(y.internalFormat,Nt,_t,y.colorSpace),Bt=a&&y.isVideoTexture!==!0,qt=$.__version===void 0||nt===!0,ce=D(y,jt,Wt);B(i.TEXTURE_CUBE_MAP,y,Wt);let Gt;if(Tt){Bt&&qt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,vt,jt.width,jt.height);for(let ct=0;ct<6;ct++){Gt=et[ct].mipmaps;for(let L=0;L<Gt.length;L++){let ft=Gt[L];y.format!==hn?Nt!==null?Bt?e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,vt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,0,0,ft.width,ft.height,Nt,_t,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L,vt,ft.width,ft.height,0,Nt,_t,ft.data)}}}else{Gt=y.mipmaps,Bt&&qt&&(Gt.length>0&&ce++,e.texStorage2D(i.TEXTURE_CUBE_MAP,ce,vt,et[0].width,et[0].height));for(let ct=0;ct<6;ct++)if(Ut){Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,et[ct].width,et[ct].height,Nt,_t,et[ct].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,vt,et[ct].width,et[ct].height,0,Nt,_t,et[ct].data);for(let L=0;L<Gt.length;L++){let dt=Gt[L].image[ct].image;Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,dt.width,dt.height,Nt,_t,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,vt,dt.width,dt.height,0,Nt,_t,dt.data)}}else{Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,0,0,Nt,_t,et[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0,vt,Nt,_t,et[ct]);for(let L=0;L<Gt.length;L++){let ft=Gt[L];Bt?e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,0,0,Nt,_t,ft.image[ct]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,L+1,vt,Nt,_t,ft.image[ct])}}}S(y,Wt)&&v(i.TEXTURE_CUBE_MAP),$.__version=tt.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function pt(A,y,O,nt,tt,$){let At=r.convert(O.format,O.colorSpace),ut=r.convert(O.type),xt=w(O.internalFormat,At,ut,O.colorSpace);if(!n.get(y).__hasExternalTextures){let Ut=Math.max(1,y.width>>$),et=Math.max(1,y.height>>$);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,$,xt,Ut,et,y.depth,0,At,ut,null):e.texImage2D(tt,$,xt,Ut,et,0,At,ut,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Z(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,tt,n.get(O).__webglTexture,0,rt(y)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,tt,n.get(O).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function Et(A,y,O){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer&&!y.stencilBuffer){let nt=a===!0?i.DEPTH_COMPONENT24:i.DEPTH_COMPONENT16;if(O||Z(y)){let tt=y.depthTexture;tt&&tt.isDepthTexture&&(tt.type===Xn?nt=i.DEPTH_COMPONENT32F:tt.type===Vn&&(nt=i.DEPTH_COMPONENT24));let $=rt(y);Z(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,$,nt,y.width,y.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,$,nt,y.width,y.height)}else i.renderbufferStorage(i.RENDERBUFFER,nt,y.width,y.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(y.depthBuffer&&y.stencilBuffer){let nt=rt(y);O&&Z(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,y.width,y.height):Z(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,nt,i.DEPTH24_STENCIL8,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{let nt=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let tt=0;tt<nt.length;tt++){let $=nt[tt],At=r.convert($.format,$.colorSpace),ut=r.convert($.type),xt=w($.internalFormat,At,ut,$.colorSpace),Tt=rt(y);O&&Z(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,xt,y.width,y.height):Z(y)?c.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Tt,xt,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,xt,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X(y.depthTexture,0);let nt=n.get(y.depthTexture).__webglTexture,tt=rt(y);if(y.depthTexture.format===oi)Z(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(y.depthTexture.format===Vi)Z(y)?c.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,tt):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Mt(A){let y=n.get(A),O=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,A)}else if(O){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]=i.createRenderbuffer(),Et(y.__webglDepthbuffer[nt],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=i.createRenderbuffer(),Et(y.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,y,O){let nt=n.get(A);y!==void 0&&pt(nt.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),O!==void 0&&Mt(A)}function P(A){let y=A.texture,O=n.get(A),nt=n.get(y);A.addEventListener("dispose",j),A.isWebGLMultipleRenderTargets!==!0&&(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,o.memory.textures++);let tt=A.isWebGLCubeRenderTarget===!0,$=A.isWebGLMultipleRenderTargets===!0,At=m(A)||a;if(tt){O.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer[ut]=[];for(let xt=0;xt<y.mipmaps.length;xt++)O.__webglFramebuffer[ut][xt]=i.createFramebuffer()}else O.__webglFramebuffer[ut]=i.createFramebuffer()}else{if(a&&y.mipmaps&&y.mipmaps.length>0){O.__webglFramebuffer=[];for(let ut=0;ut<y.mipmaps.length;ut++)O.__webglFramebuffer[ut]=i.createFramebuffer()}else O.__webglFramebuffer=i.createFramebuffer();if($)if(s.drawBuffers){let ut=A.texture;for(let xt=0,Tt=ut.length;xt<Tt;xt++){let Ut=n.get(ut[xt]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&A.samples>0&&Z(A)===!1){let ut=$?y:[y];O.__webglMultisampledFramebuffer=i.createFramebuffer(),O.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){let Tt=ut[xt];O.__webglColorRenderbuffer[xt]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,O.__webglColorRenderbuffer[xt]);let Ut=r.convert(Tt.format,Tt.colorSpace),et=r.convert(Tt.type),jt=w(Tt.internalFormat,Ut,et,Tt.colorSpace,A.isXRRenderTarget===!0),Wt=rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Wt,jt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+xt,i.RENDERBUFFER,O.__webglColorRenderbuffer[xt])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=i.createRenderbuffer(),Et(O.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(tt){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),B(i.TEXTURE_CUBE_MAP,y,At);for(let ut=0;ut<6;ut++)if(a&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)pt(O.__webglFramebuffer[ut][xt],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else pt(O.__webglFramebuffer[ut],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);S(y,At)&&v(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if($){let ut=A.texture;for(let xt=0,Tt=ut.length;xt<Tt;xt++){let Ut=ut[xt],et=n.get(Ut);e.bindTexture(i.TEXTURE_2D,et.__webglTexture),B(i.TEXTURE_2D,Ut,At),pt(O.__webglFramebuffer,A,Ut,i.COLOR_ATTACHMENT0+xt,i.TEXTURE_2D,0),S(Ut,At)&&v(i.TEXTURE_2D)}e.unbindTexture()}else{let ut=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(a?ut=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,nt.__webglTexture),B(ut,y,At),a&&y.mipmaps&&y.mipmaps.length>0)for(let xt=0;xt<y.mipmaps.length;xt++)pt(O.__webglFramebuffer[xt],A,y,i.COLOR_ATTACHMENT0,ut,xt);else pt(O.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ut,0);S(y,At)&&v(ut),e.unbindTexture()}A.depthBuffer&&Mt(A)}function ot(A){let y=m(A)||a,O=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let nt=0,tt=O.length;nt<tt;nt++){let $=O[nt];if(S($,y)){let At=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ut=n.get($).__webglTexture;e.bindTexture(At,ut),v(At),e.unbindTexture()}}}function J(A){if(a&&A.samples>0&&Z(A)===!1){let y=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],O=A.width,nt=A.height,tt=i.COLOR_BUFFER_BIT,$=[],At=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ut=n.get(A),xt=A.isWebGLMultipleRenderTargets===!0;if(xt)for(let Tt=0;Tt<y.length;Tt++)e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Tt=0;Tt<y.length;Tt++){$.push(i.COLOR_ATTACHMENT0+Tt),A.depthBuffer&&$.push(At);let Ut=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Ut===!1&&(A.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),xt&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Tt]),Ut===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[At]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[At])),xt){let et=n.get(y[Tt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,O,nt,0,0,O,nt,tt,i.NEAREST),l&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,$)}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),xt)for(let Tt=0;Tt<y.length;Tt++){e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.RENDERBUFFER,ut.__webglColorRenderbuffer[Tt]);let Ut=n.get(y[Tt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,ut.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Tt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function rt(A){return Math.min(s.maxSamples,A.samples)}function Z(A){let y=n.get(A);return a&&A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function St(A){let y=o.render.frame;h.get(A)!==y&&(h.set(A,y),A.update())}function mt(A,y){let O=A.colorSpace,nt=A.format,tt=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===ro||O!==In&&O!==tn&&(Zt.getTransfer(O)===ee?a===!1?t.has("EXT_sRGB")===!0&&nt===hn?(A.format=ro,A.minFilter=$e,A.generateMipmaps=!1):y=wr.sRGBToLinear(y):(nt!==hn||tt!==jn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),y}this.allocateTextureUnit=C,this.resetTextureUnits=st,this.setTexture2D=X,this.setTexture2DArray=K,this.setTexture3D=q,this.setTextureCube=N,this.rebindTextures=It,this.setupRenderTarget=P,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=Z}function E0(i,t,e){let n=e.isWebGL2;function s(r,o=tn){let a,c=Zt.getTransfer(o);if(r===jn)return i.UNSIGNED_BYTE;if(r===ph)return i.UNSIGNED_SHORT_4_4_4_4;if(r===mh)return i.UNSIGNED_SHORT_5_5_5_1;if(r===of)return i.BYTE;if(r===cf)return i.SHORT;if(r===Jo)return i.UNSIGNED_SHORT;if(r===dh)return i.INT;if(r===Vn)return i.UNSIGNED_INT;if(r===Xn)return i.FLOAT;if(r===As)return n?i.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===lf)return i.ALPHA;if(r===hn)return i.RGBA;if(r===hf)return i.LUMINANCE;if(r===uf)return i.LUMINANCE_ALPHA;if(r===oi)return i.DEPTH_COMPONENT;if(r===Vi)return i.DEPTH_STENCIL;if(r===ro)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Ko)return i.RED;if(r===gh)return i.RED_INTEGER;if(r===ff)return i.RG;if(r===xh)return i.RG_INTEGER;if(r===vh)return i.RGBA_INTEGER;if(r===Ma||r===ba||r===Sa||r===_a)if(c===ee)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===Ma)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===ba)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===_a)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===Ma)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===ba)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Sa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===_a)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bc||r===zc||r===Fc||r===kc)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Bc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===zc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===kc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===yh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Gc||r===Vc)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Gc)return c===ee?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Vc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Xc||r===Wc||r===jc||r===qc||r===Yc||r===Zc||r===Jc||r===Kc||r===Qc||r===$c||r===tl||r===el||r===nl||r===il)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Xc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===jc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===qc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Yc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Jc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Kc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Qc)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$c)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===tl)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===el)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===nl)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===il)return c===ee?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===wa||r===sl||r===rl)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===wa)return c===ee?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===sl)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===rl)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===df||r===al||r===ol||r===cl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===wa)return a.COMPRESSED_RED_RGTC1_EXT;if(r===al)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ol)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===cl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ai?n?i.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[r]!==void 0?i[r]:null}return{convert:s}}var Mo=class extends we{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Ce=class extends ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},T0={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ce,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ce,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ce,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let x of t.hand.values()){let m=e.getJointPose(x,n),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;l.inputState.pinching&&f>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(T0)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ce;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},bo=class extends qn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,f=null,d=null,g=null,x=e.getContextAttributes(),m=null,p=null,S=[],v=[],w=new at,D=null,E=new we;E.layers.enable(1),E.viewport=new re;let T=new we;T.layers.enable(2),T.viewport=new re;let j=[E,T],M=new Mo;M.layers.enable(1),M.layers.enable(2);let _=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let Q=S[B];return Q===void 0&&(Q=new ps,S[B]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(B){let Q=S[B];return Q===void 0&&(Q=new ps,S[B]=Q),Q.getGripSpace()},this.getHand=function(B){let Q=S[B];return Q===void 0&&(Q=new ps,S[B]=Q),Q.getHandSpace()};function Y(B){let Q=v.indexOf(B.inputSource);if(Q===-1)return;let ht=S[Q];ht!==void 0&&(ht.update(B.inputSource,B.frame,l||o),ht.dispatchEvent({type:B.type,data:B.inputSource}))}function st(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",st),s.removeEventListener("inputsourceschange",C);for(let B=0;B<S.length;B++){let Q=v[B];Q!==null&&(v[B]=null,S[B].disconnect(Q))}_=null,H=null,t.setRenderTarget(m),d=null,f=null,u=null,s=null,p=null,it.stop(),n.isPresenting=!1,t.setPixelRatio(D),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){r=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){a=B,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(B){l=B},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(B){if(s=B,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",st),s.addEventListener("inputsourceschange",C),x.xrCompatible!==!0&&await e.makeXRCompatible(),D=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let Q={antialias:s.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,Q),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),p=new Nn(d.framebufferWidth,d.framebufferHeight,{format:hn,type:jn,colorSpace:t.outputColorSpace,stencilBuffer:x.stencil})}else{let Q=null,ht=null,yt=null;x.depth&&(yt=x.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Q=x.stencil?Vi:oi,ht=x.stencil?ai:Vn);let pt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(pt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),p=new Nn(f.textureWidth,f.textureHeight,{format:hn,type:jn,depthTexture:new Nr(f.textureWidth,f.textureHeight,ht,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:x.stencil,colorSpace:t.outputColorSpace,samples:x.antialias?4:0});let Et=t.properties.get(p);Et.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),it.setContext(s),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(B){for(let Q=0;Q<B.removed.length;Q++){let ht=B.removed[Q],yt=v.indexOf(ht);yt>=0&&(v[yt]=null,S[yt].disconnect(ht))}for(let Q=0;Q<B.added.length;Q++){let ht=B.added[Q],yt=v.indexOf(ht);if(yt===-1){for(let Et=0;Et<S.length;Et++)if(Et>=v.length){v.push(ht),yt=Et;break}else if(v[Et]===null){v[Et]=ht,yt=Et;break}if(yt===-1)break}let pt=S[yt];pt&&pt.connect(ht)}}let U=new R,X=new R;function K(B,Q,ht){U.setFromMatrixPosition(Q.matrixWorld),X.setFromMatrixPosition(ht.matrixWorld);let yt=U.distanceTo(X),pt=Q.projectionMatrix.elements,Et=ht.projectionMatrix.elements,Lt=pt[14]/(pt[10]-1),Mt=pt[14]/(pt[10]+1),It=(pt[9]+1)/pt[5],P=(pt[9]-1)/pt[5],ot=(pt[8]-1)/pt[0],J=(Et[8]+1)/Et[0],rt=Lt*ot,Z=Lt*J,St=yt/(-ot+J),mt=St*-ot;Q.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX(mt),B.translateZ(St),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert();let A=Lt+St,y=Mt+St,O=rt-mt,nt=Z+(yt-mt),tt=It*Mt/y*A,$=P*Mt/y*A;B.projectionMatrix.makePerspective(O,nt,tt,$,A,y),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}function q(B,Q){Q===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(Q.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(s===null)return;M.near=T.near=E.near=B.near,M.far=T.far=E.far=B.far,(_!==M.near||H!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),_=M.near,H=M.far);let Q=B.parent,ht=M.cameras;q(M,Q);for(let yt=0;yt<ht.length;yt++)q(ht[yt],Q);ht.length===2?K(M,E,T):M.projectionMatrix.copy(E.projectionMatrix),N(B,M,Q)};function N(B,Q,ht){ht===null?B.matrix.copy(Q.matrixWorld):(B.matrix.copy(ht.matrixWorld),B.matrix.invert(),B.matrix.multiply(Q.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(Q.projectionMatrix),B.projectionMatrixInverse.copy(Q.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Xi*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&d===null))return c},this.setFoveation=function(B){c=B,f!==null&&(f.fixedFoveation=B),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=B)};let W=null;function V(B,Q){if(h=Q.getViewerPose(l||o),g=Q,h!==null){let ht=h.views;d!==null&&(t.setRenderTargetFramebuffer(p,d.framebuffer),t.setRenderTarget(p));let yt=!1;ht.length!==M.cameras.length&&(M.cameras.length=0,yt=!0);for(let pt=0;pt<ht.length;pt++){let Et=ht[pt],Lt=null;if(d!==null)Lt=d.getViewport(Et);else{let It=u.getViewSubImage(f,Et);Lt=It.viewport,pt===0&&(t.setRenderTargetTextures(p,It.colorTexture,f.ignoreDepthValues?void 0:It.depthStencilTexture),t.setRenderTarget(p))}let Mt=j[pt];Mt===void 0&&(Mt=new we,Mt.layers.enable(pt),Mt.viewport=new re,j[pt]=Mt),Mt.matrix.fromArray(Et.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(Et.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(M.matrix.copy(Mt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),yt===!0&&M.cameras.push(Mt)}}for(let ht=0;ht<S.length;ht++){let yt=v[ht],pt=S[ht];yt!==null&&pt!==void 0&&pt.update(yt,Q,l||o)}W&&W(B,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}let it=new Eh;it.setAnimationLoop(V),this.setAnimationLoop=function(B){W=B},this.dispose=function(){}}};function P0(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,wh(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,S,v,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,S,v):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Se&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Se&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let S=t.get(p).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;let v=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*v,e(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,S,v){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*S,m.scale.value=v*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,S){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Se&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let S=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function R0(i,t,e,n){let s={},r={},o=[],a=e.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,v){let w=v.program;n.uniformBlockBinding(S,w)}function l(S,v){let w=s[S.id];w===void 0&&(g(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",m));let D=v.program;n.updateUBOMapping(S,D);let E=t.render.frame;r[S.id]!==E&&(f(S),r[S.id]=E)}function h(S){let v=u();S.__bindingPointIndex=v;let w=i.createBuffer(),D=S.__size,E=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function u(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let v=s[S.id],w=S.uniforms,D=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let E=0,T=w.length;E<T;E++){let j=Array.isArray(w[E])?w[E]:[w[E]];for(let M=0,_=j.length;M<_;M++){let H=j[M];if(d(H,E,M,D)===!0){let Y=H.__offset,st=Array.isArray(H.value)?H.value:[H.value],C=0;for(let U=0;U<st.length;U++){let X=st[U],K=x(X);typeof X=="number"||typeof X=="boolean"?(H.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,Y+C,H.__data)):X.isMatrix3?(H.__data[0]=X.elements[0],H.__data[1]=X.elements[1],H.__data[2]=X.elements[2],H.__data[3]=0,H.__data[4]=X.elements[3],H.__data[5]=X.elements[4],H.__data[6]=X.elements[5],H.__data[7]=0,H.__data[8]=X.elements[6],H.__data[9]=X.elements[7],H.__data[10]=X.elements[8],H.__data[11]=0):(X.toArray(H.__data,C),C+=K.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,Y,H.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(S,v,w,D){let E=S.value,T=v+"_"+w;if(D[T]===void 0)return typeof E=="number"||typeof E=="boolean"?D[T]=E:D[T]=E.clone(),!0;{let j=D[T];if(typeof E=="number"||typeof E=="boolean"){if(j!==E)return D[T]=E,!0}else if(j.equals(E)===!1)return j.copy(E),!0}return!1}function g(S){let v=S.uniforms,w=0,D=16;for(let T=0,j=v.length;T<j;T++){let M=Array.isArray(v[T])?v[T]:[v[T]];for(let _=0,H=M.length;_<H;_++){let Y=M[_],st=Array.isArray(Y.value)?Y.value:[Y.value];for(let C=0,U=st.length;C<U;C++){let X=st[C],K=x(X),q=w%D;q!==0&&D-q<K.boundary&&(w+=D-q),Y.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=w,w+=K.storage}}}let E=w%D;return E>0&&(w+=D-E),S.__size=w,S.__cache={},this}function x(S){let v={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(v.boundary=4,v.storage=4):S.isVector2?(v.boundary=8,v.storage=8):S.isVector3||S.isColor?(v.boundary=16,v.storage=12):S.isVector4?(v.boundary=16,v.storage=16):S.isMatrix3?(v.boundary=48,v.storage=48):S.isMatrix4?(v.boundary=64,v.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),v}function m(S){let v=S.target;v.removeEventListener("dispose",m);let w=o.indexOf(v.__bindingPointIndex);o.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function p(){for(let S in s)i.deleteBuffer(s[S]);o=[],s={},r={}}return{bind:c,update:l,dispose:p}}var bs=class{constructor(t={}){let{canvas:e=Bf(),context:n=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=o;let d=new Uint32Array(4),g=new Int32Array(4),x=null,m=null,p=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ue,this._useLegacyLights=!1,this.toneMapping=vn,this.toneMappingExposure=1;let v=this,w=!1,D=0,E=0,T=null,j=-1,M=null,_=new re,H=new re,Y=null,st=new wt(0),C=0,U=e.width,X=e.height,K=1,q=null,N=null,W=new re(0,0,U,X),V=new re(0,0,U,X),it=!1,B=new Ms,Q=!1,ht=!1,yt=null,pt=new ne,Et=new at,Lt=new R,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function It(){return T===null?K:1}let P=n;function ot(b,I){for(let k=0;k<b.length;k++){let G=b[k],z=e.getContext(G,I);if(z!==null)return z}return null}try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${qo}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",ft,!1),P===null){let I=["webgl2","webgl","experimental-webgl"];if(v.isWebGL1Renderer===!0&&I.shift(),P=ot(I,b),P===null)throw ot(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let J,rt,Z,St,mt,A,y,O,nt,tt,$,At,ut,xt,Tt,Ut,et,jt,Wt,Nt,_t,vt,Bt,qt;function ce(){J=new Ym(P),rt=new Gm(P,J,t),J.init(rt),vt=new E0(P,J,rt),Z=new _0(P,J,rt),St=new Km(P),mt=new f0,A=new w0(P,J,Z,mt,rt,vt,St),y=new Xm(v),O=new qm(v),nt=new rd(P,rt),Bt=new Fm(P,J,nt,rt),tt=new Zm(P,nt,St,Bt),$=new eg(P,tt,nt,St),Wt=new tg(P,rt,A),Ut=new Vm(mt),At=new u0(v,y,O,J,rt,Bt,Ut),ut=new P0(v,mt),xt=new p0,Tt=new A0(J,rt),jt=new zm(v,y,O,Z,$,f,c),et=new S0(v,$,rt),qt=new R0(P,St,rt,Z),Nt=new km(P,J,St,rt),_t=new Jm(P,J,St,rt),St.programs=At.programs,v.capabilities=rt,v.extensions=J,v.properties=mt,v.renderLists=xt,v.shadowMap=et,v.state=Z,v.info=St}ce();let Gt=new bo(v,P);this.xr=Gt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let b=J.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=J.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(b){b!==void 0&&(K=b,this.setSize(U,X,!1))},this.getSize=function(b){return b.set(U,X)},this.setSize=function(b,I,k=!0){if(Gt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}U=b,X=I,e.width=Math.floor(b*K),e.height=Math.floor(I*K),k===!0&&(e.style.width=b+"px",e.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(U*K,X*K).floor()},this.setDrawingBufferSize=function(b,I,k){U=b,X=I,K=k,e.width=Math.floor(b*k),e.height=Math.floor(I*k),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(W)},this.setViewport=function(b,I,k,G){b.isVector4?W.set(b.x,b.y,b.z,b.w):W.set(b,I,k,G),Z.viewport(_.copy(W).multiplyScalar(K).floor())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,I,k,G){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,I,k,G),Z.scissor(H.copy(V).multiplyScalar(K).floor())},this.getScissorTest=function(){return it},this.setScissorTest=function(b){Z.setScissorTest(it=b)},this.setOpaqueSort=function(b){q=b},this.setTransparentSort=function(b){N=b},this.getClearColor=function(b){return b.copy(jt.getClearColor())},this.setClearColor=function(){jt.setClearColor.apply(jt,arguments)},this.getClearAlpha=function(){return jt.getClearAlpha()},this.setClearAlpha=function(){jt.setClearAlpha.apply(jt,arguments)},this.clear=function(b=!0,I=!0,k=!0){let G=0;if(b){let z=!1;if(T!==null){let gt=T.texture.format;z=gt===vh||gt===xh||gt===gh}if(z){let gt=T.texture.type,bt=gt===jn||gt===Vn||gt===Jo||gt===ai||gt===ph||gt===mh,Rt=jt.getClearColor(),Dt=jt.getClearAlpha(),Ft=Rt.r,Ot=Rt.g,Ht=Rt.b;bt?(d[0]=Ft,d[1]=Ot,d[2]=Ht,d[3]=Dt,P.clearBufferuiv(P.COLOR,0,d)):(g[0]=Ft,g[1]=Ot,g[2]=Ht,g[3]=Dt,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}I&&(G|=P.DEPTH_BUFFER_BIT),k&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),xt.dispose(),Tt.dispose(),mt.dispose(),y.dispose(),O.dispose(),$.dispose(),Bt.dispose(),qt.dispose(),At.dispose(),Gt.dispose(),Gt.removeEventListener("sessionstart",De),Gt.removeEventListener("sessionend",$t),yt&&(yt.dispose(),yt=null),Ie.stop()};function ct(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let b=St.autoReset,I=et.enabled,k=et.autoUpdate,G=et.needsUpdate,z=et.type;ce(),St.autoReset=b,et.enabled=I,et.autoUpdate=k,et.needsUpdate=G,et.type=z}function ft(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function dt(b){let I=b.target;I.removeEventListener("dispose",dt),Ct(I)}function Ct(b){Pt(b),mt.remove(b)}function Pt(b){let I=mt.get(b).programs;I!==void 0&&(I.forEach(function(k){At.releaseProgram(k)}),b.isShaderMaterial&&At.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,k,G,z,gt){I===null&&(I=Mt);let bt=z.isMesh&&z.matrixWorld.determinant()<0,Rt=Su(b,I,k,G,z);Z.setMaterial(G,bt);let Dt=k.index,Ft=1;if(G.wireframe===!0){if(Dt=tt.getWireframeAttribute(k),Dt===void 0)return;Ft=2}let Ot=k.drawRange,Ht=k.attributes.position,he=Ot.start*Ft,We=(Ot.start+Ot.count)*Ft;gt!==null&&(he=Math.max(he,gt.start*Ft),We=Math.min(We,(gt.start+gt.count)*Ft)),Dt!==null?(he=Math.max(he,0),We=Math.min(We,Dt.count)):Ht!=null&&(he=Math.max(he,0),We=Math.min(We,Ht.count));let Me=We-he;if(Me<0||Me===1/0)return;Bt.setup(z,G,Rt,k,Dt);let _n,ae=Nt;if(Dt!==null&&(_n=nt.get(Dt),ae=_t,ae.setIndex(_n)),z.isMesh)G.wireframe===!0?(Z.setLineWidth(G.wireframeLinewidth*It()),ae.setMode(P.LINES)):ae.setMode(P.TRIANGLES);else if(z.isLine){let Vt=G.linewidth;Vt===void 0&&(Vt=1),Z.setLineWidth(Vt*It()),z.isLineSegments?ae.setMode(P.LINES):z.isLineLoop?ae.setMode(P.LINE_LOOP):ae.setMode(P.LINE_STRIP)}else z.isPoints?ae.setMode(P.POINTS):z.isSprite&&ae.setMode(P.TRIANGLES);if(z.isBatchedMesh)ae.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else if(z.isInstancedMesh)ae.renderInstances(he,Me,z.count);else if(k.isInstancedBufferGeometry){let Vt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ga=Math.min(k.instanceCount,Vt);ae.renderInstances(he,Me,ga)}else ae.render(he,Me)};function Kt(b,I,k){b.transparent===!0&&b.side===Re&&b.forceSinglePass===!1?(b.side=Se,b.needsUpdate=!0,Gs(b,I,k),b.side=en,b.needsUpdate=!0,Gs(b,I,k),b.side=Re):Gs(b,I,k)}this.compile=function(b,I,k=null){k===null&&(k=b),m=Tt.get(k),m.init(),S.push(m),k.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),b!==k&&b.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(m.pushLight(z),z.castShadow&&m.pushShadow(z))}),m.setupLights(v._useLegacyLights);let G=new Set;return b.traverse(function(z){let gt=z.material;if(gt)if(Array.isArray(gt))for(let bt=0;bt<gt.length;bt++){let Rt=gt[bt];Kt(Rt,k,z),G.add(Rt)}else Kt(gt,k,z),G.add(gt)}),S.pop(),m=null,G},this.compileAsync=function(b,I,k=null){let G=this.compile(b,I,k);return new Promise(z=>{function gt(){if(G.forEach(function(bt){mt.get(bt).currentProgram.isReady()&&G.delete(bt)}),G.size===0){z(b);return}setTimeout(gt,10)}J.get("KHR_parallel_shader_compile")!==null?gt():setTimeout(gt,10)})};let Qt=null;function Ae(b){Qt&&Qt(b)}function De(){Ie.stop()}function $t(){Ie.start()}let Ie=new Eh;Ie.setAnimationLoop(Ae),typeof self<"u"&&Ie.setContext(self),this.setAnimationLoop=function(b){Qt=b,Gt.setAnimationLoop(b),b===null?Ie.stop():Ie.start()},Gt.addEventListener("sessionstart",De),Gt.addEventListener("sessionend",$t),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Gt.enabled===!0&&Gt.isPresenting===!0&&(Gt.cameraAutoUpdate===!0&&Gt.updateCamera(I),I=Gt.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,I,T),m=Tt.get(b,S.length),m.init(),S.push(m),pt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),B.setFromProjectionMatrix(pt),ht=this.localClippingEnabled,Q=Ut.init(this.clippingPlanes,ht),x=xt.get(b,p.length),x.init(),p.push(x),gn(b,I,0,v.sortObjects),x.finish(),v.sortObjects===!0&&x.sort(q,N),this.info.render.frame++,Q===!0&&Ut.beginShadows();let k=m.state.shadowsArray;if(et.render(k,b,I),Q===!0&&Ut.endShadows(),this.info.autoReset===!0&&this.info.reset(),jt.render(x,b),m.setupLights(v._useLegacyLights),I.isArrayCamera){let G=I.cameras;for(let z=0,gt=G.length;z<gt;z++){let bt=G[z];wc(x,b,bt,bt.viewport)}}else wc(x,b,I);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(v,b,I),Bt.resetDefaultState(),j=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,p.pop(),p.length>0?x=p[p.length-1]:x=null};function gn(b,I,k,G){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)k=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)m.pushLight(b),b.castShadow&&m.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||B.intersectsSprite(b)){G&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(pt);let bt=$.update(b),Rt=b.material;Rt.visible&&x.push(b,bt,Rt,k,Lt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||B.intersectsObject(b))){let bt=$.update(b),Rt=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(bt.boundingSphere===null&&bt.computeBoundingSphere(),Lt.copy(bt.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(pt)),Array.isArray(Rt)){let Dt=bt.groups;for(let Ft=0,Ot=Dt.length;Ft<Ot;Ft++){let Ht=Dt[Ft],he=Rt[Ht.materialIndex];he&&he.visible&&x.push(b,bt,he,k,Lt.z,Ht)}}else Rt.visible&&x.push(b,bt,Rt,k,Lt.z,null)}}let gt=b.children;for(let bt=0,Rt=gt.length;bt<Rt;bt++)gn(gt[bt],I,k,G)}function wc(b,I,k,G){let z=b.opaque,gt=b.transmissive,bt=b.transparent;m.setupLightsView(k),Q===!0&&Ut.setGlobalState(v.clippingPlanes,k),gt.length>0&&bu(z,gt,I,k),G&&Z.viewport(_.copy(G)),z.length>0&&ks(z,I,k),gt.length>0&&ks(gt,I,k),bt.length>0&&ks(bt,I,k),Z.buffers.depth.setTest(!0),Z.buffers.depth.setMask(!0),Z.buffers.color.setMask(!0),Z.setPolygonOffset(!1)}function bu(b,I,k,G){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;let gt=rt.isWebGL2;yt===null&&(yt=new Nn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?As:jn,minFilter:ys,samples:gt?4:0})),v.getDrawingBufferSize(Et),gt?yt.setSize(Et.x,Et.y):yt.setSize(Sr(Et.x),Sr(Et.y));let bt=v.getRenderTarget();v.setRenderTarget(yt),v.getClearColor(st),C=v.getClearAlpha(),C<1&&v.setClearColor(16777215,.5),v.clear();let Rt=v.toneMapping;v.toneMapping=vn,ks(b,k,G),A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt);let Dt=!1;for(let Ft=0,Ot=I.length;Ft<Ot;Ft++){let Ht=I[Ft],he=Ht.object,We=Ht.geometry,Me=Ht.material,_n=Ht.group;if(Me.side===Re&&he.layers.test(G.layers)){let ae=Me.side;Me.side=Se,Me.needsUpdate=!0,Ec(he,k,G,We,Me,_n),Me.side=ae,Me.needsUpdate=!0,Dt=!0}}Dt===!0&&(A.updateMultisampleRenderTarget(yt),A.updateRenderTargetMipmap(yt)),v.setRenderTarget(bt),v.setClearColor(st,C),v.toneMapping=Rt}function ks(b,I,k){let G=I.isScene===!0?I.overrideMaterial:null;for(let z=0,gt=b.length;z<gt;z++){let bt=b[z],Rt=bt.object,Dt=bt.geometry,Ft=G===null?bt.material:G,Ot=bt.group;Rt.layers.test(k.layers)&&Ec(Rt,I,k,Dt,Ft,Ot)}}function Ec(b,I,k,G,z,gt){b.onBeforeRender(v,I,k,G,z,gt),b.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),z.onBeforeRender(v,I,k,G,b,gt),z.transparent===!0&&z.side===Re&&z.forceSinglePass===!1?(z.side=Se,z.needsUpdate=!0,v.renderBufferDirect(k,I,G,z,b,gt),z.side=en,z.needsUpdate=!0,v.renderBufferDirect(k,I,G,z,b,gt),z.side=Re):v.renderBufferDirect(k,I,G,z,b,gt),b.onAfterRender(v,I,k,G,z,gt)}function Gs(b,I,k){I.isScene!==!0&&(I=Mt);let G=mt.get(b),z=m.state.lights,gt=m.state.shadowsArray,bt=z.state.version,Rt=At.getParameters(b,z.state,gt,I,k),Dt=At.getProgramCacheKey(Rt),Ft=G.programs;G.environment=b.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(b.isMeshStandardMaterial?O:y).get(b.envMap||G.environment),Ft===void 0&&(b.addEventListener("dispose",dt),Ft=new Map,G.programs=Ft);let Ot=Ft.get(Dt);if(Ot!==void 0){if(G.currentProgram===Ot&&G.lightsStateVersion===bt)return Pc(b,Rt),Ot}else Rt.uniforms=At.getUniforms(b),b.onBuild(k,Rt,v),b.onBeforeCompile(Rt,v),Ot=At.acquireProgram(Rt,Dt),Ft.set(Dt,Ot),G.uniforms=Rt.uniforms;let Ht=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ht.clippingPlanes=Ut.uniform),Pc(b,Rt),G.needsLights=wu(b),G.lightsStateVersion=bt,G.needsLights&&(Ht.ambientLightColor.value=z.state.ambient,Ht.lightProbe.value=z.state.probe,Ht.directionalLights.value=z.state.directional,Ht.directionalLightShadows.value=z.state.directionalShadow,Ht.spotLights.value=z.state.spot,Ht.spotLightShadows.value=z.state.spotShadow,Ht.rectAreaLights.value=z.state.rectArea,Ht.ltc_1.value=z.state.rectAreaLTC1,Ht.ltc_2.value=z.state.rectAreaLTC2,Ht.pointLights.value=z.state.point,Ht.pointLightShadows.value=z.state.pointShadow,Ht.hemisphereLights.value=z.state.hemi,Ht.directionalShadowMap.value=z.state.directionalShadowMap,Ht.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ht.spotShadowMap.value=z.state.spotShadowMap,Ht.spotLightMatrix.value=z.state.spotLightMatrix,Ht.spotLightMap.value=z.state.spotLightMap,Ht.pointShadowMap.value=z.state.pointShadowMap,Ht.pointShadowMatrix.value=z.state.pointShadowMatrix),G.currentProgram=Ot,G.uniformsList=null,Ot}function Tc(b){if(b.uniformsList===null){let I=b.currentProgram.getUniforms();b.uniformsList=Fi.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Pc(b,I){let k=mt.get(b);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Su(b,I,k,G,z){I.isScene!==!0&&(I=Mt),A.resetTextureUnits();let gt=I.fog,bt=G.isMeshStandardMaterial?I.environment:null,Rt=T===null?v.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:In,Dt=(G.isMeshStandardMaterial?O:y).get(G.envMap||bt),Ft=G.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ot=!!k.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ht=!!k.morphAttributes.position,he=!!k.morphAttributes.normal,We=!!k.morphAttributes.color,Me=vn;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(Me=v.toneMapping);let _n=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,ae=_n!==void 0?_n.length:0,Vt=mt.get(G),ga=m.state.lights;if(Q===!0&&(ht===!0||b!==M)){let Ke=b===M&&G.id===j;Ut.setState(G,b,Ke)}let le=!1;G.version===Vt.__version?(Vt.needsLights&&Vt.lightsStateVersion!==ga.state.version||Vt.outputColorSpace!==Rt||z.isBatchedMesh&&Vt.batching===!1||!z.isBatchedMesh&&Vt.batching===!0||z.isInstancedMesh&&Vt.instancing===!1||!z.isInstancedMesh&&Vt.instancing===!0||z.isSkinnedMesh&&Vt.skinning===!1||!z.isSkinnedMesh&&Vt.skinning===!0||z.isInstancedMesh&&Vt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Vt.instancingColor===!1&&z.instanceColor!==null||Vt.envMap!==Dt||G.fog===!0&&Vt.fog!==gt||Vt.numClippingPlanes!==void 0&&(Vt.numClippingPlanes!==Ut.numPlanes||Vt.numIntersection!==Ut.numIntersection)||Vt.vertexAlphas!==Ft||Vt.vertexTangents!==Ot||Vt.morphTargets!==Ht||Vt.morphNormals!==he||Vt.morphColors!==We||Vt.toneMapping!==Me||rt.isWebGL2===!0&&Vt.morphTargetsCount!==ae)&&(le=!0):(le=!0,Vt.__version=G.version);let Kn=Vt.currentProgram;le===!0&&(Kn=Gs(G,I,z));let Rc=!1,is=!1,xa=!1,Ee=Kn.getUniforms(),Qn=Vt.uniforms;if(Z.useProgram(Kn.program)&&(Rc=!0,is=!0,xa=!0),G.id!==j&&(j=G.id,is=!0),Rc||M!==b){Ee.setValue(P,"projectionMatrix",b.projectionMatrix),Ee.setValue(P,"viewMatrix",b.matrixWorldInverse);let Ke=Ee.map.cameraPosition;Ke!==void 0&&Ke.setValue(P,Lt.setFromMatrixPosition(b.matrixWorld)),rt.logarithmicDepthBuffer&&Ee.setValue(P,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Ee.setValue(P,"isOrthographic",b.isOrthographicCamera===!0),M!==b&&(M=b,is=!0,xa=!0)}if(z.isSkinnedMesh){Ee.setOptional(P,z,"bindMatrix"),Ee.setOptional(P,z,"bindMatrixInverse");let Ke=z.skeleton;Ke&&(rt.floatVertexTextures?(Ke.boneTexture===null&&Ke.computeBoneTexture(),Ee.setValue(P,"boneTexture",Ke.boneTexture,A)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}z.isBatchedMesh&&(Ee.setOptional(P,z,"batchingTexture"),Ee.setValue(P,"batchingTexture",z._matricesTexture,A));let va=k.morphAttributes;if((va.position!==void 0||va.normal!==void 0||va.color!==void 0&&rt.isWebGL2===!0)&&Wt.update(z,k,Kn),(is||Vt.receiveShadow!==z.receiveShadow)&&(Vt.receiveShadow=z.receiveShadow,Ee.setValue(P,"receiveShadow",z.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Qn.envMap.value=Dt,Qn.flipEnvMap.value=Dt.isCubeTexture&&Dt.isRenderTargetTexture===!1?-1:1),is&&(Ee.setValue(P,"toneMappingExposure",v.toneMappingExposure),Vt.needsLights&&_u(Qn,xa),gt&&G.fog===!0&&ut.refreshFogUniforms(Qn,gt),ut.refreshMaterialUniforms(Qn,G,K,X,yt),Fi.upload(P,Tc(Vt),Qn,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Fi.upload(P,Tc(Vt),Qn,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Ee.setValue(P,"center",z.center),Ee.setValue(P,"modelViewMatrix",z.modelViewMatrix),Ee.setValue(P,"normalMatrix",z.normalMatrix),Ee.setValue(P,"modelMatrix",z.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ke=G.uniformsGroups;for(let ya=0,Eu=Ke.length;ya<Eu;ya++)if(rt.isWebGL2){let Cc=Ke[ya];qt.update(Cc,Kn),qt.bind(Cc,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function _u(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function wu(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,k){mt.get(b.texture).__webglTexture=I,mt.get(b.depthTexture).__webglTexture=k;let G=mt.get(b);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=k===void 0,G.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(b,I){let k=mt.get(b);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,k=0){T=b,D=I,E=k;let G=!0,z=null,gt=!1,bt=!1;if(b){let Dt=mt.get(b);Dt.__useDefaultFramebuffer!==void 0?(Z.bindFramebuffer(P.FRAMEBUFFER,null),G=!1):Dt.__webglFramebuffer===void 0?A.setupRenderTarget(b):Dt.__hasExternalTextures&&A.rebindTextures(b,mt.get(b.texture).__webglTexture,mt.get(b.depthTexture).__webglTexture);let Ft=b.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(bt=!0);let Ot=mt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ot[I])?z=Ot[I][k]:z=Ot[I],gt=!0):rt.isWebGL2&&b.samples>0&&A.useMultisampledRTT(b)===!1?z=mt.get(b).__webglMultisampledFramebuffer:Array.isArray(Ot)?z=Ot[k]:z=Ot,_.copy(b.viewport),H.copy(b.scissor),Y=b.scissorTest}else _.copy(W).multiplyScalar(K).floor(),H.copy(V).multiplyScalar(K).floor(),Y=it;if(Z.bindFramebuffer(P.FRAMEBUFFER,z)&&rt.drawBuffers&&G&&Z.drawBuffers(b,z),Z.viewport(_),Z.scissor(H),Z.setScissorTest(Y),gt){let Dt=mt.get(b.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+I,Dt.__webglTexture,k)}else if(bt){let Dt=mt.get(b.texture),Ft=I||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Dt.__webglTexture,k||0,Ft)}j=-1},this.readRenderTargetPixels=function(b,I,k,G,z,gt,bt){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=mt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&bt!==void 0&&(Rt=Rt[bt]),Rt){Z.bindFramebuffer(P.FRAMEBUFFER,Rt);try{let Dt=b.texture,Ft=Dt.format,Ot=Dt.type;if(Ft!==hn&&vt.convert(Ft)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ht=Ot===As&&(J.has("EXT_color_buffer_half_float")||rt.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ot!==jn&&vt.convert(Ot)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ot===Xn&&(rt.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Ht){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-G&&k>=0&&k<=b.height-z&&P.readPixels(I,k,G,z,vt.convert(Ft),vt.convert(Ot),gt)}finally{let Dt=T!==null?mt.get(T).__webglFramebuffer:null;Z.bindFramebuffer(P.FRAMEBUFFER,Dt)}}},this.copyFramebufferToTexture=function(b,I,k=0){let G=Math.pow(2,-k),z=Math.floor(I.image.width*G),gt=Math.floor(I.image.height*G);A.setTexture2D(I,0),P.copyTexSubImage2D(P.TEXTURE_2D,k,0,0,b.x,b.y,z,gt),Z.unbindTexture()},this.copyTextureToTexture=function(b,I,k,G=0){let z=I.image.width,gt=I.image.height,bt=vt.convert(k.format),Rt=vt.convert(k.type);A.setTexture2D(k,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,k.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,k.unpackAlignment),I.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,G,b.x,b.y,z,gt,bt,Rt,I.image.data):I.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,G,b.x,b.y,I.mipmaps[0].width,I.mipmaps[0].height,bt,I.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,G,b.x,b.y,bt,Rt,I.image),G===0&&k.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Z.unbindTexture()},this.copyTextureToTexture3D=function(b,I,k,G,z=0){if(v.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let gt=b.max.x-b.min.x+1,bt=b.max.y-b.min.y+1,Rt=b.max.z-b.min.z+1,Dt=vt.convert(G.format),Ft=vt.convert(G.type),Ot;if(G.isData3DTexture)A.setTexture3D(G,0),Ot=P.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)A.setTexture2DArray(G,0),Ot=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,G.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,G.unpackAlignment);let Ht=P.getParameter(P.UNPACK_ROW_LENGTH),he=P.getParameter(P.UNPACK_IMAGE_HEIGHT),We=P.getParameter(P.UNPACK_SKIP_PIXELS),Me=P.getParameter(P.UNPACK_SKIP_ROWS),_n=P.getParameter(P.UNPACK_SKIP_IMAGES),ae=k.isCompressedTexture?k.mipmaps[z]:k.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,ae.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ae.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,b.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,b.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,b.min.z),k.isDataTexture||k.isData3DTexture?P.texSubImage3D(Ot,z,I.x,I.y,I.z,gt,bt,Rt,Dt,Ft,ae.data):k.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ot,z,I.x,I.y,I.z,gt,bt,Rt,Dt,ae.data)):P.texSubImage3D(Ot,z,I.x,I.y,I.z,gt,bt,Rt,Dt,Ft,ae),P.pixelStorei(P.UNPACK_ROW_LENGTH,Ht),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,he),P.pixelStorei(P.UNPACK_SKIP_PIXELS,We),P.pixelStorei(P.UNPACK_SKIP_ROWS,Me),P.pixelStorei(P.UNPACK_SKIP_IMAGES,_n),z===0&&G.generateMipmaps&&P.generateMipmap(Ot),Z.unbindTexture()},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Z.unbindTexture()},this.resetState=function(){D=0,E=0,T=null,Z.reset(),Bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===$o?"display-p3":"srgb",e.unpackColorSpace=Zt.workingColorSpace===Qr?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ue?ci:Ah}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ci?ue:In}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},So=class extends bs{};So.prototype.isWebGL1Renderer=!0;var Ss=class i{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},qi=class extends ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var Or=class extends Ye{constructor(t=null,e=1,n=1,s,r,o,a,c,l=pe,h=pe,u,f){super(null,o,a,c,l,h,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var _s=class extends Ue{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Di=new ne,$l=new ne,ur=[],th=new On,C0=new ne,cs=new Yt,ls=new li,Ur=class extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new _s(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,C0)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new On),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),th.copy(t.boundingBox).applyMatrix4(Di),this.boundingBox.union(th)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new li),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Di),ls.copy(t.boundingSphere).applyMatrix4(Di),this.boundingSphere.union(ls)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let n=this.matrixWorld,s=this.count;if(cs.geometry=this.geometry,cs.material=this.material,cs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ls.copy(this.boundingSphere),ls.applyMatrix4(n),t.ray.intersectsSphere(ls)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Di),$l.multiplyMatrices(n,Di),cs.matrixWorld=$l,cs.raycast(t,ur);for(let o=0,a=ur.length;o<a;o++){let c=ur[o];c.instanceId=r,c.object=this,e.push(c)}ur.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new _s(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var Yi=class extends Ye{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,d=(o-h)/f;return(s+d)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new at:new R);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){let n=new R,s=[],r=[],o=[],a=new R,c=new ne;for(let d=0;d<=t;d++){let g=d/t;s[d]=this.getTangentAt(g,new R)}r[0]=new R,o[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=t;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(me(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,g))}o[d].crossVectors(s[d],r[d])}if(e===!0){let d=Math.acos(me(r[0].dot(r[t]),-1,1));d/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(d=-d);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],d*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ws=class extends nn{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e){let n=e||new at,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=c-this.aX,d=l-this.aY;c=f*h-d*u+this.aX,l=f*u+d*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},_o=class extends ws{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function nc(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,u){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+u)+(c-a)/u;f*=h,d*=h,s(o,a,f,d)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var fr=new R,Za=new nc,Ja=new nc,Ka=new nc,wo=class extends nn{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new R){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(fr.subVectors(s[0],s[1]).add(s[0]),l=fr);let u=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),d),x=Math.pow(u.distanceToSquared(f),d),m=Math.pow(f.distanceToSquared(h),d);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),Za.initNonuniformCatmullRom(l.x,u.x,f.x,h.x,g,x,m),Ja.initNonuniformCatmullRom(l.y,u.y,f.y,h.y,g,x,m),Ka.initNonuniformCatmullRom(l.z,u.z,f.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(Za.initCatmullRom(l.x,u.x,f.x,h.x,this.tension),Ja.initCatmullRom(l.y,u.y,f.y,h.y,this.tension),Ka.initCatmullRom(l.z,u.z,f.z,h.z,this.tension));return n.set(Za.calc(c),Ja.calc(c),Ka.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new R().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function eh(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function L0(i,t){let e=1-i;return e*e*t}function D0(i,t){return 2*(1-i)*i*t}function I0(i,t){return i*i*t}function ms(i,t,e,n){return L0(i,t)+D0(i,e)+I0(i,n)}function N0(i,t){let e=1-i;return e*e*e*t}function O0(i,t){let e=1-i;return 3*e*e*i*t}function U0(i,t){return 3*(1-i)*i*i*t}function H0(i,t){return i*i*i*t}function gs(i,t,e,n,s){return N0(i,t)+O0(i,e)+U0(i,n)+H0(i,s)}var Hr=class extends nn{constructor(t=new at,e=new at,n=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(t,s.x,r.x,o.x,a.x),gs(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Eo=class extends nn{constructor(t=new R,e=new R,n=new R,s=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(gs(t,s.x,r.x,o.x,a.x),gs(t,s.y,r.y,o.y,a.y),gs(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Br=class extends nn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},To=class extends nn{constructor(t=new R,e=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new R){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new R){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},zr=class extends nn{constructor(t=new at,e=new at,n=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new at){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ms(t,s.x,r.x,o.x),ms(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Po=class extends nn{constructor(t=new R,e=new R,n=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new R){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(ms(t,s.x,r.x,o.x),ms(t,s.y,r.y,o.y),ms(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Fr=class extends nn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],u=s[o>s.length-3?s.length-1:o+2];return n.set(eh(a,c.x,l.x,h.x,u.x),eh(a,c.y,l.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Ro=Object.freeze({__proto__:null,ArcCurve:_o,CatmullRomCurve3:wo,CubicBezierCurve:Hr,CubicBezierCurve3:Eo,EllipseCurve:ws,LineCurve:Br,LineCurve3:To,QuadraticBezierCurve:zr,QuadraticBezierCurve3:Po,SplineCurve:Fr}),Co=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Ro[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?t*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?t*o.points.length:t,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Ro[s.type]().fromJSON(s))}return this}},Es=class extends Co{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new Br(this.currentPoint.clone(),new at(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new zr(this.currentPoint.clone(),new at(t,e),new at(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,o){let a=new Hr(this.currentPoint.clone(),new at(t,e),new at(n,s),new at(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Fr(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(t+a,e+c,n,s,r,o),this}absarc(t,e,n,s,r,o){return this.absellipse(t,e,n,n,s,r,o),this}ellipse(t,e,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+l,e+h,n,s,r,o,a,c),this}absellipse(t,e,n,s,r,o,a,c){let l=new ws(t,e,n,s,r,o,a,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Lo=class i extends He{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=me(s,0,Math.PI*2);let r=[],o=[],a=[],c=[],l=[],h=1/e,u=new R,f=new at,d=new R,g=new R,x=new R,m=0,p=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,x.copy(d),d.normalize(),c.push(d.x,d.y,d.z);break;case t.length-1:c.push(x.x,x.y,x.z);break;default:m=t[S+1].x-t[S].x,p=t[S+1].y-t[S].y,d.x=p*1,d.y=-m,d.z=p*0,g.copy(d),d.x+=x.x,d.y+=x.y,d.z+=x.z,d.normalize(),c.push(d.x,d.y,d.z),x.copy(g)}for(let S=0;S<=e;S++){let v=n+S*h*s,w=Math.sin(v),D=Math.cos(v);for(let E=0;E<=t.length-1;E++){u.x=t[E].x*w,u.y=t[E].y,u.z=t[E].x*D,o.push(u.x,u.y,u.z),f.x=S/e,f.y=E/(t.length-1),a.push(f.x,f.y);let T=c[3*E+0]*w,j=c[3*E+1],M=c[3*E+0]*D;l.push(T,j,M)}}for(let S=0;S<e;S++)for(let v=0;v<t.length-1;v++){let w=v+S*t.length,D=w,E=w+t.length,T=w+t.length+1,j=w+1;r.push(D,E,j),r.push(T,j,E)}this.setIndex(r),this.setAttribute("position",new Jt(o,3)),this.setAttribute("uv",new Jt(a,2)),this.setAttribute("normal",new Jt(l,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}},kr=class i extends Lo{constructor(t=1,e=1,n=4,s=8){let r=new Es;r.absarc(0,-e/2,t,Math.PI*1.5,0),r.absarc(0,e/2,t,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:t,length:e,capSegments:n,radialSegments:s}}static fromJSON(t){return new i(t.radius,t.length,t.capSegments,t.radialSegments)}};var Un=class i extends He{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],d=[],g=0,x=[],m=n/2,p=0;S(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new Jt(u,3)),this.setAttribute("normal",new Jt(f,3)),this.setAttribute("uv",new Jt(d,2));function S(){let w=new R,D=new R,E=0,T=(e-t)/n;for(let j=0;j<=r;j++){let M=[],_=j/r,H=_*(e-t)+t;for(let Y=0;Y<=s;Y++){let st=Y/s,C=st*c+a,U=Math.sin(C),X=Math.cos(C);D.x=H*U,D.y=-_*n+m,D.z=H*X,u.push(D.x,D.y,D.z),w.set(U,T,X).normalize(),f.push(w.x,w.y,w.z),d.push(st,1-_),M.push(g++)}x.push(M)}for(let j=0;j<s;j++)for(let M=0;M<r;M++){let _=x[M][j],H=x[M+1][j],Y=x[M+1][j+1],st=x[M][j+1];h.push(_,H,st),h.push(H,Y,st),E+=6}l.addGroup(p,E,0),p+=E}function v(w){let D=g,E=new at,T=new R,j=0,M=w===!0?t:e,_=w===!0?1:-1;for(let Y=1;Y<=s;Y++)u.push(0,m*_,0),f.push(0,_,0),d.push(.5,.5),g++;let H=g;for(let Y=0;Y<=s;Y++){let C=Y/s*c+a,U=Math.cos(C),X=Math.sin(C);T.x=M*X,T.y=m*_,T.z=M*U,u.push(T.x,T.y,T.z),f.push(0,_,0),E.x=U*.5+.5,E.y=X*.5*_+.5,d.push(E.x,E.y),g++}for(let Y=0;Y<s;Y++){let st=D+Y,C=H+Y;w===!0?h.push(C,C+1,st):h.push(C+1,C,st),j+=3}l.addGroup(p,j,w===!0?1:2),p+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},Gr=class i extends Un{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ts=class extends Es{constructor(t){super(t),this.uuid=di(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new Es().fromJSON(s))}return this}},B0={triangulate:function(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Dh(i,0,s,e,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l,h,u,f,d;if(n&&(r=V0(i,t,r,e)),i.length>80*e){a=l=i[0],c=h=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<a&&(a=u),f<c&&(c=f),u>l&&(l=u),f>h&&(h=f);d=Math.max(l-a,h-c),d=d!==0?32767/d:0}return Ps(r,o,e,a,c,d,0),o}};function Dh(i,t,e,n,s){let r,o;if(s===tx(i,t,e,n)>0)for(r=t;r<e;r+=n)o=nh(r,i[r],i[r+1],o);else for(r=e-n;r>=t;r-=n)o=nh(r,i[r],i[r+1],o);return o&&ta(o,o.next)&&(Cs(o),o=o.next),o}function hi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(ta(e,e.next)||oe(e.prev,e,e.next)===0)){if(Cs(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function Ps(i,t,e,n,s,r,o){if(!i)return;!o&&r&&Y0(i,n,s,r);let a=i,c,l;for(;i.prev!==i.next;){if(c=i.prev,l=i.next,r?F0(i,n,s,r):z0(i)){t.push(c.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),Cs(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=k0(hi(i),t,e),Ps(i,t,e,n,s,r,2)):o===2&&G0(i,t,e,n,s,r):Ps(hi(i),t,e,n,s,r,1);break}}}function z0(i){let t=i.prev,e=i,n=i.next;if(oe(t,e,n)>=0)return!1;let s=t.x,r=e.x,o=n.x,a=t.y,c=e.y,l=n.y,h=s<r?s<o?s:o:r<o?r:o,u=a<c?a<l?a:l:c<l?c:l,f=s>r?s>o?s:o:r>o?r:o,d=a>c?a>l?a:l:c>l?c:l,g=n.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Hi(s,a,r,c,o,l,g.x,g.y)&&oe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function F0(i,t,e,n){let s=i.prev,r=i,o=i.next;if(oe(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,u=r.y,f=o.y,d=a<c?a<l?a:l:c<l?c:l,g=h<u?h<f?h:f:u<f?u:f,x=a>c?a>l?a:l:c>l?c:l,m=h>u?h>f?h:f:u>f?u:f,p=Do(d,g,t,e,n),S=Do(x,m,t,e,n),v=i.prevZ,w=i.nextZ;for(;v&&v.z>=p&&w&&w.z<=S;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Hi(a,h,c,u,l,f,v.x,v.y)&&oe(v.prev,v,v.next)>=0||(v=v.prevZ,w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Hi(a,h,c,u,l,f,w.x,w.y)&&oe(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;v&&v.z>=p;){if(v.x>=d&&v.x<=x&&v.y>=g&&v.y<=m&&v!==s&&v!==o&&Hi(a,h,c,u,l,f,v.x,v.y)&&oe(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;w&&w.z<=S;){if(w.x>=d&&w.x<=x&&w.y>=g&&w.y<=m&&w!==s&&w!==o&&Hi(a,h,c,u,l,f,w.x,w.y)&&oe(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function k0(i,t,e){let n=i;do{let s=n.prev,r=n.next.next;!ta(s,r)&&Ih(s,n,n.next,r)&&Rs(s,r)&&Rs(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),Cs(n),Cs(n.next),n=i=r),n=n.next}while(n!==i);return hi(n)}function G0(i,t,e,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&K0(o,a)){let c=Nh(o,a);o=hi(o,o.next),c=hi(c,c.next),Ps(o,t,e,n,s,r,0),Ps(c,t,e,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function V0(i,t,e,n){let s=[],r,o,a,c,l;for(r=0,o=t.length;r<o;r++)a=t[r]*n,c=r<o-1?t[r+1]*n:i.length,l=Dh(i,a,c,n,!1),l===l.next&&(l.steiner=!0),s.push(J0(l));for(s.sort(X0),r=0;r<s.length;r++)e=W0(s[r],e);return e}function X0(i,t){return i.x-t.x}function W0(i,t){let e=j0(i,t);if(!e)return t;let n=Nh(e,i);return hi(n,n.next),hi(e,e.next)}function j0(i,t){let e=t,n=-1/0,s,r=i.x,o=i.y;do{if(o<=e.y&&o>=e.next.y&&e.next.y!==e.y){let f=e.x+(o-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let a=s,c=s.x,l=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=c&&r!==e.x&&Hi(o<l?r:n,o,c,l,o<l?n:r,o,e.x,e.y)&&(u=Math.abs(o-e.y)/(r-e.x),Rs(e,i)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&q0(s,e)))&&(s=e,h=u)),e=e.next;while(e!==a);return s}function q0(i,t){return oe(i.prev,i,t.prev)<0&&oe(t.next,i,i.next)<0}function Y0(i,t,e,n){let s=i;do s.z===0&&(s.z=Do(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Z0(s)}function Z0(i){let t,e,n,s,r,o,a,c,l=1;do{for(e=i,i=null,r=null,o=0;e;){for(o++,n=e,a=0,t=0;t<l&&(a++,n=n.nextZ,!!n);t++);for(c=l;a>0||c>0&&n;)a!==0&&(c===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,a--):(s=n,n=n.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(o>1);return i}function Do(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function J0(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Hi(i,t,e,n,s,r,o,a){return(s-o)*(t-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(e-o)*(t-a)&&(e-o)*(r-a)>=(s-o)*(n-a)}function K0(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Q0(i,t)&&(Rs(i,t)&&Rs(t,i)&&$0(i,t)&&(oe(i.prev,i,t.prev)||oe(i,t.prev,t))||ta(i,t)&&oe(i.prev,i,i.next)>0&&oe(t.prev,t,t.next)>0)}function oe(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function ta(i,t){return i.x===t.x&&i.y===t.y}function Ih(i,t,e,n){let s=pr(oe(i,t,e)),r=pr(oe(i,t,n)),o=pr(oe(e,n,i)),a=pr(oe(e,n,t));return!!(s!==r&&o!==a||s===0&&dr(i,e,t)||r===0&&dr(i,n,t)||o===0&&dr(e,i,n)||a===0&&dr(e,t,n))}function dr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function pr(i){return i>0?1:i<0?-1:0}function Q0(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ih(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function Rs(i,t){return oe(i.prev,i,i.next)<0?oe(i,t,i.next)>=0&&oe(i,i.prev,t)>=0:oe(i,t,i.prev)<0||oe(i,i.next,t)<0}function $0(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Nh(i,t){let e=new Io(i.i,i.x,i.y),n=new Io(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function nh(i,t,e,n){let s=new Io(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Cs(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Io(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function tx(i,t,e,n){let s=0;for(let r=t,o=e-n;r<e;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var xs=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];ih(t),sh(n,t);let o=t.length;e.forEach(ih);for(let c=0;c<e.length;c++)s.push(o),o+=e[c].length,sh(n,e[c]);let a=B0.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function ih(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function sh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var Vr=class i extends He{constructor(t=new Ts([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let a=0,c=t.length;a<c;a++){let l=t[a];o(l)}this.setAttribute("position",new Jt(s,3)),this.setAttribute("uv",new Jt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,d=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:d-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:ex,v,w=!1,D,E,T,j;p&&(v=p.getSpacedPoints(h),w=!0,f=!1,D=p.computeFrenetFrames(h,!1),E=new R,T=new R,j=new R),f||(m=0,d=0,g=0,x=0);let M=a.extractPoints(l),_=M.shape,H=M.holes;if(!xs.isClockWise(_)){_=_.reverse();for(let P=0,ot=H.length;P<ot;P++){let J=H[P];xs.isClockWise(J)&&(H[P]=J.reverse())}}let st=xs.triangulateShape(_,H),C=_;for(let P=0,ot=H.length;P<ot;P++){let J=H[P];_=_.concat(J)}function U(P,ot,J){return ot||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(ot,J)}let X=_.length,K=st.length;function q(P,ot,J){let rt,Z,St,mt=P.x-ot.x,A=P.y-ot.y,y=J.x-P.x,O=J.y-P.y,nt=mt*mt+A*A,tt=mt*O-A*y;if(Math.abs(tt)>Number.EPSILON){let $=Math.sqrt(nt),At=Math.sqrt(y*y+O*O),ut=ot.x-A/$,xt=ot.y+mt/$,Tt=J.x-O/At,Ut=J.y+y/At,et=((Tt-ut)*O-(Ut-xt)*y)/(mt*O-A*y);rt=ut+mt*et-P.x,Z=xt+A*et-P.y;let jt=rt*rt+Z*Z;if(jt<=2)return new at(rt,Z);St=Math.sqrt(jt/2)}else{let $=!1;mt>Number.EPSILON?y>Number.EPSILON&&($=!0):mt<-Number.EPSILON?y<-Number.EPSILON&&($=!0):Math.sign(A)===Math.sign(O)&&($=!0),$?(rt=-A,Z=mt,St=Math.sqrt(nt)):(rt=mt,Z=A,St=Math.sqrt(nt/2))}return new at(rt/St,Z/St)}let N=[];for(let P=0,ot=C.length,J=ot-1,rt=P+1;P<ot;P++,J++,rt++)J===ot&&(J=0),rt===ot&&(rt=0),N[P]=q(C[P],C[J],C[rt]);let W=[],V,it=N.concat();for(let P=0,ot=H.length;P<ot;P++){let J=H[P];V=[];for(let rt=0,Z=J.length,St=Z-1,mt=rt+1;rt<Z;rt++,St++,mt++)St===Z&&(St=0),mt===Z&&(mt=0),V[rt]=q(J[rt],J[St],J[mt]);W.push(V),it=it.concat(V)}for(let P=0;P<m;P++){let ot=P/m,J=d*Math.cos(ot*Math.PI/2),rt=g*Math.sin(ot*Math.PI/2)+x;for(let Z=0,St=C.length;Z<St;Z++){let mt=U(C[Z],N[Z],rt);pt(mt.x,mt.y,-J)}for(let Z=0,St=H.length;Z<St;Z++){let mt=H[Z];V=W[Z];for(let A=0,y=mt.length;A<y;A++){let O=U(mt[A],V[A],rt);pt(O.x,O.y,-J)}}}let B=g+x;for(let P=0;P<X;P++){let ot=f?U(_[P],it[P],B):_[P];w?(T.copy(D.normals[0]).multiplyScalar(ot.x),E.copy(D.binormals[0]).multiplyScalar(ot.y),j.copy(v[0]).add(T).add(E),pt(j.x,j.y,j.z)):pt(ot.x,ot.y,0)}for(let P=1;P<=h;P++)for(let ot=0;ot<X;ot++){let J=f?U(_[ot],it[ot],B):_[ot];w?(T.copy(D.normals[P]).multiplyScalar(J.x),E.copy(D.binormals[P]).multiplyScalar(J.y),j.copy(v[P]).add(T).add(E),pt(j.x,j.y,j.z)):pt(J.x,J.y,u/h*P)}for(let P=m-1;P>=0;P--){let ot=P/m,J=d*Math.cos(ot*Math.PI/2),rt=g*Math.sin(ot*Math.PI/2)+x;for(let Z=0,St=C.length;Z<St;Z++){let mt=U(C[Z],N[Z],rt);pt(mt.x,mt.y,u+J)}for(let Z=0,St=H.length;Z<St;Z++){let mt=H[Z];V=W[Z];for(let A=0,y=mt.length;A<y;A++){let O=U(mt[A],V[A],rt);w?pt(O.x,O.y+v[h-1].y,v[h-1].x+J):pt(O.x,O.y,u+J)}}}Q(),ht();function Q(){let P=s.length/3;if(f){let ot=0,J=X*ot;for(let rt=0;rt<K;rt++){let Z=st[rt];Et(Z[2]+J,Z[1]+J,Z[0]+J)}ot=h+m*2,J=X*ot;for(let rt=0;rt<K;rt++){let Z=st[rt];Et(Z[0]+J,Z[1]+J,Z[2]+J)}}else{for(let ot=0;ot<K;ot++){let J=st[ot];Et(J[2],J[1],J[0])}for(let ot=0;ot<K;ot++){let J=st[ot];Et(J[0]+X*h,J[1]+X*h,J[2]+X*h)}}n.addGroup(P,s.length/3-P,0)}function ht(){let P=s.length/3,ot=0;yt(C,ot),ot+=C.length;for(let J=0,rt=H.length;J<rt;J++){let Z=H[J];yt(Z,ot),ot+=Z.length}n.addGroup(P,s.length/3-P,1)}function yt(P,ot){let J=P.length;for(;--J>=0;){let rt=J,Z=J-1;Z<0&&(Z=P.length-1);for(let St=0,mt=h+m*2;St<mt;St++){let A=X*St,y=X*(St+1),O=ot+rt+A,nt=ot+Z+A,tt=ot+Z+y,$=ot+rt+y;Lt(O,nt,tt,$)}}}function pt(P,ot,J){c.push(P),c.push(ot),c.push(J)}function Et(P,ot,J){Mt(P),Mt(ot),Mt(J);let rt=s.length/3,Z=S.generateTopUV(n,s,rt-3,rt-2,rt-1);It(Z[0]),It(Z[1]),It(Z[2])}function Lt(P,ot,J,rt){Mt(P),Mt(ot),Mt(rt),Mt(ot),Mt(J),Mt(rt);let Z=s.length/3,St=S.generateSideWallUV(n,s,Z-6,Z-3,Z-2,Z-1);It(St[0]),It(St[1]),It(St[3]),It(St[1]),It(St[2]),It(St[3])}function Mt(P){s.push(c[P*3+0]),s.push(c[P*3+1]),s.push(c[P*3+2])}function It(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return nx(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,o=t.shapes.length;r<o;r++){let a=e[t.shapes[r]];n.push(a)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Ro[s.type]().fromJSON(s)),new i(n,t.options)}},ex={generateTopUV:function(i,t,e,n,s){let r=t[e*3],o=t[e*3+1],a=t[n*3],c=t[n*3+1],l=t[s*3],h=t[s*3+1];return[new at(r,o),new at(a,c),new at(l,h)]},generateSideWallUV:function(i,t,e,n,s,r){let o=t[e*3],a=t[e*3+1],c=t[e*3+2],l=t[n*3],h=t[n*3+1],u=t[n*3+2],f=t[s*3],d=t[s*3+1],g=t[s*3+2],x=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new at(o,1-c),new at(l,1-u),new at(f,1-g),new at(x,1-p)]:[new at(a,1-c),new at(h,1-u),new at(d,1-g),new at(m,1-p)]}};function nx(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Xr=class i extends He{constructor(t=.5,e=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],u=t,f=(e-t)/s,d=new R,g=new at;for(let x=0;x<=s;x++){for(let m=0;m<=n;m++){let p=r+m/n*o;d.x=u*Math.cos(p),d.y=u*Math.sin(p),c.push(d.x,d.y,d.z),l.push(0,0,1),g.x=(d.x/e+1)/2,g.y=(d.y/e+1)/2,h.push(g.x,g.y)}u+=f}for(let x=0;x<s;x++){let m=x*(n+1);for(let p=0;p<n;p++){let S=p+m,v=S,w=S+n+1,D=S+n+2,E=S+1;a.push(v,w,E),a.push(w,D,E)}}this.setIndex(a),this.setAttribute("position",new Jt(c,3)),this.setAttribute("normal",new Jt(l,3)),this.setAttribute("uv",new Jt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var ze=class i extends He{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],u=new R,f=new R,d=[],g=[],x=[],m=[];for(let p=0;p<=n;p++){let S=[],v=p/n,w=0;p===0&&o===0?w=.5/e:p===n&&c===Math.PI&&(w=-.5/e);for(let D=0;D<=e;D++){let E=D/e;u.x=-t*Math.cos(s+E*r)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(s+E*r)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),m.push(E+w,1-v),S.push(l++)}h.push(S)}for(let p=0;p<n;p++)for(let S=0;S<e;S++){let v=h[p][S+1],w=h[p][S],D=h[p+1][S],E=h[p+1][S+1];(p!==0||o>0)&&d.push(v,w,E),(p!==n-1||c<Math.PI)&&d.push(w,D,E)}this.setIndex(d),this.setAttribute("position",new Jt(g,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Wr=class i extends He{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new R,u=new R,f=new R;for(let d=0;d<=n;d++)for(let g=0;g<=s;g++){let x=g/s*r,m=d/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(x),u.y=(t+e*Math.cos(m))*Math.sin(x),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(x),h.y=t*Math.sin(x),f.subVectors(u,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=s;g++){let x=(s+1)*d+g-1,m=(s+1)*(d-1)+g-1,p=(s+1)*(d-1)+g,S=(s+1)*d+g;o.push(x,m,S),o.push(m,p,S)}this.setIndex(o),this.setAttribute("position",new Jt(a,3)),this.setAttribute("normal",new Jt(c,3)),this.setAttribute("uv",new Jt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var Zi=class extends Zn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Ls=class extends Zi{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new at(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new wt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new wt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new wt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var jr=class extends Zn{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new wt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};function mr(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ix(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var Ji=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},No=class extends Ji{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ll,endingEnd:ll}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case hl:r=t,a=2*e-n;break;case ul:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case hl:o=t,c=2*n-e;break;case ul:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-e)/(s-e),x=g*g,m=x*g,p=-f*m+2*f*x-f*g,S=(1+f)*m+(-1.5-2*f)*x+(-.5+f)*g+1,v=(-1-d)*m+(1.5+d)*x+.5*g,w=d*m-d*x;for(let D=0;D!==a;++D)r[D]=p*o[h+D]+S*o[l+D]+v*o[c+D]+w*o[u+D];return r}},Oo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),u=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*u+o[c+f]*h;return r}},Uo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},dn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Oo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new No(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case xr:e=this.InterpolantFactoryMethodDiscrete;break;case vr:e=this.InterpolantFactoryMethodLinear;break;case Ea:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return xr;case this.InterpolantFactoryMethodLinear:return vr;case this.InterpolantFactoryMethodSmooth:return Ea}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&ix(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Ea,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let x=e[u+g];if(x!==e[f+g]||x!==e[d+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[u+d]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};dn.prototype.TimeBufferType=Float32Array;dn.prototype.ValueBufferType=Float32Array;dn.prototype.DefaultInterpolation=vr;var ui=class extends dn{};ui.prototype.ValueTypeName="bool";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=xr;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var Ho=class extends dn{};Ho.prototype.ValueTypeName="color";var Bo=class extends dn{};Bo.prototype.ValueTypeName="number";var zo=class extends Ji{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)yn.slerpFlat(r,0,o,l-a,o,l,c);return r}},Ds=class extends dn{InterpolantFactoryMethodLinear(t){return new zo(this.times,this.values,this.getValueSize(),t)}};Ds.prototype.ValueTypeName="quaternion";Ds.prototype.DefaultInterpolation=vr;Ds.prototype.InterpolantFactoryMethodSmooth=void 0;var fi=class extends dn{};fi.prototype.ValueTypeName="string";fi.prototype.ValueBufferType=Array;fi.prototype.DefaultInterpolation=xr;fi.prototype.InterpolantFactoryMethodLinear=void 0;fi.prototype.InterpolantFactoryMethodSmooth=void 0;var Fo=class extends dn{};Fo.prototype.ValueTypeName="vector";var ko=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=l.length;u<f;u+=2){let d=l[u],g=l[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null}}},sx=new ko,Go=class{constructor(t){this.manager=t!==void 0?t:sx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};Go.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ki=class extends ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},qr=class extends Ki{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},Qa=new ne,rh=new R,ah=new R,Is=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ms,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;rh.setFromMatrixPosition(t.matrixWorld),e.position.copy(rh),ah.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ah),e.updateMatrixWorld(),Qa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Vo=class extends Is{constructor(){super(new we(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){let e=this.camera,n=Xi*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}},Yr=class extends Ki{constructor(t,e,n=0,s=Math.PI/3,r=0,o=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Vo}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},oh=new ne,hs=new R,$a=new R,Xo=class extends Is{constructor(){super(new we(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new at(4,2),this._viewportCount=6,this._viewports=[new re(2,1,1,1),new re(0,1,1,1),new re(3,1,1,1),new re(1,1,1,1),new re(3,0,1,1),new re(1,0,1,1)],this._cubeDirections=[new R(1,0,0),new R(-1,0,0),new R(0,0,1),new R(0,0,-1),new R(0,1,0),new R(0,-1,0)],this._cubeUps=[new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,1,0),new R(0,0,1),new R(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hs.setFromMatrixPosition(t.matrixWorld),n.position.copy(hs),$a.copy(n.position),$a.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt($a),n.updateMatrixWorld(),s.makeTranslation(-hs.x,-hs.y,-hs.z),oh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(oh)}},Qi=class extends Ki{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Xo}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Wo=class extends Is{constructor(){super(new Ir(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Zr=class extends Ki{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ge.DEFAULT_UP),this.updateMatrix(),this.target=new ge,this.shadow=new Wo}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Jr=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ch(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=ch();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function ch(){return(typeof performance>"u"?Date:performance).now()}var ic="\\[\\]\\.:\\/",rx=new RegExp("["+ic+"]","g"),sc="[^"+ic+"]",ax="[^"+ic.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",sc),cx=/(WCOD+)?/.source.replace("WCOD",ax),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sc),hx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sc),ux=new RegExp("^"+ox+cx+lx+hx+"$"),fx=["material","materials","bones","map"],jo=class{constructor(t,e,n){let s=n||se.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},se=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(rx,"")}static parseTrackName(t){let e=ux.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);fx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};se.Composite=jo;se.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};se.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};se.prototype.GetterByBindingType=[se.prototype._getValue_direct,se.prototype._getValue_array,se.prototype._getValue_arrayElement,se.prototype._getValue_toArray];se.prototype.SetterByBindingTypeAndVersioning=[[se.prototype._setValue_direct,se.prototype._setValue_direct_setNeedsUpdate,se.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[se.prototype._setValue_array,se.prototype._setValue_array_setNeedsUpdate,se.prototype._setValue_array_setMatrixWorldNeedsUpdate],[se.prototype._setValue_arrayElement,se.prototype._setValue_arrayElement_setNeedsUpdate,se.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[se.prototype._setValue_fromArray,se.prototype._setValue_fromArray_setNeedsUpdate,se.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qo);var ea=class extends qi{constructor(t=null){super();let e=new te;e.deleteAttribute("uv");let n=new Zi({side:Se}),s=new Zi,r=5;t!==null&&t._useLegacyLights===!1&&(r=900);let o=new Qi(16777215,r,28,2);o.position.set(.418,16.199,.3),this.add(o);let a=new Yt(e,n);a.position.set(-.757,13.219,.717),a.scale.set(31.713,28.305,28.591),this.add(a);let c=new Yt(e,s);c.position.set(-10.906,2.009,1.846),c.rotation.set(0,-.195,0),c.scale.set(2.328,7.905,4.651),this.add(c);let l=new Yt(e,s);l.position.set(-5.607,-.754,-.758),l.rotation.set(0,.994,0),l.scale.set(1.97,1.534,3.955),this.add(l);let h=new Yt(e,s);h.position.set(6.167,.857,7.803),h.rotation.set(0,.561,0),h.scale.set(3.927,6.285,3.687),this.add(h);let u=new Yt(e,s);u.position.set(-2.017,.018,6.124),u.rotation.set(0,.333,0),u.scale.set(2.002,4.566,2.064),this.add(u);let f=new Yt(e,s);f.position.set(2.291,-.756,-2.621),f.rotation.set(0,-.286,0),f.scale.set(1.546,1.552,1.496),this.add(f);let d=new Yt(e,s);d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),this.add(d);let g=new Yt(e,ts(50));g.position.set(-16.116,14.37,8.208),g.scale.set(.1,2.428,2.739),this.add(g);let x=new Yt(e,ts(50));x.position.set(-16.109,18.021,-8.207),x.scale.set(.1,2.425,2.751),this.add(x);let m=new Yt(e,ts(17));m.position.set(14.904,12.198,-1.832),m.scale.set(.15,4.265,6.331),this.add(m);let p=new Yt(e,ts(43));p.position.set(-.462,8.89,14.52),p.scale.set(4.38,5.441,.088),this.add(p);let S=new Yt(e,ts(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);let v=new Yt(e,ts(100));v.position.set(0,20,0),v.scale.set(1,.1,1),this.add(v)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ts(i){let t=new un;return t.color.setScalar(i),t}var pi={current:"real"},na=new Set,ac=new Set,dx=(()=>{let i=new Or(new Uint8Array([70,150,255]),3,1,Ko);return i.minFilter=i.magFilter=pe,i.needsUpdate=!0,i})(),Uh=i=>new fn({uniforms:{w:{value:i}},vertexShader:"uniform float w; void main(){ gl_Position = projectionMatrix * modelViewMatrix * vec4(position + normal * w, 1.0); }",fragmentShader:"void main(){ gl_FragColor = vec4(0.09, 0.05, 0.12, 1.0); }",side:Se}),px=Uh(.004),mx=Uh(.01);function Hh(i){if(i.basic){let t=new un({color:i.color??16777215,map:i.map??null,transparent:i.opacity!=null,opacity:i.opacity??1,side:i.side??en});return{real:t,toon:t}}return i.glass?{real:new Ls({color:16777215,roughness:.02,metalness:0,transparent:!0,opacity:i.opacity??.1,envMapIntensity:3,depthWrite:!1,side:Re}),toon:new un({color:14218239,transparent:!0,opacity:.07,depthWrite:!1,side:Re})}:{real:new Ls({color:i.color,map:i.map??null,metalness:i.metal??0,roughness:i.rough??.5,emissive:i.emissive??0,emissiveIntensity:i.ei??1,sheen:i.sheen??0,sheenColor:new wt(i.color??16777215).lerp(new wt(16777215),.25),sheenRoughness:.7,clearcoat:i.clearcoat??0,clearcoatRoughness:.15,side:i.side??en,envMapIntensity:i.metal?1:.35}),toon:new jr({color:i.toon??i.color,map:i.map??null,gradientMap:dx,emissive:i.emissive??0,emissiveIntensity:i.ei??1,side:i.side??en})}}var rc=new WeakSet,Oh=new Map,Os=(...i)=>{for(let t of i)rc.add(t);return i[0]};function gx(i){let t=JSON.stringify(i),e=Oh.get(t);return e||(Oh.set(t,e=Hh(i)),Os(e.real,e.toon)),e}function oc(i,t=!1){let e=new Yt(i,t?mx:px);return e.raycast=()=>{},cc("toon",e)}function kt(i,t,e={}){let n=new Yt(i);n.userData.mats=e.shared&&!t.map?gx(t):Hh(t),e.shared&&Os(i),n.material=n.userData.mats[pi.current];let s=!t.glass&&!t.basic;return n.castShadow=e.cast??s,n.receiveShadow=e.receive??s,s&&e.outline!==!1&&n.add(oc(i,e.thick)),na.add(n),n}function cc(i,t){return t.userData.only=i,t.visible=pi.current===i,ac.add(t),t}function Bh(i){i.traverse(t=>{na.delete(t),ac.delete(t);for(let e of t.userData.mats?[t.userData.mats.real,t.userData.mats.toon]:[])rc.has(e)||e.dispose();t.geometry&&!t.userData.only&&!rc.has(t.geometry)&&t.geometry.dispose()})}function ia(i,t,e){let n=document.createElement("canvas");n.width=i,n.height=t,e(n.getContext("2d"),i,t);let s=new Yi(n);return s.colorSpace=ue,s.anisotropy=4,s}function sa(i,{scene:t,renderer:e,envTex:n,hemi:s,key:r}){pi.current=i;for(let o of na)o.material=o.userData.mats[i];for(let o of ac)o.visible=o.userData.only===i;i==="real"?(t.environment=n,t.background=new wt(722452),t.fog=new Ss(722452,3,9),e.toneMapping=Zo,e.toneMappingExposure=.85,s.intensity=.35,r.intensity=.9):(t.environment=null,t.background=new wt(3877496),t.fog=new Ss(3877496,4,10),e.toneMapping=vn,s.intensity=1.3,r.intensity=2.2)}function zh(i){for(let t of na)i(t.userData.mats.real),i(t.userData.mats.toon)}var Fe=1,An=.9,Mn=An/2,Ze=.9,Je=1.9,pn=Ze+.01,Us=1.86,Hs=1.72,ke={x0:.22,x1:.46,z0:.14,z1:.42},Ve={x:(ke.x0+ke.x1)/2,z:(ke.z0+ke.z1)/2},kh={x:.42,z:.36},Fh={color:14100029,rough:.35,clearcoat:1,toon:15087942},lc={color:16763196,rough:.4,clearcoat:.6},Jn={color:14540253,metal:1,rough:.18,toon:13226464};function xx(i){let t=ia(512,512,(s,r,o)=>{s.fillStyle="#140a2e",s.fillRect(0,0,r,o);let a=["#ff3d7f","#00e5ff","#ffd23f","#7bff6a","#c77dff"];for(let c=0;c<70;c++){s.strokeStyle=a[c%a.length],s.lineWidth=5;let l=Math.random()*r,h=Math.random()*o,u=8+Math.random()*18;if(s.beginPath(),c%3===0)s.arc(l,h,u,0,Math.PI*2);else if(c%3===1)s.moveTo(l,h),s.lineTo(l+u,h+u*1.6),s.lineTo(l-u,h+u*1.6),s.closePath();else{s.moveTo(l-u,h);for(let f=0;f<4;f++)s.quadraticCurveTo(l-u+f*u/2+u/4,h+(f%2?10:-10),l-u+(f+1)*u/2,h)}s.stroke()}});t.wrapS=t.wrapT=vs,t.repeat.set(6,6);let e=kt(new Be(14,14),{color:16777215,map:t,rough:.95},{outline:!1});e.rotation.x=-Math.PI/2,i.add(e);let n=kt(new Be(14,5),{color:2363978,rough:.9},{outline:!1});n.position.set(0,2.5,-2.6),i.add(n),[16727423,58879,16765503].forEach((s,r)=>{let o=kt(new te(2.4,.05,.05),{basic:!0,color:s});o.position.set(-3+r*3,2.9-r*.25,-2.55),i.add(o)});for(let s of[-3.2,3.2]){let r=kt(new te(.8,1.9,.8),{color:s<0?2060267:3065014,rough:.4,clearcoat:1},{thick:!0});r.position.set(s,.95,-2),i.add(r);let o=kt(new Be(.6,.45),{basic:!0,color:s<0?16739029:8126314});o.position.set(s,1.35,-1.599),i.add(o)}}function Gh(i){xx(i);let t=new Ce;i.add(t);let e=kt(new te(Fe,Ze,An),Fh,{thick:!0});e.position.y=Ze/2,t.add(e);let n=kt(new te(Fe+.01,.03,.03),Jn);n.position.set(0,Ze,Mn),t.add(n);for(let N of[-1,1])for(let W of[-1,1]){let V=kt(new te(.05,Je-Ze,.05),lc);V.position.set(N*(Fe/2-.025),(Ze+Je)/2,W*(An/2-.025)),t.add(V)}let s=kt(new te(Fe,.32,An),Fh,{thick:!0});s.position.y=Je+.16,t.add(s);let r=ia(1024,256,(N,W,V)=>{let it=N.createLinearGradient(0,0,W,0);it.addColorStop(0,"#ff3d7f"),it.addColorStop(.5,"#ffb03b"),it.addColorStop(1,"#ff3d7f"),N.fillStyle=it,N.fillRect(0,0,W,V),N.font="900 170px system-ui, sans-serif",N.textAlign="center",N.textBaseline="middle",N.lineWidth=18,N.strokeStyle="#3a0a4a",N.strokeText("CLAW!",W/2,V/2+8),N.fillStyle="#fff7c2",N.fillText("CLAW!",W/2,V/2+8)}),o=kt(new Be(Fe-.12,.24),{basic:!0,map:r});o.position.set(0,Je+.16,Mn+.002),t.add(o);let a=[],c=(Fe-.06)/2,l=.145,h=4*c+4*l;for(let N=0;N<18;N++){let W=kt(new ze(.014,10,8),{basic:!0,color:16774048}),V=N/18*h,it,B;V<2*c?(it=-c+V,B=l):(V-=2*c)<2*l?(it=c,B=l-V):(V-=2*l)<2*c?(it=c-V,B=-l):(V-=2*c,it=-c,B=-l+V),W.position.set(it,Je+.16+B,Mn+.01),t.add(W),a.push(W)}let u=kt(new Be(Fe-.05,Je-Ze),{glass:!0});u.position.set(0,(Ze+Je)/2,Mn),t.add(u);for(let N of[-1,1]){let W=kt(new Be(An-.05,Je-Ze),{glass:!0});W.rotation.y=Math.PI/2,W.position.set(N*Fe/2,(Ze+Je)/2,0),t.add(W)}for(let[N,W]of[[-.25,.5],[-.16,.25]]){let V=kt(new Be(.04,W),{basic:!0,color:16777215,opacity:.35});V.position.set(N,1.55,Mn+.003),V.rotation.z=-.5,cc("toon",V),t.add(V)}let f=kt(new te(Fe-.04,.02,An-.04),{color:2371706,rough:.8},{outline:!1});f.position.y=Ze,t.add(f);for(let[N,W,V,it]of[[Fe-.04,.02,0,-An/2+.03],[.02,An-.04,-Fe/2+.03,0],[.02,An-.04,Fe/2-.03,0]]){let B=kt(new te(N,.14,W),{color:2371706,rough:.8},{outline:!1});B.position.set(V,pn+.07,it),t.add(B)}let d=ia(512,512,(N,W,V)=>{let it=N.createLinearGradient(0,0,0,V);it.addColorStop(0,"#5b2bd1"),it.addColorStop(1,"#ff4fa3"),N.fillStyle=it,N.fillRect(0,0,W,V),N.fillStyle="rgba(255,255,255,0.85)";for(let B=0;B<40;B++){let Q=Math.random()*W,ht=Math.random()*V,yt=4+Math.random()*10;N.beginPath();for(let pt=0;pt<10;pt++){let Et=pt*Math.PI/5,Lt=pt%2?yt*.45:yt;N.lineTo(Q+Math.cos(Et)*Lt,ht+Math.sin(Et)*Lt)}N.fill()}}),g=kt(new Be(Fe-.04,Je-Ze),{color:16777215,map:d,rough:.7},{outline:!1});g.position.set(0,(Ze+Je)/2,-An/2+.02),t.add(g);let x=ke.x1-ke.x0,m=ke.z1-ke.z0,p=.2;for(let[N,W,V,it]of[[x,.008,Ve.x,ke.z0],[x,.008,Ve.x,ke.z1],[.008,m,ke.x0,Ve.z],[.008,m,ke.x1,Ve.z]]){let B=kt(new te(N,p,W),{glass:!0,opacity:.25});B.position.set(V,pn+p/2,it),t.add(B);let Q=kt(new te(Math.max(N,.02),.02,Math.max(W,.02)),lc);Q.position.set(V,pn+p,it),t.add(Q)}let S=kt(new Be(x,m),{basic:!0,color:328200});S.rotation.x=-Math.PI/2,S.position.set(Ve.x,pn+.003,Ve.z),t.add(S);let v=kt(new te(.28,.2,.02),{color:1707310,rough:.6});v.position.set(Ve.x,.4,Mn+.01),t.add(v);let w=kt(new te(.32,.24,.012),lc);w.position.set(Ve.x,.4,Mn+.003),t.add(w);let D=new Ce;D.position.set(0,.93,Mn+.15),D.rotation.x=.15,t.add(D),D.add(kt(new te(Fe,.08,.3),{color:4004464,rough:.5,clearcoat:.5},{thick:!0}));let E=new Ce;E.position.set(-.22,.04,0),D.add(E);let T=kt(new Un(.05,.05,.01,24),{color:1118481,rough:.6});T.position.set(-.22,.045,0),D.add(T);let j=kt(new Un(.01,.01,.12,12),Jn);j.position.y=.06,E.add(j);let M=kt(new ze(.035,20,16),{color:15087942,rough:.25,clearcoat:1});M.position.y=.13,E.add(M);let _=kt(new Un(.045,.045,.03,24),{color:3065014,rough:.3,clearcoat:1,emissive:683364,ei:.6});_.position.set(.2,.055,0),D.add(_);for(let N of[-.4,.4]){let W=kt(new te(Fe-.06,.025,.025),Jn);W.position.set(0,Us,N),t.add(W)}let H=kt(new te(.03,.03,.82),Jn);H.position.y=Us-.02,t.add(H);let Y=kt(new te(.08,.05,.08),{color:3355460,metal:.6,rough:.4});t.add(Y);let st=kt(new Un(.004,.004,1,6),{color:2236962,metal:.8,rough:.4},{outline:!1});t.add(st);let C=new Ce;t.add(C),C.add(kt(new Un(.035,.045,.05,20),Jn));let U=[];for(let N=0;N<3;N++){let W=new Ce;W.rotation.y=N*Math.PI*2/3,C.add(W);let V=new Ce;V.position.set(0,-.025,.028),W.add(V);let it=kt(new te(.014,.09,.014),Jn);it.position.y=-.045,V.add(it);let B=new Ce;B.position.y=-.09,B.rotation.x=.75,V.add(B);let Q=kt(new te(.012,.075,.012),Jn);Q.position.y=-.037,B.add(Q);let ht=kt(new ze(.011,10,8),Jn);ht.position.y=-.075,B.add(ht),U.push(V)}let X=N=>{for(let W of U)W.rotation.x=-(.12+.6*N)},K=kt(new Xr(.06,.08,40),{basic:!0,color:16777215,opacity:.85,side:Re});K.rotation.x=-Math.PI/2,K.renderOrder=2,K.material.depthWrite=!1,t.add(K);let q=new Yr(16773590,6,0,.85,.6,0);return q.castShadow=!0,q.shadow.mapSize.set(1024,1024),q.shadow.camera.near=.05,q.shadow.camera.far=2,q.shadow.bias=-8e-4,t.add(q),t.add(q.target),{machine:t,claw:C,setClawOpen:X,bridge:H,carriage:Y,cable:st,clawLight:q,ring:K,bulbs:a,stickPivot:E,button:_}}function hc(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new He,l=0;for(let h=0;h<i.length;++h){let u=i[h],f=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let d in u.attributes){if(!n.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+d+'" attribute exists among all geometries, or in none of them.'),null;r[d]===void 0&&(r[d]=[]),r[d].push(u.attributes[d]),f++}if(f!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let d in u.morphAttributes){if(!s.has(d))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[d]===void 0&&(o[d]=[]),o[d].push(u.morphAttributes[d])}if(t){let d;if(e)d=u.index.count;else if(u.attributes.position!==void 0)d=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,d,h),l+=d}}if(e){let h=0,u=[];for(let f=0;f<i.length;++f){let d=i[f].index;for(let g=0;g<d.count;++g)u.push(d.getX(g)+h);h+=i[f].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Vh(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in o){let u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let f=0;f<u;++f){let d=[];for(let x=0;x<o[h].length;++x)d.push(o[h][x][f]);let g=Vh(d);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function Vh(i){let t,e,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.array.length}let o=new t(r),a=0;for(let l=0;l<i.length;++l)o.set(i[l].array,a),a+=i[l].array.length;let c=new Ue(o,e,n);return s!==void 0&&(c.gpuType=s),c}var Xh="data:image/jpeg;base64,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";var Wh="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QCSRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAIdpAAQAAAABAAAATgAAAAAAAACQAAAAAQAAAJAAAAABAAOShgAHAAAAEgAAAHigAgAEAAAAAQAAAQCgAwAEAAAAAQAAAQAAAAAAQVNDSUkAAABTY3JlZW5zaG90/+0AOFBob3Rvc2hvcCAzLjAAOEJJTQQEAAAAAAAAOEJJTQQlAAAAAAAQ1B2M2Y8AsgTpgAmY7PhCfv/iAihJQ0NfUFJPRklMRQABAQAAAhhhcHBsBAAAAG1udHJSR0IgWFlaIAfmAAEAAQAAAAAAAGFjc3BBUFBMAAAAAEFQUEwAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtYXBwbAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmRlc2MAAAD8AAAAMGNwcnQAAAEsAAAAUHd0cHQAAAF8AAAAFHJYWVoAAAGQAAAAFGdYWVoAAAGkAAAAFGJYWVoAAAG4AAAAFHJUUkMAAAHMAAAAIGNoYWQAAAHsAAAALGJUUkMAAAHMAAAAIGdUUkMAAAHMAAAAIG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAFAAAABwARABpAHMAcABsAGEAeQAgAFAAM21sdWMAAAAAAAAAAQAAAAxlblVTAAAANAAAABwAQwBvAHAAeQByAGkAZwBoAHQAIABBAHAAcABsAGUAIABJAG4AYwAuACwAIAAyADAAMgAyWFlaIAAAAAAAAPbVAAEAAAAA0yxYWVogAAAAAAAAg98AAD2/////u1hZWiAAAAAAAABKvwAAsTcAAAq5WFlaIAAAAAAAACg4AAARCwAAyLlwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW3NmMzIAAAAAAAEMQgAABd7///MmAAAHkwAA/ZD///ui///9owAAA9wAAMBu/8AAEQgBAAEAAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAQEBAQEBAgEBAgMCAgIDBAMDAwMEBgQEBAQEBgcGBgYGBgYHBwcHBwcHBwgICAgICAkJCQkJCwsLCwsLCwsLC//bAEMBAgICAwMDBQMDBQsIBggLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLC//dAAQAEP/aAAwDAQACEQMRAD8A/pq+K/iu+8IeErjUtLZEv5EaCy39PtU5WCD8BJIGPspr+Xb9vHxdYXPiSTQ4JXbTfBdpDpFtGPnSSecDe+eQSAuWP9/Ir+iH9qfxU2hXmhWEMP2h9sk8cR4zJuSND7ld5KjHLYr+T39o2+upNZWK8lJWW+ea4AABPku3BA4BZskAE4B61y59VbtA9DIKK/iHw/4qs38Q/Euy0BZQFi2tJnsi8nr0ziue8SzS6prq6PCdkZmC7+uAT1H0FdVoUU95r2q+KCuZZomjjc87Xm7/AIdB34rz691JINWlvyRsWQ7MDpjp+mK8CEdD6RyPp34qeKBo/h9dC0gDMipDEAf4VAUfz/SvB/i/ZR61ommeHlcK0d1DIwJzyY3JA/Nab8SNYuF8caVo9wCXtIIpJeeMMMj9W/SoQsHiDxdJDywinLHnpkBf6VSXJEavKR9M/AfRIrSMbgQhATgdTkV+jPgyxSGDzwOF7Y55r5c+D+l2trZRLtBP8IPWvuXwloa3RWefgKd231NeVXleR9Fh6doo9L8P2Ykt1mAxtHIr1jSbWNrdCRu21zOlWMNum9BhWBbHvXc20QSNEA++M57VzSZ2wR1FhH5gDEnIPQVvWcHly5HJrLs1McQ3YHPGK6K0VlbBxnFQVbU07GF2JaU4B4xXQW0cSOOMYORzWNbu8iiRhjnHvxWvbuWw7EADrUtmkX0NtYy480HBz0qyit5mB1PaqscmUV92c85q7GkisM5OaTZVi2sWCZJODgcVNChmyUBIwalQBmWNR16/WtS2QqAvWkOxjmxZ12GsfU9LkUGRQTjqMV3HlOBmA/N2PWld5UkEikZA7+tNOzJlG6PhX49eCF1XR5NTiiw6Z3Y7V+MPxn8LSRSysq4PPb2r+kjxXp8Oq6ZcxyrzKjAkjJPpX4vfH3wTcWt3PbSRdPQevevQoVNUebVp6NH4Y/ETQrfyXWbt/KvleOM2/iiCBRhGlUE9O9foV8VfDLWbTqFwisWb1ya+IvENgtjqSGQc44JPQn/Cvcoz0PncTCzP6Uv2IPiJb6l8TfDDXE5Ed74OtrdQRlCIpZImBGewb8ia/TXxLaz638NbbTLQEpZXclvKeSYxGQVA7cZJr+b/APYE+JlpD8bfh1o87/K9rdWTdc/LJIVwBnuwz+df0w+H2gtvDvi3TlkIigvrW4ij5zmWPy3I/QntmvpcsqN0+U+PzOm1Uuj5e8e6db65YSaqVjZXd7S7jK5VZk2yrjPAz831FfnlrevSjStD1C9i3BfP0i4uGyGWWFi1sSB0+Xbg/hX6b6wrX0et6bK0KXEjQX2VUlXWMLGWGOQcAg+596+FvHvgyKXw5rGgQCSaHUo0niA+VvMs3MZb6gbT+FdGJhdHPQla9zzuCeCSWfxNpm8T6VBLa6hCo3ExSoSkmD1AJ59jX6CfsafHD/hWMdtbwSYA/dqTyEL/ADseuMY2kA9s/h+e/wAJb+28QzxWl4nkvqum3WmX+f4LmMFV/mp6dhVn4RWHiTTbS9OrSBrrQtWjRw4++qROsZA6YdGxn2rzHBPRnY3ZH9p3gbxbYeM9Ag1SAhjIo3Fc8EjqPUeh/rWvqE21ykvzAcEmvy5/ZB/aBt7y8itrzgNbqSg5yFAMgUDGMY3DIA4Ir9QftlneIJ4SJYpQGRhyCp6GvLrQ5XY0jrqf/9D9nv2w/F1z4d+Nngu4RPOjtNN1G/VBn/WwECI8dzM0eM8AAmv5UP2l/FKaNr+o6RG+/wCwxJbHJzmfP7xsjr04PI6+tf0z/tzX6T/tJeDdBu5zFpzadNaz+WOcmSOUhvdlAVB7tnFfyJ/GK/bVPEOrK8hBF9KpMn3ioZsfjivMzj3qzPZyVWpJ+X6s0/CyvYeDbOW6b5r3fNtPG1V+RT/OvBr+aM6tpNmqZWe4BZCf4fQ/h1r3XW5G/sCzSVc/6IFAX+ENnGPbOa+ZNQvki8X2Db/mhjlYH6Bh/LpXmwjpc9aUtS/468TXd78R7i+ucmRkhUf7qoP6mvUvhdZ3E98971aVwx47V8vTzTaj4xN6m6QXEaMvrhuP5ivv/wCDugHEG4AOFG7P9fwqK8rROvCR5pXPu34WafthhuLjjHIB5r7T8JRuZIpY87CASB0Jr5o8E2EieVAxyMDtxX1V4T0xhF5OSfujJ6V4s3qfS0o2R6xpyuQEGP8AGu5tVBiRj90fKM1y2m2SZyq5KAYrrbe2maONYlO1SDyeKxbOlI6OztiI+DweQev1rorNV+Ug5AGPes63ATbGvKrkfStnSow5O8bSAai42jatiJYgWHGcVqpYwlTGfusaq2GyJfJccnnpWpCq8AYxSBIcI0QbAANowKt20rsTz0zxUOzjr071KuDwOhoLNO0n81i+0oU79a17Jpi+6Q/L6msyyESly57ce5rWtAd5J+8T1J70rmht28S+WW6f1qu1lJvzjLHnJPFaNuhIywqZZAMsVHJ4+lUkZnK6rprXEeRw3TAOcD3zXwb+0r8Ozd6VLexgmRASTwcj8K/RC7UhCcAdfavE/H2nQXGnT2tyqyLIpU+4NdFKVmc1aHU/mf8Aip4Y33F0s8fyuhUfXtX5e+P9Kli1NnAH7otn6Cv3D/aG8JXGmX10ka/KjkZr8efizprwXE6OBgsQpHb1r2MNUvoeJjadtbFz9i3xdJoX7X/w1llO1LW8PbqHkUMD7EZFf2C/D7xG63/ifwnIhmaS2dF7t50D5HPXIQGv4bfhT4iu9H+POganaMUmthK8Zx0289/xr+zD4balcW3xi1W6GZIXuRMTnkmQugP/AI906GvpcvqWfKfGZpTv7x0t/dRaN4uhl83zHnG1ZAcKIJlwVI9m/UCvlr4iz3Fgt7qCsftGk6gJmDLgG3vQIpOPQShT7Zr6M8UQTfabPTBbuJxBNayBjyrpIW5Prxg/WuA+KOh6ffeItO1CVc2XiLSJobjyzggyBQGH+0GTOD0PP09ab0Z48Fqfn1HbR6f8RdY0W3GyK7Z54Chwwl8tJVPQHlHOPUA9xXqPw98baa2hTDxBBvubn7Pb32ARgklEcH2YkHuOCOK+dfiRrms+B9V8PePJQsslrELe9yM/vtNlMbqfd4XBH+6a9d0W80jQvEl3BMBLpt5GskJQ5EtvNhkwR0b09HFedtI7WrxPt/4JeI9a+H8dpq0QP2zQbyRJJwSyGJgNjOOPUfXNf0NfC74gaT408G2Gu6afLEseJFxgJKnDg/jyPav5vPBGrXGn32raID5sN7awuN/R1hJABB4OUbn3Wv1D/ZC+KtlpOhNoF/M7RwSBHQfMI2TgsPwwTnsayxVFShzIVOdpWZ//0f1I/bhlRfir4W1C2iYyHVbmOZizhGItiIgdvY7DwMdzzX8a/wAS/E1/rnjjVtT1IKj3F00hWPO0MeuB+GBX9jn7fnh3VbWy/wCEr0WQrcabLcXKwFtryyJcvls45AjclQeMDFfxJ63q1zFrcslwoBMzDAyMHceMV5mZ61me5lVlRR9H+JNS8hFt+AkNqqfQeXkA++c5r5K8Y3wtfFsckJKqsJ69iy4P588V9F+Lrx5Li8Ex3F7eXbjoWhQf4mvjbxtq2zWZpmIZRPGqnOflYZFcijodyetztfh+8mo2WlzkHzFjdHz32ucflX6ofAzw009vFcuO4YHvxX5zfAbQn1a9tbTy8orybWH8Ic5/nX7K/Cbw1LZWy26LwuOfoa87Fyex7eXwW59OeDdHdQgJG58HH0r6Y0KwfyUVAD05NeW+EbCKK2RnHznp+Fe8aIgjhG8gY56V5jR7kXY7CytZU6cY55rp7WJtqxp/FzWdprQXKZRs44rYgbyZtshz2xWTN4m3EPKjUMgcrg59a6K2gCsOOD/WsGK7jZQG+8oweK3NPul2KCT1xk/0rNpls6O2jdQWI+laawh2wOp61FZo2WaU5VBnFbkYjnY7PvdqQIrNFsOyQ4FRxfeO5eh/StKWLzEYY4XqaqvF5Umc8MKTLW5bjAYggbh0rqtOs3MYkYZ5rCtoCluNg6c4rv8ATLuzSNfMICoOc+tVCm2xTnyq4v2BmUyDjAA49aZBZnftm7+prrLS80iZFtzJGG3DIJ9f50l94v8AAOn3a21zdRHA+Zg64U9MHnj8cV3QwjZ508eo6WOVv7LYuIgWHcDmvJfFGhzXcDmPJKgn6j3r3HVfHvgCHTJ7izuY5HiXcUDLkDH16Dua+VvGXxf0C2kElpOkEchIxMcg+mMev0q54RrVGccdGW5+cH7VHw/uJJJLlYyEulbJ9GWvwi+Mfh51WRGGCMhs9yK/pX+I/jnQvF2gTadqCRxzJ80bRN5gbpzwe9fh/wDtG+EbJzcXNogIBJ9c81vQ5otJnPiJRnB2PxI0yMWfxm0mxXLKTMCSfb+Vf2LfBbxH9o+JniKSYKUJttm7oyrOhHH0J/ya/j48TafcaZ8WdK1Rvl2SuGHb5gRj6V/Uf8HteuD8ZdR02CTB+xWrpjkEosT9O/Jr36M2pRaPksbT5otH3b8ZZntLzUxbyJLc6YjzxuflLMtxiQfXlP8A9VcF4+0qTV/BtlfRSn93cGeGUdg65Chu3AIra8Xagt98QNQ0uWT7R9o+3gEL18woeo9Gj4H1rnNN1O51fwNJpCsJHtZHWaMLkqF+6eem3BB+tfQ8yaPnXCzPzo/aF8KazqXg3WbzR1iDPfW+oFWIG37UrwTBgei+cprB+D2o6jrvwftvEN1B5t74dBs5EBDr5dvIJPmHfaGJGOwOOle8/HjwjrNz8KPEZ0MC4vF065tWQfK3mxSpMhX1XIZvbd9a+P8A9kb4hQaX4h1bTtSi8uzvoYZpTnaolIMco+u19w9a4ZP3jsS9xn6o/DLWLHUbSae4SNja3HkxMODJbXa4UE+2QOB1r3j4Z6zc+FryzvJm3xzQCyvHiU8NE4EchI67kdVb/dr5I8GXsFzL/Y94Qs1h5W/aPvIrEA56Eow4z2Ir6T0p49QR7FYgIrwmN0GQqT9CBzjawww7YatYvSxzSWp//9L9g/2yL3w38S70+CpJFZdSWWOza3Y+Y881u/lgleCPNQfJnLHg8V/BF4p1AnxhdR3ACSfaizpyNsmfmHPTDE/Sv2Q1n9s/WvF9l4Xu/D6ypF4cuEuTdGQtNLeRyh02c4VFA24A53H2Ffi78XtatNe+NnibVtOj8iO71S4uoYgc7EuJGkCgnqFJ28+leJVr+1Sm1qfRUKHsU4LY99+IjXUNlBr1mCC9vdxNjoTgZP1x1NfGnxCjdNalso2VzuikGOmUG3Ir7q1yPVNd+Ht5JCVLWYvLdgeubiEMPxzX55+PIdQg8S2EdxGUnjuhG38R27Qc5981VtDRPWx+pX7I/he3WyjvLsqibAzO3AUMM8k8V97D46eBfDmYrGQeXGoDSMQvTqVB61+Yfg7W/FeoaHB4V8CQNu2gO5Gefp047dfzr1XSf2ZPjJ4kk83UriOPdiRjICQD6Y7eteVVhFybkz6DDymopQR+kvgv9rT4cX0yQR3m3ccLvUszemFUV7RaftXfDS3lW3fWoBKOSjsFz7EZyD9a/IDxD+zz8UdDYQWpW9xzmH90Afq2M/hXkmq/D/xtpl20+pWUscp5JfkHPuM5qFRpvY1lXqx3R/Rx4M/aN8DeJYlfS9QhZ92GVHXKn0YZyD/OvbLTx7p9/gxSqzHpjvX8wvhy18RaO32+BDviGWxlT+HrX3L8K/iR4yQwXCzSlZcB45DuGfb0P0rGphVumdFHFSe5+68Wr287IobDkDJ6itm21aSOdQRlVAyP618LeBfiLqU1lHJfNgA7T1yK+i9K8Rm48q5cnAwD7iuGUeh6dOdz6w0nUEmtxIOjj866e22+aCnOBnnrXkFletdaaIrVgMgMPTivRvDq3IHlyEMwGCcdjWXKbHcWMLN5jEZV85qoyJbtmcjaOh9RXSWIffGM7cDB7detZmv6ekMBByyDgeoPvTUSebU4bXPF1ppcGyD5mJxivBPG/wAbrnQeLOHMqAklice3056DrXSeMbO8+3yT2akhAQg9+35mvD7/AOGuueI4pZNYmwgwyJnaXP8AEfrjgeg967qEYrU5MRKTVkfK3xH/AGlviHqGpPDaXlzetMxR4rY4A2+u3jgf5zxXk2m+MviZ4wtZbvV5JIrFVLRo2d8nOcAZ6fUV9vp8FdPh0oaZFHHbwyE+YcYYgHoMdBj885Oc10P/AArPwnFELWRTtHAViAOOmePmrqdSK2PNdFy1PzAl+Injy3mEenQ3sSE7d0ThnbBx/DjrjpivVfB+ofEfWZHvnsdTmUjBZ43GR6bzj6cV+ilh4D8EaW4nWxiMnABdQxOPQnoPYYFekabc6bbRLDHEqRr92JhtUH/Z7Y+lL6yifqvmfAmgfCn4g6vprR2ltd2s7hvM822BDKO24MpHH4/Wvzl+OvgLxppayy2Vq0uxWDkdRj1XrxX79/Ev4nTeEPDIkSElZXCsQNzICOSuevFfnf4m8RaTrGqXl/axPFZqGESzkM4XGAWOB1NHtU3cuOGtF6n8ufxV1e0Piq0jnhMM0E+0kjGSQe1f0qfBRLHXPiXP4gkj8kNYQkDOCAY4j1Hstfhn+2f4A06PxcNX0xFjInXeAOCfwr9tvgDeQ3fiGxW6faTYxpIq8FmMe3GfyzXrUJ35TwMdDlufR3jfW7y2+Oml2sISGxuGVXwf+ersCT68yr+XatL4Ra7Hq3xA8QaPfDyYbkyxEnkq3yBiPYq2TXjPx+8S6bBq+n69pSPF9kDGSZSAVYrGQuPQtA9dP4G8U2Wi/HrV/DFuWKPPbSvHgA7biIKXB7gkZNe3Tq/Cz5upDRnQW/hu71bRPEvgPU51WadbhYpVG5leFtucdwVBH496/FP4O+K7e18R3FhdxACHzbe4IyGBhkHJHurdK/oI8RaLYW3i+bXwAi3DIRuO2IxzRhJMDHTcTz7V/OBqr6noPxj1zR4l8ie6vr2RT1VmCEsox/udPas6t1I0o+9E/Zn4ceLrFfFuoaLcBGZrGGa3dx88jBQ3H1GQf8RX1f4YNmb5dMvpVKXcHmQyA9X271BOOuQVP19q/PDwfbQXk2n+JtNm3XmmTJZ3Sk4Hy5KH8drp+AFfduhvf+JPBOjzOY4LqxvpBEqqOYnG5W45OGUj/datKc76GNSFmf/T/mC034oapYFrHSLkoEw0Rb7o5yGA9q8iur833iiX7PMz3U7bi7dWkY54/H0rB8QeIrORYTbx7bmM4aTgB1I6EAdQe9cdpWrTHxTbX8p5jmR/++DmvBS0PqHK7P1GsfEU9x4c1B9IYGPUoo7jaehfYRnB6FcEcV8R+O7edfiZAXkbLTKSv90lQpx65wDX118Mba4174X6bdQyL59uZLdhxkGLJx+R+tfNnjvS47f4kafe2xZkZ1aRWOQrAkZ57E/ka06CiveR+537KXgPQdL8N215IFeWdQDIy4Oa/RjStC02SNGMQVVUZAxzX5t/s3+Ig+gWmBj5QGA6Agdq+2o/FwsishPTA68ZxXztaT5mfZ0ILkVj2G/8J6FIWDRiVWHG7tnr06V5vrfwn0G+B8qJctxz7fhXHXnxds4XMSzA4znB3Yx9Kgs/jl4Ua5+yXGq2iyrglCw3KD7DJA96yTkauK6s8z8U/B5bdzLHbqQvUY5x9a4jSrCy0a/WO7j8sKfpzX0ne/FzwTqFwLGPVbbzjwFZgnYn+LHSvPvGGl2fiCweXTSkspXeroQQcc8EcH8K3jNvQy5Yo6bw54hsEjxE4bnnmvcNA8Xs0sVpE3yjnk/T0r8zbzXdV8Oag6M/lMucgnjj+teyfDn4oJdyLbyS4kTvnk1nOHU1pyVz9dfCviaOUxwRnJPy9e1fTfgu6jurkRLxxjJ9R2r85/hzrkV/FHsOWA5XPNfenwsnlkv4/MUkBc5zkYrmlZOx2paH0/p2nRSW5llB3H5eeeV47VT1GJzHKsmCgAxnvXb6IkZiyDkdeOBn8jXP+J5UVWReCwrbpc5oyvKx84eJp44DLBLgMx/IV4Z4p8f2GlKII9rOvv0P4VZ+MHiG+s5X8jcN2QM/L+tfEWv67ZPPJeXcpWOIkMck59gO54xx3pq4Tkj2jUfitJKWViMqTxkYA9cn+tea6j8aba2Yx2JlvWbkLAuRn0ySFxjnr0rwTX/GS3lxFZ3EWxJjiG2LYY8ctIw6L69h05NeceK/GngjRrdJPGOpja07COBZNibVzu4UjIGO+fwrWNNyOWc0j63j+M+vXUy/Z9PMPUFZbmJeMZJwNx4r0TRfjV4h0oR/2xoc1ygzkwSxTcfQMCPyr8zLD9sT9krQdWmTW4LGRY1TAZFOAc8H1PA45PNepWH7Sn7LXiTTIb2aC1tJZl3qLZ2t2VTyoBBGWA689eK1WHl2Od10faHxE/aA+Fep6LFoupPNo165J8nUE8pSe2HbIPJ6Bvevivxn4w0uwQ/PHIzZlyh3AqK8g+KfjTTvFmhRap4J1ya/0yVebbVxuDnOMRuw3jgYy2RzX58+KvGuvaHpV9e6HNO1kH8qS3lO5oMnoD1254GOK0VFohVo2OB/aV8ZQ63e/wBn243yyy5XHJJJ7Yr9pf2eI0l1fRNRkjDH5WLd2WKFMjPfOa/nA+IHi9pxKdPLeZMCC4+8q9wPT61/Qf8As73Rso/CNuG8y2bTVkd0z/HApx1PGcCvToK2h4mPd1dHcfEQx+KPAGj6hGTHHdG6hnXBxvWaQJk9OuR+NLpmm30n7T2j60dyHUfD0JkDnG+W3G3J9DnOfpXN6zrUd58PX0h3Ztk8rxhDj5TdYOTxgAygn612th4k+0fFzwnd6nEksosZraIqP9ZvQtg+4LA9uc16UHqjwprf5n6BeJ/Cs+vfDuC7P+suVljXA5jMJDIOuSDkjkdK/n1+InhObQ/iU2oy4cXDTTTITukVTG+XQ/3gDz7Kc1/Qh8O9StvEfwcluZZiZ9NuOS2S8kStsY59kI6/3a/KX48+A7DSfHEut2cHmNbQTmNgPklEO8SAYyOUOCPQ4rpr2spI58Ne8os8d8PeMbm18S3un2c5+z3lzcHcp5EkUzOoYY6hl/HNfp/8D/FDeJfDwvdNRHlt2WdEz8r4K7029SMgfnmvxJ0vU3Hi7V7XS5Sd1/dTQMhzvUy7kx7lTmv0j/ZD8SpM0NkjFbhJJI5V7fMyKGB+vGOMVlSlaRpWjeJ//9T+PLx7oVxpaTK8fkzW7skiHqCp54rz3wrK8fiCSz4ZpbeZgTzghGI/Hjivtz9prwjNpOtXl6ELqGKtIRjeD91v6GvztlvhZ3X7ttrsdoYHBH4ivGprmR9JJ2Z+kn7M+s3Enh6Owmf9014jnJ6Myyqfzyori/jpPfaD4z07UEGTDOIpVI42tj9OB9DWX8BtXi0/wyA8eHj1Dah6ldkSyr+BINV/jdqw1PXLWCVApnlznqNz8H8D1+vNJlweqP0w+Bnj+Ow0W0cy7MqoHP3ccYr3zx/8dU0bSgVkO6UEKqDJc9ABnvX5x+ABcWeiRQXGVAwQTnjPriq/jn4gzpfL9nlLzWS+VEp7Z6tn1rynQ55n0Sxfs6Vz68j8f+EdNK+JPixcvLAVOLGI7FAP/PQrgtn0zj2rU03/AIKR/Dv4a3W7wn4YtGsfKEcgVdpdkPyspHIx3Dda+GPht4W134qeLLfS9euGmjZjI0bZLYPI/T9K7/4z/CTQrfxfNo32HydP0axjZEC43vJyzH17AZrqWFgtJHnSx05axPtlf+Ct3wy1bxfHqVzoAa3lgSKaCRVdVZGJJPyc7l49ABX2p4W+L37Fnxl0PVtT8K3TeE9ThS3ksrqEGJZJZlyQ0at5bgNhT8oIzX853wx0n4U6r4m0S28bQ3Fhp8+oolxLbvGLhbfcBIYw/wAhkAyFD8Z61+9H7N/g/wCA3inXfH/7Ofgi5bxf4Ksp0udD1m8tVtbvBXY8gRSSgLDgbucZI5xWtXA00tNDnpZjKTvqeA/Fm417S9XnsNSeC7iLbYbqBt6Sn1DDoT6HpXlGi+Ip7O+V0LQygjkdTnpXBfGKe++B3xBv/B8cx1HTonYhm5OwHGCD0P0FdN8PNc0D4hQvZWo23kQDoehA9PpXBKnbc9ynV5rSR+tH7P8A44huLO2uZWwzgI+em7v9a/X34R6gLmSGQAAMBk1+GfwHspbaGESgnDg++RX7NfAy6WW2gmkfKnua8WsvfPdoyvFM/RLQ5II7Vi2CzdCa4bxJKxWUqASM/pXQeH5/NtzsOVHGa5XxRuSGXHBYYz9a6klZHO9OY/Mr9pXVrnTrdiC2Jnzk/wAhX57+JfE58PaadVv/AN9M3+pjyAB6seOw/HsK/Yvx58PNO8QxJrHiZfOs7UmRYsDLMBwPpmvzG+LHgG48W3lytlpxSFyyJyFGAOoAzyPWuhNORzRbtbqfniNQ+LXxQ8Wr4Y8EnyftDFnveQwH0AO0AcYHH418aftMfBzVPDHiv/hCtUuLu6isYftdw6yFd0khPuPkx29+ea/XT4W+A9e+G2sS31nIXcgHHXgdBk9a5z4p/BCP4veM/wDhNdZu7zTp5oRbyJDCjxsBnlgcEdexrtpzhFaHm4mjWm9Nj+c3QPh94P8AFes2mjXMTWlvc3S+Y6OiSpb5wzJ5hAaTGcAnHrXuvi/9m3wfp/7QUHwv+AesaprXhy6iTydQ1O0WzuGlKb5B5McjrtRvkDbhvxuwARX6b6d/wTX8E3XiE6r/AG7fSpG24RJbqvAPGCQ3fmvoLRf2UfDvgjVo9S8I2V1eXKwtEsu5mYbxtbGQFUsOvA9M16H1mEkjy1gq6vzH4TfErSvir8H3SBfEYvogwTyN5LxhegG4kfkQa5Xw/wDGTUvE0baHrK+QWQqV2MS+f09+a/ePxR+wXpt1qaeJfEcEMqzhsiVQxQnj7hyN2cnPr2rwH4n/ALJnh+x06SDTbCNIVOGn2fOB7e1c88RSeltTop4StHVM/I+78GzpbPLFKGAwQT0x/Wv3g/ZxuZ7u08LQb3Q2umiSV1PHlGAbMn/eJ/EV+Wmv/Cm00qQwTESRxkjPOD+tfq3+zVeaTF4FvLtyI7M2EFvEW+VgUhGcfTAIPcGqpSvLQ58ZFpK5wWk6hqmv/Cd9UictcRfb2lbOSAs0Ei5HvsNe22eq6XoviLwFq+oSM0S30u5Vyeu7jI5xtGOMdeK+afgXq97c/BJHkVi17dS2c/8AsZlVB/31zmvYPEkUkVp4cFxgfZNRRFH8R9Qfxau6LPIktbM/Xj4U2WkWGl69pTf6OlvqUsAh6jybxC8Xvxzk89K+RPGGj6drN9rXhKSNYLi0JurGb/lkRcRFbhOudpzub0IyK+lPhnqFzp/ijWrzUhE39o2FhcEMh2LPaRSQkA9GOBksvGTXz18Xbb7J4+1C4sx5tnBdSh/lwEWa2YbT9JGGO3IrplL3TmjD3z8U/hTp99pnjLSzfzRurtLGXjbeCvK56YztJFfWXwz8TyeDLqbWCjTPIFjLxE4jlVzJIxxwCwaJvTBr5O1PRr/w98QLaxmlMBN5La5BBKyD7rEZ6P1z6HNe5+D9SXxH4j8W+G7QqI5IDPZpEBhzAMHAGeseQcdwPSsbvY6bXP/V/GT9q/4eNFptw91GNjxOSf72054HqOuK/AbxRa/2brD2oJJRxgnrX9Wv7TnhFrnwpcXcwTzLabcAc53FeR0IwQCfxr+YH40aUNJ8bX9kqkGOdh+CHH8sV4WDndH1eKhyu57F4Cnnh8Cahexlv3GqWMg5ySsqOhP9K7P4i2X23VLCRic7o3IHqDtNeSfD/Wh/wh+qWMmTmWxZD/tI7j/2avebPTLnxr4o0LS7MZZpRu56rjOPpVVXZhRhzJWPtnwN4fs73RIVuVmZmVduxCeR9P616npX7KcHjEyX0yNEsuDjA3e5PXp6V9j/AAj+D4j0C2i27fkXlR2I+lfSlp8Kr3QFW5sfMBI3lVQsfoQK8OWKcX7p9VTwCkkpLQ+N/h1+yv4z8ORef4YvYHZMusVymWJ6bgecD2rrPEH7NGp+NNUGteNrTUI50txHNLaKoRkByMq2c9fSvruz8QQ6Yxj1aEwvkAM6PEcd+SMV2S/GDTYrcvHc2zqODvnHQeuKFjJPRjeWw2SPz48N/wDBM34JSa8NS1SHXLhy5cJ9pjiRWOCy4VPfkiven+Bvhn4Qmey+G1r/AGJJcqEmkW4keWVF6biSTge3fmvSPEP7Q+nq5tbO7i3Mzf6gZPv/ACryuTxHr/iaWSTTYyVYljI5JJ9Of8aqWMk1ZsUMtpx2R4Z4i+C3hO/1OXWfE0aXIHG1ss7N1xk5J9cmq2h+CvDumXkVxoVjHbSDAd0Xoo9T1zivYJ/CE11Kz38kmeSRu7mug0jw/Dpsapy+O59K56ld23N44XWx6V8LNHW1u4I1XcAwJ9M1+pfwo021s4Y7iVj8/wDB2z2r4D+FdiPtUc8gXGSSD+lfof8ADuwjvYUjhdg2AffmuRu+56UKaUUkfZPhqV/sxQgqpAx36+lTa9YC+gMMn1BHqOlWfBVjN9jjhbJKEBie4rpNXsGyfL4xXVGL5Lo45tc9mfM3i/wvd674cfTVGyXqfpXwD43+GHi/TBMumz7NzYZHGFB7YPXmv1M1WPbKV3YI715/4k0G01FRvXLE7iTyDj1rNVbaMbw6eqPxT1tvGGgSBtVsn+XO5gu9ffkc496uaD8Q7ORljvQBGuRjGc5/z6V+jniDwjpgMrXMO9iPvcDjOa8o8Q+AvBd4qmbToZXBG47fm69sU1WXctUXtY8W8O+NvB6bTIqLICc5IAIP416mvxQ8I20HlyGKOLvucBT+FZVx8KtAuGX7PpsCIGzwo6ds1fPwr0y8je2ubZGXHKgYXj6c01WS6jeHb6HkHjf4s6Fr8xh0GP7akec+SuSxX36V5Bq3hTxH4zsDFc2yxBj/AKtiT+fsK+yY/hFpOlRlNItthTkhegHp61XtvDc3nI0JZ8ZD/QdfWp9s2yJ4eyPxI+Ovwkl8NxyyT2vllc78f/Xrd+Dg1AeGYvD0AI860v8AByD8624RAR6Amv0Z/al+HllqPgr+1V2vKqujFP4gORmvzr+AfiWwgjSfVI1821E4gHQt8gH65/SvWwNS+589mlNcqseO/sv+KZ/+FUTRaxgmNraeVDw25vMYt+OAT7ivpn4ipHJ43jtnUxxW9yiLgZzMWVgcdOQcfhXwd8FdfgtbbxJAjGR4YbeKSJRnDQhlb893X1r7/vtUuNT8V6Mlxtls59R0/wA0SD5pDNGQDnr1QnNetGR83Uj7x+knwx1238Sw2u102Rx3dmASN4lRY5V4z0IdsGvIP2ktO1DRrLV7nTZDJPe6Kl4wXJXz4mCc+uVQfnVH4P3Nxa+LvFMFuFisodQWYRHBKMQkPynAOAT24Oeeleg/GC8W58C6hZnartpJSKQnkGUlefYEKa2UrowatK5+F3xQla61O48dxptk+yC7ixxl8tEuc+2CfpXPeA113w9400BNOdRPJJCIHB+VvPQKyn8WwRXd/FGz/svwjoMA/etf2LxzfLhWCTMMe2DjvXA+Kbq08LjweYuHjjkJkz8yt5vy5OfQDHSpT0Lsz//W5z9pvwCL9BYKREtxFHJIw7feHXvxxX8g37UFk9n411GWT5ibl1G3p16/pX9sX7SlsieE7a54MhiMXqS+Dk5/L9a/jS/bHhaz8balpsiASwyMjcY+ZWIPH0/nXzeAZ9lj1qePeCplttDwOGuEifGem18/0r9Bf2NvC7eMPilDJMu6PTrdZSewd+AP5/lX5t+C7uZrKKMZwIsHPsRj9TX7I/8ABPfSY0g1bXWjG+W4WLcOpVB0+mavHPlhJm+U0+erFH7l/D9BDDFEQAh7DjHpX0h4dyTs3csM5zjH1r5v8ITbY42z0AHtXuOjXZeUGPJKjgDgc+tfKt6n3cKVke+aSYDCVcjZjnPIHtz61yXi7wF4b1K3NxcaXaSGTkboEJ598CpNCt7i41KCcOdqgkr2Jrq9fvlkiEK5yvXuAfapdy/Zo+Y7j4baFGDJBZQQ7OBsjUEfTArjdR0a1s45BDjC5HHrXuWpXKTq5HC5PPT6cV4/rkd0YTn7pPOKcWyZxSPIbsxmYwx8sOWPYfjSRRYYZ7Gt64tIwoVemarm2DkBelaGKR618NLkfbFX8Dj0r9LvhHBGkCSqMF19PevzT+G+E1SEBfuMB+Br9N/hQ+5bdnAViNxGf4fpStqjoitD7f8ACtowtRK3JH4HFXNRiE3PIyKo+G9VjW0MbLvJxzUl7rMMO9ZwRzXrxt7NHiVFL2jdjgNUsDLOybD061wt/b3EAdHjygHOOv5V67/aUMsuYiCBWdejTrlWMuEY9SK46lJPVHVTm1o0fLWuWsU7btmCO3/1q499Ji8xmYZdiN3Hb+lfROr6ZZJDJJblCr8ljjNeR3FjJHNJyNr9PeuKcbHo0mmciNGRmKA/MxGa2rfw6zNjb5kbdTwDVqGABzHjG0DkcZrsbNbgtGqDjIrI1sc63hoGHcfmJzwRXi/ioS+FtUS4WAGKdsgNxzX14mmm8UqvBXkH6+1ec+PfBH9saSysu5kBKk9QR3remmc84xejPhf4xWsOreAL/wAkBlkR2Cjqp7fSvxP0SWz0LS5rCLi6hadou5JLRf0Br94r/SWms5NPuoj5ZzE3pz0NfiN4s8Nonja70tIiJ4ryaHHbaJFGOe+BmvXwWjZ87m1Gyi0fnj+z2Zb/AMfeK7KKUiObUHDseMDzWIBBz6Yr9VNHu7e6h09SiyXIudOMRJOVa1nmjPsQV4r8j/gZevpXi/XDYoG+33k20Z5UrcYA/Xr6V+onw11z+zdOsv7Zg8ybY0sLjruF2eR7YY/lXtLQ+TrR1Pq74W+KL+x/aE1vQ2dVtdT025WCPghds6yL9CW28nnB969e+IMbar8QApZAt3pUUD2zE7fOI3qyk5H3lHTFfLfhDVdIm/aRsZ7MswjgP2va3VWMTEg/WJufwr6m+Kt9p9n4zyzhCTAQAMgxDcM5/Mir5jmcb6H47fHXSp5dOi1fT58x6dKIGtl+9CZvnPA6qWBIb3r558fyzat4dspixLQ5Fsu77svBIweeeT9a+mfHt3HqviLU9L0SRopIYJZIklUbphaTDB3jqpU5HTFeFfF3Rr+106zvLWxZXtNQE8yuCjMpjYEjIG4ZI5HaqQW7n//X3Pi7rM2o6SBId8duWk5/2Bkn/wAdxX8f/wC2W73/AMTNUv3HyvcNK7f9dPn/APrV/Vx8TbyO203VopmPzW8gQ9c7uCPYcmv5av2n9OF3q2pSvwTjHHULx/SvmMBLY+3zGDufHvg+6drlY4/ucAj6n/61fv3/AME79IRPhp9tIz591OxJ9Acfpiv56vCNx5OpRNLjCb3I9+g/rX9FP/BN68i1D4MW8ifejuJ1b678/wBavNlakdPDzTxGvY/V7w9D+6RhwoGCPevafDkUyKAAeOPr9a8n8OwrsUL3969n0TUbWzuIbac/NMcD8K+WSuz79bHt/h+D7HZxLISGH3v6Co9TuIzdCNFJAOSc4ANU5NQEUB2EkjoM85rDvL2eeLKECTr839aqxDMnV5A4kRVCgZ/SvGPFuoW9tFtk4bpjNem6zqVsq+Wx2sFPbivjr4jeLBG0sUTEgZORVRiYT7FXxF40EV6ul2zgySkKijkkmu801JYbJftHLEZJFeDfCzRf7f8AFFxrd9ki1A2buuX9PoK+obayiupfsqEZUYI9BVu2yISPSfg5pV9quuoYYiUPV8cfnX6R+F7UWaReWwDRjaSPSvmn4PCyt7aBUHlKRtZAOn419RQyada3EfkLhD15zk+9S0zSPY9z0fXmW0C2zbnPX8K3oF1DU1JwcnstcJ4Xu7C6mjijbYWI5xwK+mdN1LRfDmmC300edcPkvMRwD6AV2Yb3vidkcuKfs1eMbtnmUHgzVjM1xsZCvXIxmsHW7W8t7aSNh2r0DUPGNxCvl3kwOeao32padqdoeVJx1raShayMI1J3Tmj4K8S/EafQtU/su6kypbJzxVO28fQ35VvM4J55rzT42eHNdvr+4v7FchGK8egNfJX/AAnl/wCHtQ+yakGhZDnk15so6nrxtY/SbSdZSeRpCcbTjmvSNK1WGRSqnoTwe1fA3hL4qrMEBfcG719FeDvFUN8xlHyliBkd/wDIrNxA+3vD+kxyRgluQoY4963Na8MLc6dv43EcGvMPBfiCSGKKBm3AcH1Ir3eLW9Nv7DarglRj3zXdRUXE8rE+0jK6Pzk8aaGNI8QzaY5z54JX3xyv5V+HHxTe0s9f8S38KASw6/eRF8/dy2cH61+8Xxt1OysPFdhdEbik/Oe4OK/n7+O97LZa58RY9NOFi8RvLwOEJaNm9eea68NLVnJmWsItn5HfBdki+JNx4dLq8i3b3O5T9yQy7sfQjg9uPav038HJLHrelaXftzchrdBnJBmKuox6dcj1r8tPhc0OkfG281MkhJ7mV2GOVRc7SfTqa/VX4aNa+MvHfhi3vEeKW1ltFcqwxIoiLtgeuF4717e6Pjq61PQvBttNp3xzubLT5U/fW29JByF/fOmAfQgY4r6o/aB0y5V9OurdhhbKMxuxwpDMCOT/ABKSy/XivivQPFEOj/E3wFdRwBfOu5LK5kY8svmjYhHbAP519yeOta03XPh9orauyw3MbPC5kG9VVZ98Rx1IBIU+tJy7nNy63Pxh+K99cXnxFWSxjeJra9vbCWAnB8iZlB9iMEn/AOt04Pw/q3jLWtO1XwVZ3DHCGSG3nbKGSNsD5W+UE5HbpXS/tKPc+F/ifb6kGYR3Nx5yzH5Tuc45x79f9k0zw3BF4h1Vte0zEd5FK6Onb5wRgk9QcjafTg8gE6rYzZ//0PPvj7bDTfB2pzQfeSAsrdwpP8q/mt/aLiSUS3jclkLEj0LZ/wAa/oj/AGydYn8L6ETA2YLlWgIz9SPX26V/PP8AHIQXVpJIe8TJ6jPU/rXyeBezP0HMIbs/Mi2neC/dAQBK23jsM8Yr+iL/AIJZkv8ACrUbdjxBqUgUD0ZVP9a/ncuEMevxxg4y6/qa/oc/4JVReb8NtVmfo1+2PwVR/QV2Zv8AwDn4f/3o/ajQAWWNDxiu1fTP7RmglJKPCdynNcVpDskY9celdYVmnkR4mIIG0jPavlEj9IVrHp8V80n3ssy4qK5umFvmVuQen1rEgmkjjySfl/WsHVtW8i2aVz2PBGBVKJjKVjlvGeuPbRSAtljyMGvkTxFqAvrxo+uSeT716l4x1gyO7M2WxwPavJdN0ya61Lz51bGcj6GuhKxzyZ2Hgm7/AOEat584H2ghjn1HFan/AAt7Q9O1hLG7kNvM5wsjfcJzjBPb8eKG0hJICm3HFeKePPh1b64HcjccZHHf2ppJ7k3P07+EvxJt0lWOXK7sENnivrz/AITWJ7P7XERgg7c9q/Db4Ra94o8IbNMvJHa2twBG0g3Moz056jFfo1pPxS8N3vhbyPtafaXXCoAckn0H1pqmhSqNH2X4M+Imn390IUmAdT0+lfTmreLdbs/B8l54agS4uyv7kSEhC56Fu+BX5ofCO20XRb5dW8SXDTM5DFF4QZPfnJr9HPCHjPR9chihgCmHbjjjp6DtVwgosirUvpufmhr/AIR/bd8TePv7dHieaWFpeLSFBHaIM9ApHQepJPvX6HeAtA8faZpcdt4ouEllYfN5YO0H8a+gxY6W0YktgBgdBVK5tIwn7lTu9a1dOxLxSaStY8W1Xwlayo8Myllz065r42+N3wK0rxJZSTWaCO4xlXHtX6KTW4MgPIrzzxR4etrljNKpOeGFc04WZpGrqfz/AM+reI/hvrp0TWARsbCsDwR7V9W/Db4lSM0YV+H6Z54rrv2jPgdb64Gv7FCjAHHHQ18C6Zret/DjWk0jW0KAHCsT1HbFZONzpU+bU/bf4eeLD8gaQnzORnnFfRmm6isaGSNsA87T0r8pvhh8TUlWJkbeT3z0Ffa3hvx4Lq0KzNtcAnPbH1ojozOpqeXftBXzPrFrcxMN5nUAfjX4m/GOzuLnXvihbyhVZtch2kr/AM9okPr3wMH1NfrJ8V/EEd/4rsYs5CN5jgdgK/HD9oXX3t/GvxKuY1bK6lpMoA4BzEK7cLLVo8vMX+7R+TGj26Wnxk1iZMhZ5VtlX/ZLgn/0Gv04+HReb4q6Db2AWFS8EkjseEAhkQkd8g8j9a/ObxNos2jfEe91pSRbPcx3EUmMDL4GP+AljX3f4PtNSl1zSrvTsi6uBFHCc5BZpDn9CRXupnxtYxJtblsm0LVWkV2stfVyTyQHRQM/Qgk+9foF8Slu734S6paabhzYzsjc8kRqZkZfb5T3/nX53Xzx2mraj4cnQxTC7LhW/wBgkn2GMH64r9EtM1hrz4XXdzCi3U19FA0iAZ2kIYm2j3Ge/JOKHujB6I/Lb9vI3SrpWr6SgmR4kmwRjyp7WSIyD6PG4I9wa4P4O39xrupWEumgI0t/5Uqk4yVIP4Ar2NfSP7RVrb614C13SGAkkjtnmhkAw2Ej4I64BCjivl79n4PbpP4otwFRI7edR1AknV42H1BXI9ue1b9DE//R8Z/bb0U3ngq9mjBIsgJV9sdc/ga/m5+LN4GsTbk8qW5Pr0r+rb9pnw81/wCHdVsZB5glhfjHqP1r+Tv4nwt9pvLGUFTFIyjPHt/Svj8FO+h+k4+noz4K1UrD4mR5B90nOPXH+Nf0R/8ABKKz2/Bae7GS8l+5Oe+OP6V/Pf4osZH1n7TEMkOFYDjtwfxr+jn/AIJT6c9l8DvIuBh1vHLfU+n4135s08OcWQQaxeqP1dsXZVBU4ruNGnLEGUciuStoAiABeOtdlpFhLIglX8q+WiffylZHVqgYgr3rkPE9uEtG8wELyeldxb6XqE6jyFIPt3HrXm3jBdUfVF8OQkvMAGlPQKG6D61pE5ZVOx8739odSu90YLKp59xXTwaTHFFujXArvE8MxaYmJxyx6DtSz2UTEsg4A49K2MedtnMafppnJ4yBV6XwiZsMF59Otblt9jt3XzGCIOWz1x7VtyeK/D9q5SScYPpzx+FFi9WcLD8Op7u5TauAzAEdjXsHhj4RpARPnGDwPQ1Q0b4h+Fop0Fy7HHGcZAr6T0jxl4XvLYQ20yx7ACdwwf161eo3TdjCg8I3VnEFgySPWvVvh7rGqaPOlrcZJDZ4q7pd14d1C33RX0O4HP3hkVrafqXgiK+WOK9E83J2oMghfccfrVJBGk1ufZfhTWJ7i0WQ8LweeuDXWLeB2ZRkgetfH+k/HGxsQ0flAKhxnNW7X9pTToLhxKFx0yeOnWt4p2M54d7o+tzAG3P3PHNY9zZhwUfnFeAL+1J4QjRlmGBgdu/51mzftXfDyOQLc3CQZ/v9xRKFzJU5rodt4t8G2t8h3gYPX3FfDXxp/Zt0Xx7pMtoi+TdJnypVGSGHevW/GH7bf7O2jS/Ytd8U6bayuRtjmuUjdmPQBWIP5V4D4y/al0Ce1l1rwfdJfRREEqjBtwPcHNck4OLKXPc/PK4u/GfwO8Xp4S8YKYmJ2282D5co+v8Aex2zX3x4F8ay6jpontpMhhz+PNfOH7V/i7R/iT8J4tclTyr23eJ7b+/u3Dp/KvQfgZbXUnhtfNUsxQFs+tZy2N+Zyjd7nS63qBvNda6k5cAjPpX5R/tD3sE/xE8eWc3Cz/2aAOcbgqc/UY4r9dpNPQrcTMmcDn2r8ef2hGM/xM8ZWqR75ZEsPLwDnO0YP4VvhviPNxvw2Pj7UbBbzV/EHg+/Vj5TpPCB95X+XP4HGf8A9dfZ3wy0TVG1HSrGaYxeXMgeXphVZJFBPuQc1826q9lqfjTxNpts4N9aCOJiq/fAjXn324x719OeBfFM2oumkXO2B4UinMhGVZgrHueGOBmvoKbufI4iOlzyX4zXd94Z8fahNcfLPb38ZlgUbv3c0jZOe+d5Przjivsr4aJcwfDLUoRN9oksW8hcHBzJIDGwB6EMOtfI/wAXdNn1X456nbOkjC5sobuKNgU5Ko5PODgYbmvr74BSp4k8HyzxIFkvodwVTk77XbMM/wDAkOOc8805HP0PlH4mXA1TVdG0/XXcDWNGnt5Ny4Yy2jAMewxgHJ96+dvhPZXEWPAUCIrNBNMuT8qqmwrz34V8e7GvsT4/+HYb7QLK/WIiezvJVBAzsE8TblPfB2g//rr4/svP0H4kaHfSIqRwQN5qg7kZGJ5z75Bx2rZaowluf//S+gfj14Za5s5lALKysPTIwRX8iH7Q3h86N451qyZThbhtvfrX9mfx8keHTmZTgLnpxgYr+Sz9qrSWuvijfggATyFuO2TXxOBep+pY2Pc+KNE+HNreQjUblAQzDlhxgf4V+4//AAT5itYPA+oWNsNix3Z4+o6ivy607S5bpo7C3TEUSgA+tfpd+xDerpGq6n4ZmIXzVSVB3yOMV0Y5t0mTlyUayP1QtI90YL84r2vw5p6yWURGPQ46143a8wj0Ir13wbdq0SW7Hoefwrwb2Pp56o948H+EYtUklEDlHxhTj7v0rxT4seEofAdxfa5PmUTHfuP3vkA4r6w+FlqpvjLuGDwfwqt+0B4Ei13TmVB9xd31pxkcc97H4DfE79rDTvCOoT3OrWtxGqZOxIzISPXAr5W1X/gqX8P7O7Olf2XqaGTAV3jRV9M43kj8QK/RDxb8HPDniG+vLW/t1LvuGWUHGa/Ij9pX9hLVYvN13w18ojxIsnUKxP3Wxjg/XNevhvZNWmRVpVlHmpan1lo3x81Xx9FJfWEVwUhCl1K9Ef7pxzwcV7sll8Q9H0+2125sJPs1yoKZ5yGHB9s9q4f9iLWPB+t6Hqfh/X40i1SKxtY5YZAN2Ysqw9x6fWv2G0PR/D2v/Ca0094EZY7Vouep8vgc0p80XZI41mNrXR+Xdu/iOKIyXtrKsJ+bftOAfXIr0nwz8Qtcjtfsc0Ek6fNiQD9DX7SfCv4beANe8AWvhvWNPjlilgVSSM4LDBP4Vl/A/wCD/hbwrPf6bLaxXCpdyxF3UHKoxA/AAYrPmbRos1gk7x2Py18GeMry0svIvpMSyMRjG4j8q+k/hj4d+JvjLUgfCFrNdLkgELhAMYPLcY/Gv2H8V/BH4a+KvhVqcc2l2wmhjSSF1iVXVlYcg4z/APWrrfhj4S07w3Yw2ljEiBUGdo7mr5ZJq5jPPoyptwjrc/NnSv2dPGKS/wBl6/cLaXzspFs0bO5DD72QQMe1ek6n+y/4c8IQC88TjU7uWcKIEkCQRSE8NjYS3XoM5r9RvFPhPSrnxdoniKKIebb2rRNnrkkZP8/zrY+Jdlpuu6fp1tPbr5VvOjxhuSrc/StpQl71t1sckOIFeF46Pc/Prxt+xn4NHw9h8aQ6fHYSKAPs0Ukj7s8ZYuxOc+mB7V86/Fj9mBPAPhXRruS1tYDrTMGzhjGqru+YnJ6c49q/Xj4oeItH0bwFbpqUyQxCRBl2CrkNnHPr6da/Gr9un49Xnxfi8PfDL4R3SeZbyyzXtzzhAyhVC+p6n8qHDld2GCzPGYhqnBX1fyXQ/lg+JXg7U/2hv2u/FmnNaqNP0DUjpdo0anynEB2l845JxnpxnFfsB8HP2QNG8D+HIvEklqbaRoo4zGn3WCDlj1yTnqea+gP2bv2T4NM1GbUb20XLSPLLMVz5jNndnI6knJ9a+5PiBplroPg9rS0QKAuAB7dMVhiaulj6F01FWk7yPx/8c+H49X1RNBiB+zpKuF6/dOa/QD4VeCI7Xw2sm0KdgwO3Ir570rwbNfeKllCn74JAHHNfeOi2A0fQWiK8KuRxXm892VKHLE+c9WtxaWdzuwSzHgei1+KPxb8/UPjf4o06NisTxaazY6kH5OPrmv2R8fakLHRbu9h6ncBnsTX4h/FK/uk+J3iu8Zm3z2umGFgOoSZQRnqMdTiu3B6ydjyMc7QufPtsGj+OvilbMF0g1MDd32qgAH5Lj6169pOqF4bfXrUFVmlYTDdkbg3Ud+CcEV5n8LZra71nxR4wuUDxzag0zt0yu9l6+x6V6X8JBbJ4cs9Uu3EtubwW5jY5yzSHae/Ucc4r3IPU+YxEdD3r4q3bzeO/B/iC8t+L7SBaOxPPmmNyzjngcEenFdJ8E/Ei+EtK0xbdW+S6W7C4wdkhAYbuhGDz9Kq/HPTNONv4U0a3YsLe7nsre5xhViMhLZx0O2VfpWL8Lba4m8a3fhnUwvm20JclSCgUAqB/49jit2cUT6E+Jvhm21XUtW0XRlQx+VbzBMYY+bC+0qP4gSoAI7mvzn1/TBb+NbUtCbdZbconmfd+VieCQOo6D1r9DdZ1uwludCnSMrMZW0y5kxkmOJzJESBzkbgB9a+QPHWmXQe11OOYXEPnXUSK2Rs8pvlBBzgkZ6ccUQehnUWx/9P7D+O7i40uZCMKhwT2r+Uv9qSMT/FPVbe0+9HOyrjjAHFf1K/H7VoYtNnEZyfvH6Cv5XPiRbX3iT4g6jrtyMedM8mB6MeK+JwKtufqmLknKxxXg29lggjtLiPkEDJ7Y6V9OfCDxWvg/wCIumapK2EuZPs7npxJ0zn3rwzSNPWKSODaOuOPWrfji5nsjb2lq22eJlkBHUFTxXXVjzJoxpPlakf0IaHqC3NoGzgYFd34b1JrfUUVSME8+9fG/wCzt8TI/HvgOy1OQ4uAgjmXuGXrX05b3D28oni5x/KvCnTs3Fn0dOqpRTP0L+FuqQLIsrOCeAeea9f8bNDqNnlfmDqfzr4k8BeInxD5EuDuG4Eda971rxXc22ltJuHyD5ayWhM0r3PhTxpoy2HiG5ABKs5yfT1rxDx3pl49qGtY1kAYkKRkZPQn1r6R8ZT/AG2Z7gAEuCfqa86Nv5sJjuF5HGK3pzsaUpuDufDF38NLLTfEZ1rSES21VlZHuQduUbkg49Dg456V674L+MPj34XeEpfBF8RqcyF5IJrtipbfzglBggduBxXW+JvClynmS2Q4bkrjkfSsixu7Ke9+ya3Cr4UKWYYYD/69daqNnc8FhsQryifaHwW/be8GeHPCVlbeOrbUU1G3QJN9ktvPjYg9QVbIB9COK+mvgh+1b8FvFNxrN/4ivx4aiTUWNudX/wBFM8TgEOu/jltwxnIxzX5maH8PPDjQG8tHCM5PGecV7t4a0SK0kS5n2zW0cW0KyjG4rjP4HpQmznq8N4Vp8smmz9e/Ff7Vv7P3hP4caneS+LdKuY1RAEtbmO4lbcygBY0LMx57D3r1rwh8dPgU9lDeL4q0wpKikEXKenpnOfavwJsfDkljPew2kADNOxbYnAJAwSR7U6LwTcEybm2MN5DYx8xPb6Cr9s9LmcODcM4tOs18kft543/bp+FGiePbjTrFLnVNL060iX7XZKrK9w7Hcqh2TIA2/MMgkkdq+bPjv+3PL8S/Csfhv4JWd/perW9zHMl7N5ZCFM8MgLAg55BJBr4Th0k3O8RxJ+/CqYx8xyFAJBPTc3PsT6V6x4A+H4EyXUsiQQOM7F+8ex/HPvW6qzk/U0XCmX0Up6tru/0Oe+M3jD4ufHzQtP8ACPxhvItQstPuo71YraL7MrTRcozhCd2w8gdM9a6LwB8IddvdQgvtTtvIMSqUL8ER9Bk9/avrPwr4X0CyQvpFv9okGQXYZIPv9a9T0bw/vl8y6iEceAQF6ZrWSjFc0ndkznSw8fZ0YJIZ4V8OafoGk/KmCwAHGO3+NeU/EPTDrINovCZ/Gvou8CtDheg6V5N4mhjiuHuTjKrk8V5OJnc4qLblzM+SvDfhuCz8Tzqy8hj09K9d8Tzwados8r8BYzwPpUuj6VDHdte93yTx3NeS/GzxQtlph02MMDJn5h6CuSOp0VWfG3xc11jYfY4D8qIWevyL+PDJZ+OopFOz7bp2ST/0zkDL+NfpR4yu5NQlKHJEh5Gecda/LP8AajvZbnxpbXMY/d21rOQB32sg/HOQPwr0sHpI8XMH+7PljVvHUHgX4MTASiO51i4RFXvzNK7N+S19C/D3WI7f4b6hK4WTz/JuIWUcAPtdWGPofzr8zvjtrMuoS6BYQMDbQFXKofvJPlgP1I+vrX3L8H9fs28DWlrJF5qW1ksLwqMAiL5OfTg8Gvb5bWZ805c1z79+J182sfDeJbeRZjBdJP5vQZkEWQD9Yx6elc/8LrK7T4sxW9mypf3Fi7BZWAWdBg7N3QSDaSuTzjHXFVtf2SfCTVV06Rv9DjWfY3R0mSNgBj+6d/twKp/DhbjR7+28TwXAkeKRAqk7vkLDf8vTocj371t0ORbn1xp9m+sK9xG0cclzFFc2knAxcxqyLG2cff8AL4x3AzXh/j+zvW1W9ungEMKyxPsK/IWk3ArgjPBHOa9jktNV0yzu9AssXMNkI7oSdWVSVJ2nthWOfQ5xVHxxpljf+GmbZIuorLHJdZYkOgIO4Ant19yacSJu5//U3v2ifFU02ny2O/8AeXAMS49G6nPqATX4M/FfVdItPGFxp+kSpKtsoRigyNw7ZH5fWv0j/bO8TePh4furPwBbmXU7g/Z4ip5iDjLOPcDp7nNfi5H8NPHugOl14ujaAM3zhhg9eTXyGHilHVn6dL3nc9i8LXHml9RkX5IVLEkcZHFefRtPq9/PqF6SY1JZiemBmu8uNStpLGPQtFAEeBux3+tfJP7TXxRtvBPhNvAnh+UHUdSBEhU4aOM9WPcZ6D866IRc5KKJq1I0oOcj6d/ZL/a/0nS/jXdeG2lCaBeTLZxyEgAT/wALj2Y5X8vWv370jUIbmP7VE24Oo5zkY/ya/h78F3402zu40cq+5HG3rx/ga/oc/wCCef7Ydv8AEzQx8L/Gtxt13TSYopHP/HxEvTr1YDr69ayzDBW9+BOWZk3+7qbs/a7w1rj2NyoVsKeeK9xl8Qyaro7xRt82OQfavk7Trtkfcjd69P0HWxG4jY8NXgzifSU5J7l7U/3uYZOi8j2NcdehoxkZyDxXa6iRLI0iDnPWufe2E528bj70k7GtjAgSK8JEwxWbqHg6O8beYlZh0OOa3vsDwyjjHIIrp7J5VcEnd2FbxloCnKD904ix8L/Yow0SyKVGPbJrvdD03ULWJInu2Cs6khVzyPr2roYInMeSAVP6VsWSLGyylQFHWhzZ0QxtS1ma0dvPG9y9rJzdPuc7Rkk8VPdeFNYu7mGXzU8tgMk5B47YrpNOOn3Vq5fHmIcn/D2r0XSUggiRZowy5HJHI47VSkzZYycVdHKeFfhbPeqLm+uVTa3CqCSR2r6O8L+A9M05UhhjMu5v4/SszTSsUSTW5GGH0+les+HZHPly5B2jGODWkajOetjast2bdpaR2ByqBR0AAwBXSR3GY/m7Ux1XAOM98VHKrSsFUYHPFOU2zgl725IZfMUqhzxk1xfiWwS9jLBecba7hISo8uLg+/eq93AqQOT2Fc1RXCm0meK3FmulWzow+ZvugV8F/HrXP+J29pG25LdAD/vN/nmvvjxfexWtq0nRkGPwr8m/inr51jWXeKTcZZWb/gPb8qwpq7HVnqfP/i24W3ebV5ZiRtCJH6k+gr80f2kNWS31vR7J2UzSQ3auvUhn2kD8NuD9a+2vi/470TwdplzreuzpBbWMbOzscLkc/wBK/n7/AOF/33xu/aCubqKQfYxDsskYj5WbqSfU55r3cFh23z9EfN5hil8F9WcR4vt5n0WWzlXM1jNt567Ccj8s8V9m/s56gEsoLO8xsulUMzHpvxkHrXzbqUAvPFmpW0vCXNolyq8Z3xkBl9iC2K9e+BV2okW3uHKshEkbEcZU4x+PGK9Ka0PGp3u0fpboniHTILGfwfrjlJLq2khXC53mPllPvgHb6496f8PrDRtO8KpY6hKWnmR7ZsZHlzxMUQZySdyOD+FeF694mkuPE9vq42x/YGiuSo6srvuY565wSv8AwH3r2/y9H0zWbl2UJHdTGdYowclmB2uvqNyqSO306aQ1RnNWZ9MeF9ZbUNN0PXbiXK3untZN15OCFHJ6gAAV6L4r/siHSdK126jkX7VmO6eLkERoY2B/Bgw9dtfO3hu88nwlfw6WwlXTNUiuIt38KZ7Drzn9K+gNOk1HVvDr+F3j3wrJKHbO3aHHy8/w5BGDzjNUYzR//9XwTxZe3U/iKLUpRug+bnrgsf6V89fH3wknjDRwYfvA4wvGMdDX2dbado2v+FbaS3dZGMWWKnIJPJNfOPxDm0TwZoNz4g8TXcdlYWilpJZnCRqo9Sf8+lfDqbUrI/WIU1y3Z+UPxK8RaX8GvDVzqmrkBoVITJ5eTnCivxr8Q+J9Y8Y+IbzxRrkhe4u2y3oF7KPYdq+jf2tPjRa/GHx/PD4cZv7EsHK2x5HnPnmQjsD/AAj05r5a8t428sDGMAGvo8LS5IXe7PlMwxXtanLH4V+JuaTK0Usk6jchRkI92HH610Hg/wAYa38P/EsfjPw5dyW2oWbLLC0fTeCPvcjjFchFNLGpjXjdirKw5txLJg+Y4UZ9gc1s0nozmTas0f1QfsUftmeG/wBojwzHpt+623iOxjX7XaE4Lcf6yP1U9/Q/hX6NadqZ3Bkxx3r+IrwD4q8TfDvxJZ+MvB909jf2TApInoD0PqCOCD2r+jX9kn9u7wl8ZbGz8KeKZY9N8SKNvkOcR3HoYz3PqvUH1r5/G4GzcobH0+X5ndKFR6n7ApepdWu1iD/Om27K11Hu5+bH1rz7w/r0F2AA3ykYz7iu3tnEk8ZTqOa8WcXF6n0lOopI7Z9OWdd5Hy4zz61es9PgQiUAcflSaNILy2wTk88ewq3LG6oIITtGcc9qlM1tc6JLWyIXbjJPrV3+yoXIUNtUY6VQsrRlmWItvYjg+1dfpUDvJsf5mB7dqptlxgjptD8KW0uGTdkjlhnn8K9HttG021QRn5ivUnORVbTYZo0VWOD7dRXV2tqHYtKd24Y570J3NVBMtaba25IXYVUc47GvVdLhRY0MYA/rXEaXaSRSjA+U9QK7/SrR5WPmjdjoK2gRUgkjo7YzOdrHLH8q6K3ttnL1Z0rR44S1xKoyRnn+VacmxcJjbjtW/I92eZOetkYjRu7buijisPWLyO1gYZGMfrXR6lcxW1sdhwe9fPnjzxWkKNAh5YHPOMVhUXREqVtTxr4u+KPI0S8u1PRCqn0Jr8iviN42tdJe61GecRJChG5jgDuW59K+of2o/jZpPhfS3tZLpI8DcxcgDjnn6V/Jx+3B+2lrfjqS58BfD25MWmfMt1cjhps8bV/2ffvXRg8HKpJLoedi8aqcHJ7nnP7c/wC1/c/FnWLj4eeArkjRLRwJ7hTgzuvXH+zn86+RPgBcPYeMLe8twTKHVEAPVs5Arw9mEeVboa9Y+D+oSab440IRHaXvQSfTjAP4da+rVGMKfLE+LlWdStzy3Ptm9nlufE2r30xwYowB/siRo0zz6mvQvhfcNpusus67olgkK88E9Vx+JH5V5nrTiN5TD96URxSdzhW3fzGPxrudBma1ttPuAOHcFjnpHghf1yfwFcT8zvg7O59V61c7Bp+t2pyky+S+ecAjcAfoSa+1LOxuNT8EaP4msYVludIMbTnG7MTgKWIHO0Fsn0GTXxloy2HiLwjJpcpxcQyrJGc4yCcjB78HFfXPwF8SW1t4avdKv03m6s7i3x1OUUvhc88qrAepAFaUvMzrM09M1geGPEMlhfDEF9H9nmHdJIjtJHrgjNfV2m3GoWdmIIk3yS2jLI0f3DsIBJ7jBKAZr5DutDt9c0C71J5d9xbFJUfOA6SAIzD6NtJHvX0N4F8dS2Nrp1xLlrO6ZEm35wJER1IP1bDH2pvfUxtdaH//1v5FPhN+2l+0n8CdGfwl4R13zbCMbUgvIxconJzs3fMuTz1x7V5n8Vfjl8ZPj3crf/FLWpr6GM5jth8kCn1Ea4Xj15PvXlhjDSY3e3tmrIXaAiYO39TXkqEU+ZLU+ndeo48jk7eplS6OTAjQ+5/GsSe3VLgxsOY+OO5r0f7LdxWyzRLlG9Dzn0rljp5NwO7SHJrRMw5dTFgtcv0yf5Z9q6KGximt1tDysZLc+p60yBITdLE33nzg+1dlFp3lzQsVwGwjf71TKRaOfWDeSvO0DH0IpyS3+lzpeaVO8E0LB0eNirq3YgjBFelf8I/bnL7cBuM+h7celYt9pSxSbZVyG4J7fWpuaK6P08/ZF/4KUXmjT23gz48XO+JSscGp7TvB6ATDpgf3x+Nf0G+DfGml+JrWDV9KmSaKZA6Oh3IynoQRkEGv4cNT0j7Hcsu4FRznHWvuL9jD9ubxd+znr8PhzxLNNf8AhqVwHiJLPbg/xR57eqj8K4MVgVNc0Nz18BmcqbUJ7H9h+m3/ANmJ8obi5BBzyMdR/jXY2b21ztmn4PACn196+YfhT8WPCPxL8OWvi3wjex3lncIHV4znGfavdbDVYTErI2fm/U+tfPzotH19HERkr3PYNI0+eUkQHdngEdq9P0jSRaZIUMzd68j0HXtpURsVcDOB3r2DTdaW4hEkyqeBkZxtJrK1tzqUkzdjMsDb+B6k9a67Tr4squ/Hl45riZryBI9hOQR0+tLbXVtZsGkbC/7X6U0jRSR75ojrNfojcqwJOO4r2+w061QCQcAAV8zaD4htknS4DLhODz0Xsa9atvFIlt1G4lG4Wuim7anNiLvY9Xm1KytkMcR3GuZudUhVixboOteeXfibGVbOccYFeVeMPiVp+iW7bpgBtJbuR71pKUmcD5YbnX+OfHMNhbu3mcAYFfl7+0X+1X4Z+HdlcyyT+ffMp8qBDnOO59APzNeZ/tI/tWXbCTSfCz75GXl+oTPf3NfjB8SfFGo+IdSaS/meX5t80khJZq0pUtbyPPrVnLbY8U/ak+PnjD4gpPdahMwhuHbau4jOf8K/Inx7EiMQSGZiePTP+NfbPxa1Zry+lnyBBEMIOuOv86+MfEkBukkcdOWXjt+H0r3MKlFaHgYqTbZ4DOn7wtjFdZ4H1KDR/FOm6rdZ8q3nDtgZ5HT9aw7y3MbfPwGzii0hkdVkiJDKwww6DmvT3R4qjaVz9FtT8201a31efJ0508xyvck52j3Jxj/AV0+gXsd1rstswAt7wiVM/dXPI+gHSvONcubnxJ8N9PnsjjfbpIjD++mY8/oK5j4cfENZtRs7PU0Xzo22SIep25Bx/X3rgcNLncpan3z4KMkduJFbCJJtznJDxHOMfQ/pX0B8PPEt1p3iKNIsIF/0hQOPmiYE4+oJz14zXyXoN4LDXFuOXilkW4Rc4ywHzD8QK93e8i02W2nsW+7EC7c9WJH8sH8azi7MqeqP0L0K10vUNDn0+2iRrSCUm3I6vbXKlT+K5Uj/AGga5D4cy6iLTV9D1RmkuIHaXYRtJCHDbQe+ACO/FVPhLq+lSrL4bvdwE0Ye2wcEM33o/fax3Ajswq3cS3uieJrH4i8vbPIbK9XJIV1+UOR1AIwc/WuiSutDFaM//9k=";var jh="data:image/jpeg;base64,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";var qh="data:image/jpeg;base64,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";var sn={daddy:{photo:Xh,hood:9058867,banner:16748504,words:["DADDY!","IT'S DADDY!","GOT DADDY!"]},mommy:{photo:Wh,hood:14178962,banner:12946431,words:["MOMMY!","IT'S MOMMY!","GOT MOMMY!"]},elliot:{photo:jh,hood:3108822,banner:7328767,words:["ELLIOT!","IT'S ELLIOT!","GOT ELLIOT!"]},nora:{photo:qh,hood:9323693,banner:16765503,words:["NORA!","IT'S NORA!","GOT NORA!"]}};var rn=Math.random,Yh=[16747586,8115081,15817653,48121,16704576,13073919,16735581,10217471],Zh=["bear","bunny","chick","blob"],aa={bear:{name:"TEDDY",emoji:"\u{1F9F8}"},bunny:{name:"BUNNY",emoji:"\u{1F430}"},chick:{name:"CHICKY",emoji:"\u{1F425}"},blob:{name:"BLOBBY",emoji:"\u{1F60A}"},star:{name:"SUPER STAR",emoji:"\u2B50"},face:{name:"SILLY FACE",emoji:"\u{1F92A}"}},vx=.08,yx=.085,Jh=1,Ax=5,uc={};function Mx(i){if(uc[i])return uc[i];let{photo:t,hood:e}=sn[i],n=document.createElement("canvas");n.width=n.height=256;let s=uc[i]=Os(new Yi(n));s.colorSpace=ue;let r=new Image;return r.onload=()=>{let o=n.getContext("2d");o.drawImage(r,0,0,256,256);let a=o.createRadialGradient(128,128,96,128,128,128),c="#"+e.toString(16).padStart(6,"0");a.addColorStop(0,c+"00"),a.addColorStop(1,c),o.fillStyle=a,o.fillRect(0,0,256,256),s.needsUpdate=!0},r.src=t,s}function bx(i){let t=new ze(i*1.004,32,12,0,Math.PI*2,0,Jh);t.rotateX(Math.PI/2);let e=t.attributes.position,n=t.attributes.uv,s=i*1.004*Math.sin(Jh);for(let r=0;r<e.count;r++)n.setXY(r,.5+e.getX(r)/(2*s),.5+e.getY(r)/(2*s));return t}var Sx=(i,t)=>new wt(i).lerp(new wt(16777215),t).getHex();function _x(i){let t=new Ts;for(let n=0;n<10;n++){let s=Math.PI/2+n*Math.PI/5,r=n%2?i*.48:i*1.15,o=Math.cos(s)*r,a=Math.sin(s)*r;n===0?t.moveTo(o,a):t.lineTo(o,a)}let e=new Vr(t,{depth:i*.5,bevelEnabled:!0,bevelThickness:i*.15,bevelSize:i*.12,bevelSegments:3});return e.center(),e}var fc=new Map;function wx(i,t){let e=i+t;if(fc.has(e))return fc.get(e);let n={},s=(c,l,h=0,u=0,f=0,d=0,g=0)=>{l.applyMatrix4(new ne().compose(new R(h,u,f),new yn().setFromEuler(new Yn(d,0,g)),new R(1,1,1))),(n[c]??=[]).push(l)},r=(c,l,h)=>{for(let u of[-1,1])s("black",new ze(t*h,8,6),u*t*.35,c,l)};if(i==="face"){s("fur",new ze(t,24,18)),s("face",bx(t));for(let c of[-1,1])s("fur",new ze(t*.3,12,10),c*t*.7,t*.75,-t*.1)}else i==="star"?(s("star",_x(t)),r(t*.15,t*.42,.11)):s("fur",new ze(t,18,14));if(i==="bear"){for(let c of[-1,1])s("fur",new ze(t*.35,12,10),c*t*.62,t*.72,0);s("muzzle",new ze(t*.38,12,10),0,-t*.15,t*.8),r(t*.25,t*.88,.11)}else if(i==="bunny"){for(let c of[-1,1])s("fur",new kr(t*.17,t*.9,4,10),c*t*.38,t*1.25,0,0,-c*.2);r(t*.2,t*.9,.12)}else i==="chick"?(s("beak",new Gr(t*.18,t*.35,10),0,0,t*1.05,Math.PI/2),s("fur",new ze(t*.2,8,6),0,t*1.02,0),r(t*.3,t*.86,.1)):i==="blob"&&(r(t*.15,t*.92,.17),s("black",new Wr(t*.22,t*.04,6,12,Math.PI),0,-t*.15,t*.95,0,Math.PI));let o={};for(let c in n)if(o[c]=n[c].length>1?hc(n[c]):n[c][0],n[c].length>1)for(let l of n[c])l.dispose();let a=Object.keys(o).filter(c=>c!=="black"&&c!=="face").map(c=>o[c]);return o.outline=a.length>1?hc(a):a[0],Os(...Object.values(o)),fc.set(e,o),o}function Ex(i,t,e,n){let s=new Ce,r=wx(i,e),o={fur:{color:t,rough:.95,sheen:.6},muzzle:{color:Sx(t,.5),rough:.95,sheen:.6},beak:{color:16747546,rough:.5},star:{color:16762880,metal:.9,rough:.25,emissive:5583616,ei:.4,toon:16765503},black:{color:1118481,rough:.2,clearcoat:1},face:r.face&&{color:16777215,map:Mx(n),rough:.7,toon:16777215}},a={muzzle:1,beak:1,black:1};for(let c in o)r[c]&&o[c]&&s.add(kt(r[c],o[c],{shared:!0,outline:!1,cast:!a[c]}));return s.add(oc(r.outline)),s.userData={kind:i,r:e,color:t,who:n},s}var ra=class{constructor(t,{people:e={}}={}){var n,s;this.parent=t,this.list=[],this.falling=[],this.people={};for(let r in sn)this.people[r]={on:!!((n=e[r])!=null&&n.on),repeat:((s=e[r])==null?void 0:s.repeat)??!0,count:0,wait:0};for(let r=0;r<2;r++)for(let o=-2;o<=2;o++)for(let a=-2;a<=2;a++){let c=o*.17+(r?.085:0)+(rn()-.5)*.04,l=a*.15+(r?.075:0)+(rn()-.5)*.04;Math.abs(c)>.42||Math.abs(l)>.37||Kh(c,l,.1)||r&&rn()<.35||this.spawn(c,l)}for(let r in this.people)this.people[r].on&&this.spawnFace(r,!1)}setPerson(t,e){let n=this.people[t];if(n.on=e,n.wait=0,e&&!n.count&&this.spawnFace(t),!e)for(let s of this.list.filter(r=>r.userData.who===t))this.take(s),this.destroy(s)}setRepeat(t,e){this.people[t].repeat=e}height(t){return this.falling.includes(t)?t.userData.restY:t.position.y}surfaceAt(t,e,n=0,s=null){let r=pn+n;for(let o of this.list){if(s&&!s(o))continue;let a=Math.hypot(o.position.x-t,o.position.z-e),c=(o.userData.r+n)*.92;a<c&&(r=Math.max(r,this.height(o)+Math.sqrt(c*c-a*a)))}return r}settle(){for(let t of[...this.list].sort((e,n)=>this.height(e)-this.height(n))){if(this.falling.includes(t))continue;let e=t.position.y,n=this.surfaceAt(t.position.x,t.position.z,t.userData.r,s=>s!==t&&this.height(s)<e);n<e-.005&&(t.userData.restY=n,t.userData.vy=0,this.falling.push(t))}}spawn(t,e,n=!1,s=null){let r=!!s,o=!r&&rn()<vx,a=r?"face":o?"star":Zh[Math.floor(rn()*Zh.length)],c=r?yx:o?.07:.06+Math.floor(rn()*6)*.005,l=Ex(a,r?sn[s].hood:Yh[Math.floor(rn()*Yh.length)],c,s);r&&this.people[s].count++;let h=this.surfaceAt(t,e,c);return l.position.set(t,n?1.7:h,e),l.rotation.y=(rn()-.5)*1.2,l.userData.restY=h,l.userData.vy=0,this.parent.add(l),this.list.push(l),n&&this.falling.push(l),l}spawnFace(t,e=!0){let n=this.list.filter(o=>o.userData.who),s=null,r=-1;for(let o=0;o<8;o++){let a=-.3+rn()*.4,c=rn()*.25,l=Math.min(1,...n.map(h=>Math.hypot(h.position.x-a,h.position.z-c)));l>r&&(r=l,s=[a,c])}return this.spawn(s[0],s[1],e,t)}spawnRandom(){let t=[-.2,0],e=1/0;for(let n=0,s=0;n<60&&s<10;n++){let r=(rn()*2-1)*.4,o=(rn()*2-1)*.36;if(Kh(r,o,.1))continue;s++;let a=this.surfaceAt(r,o,.07);a<e&&(e=a,t=[r,o])}for(let n in this.people){let s=this.people[n];if(s.on&&!s.count&&s.wait<=0)return this.spawnFace(n)}return this.spawn(t[0],t[1],!0)}pick(t,e,n){let s=null,r=n;for(let o of this.list){if(this.falling.includes(o))continue;let a=Math.hypot(o.position.x-t,o.position.z-e)-(o.position.y-pn)*.3;a<r&&(r=a,s=o)}return s}take(t){this.list=this.list.filter(e=>e!==t),this.falling=this.falling.filter(e=>e!==t),this.settle()}destroy(t){var n;let e=t.userData.who;for(let s in this.people)this.people[s].wait--;if(e){let s=this.people[e];s.count--,s.wait=s.repeat?0:Ax}(n=t.parent)==null||n.remove(t),Bh(t)}update(t){for(let e=this.falling.length-1;e>=0;e--){let n=this.falling[e];n.userData.vy-=5*t,n.position.y+=n.userData.vy*t,n.position.y<=n.userData.restY&&(n.position.y=n.userData.restY,this.falling.splice(e,1))}}};function Kh(i,t,e=.04){return i>ke.x0-e&&t>ke.z0-e}var dc=.23809523809523808,Tx={C:[48,52,55],Am:[45,48,52],F:[41,45,48],G:[43,47,50],Em:[40,43,47],Dm:[38,41,45]},Px={A1:{g:1,ch:["C","Am","F","G"],m:[72,null,76,null,79,null,76,null,76,null,72,null,69,null,72,null,77,null,81,null,79,77,76,null,74,null,79,null,77,null,74,null]},A2:{g:1,ch:["C","Am","F","C"],m:[72,null,76,null,79,null,84,null,81,null,79,76,72,null,null,null,77,76,77,81,79,null,77,null,76,null,74,null,72,null,null,null]},B1:{g:2,ch:["F","G","Em","Am"],m:[81,null,81,null,79,null,77,null,79,null,77,null,74,null,null,null,76,null,79,null,83,null,79,null,81,null,null,79,81,null,84,null]},B2:{g:2,ch:["F","G","C","G"],m:[81,null,84,null,81,null,77,null,79,null,83,null,86,null,83,null,84,null,79,null,76,null,79,null,74,null,71,null,74,null,79,null]},C1:{g:0,ch:["Am","F","C","G"],m:[69,72,76,72,69,72,76,null,69,72,77,72,69,72,77,null,67,72,76,72,79,null,76,null,74,null,71,null,74,null,79,null]},C2:{g:0,ch:["Am","F","Dm","G"],m:[76,null,72,null,69,null,72,76,77,null,72,null,69,null,72,77,74,null,77,null,81,null,77,null,79,null,83,null,86,null,null,null]},D1:{g:2,tr:2,ch:["C","F","C","G"],m:[84,null,84,null,null,null,79,null,81,null,81,null,null,null,77,null,79,null,76,null,79,null,84,null,83,null,79,null,74,null,null,null]},D2:{g:2,tr:2,ch:["C","F","G","C"],m:[84,null,84,null,null,null,86,null,88,null,86,null,84,null,81,null,79,null,83,null,86,null,83,null,84,null,null,null,79,null,76,null]}},Rx="A1 A2 B1 B2 A1 A2 C1 C2 D1 D2 B1 B2 A1 A2".split(" "),Cx=[[0,0,2],[3,0,1],[4,7,2],[6,12,2]],Lx=[0,1,2,1,0,1,2,1],Qh=Rx.flatMap((i,t)=>{let e=Px[i],n=e.tr||0;return e.m.map((s,r)=>{let o=1;for(;r+o<32&&e.m[r+o]==null;)o++;return{n:s==null?null:s+n,len:o,ch:Tx[e.ch[r>>3]].map(a=>a+n),g:e.g,fill:t%2===1&&r>=28}})}),$h=.13,Ge=i=>440*Math.pow(2,(i-69)/12),oa=class{constructor(){this.ctx=null,this.musicOn=!0,this.step=0,this.next=0,this.motorLvl=-1}init(){if(this.ctx){this.ctx.state!=="running"&&this.resume();return}let t=typeof window<"u"&&(window.AudioContext||window.webkitAudioContext);if(t)try{this.build(new t)}catch{this.ctx=null}}resume(){var t,e;try{(e=(t=this.ctx.resume())==null?void 0:t.catch)==null||e.call(t,()=>{})}catch{}}build(t){let e=(f,d)=>{let g=t.createOscillator();return g.type=f,g.frequency.value=d,g.start(),g},n=(f,d)=>{let g=t.createGain();return g.gain.value=f,d&&g.connect(d),g},s=(f,d,g,x)=>{let m=t.createBiquadFilter();return m.type=f,m.frequency.value=d,m.Q.value=g,m.connect(x),m},r=n(.8,t.destination);this.duckG=n(1,r),this.music=n(this.musicOn?$h:0,this.duckG),this.sfx=n(.5,r),this.soft=s("lowpass",3200,.5,this.sfx);let o=this.noiseBuf=t.createBuffer(1,t.sampleRate,t.sampleRate),a=o.getChannelData(0);for(let f=0;f<a.length;f++)a[f]=Math.random()*2-1;this.lead=e("square",440),this.leadG=n(0,this.music),this.lead.connect(s("lowpass",2e3,.4,this.leadG));let c=e("sine",5.2),l=n(9,this.lead.detune);c.connect(l),this.bass=e("triangle",110),this.bassG=n(0,this.music),this.bass.connect(this.bassG),this.bell=e("sine",880),this.bellG=n(0,this.music),this.bell.connect(this.bellG),this.kick=e("sine",50),this.kickG=n(0,this.music),this.kick.connect(this.kickG);let h=t.createBufferSource();h.buffer=o,h.loop=!0,h.start(),this.hatG=n(0,this.music),h.connect(s("highpass",7e3,.7,this.hatG)),this.snareG=n(0,this.music),h.connect(s("bandpass",1700,.8,this.snareG)),this.motorOsc=e("sawtooth",52),this.motorGain=n(0,this.sfx),this.motorOsc.connect(s("lowpass",320,.7,this.motorGain)),this.faceSongs={};let u=typeof window<"u"&&window.FACE_SONGS||{};for(let f in u)try{let d=atob(u[f].split(",")[1]),g=new Uint8Array(d.length);for(let x=0;x<d.length;x++)g[x]=d.charCodeAt(x);t.decodeAudioData(g.buffer,x=>{this.faceSongs[f]=x},()=>{})}catch{}this.ctx=t,this.master=r,this.next=t.currentTime+.1,t.state!=="running"&&this.resume()}get running(){var t;return((t=this.ctx)==null?void 0:t.state)==="running"}setMusic(t){this.musicOn=t,this.music&&this.music.gain.setTargetAtTime(t?$h:0,this.ctx.currentTime,.1)}duck(t,e=.18){let n=this.duckG.gain,s=this.ctx.currentTime;n.cancelScheduledValues(s),n.setValueAtTime(n.value,s),n.setTargetAtTime(e,s,.05),n.setTargetAtTime(1,s+t,.35)}env(t,e,n,s,r,o=.12,a=.03){t.setTargetAtTime(n,e,.004),t.setTargetAtTime(s,e+.015,o),t.setTargetAtTime(0,e+r,a)}hit(t,e,n,s){t.setTargetAtTime(n,e,.001),t.setTargetAtTime(0,e+.004,s)}schedule(t){let e=Qh[this.step%Qh.length],n=this.step%32,s=n%8;e.n!=null&&(this.lead.frequency.setValueAtTime(Ge(e.n),t),this.env(this.leadG.gain,t,.32,.2,Math.min(e.len,4)*dc*.85,.2));for(let[r,o,a]of Cx)r===s&&(this.bass.frequency.setValueAtTime(Ge(e.ch[0]+o),t),this.env(this.bassG.gain,t,.6,.35,a*dc*.8,.15));e.g===2&&(this.bell.frequency.setValueAtTime(Ge(e.ch[Lx[s]]+24),t),this.hit(this.bellG.gain,t,.07,.06)),(s===0||s===4)&&(this.kick.frequency.setValueAtTime(150,t),this.kick.frequency.exponentialRampToValueAtTime(45,t+.1),this.hit(this.kickG.gain,t,.8,.07)),e.fill?this.hit(this.snareG.gain,t,.12+.05*(n-28),.05):(s===2||s===6)&&(e.g||s===6)&&this.hit(this.snareG.gain,t,e.g?.28:.12,.06),s%2===1&&this.hit(this.hatG.gain,t,.1,.02)}tick(t){if(!this.running)return;let e=this.ctx;for(this.next<e.currentTime&&(this.next=e.currentTime+.05);this.next<e.currentTime+.2;)this.musicOn&&this.schedule(this.next),this.next+=dc,this.step++;let n=Math.max(0,Math.min(1,t||0));(Math.abs(n-this.motorLvl)>.02||n===0&&this.motorLvl!==0)&&(this.motorLvl=n,this.motorGain.gain.setTargetAtTime(.06*n,e.currentTime,.05),this.motorOsc.frequency.setTargetAtTime(52+20*n,e.currentTime,.1))}tone(t,e,n,s="square",r=.3,o=this.soft,a=null){let c=this.ctx,l=c.createOscillator(),h=c.createGain();return l.type=s,l.frequency.setValueAtTime(t,e),a&&l.frequency.exponentialRampToValueAtTime(a,e+n),h.gain.setValueAtTime(1e-4,e),h.gain.exponentialRampToValueAtTime(r,e+.01),h.gain.exponentialRampToValueAtTime(1e-4,e+n),l.connect(h).connect(o),l.start(e),l.stop(e+n+.05),l}noise(t,e,n,s,r,o=1,a=this.sfx){let c=this.ctx,l=c.createBufferSource(),h=c.createBiquadFilter(),u=c.createGain();l.buffer=this.noiseBuf,h.type=s,h.frequency.value=r,h.Q.value=o,u.gain.setValueAtTime(1e-4,t),u.gain.exponentialRampToValueAtTime(n,t+.005),u.gain.exponentialRampToValueAtTime(1e-4,t+e),l.connect(h).connect(u).connect(a),l.start(t,Math.random()*.5),l.stop(t+e+.05)}sparkle(t,e,n){let s=[0,2,4,7,9];for(let r=0;r<e;r++){let o=93+s[Math.random()*5|0]+(Math.random()<.3?12:0);this.tone(Ge(o),t+r*n/e+Math.random()*.03,.18,"sine",.07,this.sfx)}}boing(t){let e=this.ctx,n=this.tone(190,t,.6,"sine",.35,this.sfx);n.frequency.exponentialRampToValueAtTime(440,t+.06),n.frequency.setTargetAtTime(330,t+.06,.15);let s=e.createOscillator(),r=e.createGain();s.frequency.value=13,r.gain.setValueAtTime(70,t),r.gain.exponentialRampToValueAtTime(1,t+.6),s.connect(r).connect(n.frequency),s.start(t),s.stop(t+.65)}play(t,e){var s,r;if(!this.running)return;let n=this.ctx.currentTime;try{switch(t){case"drop":this.tone(420,n,.6,"triangle",.16,this.sfx,170),this.noise(n,.5,.05,"bandpass",900,.7);break;case"grab":this.noise(n,.025,.25,"highpass",3e3),this.noise(n,.1,.5,"lowpass",700),this.tone(150,n,.12,"square",.28,this.soft,55),this.noise(n+.07,.03,.2,"bandpass",2500,2),this.tone(230,n+.07,.05,"square",.15);break;case"lift":this.tone(160,n,.9,"triangle",.14,this.sfx,380),this.tone(320,n,.9,"sine",.05,this.sfx,760);break;case"miss":this.boing(n),this.tone(Ge(79),n+.55,.12,"triangle",.25,this.sfx),this.tone(Ge(84),n+.67,.25,"triangle",.25,this.sfx);break;case"plop":this.tone(1e3,n,.09,"sine",.4,this.sfx,220),this.noise(n,.04,.15,"lowpass",1500),this.tone(1400,n+.07,.06,"sine",.2,this.sfx,500);break;case"win":this.duck(2),[72,76,79,84,88].forEach((a,c)=>this.tone(Ge(a),n+c*.075,.16,"square",.22)),this.tone(120,n+.42,.25,"sine",.5,this.sfx,50),[72,76,79,84].forEach(a=>this.tone(Ge(a),n+.42,1.1,"triangle",.16,this.sfx)),this.tone(Ge(84),n+.42,.9,"square",.08),this.sparkle(n+.45,6,.8);break;case"superwin":this.duck(3),[60,64,67,72,76,79,84,88,91,96].forEach((a,c)=>this.tone(Ge(a),n+c*.06,.15,"square",.2)),[[79,0,.12],[84,.14,.12],[88,.28,.12],[91,.42,1.3]].forEach(([a,c,l])=>this.tone(Ge(a),n+.7+c,l,"square",.22)),this.tone(120,n+1.12,.3,"sine",.5,this.sfx,50),[72,76,79,84].forEach(a=>this.tone(Ge(a),n+1.12,1.4,"triangle",.16,this.sfx)),this.sparkle(n+.6,14,1.8);break;case"silly":let o=(s=this.faceSongs)==null?void 0:s[e];if(o){try{(r=this.songSrc)==null||r.stop()}catch{}let a=this.songSrc=this.ctx.createBufferSource(),c=this.ctx.createGain();a.buffer=o,c.gain.value=.9,a.connect(c).connect(this.master),a.start(n),this.duck(o.duration,0);break}this.duck(3),this.tone(500,n,.35,"sine",.3,this.sfx,1800),this.tone(1800,n+.35,.4,"sine",.3,this.sfx,350),this.boing(n+.8),[72,76,79,84,88].forEach((a,c)=>this.tone(Ge(a),n+1.3+c*.075,.16,"square",.22)),[72,76,79,84].forEach(a=>this.tone(Ge(a),n+1.72,1.1,"triangle",.16,this.sfx)),this.sparkle(n+1.75,8,.9);break;case"blip":this.tone(880,n,.08,"square",.18),this.tone(1320,n+.06,.1,"square",.18);break;case"turn":this.tone(660,n,.1,"square",.22),this.tone(990,n+.1,.15,"square",.22);break;case"start":[60,64,67,72].forEach((a,c)=>this.tone(Ge(a),n+c*.08,.15,"square",.26)),this.sparkle(n+.32,3,.2);break}}catch{}}};var pc={12:[0,-1],13:[0,1],14:[-1,0],15:[1,0]},Dx=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],Ix=i=>Math.abs(i)<.18?0:(i-Math.sign(i)*.18)/(1-.18),Bs=i=>Math.max(-1,Math.min(1,i)),es=i=>Number.isFinite(i)?i:0,Nx=i=>Math.abs(i)<.3?i:0,tu=(i,t)=>{let e=i-t;return Ix(Bs(e/(e>0?1-t:1+t)))},Ox=i=>Math.abs(i)>1.05?[0,0]:Dx[Math.round((i+1)*3.5)&7],ca=class{constructor({extraPads:t=()=>[]}={}){this.extraPads=t,this.keys={},this.keyEvents=[],this.state=new Map,this.t=0,addEventListener("keydown",n=>{if(this.keys[n.code]=!0,n.repeat)return;let s={Space:"drop",Enter:"drop",KeyT:"toggle",KeyP:"parent",KeyM:"music",Escape:"escape"};s[n.code]&&(this.keyEvents.push({type:s[n.code],pad:-1}),n.preventDefault())}),addEventListener("keyup",n=>{this.keys[n.code]=!1}),addEventListener("blur",()=>{this.keys={}});let e=n=>{n.gamepad&&this.state.delete(n.gamepad.index)};addEventListener("gamepadconnected",e),addEventListener("gamepaddisconnected",e)}padState(t){let e=this.state.get(t.index);if(!e||e.id!==t.id){let n=[es(t.axes[0]),es(t.axes[1])];e={id:t.id,rest:n.map(Nx),anchor:n,still:0,hatAxis:-1,btn:[],hold:null},this.state.set(t.index,e)}return e}poll(t,{holdToggle:e}){this.t+=t;let n=this.keyEvents.splice(0),s=[...navigator.getGamepads?navigator.getGamepads():[],...this.extraPads()],r=[],o=new Set,a=0;for(let h of s){if(!h||!h.connected)continue;o.add(h.index);let u=this.padState(h),f=[es(h.axes[0]),es(h.axes[1])];Math.abs(f[0]-u.anchor[0])<.03&&Math.abs(f[1]-u.anchor[1])<.03?u.still+=t:(u.still=0,u.anchor=f),u.still>=1.5&&f.forEach((m,p)=>{Math.abs(m)<.3&&(u.rest[p]=m)}),u.hatAxis<0&&(u.hatAxis=h.axes.findIndex((m,p)=>p>=4&&Math.abs(m)>1.05));let[d,g]=u.hatAxis>=0?Ox(es(h.axes[u.hatAxis])):[0,0],x=[];h.buttons.forEach((m,p)=>{let S=!!m&&(m.pressed||m.value>.5),v=u.btn[p]||(u.btn[p]={on:!1,t:-1/0}),w=!1,D=!1;if(S!==v.on&&this.t-v.t>=.12&&(v.on=S,v.t=this.t,w=S,D=!S),v.on&&x.push(p),h.mapping==="standard"&&pc[p]){v.on&&(d+=pc[p][0],g+=pc[p][1]);return}e&&p===1?(w&&(u.hold=0),v.on&&u.hold!==null&&(u.hold+=t,a=Math.max(a,u.hold/1),u.hold>=1&&(u.hold=null,n.push({type:"toggle",pad:h.index}))),D&&u.hold!==null&&(u.hold=null,n.push({type:"drop",pad:h.index}))):w&&n.push({type:"drop",pad:h.index})}),e||(u.hold=null),r.push({index:h.index,id:h.id,pressed:x,axes:[...h.axes.slice(0,4)].map(es),x:Bs(tu(f[0],u.rest[0])+d),y:Bs(tu(f[1],u.rest[1])+g)})}for(let h of this.state.keys())o.has(h)||this.state.delete(h);r.sort((h,u)=>h.index-u.index);let c=this.keys,l={x:Bs((c.ArrowRight||c.KeyD?1:0)-(c.ArrowLeft||c.KeyA?1:0)),y:Bs((c.ArrowDown||c.KeyS?1:0)-(c.ArrowUp||c.KeyW?1:0))};return{pads:r,kb:l,events:n,holdProgress:a}}};var eu="claw-settings-v1",Ux={look:"real",difficulty:"little",music:!0,holdToggle:!0,daddyRepeat:!0,mommy:!0,mommyPhoto:!0,elliot:!0,nora:!0},la={look:["real","toon"],difficulty:["little","big"],music:[!0,!1],holdToggle:[!0,!1],daddyRepeat:[!0,!1],mommy:[!0,!1],mommyPhoto:[!0],elliot:[!0,!1],nora:[!0,!1]},mc={faceRepeat:"daddyRepeat"};function nu(){let i={...Ux};try{let t=JSON.parse(localStorage.getItem(eu)||"{}")||{};for(let e in mc)e in t&&!(mc[e]in t)&&(t[mc[e]]=t[e]);t.mommyPhoto||delete t.mommy;for(let e in la)la[e].includes(t==null?void 0:t[e])&&(i[e]=t[e])}catch{}return i}function gc(i){try{localStorage.setItem(eu,JSON.stringify(i))}catch{}}var xc=360,ha=class{constructor(t){this.mesh=new Ur(new Be(.03,.018),new un({side:Re}),xc),this.mesh.count=0,this.mesh.frustumCulled=!1,this.mesh.setColorAt(0,new wt),t.add(this.mesh),this.parts=[],this.tmp=new ge,this.col=new wt}burst(t,e=!1){this.parts.length=0;for(let n=0;n<xc;n++){let s=Math.random()*Math.PI*2,r=.6+Math.random()*1.6;this.parts.push({p:t.clone().add(new R((Math.random()-.5)*.1,0,(Math.random()-.5)*.1)),v:new R(Math.cos(s)*r,1.4+Math.random()*1.6,Math.sin(s)*r*.6),r:new Yn(Math.random()*6,Math.random()*6,0),s:2+Math.random()*6}),e?this.col.setHSL(.11+Math.random()*.05,1,.5+Math.random()*.3):this.col.setHSL(Math.random(),.9,.6),this.mesh.setColorAt(n,this.col)}this.mesh.instanceColor.needsUpdate=!0,this.mesh.count=xc}update(t){if(!this.mesh.count)return;let e=0;this.parts.forEach((n,s)=>{n.v.y-=2.2*t,n.v.multiplyScalar(1-.9*t),n.p.addScaledVector(n.v,t),n.r.x+=n.s*t,n.r.y+=n.s*.7*t,n.p.y>0&&e++,this.tmp.position.copy(n.p),this.tmp.rotation.copy(n.r),this.tmp.updateMatrix(),this.mesh.setMatrixAt(s,this.tmp.matrix)}),this.mesh.instanceMatrix.needsUpdate=!0,e||(this.mesh.count=0)}};var Hn=i=>document.getElementById(i),iu=i=>"#"+i.toString(16).padStart(6,"0"),ua=class{constructor(){this.start=Hn("start"),this.bannerEl=Hn("banner"),this.tray=Hn("tray"),this.hold=Hn("hold"),this.holdArc=Hn("hold-arc"),this.hintEl=Hn("hint"),this.panel=Hn("parent"),this.diag=Hn("diag"),this.fpsEl=Hn("fps"),this.trayCount=0,this.onSetting=null,this.onClose=null,this.panel.addEventListener("click",t=>{var n,s;let e=t.target.closest("button[data-key]");e&&((n=this.onSetting)==null||n.call(this,e.dataset.key,Hx(e.dataset.value))),t.target.closest("#parent-close")&&((s=this.onClose)==null||s.call(this)),t.target.closest("#tray-clear")&&this.clearTray()})}hideStart(){this.start.classList.add("gone")}banner(t,e=16765503,n="win"){let s=this.bannerEl;s.textContent=t,s.style.color=iu(e),s.className="",s.offsetWidth,s.className=n}addToTray(t,e,n){this.trayCount++;let s=document.createElement("span");for(s.className="prize",s.style.background=t==="star"?"#ffc800":iu(e),s.textContent=aa[t].emoji,sn[n]&&(s.style.background=`center / cover url(${sn[n].photo})`,s.textContent=""),this.tray.appendChild(s);this.tray.children.length>14;)this.tray.removeChild(this.tray.firstChild);this.tray.dataset.count=this.trayCount,this.tray.classList.toggle("many",this.trayCount>14)}clearTray(){this.tray.innerHTML="",this.trayCount=0,this.tray.classList.remove("many")}holdRing(t){this.hold.style.opacity=t>.05?1:0,this.holdArc.style.strokeDashoffset=String(100-Math.min(1,t)*100)}hint(t,e=10){this.hintEl.textContent=t,this.hintEl.style.opacity=1,clearTimeout(this._hintT),this._hintT=setTimeout(()=>{this.hintEl.style.opacity=0},e*1e3)}get panelOpen(){return this.panel.classList.contains("open")}openPanel(t){this.renderPanel(t),this.panel.classList.add("open")}closePanel(){this.panel.classList.remove("open")}renderPanel(t){for(let e of this.panel.querySelectorAll("button[data-key]"))e.classList.toggle("on",String(t[e.dataset.key])===e.dataset.value)}showDiag(t){this.panelOpen&&(this.diag.textContent=t.length?t.map((e,n)=>`Joystick ${n+1}: ${e.id}
  stick ${e.axes.map(s=>s.toFixed(2)).join("  ")}   buttons [${e.pressed.join(", ")}]`).join(`
`):"No joystick detected. Plug it in, then press any of its buttons.")}fps(t){this.fpsEl.textContent=t}};function Hx(i){return i==="true"?!0:i==="false"?!1:i}function su(){addEventListener("keydown",i=>{var t;i.code==="Escape"&&((t=document.getElementById("parent"))!=null&&t.classList.contains("open")||(i.preventDefault(),i.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400)))},!0)}function Bx(i=0){let t=i,e=null,n=!1;return(s,r)=>(r&&(t=s),n?(r&&e===null&&(e=s+.5),e!==null&&s>=e&&(n=!1)):s-t>=7&&(n=!0,e=null),n)}var zx=.25;function Fx(){let i=new Map,t=new Map,e=0;return n=>{let s=!1,r=n-e>=zx,o=navigator.getGamepads?[...navigator.getGamepads()]:[];for(let a of o){if(!a||!a.connected)continue;a.buttons.some(h=>h&&(h.pressed||h.value>.5))&&(s=!0);let c=i.get(a.index)||a.axes,l=t.get(a.index)||new Set;a.axes.forEach((h,u)=>{if(!Number.isFinite(h))return;let f=Math.abs(h-(c[u]??h))>.06;u<=1?(Math.abs(h)>.35||f)&&(s=!0):u<=3?f&&(s=!0):Math.abs(h)>1.05?l.add(u):l.has(u)&&(s=!0)}),t.set(a.index,l),(r||!i.has(a.index))&&i.set(a.index,[...a.axes])}return r&&(e=n),s}}var kx=`
.keyhud { position: fixed; z-index: 15; pointer-events: none; opacity: 0; transition: opacity 0.35s;
  font: 700 1.9vmin/1.2 system-ui, -apple-system, sans-serif; color: #fff; text-shadow: 0 0.15vmin 0.4vmin rgba(0, 0, 0, 0.8); }
.keyhud.show { opacity: 1; transition-duration: 0.8s; }
#keyhud-top { top: 1.6vmin; left: 50%; transform: translateX(-50%); display: flex; gap: 1vmin; white-space: nowrap; }
#keyhud-side, #keyhud-top.left { top: 50%; transform: translateY(-50%); display: flex; flex-direction: column; gap: 0.9vmin; }
#keyhud-side { right: 2vmin; align-items: flex-end; }
#keyhud-top.left { left: 2vmin; align-items: flex-start; }
.keyhud .keyhud-pill { display: flex; align-items: center; gap: 0.8vmin; padding: 0.5vmin 1.1vmin 0.5vmin 0.6vmin; border-radius: 99vmin;
  background: rgba(20, 20, 30, 0.5); }
#keyhud-side .keyhud-pill { flex-direction: row-reverse; padding: 0.5vmin 0.6vmin 0.5vmin 1.1vmin; }
.keyhud .keyhud-keys { display: flex; gap: 0.4vmin; }
.keyhud .keyhud-k { min-width: 1.4em; text-align: center; padding: 0.15vmin 0.6vmin; border-radius: 0.7vmin; background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.6); font-weight: 800; text-shadow: none; }
`,ru=i=>String(i).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),Gx=i=>i.map(([t,e])=>`<div class="keyhud-pill"><span class="keyhud-keys">${[].concat(t).map(n=>`<span class="keyhud-k">${ru(n)}</span>`).join("")}</span><span>${ru(e)}</span></div>`).join("");function au({top:i,side:t,menuSide:e="top"}){let n=document.createElement("style");n.textContent=kx,document.head.appendChild(n);let s=[["keyhud-top",i],["keyhud-side",t]].map(([h,u])=>{let f=document.createElement("div");return f.id=h,f.className="keyhud",f.innerHTML=Gx(u),document.body.appendChild(f),f});e==="left"&&s[0].classList.add("left");let r=new Set,o=!1;addEventListener("keydown",h=>{r.add(h.code),o=!0},!0),addEventListener("keyup",h=>{r.delete(h.code)},!0),addEventListener("blur",()=>r.clear());let a=()=>performance.now()/1e3,c=Fx(),l=Bx(a());setInterval(()=>{let h=a(),u=r.size>0||o||c(h);o=!1;let f=l(h,u);for(let d of s)d.classList.toggle("show",f)},50)}function Vx(i,t,e){let n=Math.hypot(i,t);if(!n)return[0,0];let s=Math.min(n,e)/n/e;return[i*s,t*s]}function Xx({x:i=0,y:t=0,grab:e=!1,look:n=!1}){let s=r=>({pressed:r,value:r?1:0});return{index:99,id:"On-screen joystick",mapping:"",connected:!0,axes:[i,t,0,0],buttons:[s(e),s(n)]}}var Wx=`
body.touch #hint, body.touch .keyhud { display: none !important; } /* keyboard hints */
/* the hold-to-switch ring around the look button */
body.touch #hold { right: calc(env(safe-area-inset-right) + 3.5vmin); bottom: calc(env(safe-area-inset-bottom) + 29.5vmin); width: 18vmin; height: 18vmin; }
.touchctl { position: fixed; z-index: 9; touch-action: none; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none; }
#touchctl-stick { left: calc(env(safe-area-inset-left) + 4vmin); bottom: calc(env(safe-area-inset-bottom) + 4vmin); width: 30vmin; height: 30vmin;
  border-radius: 50%; background: rgba(26,8,51,0.35); border: 0.7vmin solid rgba(255,255,255,0.55); }
#touchctl-knob { position: absolute; left: 50%; top: 50%; width: 13vmin; height: 13vmin; margin: -6.5vmin 0 0 -6.5vmin; border-radius: 50%;
  background: #ffd23f; border: 0.6vmin solid #1a0833; box-shadow: 0 1vmin 2vmin rgba(0,0,0,0.45); pointer-events: none; }
#touchctl-grab { right: calc(env(safe-area-inset-right) + 5vmin); bottom: calc(env(safe-area-inset-bottom) + 6vmin); width: 22vmin; height: 22vmin;
  border-radius: 50%; background: rgba(230,57,70,0.88); border: 0.7vmin solid #ffd23f; font-size: 11vmin; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 1vmin 2.5vmin rgba(0,0,0,0.5); }
#touchctl-look { right: calc(env(safe-area-inset-right) + 6.5vmin); bottom: calc(env(safe-area-inset-bottom) + 32.5vmin); width: 12vmin; height: 12vmin; border-radius: 50%;
  background: rgba(26,8,51,0.45); border: 0.5vmin solid rgba(255,255,255,0.55); font-size: 6.5vmin; display: none; align-items: center; justify-content: center; }
#touchctl-look.has { display: flex; }
.touchctl.on { filter: brightness(1.25); transform: scale(0.94); }
`,fa=class{constructor(){this.state={x:0,y:0,grab:!1,look:!1};let t=document.createElement("style");t.textContent=Wx,document.head.appendChild(t);let e=(l,h="")=>{let u=document.createElement("div");return u.id=l,u.className="touchctl",u.innerHTML=h,document.body.appendChild(u),u},n=e("touchctl-stick",'<div id="touchctl-knob"></div>'),s=e("touchctl-grab","\u{1F9F8}");this.lookEl=e("touchctl-look","\u{1F3A8}"),document.body.classList.add("touch");let r=n.firstChild,o=l=>{let h=n.getBoundingClientRect();[this.state.x,this.state.y]=Vx(l.clientX-(h.left+h.width/2),l.clientY-(h.top+h.height/2),h.width/2),r.style.transform=`translate(${this.state.x*h.width/2}px, ${this.state.y*h.width/2}px)`},a=()=>{this.state.x=this.state.y=0,r.style.transform=""},c=(l,h,u)=>{l.addEventListener("pointerdown",f=>{f.preventDefault(),l.setPointerCapture(f.pointerId),l.classList.add("on"),h(f)});for(let f of["pointerup","pointercancel","lostpointercapture"])l.addEventListener(f,()=>{l.classList.remove("on"),u()})};c(n,o,a),n.addEventListener("pointermove",l=>{n.hasPointerCapture(l.pointerId)&&o(l)}),c(s,()=>{this.state.grab=!0},()=>{this.state.grab=!1}),c(this.lookEl,()=>{this.state.look=!0},()=>{this.state.look=!1})}pad(t){return this.lookEl.classList.toggle("has",t),t||(this.state.look=!1),Xx(this.state)}};var da=(i,t,e)=>Math.max(t,Math.min(e,i));function ou(i,t){let e=i.kb.x,n=i.kb.y;for(let s of t?[t]:i.pads)e+=s.x,n+=s.y;return[da(e,-1,1),da(n,-1,1)]}function cu(i,t,e,n,s,r){i.x=da(i.x+t*n*s,-r.x,r.x),i.z=da(i.z+e*n*s,-r.z,r.z)}su();au({top:[["T","Switch look"],["M","Music"],["P","Parent settings"],["Esc","Quit"]],side:[[["\u2190","\u2192","\u2191","\u2193"],"Move the claw"],["Space","Drop and grab"]]});var mn=new URLSearchParams(location.search),Le=nu();pi.current=la.look.includes(mn.get("look"))?mn.get("look"):Le.look;var pu={little:{reach:.16,magnet:!0,speed:.38},big:{reach:.075,magnet:!1,speed:.45}},zs=[58879,16727423,8126314,16765503],lu=["YOU GOT IT!","WOW!","HOORAY!","AWESOME!"],pa=new R(0,1.65,1.35+Number(mn.get("back")||0)),Fs=new R(0,1.4,.62),jx=12,Xe=new bs({antialias:!0,preserveDrawingBuffer:mn.has("shot")});Xe.setPixelRatio(Math.min(devicePixelRatio,1.5));Xe.setSize(innerWidth,innerHeight);Xe.shadowMap.enabled=!0;Xe.shadowMap.type=Yo;document.body.prepend(Xe.domElement);Xe.domElement.addEventListener("webglcontextlost",i=>{i.preventDefault(),setTimeout(()=>location.reload(),1500)});var mi=new qi,ns=new we(Number(mn.get("fov")||68),innerWidth/innerHeight,.05,50);ns.position.copy(pa);var Mc=()=>{ns.aspect=innerWidth/innerHeight,ns.updateProjectionMatrix(),Xe.setSize(innerWidth,innerHeight)};addEventListener("resize",Mc);addEventListener("orientationchange",()=>setTimeout(Mc,300));visualViewport==null||visualViewport.addEventListener("resize",Mc);var qx=new ji(Xe).fromScene(new ea(Xe),.04).texture,mu=new qr(13161727,2758720,1);mi.add(mu);var bc=new Zr(16777215,1);bc.position.set(2,4,3);mi.add(bc);for(let[i,t]of[[16727423,-2],[58879,2]]){let e=new Qi(i,4,6,1.5);e.position.set(t,2.2,1.5),mi.add(e)}var ie=Gh(mi),Sn=new ra(ie.machine,{people:Object.fromEntries(Object.keys(sn).map(i=>[i,{on:Le[i]??!0,repeat:Le[i+"Repeat"]??!0}]))}),yc=new ha(mi),_e=new oa,du,Ac=(du=globalThis.matchMedia)!=null&&du.call(globalThis,"(pointer: coarse)").matches?new fa:null;Ac&&(document.querySelector("#start p").textContent="Tap to play!");var Yx=new ca({extraPads:()=>Ac?[Ac.pad(Le.holdToggle)]:[]}),de=new ua,Sc={scene:mi,renderer:Xe,envTex:qx,hemi:mu,key:bc};sa(pi.current,Sc);_e.musicOn=Le.music;var F={started:!1,state:"idle",x:-.1,z:0,y:Hs,open:1,timer:0,wobble:0,stopY:pn,target:null,held:null,falling:null,turn:0,padCount:0,turnBanner:!1},vc=new Map,bn=null,hu=new R(0,1.12,0);function gu(){F.started||(F.started=!0,de.hideStart(),_e.init(),_e.play("start"),de.hint("Parents: press P for settings",10))}de.start.addEventListener("click",gu);addEventListener("pointerdown",()=>_e.init());addEventListener("touchend",()=>_e.init());function Zx(){sa(pi.current==="real"?"toon":"real",Sc),_e.play("blip")}function xu(){if(F.state!=="idle")return;let i=pu[Le.difficulty];F.target=Sn.pick(F.x,F.z,i.reach),F.stopY=F.target?F.target.position.y+F.target.userData.r+.07:Sn.surfaceAt(F.x,F.z)+.12,F.stopY=Math.min(F.stopY,Hs-.1),F.state="down",_e.play("drop")}function uu(){F.state="idle",F.padCount>=2&&(F.turn=(F.turn+1)%F.padCount,bn?F.turnBanner=!0:_c())}function _c(){F.turnBanner=!1,de.banner(`PLAYER ${F.turn+1}!`,zs[F.turn%zs.length],"turn"),_e.play("turn")}function Jx(i){let t=i.userData.kind==="star",e=sn[i.userData.who];if(e){de.banner(e.words[Math.floor(Math.random()*e.words.length)],e.banner,"super"),yc.burst(Fs.clone().add(new R(0,.15,0)),!0),_e.play("silly",i.userData.who);return}let n=t?"SUPER STAR!!":Math.random()<.3?`${aa[i.userData.kind].name}!`:lu[Math.floor(Math.random()*lu.length)];de.banner(n,t?16762880:16765503,t?"super":"win"),yc.burst(Fs.clone().add(new R(0,.15,0)),t),_e.play(t?"superwin":"win")}function vu(){de.openPanel(Le)}function ma(){de.closePanel()}de.onClose=ma;de.onSetting=(i,t)=>{Le[i]=t,gc(Le),i==="look"&&sa(t,Sc),i==="music"&&_e.setMusic(t),sn[i]&&Sn.setPerson(i,t),sn[i.replace(/Repeat$/,"")]&&i.endsWith("Repeat")&&Sn.setRepeat(i.replace(/Repeat$/,""),t),de.renderPanel(Le)};var ye={frames:0,time:0,stage:0,slow:0};function Kx(){var i;ye.stage++,ye.stage===1?(Xe.setPixelRatio(1),ie.clawLight.shadow.mapSize.set(512,512),(i=ie.clawLight.shadow.map)==null||i.dispose(),ie.clawLight.shadow.map=null):ye.stage===2?(Xe.shadowMap.type=lh,zh(t=>{t.needsUpdate=!0})):ye.stage===3&&Xe.setPixelRatio(.75)}function Qx(i){if(F.started){if(i>.25){ye.frames=0,ye.time=0;return}if(ye.frames++,ye.time+=i,ye.time>=3){let t=ye.frames/ye.time;mn.has("fps")&&de.fps(`${t.toFixed(0)} fps \xB7 quality step ${ye.stage}`),ye.slow=t<40?ye.slow+1:0,ye.slow>=2&&ye.stage<3&&(Kx(),ye.slow=0),ye.frames=0,ye.time=0}}}function yu(i,t){let e=Yx.poll(i,{holdToggle:Le.holdToggle});e.pads.length!==F.padCount&&(e.pads.length>=2&&F.padCount<2&&(F.turn=0,de.banner("2 PLAYERS!",zs[0],"turn")),F.padCount=e.pads.length,F.turn%=Math.max(1,F.padCount));for(let d of e.pads)(d.x||d.y||d.pressed.length)&&vc.set(d.index,t);if(F.padCount>=2&&F.state==="idle"&&F.started&&t-(vc.get(e.pads[F.turn].index)??0)>jx){let d=e.pads.findIndex((g,x)=>x!==F.turn&&vc.get(g.index)===t);d>=0&&(F.turn=d,_c())}let n=F.padCount>=2?e.pads[F.turn]:null;de.showDiag(e.pads),de.holdRing(e.holdProgress);for(let d of e.events){if(d.type==="parent"){de.panelOpen?ma():vu();continue}if(d.type==="escape"){ma();continue}if(d.type==="music"){Le.music=!Le.music,gc(Le),_e.setMusic(Le.music);continue}if(de.panelOpen){d.pad>=0&&ma();continue}if(_e.init(),!F.started){gu();continue}d.type==="toggle"?Zx():d.type==="drop"&&(!n||d.pad===-1||d.pad===n.index)&&xu()}let[s,r]=ou(e,n);(!F.started||de.panelOpen)&&(s=r=0),ie.stickPivot.rotation.z=-s*.35,ie.stickPivot.rotation.x=r*.35;let o=pu[Le.difficulty],a=0;switch(F.state){case"idle":cu(F,s,r,o.speed,i,kh),F.open=Math.min(1,F.open+i*2),a=Math.min(1,Math.hypot(s,r));break;case"down":if(F.target&&o.magnet){let d=1-Math.exp(-i*4);F.x+=(F.target.position.x-F.x)*d,F.z+=(F.target.position.z-F.z)*d}F.y-=.55*i,a=.6,F.y<=F.stopY&&(F.y=F.stopY,F.state="grab",F.timer=0);break;case"grab":F.timer+=i,F.open=Math.max(0,1-F.timer*2.2),F.timer>.55&&(F.target&&(Sn.take(F.target),ie.claw.attach(F.target),F.held=F.target,F.target=null,_e.play("grab")),F.state="up",_e.play("lift"));break;case"up":F.y+=.6*i,a=.6,F.held&&F.held.position.lerp(new R(0,-.1-F.held.userData.r*.7,0),1-Math.exp(-i*8)),F.y>=Hs&&(F.y=Hs,F.held?F.state="toChute":(F.wobble=1,_e.play("miss"),uu()));break;case"toChute":{let d=Ve.x-F.x,g=Ve.z-F.z,x=Math.hypot(d,g),m=.5*i;a=1,x<=m?(F.x=Ve.x,F.z=Ve.z,F.state="release",F.timer=0):(F.x+=d/x*m,F.z+=g/x*m);break}case"release":F.timer+=i,F.open=Math.min(1,F.timer*3),F.timer>.15&&F.held&&(ie.machine.attach(F.held),F.held.userData.vy=0,F.falling=F.held,F.held=null,F.state="falling");break;case"falling":{let d=F.falling;d.userData.vy-=4*i,d.position.y+=d.userData.vy*i,d.rotation.x+=i*4,d.position.y<pn-.12&&(d.rotation.set(0,0,0),bn&&Au(),bn={p:d,t:0,from:new R(Ve.x,.55,Mn+.08)},d.position.copy(bn.from),d.scale.setScalar(.3),F.falling=null,F.state="cheer",F.timer=0,Jx(d));break}case"cheer":F.timer+=i,F.timer>1.6&&uu();break}$x(i),Sn.update(i),yc.update(i),ie.bridge.position.x=F.x,ie.carriage.position.set(F.x,Us-.045,F.z),F.wobble=Math.max(0,F.wobble-i*1.2),ie.claw.position.set(F.x,F.y,F.z),ie.claw.rotation.z=Math.sin(t*22)*.25*F.wobble,ie.claw.rotation.x=Math.sin(t*17)*.12*F.wobble;let c=Us-.07,l=c-(F.y+.025);ie.cable.scale.y=Math.max(.001,l),ie.cable.position.set(F.x,F.y+.025+l/2,F.z),ie.setClawOpen(F.open),ie.clawLight.position.set(F.x,Je-.04,F.z),ie.clawLight.target.position.set(F.x,pn,F.z),ie.ring.visible=F.state==="idle"&&F.started,ie.ring.visible&&(ie.ring.position.set(F.x,Sn.surfaceAt(F.x,F.z)+.006,F.z),ie.ring.scale.setScalar(1+Math.sin(t*6)*.12),ie.ring.material.color.setHex(F.padCount>=2?zs[F.turn%zs.length]:16777215));let h=!!bn&&bn.t<3,u=h?26:6;ie.bulbs.forEach((d,g)=>{let x=(Math.floor(t*u)+g)%3===0;d.material.color.setHex(x?16777215:h?[16727423,58879,16765503][g%3]:9071146)}),ie.button.position.y=.055-(F.state==="down"||F.state==="grab"?.012:0),ns.position.set(pa.x+Math.sin(t*.5)*.012+F.x*.08,pa.y+Math.sin(t*.9)*.004,pa.z);let f=h?new R(0,1.22,.3):new R(F.x*.25,1.12,F.z*.2-.02);hu.lerp(f,1-Math.exp(-i*3)),ns.lookAt(hu),_e.tick(a)}function $x(i){if(!bn)return;let t=bn,e=t.p;if(t.t+=i,t.t<.6){let n=t.t/.6,s=1-Math.pow(1-n,3);e.position.lerpVectors(t.from,Fs,s),e.position.y+=Math.sin(n*Math.PI)*.15,e.scale.setScalar(bh.lerp(.3,1.35,s))}else if(t.t<3){let n=t.t-.6;if(e.position.copy(Fs),e.position.y+=Math.sin(n*4)*.02,e.rotation.y=Math.sin(n*2.5)*.6,e.rotation.z=Math.sin(n*5)*.08,e.userData.kind==="face"){let s=Math.max(.25,1-n/2.4);e.rotation.z=Math.sin(n*11)*.35*s,e.rotation.x=Math.sin(n*7)*.15*s,e.rotation.y*=.4}e.scale.setScalar(1.35+Math.sin(n*8)*.05*Math.max(0,1-n))}else if(t.t<3.5){let n=(t.t-3)/.5;e.position.lerpVectors(Fs,new R(0,1.95,.95),n*n),e.scale.setScalar(1.35*(1-n))}else Au()}function Au(){let i=bn.p;de.addToTray(i.userData.kind,i.userData.color,i.userData.who),_e.play("plop"),Sn.destroy(i),Sn.spawnRandom(),bn=null,F.turnBanner&&_c()}var fu=new Jr;function Mu(){let i=fu.getDelta(),t=Math.min(i,.05);yu(t,fu.elapsedTime),Qx(i),Xe.render(mi,ns),requestAnimationFrame(Mu)}mn.has("shot")&&(F.started=!0,de.hideStart());mn.has("panel")&&vu();if(mn.has("sim")){let i=mn.get("grab"),t=i&&Sn.list.find(n=>n.userData.who&&(i==="face"||n.userData.who===i));t&&(F.x=t.position.x,F.z=t.position.z),xu();let e=Math.round(parseFloat(mn.get("sim"))*60);for(let n=0;n<e;n++)yu(1/60,n/60);document.getElementById("banner").style.animationDelay="-0.6s"}Mu();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
