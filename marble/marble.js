(()=>{var ao="160";var Mh=0,Xo=1,bh=2;var vl=1,oo=2,xn=3,Bn=0,De=1,Me=2;var On=0,Ni=1,jo=2,qo=3,Yo=4,Sh=5,Kn=100,_h=101,wh=102,Zo=103,Jo=104,Eh=200,Th=201,Ph=202,Rh=203,Sa=204,_a=205,Ch=206,Lh=207,Dh=208,Ih=209,Nh=210,Oh=211,Uh=212,Hh=213,Bh=214,Fh=0,zh=1,kh=2,Ys=3,Vh=4,Gh=5,Wh=6,Xh=7,yl=0,jh=1,qh=2,Un=0,Yh=1,Zh=2,Jh=3,Kh=4,Qh=5,$h=6;var Al=300,Hi=301,Bi=302,wa=303,Ea=304,Sr=306,ls=1e3,$e=1001,Ta=1002,me=1003,Ko=1004;var Xr=1005;var We=1006,tu=1007;var hs=1008;var Hn=1009,eu=1010,nu=1011,co=1012,Ml=1013,In=1014,Nn=1015,us=1016,bl=1017,Sl=1018,$n=1020,iu=1021,tn=1023,su=1024,ru=1025,ti=1026,Fi=1027,au=1028,_l=1029,ou=1030,wl=1031,El=1033,jr=33776,qr=33777,Yr=33778,Zr=33779,Qo=35840,$o=35841,tc=35842,ec=35843,Tl=36196,nc=37492,ic=37496,sc=37808,rc=37809,ac=37810,oc=37811,cc=37812,lc=37813,hc=37814,uc=37815,fc=37816,dc=37817,pc=37818,mc=37819,gc=37820,xc=37821,Jr=36492,vc=36494,yc=36495,cu=36283,Ac=36284,Mc=36285,bc=36286;var Zs=2300,Js=2301,Kr=2302,Sc=2400,_c=2401,wc=2402;var Pl=3e3,ei=3001,lu=3200,hu=3201,Rl=0,uu=1,Xe="",Kt="srgb",An="srgb-linear",lo="display-p3",_r="display-p3-linear",Ks="linear",Qt="srgb",Qs="rec709",$s="p3";var pi=7680;var Ec=519,fu=512,du=513,pu=514,Cl=515,mu=516,gu=517,xu=518,vu=519,Tc=35044;var Pc="300 es",Pa=1035,yn=2e3,tr=2001,Fn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Qr=Math.PI/180,Ra=180/Math.PI;function xs(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function Te(n,t,e){return Math.max(t,Math.min(e,n))}function yu(n,t){return(n%t+t)%t}function $r(n,t,e){return(1-e)*n+e*t}function Rc(n){return(n&n-1)===0&&n!==0}function Ca(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function ts(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Le(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var kt=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Ft=class n{constructor(t,e,i,s,r,o,a,c,l){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l)}set(t,e,i,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=i,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],c=i[6],l=i[1],h=i[4],f=i[7],d=i[2],m=i[5],g=i[8],v=s[0],p=s[3],u=s[6],y=s[1],x=s[4],A=s[7],P=s[2],w=s[5],T=s[8];return r[0]=o*v+a*y+c*P,r[3]=o*p+a*x+c*w,r[6]=o*u+a*A+c*T,r[1]=l*v+h*y+f*P,r[4]=l*p+h*x+f*w,r[7]=l*u+h*A+f*T,r[2]=d*v+m*y+g*P,r[5]=d*p+m*x+g*w,r[8]=d*u+m*A+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-i*r*h+i*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=h*o-a*l,d=a*c-h*r,m=l*r-o*c,g=e*f+i*d+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=f*v,t[1]=(s*l-h*i)*v,t[2]=(a*i-s*o)*v,t[3]=d*v,t[4]=(h*e-s*c)*v,t[5]=(s*r-a*e)*v,t[6]=m*v,t[7]=(i*c-l*e)*v,t[8]=(o*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ta.makeScale(t,e)),this}rotate(t){return this.premultiply(ta.makeRotation(-t)),this}translate(t,e){return this.premultiply(ta.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},ta=new Ft;function Ll(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function er(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Au(){let n=er("canvas");return n.style.display="block",n}var Cc={};function os(n){n in Cc||(Cc[n]=!0,console.warn(n))}var Lc=new Ft().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Dc=new Ft().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),_s={[An]:{transfer:Ks,primaries:Qs,toReference:n=>n,fromReference:n=>n},[Kt]:{transfer:Qt,primaries:Qs,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[_r]:{transfer:Ks,primaries:$s,toReference:n=>n.applyMatrix3(Dc),fromReference:n=>n.applyMatrix3(Lc)},[lo]:{transfer:Qt,primaries:$s,toReference:n=>n.convertSRGBToLinear().applyMatrix3(Dc),fromReference:n=>n.applyMatrix3(Lc).convertLinearToSRGB()}},Mu=new Set([An,_r]),jt={enabled:!0,_workingColorSpace:An,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!Mu.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=_s[t].toReference,s=_s[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return _s[n].primaries},getTransfer:function(n){return n===Xe?Ks:_s[n].transfer}};function Oi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ea(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var mi,nr=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{mi===void 0&&(mi=er("canvas")),mi.width=t.width,mi.height=t.height;let i=mi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=mi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=er("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Oi(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Oi(e[i]/255)*255):e[i]=Oi(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},bu=0,ir=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=xs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(na(s[o].image)):r.push(na(s[o]))}else r=na(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?nr.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Su=0,qe=class n extends Fn{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=$e,s=$e,r=We,o=hs,a=tn,c=Hn,l=n.DEFAULT_ANISOTROPY,h=Xe){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Su++}),this.uuid=xs(),this.name="",this.source=new ir(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ei?Kt:Xe),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Al)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ls:t.x=t.x-Math.floor(t.x);break;case $e:t.x=t.x<0?0:1;break;case Ta:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ls:t.y=t.y-Math.floor(t.y);break;case $e:t.y=t.y<0?0:1;break;case Ta:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Kt?ei:Pl}set encoding(t){os("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===ei?Kt:Xe}};qe.DEFAULT_IMAGE=null;qe.DEFAULT_MAPPING=Al;qe.DEFAULT_ANISOTROPY=1;var pe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,c=t.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],g=c[9],v=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,A=(m+1)/2,P=(u+1)/2,w=(h+d)/4,T=(f+v)/4,U=(g+p)/4;return x>A&&x>P?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=w/i,r=T/i):A>P?A<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(A),i=w/s,r=U/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=T/r,s=U/r),this.set(i,s,r,e),this}let y=Math.sqrt((p-g)*(p-g)+(f-v)*(f-v)+(d-h)*(d-h));return Math.abs(y)<.001&&(y=1),this.x=(p-g)/y,this.y=(f-v)/y,this.z=(d-h)/y,this.w=Math.acos((l+m+u-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},La=class extends Fn{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(os("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ei?Kt:Xe),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new qe(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new ir(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Mn=class extends La{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},sr=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=me,this.minFilter=me,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Da=class extends qe{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=me,this.minFilter=me,this.wrapR=$e,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var on=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let c=i[s+0],l=i[s+1],h=i[s+2],f=i[s+3],d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=g,t[e+3]=v;return}if(f!==v||c!==d||l!==m||h!==g){let p=1-a,u=c*d+l*m+h*g+f*v,y=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let P=Math.sqrt(x),w=Math.atan2(P,u*y);p=Math.sin(p*w)/P,a=Math.sin(a*w)/P}let A=a*y;if(c=c*p+d*A,l=l*p+m*A,h=h*p+g*A,f=f*p+v*A,p===1-a){let P=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=P,l*=P,h*=P,f*=P}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,i,s,r,o){let a=i[s],c=i[s+1],l=i[s+2],h=i[s+3],f=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return t[e]=a*g+h*f+c*m-l*d,t[e+1]=c*g+h*d+l*f-a*m,t[e+2]=l*g+h*m+a*d-c*f,t[e+3]=h*g-a*f-c*d-l*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(i/2),h=a(s/2),f=a(r/2),d=c(i/2),m=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"YXZ":this._x=d*h*f+l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"ZXY":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f-d*m*g;break;case"ZYX":this._x=d*h*f-l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f+d*m*g;break;case"YZX":this._x=d*h*f+l*m*g,this._y=l*m*f+d*h*g,this._z=l*h*g-d*m*f,this._w=l*h*f-d*m*g;break;case"XZY":this._x=d*h*f-l*m*g,this._y=l*m*f-d*h*g,this._z=l*h*g+d*m*f,this._w=l*h*f+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],f=e[10],d=i+a+f;if(d>0){let m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-s)*m}else if(i>a&&i>f){let m=2*Math.sqrt(1+i-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+l)/m}else if(a>f){let m=2*Math.sqrt(1+a-i-f);this._w=(r-l)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(c+h)/m}else{let m=2*Math.sqrt(1+f-i-a);this._w=(o-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=i*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-i*l,this._z=r*h+o*l+i*c-s*a,this._w=o*h-i*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=s*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},D=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*i),h=2*(a*e-r*s),f=2*(r*i-o*e);return this.x=e+c*l+o*f-a*h,this.y=i+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-i*c,this.z=i*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return ia.copy(this).projectOnVector(t),this.sub(ia)}reflect(t){return this.sub(ia.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Te(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},ia=new D,Ic=new on,bn=class{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Je.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Je.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=Je.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Je):Je.fromBufferAttribute(r,o),Je.applyMatrix4(t.matrixWorld),this.expandByPoint(Je);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ws.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ws.copy(i.boundingBox)),ws.applyMatrix4(t.matrixWorld),this.union(ws)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Je),Je.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Es.subVectors(this.max,es),gi.subVectors(t.a,es),xi.subVectors(t.b,es),vi.subVectors(t.c,es),Pn.subVectors(xi,gi),Rn.subVectors(vi,xi),jn.subVectors(gi,vi);let e=[0,-Pn.z,Pn.y,0,-Rn.z,Rn.y,0,-jn.z,jn.y,Pn.z,0,-Pn.x,Rn.z,0,-Rn.x,jn.z,0,-jn.x,-Pn.y,Pn.x,0,-Rn.y,Rn.x,0,-jn.y,jn.x,0];return!sa(e,gi,xi,vi,Es)||(e=[1,0,0,0,1,0,0,0,1],!sa(e,gi,xi,vi,Es))?!1:(Ts.crossVectors(Pn,Rn),e=[Ts.x,Ts.y,Ts.z],sa(e,gi,xi,vi,Es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Je).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Je).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(fn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),fn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),fn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),fn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),fn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),fn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),fn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),fn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(fn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},fn=[new D,new D,new D,new D,new D,new D,new D,new D],Je=new D,ws=new bn,gi=new D,xi=new D,vi=new D,Pn=new D,Rn=new D,jn=new D,es=new D,Es=new D,Ts=new D,qn=new D;function sa(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){qn.fromArray(n,r);let a=s.x*Math.abs(qn.x)+s.y*Math.abs(qn.y)+s.z*Math.abs(qn.z),c=t.dot(qn),l=e.dot(qn),h=i.dot(qn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var _u=new bn,ns=new D,ra=new D,ni=class{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):_u.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);let e=ns.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(ns,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ra.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(ra)),this.expandByPoint(ns.copy(t.center).sub(ra))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},dn=new D,aa=new D,Ps=new D,Cn=new D,oa=new D,Rs=new D,ca=new D,Ia=class{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=dn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dn.copy(this.origin).addScaledVector(this.direction,e),dn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){aa.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),Cn.copy(this.origin).sub(aa);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=Cn.dot(this.direction),c=-Cn.dot(Ps),l=Cn.lengthSq(),h=Math.abs(1-o*o),f,d,m,g;if(h>0)if(f=o*c-a,d=o*a-c,g=r*h,f>=0)if(d>=-g)if(d<=g){let v=1/h;f*=v,d*=v,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-g?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=g?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(aa).addScaledVector(Ps,d),m}intersectSphere(t,e){dn.subVectors(t.center,this.origin);let i=dn.dot(this.direction),s=dn.dot(dn)-i*i,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=i-o,c=i+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(i=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(i=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(t.min.z-d.z)*f,c=(t.max.z-d.z)*f):(a=(t.max.z-d.z)*f,c=(t.min.z-d.z)*f),i>c||a>s)||((a>i||i!==i)&&(i=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,dn)!==null}intersectTriangle(t,e,i,s,r){oa.subVectors(e,t),Rs.subVectors(i,t),ca.crossVectors(oa,Rs);let o=this.direction.dot(ca),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cn.subVectors(this.origin,t);let c=a*this.direction.dot(Rs.crossVectors(Cn,Rs));if(c<0)return null;let l=a*this.direction.dot(oa.cross(Cn));if(l<0||c+l>o)return null;let h=-a*Cn.dot(ca);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},$t=class n{constructor(t,e,i,s,r,o,a,c,l,h,f,d,m,g,v,p){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,c,l,h,f,d,m,g,v,p)}set(t,e,i,s,r,o,a,c,l,h,f,d,m,g,v,p){let u=this.elements;return u[0]=t,u[4]=e,u[8]=i,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=g,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/yi.setFromMatrixColumn(t,0).length(),r=1/yi.setFromMatrixColumn(t,1).length(),o=1/yi.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){let d=o*h,m=o*f,g=a*h,v=a*f;e[0]=c*h,e[4]=-c*f,e[8]=l,e[1]=m+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+m*l,e[10]=o*c}else if(t.order==="YXZ"){let d=c*h,m=c*f,g=l*h,v=l*f;e[0]=d+v*a,e[4]=g*a-m,e[8]=o*l,e[1]=o*f,e[5]=o*h,e[9]=-a,e[2]=m*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){let d=c*h,m=c*f,g=l*h,v=l*f;e[0]=d-v*a,e[4]=-o*f,e[8]=g+m*a,e[1]=m+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let d=o*h,m=o*f,g=a*h,v=a*f;e[0]=c*h,e[4]=g*l-m,e[8]=d*l+v,e[1]=c*f,e[5]=v*l+d,e[9]=m*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let d=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*f,e[8]=g*f+m,e[1]=f,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=m*f+g,e[10]=d-v*f}else if(t.order==="XZY"){let d=o*c,m=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-f,e[8]=l*h,e[1]=d*f+v,e[5]=o*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=a*h,e[10]=v*f+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,Eu)}lookAt(t,e,i){let s=this.elements;return Ue.subVectors(t,e),Ue.lengthSq()===0&&(Ue.z=1),Ue.normalize(),Ln.crossVectors(i,Ue),Ln.lengthSq()===0&&(Math.abs(i.z)===1?Ue.x+=1e-4:Ue.z+=1e-4,Ue.normalize(),Ln.crossVectors(i,Ue)),Ln.normalize(),Cs.crossVectors(Ue,Ln),s[0]=Ln.x,s[4]=Cs.x,s[8]=Ue.x,s[1]=Ln.y,s[5]=Cs.y,s[9]=Ue.y,s[2]=Ln.z,s[6]=Cs.z,s[10]=Ue.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],c=i[8],l=i[12],h=i[1],f=i[5],d=i[9],m=i[13],g=i[2],v=i[6],p=i[10],u=i[14],y=i[3],x=i[7],A=i[11],P=i[15],w=s[0],T=s[4],U=s[8],M=s[12],S=s[1],R=s[5],N=s[9],Y=s[13],C=s[2],I=s[6],V=s[10],j=s[14],q=s[3],W=s[7],Z=s[11],K=s[15];return r[0]=o*w+a*S+c*C+l*q,r[4]=o*T+a*R+c*I+l*W,r[8]=o*U+a*N+c*V+l*Z,r[12]=o*M+a*Y+c*j+l*K,r[1]=h*w+f*S+d*C+m*q,r[5]=h*T+f*R+d*I+m*W,r[9]=h*U+f*N+d*V+m*Z,r[13]=h*M+f*Y+d*j+m*K,r[2]=g*w+v*S+p*C+u*q,r[6]=g*T+v*R+p*I+u*W,r[10]=g*U+v*N+p*V+u*Z,r[14]=g*M+v*Y+p*j+u*K,r[3]=y*w+x*S+A*C+P*q,r[7]=y*T+x*R+A*I+P*W,r[11]=y*U+x*N+A*V+P*Z,r[15]=y*M+x*Y+A*j+P*K,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],f=t[6],d=t[10],m=t[14],g=t[3],v=t[7],p=t[11],u=t[15];return g*(+r*c*f-s*l*f-r*a*d+i*l*d+s*a*m-i*c*m)+v*(+e*c*m-e*l*d+r*o*d-s*o*m+s*l*h-r*c*h)+p*(+e*l*f-e*a*m-r*o*f+i*o*m+r*a*h-i*l*h)+u*(-s*a*h-e*c*f+e*a*d+s*o*f-i*o*d+i*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],f=t[9],d=t[10],m=t[11],g=t[12],v=t[13],p=t[14],u=t[15],y=f*p*l-v*d*l+v*c*m-a*p*m-f*c*u+a*d*u,x=g*d*l-h*p*l-g*c*m+o*p*m+h*c*u-o*d*u,A=h*v*l-g*f*l+g*a*m-o*v*m-h*a*u+o*f*u,P=g*f*c-h*v*c-g*a*d+o*v*d+h*a*p-o*f*p,w=e*y+i*x+s*A+r*P;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let T=1/w;return t[0]=y*T,t[1]=(v*d*r-f*p*r-v*s*m+i*p*m+f*s*u-i*d*u)*T,t[2]=(a*p*r-v*c*r+v*s*l-i*p*l-a*s*u+i*c*u)*T,t[3]=(f*c*r-a*d*r-f*s*l+i*d*l+a*s*m-i*c*m)*T,t[4]=x*T,t[5]=(h*p*r-g*d*r+g*s*m-e*p*m-h*s*u+e*d*u)*T,t[6]=(g*c*r-o*p*r-g*s*l+e*p*l+o*s*u-e*c*u)*T,t[7]=(o*d*r-h*c*r+h*s*l-e*d*l-o*s*m+e*c*m)*T,t[8]=A*T,t[9]=(g*f*r-h*v*r-g*i*m+e*v*m+h*i*u-e*f*u)*T,t[10]=(o*v*r-g*a*r+g*i*l-e*v*l-o*i*u+e*a*u)*T,t[11]=(h*a*r-o*f*r-h*i*l+e*f*l+o*i*m-e*a*m)*T,t[12]=P*T,t[13]=(h*v*s-g*f*s+g*i*d-e*v*d-h*i*p+e*f*p)*T,t[14]=(g*a*s-o*v*s-g*i*c+e*v*c+o*i*p-e*a*p)*T,t[15]=(o*f*s-h*a*s+h*i*c-e*f*c-o*i*d+e*a*d)*T,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+i,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+i,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,f=a+a,d=r*l,m=r*h,g=r*f,v=o*h,p=o*f,u=a*f,y=c*l,x=c*h,A=c*f,P=i.x,w=i.y,T=i.z;return s[0]=(1-(v+u))*P,s[1]=(m+A)*P,s[2]=(g-x)*P,s[3]=0,s[4]=(m-A)*w,s[5]=(1-(d+u))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(g+x)*T,s[9]=(p-y)*T,s[10]=(1-(d+v))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=yi.set(s[0],s[1],s[2]).length(),o=yi.set(s[4],s[5],s[6]).length(),a=yi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Ke.copy(this);let l=1/r,h=1/o,f=1/a;return Ke.elements[0]*=l,Ke.elements[1]*=l,Ke.elements[2]*=l,Ke.elements[4]*=h,Ke.elements[5]*=h,Ke.elements[6]*=h,Ke.elements[8]*=f,Ke.elements[9]*=f,Ke.elements[10]*=f,e.setFromRotationMatrix(Ke),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=yn){let c=this.elements,l=2*r/(e-t),h=2*r/(i-s),f=(e+t)/(e-t),d=(i+s)/(i-s),m,g;if(a===yn)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===tr)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=yn){let c=this.elements,l=1/(e-t),h=1/(i-s),f=1/(o-r),d=(e+t)*l,m=(i+s)*h,g,v;if(a===yn)g=(o+r)*f,v=-2*f;else if(a===tr)g=r*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},yi=new D,Ke=new $t,wu=new D(0,0,0),Eu=new D(1,1,1),Ln=new D,Cs=new D,Ue=new D,Nc=new $t,Oc=new on,rr=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Te(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Te(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Nc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Nc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Oc.setFromEuler(this),this.setFromQuaternion(Oc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};rr.DEFAULT_ORDER="XYZ";var ar=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Tu=0,Uc=new D,Ai=new on,pn=new $t,Ls=new D,is=new D,Pu=new D,Ru=new on,Hc=new D(1,0,0),Bc=new D(0,1,0),Fc=new D(0,0,1),Cu={type:"added"},Lu={type:"removed"},Re=class n extends Fn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new D,e=new rr,i=new on,s=new D(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $t},normalMatrix:{value:new Ft}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.multiply(Ai),this}rotateOnWorldAxis(t,e){return Ai.setFromAxisAngle(t,e),this.quaternion.premultiply(Ai),this}rotateX(t){return this.rotateOnAxis(Hc,t)}rotateY(t){return this.rotateOnAxis(Bc,t)}rotateZ(t){return this.rotateOnAxis(Fc,t)}translateOnAxis(t,e){return Uc.copy(t).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Hc,t)}translateY(t){return this.translateOnAxis(Bc,t)}translateZ(t){return this.translateOnAxis(Fc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(pn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ls.copy(t):Ls.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pn.lookAt(is,Ls,this.up):pn.lookAt(Ls,is,this.up),this.quaternion.setFromRotationMatrix(pn),s&&(pn.extractRotation(s.matrixWorld),Ai.setFromRotationMatrix(pn),this.quaternion.premultiply(Ai.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Cu)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Lu)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),pn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),pn.multiply(t.parent.matrixWorld)),t.applyMatrix4(pn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Pu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Ru,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++){let a=s[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),f=o(t.shapes),d=o(t.skeletons),m=o(t.animations),g=o(t.nodes);a.length>0&&(i.geometries=a),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),g.length>0&&(i.nodes=g)}return i.object=s,i;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Re.DEFAULT_UP=new D(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Qe=new D,mn=new D,la=new D,gn=new D,Mi=new D,bi=new D,zc=new D,ha=new D,ua=new D,fa=new D,Ds=!1,Li=class n{constructor(t=new D,e=new D,i=new D){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qe.subVectors(t,e),s.cross(Qe);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){Qe.subVectors(s,e),mn.subVectors(i,e),la.subVectors(t,e);let o=Qe.dot(Qe),a=Qe.dot(mn),c=Qe.dot(la),l=mn.dot(mn),h=mn.dot(la),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let d=1/f,m=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,gn)===null?!1:gn.x>=0&&gn.y>=0&&gn.x+gn.y<=1}static getUV(t,e,i,s,r,o,a,c){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),this.getInterpolation(t,e,i,s,r,o,a,c)}static getInterpolation(t,e,i,s,r,o,a,c){return this.getBarycoord(t,e,i,s,gn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,gn.x),c.addScaledVector(o,gn.y),c.addScaledVector(a,gn.z),c)}static isFrontFacing(t,e,i,s){return Qe.subVectors(i,e),mn.subVectors(t,e),Qe.cross(mn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qe.subVectors(this.c,this.b),mn.subVectors(this.a,this.b),Qe.cross(mn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Ds===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ds=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,o,a;Mi.subVectors(s,i),bi.subVectors(r,i),ha.subVectors(t,i);let c=Mi.dot(ha),l=bi.dot(ha);if(c<=0&&l<=0)return e.copy(i);ua.subVectors(t,s);let h=Mi.dot(ua),f=bi.dot(ua);if(h>=0&&f<=h)return e.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(i).addScaledVector(Mi,o);fa.subVectors(t,r);let m=Mi.dot(fa),g=bi.dot(fa);if(g>=0&&m<=g)return e.copy(r);let v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(i).addScaledVector(bi,a);let p=h*g-m*f;if(p<=0&&f-h>=0&&m-g>=0)return zc.subVectors(r,s),a=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(zc,a);let u=1/(p+v+d);return o=v*u,a=d*u,e.copy(i).addScaledVector(Mi,o).addScaledVector(bi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Dl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dn={h:0,s:0,l:0},Is={h:0,s:0,l:0};function da(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var At=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Kt){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,jt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=jt.workingColorSpace){return this.r=t,this.g=e,this.b=i,jt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=jt.workingColorSpace){if(t=yu(t,1),e=Te(e,0,1),i=Te(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=da(o,r,t+1/3),this.g=da(o,r,t),this.b=da(o,r,t-1/3)}return jt.toWorkingColorSpace(this,s),this}setStyle(t,e=Kt){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Kt){let i=Dl[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Oi(t.r),this.g=Oi(t.g),this.b=Oi(t.b),this}copyLinearToSRGB(t){return this.r=ea(t.r),this.g=ea(t.g),this.b=ea(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Kt){return jt.fromWorkingColorSpace(Ae.copy(this),t),Math.round(Te(Ae.r*255,0,255))*65536+Math.round(Te(Ae.g*255,0,255))*256+Math.round(Te(Ae.b*255,0,255))}getHexString(t=Kt){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=jt.workingColorSpace){jt.fromWorkingColorSpace(Ae.copy(this),e);let i=Ae.r,s=Ae.g,r=Ae.b,o=Math.max(i,s,r),a=Math.min(i,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case i:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-i)/f+2;break;case r:c=(i-s)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=jt.workingColorSpace){return jt.fromWorkingColorSpace(Ae.copy(this),e),t.r=Ae.r,t.g=Ae.g,t.b=Ae.b,t}getStyle(t=Kt){jt.fromWorkingColorSpace(Ae.copy(this),t);let e=Ae.r,i=Ae.g,s=Ae.b;return t!==Kt?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Dn),this.setHSL(Dn.h+t,Dn.s+e,Dn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Dn),t.getHSL(Is);let i=$r(Dn.h,Is.h,e),s=$r(Dn.s,Is.s,e),r=$r(Dn.l,Is.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ae=new At;At.NAMES=Dl;var Du=0,ii=class extends Fn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Du++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Ni,this.side=Bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sa,this.blendDst=_a,this.blendEquation=Kn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ec,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=pi,this.stencilZFail=pi,this.stencilZPass=pi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ni&&(i.blending=this.blending),this.side!==Bn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Sa&&(i.blendSrc=this.blendSrc),this.blendDst!==_a&&(i.blendDst=this.blendDst),this.blendEquation!==Kn&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ec&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==pi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==pi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==pi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Sn=class extends ii{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var oe=new D,Ns=new kt,Be=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Tc,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix3(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyMatrix4(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.applyNormalMatrix(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)oe.fromBufferAttribute(this,e),oe.transformDirection(t),this.setXYZ(e,oe.x,oe.y,oe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=ts(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Le(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ts(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ts(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ts(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ts(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),i=Le(i,this.array),s=Le(s,this.array),r=Le(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Tc&&(t.usage=this.usage),t}};var or=class extends Be{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var cr=class extends Be{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var qt=class extends Be{constructor(t,e,i){super(new Float32Array(t),e,i)}};var Iu=0,Ge=new $t,pa=new Re,Si=new D,He=new bn,ss=new bn,de=new D,Ie=class n extends Fn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Iu++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ll(t)?cr:or)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Ft().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ge.makeRotationFromQuaternion(t),this.applyMatrix4(Ge),this}rotateX(t){return Ge.makeRotationX(t),this.applyMatrix4(Ge),this}rotateY(t){return Ge.makeRotationY(t),this.applyMatrix4(Ge),this}rotateZ(t){return Ge.makeRotationZ(t),this.applyMatrix4(Ge),this}translate(t,e,i){return Ge.makeTranslation(t,e,i),this.applyMatrix4(Ge),this}scale(t,e,i){return Ge.makeScale(t,e,i),this.applyMatrix4(Ge),this}lookAt(t){return pa.lookAt(t),pa.updateMatrix(),this.applyMatrix4(pa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Si).negate(),this.translate(Si.x,Si.y,Si.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new qt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new bn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];He.setFromBufferAttribute(r),this.morphTargetsRelative?(de.addVectors(this.boundingBox.min,He.min),this.boundingBox.expandByPoint(de),de.addVectors(this.boundingBox.max,He.max),this.boundingBox.expandByPoint(de)):(this.boundingBox.expandByPoint(He.min),this.boundingBox.expandByPoint(He.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ni);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(t){let i=this.boundingSphere.center;if(He.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(de.addVectors(He.min,ss.min),He.expandByPoint(de),de.addVectors(He.max,ss.max),He.expandByPoint(de)):(He.expandByPoint(ss.min),He.expandByPoint(ss.max))}He.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)de.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(de));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)de.fromBufferAttribute(a,l),c&&(Si.fromBufferAttribute(t,l),de.add(Si)),s=Math.max(s,i.distanceToSquared(de))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,o=e.uv.array,a=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Be(new Float32Array(4*a),4));let c=this.getAttribute("tangent").array,l=[],h=[];for(let S=0;S<a;S++)l[S]=new D,h[S]=new D;let f=new D,d=new D,m=new D,g=new kt,v=new kt,p=new kt,u=new D,y=new D;function x(S,R,N){f.fromArray(s,S*3),d.fromArray(s,R*3),m.fromArray(s,N*3),g.fromArray(o,S*2),v.fromArray(o,R*2),p.fromArray(o,N*2),d.sub(f),m.sub(f),v.sub(g),p.sub(g);let Y=1/(v.x*p.y-p.x*v.y);isFinite(Y)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-v.y).multiplyScalar(Y),y.copy(m).multiplyScalar(v.x).addScaledVector(d,-p.x).multiplyScalar(Y),l[S].add(u),l[R].add(u),l[N].add(u),h[S].add(y),h[R].add(y),h[N].add(y))}let A=this.groups;A.length===0&&(A=[{start:0,count:i.length}]);for(let S=0,R=A.length;S<R;++S){let N=A[S],Y=N.start,C=N.count;for(let I=Y,V=Y+C;I<V;I+=3)x(i[I+0],i[I+1],i[I+2])}let P=new D,w=new D,T=new D,U=new D;function M(S){T.fromArray(r,S*3),U.copy(T);let R=l[S];P.copy(R),P.sub(T.multiplyScalar(T.dot(R))).normalize(),w.crossVectors(U,R);let Y=w.dot(h[S])<0?-1:1;c[S*4]=P.x,c[S*4+1]=P.y,c[S*4+2]=P.z,c[S*4+3]=Y}for(let S=0,R=A.length;S<R;++S){let N=A[S],Y=N.start,C=N.count;for(let I=Y,V=Y+C;I<V;I+=3)M(i[I+0]),M(i[I+1]),M(i[I+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Be(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);let s=new D,r=new D,o=new D,a=new D,c=new D,l=new D,h=new D,f=new D;if(t)for(let d=0,m=t.count;d<m;d+=3){let g=t.getX(d+0),v=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,p),a.add(h),c.add(h),l.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)de.fromBufferAttribute(t,e),de.normalize(),t.setXYZ(e,de.x,de.y,de.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h),m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*h;for(let u=0;u<h;u++)d[g++]=l[m++]}return new Be(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,i);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let d=l[h],m=t(d,i);c.push(m)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let c in i){let l=i[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let m=l[f];h.push(m.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},kc=new $t,Yn=new Ia,Os=new ni,Vc=new D,_i=new D,wi=new D,Ei=new D,ma=new D,Us=new D,Hs=new kt,Bs=new kt,Fs=new kt,Gc=new D,Wc=new D,Xc=new D,zs=new D,ks=new D,Gt=class extends Re{constructor(t=new Ie,e=new Sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){Us.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(ma.fromBufferAttribute(f,t),o?Us.addScaledVector(ma,h):Us.addScaledVector(ma.sub(e),h))}e.add(Us)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Os.copy(i.boundingSphere),Os.applyMatrix4(r),Yn.copy(t.ray).recast(t.near),!(Os.containsPoint(Yn.origin)===!1&&(Yn.intersectSphere(Os,Vc)===null||Yn.origin.distanceToSquared(Vc)>(t.far-t.near)**2))&&(kc.copy(r).invert(),Yn.copy(t.ray).applyMatrix4(kc),!(i.boundingBox!==null&&Yn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Yn)))}_computeIntersections(t,e,i){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let A=y,P=x;A<P;A+=3){let w=a.getX(A),T=a.getX(A+1),U=a.getX(A+2);s=Vs(this,u,t,i,l,h,f,w,T,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let y=a.getX(p),x=a.getX(p+1),A=a.getX(p+2);s=Vs(this,o,t,i,l,h,f,y,x,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){let p=d[g],u=o[p.materialIndex],y=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let A=y,P=x;A<P;A+=3){let w=A,T=A+1,U=A+2;s=Vs(this,u,t,i,l,h,f,w,T,U),s&&(s.faceIndex=Math.floor(A/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,u=v;p<u;p+=3){let y=p,x=p+1,A=p+2;s=Vs(this,o,t,i,l,h,f,y,x,A),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function Nu(n,t,e,i,s,r,o,a){let c;if(t.side===De?c=i.intersectTriangle(o,r,s,!0,a):c=i.intersectTriangle(s,r,o,t.side===Bn,a),c===null)return null;ks.copy(a),ks.applyMatrix4(n.matrixWorld);let l=e.ray.origin.distanceTo(ks);return l<e.near||l>e.far?null:{distance:l,point:ks.clone(),object:n}}function Vs(n,t,e,i,s,r,o,a,c,l){n.getVertexPosition(a,_i),n.getVertexPosition(c,wi),n.getVertexPosition(l,Ei);let h=Nu(n,t,e,i,_i,wi,Ei,zs);if(h){s&&(Hs.fromBufferAttribute(s,a),Bs.fromBufferAttribute(s,c),Fs.fromBufferAttribute(s,l),h.uv=Li.getInterpolation(zs,_i,wi,Ei,Hs,Bs,Fs,new kt)),r&&(Hs.fromBufferAttribute(r,a),Bs.fromBufferAttribute(r,c),Fs.fromBufferAttribute(r,l),h.uv1=Li.getInterpolation(zs,_i,wi,Ei,Hs,Bs,Fs,new kt),h.uv2=h.uv1),o&&(Gc.fromBufferAttribute(o,a),Wc.fromBufferAttribute(o,c),Xc.fromBufferAttribute(o,l),h.normal=Li.getInterpolation(zs,_i,wi,Ei,Gc,Wc,Xc,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new D,materialIndex:0};Li.getNormal(_i,wi,Ei,f.normal),h.face=f}return h}var fs=class n extends Ie{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],d=0,m=0;g("z","y","x",-1,-1,i,e,t,o,r,0),g("z","y","x",1,-1,i,e,-t,o,r,1),g("x","z","y",1,1,t,i,e,s,o,2),g("x","z","y",1,-1,t,i,-e,s,o,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(f,2));function g(v,p,u,y,x,A,P,w,T,U,M){let S=A/T,R=P/U,N=A/2,Y=P/2,C=w/2,I=T+1,V=U+1,j=0,q=0,W=new D;for(let Z=0;Z<V;Z++){let K=Z*R-Y;for(let at=0;at<I;at++){let X=at*S-N;W[v]=X*y,W[p]=K*x,W[u]=C,l.push(W.x,W.y,W.z),W[v]=0,W[p]=0,W[u]=w>0?1:-1,h.push(W.x,W.y,W.z),f.push(at/T),f.push(1-Z/U),j+=1}}for(let Z=0;Z<U;Z++)for(let K=0;K<T;K++){let at=d+K+I*Z,X=d+K+I*(Z+1),J=d+(K+1)+I*(Z+1),ot=d+(K+1)+I*Z;c.push(at,X,ot),c.push(X,J,ot),q+=6}a.addGroup(m,q,M),m+=q,d+=j}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function zi(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ee(n){let t={};for(let e=0;e<n.length;e++){let i=zi(n[e]);for(let s in i)t[s]=i[s]}return t}function Ou(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Il(n){return n.getRenderTarget()===null?n.outputColorSpace:jt.workingColorSpace}var Uu={clone:zi,merge:Ee},Hu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,_n=class extends ii{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hu,this.fragmentShader=Bu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Ou(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},lr=class extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Pe=class extends lr{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ra*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Qr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ra*2*Math.atan(Math.tan(Qr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Qr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*i/l,s*=o.width/c,i*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Ti=-90,Pi=1,Na=class extends Re{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Pe(Ti,Pi,t,e);s.layers=this.layers,this.add(s);let r=new Pe(Ti,Pi,t,e);r.layers=this.layers,this.add(r);let o=new Pe(Ti,Pi,t,e);o.layers=this.layers,this.add(o);let a=new Pe(Ti,Pi,t,e);a.layers=this.layers,this.add(a);let c=new Pe(Ti,Pi,t,e);c.layers=this.layers,this.add(c);let l=new Pe(Ti,Pi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===tr)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,c),t.setRenderTarget(i,4,s),t.render(e,l),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(f,d,m),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},hr=class extends qe{constructor(t,e,i,s,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:Hi,super(t,e,i,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Oa=class extends Mn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(os("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===ei?Kt:Xe),this.texture=new hr(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new fs(5,5,5),r=new _n({name:"CubemapFromEquirect",uniforms:zi(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:De,blending:On});r.uniforms.tEquirect.value=e;let o=new Gt(s,r),a=e.minFilter;return e.minFilter===hs&&(e.minFilter=We),new Na(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}},ga=new D,Fu=new D,zu=new Ft,vn=class{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=ga.subVectors(i,e).cross(Fu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(ga),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||zu.getNormalMatrix(t),s=this.coplanarPoint(ga).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Zn=new ni,Gs=new D,ds=class{constructor(t=new vn,e=new vn,i=new vn,s=new vn,r=new vn,o=new vn){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=yn){let i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],c=s[3],l=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],v=s[10],p=s[11],u=s[12],y=s[13],x=s[14],A=s[15];if(i[0].setComponents(c-r,d-l,p-m,A-u).normalize(),i[1].setComponents(c+r,d+l,p+m,A+u).normalize(),i[2].setComponents(c+o,d+h,p+g,A+y).normalize(),i[3].setComponents(c-o,d-h,p-g,A-y).normalize(),i[4].setComponents(c-a,d-f,p-v,A-x).normalize(),e===yn)i[5].setComponents(c+a,d+f,p+v,A+x).normalize();else if(e===tr)i[5].setComponents(a,f,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Zn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Zn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Zn)}intersectsSprite(t){return Zn.center.set(0,0,0),Zn.radius=.7071067811865476,Zn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Zn)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Gs.x=s.normal.x>0?t.max.x:t.min.x,Gs.y=s.normal.y>0?t.max.y:t.min.y,Gs.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Nl(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function ku(n,t){let e=t.isWebGL2,i=new WeakMap;function s(l,h){let f=l.array,d=l.usage,m=f.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,f,d),l.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:g,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,f){let d=h.array,m=h._updateRange,g=h.updateRanges;if(n.bindBuffer(f,l),m.count===-1&&g.length===0&&n.bufferSubData(f,0,d),g.length!==0){for(let v=0,p=g.length;v<p;v++){let u=g[v];e?n.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):n.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(e?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),i.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);let h=i.get(l);h&&(n.deleteBuffer(h.buffer),i.delete(l))}function c(l,h){if(l.isGLBufferAttribute){let d=i.get(l);(!d||d.version<l.version)&&i.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);let f=i.get(l);if(f===void 0)i.set(l,s(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,h),f.version=l.version}}return{get:o,remove:a,update:c}}var si=class n extends Ie{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(i),c=Math.floor(s),l=a+1,h=c+1,f=t/a,d=e/c,m=[],g=[],v=[],p=[];for(let u=0;u<h;u++){let y=u*d-o;for(let x=0;x<l;x++){let A=x*f-r;g.push(A,-y,0),v.push(0,0,1),p.push(x/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let y=0;y<a;y++){let x=y+l*u,A=y+l*(u+1),P=y+1+l*(u+1),w=y+1+l*u;m.push(x,A,w),m.push(A,P,w)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
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
#endif`,Wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ju=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,qu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yu=`#ifdef USE_AOMAP
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
#endif`,Zu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ju=`#ifdef USE_BATCHING
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
#endif`,Ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Qu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$u=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ef=`#ifdef USE_IRIDESCENCE
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
#endif`,nf=`#ifdef USE_BUMPMAP
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
#endif`,sf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,cf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,uf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,ff=`#define PI 3.141592653589793
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
} // validated`,df=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,pf=`vec3 transformedNormal = objectNormal;
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
#endif`,mf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Af=`
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
}`,Mf=`#ifdef USE_ENVMAP
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
#endif`,bf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sf=`#ifdef USE_ENVMAP
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
#endif`,_f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wf=`#ifdef USE_ENVMAP
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
#endif`,Ef=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Pf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cf=`#ifdef USE_GRADIENTMAP
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
}`,Lf=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Df=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,If=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Of=`uniform bool receiveShadow;
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
#endif`,Uf=`#ifdef USE_ENVMAP
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
#endif`,Hf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Bf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ff=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,kf=`PhysicalMaterial material;
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
#endif`,Vf=`struct PhysicalMaterial {
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
}`,Gf=`
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
#endif`,Wf=`#if defined( RE_IndirectDiffuse )
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
#endif`,Xf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,jf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,qf=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Zf=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Jf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Qf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,$f=`#if defined( USE_POINTS_UV )
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
#endif`,td=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ed=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,nd=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,id=`#ifdef USE_MORPHNORMALS
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
#endif`,sd=`#ifdef USE_MORPHTARGETS
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
#endif`,rd=`#ifdef USE_MORPHTARGETS
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
#endif`,ad=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,od=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,ud=`#ifdef USE_NORMALMAP
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
#endif`,fd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,md=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,xd=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ad=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Md=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_d=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wd=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Ed=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Td=`float getShadowMask() {
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
}`,Pd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rd=`#ifdef USE_SKINNING
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
#endif`,Cd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ld=`#ifdef USE_SKINNING
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
#endif`,Dd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Id=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Nd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Od=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ud=`#ifdef USE_TRANSMISSION
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
#endif`,Hd=`#ifdef USE_TRANSMISSION
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
#endif`,Bd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Vd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gd=`uniform sampler2D t2D;
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
}`,Wd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xd=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qd=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yd=`#include <common>
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
}`,Zd=`#if DEPTH_PACKING == 3200
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
}`,Jd=`#define DISTANCE
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
}`,Kd=`#define DISTANCE
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
}`,Qd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$d=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#define LAMBERT
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
}`,rp=`#define LAMBERT
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
}`,ap=`#define MATCAP
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
}`,op=`#define MATCAP
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
}`,cp=`#define NORMAL
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
}`,lp=`#define NORMAL
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
}`,hp=`#define PHONG
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
}`,up=`#define PHONG
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
}`,fp=`#define STANDARD
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
}`,dp=`#define STANDARD
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
}`,pp=`#define TOON
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
}`,mp=`#define TOON
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
}`,gp=`uniform float size;
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
}`,xp=`uniform vec3 diffuse;
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
}`,vp=`#include <common>
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
}`,yp=`uniform vec3 color;
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
}`,Ap=`uniform float rotation;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,It={alphahash_fragment:Vu,alphahash_pars_fragment:Gu,alphamap_fragment:Wu,alphamap_pars_fragment:Xu,alphatest_fragment:ju,alphatest_pars_fragment:qu,aomap_fragment:Yu,aomap_pars_fragment:Zu,batching_pars_vertex:Ju,batching_vertex:Ku,begin_vertex:Qu,beginnormal_vertex:$u,bsdfs:tf,iridescence_fragment:ef,bumpmap_pars_fragment:nf,clipping_planes_fragment:sf,clipping_planes_pars_fragment:rf,clipping_planes_pars_vertex:af,clipping_planes_vertex:of,color_fragment:cf,color_pars_fragment:lf,color_pars_vertex:hf,color_vertex:uf,common:ff,cube_uv_reflection_fragment:df,defaultnormal_vertex:pf,displacementmap_pars_vertex:mf,displacementmap_vertex:gf,emissivemap_fragment:xf,emissivemap_pars_fragment:vf,colorspace_fragment:yf,colorspace_pars_fragment:Af,envmap_fragment:Mf,envmap_common_pars_fragment:bf,envmap_pars_fragment:Sf,envmap_pars_vertex:_f,envmap_physical_pars_fragment:Uf,envmap_vertex:wf,fog_vertex:Ef,fog_pars_vertex:Tf,fog_fragment:Pf,fog_pars_fragment:Rf,gradientmap_pars_fragment:Cf,lightmap_fragment:Lf,lightmap_pars_fragment:Df,lights_lambert_fragment:If,lights_lambert_pars_fragment:Nf,lights_pars_begin:Of,lights_toon_fragment:Hf,lights_toon_pars_fragment:Bf,lights_phong_fragment:Ff,lights_phong_pars_fragment:zf,lights_physical_fragment:kf,lights_physical_pars_fragment:Vf,lights_fragment_begin:Gf,lights_fragment_maps:Wf,lights_fragment_end:Xf,logdepthbuf_fragment:jf,logdepthbuf_pars_fragment:qf,logdepthbuf_pars_vertex:Yf,logdepthbuf_vertex:Zf,map_fragment:Jf,map_pars_fragment:Kf,map_particle_fragment:Qf,map_particle_pars_fragment:$f,metalnessmap_fragment:td,metalnessmap_pars_fragment:ed,morphcolor_vertex:nd,morphnormal_vertex:id,morphtarget_pars_vertex:sd,morphtarget_vertex:rd,normal_fragment_begin:ad,normal_fragment_maps:od,normal_pars_fragment:cd,normal_pars_vertex:ld,normal_vertex:hd,normalmap_pars_fragment:ud,clearcoat_normal_fragment_begin:fd,clearcoat_normal_fragment_maps:dd,clearcoat_pars_fragment:pd,iridescence_pars_fragment:md,opaque_fragment:gd,packing:xd,premultiplied_alpha_fragment:vd,project_vertex:yd,dithering_fragment:Ad,dithering_pars_fragment:Md,roughnessmap_fragment:bd,roughnessmap_pars_fragment:Sd,shadowmap_pars_fragment:_d,shadowmap_pars_vertex:wd,shadowmap_vertex:Ed,shadowmask_pars_fragment:Td,skinbase_vertex:Pd,skinning_pars_vertex:Rd,skinning_vertex:Cd,skinnormal_vertex:Ld,specularmap_fragment:Dd,specularmap_pars_fragment:Id,tonemapping_fragment:Nd,tonemapping_pars_fragment:Od,transmission_fragment:Ud,transmission_pars_fragment:Hd,uv_pars_fragment:Bd,uv_pars_vertex:Fd,uv_vertex:zd,worldpos_vertex:kd,background_vert:Vd,background_frag:Gd,backgroundCube_vert:Wd,backgroundCube_frag:Xd,cube_vert:jd,cube_frag:qd,depth_vert:Yd,depth_frag:Zd,distanceRGBA_vert:Jd,distanceRGBA_frag:Kd,equirect_vert:Qd,equirect_frag:$d,linedashed_vert:tp,linedashed_frag:ep,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:sp,meshlambert_frag:rp,meshmatcap_vert:ap,meshmatcap_frag:op,meshnormal_vert:cp,meshnormal_frag:lp,meshphong_vert:hp,meshphong_frag:up,meshphysical_vert:fp,meshphysical_frag:dp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:xp,shadow_vert:vp,shadow_frag:yp,sprite_vert:Ap,sprite_frag:Mp},it={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},an={basic:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:It.meshbasic_vert,fragmentShader:It.meshbasic_frag},lambert:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new At(0)}}]),vertexShader:It.meshlambert_vert,fragmentShader:It.meshlambert_frag},phong:{uniforms:Ee([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30}}]),vertexShader:It.meshphong_vert,fragmentShader:It.meshphong_frag},standard:{uniforms:Ee([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag},toon:{uniforms:Ee([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new At(0)}}]),vertexShader:It.meshtoon_vert,fragmentShader:It.meshtoon_frag},matcap:{uniforms:Ee([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:It.meshmatcap_vert,fragmentShader:It.meshmatcap_frag},points:{uniforms:Ee([it.points,it.fog]),vertexShader:It.points_vert,fragmentShader:It.points_frag},dashed:{uniforms:Ee([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:It.linedashed_vert,fragmentShader:It.linedashed_frag},depth:{uniforms:Ee([it.common,it.displacementmap]),vertexShader:It.depth_vert,fragmentShader:It.depth_frag},normal:{uniforms:Ee([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:It.meshnormal_vert,fragmentShader:It.meshnormal_frag},sprite:{uniforms:Ee([it.sprite,it.fog]),vertexShader:It.sprite_vert,fragmentShader:It.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:It.background_vert,fragmentShader:It.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:It.backgroundCube_vert,fragmentShader:It.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:It.cube_vert,fragmentShader:It.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:It.equirect_vert,fragmentShader:It.equirect_frag},distanceRGBA:{uniforms:Ee([it.common,it.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:It.distanceRGBA_vert,fragmentShader:It.distanceRGBA_frag},shadow:{uniforms:Ee([it.lights,it.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:It.shadow_vert,fragmentShader:It.shadow_frag}};an.physical={uniforms:Ee([an.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:It.meshphysical_vert,fragmentShader:It.meshphysical_frag};var Ws={r:0,b:0,g:0};function bp(n,t,e,i,s,r,o){let a=new At(0),c=r===!0?0:1,l,h,f=null,d=0,m=null;function g(p,u){let y=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?e:t).get(x)),x===null?v(a,c):x&&x.isColor&&(v(x,1),y=!0);let A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||y)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Sr)?(h===void 0&&(h=new Gt(new fs(1,1,1),new _n({name:"BackgroundCubeMaterial",uniforms:zi(an.backgroundCube.uniforms),vertexShader:an.backgroundCube.vertexShader,fragmentShader:an.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=jt.getTransfer(x.colorSpace)!==Qt,(f!==x||d!==x.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,m=n.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Gt(new si(2,2),new _n({name:"BackgroundMaterial",uniforms:zi(an.background.uniforms),vertexShader:an.background.vertexShader,fragmentShader:an.background.fragmentShader,side:Bn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=jt.getTransfer(x.colorSpace)!==Qt,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==n.toneMapping)&&(l.material.needsUpdate=!0,f=x,d=x.version,m=n.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function v(p,u){p.getRGB(Ws,Il(n)),i.buffers.color.setClear(Ws.r,Ws.g,Ws.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,v(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,v(a,c)},render:g}}function Sp(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),o=i.isWebGL2||r!==null,a={},c=p(null),l=c,h=!1;function f(C,I,V,j,q){let W=!1;if(o){let Z=v(j,V,I);l!==Z&&(l=Z,m(l.object)),W=u(C,j,V,q),W&&y(C,j,V,q)}else{let Z=I.wireframe===!0;(l.geometry!==j.id||l.program!==V.id||l.wireframe!==Z)&&(l.geometry=j.id,l.program=V.id,l.wireframe=Z,W=!0)}q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(W||h)&&(h=!1,U(C,I,V,j),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function m(C){return i.isWebGL2?n.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function v(C,I,V){let j=V.wireframe===!0,q=a[C.id];q===void 0&&(q={},a[C.id]=q);let W=q[I.id];W===void 0&&(W={},q[I.id]=W);let Z=W[j];return Z===void 0&&(Z=p(d()),W[j]=Z),Z}function p(C){let I=[],V=[],j=[];for(let q=0;q<s;q++)I[q]=0,V[q]=0,j[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:V,attributeDivisors:j,object:C,attributes:{},index:null}}function u(C,I,V,j){let q=l.attributes,W=I.attributes,Z=0,K=V.getAttributes();for(let at in K)if(K[at].location>=0){let J=q[at],ot=W[at];if(ot===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(ot=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(ot=C.instanceColor)),J===void 0||J.attribute!==ot||ot&&J.data!==ot.data)return!0;Z++}return l.attributesNum!==Z||l.index!==j}function y(C,I,V,j){let q={},W=I.attributes,Z=0,K=V.getAttributes();for(let at in K)if(K[at].location>=0){let J=W[at];J===void 0&&(at==="instanceMatrix"&&C.instanceMatrix&&(J=C.instanceMatrix),at==="instanceColor"&&C.instanceColor&&(J=C.instanceColor));let ot={};ot.attribute=J,J&&J.data&&(ot.data=J.data),q[at]=ot,Z++}l.attributes=q,l.attributesNum=Z,l.index=j}function x(){let C=l.newAttributes;for(let I=0,V=C.length;I<V;I++)C[I]=0}function A(C){P(C,0)}function P(C,I){let V=l.newAttributes,j=l.enabledAttributes,q=l.attributeDivisors;V[C]=1,j[C]===0&&(n.enableVertexAttribArray(C),j[C]=1),q[C]!==I&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,I),q[C]=I)}function w(){let C=l.newAttributes,I=l.enabledAttributes;for(let V=0,j=I.length;V<j;V++)I[V]!==C[V]&&(n.disableVertexAttribArray(V),I[V]=0)}function T(C,I,V,j,q,W,Z){Z===!0?n.vertexAttribIPointer(C,I,V,q,W):n.vertexAttribPointer(C,I,V,j,q,W)}function U(C,I,V,j){if(i.isWebGL2===!1&&(C.isInstancedMesh||j.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let q=j.attributes,W=V.getAttributes(),Z=I.defaultAttributeValues;for(let K in W){let at=W[K];if(at.location>=0){let X=q[K];if(X===void 0&&(K==="instanceMatrix"&&C.instanceMatrix&&(X=C.instanceMatrix),K==="instanceColor"&&C.instanceColor&&(X=C.instanceColor)),X!==void 0){let J=X.normalized,ot=X.itemSize,ft=e.get(X);if(ft===void 0)continue;let pt=ft.buffer,wt=ft.type,Lt=ft.bytesPerElement,St=i.isWebGL2===!0&&(wt===n.INT||wt===n.UNSIGNED_INT||X.gpuType===Ml);if(X.isInterleavedBufferAttribute){let Vt=X.data,H=Vt.stride,Se=X.offset;if(Vt.isInstancedInterleavedBuffer){for(let vt=0;vt<at.locationSize;vt++)P(at.location+vt,Vt.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Vt.meshPerAttribute*Vt.count)}else for(let vt=0;vt<at.locationSize;vt++)A(at.location+vt);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let vt=0;vt<at.locationSize;vt++)T(at.location+vt,ot/at.locationSize,wt,J,H*Lt,(Se+ot/at.locationSize*vt)*Lt,St)}else{if(X.isInstancedBufferAttribute){for(let Vt=0;Vt<at.locationSize;Vt++)P(at.location+Vt,X.meshPerAttribute);C.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=X.meshPerAttribute*X.count)}else for(let Vt=0;Vt<at.locationSize;Vt++)A(at.location+Vt);n.bindBuffer(n.ARRAY_BUFFER,pt);for(let Vt=0;Vt<at.locationSize;Vt++)T(at.location+Vt,ot/at.locationSize,wt,J,ot*Lt,ot/at.locationSize*Vt*Lt,St)}}else if(Z!==void 0){let J=Z[K];if(J!==void 0)switch(J.length){case 2:n.vertexAttrib2fv(at.location,J);break;case 3:n.vertexAttrib3fv(at.location,J);break;case 4:n.vertexAttrib4fv(at.location,J);break;default:n.vertexAttrib1fv(at.location,J)}}}}w()}function M(){N();for(let C in a){let I=a[C];for(let V in I){let j=I[V];for(let q in j)g(j[q].object),delete j[q];delete I[V]}delete a[C]}}function S(C){if(a[C.id]===void 0)return;let I=a[C.id];for(let V in I){let j=I[V];for(let q in j)g(j[q].object),delete j[q];delete I[V]}delete a[C.id]}function R(C){for(let I in a){let V=a[I];if(V[C.id]===void 0)continue;let j=V[C.id];for(let q in j)g(j[q].object),delete j[q];delete V[C.id]}}function N(){Y(),h=!0,l!==c&&(l=c,m(l.object))}function Y(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:N,resetDefaultState:Y,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:R,initAttributes:x,enableAttribute:A,disableUnusedAttributes:w}}function _p(n,t,e,i){let s=i.isWebGL2,r;function o(h){r=h}function a(h,f){n.drawArrays(r,h,f),e.update(f,r,1)}function c(h,f,d){if(d===0)return;let m,g;if(s)m=n,g="drawArraysInstanced";else if(m=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[g](r,h,f,d),e.update(f,r,d)}function l(h,f,d){if(d===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d;g++)this.render(h[g],f[g]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=f[v];e.update(g,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function wp(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let T=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(T){if(T==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",a=e.precision!==void 0?e.precision:"highp",c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);let l=o||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),v=n.getParameter(n.MAX_VERTEX_ATTRIBS),p=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),u=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,A=o||t.has("OES_texture_float"),P=x&&A,w=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:s,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:A,floatVertexTextures:P,maxSamples:w}}function Ep(n){let t=this,e=null,i=0,s=!1,r=!1,o=new vn,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let m=f.length!==0||d||i!==0||s;return s=d,i=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){e=h(f,d,0)},this.setState=function(f,d,m){let g=f.clippingPlanes,v=f.clipIntersection,p=f.clipShadows,u=n.get(f);if(!s||g===null||g.length===0||r&&!p)r?h(null):l();else{let y=r?0:i,x=y*4,A=u.clippingState||null;c.value=A,A=h(g,d,x,m);for(let P=0;P!==x;++P)A[P]=e[P];u.clippingState=A,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(f,d,m,g){let v=f!==null?f.length:0,p=null;if(v!==0){if(p=c.value,g!==!0||p===null){let u=m+v*4,y=d.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,A=m;x!==v;++x,A+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(p,A),p[A+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,p}}function Tp(n){let t=new WeakMap;function e(o,a){return a===wa?o.mapping=Hi:a===Ea&&(o.mapping=Bi),o}function i(o){if(o&&o.isTexture){let a=o.mapping;if(a===wa||a===Ea)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new Oa(c.height/2);return l.fromEquirectangularTexture(n,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ur=class extends lr{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,o=i+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Di=4,jc=[.125,.215,.35,.446,.526,.582],Qn=20,xa=new ur,qc=new At,va=null,ya=0,Aa=0,Jn=(1+Math.sqrt(5))/2,Ri=1/Jn,Yc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,Jn,Ri),new D(0,Jn,-Ri),new D(Ri,0,Jn),new D(-Ri,0,Jn),new D(Jn,Ri,0),new D(-Jn,Ri,0)],fr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Kc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(va,ya,Aa),t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Hi||t.mapping===Bi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),va=this._renderer.getRenderTarget(),ya=this._renderer.getActiveCubeFace(),Aa=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:We,minFilter:We,generateMipmaps:!1,type:us,format:tn,colorSpace:An,depthBuffer:!1},s=Zc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zc(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Pp(r)),this._blurMaterial=Rp(r,t,e)}return s}_compileMaterial(t){let e=new Gt(this._lodPlanes[0],t);this._renderer.compile(e,xa)}_sceneToCubeUV(t,e,i,s){let a=new Pe(90,1,e,i),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(qc),h.toneMapping=Un,h.autoClear=!1;let m=new Sn({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Gt(new fs,m),v=!1,p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,v=!0):(m.color.copy(qc),v=!0);for(let u=0;u<6;u++){let y=u%3;y===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):y===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));let x=this._cubeSize;Xs(s,y*x,u>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=f,t.background=p}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Hi||t.mapping===Bi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Kc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Gt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;Xs(e,0,0,3*c,2*c),i.setRenderTarget(e),i.render(o,xa)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=Yc[(s-1)%Yc.length];this._blur(t,s-1,s,r,o)}e.autoClear=i}_blur(t,e,i,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,f=new Gt(this._lodPlanes[s],l),d=l.uniforms,m=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Qn-1),v=r/g,p=isFinite(r)?1+Math.floor(h*v):Qn;p>Qn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Qn}`);let u=[],y=0;for(let T=0;T<Qn;++T){let U=T/v,M=Math.exp(-U*U/2);u.push(M),T===0?y+=M:T<p&&(y+=2*M)}for(let T=0;T<u.length;T++)u[T]=u[T]/y;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:x}=this;d.dTheta.value=g,d.mipInt.value=x-i;let A=this._sizeLods[s],P=3*A*(s>x-Di?s-x+Di:0),w=4*(this._cubeSize-A);Xs(e,P,w,3*A,2*A),c.setRenderTarget(e),c.render(f,xa)}};function Pp(n){let t=[],e=[],i=[],s=n,r=n-Di+1+jc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>n-Di?c=jc[o-n+Di-1]:o===0&&(c=0),i.push(c);let l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,v=3,p=2,u=1,y=new Float32Array(v*g*m),x=new Float32Array(p*g*m),A=new Float32Array(u*g*m);for(let w=0;w<m;w++){let T=w%3*2/3-1,U=w>2?0:-1,M=[T,U,0,T+2/3,U,0,T+2/3,U+1,0,T,U,0,T+2/3,U+1,0,T,U+1,0];y.set(M,v*g*w),x.set(d,p*g*w);let S=[w,w,w,w,w,w];A.set(S,u*g*w)}let P=new Ie;P.setAttribute("position",new Be(y,v)),P.setAttribute("uv",new Be(x,p)),P.setAttribute("faceIndex",new Be(A,u)),t.push(P),s>Di&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Zc(n,t,e){let i=new Mn(n,t,e);return i.texture.mapping=Sr,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Xs(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Rp(n,t,e){let i=new Float32Array(Qn),s=new D(0,1,0);return new _n({name:"SphericalGaussianBlur",defines:{n:Qn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ho(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Jc(){return new _n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ho(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Kc(){return new _n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ho(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function ho(){return`

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
	`}function Cp(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){let c=a.mapping,l=c===wa||c===Ea,h=c===Hi||c===Bi;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new fr(n)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{let f=a.image;if(l&&f&&f.height>0||h&&f&&s(f)){e===null&&(e=new fr(n));let d=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function Lp(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Dp(n,t,e,i){let s={},r=new WeakMap;function o(f){let d=f.target;d.index!==null&&t.remove(d.index);for(let g in d.attributes)t.remove(d.attributes[g]);for(let g in d.morphAttributes){let v=d.morphAttributes[g];for(let p=0,u=v.length;p<u;p++)t.remove(v[p])}d.removeEventListener("dispose",o),delete s[d.id];let m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(f,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function c(f){let d=f.attributes;for(let g in d)t.update(d[g],n.ARRAY_BUFFER);let m=f.morphAttributes;for(let g in m){let v=m[g];for(let p=0,u=v.length;p<u;p++)t.update(v[p],n.ARRAY_BUFFER)}}function l(f){let d=[],m=f.index,g=f.attributes.position,v=0;if(m!==null){let y=m.array;v=m.version;for(let x=0,A=y.length;x<A;x+=3){let P=y[x+0],w=y[x+1],T=y[x+2];d.push(P,w,w,T,T,P)}}else if(g!==void 0){let y=g.array;v=g.version;for(let x=0,A=y.length/3-1;x<A;x+=3){let P=x+0,w=x+1,T=x+2;d.push(P,w,w,T,T,P)}}else return;let p=new(Ll(d)?cr:or)(d,1);p.version=v;let u=r.get(f);u&&t.remove(u),r.set(f,p)}function h(f){let d=r.get(f);if(d){let m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Ip(n,t,e,i){let s=i.isWebGL2,r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,g){n.drawElements(r,g,a,m*c),e.update(g,r,1)}function f(m,g,v){if(v===0)return;let p,u;if(s)p=n,u="drawElementsInstanced";else if(p=t.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,g,a,m*c,v),e.update(g,r,v)}function d(m,g,v){if(v===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<v;u++)this.render(m[u]/c,g[u]);else{p.multiDrawElementsWEBGL(r,g,0,a,m,0,v);let u=0;for(let y=0;y<v;y++)u+=g[y];e.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function Np(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function Op(n,t){return n[0]-t[0]}function Up(n,t){return Math.abs(t[1])-Math.abs(n[1])}function Hp(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,o=new pe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f){let d=l.morphTargetInfluences;if(t.isWebGL2===!0){let m=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=m!==void 0?m.length:0,v=r.get(h);if(v===void 0||v.count!==g){let C=function(){N.dispose(),r.delete(h),h.removeEventListener("dispose",C)};v!==void 0&&v.texture.dispose();let y=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,A=h.morphAttributes.color!==void 0,P=h.morphAttributes.position||[],w=h.morphAttributes.normal||[],T=h.morphAttributes.color||[],U=0;y===!0&&(U=1),x===!0&&(U=2),A===!0&&(U=3);let M=h.attributes.position.count*U,S=1;M>t.maxTextureSize&&(S=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let R=new Float32Array(M*S*4*g),N=new sr(R,M,S,g);N.type=Nn,N.needsUpdate=!0;let Y=U*4;for(let I=0;I<g;I++){let V=P[I],j=w[I],q=T[I],W=M*S*4*I;for(let Z=0;Z<V.count;Z++){let K=Z*Y;y===!0&&(o.fromBufferAttribute(V,Z),R[W+K+0]=o.x,R[W+K+1]=o.y,R[W+K+2]=o.z,R[W+K+3]=0),x===!0&&(o.fromBufferAttribute(j,Z),R[W+K+4]=o.x,R[W+K+5]=o.y,R[W+K+6]=o.z,R[W+K+7]=0),A===!0&&(o.fromBufferAttribute(q,Z),R[W+K+8]=o.x,R[W+K+9]=o.y,R[W+K+10]=o.z,R[W+K+11]=q.itemSize===4?o.w:1)}}v={count:g,texture:N,size:new kt(M,S)},r.set(h,v),h.addEventListener("dispose",C)}let p=0;for(let y=0;y<d.length;y++)p+=d[y];let u=h.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",u),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",v.texture,e),f.getUniforms().setValue(n,"morphTargetsTextureSize",v.size)}else{let m=d===void 0?0:d.length,g=i[h.id];if(g===void 0||g.length!==m){g=[];for(let x=0;x<m;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<m;x++){let A=g[x];A[0]=x,A[1]=d[x]}g.sort(Up);for(let x=0;x<8;x++)x<m&&g[x][1]?(a[x][0]=g[x][0],a[x][1]=g[x][1]):(a[x][0]=Number.MAX_SAFE_INTEGER,a[x][1]=0);a.sort(Op);let v=h.morphAttributes.position,p=h.morphAttributes.normal,u=0;for(let x=0;x<8;x++){let A=a[x],P=A[0],w=A[1];P!==Number.MAX_SAFE_INTEGER&&w?(v&&h.getAttribute("morphTarget"+x)!==v[P]&&h.setAttribute("morphTarget"+x,v[P]),p&&h.getAttribute("morphNormal"+x)!==p[P]&&h.setAttribute("morphNormal"+x,p[P]),s[x]=w,u+=w):(v&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),p&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let y=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(n,"morphTargetBaseInfluence",y),f.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:c}}function Bp(n,t,e,i){let s=new WeakMap;function r(c){let l=i.render.frame,h=c.geometry,f=t.get(c,h);if(s.get(f)!==l&&(t.update(f),s.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let d=c.skeleton;s.get(d)!==l&&(d.update(),s.set(d,l))}return f}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var dr=class extends qe{constructor(t,e,i,s,r,o,a,c,l,h){if(h=h!==void 0?h:ti,h!==ti&&h!==Fi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ti&&(i=In),i===void 0&&h===Fi&&(i=$n),super(null,s,r,o,a,c,h,i,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:me,this.minFilter=c!==void 0?c:me,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ol=new qe,Ul=new dr(1,1);Ul.compareFunction=Cl;var Hl=new sr,Bl=new Da,Fl=new hr,Qc=[],$c=[],tl=new Float32Array(16),el=new Float32Array(9),nl=new Float32Array(4);function Xi(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Qc[s];if(r===void 0&&(r=new Float32Array(s),Qc[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function le(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function he(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wr(n,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Fp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2fv(this.addr,t),he(e,t)}}function kp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;n.uniform3fv(this.addr,t),he(e,t)}}function Vp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4fv(this.addr,t),he(e,t)}}function Gp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),he(e,t)}else{if(le(e,i))return;nl.set(i),n.uniformMatrix2fv(this.addr,!1,nl),he(e,i)}}function Wp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),he(e,t)}else{if(le(e,i))return;el.set(i),n.uniformMatrix3fv(this.addr,!1,el),he(e,i)}}function Xp(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),he(e,t)}else{if(le(e,i))return;tl.set(i),n.uniformMatrix4fv(this.addr,!1,tl),he(e,i)}}function jp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function qp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2iv(this.addr,t),he(e,t)}}function Yp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3iv(this.addr,t),he(e,t)}}function Zp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4iv(this.addr,t),he(e,t)}}function Jp(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Kp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2uiv(this.addr,t),he(e,t)}}function Qp(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3uiv(this.addr,t),he(e,t)}}function $p(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4uiv(this.addr,t),he(e,t)}}function tm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Ul:Ol;e.setTexture2D(t||r,s)}function em(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Bl,s)}function nm(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Fl,s)}function im(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Hl,s)}function sm(n){switch(n){case 5126:return Fp;case 35664:return zp;case 35665:return kp;case 35666:return Vp;case 35674:return Gp;case 35675:return Wp;case 35676:return Xp;case 5124:case 35670:return jp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Zp;case 5125:return Jp;case 36294:return Kp;case 36295:return Qp;case 36296:return $p;case 35678:case 36198:case 36298:case 36306:case 35682:return tm;case 35679:case 36299:case 36307:return em;case 35680:case 36300:case 36308:case 36293:return nm;case 36289:case 36303:case 36311:case 36292:return im}}function rm(n,t){n.uniform1fv(this.addr,t)}function am(n,t){let e=Xi(t,this.size,2);n.uniform2fv(this.addr,e)}function om(n,t){let e=Xi(t,this.size,3);n.uniform3fv(this.addr,e)}function cm(n,t){let e=Xi(t,this.size,4);n.uniform4fv(this.addr,e)}function lm(n,t){let e=Xi(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function hm(n,t){let e=Xi(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function um(n,t){let e=Xi(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function fm(n,t){n.uniform1iv(this.addr,t)}function dm(n,t){n.uniform2iv(this.addr,t)}function pm(n,t){n.uniform3iv(this.addr,t)}function mm(n,t){n.uniform4iv(this.addr,t)}function gm(n,t){n.uniform1uiv(this.addr,t)}function xm(n,t){n.uniform2uiv(this.addr,t)}function vm(n,t){n.uniform3uiv(this.addr,t)}function ym(n,t){n.uniform4uiv(this.addr,t)}function Am(n,t,e){let i=this.cache,s=t.length,r=wr(e,s);le(i,r)||(n.uniform1iv(this.addr,r),he(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Ol,r[o])}function Mm(n,t,e){let i=this.cache,s=t.length,r=wr(e,s);le(i,r)||(n.uniform1iv(this.addr,r),he(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Bl,r[o])}function bm(n,t,e){let i=this.cache,s=t.length,r=wr(e,s);le(i,r)||(n.uniform1iv(this.addr,r),he(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||Fl,r[o])}function Sm(n,t,e){let i=this.cache,s=t.length,r=wr(e,s);le(i,r)||(n.uniform1iv(this.addr,r),he(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||Hl,r[o])}function _m(n){switch(n){case 5126:return rm;case 35664:return am;case 35665:return om;case 35666:return cm;case 35674:return lm;case 35675:return hm;case 35676:return um;case 5124:case 35670:return fm;case 35667:case 35671:return dm;case 35668:case 35672:return pm;case 35669:case 35673:return mm;case 5125:return gm;case 36294:return xm;case 36295:return vm;case 36296:return ym;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Mm;case 35680:case 36300:case 36308:case 36293:return bm;case 36289:case 36303:case 36311:case 36292:return Sm}}var Ua=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=sm(e.type)}},Ha=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=_m(e.type)}},Ba=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],i)}}},Ma=/(\w+)(\])?(\[|\.)?/g;function il(n,t){n.seq.push(t),n.map[t.id]=t}function wm(n,t,e){let i=n.name,s=i.length;for(Ma.lastIndex=0;;){let r=Ma.exec(i),o=Ma.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){il(e,l===void 0?new Ua(a,n,t):new Ha(a,n,t));break}else{let f=e.map[a];f===void 0&&(f=new Ba(a),il(e,f)),e=f}}}var Ui=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);wm(r,o,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=i[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&i.push(o)}return i}};function sl(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var Em=37297,Tm=0;function Pm(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}function Rm(n){let t=jt.getPrimaries(jt.workingColorSpace),e=jt.getPrimaries(n),i;switch(t===e?i="":t===$s&&e===Qs?i="LinearDisplayP3ToLinearSRGB":t===Qs&&e===$s&&(i="LinearSRGBToLinearDisplayP3"),n){case An:case _r:return[i,"LinearTransferOETF"];case Kt:case lo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function rl(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Pm(n.getShaderSource(t),o)}else return s}function Cm(n,t){let e=Rm(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Lm(n,t){let e;switch(t){case Yh:e="Linear";break;case Zh:e="Reinhard";break;case Jh:e="OptimizedCineon";break;case Kh:e="ACESFilmic";break;case $h:e="AgX";break;case Qh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Dm(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ii).join(`
`)}function Im(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(Ii).join(`
`)}function Nm(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Om(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),o=r.name,a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Ii(n){return n!==""}function al(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ol(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Um=/^[ \t]*#include +<([\w\d./]+)>/gm;function Fa(n){return n.replace(Um,Bm)}var Hm=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Bm(n,t){let e=It[t];if(e===void 0){let i=Hm.get(t);if(i!==void 0)e=It[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Fa(e)}var Fm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cl(n){return n.replace(Fm,zm)}function zm(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ll(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function km(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===oo?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Vm(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Hi:case Bi:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Gm(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Bi:t="ENVMAP_MODE_REFRACTION";break}return t}function Wm(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case yl:t="ENVMAP_BLENDING_MULTIPLY";break;case jh:t="ENVMAP_BLENDING_MIX";break;case qh:t="ENVMAP_BLENDING_ADD";break}return t}function Xm(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function jm(n,t,e,i){let s=n.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=km(e),l=Vm(e),h=Gm(e),f=Wm(e),d=Xm(e),m=e.isWebGL2?"":Dm(e),g=Im(e),v=Nm(r),p=s.createProgram(),u,y,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ii).join(`
`),u.length>0&&(u+=`
`),y=[m,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Ii).join(`
`),y.length>0&&(y+=`
`)):(u=[ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ii).join(`
`),y=[m,ll(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?It.tonemapping_pars_fragment:"",e.toneMapping!==Un?Lm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",It.colorspace_pars_fragment,Cm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ii).join(`
`)),o=Fa(o),o=al(o,e),o=ol(o,e),a=Fa(a),a=al(a,e),a=ol(a,e),o=cl(o),a=cl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,y=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);let A=x+u+o,P=x+y+a,w=sl(s,s.VERTEX_SHADER,A),T=sl(s,s.FRAGMENT_SHADER,P);s.attachShader(p,w),s.attachShader(p,T),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function U(N){if(n.debug.checkShaderErrors){let Y=s.getProgramInfoLog(p).trim(),C=s.getShaderInfoLog(w).trim(),I=s.getShaderInfoLog(T).trim(),V=!0,j=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,p,w,T);else{let q=rl(s,w,"vertex"),W=rl(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Program Info Log: `+Y+`
`+q+`
`+W)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(C===""||I==="")&&(j=!1);j&&(N.diagnostics={runnable:V,programLog:Y,vertexShader:{log:C,prefix:u},fragmentShader:{log:I,prefix:y}})}s.deleteShader(w),s.deleteShader(T),M=new Ui(s,p),S=Om(s,p)}let M;this.getUniforms=function(){return M===void 0&&U(this),M};let S;this.getAttributes=function(){return S===void 0&&U(this),S};let R=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=s.getProgramParameter(p,Em)),R},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Tm++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=w,this.fragmentShader=T,this}var qm=0,za=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new ka(t),e.set(t,i)),i}},ka=class{constructor(t){this.id=qm++,this.code=t,this.usedTimes=0}};function Ym(n,t,e,i,s,r,o){let a=new ar,c=new za,l=[],h=s.isWebGL2,f=s.logarithmicDepthBuffer,d=s.vertexTextures,m=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(M){return M===0?"uv":`uv${M}`}function p(M,S,R,N,Y){let C=N.fog,I=Y.geometry,V=M.isMeshStandardMaterial?N.environment:null,j=(M.isMeshStandardMaterial?e:t).get(M.envMap||V),q=j&&j.mapping===Sr?j.image.height:null,W=g[M.type];M.precision!==null&&(m=s.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));let Z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,K=Z!==void 0?Z.length:0,at=0;I.morphAttributes.position!==void 0&&(at=1),I.morphAttributes.normal!==void 0&&(at=2),I.morphAttributes.color!==void 0&&(at=3);let X,J,ot,ft;if(W){let _e=an[W];X=_e.vertexShader,J=_e.fragmentShader}else X=M.vertexShader,J=M.fragmentShader,c.update(M),ot=c.getVertexShaderID(M),ft=c.getFragmentShaderID(M);let pt=n.getRenderTarget(),wt=Y.isInstancedMesh===!0,Lt=Y.isBatchedMesh===!0,St=!!M.map,Vt=!!M.matcap,H=!!j,Se=!!M.aoMap,vt=!!M.lightMap,Pt=!!M.bumpMap,dt=!!M.normalMap,ne=!!M.displacementMap,Nt=!!M.emissiveMap,E=!!M.metalnessMap,b=!!M.roughnessMap,F=M.anisotropy>0,tt=M.clearcoat>0,$=M.iridescence>0,et=M.sheen>0,mt=M.transmission>0,ct=F&&!!M.anisotropyMap,ht=tt&&!!M.clearcoatMap,bt=tt&&!!M.clearcoatNormalMap,Ot=tt&&!!M.clearcoatRoughnessMap,Q=$&&!!M.iridescenceMap,Xt=$&&!!M.iridescenceThicknessMap,zt=et&&!!M.sheenColorMap,Tt=et&&!!M.sheenRoughnessMap,xt=!!M.specularMap,ut=!!M.specularColorMap,Dt=!!M.specularIntensityMap,Wt=mt&&!!M.transmissionMap,se=mt&&!!M.thicknessMap,Ht=!!M.gradientMap,nt=!!M.alphaMap,L=M.alphaTest>0,st=!!M.alphaHash,rt=!!M.extensions,_t=!!I.attributes.uv1,yt=!!I.attributes.uv2,Yt=!!I.attributes.uv3,Zt=Un;return M.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(Zt=n.toneMapping),{isWebGL2:h,shaderID:W,shaderType:M.type,shaderName:M.name,vertexShader:X,fragmentShader:J,defines:M.defines,customVertexShaderID:ot,customFragmentShaderID:ft,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:Lt,instancing:wt,instancingColor:wt&&Y.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:An,map:St,matcap:Vt,envMap:H,envMapMode:H&&j.mapping,envMapCubeUVHeight:q,aoMap:Se,lightMap:vt,bumpMap:Pt,normalMap:dt,displacementMap:d&&ne,emissiveMap:Nt,normalMapObjectSpace:dt&&M.normalMapType===uu,normalMapTangentSpace:dt&&M.normalMapType===Rl,metalnessMap:E,roughnessMap:b,anisotropy:F,anisotropyMap:ct,clearcoat:tt,clearcoatMap:ht,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ot,iridescence:$,iridescenceMap:Q,iridescenceThicknessMap:Xt,sheen:et,sheenColorMap:zt,sheenRoughnessMap:Tt,specularMap:xt,specularColorMap:ut,specularIntensityMap:Dt,transmission:mt,transmissionMap:Wt,thicknessMap:se,gradientMap:Ht,opaque:M.transparent===!1&&M.blending===Ni,alphaMap:nt,alphaTest:L,alphaHash:st,combine:M.combine,mapUv:St&&v(M.map.channel),aoMapUv:Se&&v(M.aoMap.channel),lightMapUv:vt&&v(M.lightMap.channel),bumpMapUv:Pt&&v(M.bumpMap.channel),normalMapUv:dt&&v(M.normalMap.channel),displacementMapUv:ne&&v(M.displacementMap.channel),emissiveMapUv:Nt&&v(M.emissiveMap.channel),metalnessMapUv:E&&v(M.metalnessMap.channel),roughnessMapUv:b&&v(M.roughnessMap.channel),anisotropyMapUv:ct&&v(M.anisotropyMap.channel),clearcoatMapUv:ht&&v(M.clearcoatMap.channel),clearcoatNormalMapUv:bt&&v(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ot&&v(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Q&&v(M.iridescenceMap.channel),iridescenceThicknessMapUv:Xt&&v(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&v(M.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&v(M.sheenRoughnessMap.channel),specularMapUv:xt&&v(M.specularMap.channel),specularColorMapUv:ut&&v(M.specularColorMap.channel),specularIntensityMapUv:Dt&&v(M.specularIntensityMap.channel),transmissionMapUv:Wt&&v(M.transmissionMap.channel),thicknessMapUv:se&&v(M.thicknessMap.channel),alphaMapUv:nt&&v(M.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(dt||F),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,vertexUv1s:_t,vertexUv2s:yt,vertexUv3s:Yt,pointsUvs:Y.isPoints===!0&&!!I.attributes.uv&&(St||nt),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Y.isSkinnedMesh===!0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:at,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:Zt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:St&&M.map.isVideoTexture===!0&&jt.getTransfer(M.map.colorSpace)===Qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Me,flipSided:M.side===De,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:rt&&M.extensions.derivatives===!0,extensionFragDepth:rt&&M.extensions.fragDepth===!0,extensionDrawBuffers:rt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:rt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:rt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){let S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(let R in M.defines)S.push(R),S.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(y(S,M),x(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function y(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function x(M,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function A(M){let S=g[M.type],R;if(S){let N=an[S];R=Uu.clone(N.uniforms)}else R=M.uniforms;return R}function P(M,S){let R;for(let N=0,Y=l.length;N<Y;N++){let C=l[N];if(C.cacheKey===S){R=C,++R.usedTimes;break}}return R===void 0&&(R=new jm(n,S,M,r),l.push(R)),R}function w(M){if(--M.usedTimes===0){let S=l.indexOf(M);l[S]=l[l.length-1],l.pop(),M.destroy()}}function T(M){c.remove(M)}function U(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:A,acquireProgram:P,releaseProgram:w,releaseShaderCache:T,programs:l,dispose:U}}function Zm(){let n=new WeakMap;function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function e(r){n.delete(r)}function i(r,o,a){n.get(r)[o]=a}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function Jm(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function hl(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function ul(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(f,d,m,g,v,p){let u=n[t];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:g,renderOrder:f.renderOrder,z:v,group:p},n[t]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=g,u.renderOrder=f.renderOrder,u.z=v,u.group=p),t++,u}function a(f,d,m,g,v,p){let u=o(f,d,m,g,v,p);m.transmission>0?i.push(u):m.transparent===!0?s.push(u):e.push(u)}function c(f,d,m,g,v,p){let u=o(f,d,m,g,v,p);m.transmission>0?i.unshift(u):m.transparent===!0?s.unshift(u):e.unshift(u)}function l(f,d){e.length>1&&e.sort(f||Jm),i.length>1&&i.sort(d||hl),s.length>1&&s.sort(d||hl)}function h(){for(let f=t,d=n.length;f<d;f++){let m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Km(){let n=new WeakMap;function t(i,s){let r=n.get(i),o;return r===void 0?(o=new ul,n.set(i,[o])):s>=r.length?(o=new ul,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function Qm(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new At};break;case"SpotLight":e={position:new D,direction:new D,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new At,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new At,groundColor:new At};break;case"RectAreaLight":e={color:new At,position:new D,halfWidth:new D,halfHeight:new D};break}return n[t.id]=e,e}}}function $m(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var tg=0;function eg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ng(n,t){let e=new Qm,i=$m(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new D);let r=new D,o=new $t,a=new $t;function c(h,f){let d=0,m=0,g=0;for(let N=0;N<9;N++)s.probe[N].set(0,0,0);let v=0,p=0,u=0,y=0,x=0,A=0,P=0,w=0,T=0,U=0,M=0;h.sort(eg);let S=f===!0?Math.PI:1;for(let N=0,Y=h.length;N<Y;N++){let C=h[N],I=C.color,V=C.intensity,j=C.distance,q=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)d+=I.r*V*S,m+=I.g*V*S,g+=I.b*V*S;else if(C.isLightProbe){for(let W=0;W<9;W++)s.probe[W].addScaledVector(C.sh.coefficients[W],V);M++}else if(C.isDirectionalLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*S),C.castShadow){let Z=C.shadow,K=i.get(C);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.directionalShadow[v]=K,s.directionalShadowMap[v]=q,s.directionalShadowMatrix[v]=C.shadow.matrix,A++}s.directional[v]=W,v++}else if(C.isSpotLight){let W=e.get(C);W.position.setFromMatrixPosition(C.matrixWorld),W.color.copy(I).multiplyScalar(V*S),W.distance=j,W.coneCos=Math.cos(C.angle),W.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),W.decay=C.decay,s.spot[u]=W;let Z=C.shadow;if(C.map&&(s.spotLightMap[T]=C.map,T++,Z.updateMatrices(C),C.castShadow&&U++),s.spotLightMatrix[u]=Z.matrix,C.castShadow){let K=i.get(C);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,s.spotShadow[u]=K,s.spotShadowMap[u]=q,w++}u++}else if(C.isRectAreaLight){let W=e.get(C);W.color.copy(I).multiplyScalar(V),W.halfWidth.set(C.width*.5,0,0),W.halfHeight.set(0,C.height*.5,0),s.rectArea[y]=W,y++}else if(C.isPointLight){let W=e.get(C);if(W.color.copy(C.color).multiplyScalar(C.intensity*S),W.distance=C.distance,W.decay=C.decay,C.castShadow){let Z=C.shadow,K=i.get(C);K.shadowBias=Z.bias,K.shadowNormalBias=Z.normalBias,K.shadowRadius=Z.radius,K.shadowMapSize=Z.mapSize,K.shadowCameraNear=Z.camera.near,K.shadowCameraFar=Z.camera.far,s.pointShadow[p]=K,s.pointShadowMap[p]=q,s.pointShadowMatrix[p]=C.shadow.matrix,P++}s.point[p]=W,p++}else if(C.isHemisphereLight){let W=e.get(C);W.skyColor.copy(C.color).multiplyScalar(V*S),W.groundColor.copy(C.groundColor).multiplyScalar(V*S),s.hemi[x]=W,x++}}y>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=it.LTC_FLOAT_1,s.rectAreaLTC2=it.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=it.LTC_HALF_1,s.rectAreaLTC2=it.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=d,s.ambient[1]=m,s.ambient[2]=g;let R=s.hash;(R.directionalLength!==v||R.pointLength!==p||R.spotLength!==u||R.rectAreaLength!==y||R.hemiLength!==x||R.numDirectionalShadows!==A||R.numPointShadows!==P||R.numSpotShadows!==w||R.numSpotMaps!==T||R.numLightProbes!==M)&&(s.directional.length=v,s.spot.length=u,s.rectArea.length=y,s.point.length=p,s.hemi.length=x,s.directionalShadow.length=A,s.directionalShadowMap.length=A,s.pointShadow.length=P,s.pointShadowMap.length=P,s.spotShadow.length=w,s.spotShadowMap.length=w,s.directionalShadowMatrix.length=A,s.pointShadowMatrix.length=P,s.spotLightMatrix.length=w+T-U,s.spotLightMap.length=T,s.numSpotLightShadowsWithMaps=U,s.numLightProbes=M,R.directionalLength=v,R.pointLength=p,R.spotLength=u,R.rectAreaLength=y,R.hemiLength=x,R.numDirectionalShadows=A,R.numPointShadows=P,R.numSpotShadows=w,R.numSpotMaps=T,R.numLightProbes=M,s.version=tg++)}function l(h,f){let d=0,m=0,g=0,v=0,p=0,u=f.matrixWorldInverse;for(let y=0,x=h.length;y<x;y++){let A=h[y];if(A.isDirectionalLight){let P=s.directional[d];P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),d++}else if(A.isSpotLight){let P=s.spot[g];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(A.matrixWorld),r.setFromMatrixPosition(A.target.matrixWorld),P.direction.sub(r),P.direction.transformDirection(u),g++}else if(A.isRectAreaLight){let P=s.rectArea[v];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(u),a.identity(),o.copy(A.matrixWorld),o.premultiply(u),a.extractRotation(o),P.halfWidth.set(A.width*.5,0,0),P.halfHeight.set(0,A.height*.5,0),P.halfWidth.applyMatrix4(a),P.halfHeight.applyMatrix4(a),v++}else if(A.isPointLight){let P=s.point[m];P.position.setFromMatrixPosition(A.matrixWorld),P.position.applyMatrix4(u),m++}else if(A.isHemisphereLight){let P=s.hemi[p];P.direction.setFromMatrixPosition(A.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:s}}function fl(n,t){let e=new ng(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function o(f){i.push(f)}function a(f){s.push(f)}function c(f){e.setup(i,f)}function l(f){e.setupView(i,f)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function ig(n,t){let e=new WeakMap;function i(r,o=0){let a=e.get(r),c;return a===void 0?(c=new fl(n,t),e.set(r,[c])):o>=a.length?(c=new fl(n,t),a.push(c)):c=a[o],c}function s(){e=new WeakMap}return{get:i,dispose:s}}var Va=class extends ii{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Ga=class extends ii{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},sg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,rg=`uniform sampler2D shadow_pass;
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
}`;function ag(n,t,e){let i=new ds,s=new kt,r=new kt,o=new pe,a=new Va({depthPacking:hu}),c=new Ga,l={},h=e.maxTextureSize,f={[Bn]:De,[De]:Bn,[Me]:Me},d=new _n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:sg,fragmentShader:rg}),m=d.clone();m.defines.HORIZONTAL_PASS=1;let g=new Ie;g.setAttribute("position",new Be(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Gt(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=vl;let u=this.type;this.render=function(w,T,U){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;let M=n.getRenderTarget(),S=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),N=n.state;N.setBlending(On),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let Y=u!==xn&&this.type===xn,C=u===xn&&this.type!==xn;for(let I=0,V=w.length;I<V;I++){let j=w[I],q=j.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",j,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let W=q.getFrameExtents();if(s.multiply(W),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/W.x),s.x=r.x*W.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/W.y),s.y=r.y*W.y,q.mapSize.y=r.y)),q.map===null||Y===!0||C===!0){let K=this.type!==xn?{minFilter:me,magFilter:me}:{};q.map!==null&&q.map.dispose(),q.map=new Mn(s.x,s.y,K),q.map.texture.name=j.name+".shadowMap",q.camera.updateProjectionMatrix()}n.setRenderTarget(q.map),n.clear();let Z=q.getViewportCount();for(let K=0;K<Z;K++){let at=q.getViewport(K);o.set(r.x*at.x,r.y*at.y,r.x*at.z,r.y*at.w),N.viewport(o),q.updateMatrices(j,K),i=q.getFrustum(),A(T,U,q.camera,j,this.type)}q.isPointLightShadow!==!0&&this.type===xn&&y(q,U),q.needsUpdate=!1}u=this.type,p.needsUpdate=!1,n.setRenderTarget(M,S,R)};function y(w,T){let U=t.update(v);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new Mn(s.x,s.y)),d.uniforms.shadow_pass.value=w.map.texture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(T,null,U,d,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(T,null,U,m,v,null)}function x(w,T,U,M){let S=null,R=U.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(R!==void 0)S=R;else if(S=U.isPointLight===!0?c:a,n.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){let N=S.uuid,Y=T.uuid,C=l[N];C===void 0&&(C={},l[N]=C);let I=C[Y];I===void 0&&(I=S.clone(),C[Y]=I,T.addEventListener("dispose",P)),S=I}if(S.visible=T.visible,S.wireframe=T.wireframe,M===xn?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,U.isPointLight===!0&&S.isMeshDistanceMaterial===!0){let N=n.properties.get(S);N.light=U}return S}function A(w,T,U,M,S){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===xn)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,w.matrixWorld);let Y=t.update(w),C=w.material;if(Array.isArray(C)){let I=Y.groups;for(let V=0,j=I.length;V<j;V++){let q=I[V],W=C[q.materialIndex];if(W&&W.visible){let Z=x(w,W,M,S);w.onBeforeShadow(n,w,T,U,Y,Z,q),n.renderBufferDirect(U,null,Y,Z,w,q),w.onAfterShadow(n,w,T,U,Y,Z,q)}}}else if(C.visible){let I=x(w,C,M,S);w.onBeforeShadow(n,w,T,U,Y,I,null),n.renderBufferDirect(U,null,Y,I,w,null),w.onAfterShadow(n,w,T,U,Y,I,null)}}let N=w.children;for(let Y=0,C=N.length;Y<C;Y++)A(N[Y],T,U,M,S)}function P(w){w.target.removeEventListener("dispose",P);for(let U in l){let M=l[U],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function og(n,t,e){let i=e.isWebGL2;function s(){let L=!1,st=new pe,rt=null,_t=new pe(0,0,0,0);return{setMask:function(yt){rt!==yt&&!L&&(n.colorMask(yt,yt,yt,yt),rt=yt)},setLocked:function(yt){L=yt},setClear:function(yt,Yt,Zt,ue,_e){_e===!0&&(yt*=ue,Yt*=ue,Zt*=ue),st.set(yt,Yt,Zt,ue),_t.equals(st)===!1&&(n.clearColor(yt,Yt,Zt,ue),_t.copy(st))},reset:function(){L=!1,rt=null,_t.set(-1,0,0,0)}}}function r(){let L=!1,st=null,rt=null,_t=null;return{setTest:function(yt){yt?Lt(n.DEPTH_TEST):St(n.DEPTH_TEST)},setMask:function(yt){st!==yt&&!L&&(n.depthMask(yt),st=yt)},setFunc:function(yt){if(rt!==yt){switch(yt){case Fh:n.depthFunc(n.NEVER);break;case zh:n.depthFunc(n.ALWAYS);break;case kh:n.depthFunc(n.LESS);break;case Ys:n.depthFunc(n.LEQUAL);break;case Vh:n.depthFunc(n.EQUAL);break;case Gh:n.depthFunc(n.GEQUAL);break;case Wh:n.depthFunc(n.GREATER);break;case Xh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}rt=yt}},setLocked:function(yt){L=yt},setClear:function(yt){_t!==yt&&(n.clearDepth(yt),_t=yt)},reset:function(){L=!1,st=null,rt=null,_t=null}}}function o(){let L=!1,st=null,rt=null,_t=null,yt=null,Yt=null,Zt=null,ue=null,_e=null;return{setTest:function(Jt){L||(Jt?Lt(n.STENCIL_TEST):St(n.STENCIL_TEST))},setMask:function(Jt){st!==Jt&&!L&&(n.stencilMask(Jt),st=Jt)},setFunc:function(Jt,we,rn){(rt!==Jt||_t!==we||yt!==rn)&&(n.stencilFunc(Jt,we,rn),rt=Jt,_t=we,yt=rn)},setOp:function(Jt,we,rn){(Yt!==Jt||Zt!==we||ue!==rn)&&(n.stencilOp(Jt,we,rn),Yt=Jt,Zt=we,ue=rn)},setLocked:function(Jt){L=Jt},setClear:function(Jt){_e!==Jt&&(n.clearStencil(Jt),_e=Jt)},reset:function(){L=!1,st=null,rt=null,_t=null,yt=null,Yt=null,Zt=null,ue=null,_e=null}}}let a=new s,c=new r,l=new o,h=new WeakMap,f=new WeakMap,d={},m={},g=new WeakMap,v=[],p=null,u=!1,y=null,x=null,A=null,P=null,w=null,T=null,U=null,M=new At(0,0,0),S=0,R=!1,N=null,Y=null,C=null,I=null,V=null,j=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,W=0,Z=n.getParameter(n.VERSION);Z.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=W>=1):Z.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=W>=2);let K=null,at={},X=n.getParameter(n.SCISSOR_BOX),J=n.getParameter(n.VIEWPORT),ot=new pe().fromArray(X),ft=new pe().fromArray(J);function pt(L,st,rt,_t){let yt=new Uint8Array(4),Yt=n.createTexture();n.bindTexture(L,Yt),n.texParameteri(L,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(L,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<rt;Zt++)i&&(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)?n.texImage3D(st,0,n.RGBA,1,1,_t,0,n.RGBA,n.UNSIGNED_BYTE,yt):n.texImage2D(st+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,yt);return Yt}let wt={};wt[n.TEXTURE_2D]=pt(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=pt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(wt[n.TEXTURE_2D_ARRAY]=pt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=pt(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Lt(n.DEPTH_TEST),c.setFunc(Ys),Nt(!1),E(Xo),Lt(n.CULL_FACE),dt(On);function Lt(L){d[L]!==!0&&(n.enable(L),d[L]=!0)}function St(L){d[L]!==!1&&(n.disable(L),d[L]=!1)}function Vt(L,st){return m[L]!==st?(n.bindFramebuffer(L,st),m[L]=st,i&&(L===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=st),L===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=st)),!0):!1}function H(L,st){let rt=v,_t=!1;if(L)if(rt=g.get(st),rt===void 0&&(rt=[],g.set(st,rt)),L.isWebGLMultipleRenderTargets){let yt=L.texture;if(rt.length!==yt.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let Yt=0,Zt=yt.length;Yt<Zt;Yt++)rt[Yt]=n.COLOR_ATTACHMENT0+Yt;rt.length=yt.length,_t=!0}}else rt[0]!==n.COLOR_ATTACHMENT0&&(rt[0]=n.COLOR_ATTACHMENT0,_t=!0);else rt[0]!==n.BACK&&(rt[0]=n.BACK,_t=!0);_t&&(e.isWebGL2?n.drawBuffers(rt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(rt))}function Se(L){return p!==L?(n.useProgram(L),p=L,!0):!1}let vt={[Kn]:n.FUNC_ADD,[_h]:n.FUNC_SUBTRACT,[wh]:n.FUNC_REVERSE_SUBTRACT};if(i)vt[Zo]=n.MIN,vt[Jo]=n.MAX;else{let L=t.get("EXT_blend_minmax");L!==null&&(vt[Zo]=L.MIN_EXT,vt[Jo]=L.MAX_EXT)}let Pt={[Eh]:n.ZERO,[Th]:n.ONE,[Ph]:n.SRC_COLOR,[Sa]:n.SRC_ALPHA,[Nh]:n.SRC_ALPHA_SATURATE,[Dh]:n.DST_COLOR,[Ch]:n.DST_ALPHA,[Rh]:n.ONE_MINUS_SRC_COLOR,[_a]:n.ONE_MINUS_SRC_ALPHA,[Ih]:n.ONE_MINUS_DST_COLOR,[Lh]:n.ONE_MINUS_DST_ALPHA,[Oh]:n.CONSTANT_COLOR,[Uh]:n.ONE_MINUS_CONSTANT_COLOR,[Hh]:n.CONSTANT_ALPHA,[Bh]:n.ONE_MINUS_CONSTANT_ALPHA};function dt(L,st,rt,_t,yt,Yt,Zt,ue,_e,Jt){if(L===On){u===!0&&(St(n.BLEND),u=!1);return}if(u===!1&&(Lt(n.BLEND),u=!0),L!==Sh){if(L!==y||Jt!==R){if((x!==Kn||w!==Kn)&&(n.blendEquation(n.FUNC_ADD),x=Kn,w=Kn),Jt)switch(L){case Ni:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFunc(n.ONE,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yo:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Ni:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case jo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case qo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Yo:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}A=null,P=null,T=null,U=null,M.set(0,0,0),S=0,y=L,R=Jt}return}yt=yt||st,Yt=Yt||rt,Zt=Zt||_t,(st!==x||yt!==w)&&(n.blendEquationSeparate(vt[st],vt[yt]),x=st,w=yt),(rt!==A||_t!==P||Yt!==T||Zt!==U)&&(n.blendFuncSeparate(Pt[rt],Pt[_t],Pt[Yt],Pt[Zt]),A=rt,P=_t,T=Yt,U=Zt),(ue.equals(M)===!1||_e!==S)&&(n.blendColor(ue.r,ue.g,ue.b,_e),M.copy(ue),S=_e),y=L,R=!1}function ne(L,st){L.side===Me?St(n.CULL_FACE):Lt(n.CULL_FACE);let rt=L.side===De;st&&(rt=!rt),Nt(rt),L.blending===Ni&&L.transparent===!1?dt(On):dt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),c.setFunc(L.depthFunc),c.setTest(L.depthTest),c.setMask(L.depthWrite),a.setMask(L.colorWrite);let _t=L.stencilWrite;l.setTest(_t),_t&&(l.setMask(L.stencilWriteMask),l.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),l.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),F(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Lt(n.SAMPLE_ALPHA_TO_COVERAGE):St(n.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(L){N!==L&&(L?n.frontFace(n.CW):n.frontFace(n.CCW),N=L)}function E(L){L!==Mh?(Lt(n.CULL_FACE),L!==Y&&(L===Xo?n.cullFace(n.BACK):L===bh?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):St(n.CULL_FACE),Y=L}function b(L){L!==C&&(q&&n.lineWidth(L),C=L)}function F(L,st,rt){L?(Lt(n.POLYGON_OFFSET_FILL),(I!==st||V!==rt)&&(n.polygonOffset(st,rt),I=st,V=rt)):St(n.POLYGON_OFFSET_FILL)}function tt(L){L?Lt(n.SCISSOR_TEST):St(n.SCISSOR_TEST)}function $(L){L===void 0&&(L=n.TEXTURE0+j-1),K!==L&&(n.activeTexture(L),K=L)}function et(L,st,rt){rt===void 0&&(K===null?rt=n.TEXTURE0+j-1:rt=K);let _t=at[rt];_t===void 0&&(_t={type:void 0,texture:void 0},at[rt]=_t),(_t.type!==L||_t.texture!==st)&&(K!==rt&&(n.activeTexture(rt),K=rt),n.bindTexture(L,st||wt[L]),_t.type=L,_t.texture=st)}function mt(){let L=at[K];L!==void 0&&L.type!==void 0&&(n.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ct(){try{n.compressedTexImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ht(){try{n.compressedTexImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function bt(){try{n.texSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ot(){try{n.texSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Xt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function zt(){try{n.texStorage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Tt(){try{n.texStorage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xt(){try{n.texImage2D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{n.texImage3D.apply(n,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Dt(L){ot.equals(L)===!1&&(n.scissor(L.x,L.y,L.z,L.w),ot.copy(L))}function Wt(L){ft.equals(L)===!1&&(n.viewport(L.x,L.y,L.z,L.w),ft.copy(L))}function se(L,st){let rt=f.get(st);rt===void 0&&(rt=new WeakMap,f.set(st,rt));let _t=rt.get(L);_t===void 0&&(_t=n.getUniformBlockIndex(st,L.name),rt.set(L,_t))}function Ht(L,st){let _t=f.get(st).get(L);h.get(st)!==_t&&(n.uniformBlockBinding(st,_t,L.__bindingPointIndex),h.set(st,_t))}function nt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},K=null,at={},m={},g=new WeakMap,v=[],p=null,u=!1,y=null,x=null,A=null,P=null,w=null,T=null,U=null,M=new At(0,0,0),S=0,R=!1,N=null,Y=null,C=null,I=null,V=null,ot.set(0,0,n.canvas.width,n.canvas.height),ft.set(0,0,n.canvas.width,n.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Lt,disable:St,bindFramebuffer:Vt,drawBuffers:H,useProgram:Se,setBlending:dt,setMaterial:ne,setFlipSided:Nt,setCullFace:E,setLineWidth:b,setPolygonOffset:F,setScissorTest:tt,activeTexture:$,bindTexture:et,unbindTexture:mt,compressedTexImage2D:ct,compressedTexImage3D:ht,texImage2D:xt,texImage3D:ut,updateUBOMapping:se,uniformBlockBinding:Ht,texStorage2D:zt,texStorage3D:Tt,texSubImage2D:bt,texSubImage3D:Ot,compressedTexSubImage2D:Q,compressedTexSubImage3D:Xt,scissor:Dt,viewport:Wt,reset:nt}}function cg(n,t,e,i,s,r,o){let a=s.isWebGL2,c=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,f,d=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,b){return m?new OffscreenCanvas(E,b):er("canvas")}function v(E,b,F,tt){let $=1;if((E.width>tt||E.height>tt)&&($=tt/Math.max(E.width,E.height)),$<1||b===!0)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap){let et=b?Ca:Math.floor,mt=et($*E.width),ct=et($*E.height);f===void 0&&(f=g(mt,ct));let ht=F?g(mt,ct):f;return ht.width=mt,ht.height=ct,ht.getContext("2d").drawImage(E,0,0,mt,ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+E.width+"x"+E.height+") to ("+mt+"x"+ct+")."),ht}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+E.width+"x"+E.height+")."),E;return E}function p(E){return Rc(E.width)&&Rc(E.height)}function u(E){return a?!1:E.wrapS!==$e||E.wrapT!==$e||E.minFilter!==me&&E.minFilter!==We}function y(E,b){return E.generateMipmaps&&b&&E.minFilter!==me&&E.minFilter!==We}function x(E){n.generateMipmap(E)}function A(E,b,F,tt,$=!1){if(a===!1)return b;if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let et=b;if(b===n.RED&&(F===n.FLOAT&&(et=n.R32F),F===n.HALF_FLOAT&&(et=n.R16F),F===n.UNSIGNED_BYTE&&(et=n.R8)),b===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(et=n.R8UI),F===n.UNSIGNED_SHORT&&(et=n.R16UI),F===n.UNSIGNED_INT&&(et=n.R32UI),F===n.BYTE&&(et=n.R8I),F===n.SHORT&&(et=n.R16I),F===n.INT&&(et=n.R32I)),b===n.RG&&(F===n.FLOAT&&(et=n.RG32F),F===n.HALF_FLOAT&&(et=n.RG16F),F===n.UNSIGNED_BYTE&&(et=n.RG8)),b===n.RGBA){let mt=$?Ks:jt.getTransfer(tt);F===n.FLOAT&&(et=n.RGBA32F),F===n.HALF_FLOAT&&(et=n.RGBA16F),F===n.UNSIGNED_BYTE&&(et=mt===Qt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(et=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(et=n.RGB5_A1)}return(et===n.R16F||et===n.R32F||et===n.RG16F||et===n.RG32F||et===n.RGBA16F||et===n.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function P(E,b,F){return y(E,F)===!0||E.isFramebufferTexture&&E.minFilter!==me&&E.minFilter!==We?Math.log2(Math.max(b.width,b.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?b.mipmaps.length:1}function w(E){return E===me||E===Ko||E===Xr?n.NEAREST:n.LINEAR}function T(E){let b=E.target;b.removeEventListener("dispose",T),M(b),b.isVideoTexture&&h.delete(b)}function U(E){let b=E.target;b.removeEventListener("dispose",U),R(b)}function M(E){let b=i.get(E);if(b.__webglInit===void 0)return;let F=E.source,tt=d.get(F);if(tt){let $=tt[b.__cacheKey];$.usedTimes--,$.usedTimes===0&&S(E),Object.keys(tt).length===0&&d.delete(F)}i.remove(E)}function S(E){let b=i.get(E);n.deleteTexture(b.__webglTexture);let F=E.source,tt=d.get(F);delete tt[b.__cacheKey],o.memory.textures--}function R(E){let b=E.texture,F=i.get(E),tt=i.get(b);if(tt.__webglTexture!==void 0&&(n.deleteTexture(tt.__webglTexture),o.memory.textures--),E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(F.__webglFramebuffer[$]))for(let et=0;et<F.__webglFramebuffer[$].length;et++)n.deleteFramebuffer(F.__webglFramebuffer[$][et]);else n.deleteFramebuffer(F.__webglFramebuffer[$]);F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer[$])}else{if(Array.isArray(F.__webglFramebuffer))for(let $=0;$<F.__webglFramebuffer.length;$++)n.deleteFramebuffer(F.__webglFramebuffer[$]);else n.deleteFramebuffer(F.__webglFramebuffer);if(F.__webglDepthbuffer&&n.deleteRenderbuffer(F.__webglDepthbuffer),F.__webglMultisampledFramebuffer&&n.deleteFramebuffer(F.__webglMultisampledFramebuffer),F.__webglColorRenderbuffer)for(let $=0;$<F.__webglColorRenderbuffer.length;$++)F.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(F.__webglColorRenderbuffer[$]);F.__webglDepthRenderbuffer&&n.deleteRenderbuffer(F.__webglDepthRenderbuffer)}if(E.isWebGLMultipleRenderTargets)for(let $=0,et=b.length;$<et;$++){let mt=i.get(b[$]);mt.__webglTexture&&(n.deleteTexture(mt.__webglTexture),o.memory.textures--),i.remove(b[$])}i.remove(b),i.remove(E)}let N=0;function Y(){N=0}function C(){let E=N;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),N+=1,E}function I(E){let b=[];return b.push(E.wrapS),b.push(E.wrapT),b.push(E.wrapR||0),b.push(E.magFilter),b.push(E.minFilter),b.push(E.anisotropy),b.push(E.internalFormat),b.push(E.format),b.push(E.type),b.push(E.generateMipmaps),b.push(E.premultiplyAlpha),b.push(E.flipY),b.push(E.unpackAlignment),b.push(E.colorSpace),b.join()}function V(E,b){let F=i.get(E);if(E.isVideoTexture&&ne(E),E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){let tt=E.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ot(F,E,b);return}}e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+b)}function j(E,b){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+b)}function q(E,b){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ot(F,E,b);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+b)}function W(E,b){let F=i.get(E);if(E.version>0&&F.__version!==E.version){ft(F,E,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+b)}let Z={[ls]:n.REPEAT,[$e]:n.CLAMP_TO_EDGE,[Ta]:n.MIRRORED_REPEAT},K={[me]:n.NEAREST,[Ko]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[We]:n.LINEAR,[tu]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},at={[fu]:n.NEVER,[vu]:n.ALWAYS,[du]:n.LESS,[Cl]:n.LEQUAL,[pu]:n.EQUAL,[xu]:n.GEQUAL,[mu]:n.GREATER,[gu]:n.NOTEQUAL};function X(E,b,F){if(F?(n.texParameteri(E,n.TEXTURE_WRAP_S,Z[b.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,Z[b.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,Z[b.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,K[b.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,K[b.minFilter])):(n.texParameteri(E,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(E,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(b.wrapS!==$e||b.wrapT!==$e)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(E,n.TEXTURE_MAG_FILTER,w(b.magFilter)),n.texParameteri(E,n.TEXTURE_MIN_FILTER,w(b.minFilter)),b.minFilter!==me&&b.minFilter!==We&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),b.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,at[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let tt=t.get("EXT_texture_filter_anisotropic");if(b.magFilter===me||b.minFilter!==Xr&&b.minFilter!==hs||b.type===Nn&&t.has("OES_texture_float_linear")===!1||a===!1&&b.type===us&&t.has("OES_texture_half_float_linear")===!1)return;(b.anisotropy>1||i.get(b).__currentAnisotropy)&&(n.texParameterf(E,tt.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy)}}function J(E,b){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,b.addEventListener("dispose",T));let tt=b.source,$=d.get(tt);$===void 0&&($={},d.set(tt,$));let et=I(b);if(et!==E.__cacheKey){$[et]===void 0&&($[et]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,F=!0),$[et].usedTimes++;let mt=$[E.__cacheKey];mt!==void 0&&($[E.__cacheKey].usedTimes--,mt.usedTimes===0&&S(b)),E.__cacheKey=et,E.__webglTexture=$[et].texture}return F}function ot(E,b,F){let tt=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(tt=n.TEXTURE_3D);let $=J(E,b),et=b.source;e.bindTexture(tt,E.__webglTexture,n.TEXTURE0+F);let mt=i.get(et);if(et.version!==mt.__version||$===!0){e.activeTexture(n.TEXTURE0+F);let ct=jt.getPrimaries(jt.workingColorSpace),ht=b.colorSpace===Xe?null:jt.getPrimaries(b.colorSpace),bt=b.colorSpace===Xe||ct===ht?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);let Ot=u(b)&&p(b.image)===!1,Q=v(b.image,Ot,!1,s.maxTextureSize);Q=Nt(b,Q);let Xt=p(Q)||a,zt=r.convert(b.format,b.colorSpace),Tt=r.convert(b.type),xt=A(b.internalFormat,zt,Tt,b.colorSpace,b.isVideoTexture);X(tt,b,Xt);let ut,Dt=b.mipmaps,Wt=a&&b.isVideoTexture!==!0&&xt!==Tl,se=mt.__version===void 0||$===!0,Ht=P(b,Q,Xt);if(b.isDepthTexture)xt=n.DEPTH_COMPONENT,a?b.type===Nn?xt=n.DEPTH_COMPONENT32F:b.type===In?xt=n.DEPTH_COMPONENT24:b.type===$n?xt=n.DEPTH24_STENCIL8:xt=n.DEPTH_COMPONENT16:b.type===Nn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),b.format===ti&&xt===n.DEPTH_COMPONENT&&b.type!==co&&b.type!==In&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),b.type=In,Tt=r.convert(b.type)),b.format===Fi&&xt===n.DEPTH_COMPONENT&&(xt=n.DEPTH_STENCIL,b.type!==$n&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),b.type=$n,Tt=r.convert(b.type))),se&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,xt,Q.width,Q.height):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,zt,Tt,null));else if(b.isDataTexture)if(Dt.length>0&&Xt){Wt&&se&&e.texStorage2D(n.TEXTURE_2D,Ht,xt,Dt[0].width,Dt[0].height);for(let nt=0,L=Dt.length;nt<L;nt++)ut=Dt[nt],Wt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,zt,Tt,ut.data):e.texImage2D(n.TEXTURE_2D,nt,xt,ut.width,ut.height,0,zt,Tt,ut.data);b.generateMipmaps=!1}else Wt?(se&&e.texStorage2D(n.TEXTURE_2D,Ht,xt,Q.width,Q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,Q.width,Q.height,zt,Tt,Q.data)):e.texImage2D(n.TEXTURE_2D,0,xt,Q.width,Q.height,0,zt,Tt,Q.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Wt&&se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,xt,Dt[0].width,Dt[0].height,Q.depth);for(let nt=0,L=Dt.length;nt<L;nt++)ut=Dt[nt],b.format!==tn?zt!==null?Wt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,Q.depth,zt,ut.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,nt,xt,ut.width,ut.height,Q.depth,0,ut.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,nt,0,0,0,ut.width,ut.height,Q.depth,zt,Tt,ut.data):e.texImage3D(n.TEXTURE_2D_ARRAY,nt,xt,ut.width,ut.height,Q.depth,0,zt,Tt,ut.data)}else{Wt&&se&&e.texStorage2D(n.TEXTURE_2D,Ht,xt,Dt[0].width,Dt[0].height);for(let nt=0,L=Dt.length;nt<L;nt++)ut=Dt[nt],b.format!==tn?zt!==null?Wt?e.compressedTexSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,zt,ut.data):e.compressedTexImage2D(n.TEXTURE_2D,nt,xt,ut.width,ut.height,0,ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,ut.width,ut.height,zt,Tt,ut.data):e.texImage2D(n.TEXTURE_2D,nt,xt,ut.width,ut.height,0,zt,Tt,ut.data)}else if(b.isDataArrayTexture)Wt?(se&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Ht,xt,Q.width,Q.height,Q.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,zt,Tt,Q.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,xt,Q.width,Q.height,Q.depth,0,zt,Tt,Q.data);else if(b.isData3DTexture)Wt?(se&&e.texStorage3D(n.TEXTURE_3D,Ht,xt,Q.width,Q.height,Q.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,zt,Tt,Q.data)):e.texImage3D(n.TEXTURE_3D,0,xt,Q.width,Q.height,Q.depth,0,zt,Tt,Q.data);else if(b.isFramebufferTexture){if(se)if(Wt)e.texStorage2D(n.TEXTURE_2D,Ht,xt,Q.width,Q.height);else{let nt=Q.width,L=Q.height;for(let st=0;st<Ht;st++)e.texImage2D(n.TEXTURE_2D,st,xt,nt,L,0,zt,Tt,null),nt>>=1,L>>=1}}else if(Dt.length>0&&Xt){Wt&&se&&e.texStorage2D(n.TEXTURE_2D,Ht,xt,Dt[0].width,Dt[0].height);for(let nt=0,L=Dt.length;nt<L;nt++)ut=Dt[nt],Wt?e.texSubImage2D(n.TEXTURE_2D,nt,0,0,zt,Tt,ut):e.texImage2D(n.TEXTURE_2D,nt,xt,zt,Tt,ut);b.generateMipmaps=!1}else Wt?(se&&e.texStorage2D(n.TEXTURE_2D,Ht,xt,Q.width,Q.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,zt,Tt,Q)):e.texImage2D(n.TEXTURE_2D,0,xt,zt,Tt,Q);y(b,Xt)&&x(tt),mt.__version=et.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function ft(E,b,F){if(b.image.length!==6)return;let tt=J(E,b),$=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);let et=i.get($);if($.version!==et.__version||tt===!0){e.activeTexture(n.TEXTURE0+F);let mt=jt.getPrimaries(jt.workingColorSpace),ct=b.colorSpace===Xe?null:jt.getPrimaries(b.colorSpace),ht=b.colorSpace===Xe||mt===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ht);let bt=b.isCompressedTexture||b.image[0].isCompressedTexture,Ot=b.image[0]&&b.image[0].isDataTexture,Q=[];for(let nt=0;nt<6;nt++)!bt&&!Ot?Q[nt]=v(b.image[nt],!1,!0,s.maxCubemapSize):Q[nt]=Ot?b.image[nt].image:b.image[nt],Q[nt]=Nt(b,Q[nt]);let Xt=Q[0],zt=p(Xt)||a,Tt=r.convert(b.format,b.colorSpace),xt=r.convert(b.type),ut=A(b.internalFormat,Tt,xt,b.colorSpace),Dt=a&&b.isVideoTexture!==!0,Wt=et.__version===void 0||tt===!0,se=P(b,Xt,zt);X(n.TEXTURE_CUBE_MAP,b,zt);let Ht;if(bt){Dt&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,se,ut,Xt.width,Xt.height);for(let nt=0;nt<6;nt++){Ht=Q[nt].mipmaps;for(let L=0;L<Ht.length;L++){let st=Ht[L];b.format!==tn?Tt!==null?Dt?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,0,0,st.width,st.height,Tt,st.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,ut,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,0,0,st.width,st.height,Tt,xt,st.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L,ut,st.width,st.height,0,Tt,xt,st.data)}}}else{Ht=b.mipmaps,Dt&&Wt&&(Ht.length>0&&se++,e.texStorage2D(n.TEXTURE_CUBE_MAP,se,ut,Q[0].width,Q[0].height));for(let nt=0;nt<6;nt++)if(Ot){Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Q[nt].width,Q[nt].height,Tt,xt,Q[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,Q[nt].width,Q[nt].height,0,Tt,xt,Q[nt].data);for(let L=0;L<Ht.length;L++){let rt=Ht[L].image[nt].image;Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,0,0,rt.width,rt.height,Tt,xt,rt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,ut,rt.width,rt.height,0,Tt,xt,rt.data)}}else{Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Tt,xt,Q[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,ut,Tt,xt,Q[nt]);for(let L=0;L<Ht.length;L++){let st=Ht[L];Dt?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,0,0,Tt,xt,st.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,L+1,ut,Tt,xt,st.image[nt])}}}y(b,zt)&&x(n.TEXTURE_CUBE_MAP),et.__version=$.version,b.onUpdate&&b.onUpdate(b)}E.__version=b.version}function pt(E,b,F,tt,$,et){let mt=r.convert(F.format,F.colorSpace),ct=r.convert(F.type),ht=A(F.internalFormat,mt,ct,F.colorSpace);if(!i.get(b).__hasExternalTextures){let Ot=Math.max(1,b.width>>et),Q=Math.max(1,b.height>>et);$===n.TEXTURE_3D||$===n.TEXTURE_2D_ARRAY?e.texImage3D($,et,ht,Ot,Q,b.depth,0,mt,ct,null):e.texImage2D($,et,ht,Ot,Q,0,mt,ct,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),dt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,$,i.get(F).__webglTexture,0,Pt(b)):($===n.TEXTURE_2D||$>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,$,i.get(F).__webglTexture,et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function wt(E,b,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),b.depthBuffer&&!b.stencilBuffer){let tt=a===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(F||dt(b)){let $=b.depthTexture;$&&$.isDepthTexture&&($.type===Nn?tt=n.DEPTH_COMPONENT32F:$.type===In&&(tt=n.DEPTH_COMPONENT24));let et=Pt(b);dt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,et,tt,b.width,b.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,et,tt,b.width,b.height)}else n.renderbufferStorage(n.RENDERBUFFER,tt,b.width,b.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,E)}else if(b.depthBuffer&&b.stencilBuffer){let tt=Pt(b);F&&dt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,b.width,b.height):dt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,n.DEPTH24_STENCIL8,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,E)}else{let tt=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let $=0;$<tt.length;$++){let et=tt[$],mt=r.convert(et.format,et.colorSpace),ct=r.convert(et.type),ht=A(et.internalFormat,mt,ct,et.colorSpace),bt=Pt(b);F&&dt(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,bt,ht,b.width,b.height):dt(b)?c.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,bt,ht,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,ht,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Lt(E,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),V(b.depthTexture,0);let tt=i.get(b.depthTexture).__webglTexture,$=Pt(b);if(b.depthTexture.format===ti)dt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,tt,0);else if(b.depthTexture.format===Fi)dt(b)?c.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0,$):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function St(E){let b=i.get(E),F=E.isWebGLCubeRenderTarget===!0;if(E.depthTexture&&!b.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Lt(b.__webglFramebuffer,E)}else if(F){b.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[tt]),b.__webglDepthbuffer[tt]=n.createRenderbuffer(),wt(b.__webglDepthbuffer[tt],E,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=n.createRenderbuffer(),wt(b.__webglDepthbuffer,E,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Vt(E,b,F){let tt=i.get(E);b!==void 0&&pt(tt.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&St(E)}function H(E){let b=E.texture,F=i.get(E),tt=i.get(b);E.addEventListener("dispose",U),E.isWebGLMultipleRenderTargets!==!0&&(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=b.version,o.memory.textures++);let $=E.isWebGLCubeRenderTarget===!0,et=E.isWebGLMultipleRenderTargets===!0,mt=p(E)||a;if($){F.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(a&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer[ct]=[];for(let ht=0;ht<b.mipmaps.length;ht++)F.__webglFramebuffer[ct][ht]=n.createFramebuffer()}else F.__webglFramebuffer[ct]=n.createFramebuffer()}else{if(a&&b.mipmaps&&b.mipmaps.length>0){F.__webglFramebuffer=[];for(let ct=0;ct<b.mipmaps.length;ct++)F.__webglFramebuffer[ct]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(et)if(s.drawBuffers){let ct=E.texture;for(let ht=0,bt=ct.length;ht<bt;ht++){let Ot=i.get(ct[ht]);Ot.__webglTexture===void 0&&(Ot.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&E.samples>0&&dt(E)===!1){let ct=et?b:[b];F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ht=0;ht<ct.length;ht++){let bt=ct[ht];F.__webglColorRenderbuffer[ht]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[ht]);let Ot=r.convert(bt.format,bt.colorSpace),Q=r.convert(bt.type),Xt=A(bt.internalFormat,Ot,Q,bt.colorSpace,E.isXRRenderTarget===!0),zt=Pt(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,zt,Xt,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ht,n.RENDERBUFFER,F.__webglColorRenderbuffer[ht])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),wt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if($){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),X(n.TEXTURE_CUBE_MAP,b,mt);for(let ct=0;ct<6;ct++)if(a&&b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)pt(F.__webglFramebuffer[ct][ht],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,ht);else pt(F.__webglFramebuffer[ct],E,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);y(b,mt)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(et){let ct=E.texture;for(let ht=0,bt=ct.length;ht<bt;ht++){let Ot=ct[ht],Q=i.get(Ot);e.bindTexture(n.TEXTURE_2D,Q.__webglTexture),X(n.TEXTURE_2D,Ot,mt),pt(F.__webglFramebuffer,E,Ot,n.COLOR_ATTACHMENT0+ht,n.TEXTURE_2D,0),y(Ot,mt)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let ct=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(a?ct=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ct,tt.__webglTexture),X(ct,b,mt),a&&b.mipmaps&&b.mipmaps.length>0)for(let ht=0;ht<b.mipmaps.length;ht++)pt(F.__webglFramebuffer[ht],E,b,n.COLOR_ATTACHMENT0,ct,ht);else pt(F.__webglFramebuffer,E,b,n.COLOR_ATTACHMENT0,ct,0);y(b,mt)&&x(ct),e.unbindTexture()}E.depthBuffer&&St(E)}function Se(E){let b=p(E)||a,F=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let tt=0,$=F.length;tt<$;tt++){let et=F[tt];if(y(et,b)){let mt=E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ct=i.get(et).__webglTexture;e.bindTexture(mt,ct),x(mt),e.unbindTexture()}}}function vt(E){if(a&&E.samples>0&&dt(E)===!1){let b=E.isWebGLMultipleRenderTargets?E.texture:[E.texture],F=E.width,tt=E.height,$=n.COLOR_BUFFER_BIT,et=[],mt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ct=i.get(E),ht=E.isWebGLMultipleRenderTargets===!0;if(ht)for(let bt=0;bt<b.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglFramebuffer);for(let bt=0;bt<b.length;bt++){et.push(n.COLOR_ATTACHMENT0+bt),E.depthBuffer&&et.push(mt);let Ot=ct.__ignoreDepthValues!==void 0?ct.__ignoreDepthValues:!1;if(Ot===!1&&(E.depthBuffer&&($|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&($|=n.STENCIL_BUFFER_BIT)),ht&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]),Ot===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[mt]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[mt])),ht){let Q=i.get(b[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,F,tt,0,0,F,tt,$,n.NEAREST),l&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,et)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ht)for(let bt=0;bt<b.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,ct.__webglColorRenderbuffer[bt]);let Ot=i.get(b[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,Ot,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ct.__webglMultisampledFramebuffer)}}function Pt(E){return Math.min(s.maxSamples,E.samples)}function dt(E){let b=i.get(E);return a&&E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function ne(E){let b=o.render.frame;h.get(E)!==b&&(h.set(E,b),E.update())}function Nt(E,b){let F=E.colorSpace,tt=E.format,$=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||E.format===Pa||F!==An&&F!==Xe&&(jt.getTransfer(F)===Qt?a===!1?t.has("EXT_sRGB")===!0&&tt===tn?(E.format=Pa,E.minFilter=We,E.generateMipmaps=!1):b=nr.sRGBToLinear(b):(tt!==tn||$!==Hn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),b}this.allocateTextureUnit=C,this.resetTextureUnits=Y,this.setTexture2D=V,this.setTexture2DArray=j,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Vt,this.setupRenderTarget=H,this.updateRenderTargetMipmap=Se,this.updateMultisampleRenderTarget=vt,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=pt,this.useMultisampledRTT=dt}function lg(n,t,e){let i=e.isWebGL2;function s(r,o=Xe){let a,c=jt.getTransfer(o);if(r===Hn)return n.UNSIGNED_BYTE;if(r===bl)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Sl)return n.UNSIGNED_SHORT_5_5_5_1;if(r===eu)return n.BYTE;if(r===nu)return n.SHORT;if(r===co)return n.UNSIGNED_SHORT;if(r===Ml)return n.INT;if(r===In)return n.UNSIGNED_INT;if(r===Nn)return n.FLOAT;if(r===us)return i?n.HALF_FLOAT:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===iu)return n.ALPHA;if(r===tn)return n.RGBA;if(r===su)return n.LUMINANCE;if(r===ru)return n.LUMINANCE_ALPHA;if(r===ti)return n.DEPTH_COMPONENT;if(r===Fi)return n.DEPTH_STENCIL;if(r===Pa)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===au)return n.RED;if(r===_l)return n.RED_INTEGER;if(r===ou)return n.RG;if(r===wl)return n.RG_INTEGER;if(r===El)return n.RGBA_INTEGER;if(r===jr||r===qr||r===Yr||r===Zr)if(c===Qt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===jr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Zr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===jr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===qr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Zr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Qo||r===$o||r===tc||r===ec)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Qo)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===$o)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===tc)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ec)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Tl)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===nc||r===ic)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===nc)return c===Qt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===ic)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===sc||r===rc||r===ac||r===oc||r===cc||r===lc||r===hc||r===uc||r===fc||r===dc||r===pc||r===mc||r===gc||r===xc)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===sc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===rc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ac)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===oc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===cc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===lc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===hc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===uc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===fc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===dc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===pc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===mc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===gc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===xc)return c===Qt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Jr||r===vc||r===yc)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Jr)return c===Qt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===vc)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===yc)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cu||r===Ac||r===Mc||r===bc)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Jr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ac)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Mc)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===bc)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===$n?i?n.UNSIGNED_INT_24_8:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var Wa=class extends Pe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},je=class extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}},hg={type:"move"},cs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let v of t.hand.values()){let p=e.getJointPose(v,i),u=this._getHandJoint(l,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hg)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new je;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Xa=class extends Fn{constructor(t,e){super();let i=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,g=null,v=e.getContextAttributes(),p=null,u=null,y=[],x=[],A=new kt,P=null,w=new Pe;w.layers.enable(1),w.viewport=new pe;let T=new Pe;T.layers.enable(2),T.viewport=new pe;let U=[w,T],M=new Wa;M.layers.enable(1),M.layers.enable(2);let S=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=y[X];return J===void 0&&(J=new cs,y[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=y[X];return J===void 0&&(J=new cs,y[X]=J),J.getGripSpace()},this.getHand=function(X){let J=y[X];return J===void 0&&(J=new cs,y[X]=J),J.getHandSpace()};function N(X){let J=x.indexOf(X.inputSource);if(J===-1)return;let ot=y[J];ot!==void 0&&(ot.update(X.inputSource,X.frame,l||o),ot.dispatchEvent({type:X.type,data:X.inputSource}))}function Y(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",C);for(let X=0;X<y.length;X++){let J=x[X];J!==null&&(x[X]=null,y[X].disconnect(J))}S=null,R=null,t.setRenderTarget(p),m=null,d=null,f=null,s=null,u=null,at.stop(),i.isPresenting=!1,t.setPixelRatio(P),t.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",C),v.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(A),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let J={antialias:s.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Mn(m.framebufferWidth,m.framebufferHeight,{format:tn,type:Hn,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil})}else{let J=null,ot=null,ft=null;v.depth&&(ft=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=v.stencil?Fi:ti,ot=v.stencil?$n:In);let pt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};f=new XRWebGLBinding(s,e),d=f.createProjectionLayer(pt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),u=new Mn(d.textureWidth,d.textureHeight,{format:tn,type:Hn,depthTexture:new dr(d.textureWidth,d.textureHeight,ot,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0});let wt=t.properties.get(u);wt.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(X){for(let J=0;J<X.removed.length;J++){let ot=X.removed[J],ft=x.indexOf(ot);ft>=0&&(x[ft]=null,y[ft].disconnect(ot))}for(let J=0;J<X.added.length;J++){let ot=X.added[J],ft=x.indexOf(ot);if(ft===-1){for(let wt=0;wt<y.length;wt++)if(wt>=x.length){x.push(ot),ft=wt;break}else if(x[wt]===null){x[wt]=ot,ft=wt;break}if(ft===-1)break}let pt=y[ft];pt&&pt.connect(ot)}}let I=new D,V=new D;function j(X,J,ot){I.setFromMatrixPosition(J.matrixWorld),V.setFromMatrixPosition(ot.matrixWorld);let ft=I.distanceTo(V),pt=J.projectionMatrix.elements,wt=ot.projectionMatrix.elements,Lt=pt[14]/(pt[10]-1),St=pt[14]/(pt[10]+1),Vt=(pt[9]+1)/pt[5],H=(pt[9]-1)/pt[5],Se=(pt[8]-1)/pt[0],vt=(wt[8]+1)/wt[0],Pt=Lt*Se,dt=Lt*vt,ne=ft/(-Se+vt),Nt=ne*-Se;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Nt),X.translateZ(ne),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();let E=Lt+ne,b=St+ne,F=Pt-Nt,tt=dt+(ft-Nt),$=Vt*St/b*E,et=H*St/b*E;X.projectionMatrix.makePerspective(F,tt,$,et,E,b),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function q(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;M.near=T.near=w.near=X.near,M.far=T.far=w.far=X.far,(S!==M.near||R!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),S=M.near,R=M.far);let J=X.parent,ot=M.cameras;q(M,J);for(let ft=0;ft<ot.length;ft++)q(ot[ft],J);ot.length===2?j(M,w,T):M.projectionMatrix.copy(w.projectionMatrix),W(X,M,J)};function W(X,J,ot){ot===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ot.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ra*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=X)};let Z=null;function K(X,J){if(h=J.getViewerPose(l||o),g=J,h!==null){let ot=h.views;m!==null&&(t.setRenderTargetFramebuffer(u,m.framebuffer),t.setRenderTarget(u));let ft=!1;ot.length!==M.cameras.length&&(M.cameras.length=0,ft=!0);for(let pt=0;pt<ot.length;pt++){let wt=ot[pt],Lt=null;if(m!==null)Lt=m.getViewport(wt);else{let Vt=f.getViewSubImage(d,wt);Lt=Vt.viewport,pt===0&&(t.setRenderTargetTextures(u,Vt.colorTexture,d.ignoreDepthValues?void 0:Vt.depthStencilTexture),t.setRenderTarget(u))}let St=U[pt];St===void 0&&(St=new Pe,St.layers.enable(pt),St.viewport=new pe,U[pt]=St),St.matrix.fromArray(wt.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(wt.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),pt===0&&(M.matrix.copy(St.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),ft===!0&&M.cameras.push(St)}}for(let ot=0;ot<y.length;ot++){let ft=x[ot],pt=y[ot];ft!==null&&pt!==void 0&&pt.update(ft,J,l||o)}Z&&Z(X,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}let at=new Nl;at.setAnimationLoop(K),this.setAnimationLoop=function(X){Z=X},this.dispose=function(){}}};function ug(n,t){function e(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Il(n)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function s(p,u,y,x,A){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,A)):u.isMeshMatcapMaterial?(r(p,u),g(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),v(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,y,x):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,e(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===De&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,e(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===De&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,e(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,e(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);let y=t.get(u).envMap;if(y&&(p.envMap.value=y,p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,e(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,y,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*y,p.scale.value=x*.5,u.map&&(p.map.value=u.map,e(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,e(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,e(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,p.roughnessMapTransform)),t.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,y){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===De&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){let y=t.get(u).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function fg(n,t,e,i){let s={},r={},o=[],a=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(y,x){let A=x.program;i.uniformBlockBinding(y,A)}function l(y,x){let A=s[y.id];A===void 0&&(g(y),A=h(y),s[y.id]=A,y.addEventListener("dispose",p));let P=x.program;i.updateUBOMapping(y,P);let w=t.render.frame;r[y.id]!==w&&(d(y),r[y.id]=w)}function h(y){let x=f();y.__bindingPointIndex=x;let A=n.createBuffer(),P=y.__size,w=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,A),n.bufferData(n.UNIFORM_BUFFER,P,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,A),A}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let x=s[y.id],A=y.uniforms,P=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let w=0,T=A.length;w<T;w++){let U=Array.isArray(A[w])?A[w]:[A[w]];for(let M=0,S=U.length;M<S;M++){let R=U[M];if(m(R,w,M,P)===!0){let N=R.__offset,Y=Array.isArray(R.value)?R.value:[R.value],C=0;for(let I=0;I<Y.length;I++){let V=Y[I],j=v(V);typeof V=="number"||typeof V=="boolean"?(R.__data[0]=V,n.bufferSubData(n.UNIFORM_BUFFER,N+C,R.__data)):V.isMatrix3?(R.__data[0]=V.elements[0],R.__data[1]=V.elements[1],R.__data[2]=V.elements[2],R.__data[3]=0,R.__data[4]=V.elements[3],R.__data[5]=V.elements[4],R.__data[6]=V.elements[5],R.__data[7]=0,R.__data[8]=V.elements[6],R.__data[9]=V.elements[7],R.__data[10]=V.elements[8],R.__data[11]=0):(V.toArray(R.__data,C),C+=j.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(y,x,A,P){let w=y.value,T=x+"_"+A;if(P[T]===void 0)return typeof w=="number"||typeof w=="boolean"?P[T]=w:P[T]=w.clone(),!0;{let U=P[T];if(typeof w=="number"||typeof w=="boolean"){if(U!==w)return P[T]=w,!0}else if(U.equals(w)===!1)return U.copy(w),!0}return!1}function g(y){let x=y.uniforms,A=0,P=16;for(let T=0,U=x.length;T<U;T++){let M=Array.isArray(x[T])?x[T]:[x[T]];for(let S=0,R=M.length;S<R;S++){let N=M[S],Y=Array.isArray(N.value)?N.value:[N.value];for(let C=0,I=Y.length;C<I;C++){let V=Y[C],j=v(V),q=A%P;q!==0&&P-q<j.boundary&&(A+=P-q),N.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=A,A+=j.storage}}}let w=A%P;return w>0&&(A+=P-w),y.__size=A,y.__cache={},this}function v(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function p(y){let x=y.target;x.removeEventListener("dispose",p);let A=o.indexOf(x.__bindingPointIndex);o.splice(A,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let y in s)n.deleteBuffer(s[y]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var ps=class{constructor(t={}){let{canvas:e=Au(),context:i=null,depth:s=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=t;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;let m=new Uint32Array(4),g=new Int32Array(4),v=null,p=null,u=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Kt,this._useLegacyLights=!1,this.toneMapping=Un,this.toneMappingExposure=1;let x=this,A=!1,P=0,w=0,T=null,U=-1,M=null,S=new pe,R=new pe,N=null,Y=new At(0),C=0,I=e.width,V=e.height,j=1,q=null,W=null,Z=new pe(0,0,I,V),K=new pe(0,0,I,V),at=!1,X=new ds,J=!1,ot=!1,ft=null,pt=new $t,wt=new kt,Lt=new D,St={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Vt(){return T===null?j:1}let H=i;function Se(_,O){for(let z=0;z<_.length;z++){let G=_[z],B=e.getContext(G,O);if(B!==null)return B}return null}try{let _={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ao}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",L,!1),e.addEventListener("webglcontextcreationerror",st,!1),H===null){let O=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&O.shift(),H=Se(O,_),H===null)throw Se(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(_){throw console.error("THREE.WebGLRenderer: "+_.message),_}let vt,Pt,dt,ne,Nt,E,b,F,tt,$,et,mt,ct,ht,bt,Ot,Q,Xt,zt,Tt,xt,ut,Dt,Wt;function se(){vt=new Lp(H),Pt=new wp(H,vt,t),vt.init(Pt),ut=new lg(H,vt,Pt),dt=new og(H,vt,Pt),ne=new Np(H),Nt=new Zm,E=new cg(H,vt,dt,Nt,Pt,ut,ne),b=new Tp(x),F=new Cp(x),tt=new ku(H,Pt),Dt=new Sp(H,vt,tt,Pt),$=new Dp(H,tt,ne,Dt),et=new Bp(H,$,tt,ne),zt=new Hp(H,Pt,E),Ot=new Ep(Nt),mt=new Ym(x,b,F,vt,Pt,Dt,Ot),ct=new ug(x,Nt),ht=new Km,bt=new ig(vt,Pt),Xt=new bp(x,b,F,dt,et,d,c),Q=new ag(x,et,Pt),Wt=new fg(H,ne,Pt,dt),Tt=new _p(H,vt,ne,Pt),xt=new Ip(H,vt,ne,Pt),ne.programs=mt.programs,x.capabilities=Pt,x.extensions=vt,x.properties=Nt,x.renderLists=ht,x.shadowMap=Q,x.state=dt,x.info=ne}se();let Ht=new Xa(x,H);this.xr=Ht,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let _=vt.get("WEBGL_lose_context");_&&_.loseContext()},this.forceContextRestore=function(){let _=vt.get("WEBGL_lose_context");_&&_.restoreContext()},this.getPixelRatio=function(){return j},this.setPixelRatio=function(_){_!==void 0&&(j=_,this.setSize(I,V,!1))},this.getSize=function(_){return _.set(I,V)},this.setSize=function(_,O,z=!0){if(Ht.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}I=_,V=O,e.width=Math.floor(_*j),e.height=Math.floor(O*j),z===!0&&(e.style.width=_+"px",e.style.height=O+"px"),this.setViewport(0,0,_,O)},this.getDrawingBufferSize=function(_){return _.set(I*j,V*j).floor()},this.setDrawingBufferSize=function(_,O,z){I=_,V=O,j=z,e.width=Math.floor(_*z),e.height=Math.floor(O*z),this.setViewport(0,0,_,O)},this.getCurrentViewport=function(_){return _.copy(S)},this.getViewport=function(_){return _.copy(Z)},this.setViewport=function(_,O,z,G){_.isVector4?Z.set(_.x,_.y,_.z,_.w):Z.set(_,O,z,G),dt.viewport(S.copy(Z).multiplyScalar(j).floor())},this.getScissor=function(_){return _.copy(K)},this.setScissor=function(_,O,z,G){_.isVector4?K.set(_.x,_.y,_.z,_.w):K.set(_,O,z,G),dt.scissor(R.copy(K).multiplyScalar(j).floor())},this.getScissorTest=function(){return at},this.setScissorTest=function(_){dt.setScissorTest(at=_)},this.setOpaqueSort=function(_){q=_},this.setTransparentSort=function(_){W=_},this.getClearColor=function(_){return _.copy(Xt.getClearColor())},this.setClearColor=function(){Xt.setClearColor.apply(Xt,arguments)},this.getClearAlpha=function(){return Xt.getClearAlpha()},this.setClearAlpha=function(){Xt.setClearAlpha.apply(Xt,arguments)},this.clear=function(_=!0,O=!0,z=!0){let G=0;if(_){let B=!1;if(T!==null){let lt=T.texture.format;B=lt===El||lt===wl||lt===_l}if(B){let lt=T.texture.type,gt=lt===Hn||lt===In||lt===co||lt===$n||lt===bl||lt===Sl,Mt=Xt.getClearColor(),Et=Xt.getClearAlpha(),Ut=Mt.r,Rt=Mt.g,Ct=Mt.b;gt?(m[0]=Ut,m[1]=Rt,m[2]=Ct,m[3]=Et,H.clearBufferuiv(H.COLOR,0,m)):(g[0]=Ut,g[1]=Rt,g[2]=Ct,g[3]=Et,H.clearBufferiv(H.COLOR,0,g))}else G|=H.COLOR_BUFFER_BIT}O&&(G|=H.DEPTH_BUFFER_BIT),z&&(G|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",L,!1),e.removeEventListener("webglcontextcreationerror",st,!1),ht.dispose(),bt.dispose(),Nt.dispose(),b.dispose(),F.dispose(),et.dispose(),Dt.dispose(),Wt.dispose(),mt.dispose(),Ht.dispose(),Ht.removeEventListener("sessionstart",_e),Ht.removeEventListener("sessionend",Jt),ft&&(ft.dispose(),ft=null),we.stop()};function nt(_){_.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let _=ne.autoReset,O=Q.enabled,z=Q.autoUpdate,G=Q.needsUpdate,B=Q.type;se(),ne.autoReset=_,Q.enabled=O,Q.autoUpdate=z,Q.needsUpdate=G,Q.type=B}function st(_){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",_.statusMessage)}function rt(_){let O=_.target;O.removeEventListener("dispose",rt),_t(O)}function _t(_){yt(_),Nt.remove(_)}function yt(_){let O=Nt.get(_).programs;O!==void 0&&(O.forEach(function(z){mt.releaseProgram(z)}),_.isShaderMaterial&&mt.releaseShaderCache(_))}this.renderBufferDirect=function(_,O,z,G,B,lt){O===null&&(O=St);let gt=B.isMesh&&B.matrixWorld.determinant()<0,Mt=xh(_,O,z,G,B);dt.setMaterial(G,gt);let Et=z.index,Ut=1;if(G.wireframe===!0){if(Et=$.getWireframeAttribute(z),Et===void 0)return;Ut=2}let Rt=z.drawRange,Ct=z.attributes.position,ae=Rt.start*Ut,Oe=(Rt.start+Rt.count)*Ut;lt!==null&&(ae=Math.max(ae,lt.start*Ut),Oe=Math.min(Oe,(lt.start+lt.count)*Ut)),Et!==null?(ae=Math.max(ae,0),Oe=Math.min(Oe,Et.count)):Ct!=null&&(ae=Math.max(ae,0),Oe=Math.min(Oe,Ct.count));let fe=Oe-ae;if(fe<0||fe===1/0)return;Dt.setup(B,G,Mt,z,Et);let un,ie=Tt;if(Et!==null&&(un=tt.get(Et),ie=xt,ie.setIndex(un)),B.isMesh)G.wireframe===!0?(dt.setLineWidth(G.wireframeLinewidth*Vt()),ie.setMode(H.LINES)):ie.setMode(H.TRIANGLES);else if(B.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),dt.setLineWidth(Bt*Vt()),B.isLineSegments?ie.setMode(H.LINES):B.isLineLoop?ie.setMode(H.LINE_LOOP):ie.setMode(H.LINE_STRIP)}else B.isPoints?ie.setMode(H.POINTS):B.isSprite&&ie.setMode(H.TRIANGLES);if(B.isBatchedMesh)ie.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else if(B.isInstancedMesh)ie.renderInstances(ae,fe,B.count);else if(z.isInstancedBufferGeometry){let Bt=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,kr=Math.min(z.instanceCount,Bt);ie.renderInstances(ae,fe,kr)}else ie.render(ae,fe)};function Yt(_,O,z){_.transparent===!0&&_.side===Me&&_.forceSinglePass===!1?(_.side=De,_.needsUpdate=!0,Ss(_,O,z),_.side=Bn,_.needsUpdate=!0,Ss(_,O,z),_.side=Me):Ss(_,O,z)}this.compile=function(_,O,z=null){z===null&&(z=_),p=bt.get(z),p.init(),y.push(p),z.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),_!==z&&_.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights(x._useLegacyLights);let G=new Set;return _.traverse(function(B){let lt=B.material;if(lt)if(Array.isArray(lt))for(let gt=0;gt<lt.length;gt++){let Mt=lt[gt];Yt(Mt,z,B),G.add(Mt)}else Yt(lt,z,B),G.add(lt)}),y.pop(),p=null,G},this.compileAsync=function(_,O,z=null){let G=this.compile(_,O,z);return new Promise(B=>{function lt(){if(G.forEach(function(gt){Nt.get(gt).currentProgram.isReady()&&G.delete(gt)}),G.size===0){B(_);return}setTimeout(lt,10)}vt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Zt=null;function ue(_){Zt&&Zt(_)}function _e(){we.stop()}function Jt(){we.start()}let we=new Nl;we.setAnimationLoop(ue),typeof self<"u"&&we.setContext(self),this.setAnimationLoop=function(_){Zt=_,Ht.setAnimationLoop(_),_===null?we.stop():we.start()},Ht.addEventListener("sessionstart",_e),Ht.addEventListener("sessionend",Jt),this.render=function(_,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;_.matrixWorldAutoUpdate===!0&&_.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),Ht.enabled===!0&&Ht.isPresenting===!0&&(Ht.cameraAutoUpdate===!0&&Ht.updateCamera(O),O=Ht.getCamera()),_.isScene===!0&&_.onBeforeRender(x,_,O,T),p=bt.get(_,y.length),p.init(),y.push(p),pt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),X.setFromProjectionMatrix(pt),ot=this.localClippingEnabled,J=Ot.init(this.clippingPlanes,ot),v=ht.get(_,u.length),v.init(),u.push(v),rn(_,O,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(q,W),this.info.render.frame++,J===!0&&Ot.beginShadows();let z=p.state.shadowsArray;if(Q.render(z,_,O),J===!0&&Ot.endShadows(),this.info.autoReset===!0&&this.info.reset(),Xt.render(v,_),p.setupLights(x._useLegacyLights),O.isArrayCamera){let G=O.cameras;for(let B=0,lt=G.length;B<lt;B++){let gt=G[B];Fo(v,_,gt,gt.viewport)}}else Fo(v,_,O);T!==null&&(E.updateMultisampleRenderTarget(T),E.updateRenderTargetMipmap(T)),_.isScene===!0&&_.onAfterRender(x,_,O),Dt.resetDefaultState(),U=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function rn(_,O,z,G){if(_.visible===!1)return;if(_.layers.test(O.layers)){if(_.isGroup)z=_.renderOrder;else if(_.isLOD)_.autoUpdate===!0&&_.update(O);else if(_.isLight)p.pushLight(_),_.castShadow&&p.pushShadow(_);else if(_.isSprite){if(!_.frustumCulled||X.intersectsSprite(_)){G&&Lt.setFromMatrixPosition(_.matrixWorld).applyMatrix4(pt);let gt=et.update(_),Mt=_.material;Mt.visible&&v.push(_,gt,Mt,z,Lt.z,null)}}else if((_.isMesh||_.isLine||_.isPoints)&&(!_.frustumCulled||X.intersectsObject(_))){let gt=et.update(_),Mt=_.material;if(G&&(_.boundingSphere!==void 0?(_.boundingSphere===null&&_.computeBoundingSphere(),Lt.copy(_.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Lt.copy(gt.boundingSphere.center)),Lt.applyMatrix4(_.matrixWorld).applyMatrix4(pt)),Array.isArray(Mt)){let Et=gt.groups;for(let Ut=0,Rt=Et.length;Ut<Rt;Ut++){let Ct=Et[Ut],ae=Mt[Ct.materialIndex];ae&&ae.visible&&v.push(_,gt,ae,z,Lt.z,Ct)}}else Mt.visible&&v.push(_,gt,Mt,z,Lt.z,null)}}let lt=_.children;for(let gt=0,Mt=lt.length;gt<Mt;gt++)rn(lt[gt],O,z,G)}function Fo(_,O,z,G){let B=_.opaque,lt=_.transmissive,gt=_.transparent;p.setupLightsView(z),J===!0&&Ot.setGlobalState(x.clippingPlanes,z),lt.length>0&&gh(B,lt,O,z),G&&dt.viewport(S.copy(G)),B.length>0&&bs(B,O,z),lt.length>0&&bs(lt,O,z),gt.length>0&&bs(gt,O,z),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function gh(_,O,z,G){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;let lt=Pt.isWebGL2;ft===null&&(ft=new Mn(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")?us:Hn,minFilter:hs,samples:lt?4:0})),x.getDrawingBufferSize(wt),lt?ft.setSize(wt.x,wt.y):ft.setSize(Ca(wt.x),Ca(wt.y));let gt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(Y),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();let Mt=x.toneMapping;x.toneMapping=Un,bs(_,z,G),E.updateMultisampleRenderTarget(ft),E.updateRenderTargetMipmap(ft);let Et=!1;for(let Ut=0,Rt=O.length;Ut<Rt;Ut++){let Ct=O[Ut],ae=Ct.object,Oe=Ct.geometry,fe=Ct.material,un=Ct.group;if(fe.side===Me&&ae.layers.test(G.layers)){let ie=fe.side;fe.side=De,fe.needsUpdate=!0,zo(ae,z,G,Oe,fe,un),fe.side=ie,fe.needsUpdate=!0,Et=!0}}Et===!0&&(E.updateMultisampleRenderTarget(ft),E.updateRenderTargetMipmap(ft)),x.setRenderTarget(gt),x.setClearColor(Y,C),x.toneMapping=Mt}function bs(_,O,z){let G=O.isScene===!0?O.overrideMaterial:null;for(let B=0,lt=_.length;B<lt;B++){let gt=_[B],Mt=gt.object,Et=gt.geometry,Ut=G===null?gt.material:G,Rt=gt.group;Mt.layers.test(z.layers)&&zo(Mt,O,z,Et,Ut,Rt)}}function zo(_,O,z,G,B,lt){_.onBeforeRender(x,O,z,G,B,lt),_.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,_.matrixWorld),_.normalMatrix.getNormalMatrix(_.modelViewMatrix),B.onBeforeRender(x,O,z,G,_,lt),B.transparent===!0&&B.side===Me&&B.forceSinglePass===!1?(B.side=De,B.needsUpdate=!0,x.renderBufferDirect(z,O,G,B,_,lt),B.side=Bn,B.needsUpdate=!0,x.renderBufferDirect(z,O,G,B,_,lt),B.side=Me):x.renderBufferDirect(z,O,G,B,_,lt),_.onAfterRender(x,O,z,G,B,lt)}function Ss(_,O,z){O.isScene!==!0&&(O=St);let G=Nt.get(_),B=p.state.lights,lt=p.state.shadowsArray,gt=B.state.version,Mt=mt.getParameters(_,B.state,lt,O,z),Et=mt.getProgramCacheKey(Mt),Ut=G.programs;G.environment=_.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(_.isMeshStandardMaterial?F:b).get(_.envMap||G.environment),Ut===void 0&&(_.addEventListener("dispose",rt),Ut=new Map,G.programs=Ut);let Rt=Ut.get(Et);if(Rt!==void 0){if(G.currentProgram===Rt&&G.lightsStateVersion===gt)return Vo(_,Mt),Rt}else Mt.uniforms=mt.getUniforms(_),_.onBuild(z,Mt,x),_.onBeforeCompile(Mt,x),Rt=mt.acquireProgram(Mt,Et),Ut.set(Et,Rt),G.uniforms=Mt.uniforms;let Ct=G.uniforms;return(!_.isShaderMaterial&&!_.isRawShaderMaterial||_.clipping===!0)&&(Ct.clippingPlanes=Ot.uniform),Vo(_,Mt),G.needsLights=yh(_),G.lightsStateVersion=gt,G.needsLights&&(Ct.ambientLightColor.value=B.state.ambient,Ct.lightProbe.value=B.state.probe,Ct.directionalLights.value=B.state.directional,Ct.directionalLightShadows.value=B.state.directionalShadow,Ct.spotLights.value=B.state.spot,Ct.spotLightShadows.value=B.state.spotShadow,Ct.rectAreaLights.value=B.state.rectArea,Ct.ltc_1.value=B.state.rectAreaLTC1,Ct.ltc_2.value=B.state.rectAreaLTC2,Ct.pointLights.value=B.state.point,Ct.pointLightShadows.value=B.state.pointShadow,Ct.hemisphereLights.value=B.state.hemi,Ct.directionalShadowMap.value=B.state.directionalShadowMap,Ct.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ct.spotShadowMap.value=B.state.spotShadowMap,Ct.spotLightMatrix.value=B.state.spotLightMatrix,Ct.spotLightMap.value=B.state.spotLightMap,Ct.pointShadowMap.value=B.state.pointShadowMap,Ct.pointShadowMatrix.value=B.state.pointShadowMatrix),G.currentProgram=Rt,G.uniformsList=null,Rt}function ko(_){if(_.uniformsList===null){let O=_.currentProgram.getUniforms();_.uniformsList=Ui.seqWithValue(O.seq,_.uniforms)}return _.uniformsList}function Vo(_,O){let z=Nt.get(_);z.outputColorSpace=O.outputColorSpace,z.batching=O.batching,z.instancing=O.instancing,z.instancingColor=O.instancingColor,z.skinning=O.skinning,z.morphTargets=O.morphTargets,z.morphNormals=O.morphNormals,z.morphColors=O.morphColors,z.morphTargetsCount=O.morphTargetsCount,z.numClippingPlanes=O.numClippingPlanes,z.numIntersection=O.numClipIntersection,z.vertexAlphas=O.vertexAlphas,z.vertexTangents=O.vertexTangents,z.toneMapping=O.toneMapping}function xh(_,O,z,G,B){O.isScene!==!0&&(O=St),E.resetTextureUnits();let lt=O.fog,gt=G.isMeshStandardMaterial?O.environment:null,Mt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:An,Et=(G.isMeshStandardMaterial?F:b).get(G.envMap||gt),Ut=G.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Rt=!!z.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Ct=!!z.morphAttributes.position,ae=!!z.morphAttributes.normal,Oe=!!z.morphAttributes.color,fe=Un;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(fe=x.toneMapping);let un=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ie=un!==void 0?un.length:0,Bt=Nt.get(G),kr=p.state.lights;if(J===!0&&(ot===!0||_!==M)){let Ve=_===M&&G.id===U;Ot.setState(G,_,Ve)}let re=!1;G.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==kr.state.version||Bt.outputColorSpace!==Mt||B.isBatchedMesh&&Bt.batching===!1||!B.isBatchedMesh&&Bt.batching===!0||B.isInstancedMesh&&Bt.instancing===!1||!B.isInstancedMesh&&Bt.instancing===!0||B.isSkinnedMesh&&Bt.skinning===!1||!B.isSkinnedMesh&&Bt.skinning===!0||B.isInstancedMesh&&Bt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Bt.instancingColor===!1&&B.instanceColor!==null||Bt.envMap!==Et||G.fog===!0&&Bt.fog!==lt||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==Ot.numPlanes||Bt.numIntersection!==Ot.numIntersection)||Bt.vertexAlphas!==Ut||Bt.vertexTangents!==Rt||Bt.morphTargets!==Ct||Bt.morphNormals!==ae||Bt.morphColors!==Oe||Bt.toneMapping!==fe||Pt.isWebGL2===!0&&Bt.morphTargetsCount!==ie)&&(re=!0):(re=!0,Bt.__version=G.version);let Wn=Bt.currentProgram;re===!0&&(Wn=Ss(G,O,B));let Go=!1,$i=!1,Vr=!1,ve=Wn.getUniforms(),Xn=Bt.uniforms;if(dt.useProgram(Wn.program)&&(Go=!0,$i=!0,Vr=!0),G.id!==U&&(U=G.id,$i=!0),Go||M!==_){ve.setValue(H,"projectionMatrix",_.projectionMatrix),ve.setValue(H,"viewMatrix",_.matrixWorldInverse);let Ve=ve.map.cameraPosition;Ve!==void 0&&Ve.setValue(H,Lt.setFromMatrixPosition(_.matrixWorld)),Pt.logarithmicDepthBuffer&&ve.setValue(H,"logDepthBufFC",2/(Math.log(_.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ve.setValue(H,"isOrthographic",_.isOrthographicCamera===!0),M!==_&&(M=_,$i=!0,Vr=!0)}if(B.isSkinnedMesh){ve.setOptional(H,B,"bindMatrix"),ve.setOptional(H,B,"bindMatrixInverse");let Ve=B.skeleton;Ve&&(Pt.floatVertexTextures?(Ve.boneTexture===null&&Ve.computeBoneTexture(),ve.setValue(H,"boneTexture",Ve.boneTexture,E)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}B.isBatchedMesh&&(ve.setOptional(H,B,"batchingTexture"),ve.setValue(H,"batchingTexture",B._matricesTexture,E));let Gr=z.morphAttributes;if((Gr.position!==void 0||Gr.normal!==void 0||Gr.color!==void 0&&Pt.isWebGL2===!0)&&zt.update(B,z,Wn),($i||Bt.receiveShadow!==B.receiveShadow)&&(Bt.receiveShadow=B.receiveShadow,ve.setValue(H,"receiveShadow",B.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Xn.envMap.value=Et,Xn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),$i&&(ve.setValue(H,"toneMappingExposure",x.toneMappingExposure),Bt.needsLights&&vh(Xn,Vr),lt&&G.fog===!0&&ct.refreshFogUniforms(Xn,lt),ct.refreshMaterialUniforms(Xn,G,j,V,ft),Ui.upload(H,ko(Bt),Xn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ui.upload(H,ko(Bt),Xn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ve.setValue(H,"center",B.center),ve.setValue(H,"modelViewMatrix",B.modelViewMatrix),ve.setValue(H,"normalMatrix",B.normalMatrix),ve.setValue(H,"modelMatrix",B.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let Ve=G.uniformsGroups;for(let Wr=0,Ah=Ve.length;Wr<Ah;Wr++)if(Pt.isWebGL2){let Wo=Ve[Wr];Wt.update(Wo,Wn),Wt.bind(Wo,Wn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Wn}function vh(_,O){_.ambientLightColor.needsUpdate=O,_.lightProbe.needsUpdate=O,_.directionalLights.needsUpdate=O,_.directionalLightShadows.needsUpdate=O,_.pointLights.needsUpdate=O,_.pointLightShadows.needsUpdate=O,_.spotLights.needsUpdate=O,_.spotLightShadows.needsUpdate=O,_.rectAreaLights.needsUpdate=O,_.hemisphereLights.needsUpdate=O}function yh(_){return _.isMeshLambertMaterial||_.isMeshToonMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isShadowMaterial||_.isShaderMaterial&&_.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(_,O,z){Nt.get(_.texture).__webglTexture=O,Nt.get(_.depthTexture).__webglTexture=z;let G=Nt.get(_);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=z===void 0,G.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(_,O){let z=Nt.get(_);z.__webglFramebuffer=O,z.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(_,O=0,z=0){T=_,P=O,w=z;let G=!0,B=null,lt=!1,gt=!1;if(_){let Et=Nt.get(_);Et.__useDefaultFramebuffer!==void 0?(dt.bindFramebuffer(H.FRAMEBUFFER,null),G=!1):Et.__webglFramebuffer===void 0?E.setupRenderTarget(_):Et.__hasExternalTextures&&E.rebindTextures(_,Nt.get(_.texture).__webglTexture,Nt.get(_.depthTexture).__webglTexture);let Ut=_.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(gt=!0);let Rt=Nt.get(_).__webglFramebuffer;_.isWebGLCubeRenderTarget?(Array.isArray(Rt[O])?B=Rt[O][z]:B=Rt[O],lt=!0):Pt.isWebGL2&&_.samples>0&&E.useMultisampledRTT(_)===!1?B=Nt.get(_).__webglMultisampledFramebuffer:Array.isArray(Rt)?B=Rt[z]:B=Rt,S.copy(_.viewport),R.copy(_.scissor),N=_.scissorTest}else S.copy(Z).multiplyScalar(j).floor(),R.copy(K).multiplyScalar(j).floor(),N=at;if(dt.bindFramebuffer(H.FRAMEBUFFER,B)&&Pt.drawBuffers&&G&&dt.drawBuffers(_,B),dt.viewport(S),dt.scissor(R),dt.setScissorTest(N),lt){let Et=Nt.get(_.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+O,Et.__webglTexture,z)}else if(gt){let Et=Nt.get(_.texture),Ut=O||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Et.__webglTexture,z||0,Ut)}U=-1},this.readRenderTargetPixels=function(_,O,z,G,B,lt,gt){if(!(_&&_.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Nt.get(_).__webglFramebuffer;if(_.isWebGLCubeRenderTarget&&gt!==void 0&&(Mt=Mt[gt]),Mt){dt.bindFramebuffer(H.FRAMEBUFFER,Mt);try{let Et=_.texture,Ut=Et.format,Rt=Et.type;if(Ut!==tn&&ut.convert(Ut)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Ct=Rt===us&&(vt.has("EXT_color_buffer_half_float")||Pt.isWebGL2&&vt.has("EXT_color_buffer_float"));if(Rt!==Hn&&ut.convert(Rt)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Rt===Nn&&(Pt.isWebGL2||vt.has("OES_texture_float")||vt.has("WEBGL_color_buffer_float")))&&!Ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=_.width-G&&z>=0&&z<=_.height-B&&H.readPixels(O,z,G,B,ut.convert(Ut),ut.convert(Rt),lt)}finally{let Et=T!==null?Nt.get(T).__webglFramebuffer:null;dt.bindFramebuffer(H.FRAMEBUFFER,Et)}}},this.copyFramebufferToTexture=function(_,O,z=0){let G=Math.pow(2,-z),B=Math.floor(O.image.width*G),lt=Math.floor(O.image.height*G);E.setTexture2D(O,0),H.copyTexSubImage2D(H.TEXTURE_2D,z,0,0,_.x,_.y,B,lt),dt.unbindTexture()},this.copyTextureToTexture=function(_,O,z,G=0){let B=O.image.width,lt=O.image.height,gt=ut.convert(z.format),Mt=ut.convert(z.type);E.setTexture2D(z,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,z.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,z.unpackAlignment),O.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,G,_.x,_.y,B,lt,gt,Mt,O.image.data):O.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,G,_.x,_.y,O.mipmaps[0].width,O.mipmaps[0].height,gt,O.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,G,_.x,_.y,gt,Mt,O.image),G===0&&z.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),dt.unbindTexture()},this.copyTextureToTexture3D=function(_,O,z,G,B=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let lt=_.max.x-_.min.x+1,gt=_.max.y-_.min.y+1,Mt=_.max.z-_.min.z+1,Et=ut.convert(G.format),Ut=ut.convert(G.type),Rt;if(G.isData3DTexture)E.setTexture3D(G,0),Rt=H.TEXTURE_3D;else if(G.isDataArrayTexture||G.isCompressedArrayTexture)E.setTexture2DArray(G,0),Rt=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let Ct=H.getParameter(H.UNPACK_ROW_LENGTH),ae=H.getParameter(H.UNPACK_IMAGE_HEIGHT),Oe=H.getParameter(H.UNPACK_SKIP_PIXELS),fe=H.getParameter(H.UNPACK_SKIP_ROWS),un=H.getParameter(H.UNPACK_SKIP_IMAGES),ie=z.isCompressedTexture?z.mipmaps[B]:z.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,ie.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ie.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,_.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,_.min.z),z.isDataTexture||z.isData3DTexture?H.texSubImage3D(Rt,B,O.x,O.y,O.z,lt,gt,Mt,Et,Ut,ie.data):z.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Rt,B,O.x,O.y,O.z,lt,gt,Mt,Et,ie.data)):H.texSubImage3D(Rt,B,O.x,O.y,O.z,lt,gt,Mt,Et,Ut,ie),H.pixelStorei(H.UNPACK_ROW_LENGTH,Ct),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,ae),H.pixelStorei(H.UNPACK_SKIP_PIXELS,Oe),H.pixelStorei(H.UNPACK_SKIP_ROWS,fe),H.pixelStorei(H.UNPACK_SKIP_IMAGES,un),B===0&&G.generateMipmaps&&H.generateMipmap(Rt),dt.unbindTexture()},this.initTexture=function(_){_.isCubeTexture?E.setTextureCube(_,0):_.isData3DTexture?E.setTexture3D(_,0):_.isDataArrayTexture||_.isCompressedArrayTexture?E.setTexture2DArray(_,0):E.setTexture2D(_,0),dt.unbindTexture()},this.resetState=function(){P=0,w=0,T=null,dt.reset(),Dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===lo?"display-p3":"srgb",e.unpackColorSpace=jt.workingColorSpace===_r?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Kt?ei:Pl}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===ei?Kt:An}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},ja=class extends ps{};ja.prototype.isWebGL1Renderer=!0;var pr=class n{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new At(t),this.near=e,this.far=i}clone(){return new n(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},mr=class extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}};var gr=class extends Be{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ci=new $t,dl=new $t,js=[],pl=new bn,dg=new $t,rs=new Gt,as=new ni,ki=class extends Gt{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gr(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,dg)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new bn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ci),pl.copy(t.boundingBox).applyMatrix4(Ci),this.boundingBox.union(pl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ni),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,Ci),as.copy(t.boundingSphere).applyMatrix4(Ci),this.boundingSphere.union(as)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}raycast(t,e){let i=this.matrixWorld,s=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),as.copy(this.boundingSphere),as.applyMatrix4(i),t.ray.intersectsSphere(as)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ci),dl.multiplyMatrices(i,Ci),rs.matrixWorld=dl,rs.raycast(t,js);for(let o=0,a=js.length;o<a;o++){let c=js[o];c.instanceId=r,c.object=this,e.push(c)}js.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gr(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}};var wn=class extends qe{constructor(t,e,i,s,r,o,a,c,l){super(t,e,i,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var zn=class n extends Ie{constructor(t=1,e=1,i=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],d=[],m=[],g=0,v=[],p=i/2,u=0;y(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new qt(f,3)),this.setAttribute("normal",new qt(d,3)),this.setAttribute("uv",new qt(m,2));function y(){let A=new D,P=new D,w=0,T=(e-t)/i;for(let U=0;U<=r;U++){let M=[],S=U/r,R=S*(e-t)+t;for(let N=0;N<=s;N++){let Y=N/s,C=Y*c+a,I=Math.sin(C),V=Math.cos(C);P.x=R*I,P.y=-S*i+p,P.z=R*V,f.push(P.x,P.y,P.z),A.set(I,T,V).normalize(),d.push(A.x,A.y,A.z),m.push(Y,1-S),M.push(g++)}v.push(M)}for(let U=0;U<s;U++)for(let M=0;M<r;M++){let S=v[M][U],R=v[M+1][U],N=v[M+1][U+1],Y=v[M][U+1];h.push(S,R,Y),h.push(R,N,Y),w+=6}l.addGroup(u,w,0),u+=w}function x(A){let P=g,w=new kt,T=new D,U=0,M=A===!0?t:e,S=A===!0?1:-1;for(let N=1;N<=s;N++)f.push(0,p*S,0),d.push(0,S,0),m.push(.5,.5),g++;let R=g;for(let N=0;N<=s;N++){let C=N/s*c+a,I=Math.cos(C),V=Math.sin(C);T.x=M*V,T.y=p*S,T.z=M*I,f.push(T.x,T.y,T.z),d.push(0,S,0),w.x=I*.5+.5,w.y=V*.5*S+.5,m.push(w.x,w.y),g++}for(let N=0;N<s;N++){let Y=P+N,C=R+N;A===!0?h.push(C,C+1,Y):h.push(C+1,C,Y),U+=3}l.addGroup(u,U,A===!0?1:2),u+=U}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},ms=class n extends zn{constructor(t=1,e=1,i=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,i,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},qa=class n extends Ie{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],o=[];a(s),l(i),h(),this.setAttribute("position",new qt(r,3)),this.setAttribute("normal",new qt(r.slice(),3)),this.setAttribute("uv",new qt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new D,A=new D,P=new D;for(let w=0;w<e.length;w+=3)m(e[w+0],x),m(e[w+1],A),m(e[w+2],P),c(x,A,P,y)}function c(y,x,A,P){let w=P+1,T=[];for(let U=0;U<=w;U++){T[U]=[];let M=y.clone().lerp(A,U/w),S=x.clone().lerp(A,U/w),R=w-U;for(let N=0;N<=R;N++)N===0&&U===w?T[U][N]=M:T[U][N]=M.clone().lerp(S,N/R)}for(let U=0;U<w;U++)for(let M=0;M<2*(w-U)-1;M++){let S=Math.floor(M/2);M%2===0?(d(T[U][S+1]),d(T[U+1][S]),d(T[U][S])):(d(T[U][S+1]),d(T[U+1][S+1]),d(T[U+1][S]))}}function l(y){let x=new D;for(let A=0;A<r.length;A+=3)x.x=r[A+0],x.y=r[A+1],x.z=r[A+2],x.normalize().multiplyScalar(y),r[A+0]=x.x,r[A+1]=x.y,r[A+2]=x.z}function h(){let y=new D;for(let x=0;x<r.length;x+=3){y.x=r[x+0],y.y=r[x+1],y.z=r[x+2];let A=p(y)/2/Math.PI+.5,P=u(y)/Math.PI+.5;o.push(A,1-P)}g(),f()}function f(){for(let y=0;y<o.length;y+=6){let x=o[y+0],A=o[y+2],P=o[y+4],w=Math.max(x,A,P),T=Math.min(x,A,P);w>.9&&T<.1&&(x<.2&&(o[y+0]+=1),A<.2&&(o[y+2]+=1),P<.2&&(o[y+4]+=1))}}function d(y){r.push(y.x,y.y,y.z)}function m(y,x){let A=y*3;x.x=t[A+0],x.y=t[A+1],x.z=t[A+2]}function g(){let y=new D,x=new D,A=new D,P=new D,w=new kt,T=new kt,U=new kt;for(let M=0,S=0;M<r.length;M+=9,S+=6){y.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),A.set(r[M+6],r[M+7],r[M+8]),w.set(o[S+0],o[S+1]),T.set(o[S+2],o[S+3]),U.set(o[S+4],o[S+5]),P.copy(y).add(x).add(A).divideScalar(3);let R=p(P);v(w,S+0,y,R),v(T,S+2,x,R),v(U,S+4,A,R)}}function v(y,x,A,P){P<0&&y.x===1&&(o[x]=y.x-1),A.x===0&&A.z===0&&(o[x]=P/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function u(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.details)}};var xr=class n extends qa{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},vr=class n extends Ie{constructor(t=.5,e=1,i=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:o},i=Math.max(3,i),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=t,d=(e-t)/s,m=new D,g=new kt;for(let v=0;v<=s;v++){for(let p=0;p<=i;p++){let u=r+p/i*o;m.x=f*Math.cos(u),m.y=f*Math.sin(u),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/e+1)/2,g.y=(m.y/e+1)/2,h.push(g.x,g.y)}f+=d}for(let v=0;v<s;v++){let p=v*(i+1);for(let u=0;u<i;u++){let y=u+p,x=y,A=y+i+1,P=y+i+2,w=y+1;a.push(x,A,w),a.push(A,P,w)}}this.setIndex(a),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}};var En=class n extends Ie{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new D,d=new D,m=[],g=[],v=[],p=[];for(let u=0;u<=i;u++){let y=[],x=u/i,A=0;u===0&&o===0?A=.5/e:u===i&&c===Math.PI&&(A=-.5/e);for(let P=0;P<=e;P++){let w=P/e;f.x=-t*Math.cos(s+w*r)*Math.sin(o+x*a),f.y=t*Math.cos(o+x*a),f.z=t*Math.sin(s+w*r)*Math.sin(o+x*a),g.push(f.x,f.y,f.z),d.copy(f).normalize(),v.push(d.x,d.y,d.z),p.push(w+A,1-x),y.push(l++)}h.push(y)}for(let u=0;u<i;u++)for(let y=0;y<e;y++){let x=h[u][y+1],A=h[u][y],P=h[u+1][y],w=h[u+1][y+1];(u!==0||o>0)&&m.push(x,A,w),(u!==i-1||c<Math.PI)&&m.push(A,P,w)}this.setIndex(m),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Vi=class n extends Ie{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new D,f=new D,d=new D;for(let m=0;m<=i;m++)for(let g=0;g<=s;g++){let v=g/s*r,p=m/i*Math.PI*2;f.x=(t+e*Math.cos(p))*Math.cos(v),f.y=(t+e*Math.cos(p))*Math.sin(v),f.z=e*Math.sin(p),a.push(f.x,f.y,f.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(f,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/s),l.push(m/i)}for(let m=1;m<=i;m++)for(let g=1;g<=s;g++){let v=(s+1)*m+g-1,p=(s+1)*(m-1)+g-1,u=(s+1)*(m-1)+g,y=(s+1)*m+g;o.push(v,p,y),o.push(p,u,y)}this.setIndex(o),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(c,3)),this.setAttribute("uv",new qt(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var ge=class extends ii{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rl,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Gi=class extends ge{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new kt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new At(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new At(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new At(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};function qs(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function pg(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var Wi=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(r=s,s=e[++i],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(i=2,r=a);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=e[--i-1],t>=r)break t}o=i,i=0;break e}break n}for(;i<o;){let a=i+o>>>1;t<e[a]?o=a:i=a+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=i[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ya=class extends Wi{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sc,endingEnd:Sc}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case _c:r=t,a=2*e-i;break;case wc:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=i}if(c===void 0)switch(this.getSettings_().endingEnd){case _c:o=t,c=2*i-e;break;case wc:o=1,c=i+s[1]-s[0];break;default:o=t-1,c=e}let l=(i-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(i-e)/(s-e),v=g*g,p=v*g,u=-d*p+2*d*v-d*g,y=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,x=(-1-m)*p+(1.5+m)*v+.5*g,A=m*p-m*v;for(let P=0;P!==a;++P)r[P]=u*o[h+P]+y*o[l+P]+x*o[c+P]+A*o[f+P];return r}},Za=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(i-e)/(s-e),f=1-h;for(let d=0;d!==a;++d)r[d]=o[l+d]*f+o[c+d]*h;return r}},Ja=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},en=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=qs(e,this.TimeBufferType),this.values=qs(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:qs(t.times,Array),values:qs(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new Ja(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ya(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Zs:e=this.InterpolantFactoryMethodDiscrete;break;case Js:e=this.InterpolantFactoryMethodLinear;break;case Kr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Zs;case this.InterpolantFactoryMethodLinear:return Js;case this.InterpolantFactoryMethodSmooth:return Kr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,o=s-1;for(;r!==s&&i[r]<t;)++r;for(;o!==-1&&i[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=i.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=i[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&pg(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Kr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let f=a*i,d=f-i,m=f+i;for(let g=0;g!==i;++g){let v=e[f+g];if(v!==e[d+g]||v!==e[m+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let f=a*i,d=o*i;for(let m=0;m!==i;++m)e[d+m]=e[f+m]}++o}}if(r>0){t[o]=t[r];for(let a=r*i,c=o*i,l=0;l!==i;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};en.prototype.TimeBufferType=Float32Array;en.prototype.ValueBufferType=Float32Array;en.prototype.DefaultInterpolation=Js;var ri=class extends en{};ri.prototype.ValueTypeName="bool";ri.prototype.ValueBufferType=Array;ri.prototype.DefaultInterpolation=Zs;ri.prototype.InterpolantFactoryMethodLinear=void 0;ri.prototype.InterpolantFactoryMethodSmooth=void 0;var Ka=class extends en{};Ka.prototype.ValueTypeName="color";var Qa=class extends en{};Qa.prototype.ValueTypeName="number";var $a=class extends Wi{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(i-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)on.slerpFlat(r,0,o,l-a,o,l,c);return r}},gs=class extends en{InterpolantFactoryMethodLinear(t){return new $a(this.times,this.values,this.getValueSize(),t)}};gs.prototype.ValueTypeName="quaternion";gs.prototype.DefaultInterpolation=Js;gs.prototype.InterpolantFactoryMethodSmooth=void 0;var ai=class extends en{};ai.prototype.ValueTypeName="string";ai.prototype.ValueBufferType=Array;ai.prototype.DefaultInterpolation=Zs;ai.prototype.InterpolantFactoryMethodLinear=void 0;ai.prototype.InterpolantFactoryMethodSmooth=void 0;var to=class extends en{};to.prototype.ValueTypeName="vector";var eo=class{constructor(t,e,i){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let m=l[f],g=l[f+1];if(m.global&&(m.lastIndex=0),m.test(h))return g}return null}}},mg=new eo,no=class{constructor(t){this.manager=t!==void 0?t:mg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};no.DEFAULT_MATERIAL_NAME="__DEFAULT";var yr=class extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new At(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}},Ar=class extends yr{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ba=new $t,ml=new D,gl=new D,io=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ds,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;ml.setFromMatrixPosition(t.matrixWorld),e.position.copy(ml),gl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(gl),e.updateMatrixWorld(),ba.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ba),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(ba)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var so=class extends io{constructor(){super(new ur(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends yr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new so}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var br=class{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=xl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let e=xl();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}};function xl(){return(typeof performance>"u"?Date:performance).now()}var uo="\\[\\]\\.:\\/",gg=new RegExp("["+uo+"]","g"),fo="[^"+uo+"]",xg="[^"+uo.replace("\\.","")+"]",vg=/((?:WC+[\/:])*)/.source.replace("WC",fo),yg=/(WCOD+)?/.source.replace("WCOD",xg),Ag=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",fo),Mg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",fo),bg=new RegExp("^"+vg+yg+Ag+Mg+"$"),Sg=["material","materials","bones","map"],ro=class{constructor(t,e,i){let s=i||ee.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ee=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(gg,"")}static parseTrackName(t){let e=bg.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);Sg.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=i(a.children);if(c)return c}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ee.Composite=ro;ee.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ee.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ee.prototype.GetterByBindingType=[ee.prototype._getValue_direct,ee.prototype._getValue_array,ee.prototype._getValue_arrayElement,ee.prototype._getValue_toArray];ee.prototype.SetterByBindingTypeAndVersioning=[[ee.prototype._setValue_direct,ee.prototype._setValue_direct_setNeedsUpdate,ee.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_array,ee.prototype._setValue_array_setNeedsUpdate,ee.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_arrayElement,ee.prototype._setValue_arrayElement_setNeedsUpdate,ee.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ee.prototype._setValue_fromArray,ee.prototype._setValue_fromArray_setNeedsUpdate,ee.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var i0=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ao}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ao);var po={12:[0,-1],13:[0,1],14:[-1,0],15:[1,0]},_g=[[0,-1],[1,-1],[1,0],[1,1],[0,1],[-1,1],[-1,0],[-1,-1]],wg=n=>Math.abs(n)<.18?0:(n-Math.sign(n)*.18)/(1-.18),oi=n=>Math.max(-1,Math.min(1,n)),ji=n=>Number.isFinite(n)?n:0,Eg=n=>Math.abs(n)<.3?n:0,zl=(n,t)=>{let e=n-t;return wg(oi(e/(e>0?1-t:1+t)))},Tg=n=>Math.abs(n)>1.05?[0,0]:_g[Math.round((n+1)*3.5)&7],Tr=class{constructor({extraPads:t=()=>[]}={}){this.extraPads=t,this.keys={},this.keyEvents=[],this.state=new Map,this.t=0,addEventListener("keydown",i=>{if(this.keys[i.code]=!0,i.repeat)return;let s={Space:"drop",Enter:"drop",KeyT:"toggle",KeyP:"parent",KeyM:"music",Escape:"escape"};s[i.code]&&(this.keyEvents.push({type:s[i.code],pad:-1}),i.preventDefault())}),addEventListener("keyup",i=>{this.keys[i.code]=!1}),addEventListener("blur",()=>{this.keys={}});let e=i=>{i.gamepad&&this.state.delete(i.gamepad.index)};addEventListener("gamepadconnected",e),addEventListener("gamepaddisconnected",e)}padState(t){let e=this.state.get(t.index);if(!e||e.id!==t.id){let i=[ji(t.axes[0]),ji(t.axes[1])];e={id:t.id,rest:i.map(Eg),anchor:i,still:0,hatAxis:-1,btn:[],hold:null},this.state.set(t.index,e)}return e}poll(t,{holdToggle:e,hatMoves:i=!0}){this.t+=t;let s=this.keyEvents.splice(0),r=[...navigator.getGamepads?navigator.getGamepads():[],...this.extraPads()],o=[],a=new Set,c=0;for(let f of r){if(!f||!f.connected)continue;a.add(f.index);let d=this.padState(f),m=[ji(f.axes[0]),ji(f.axes[1])];Math.abs(m[0]-d.anchor[0])<.03&&Math.abs(m[1]-d.anchor[1])<.03?d.still+=t:(d.still=0,d.anchor=m),d.still>=1.5&&m.forEach((u,y)=>{Math.abs(u)<.3&&(d.rest[y]=u)}),d.hatAxis<0&&(d.hatAxis=f.axes.findIndex((u,y)=>y>=4&&Math.abs(u)>1.05));let[g,v]=d.hatAxis>=0?Tg(ji(f.axes[d.hatAxis])):[0,0],p=[];f.buttons.forEach((u,y)=>{let x=!!u&&(u.pressed||u.value>.5),A=d.btn[y]||(d.btn[y]={on:!1,t:-1/0}),P=!1,w=!1;if(x!==A.on&&this.t-A.t>=.12&&(A.on=x,A.t=this.t,P=x,w=!x),A.on&&p.push(y),f.mapping==="standard"&&po[y]){A.on&&(g+=po[y][0],v+=po[y][1]);return}e&&y===1?(P&&(d.hold=0),A.on&&d.hold!==null&&(d.hold+=t,c=Math.max(c,d.hold/1),d.hold>=1&&(d.hold=null,s.push({type:"toggle",pad:f.index}))),w&&d.hold!==null&&(d.hold=null,s.push({type:"drop",pad:f.index}))):P&&s.push({type:"drop",pad:f.index})}),e||(d.hold=null),o.push({index:f.index,id:f.id,pressed:p,axes:[...f.axes.slice(0,4)].map(ji),hat:[oi(g),oi(v)],x:oi(zl(m[0],d.rest[0])+(i?g:0)),y:oi(zl(m[1],d.rest[1])+(i?v:0))})}for(let f of this.state.keys())a.has(f)||this.state.delete(f);o.sort((f,d)=>f.index-d.index);let l=this.keys,h={x:oi((l.ArrowRight||l.KeyD?1:0)-(l.ArrowLeft||l.KeyA?1:0)),y:oi((l.ArrowDown||l.KeyS?1:0)-(l.ArrowUp||l.KeyW?1:0))};return{pads:o,kb:h,events:s,holdProgress:c}}};function qi(n){let t=n>>>0||1;return()=>{t=t+1831565813|0;let e=Math.imul(t^t>>>15,1|t);return e=e+Math.imul(e^e>>>7,61|e)^e,((e^e>>>14)>>>0)/4294967296}}var ci=.2,kn=.9,Yi=.25,Fe=kn-Yi,li=Math.PI*2,kl=n=>n*n*(3-2*n),Vl=n=>n-Math.sin(li*n)/li,be={straight:n=>({type:"straight",len:n,at:()=>({yaw:0,pitch:0,bank:0})}),station:n=>({type:"station",len:n,station:!0,at:()=>({yaw:0,pitch:0,bank:0})}),slope:(n,t)=>({type:"slope",len:n,at:()=>({yaw:0,pitch:t,bank:0})}),drop:(n,t)=>({type:"drop",len:n,at:e=>({yaw:0,pitch:-t*Math.sin(Math.PI*e)**2,bank:0})}),hill:(n,t)=>({type:"hill",len:n,at:e=>({yaw:0,pitch:t*Math.sin(li*e),bank:0})}),turn:(n,t,e)=>({type:"turn",len:n,at:i=>({yaw:t*kl(i),pitch:0,bank:-Math.sign(t)*e*Math.sin(Math.PI*i)})}),loop:(n,t)=>({type:"loop",len:li*n*1.25,tube:!0,at:e=>({yaw:0,pitch:li*Vl(e),bank:0,side:t/(li*n*1.25)*2*Math.sin(Math.PI*e)**2})}),twist:(n,t)=>({type:"twist",len:n,tube:!0,at:e=>({yaw:0,pitch:-.08*Math.sin(Math.PI*e),bank:li*t*Vl(e)})}),kicker:(n,t)=>({type:"kicker",len:n,at:e=>({yaw:0,pitch:t*Math.sin(Math.PI*Math.min(1,e*1.6)/2),bank:0})}),gap:n=>({type:"gap",len:n,gap:!0,at:t=>({yaw:0,pitch:-.25*t,bank:0})}),landing:n=>({type:"landing",len:n,open:1.5,at:t=>({yaw:0,pitch:-.25*(1-kl(t)),bank:0})})};function Pg(n,t=.5){let e=qi(n),i=a=>a[Math.floor(e()*a.length)],s=[be.station(10)],r=0,o=3+Math.floor(e()*2);for(let a=0;a<o;a++){s.push(be.drop(20+e()*8,.32+e()*.12+t*.08));let c=1,l=3+Math.floor(e()*2)+Math.round(t*2);for(let h=0;h<l;h++){let f=["turn","turn","drop","hill","straight"];c>=1&&f.push("loop","twist"),t>.5&&h>0&&!s.some(m=>m.type==="gap")&&f.push("jump");let d=i(f);if(d==="turn"){let m=(.6+e()*.9)*(e()<.5?-1:1);Math.abs(r+m)>1.7&&(m=-m),r+=m,s.push(be.turn(14+Math.abs(m)*14,m,.35+e()*.25))}else if(d==="drop")s.push(be.drop(18+e()*14,.3+e()*.25+t*.1));else if(d==="hill")s.push(be.hill(16+e()*8,.18+e()*.12));else if(d==="straight")s.push(be.straight(6+e()*8));else if(d==="loop"){let m=4.5+e()*2;s.push({...be.drop(16,.45),boost:Math.sqrt(4.4*9.81*m)},be.loop(m,(e()<.5?-1:1)*4.6),be.straight(5)),c=0;continue}else if(d==="twist"){s.push(be.twist(16+e()*8,1)),c=0;continue}else d==="jump"&&s.push(be.drop(16,.4),be.kicker(5,.2),be.gap(2.6+t*1.6),be.landing(12));c++}s.push(be.straight(6),be.station(12))}return s}function Gl(n,t=.5,e=Pg(n,t)){let i=[],s=[],r=[],o=[],a=[],c=[],l=[],h=0,f=0,d=0,m=0,g=[];e.forEach((R,N)=>{let Y=Math.max(2,Math.round(R.len/ci)),C=m;g.push(i.length/3);for(let I=0;I<Y;I++){let V=(I+.5)/Y,j=R.at(V),q=C+j.yaw,W=j.pitch,Z=-Math.sin(q)*Math.cos(W),K=Math.sin(W),at=-Math.cos(q)*Math.cos(W);h+=Z*ci+Math.cos(q)*(j.side||0)*ci,f+=K*ci,d+=at*ci-Math.sin(q)*(j.side||0)*ci,i.push(h,f,d),s.push(Math.sin(q)*Math.sin(W),Math.cos(W),Math.cos(q)*Math.sin(W)),r.push(j.bank||0),o.push((R.tube?1:0)|(R.gap?2:0)|(R.station?4:0)),a.push(R.open??1.15),l.push(R.boost&&V>.55?R.boost:0),c.push(N)}m=C+R.at(1).yaw});let v=i.length/3,p=1/0;for(let R=0;R<v;R++)p=Math.min(p,i[R*3+1]);for(let R=0;R<v;R++)i[R*3+1]+=4-p;let u=Float32Array.from(i),y=new Float32Array(v*3),x=new Float32Array(v*3),A=new Float32Array(v*3),P=new Float32Array(v*3),w=new Float32Array(v);for(let R=1;R<v;R++)w[R]=w[R-1]+Math.hypot(u[R*3]-u[R*3-3],u[R*3+1]-u[R*3-2],u[R*3+2]-u[R*3-1]);for(let R=0;R<v;R++){let N=Math.max(0,R-1),Y=Math.min(v-1,R+1),C=u[Y*3]-u[N*3],I=u[Y*3+1]-u[N*3+1],V=u[Y*3+2]-u[N*3+2],j=Math.hypot(C,I,V)||1;y[R*3]=C/j,y[R*3+1]=I/j,y[R*3+2]=V/j}for(let R=0;R<v;R++){let N=y[R*3],Y=y[R*3+1],C=y[R*3+2],I=s[R*3],V=s[R*3+1],j=s[R*3+2],q=I*N+V*Y+j*C;I-=q*N,V-=q*Y,j-=q*C;let W=Math.hypot(I,V,j)||1;I/=W,V/=W,j/=W,x[R*3]=I,x[R*3+1]=V,x[R*3+2]=j,A[R*3]=Y*j-C*V,A[R*3+1]=C*I-N*j,A[R*3+2]=N*V-Y*I}for(let R=0;R<v;R++){let N=Math.max(0,R-1),Y=Math.min(v-1,R+1),C=w[Y]-w[N]||1;for(let I=0;I<3;I++)P[R*3+I]=(y[Y*3+I]-y[N*3+I])/C}let T=qi(n*7+3),U=g.map((R,N)=>[R,N]).filter(([,R])=>R>0&&e[R].station).map(([R,N])=>w[Math.min(v-1,R+Math.round(e[N].len/ci/2))]),M=g.map((R,N)=>[R,N]).filter(([,R])=>e[R].station).map(([R,N])=>({s0:w[R],s1:w[Math.min(v-1,(g[N+1]??v)-1)]})),S=[];for(let R=2;R<e.length-1;R++){let N=e[R];if(N.tube||N.gap||N.station||N.type==="kicker"||N.type==="landing"||T()<.35)continue;let Y=g[R],C=(g[R+1]??v)-1,I=Math.floor(Y+(C-Y)*(.3+T()*.4));S.push({s:w[I],phi:(T()<.5?-1:1)*(.35+T()*.3),got:!1})}return{seed:n,difficulty:t,n:v,p:u,T:y,U:x,B:A,K:P,s:w,bank:Float32Array.from(r),flag:Uint8Array.from(o),open:Float32Array.from(a),seg:Uint16Array.from(c),boost:Float32Array.from(l),segs:e.map(R=>R.type),segStart:g,length:w[v-1],checkpoints:U,stations:M,gems:S}}function mo(n,t,e=0){let i=Math.max(0,Math.min(n.n-2,e));for(;i<n.n-2&&n.s[i+1]<=t;)i++;for(;i>0&&n.s[i]>t;)i--;return i}function Vn(n,t,e,i={}){let s=mo(n,t,e),r=s+1,o=Math.min(1,Math.max(0,(t-n.s[s])/(n.s[r]-n.s[s]||1))),a=(c,l)=>{let h=i[l]||(i[l]=[0,0,0]);for(let f=0;f<3;f++)h[f]=c[s*3+f]+(c[r*3+f]-c[s*3+f])*o;return h};return a(n.p,"p"),a(n.T,"T"),a(n.U,"U"),a(n.B,"B"),a(n.K,"K"),i.i=s,i.bank=n.bank[s]+(n.bank[r]-n.bank[s])*o,i.tube=!!(n.flag[s]&1),i.gap=!!(n.flag[s]&2),i.station=!!(n.flag[s]&4),i.boost=n.boost?n.boost[s]:0,i.open=n.open[s],i}function Rg(n,t=12){let i=new Map,s=(o,a,c)=>`${o},${a},${c}`;for(let o=0;o<n.n;o+=2){let a=s(Math.floor(n.p[o*3]/3),Math.floor(n.p[o*3+1]/3),Math.floor(n.p[o*3+2]/3));(i.get(a)||i.set(a,[]).get(a)).push(o)}let r=1/0;for(let o=0;o<n.n;o+=2){let a=Math.floor(n.p[o*3]/3),c=Math.floor(n.p[o*3+1]/3),l=Math.floor(n.p[o*3+2]/3);for(let h=-1;h<=1;h++)for(let f=-1;f<=1;f++)for(let d=-1;d<=1;d++)for(let m of i.get(s(a+h,c+f,l+d))||[])Math.abs(n.s[o]-n.s[m])<t||(r=Math.min(r,Math.hypot(n.p[o*3]-n.p[m*3],n.p[o*3+1]-n.p[m*3+1],n.p[o*3+2]-n.p[m*3+2])))}return r}function Wl(n,t=.5){for(let e=0;e<40;e++){let i=Gl(n+e*1e3,t);if(Rg(i)>3)return i}return Gl(n,t)}var ze={g:9.81,roll:5/7,launchMin:4,launchMax:24,catch:12,stopTime:3.5,stuckTime:6,dropHeight:3,brake:6,rolling:.12,drag:.0035,steer:9,sideDamp:1.6,assist:0,hop:4.2,maxSpeed:32,airTimeout:3.5},Zi={kid:{assist:10,airAssist:7,openBonus:.45,launchMax:15,boosters:!0,label:"KID"},adult:{assist:0,airAssist:0,openBonus:0,launchMax:24,boosters:!1,label:"ADULT"}};function jl(n){let t=Zi[n]||Zi.kid;return ze.assist=t.assist,ze.boosters=t.boosters,ze.airAssist=t.airAssist,ze.openBonus=t.openBonus,ze.launchMax=t.launchMax,t}ze.openBonus=0;ze.airAssist=0;ze.airSteer=4;var Xl=Math.PI*2,go=n=>n-Xl*Math.round(n/Xl),Ye=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Pr=class{constructor(t){this.track=t,this.reset(Math.min(6,t.length/2))}reset(t){let e=Vn(this.track,t,0);this.s=t,this.v=0,this.w=0,this.phi=-e.bank,this.hint=e.i,this.onTrack=!0,this.air=0,this.ready=!0,this.launchedAt=-1e9,this.still=0,this.noProgress=0,this.mark=t,this.pos=[0,0,0],this.vel=[0,0,0],this.checkpoint=t,this.best=t,this.finished=!1,this.spin=0,this.events=[],this.press=0,this.syncPos()}frame(){return Vn(this.track,this.s,this.hint,this._f||(this._f={}))}syncPos(){let t=this.frame();this.hint=t.i;let e=Math.cos(this.phi),i=Math.sin(this.phi);for(let s=0;s<3;s++){let r=-e*t.U[s]+i*t.B[s],o=i*t.U[s]+e*t.B[s];this.pos[s]=t.p[s]+r*Fe,this.vel[s]=t.T[s]*this.v+o*Fe*this.w}return t}launch(t){if(!this.ready||!this.onTrack)return 0;let e=ze,i=e.launchMin+(e.launchMax-e.launchMin)*Math.max(0,Math.min(1,t));return this.v=Math.max(this.v,i),this.ready=!1,this.still=0,this.noProgress=0,this.mark=this.s,this.launchedAt=this.s,this.events.push("launch"),i}step(t,e){let i=ze;this.events.length=0,this.onTrack?this.stepTrack(t,e,i):this.stepAir(t,i,e),this.spin+=(this.onTrack?this.v:Math.hypot(...this.vel))*t/.25;let s=this.track.stations[this.track.stations.length-1],r=s&&this.track.stations.length>1?s.s0:this.track.length-4;!this.finished&&this.onTrack&&this.s>=r&&(this.finished=!0,this.events.push("finish"));for(let o of this.track.checkpoints)o>this.checkpoint&&this.s>=o&&this.onTrack&&(this.checkpoint=o,this.events.push("checkpoint"));this.best=Math.max(this.best,this.s)}stepTrack(t,e,i){let s=this.frame();this.hint=s.i;let r=Math.cos(this.phi),o=Math.sin(this.phi),a=[0,0,0],c=[0,0,0],l=[0,-i.g,0];for(let A=0;A<3;A++)a[A]=-r*s.U[A]+o*s.B[A],c[A]=o*s.U[A]+r*s.B[A],l[A]-=s.K[A]*this.v*this.v;let h=i.roll*Ye(l,s.T);e.brake&&(h-=Math.sign(this.v)*Math.min(i.brake,Math.abs(this.v)/t));let f=s.station&&Math.abs(this.s-this.launchedAt)>14;f&&(h=-Math.sign(this.v)*Math.min(i.catch,Math.abs(this.v)/t)),i.boosters&&s.boost&&this.v<s.boost?(h=Math.max(h,30),this.boosting||this.events.push("boost"),this.boosting=!0):this.boosting=!1,h-=Math.sign(this.v)*i.rolling+i.drag*this.v*Math.abs(this.v),this.v=Math.max(-i.maxSpeed,Math.min(i.maxSpeed,this.v+h*t));let d=go(this.phi+s.bank),m=(i.roll*Ye(l,c)+i.steer*(e.steer||0))/Fe-i.sideDamp*this.w-i.assist*d;this.w+=m*t,this.phi+=this.w*t;let g=Ye(l,a)+Fe*this.w*this.w;this.press=g/i.g;let v=this.s;this.s+=this.v*t,this.s<0&&(this.s=0,this.v=Math.max(0,-this.v*.3)),this.s>this.track.length&&(this.s=this.track.length,this.v=Math.min(this.v,0));let p=this.syncPos();if(this.still=Math.abs(this.v)<.5?this.still+t:0,this.s>this.mark+2?(this.mark=this.s,this.noProgress=0):this.noProgress+=t,!this.ready&&f&&Math.abs(this.v)<.05&&(this.ready=!0,this.events.push("ready")),!this.ready&&!this.finished&&(this.still>i.stopTime||this.noProgress>i.stuckTime)){this.respawn("stopped");return}let u=go(this.phi+p.bank),y=!p.tube&&Math.abs(u)>p.open+i.openBonus,x=!p.tube&&g<0;if(p.gap||y||x||e.hop&&g>0){if(e.hop&&!p.gap&&!y&&!x){for(let A=0;A<3;A++)this.vel[A]-=a[A]*i.hop;this.events.push("hop")}this.onTrack=!1,this.air=0,this.events.push("fly")}}stepAir(t,e,i={}){this.vel[1]-=e.g*t;let s=Math.hypot(...this.vel);for(let g=0;g<3;g++)this.vel[g]-=e.drag*s*this.vel[g]*t,this.pos[g]+=this.vel[g]*t;this.air+=t;let r=this.frame();for(let g=0;g<3;g++){let v=[this.pos[0]-r.p[0],this.pos[1]-r.p[1],this.pos[2]-r.p[2]];this.s=Math.max(0,Math.min(this.track.length,this.s+Ye(v,r.T))),r=this.frame(),this.hint=r.i}let o=[this.pos[0]-r.p[0],this.pos[1]-r.p[1],this.pos[2]-r.p[2]],a=Ye(o,r.B),c=Ye(this.vel,r.B),l=e.airSteer*(i.steer||0)-e.airAssist*a-(e.airAssist?2.5*c:0);for(let g=0;g<3;g++)this.vel[g]+=r.B[g]*l*t;let h=Ye(o,r.T),f=[o[0]-r.T[0]*h,o[1]-r.T[1]*h,o[2]-r.T[2]*h],d=Math.hypot(...f);if(Math.abs(h)<.6&&!r.gap&&d>=Fe-.02&&d<Fe+.45){let g=f.map(u=>u/(d||1)),v=Math.atan2(Ye(g,r.B),-Ye(g,r.U));if((r.tube||Math.abs(go(v+r.bank))<=r.open+e.openBonus)&&Ye(this.vel,g)>0&&d<Fe+.25){this.phi=v,this.v=Ye(this.vel,r.T);let u=[Math.sin(v)*r.U[0]+Math.cos(v)*r.B[0],Math.sin(v)*r.U[1]+Math.cos(v)*r.B[1],Math.sin(v)*r.U[2]+Math.cos(v)*r.B[2]];this.w=Ye(this.vel,u)/Fe*.6,this.onTrack=!0,this.droppingIn=!1,this.events.push("land"),this.syncPos();return}}let m=this.pos[1]<-2||this.air>e.airTimeout;m&&!this.droppingIn?this.respawn("fell"):m&&this.reset(this.checkpoint)}respawn(t="fell"){let e=this.checkpoint;this.reset(e),this.checkpoint=e,this.launchedAt=-1e9,this.ready=!1;let i=this.syncPos();for(let s=0;s<3;s++)this.pos[s]=i.p[s];this.pos[1]+=ze.dropHeight,this.vel=[0,0,0],this.onTrack=!1,this.air=0,this.droppingIn=!0,this.lastRespawn=t,this.events.push("respawn")}};var u0=Math.PI*2,Cg=4;function ql(n,t){let e=new je,i=t==="adult"?[new At(3835647),new At(8599788)]:[new At(16760331),new At(16471559)],s=new At(16777215),r=new At(448160),o=t!=="adult",a=new At(62975),c=new At(16777215),l=[],h=null;for(let A=0;A<n.n;A++){let P=n.flag[A]&2,w=!!(n.flag[A]&1);if(P){h=null;continue}(!h||h.tube!==w)&&(h={tube:w,idx:[]},l.push(h),l.length>1&&A>0&&!(n.flag[A-1]&2)&&h.idx.push(A-1)),h.idx.push(A)}let f=new ge({vertexColors:!0,roughness:.45,metalness:.05,side:Me}),d=new Gi({vertexColors:!0,roughness:.1,transmission:0,transparent:!0,opacity:.38,side:Me,depthWrite:!1});for(let A of l){let w=A.idx.filter((C,I)=>I%1===0);if(w.length<2)continue;let T=A.tube?28:16,U=[],M=[],S=[],R=[];w.forEach((C,I)=>{let V=A.tube?Math.PI:n.open[C]+.22,j=n.flag[C]&4,q=i[Math.floor(n.s[C]/Cg)%2];for(let W=0;W<=T;W++){let Z=-V+2*V*W/T,K=Z-n.bank[C],at=Math.cos(K),X=Math.sin(K),J=-at*n.U[C*3]+X*n.B[C*3],ot=-at*n.U[C*3+1]+X*n.B[C*3+1],ft=-at*n.U[C*3+2]+X*n.B[C*3+2];U.push(n.p[C*3]+J*kn,n.p[C*3+1]+ot*kn,n.p[C*3+2]+ft*kn),M.push(-J,-ot,-ft);let wt=!A.tube&&(W===0||W===T)?s:j?r:o&&n.boost[C]?Math.floor(n.s[C]/.8)%2?a:c:A.tube?Math.floor(n.s[C]/1.2)%2?i[0]:s:q;S.push(wt.r,wt.g,wt.b)}if(I>0)for(let W=0;W<T;W++){let Z=(I-1)*(T+1)+W,K=Z+T+1;R.push(Z,K,Z+1,K,K+1,Z+1)}});let N=new Ie;N.setAttribute("position",new qt(U,3)),N.setAttribute("normal",new qt(M,3)),N.setAttribute("color",new qt(S,3)),N.setIndex(R);let Y=new Gt(N,A.tube?d:f);Y.receiveShadow=!A.tube,e.add(Y)}let m=new zn(.12,.16,1,8).translate(0,.5,0),g=[];for(let A=0;A<n.n;A+=30){if(n.flag[A]&3||n.U[A*3+1]<.7)continue;let P=n.p[A*3+1]-kn;P>.5&&g.push([n.p[A*3],P,n.p[A*3+2]])}let v=new ki(m,new ge({color:14474460,roughness:.6}),g.length),p=new $t;g.forEach(([A,P,w],T)=>v.setMatrixAt(T,p.makeScale(1,P,1).setPosition(A,0,w))),v.castShadow=!0,e.add(v),n.stations.forEach((A,P)=>{let w=P===n.stations.length-1&&P>0,T=mo(n,w?A.s0+1:A.s1-1,0),U=new Gt(new Vi(kn+.5,.12,8,24,Math.PI),new ge({color:w?16777215:448160,emissive:w?6710886:220742,roughness:.4})),M=new D(n.T[T*3],n.T[T*3+1],n.T[T*3+2]),S=new D(n.U[T*3],n.U[T*3+1],n.U[T*3+2]),R=new D().crossVectors(M,S);if(U.matrix.makeBasis(R,S,M.clone().negate()).setPosition(n.p[T*3],n.p[T*3+1]-kn*.4,n.p[T*3+2]),U.matrixAutoUpdate=!1,e.add(U),w){let N=new Gt(new si(2.4,.6),new Sn({map:Lg(),side:Me}));N.matrix.makeBasis(R,S,M.clone().negate()).setPosition(n.p[T*3]+S.x*1.6,n.p[T*3+1]+S.y*1.6,n.p[T*3+2]+S.z*1.6),N.matrixAutoUpdate=!1,e.add(N)}});let u=new xr(.22,0),y=new ge({color:16723592,emissive:16723592,emissiveIntensity:.6,roughness:.2,metalness:.3}),x=n.gems.map(A=>{let w=Math.min(n.n-1,Math.round(A.s/.2));for(;w>0&&n.s[w]>A.s;)w--;for(;w<n.n-1&&n.s[w+1]<=A.s;)w++;let T=A.phi-n.bank[w],U=Math.cos(T),M=Math.sin(T),S=new Gt(u,y);return S.position.set(n.p[w*3]+(-U*n.U[w*3]+M*n.B[w*3])*(Fe-.05),n.p[w*3+1]+(-U*n.U[w*3+1]+M*n.B[w*3+1])*(Fe-.05),n.p[w*3+2]+(-U*n.U[w*3+2]+M*n.B[w*3+2])*(Fe-.05)),e.add(S),A.mesh=S,A.got=!1,A});return{group:e,gems:x}}function Lg(){let n=document.createElement("canvas");n.width=64,n.height=16;let t=n.getContext("2d");for(let i=0;i<16;i++)for(let s=0;s<4;s++)t.fillStyle=(i+s)%2?"#111":"#fff",t.fillRect(i*4,s*4,4,4);let e=new wn(n);return e.magFilter=me,e.colorSpace=Kt,e}function xo(n){n.traverse(t=>{var e,i;(e=t.geometry)==null||e.dispose();for(let s of[].concat(t.material||[]))(i=s.map)==null||i.dispose(),s.dispose()}),n.removeFromParent()}var Zl="marble-settings-v1",Dg={mode:"kid",sound:!0,ball:"blue"},Yl={mode:["kid","adult"],sound:[!0,!1],ball:["blue","ladybug","bee","daddy","mommy","elliot","nora"]};function Jl(){let n={...Dg};try{let t=JSON.parse(localStorage.getItem(Zl)||"{}");for(let e in Yl)Yl[e].includes(t==null?void 0:t[e])&&(n[e]=t[e])}catch{}return n}function Rr(n){try{localStorage.setItem(Zl,JSON.stringify(n))}catch{}}var te=null,Tn=null,Lr=null,vo=!0,Dr=null,Ir=null;function Nr(){try{if(!te){te=new(window.AudioContext||window.webkitAudioContext),Tn=te.createGain(),Tn.gain.value=vo?1:0,Tn.connect(te.destination),Lr=te.createBuffer(1,te.sampleRate*2,te.sampleRate);let n=Lr.getChannelData(0);for(let o=0;o<n.length;o++)n[o]=Math.random()*2-1;let t=te.createBufferSource();t.buffer=Lr,t.loop=!0;let e=te.createBiquadFilter();e.type="lowpass",e.frequency.value=200,e.Q.value=3;let i=te.createGain();i.gain.value=0,t.connect(e).connect(i).connect(Tn),t.start(),Dr={lp:e,g:i};let s=te.createOscillator();s.type="triangle",s.frequency.value=200;let r=te.createGain();r.gain.value=0,s.connect(r).connect(Tn),s.start(),Ir={o:s,g:r}}te.state==="suspended"&&te.resume()}catch{te=null}return te}function yo(n){vo=n,Tn&&Tn.gain.setTargetAtTime(n?1:0,te.currentTime,.03)}function Ao(n,t,e){if(!Dr)return;let i=te.currentTime,s=Math.min(1,n/25);Dr.g.gain.setTargetAtTime(t?.05+s*.35*Math.min(1.6,.6+e*.4):0,i,.05),Dr.lp.frequency.setTargetAtTime(120+s*900,i,.05)}function Mo(n){if(!Ir)return;let t=te.currentTime;Ir.g.gain.setTargetAtTime(n<0?0:.06,t,.02),n>=0&&Ir.o.frequency.setTargetAtTime(180+n*700,t,.02)}function nn(n,t,e,i,s,r){let o=te.createOscillator(),a=te.createGain();o.type=n,o.frequency.setValueAtTime(t,i),o.frequency.exponentialRampToValueAtTime(e,i+s),a.gain.setValueAtTime(1e-4,i),a.gain.exponentialRampToValueAtTime(r,i+.01),a.gain.exponentialRampToValueAtTime(1e-4,i+s),o.connect(a).connect(Tn),o.start(i),o.stop(i+s+.05)}function Cr(n,t,e,i,s="bandpass"){let r=te.createBufferSource(),o=te.createBiquadFilter(),a=te.createGain();r.buffer=Lr,o.type=s,o.frequency.value=i,a.gain.setValueAtTime(1e-4,n),a.gain.exponentialRampToValueAtTime(e,n+t*.3),a.gain.exponentialRampToValueAtTime(1e-4,n+t),r.connect(o).connect(a).connect(Tn),r.start(n),r.stop(n+t+.05)}function Ce(n,t=1){if(!vo||!Nr())return;let e=te.currentTime;switch(n){case"launch":nn("square",180,900,e,.25,.15),Cr(e,.35,.3*t,1500);break;case"fly":Cr(e,.5,.12,2500,"highpass");break;case"land":nn("sine",140,50,e,.18,Math.min(.5,.15+t*.03));break;case"gem":[1318,1760,2093].forEach((i,s)=>nn("sine",i,i,e+s*.06,.25,.12));break;case"checkpoint":[784,1047].forEach((i,s)=>nn("triangle",i,i,e+s*.1,.3,.15));break;case"ready":nn("sine",660,660,e,.12,.08);break;case"respawn":nn("triangle",500,250,e,.3,.15);break;case"hop":nn("sine",300,600,e,.15,.12);break;case"finish":[523,659,784,1047,784,1047].forEach((i,s)=>nn("square",i,i,e+s*.11,.22,.1)),[1047,1319,1568].forEach(i=>nn("triangle",i,i,e+.7,1,.08));break;case"splash":Cr(e,.7,.5,900,"lowpass"),nn("sine",400,120,e,.35,.25),Cr(e+.15,.5,.2,2500);break;case"menu":nn("square",880,880,e,.06,.07);break}}var bo=0;function Ng(){let n=document.createElement("canvas");n.width=n.height=256;let t=n.getContext("2d");t.fillStyle="#2bb5e8",t.fillRect(0,0,256,256);let e=qi(7);for(let s=0;s<70;s++){t.strokeStyle=`rgba(255,255,255,${.12+e()*.2})`,t.lineWidth=2+e()*3;let r=e()*256,o=e()*256,a=20+e()*40;t.beginPath(),t.moveTo(r,o),t.quadraticCurveTo(r+a/2,o-6,r+a,o),t.stroke()}for(let s=0;s<40;s++)t.fillStyle="rgba(255,255,255,0.55)",t.fillRect(e()*256,e()*256,3,3);let i=new wn(n);return i.wrapS=i.wrapT=ls,i.repeat.set(120,120),i.colorSpace=Kt,i}function Kl(n,t,e=8){let i=document.createElement("canvas");i.width=128,i.height=8;let s=i.getContext("2d");for(let o=0;o<e;o++)s.fillStyle=o%2?t:n,s.fillRect(o*128/e,0,128/e+1,8);let r=new wn(i);return r.colorSpace=Kt,r}function Og(){let n=new je,t=new ge({color:16766474,roughness:.4}),e=new Gt(new En(.9,16,12),t);e.scale.set(1.2,.8,1),e.position.y=.35;let i=new Gt(new En(.55,16,12),t);i.position.set(.7,1.25,0);let s=new Gt(new ms(.2,.5,10),new ge({color:16743168}));s.rotation.z=-Math.PI/2,s.position.set(1.35,1.2,0);let r=new ge({color:1118481});for(let o of[-.28,.28]){let a=new Gt(new En(.08,8,6),r);a.position.set(1.08,1.42,o),n.add(a)}return n.add(e,i,s),n}function Ug(n){let t=new je,e=4+n()*4,i=new Gt(new zn(e,e+1,.8,24),new ge({color:16045453,roughness:1}));i.position.y=.1,i.receiveShadow=!0,t.add(i);let s=[["#ff006e","#ffffff"],["#3a86ff","#ffbe0b"],["#06d6a0","#ffffff"]],r=1+Math.floor(n()*2);for(let o=0;o<r;o++){let[a,c]=s[Math.floor(n()*s.length)],l=new Gt(new zn(.06,.06,2.6,6),new ge({color:16777215})),h=new Gt(new ms(1.6,.7,16,1,!0),new ge({map:Kl(a,c),side:Me})),f=(n()-.5)*e,d=(n()-.5)*e;l.position.set(f,1.6,d),h.position.set(f,3,d),l.castShadow=h.castShadow=!0,t.add(l,h)}return t}function Ql(n){let t=new je,e=qi(n.seed*13+5),i=Ng(),s=new Gt(new si(3e3,3e3),new ge({map:i,color:16777215,roughness:.25,metalness:.1}));s.rotation.x=-Math.PI/2,s.position.y=bo,s.receiveShadow=!0,t.add(s);let r=1/0,o=-1/0,a=1/0,c=-1/0;for(let x=0;x<n.n;x+=10)r=Math.min(r,n.p[x*3]),o=Math.max(o,n.p[x*3]),a=Math.min(a,n.p[x*3+2]),c=Math.max(c,n.p[x*3+2]);let l=x=>[r-x+e()*(o-r+2*x),a-x+e()*(c-a+2*x)],h=[],f=[["#ff006e","#ffffff"],["#ffbe0b","#fb5607"],["#3a86ff","#ffffff"],["#06d6a0","#ffbe0b"],["#8338ec","#ffffff"]],d=new Vi(1.1,.42,12,28);for(let x=0;x<26;x++){let[A,P]=f[x%f.length],w=new Gt(d,new ge({map:Kl(A,P,10),roughness:.35})),[T,U]=l(40);w.position.set(T,.15,U),w.rotation.x=-Math.PI/2,w.castShadow=!0,t.add(w),h.push({o:w,ph:e()*6,y:.15,spin:(e()-.5)*.3})}for(let x=0;x<9;x++){let A=Og(),[P,w]=l(30);A.position.set(P,0,w),A.rotation.y=e()*6,A.scale.setScalar(.8+e()*.8),A.traverse(T=>{T.castShadow=!0}),t.add(A),h.push({o:A,ph:e()*6,y:0,spin:(e()-.5)*.2,rock:!0})}for(let x=0;x<6;x++){let A=Ug(e),[P,w]=l(60);A.position.set(P,0,w),t.add(A)}let m=new En(.12,6,4),g=new Sn({color:14743551}),v=new ki(m,g,60);v.count=0,t.add(v);let p=new Gt(new vr(.6,1,32),new Sn({color:16777215,transparent:!0,opacity:0,side:Me}));p.rotation.x=-Math.PI/2,p.position.y=.05,t.add(p);let u=null,y=new $t;return{group:t,splash(x,A){u={t:0,x,z:A,d:Array.from({length:60},(P,w)=>{let T=w/60*Math.PI*2+e(),U=2+e()*4;return[Math.cos(T)*U,5+e()*6,Math.sin(T)*U]})}},update(x,A){i.offset.set(x*.012,x*.007);for(let P of h)P.o.position.y=P.y+Math.sin(x*1.5+P.ph)*.12,P.o.rotation.z+=P.spin*A*(P.rock?0:1),P.rock&&(P.o.rotation.z=Math.sin(x*1.2+P.ph)*.08,P.o.rotation.y+=P.spin*A);if(u){u.t+=A;let P=u.t;v.count=60,u.d.forEach(([w,T,U],M)=>{let S=Math.max(-1,T*P-4.9*P*P);y.makeTranslation(u.x+w*P,S,u.z+U*P),v.setMatrixAt(M,y)}),v.instanceMatrix.needsUpdate=!0,p.position.x=u.x,p.position.z=u.z,p.scale.setScalar(1+P*8),p.material.opacity=Math.max(0,.8-P*.6),P>2.2&&(u=null,v.count=0,p.material.opacity=0)}}}}var So="data:image/jpeg;base64,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";var _o="data:image/jpeg;base64,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";var wo="data:image/jpeg;base64,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";var Eo="data:image/jpeg;base64,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";function Ji(n,t=512){let e=document.createElement("canvas");e.width=t,e.height=t/2;let i=new wn(e);return i.colorSpace=Kt,i.anisotropy=4,n(e.getContext("2d"),i),i}function Or(n,t){return Ji((e,i)=>{e.fillStyle=t,e.fillRect(0,0,1024,512);let a=e.createLinearGradient(0,0,0,512);a.addColorStop(0,"rgba(255,255,255,0.2)"),a.addColorStop(1,"rgba(0,0,0,0.2)"),e.fillStyle=a,e.fillRect(0,0,1024,512);for(let h=0;h<40;h++)ke(e,h*397%1024,30+h*211%452,5+h%3*3,"rgba(255,255,255,0.35)");let c=(h,f,d)=>{for(let m=Math.ceil(512/2-f);m<512/2+f;m++){let g=m+.5-256,v=Math.sqrt(Math.max(0,f*f-g*g)),p=1/Math.cos(g/512*Math.PI),u=v*p;if(!d){e.fillRect(h-u,m,2*u,1.2);continue}let y=d.naturalWidth,x=y*.49/f;e.drawImage(d,y/2-v*x,y/2+g*x,2*v*x,Math.max(1,x),h-u,m,2*u,1.2)}},l=new Image;l.onload=()=>{for(let h of[1024/4,3*1024/4])e.fillStyle="#ffffff",c(h,160,null),c(h,150,l);i.needsUpdate=!0},l.src=n},1024)}var ke=(n,t,e,i,s)=>{n.fillStyle=s,n.beginPath(),n.ellipse(t,e,i,i*1.15,0,0,Math.PI*2),n.fill()},cn=[{id:"blue",name:"BLUE SWIRL",emoji:"\u{1F535}",clearcoat:1,roughness:.12,texture:()=>Ji(n=>{let t=n.createLinearGradient(0,0,512,0);t.addColorStop(0,"#00b4ff"),t.addColorStop(.5,"#3a0ca3"),t.addColorStop(1,"#00b4ff"),n.fillStyle=t,n.fillRect(0,0,512,256),n.fillStyle="#ffffff",n.fillRect(0,108,512,40),n.fillStyle="#ffbe0b",n.fillRect(0,108,128,40),ke(n,90,55,28,"#ff006e"),ke(n,300,200,24,"#06d6a0"),ke(n,420,60,16,"#ffffff"),ke(n,200,70,11,"#ffbe0b")})},{id:"ladybug",name:"LADYBUG",emoji:"\u{1F41E}",clearcoat:.8,roughness:.25,texture:()=>Ji(n=>{n.fillStyle="#e5181d",n.fillRect(0,0,512,256);let t=n.createLinearGradient(0,0,0,256);t.addColorStop(0,"rgba(255,255,255,0.15)"),t.addColorStop(1,"rgba(0,0,0,0.15)"),n.fillStyle=t,n.fillRect(0,0,512,256),n.fillStyle="#111",n.beginPath(),n.ellipse(384,128,80,128,0,0,Math.PI*2),n.fill();for(let e of[92,164])ke(n,420,e,20,"#ffffff"),ke(n,428,e,9,"#111");n.fillStyle="#111",n.fillRect(0,122,304,12),n.fillRect(464,122,48,12),[[60,60,26],[150,40,18],[230,75,22],[90,190,22],[190,210,26],[260,175,16],[30,120,0]].forEach(([e,i,s])=>s&&ke(n,e,i,s,"#111")),ke(n,490,60,14,"#111"),ke(n,495,200,12,"#111")})},{id:"bee",name:"BUMBLEBEE",emoji:"\u{1F41D}",clearcoat:.3,roughness:.55,texture:()=>Ji(n=>{let t=["#ffc800","#1a1a1a","#ffc800","#1a1a1a","#ffc800","#1a1a1a","#ffc800"];t.forEach((e,i)=>{n.fillStyle=e,n.fillRect(0,i*256/t.length,512,256/t.length+1)});for(let e=0;e<900;e++)n.fillStyle=`rgba(255,255,255,${Math.random()*.12})`,n.fillRect(Math.random()*512,Math.random()*256,2,2);n.fillStyle="#1a1a1a",n.beginPath(),n.ellipse(384,128,70,92,0,0,Math.PI*2),n.fill();for(let e of[356,412])ke(n,e,108,20,"#ffffff"),ke(n,e+4,112,9,"#111"),ke(n,e+8,104,4,"#ffffff");n.strokeStyle="#ff7eb6",n.lineWidth=7,n.lineCap="round",n.beginPath(),n.arc(384,148,24,.15*Math.PI,.85*Math.PI),n.stroke();for(let e of[70,186])n.fillStyle="rgba(200,235,255,0.92)",n.beginPath(),n.ellipse(128,e,58,40,0,0,Math.PI*2),n.fill(),n.strokeStyle="#ffffff",n.lineWidth=5,n.stroke()})},{id:"daddy",name:"DADDY BALL",emoji:"\u{1F468}",photo:So,clearcoat:.5,roughness:.35,texture:()=>Or(So,"#8a3a33")},{id:"mommy",name:"MOMMY BALL",emoji:"\u{1F469}",photo:_o,clearcoat:.5,roughness:.35,texture:()=>Or(_o,"#d85a92")},{id:"elliot",name:"ELLIOT BALL",emoji:"\u{1F466}",photo:wo,clearcoat:.5,roughness:.35,texture:()=>Or(wo,"#2f6fd6")},{id:"nora",name:"NORA BALL",emoji:"\u{1F467}",photo:Eo,clearcoat:.5,roughness:.35,texture:()=>Or(Eo,"#8e44ad")},{id:"soccer",name:"SOCCER BALL",emoji:"\u26BD",clearcoat:.3,roughness:.5,texture:Bg},{id:"flowers",name:"FLOWER BALL",emoji:"\u{1F338}",clearcoat:.6,roughness:.3,texture:Hg}];function Hg(){return Ji(n=>{let s=Math.PI/180,r=[[255,80,170],[120,50,200],[255,214,10],[255,255,255],[240,50,60],[255,150,40]],o=[];for(let h=0;h<14;h++){let f=1-2*(h+.5)/14,d=Math.sqrt(1-f*f),m=h*Math.PI*(3-Math.sqrt(5)),g=[Math.cos(m)*d,f,Math.sin(m)*d],v=Math.abs(f)>.9?[1,0,0]:[0,1,0],p=[v[1]*g[2]-v[2]*g[1],v[2]*g[0]-v[0]*g[2],v[0]*g[1]-v[1]*g[0]],u=Math.hypot(...p);p=p.map(A=>A/u);let y=[g[1]*p[2]-g[2]*p[1],g[2]*p[0]-g[0]*p[2],g[0]*p[1]-g[1]*p[0]],x=r[h*5%r.length];o.push({c:g,e1:p,e2:y,col:x,R:(19+h*7%6)*s,n:5+h%2,turn:h*1.3,mid:x[2]<100&&x[0]>200&&x[1]>200?[140,80,30]:[255,200,0]})}let a=(h,f,d)=>h.map((m,g)=>m+(f[g]-m)*Math.min(1,Math.max(0,d))),c=n.createImageData(1024,512),l=c.data;for(let h=0;h<512;h++){let f=(h+.5)/512*Math.PI,d=Math.sin(f),m=Math.cos(f);for(let g=0;g<1024;g++){let v=(g+.5)/1024*2*Math.PI,p=[-Math.cos(v)*d,m,Math.sin(v)*d],u=[225+10*m,210,250];for(let x of o){let A=p[0]*x.c[0]+p[1]*x.c[1]+p[2]*x.c[2];if(A<Math.cos(x.R*1.1))continue;let P=Math.acos(Math.min(1,A)),w=p[0]*x.e1[0]+p[1]*x.e1[1]+p[2]*x.e1[2],T=p[0]*x.e2[0]+p[1]*x.e2[1]+p[2]*x.e2[2],M=(x.R*(.45+.55*Math.abs(Math.cos(x.n/2*(Math.atan2(T,w)+x.turn))))-P)/(.5*s),S=(x.R*.3-P)/(.5*s);if(M<=0)continue;let R=a(x.col.map(N=>N*.6),x.col,M/4);u=a(u,R,M),S>0&&(u=a(u,a(x.mid.map(N=>N*.7),x.mid,S/3),S));break}let y=(h*1024+g)*4;l[y]=u[0],l[y+1]=u[1],l[y+2]=u[2],l[y+3]=255}}n.putImageData(c,0,0)},1024)}function Bg(){return Ji(n=>{let i=(1+Math.sqrt(5))/2,s=Math.PI/180,r=g=>{let v=Math.hypot(...g);return g.map(p=>p/v)},o=(g,v,p)=>[[g,v,p],[v,p,g],[p,g,v]],a=g=>[1,-1].flatMap(v=>[1,-1].flatMap(p=>[1,-1].map(u=>[g[0]*v,g[1]*p,g[2]*u]))),c=g=>g.filter((v,p)=>g.findIndex(u=>u.every((y,x)=>y===v[x]))===p).map(r),l=c(o(0,1,i).flatMap(a)),h=c([...a([1,1,1]),...o(0,1/i,i).flatMap(a)]),f=[...l.map(g=>[g,0]),...h.map(g=>[g,4.44*s])],d=n.createImageData(1024,512),m=d.data;for(let g=0;g<512;g++){let v=(g+.5)/512*Math.PI,p=Math.sin(v),u=Math.cos(v);for(let y=0;y<1024;y++){let x=(y+.5)/1024*2*Math.PI,A=[-Math.cos(x)*p,u,Math.sin(x)*p],P=1/0,w=1/0,T=!1;for(let[N,Y]of f){let C=Math.acos(Math.min(1,A[0]*N[0]+A[1]*N[1]+A[2]*N[2]))-Y;C<P?(w=P,P=C,T=Y===0):C<w&&(w=C)}let U=Math.min(1,Math.max(0,((w-P)/s-.6)/.8)),M=T?22:244,S=150+(M-150)*U,R=(g*1024+y)*4;m[R]=m[R+1]=m[R+2]=S,m[R+3]=255}}n.putImageData(d,0,0)},1024)}var To=new Map;function Po(n){let t=cn.find(e=>e.id===n)||cn[0];return To.has(t.id)||To.set(t.id,new Gi({map:t.texture(),roughness:t.roughness,clearcoat:t.clearcoat,clearcoatRoughness:.05})),To.get(t.id)}function $l(){addEventListener("keydown",n=>{var t;n.code==="Escape"&&((t=document.getElementById("parent"))!=null&&t.classList.contains("open")||(n.preventDefault(),n.stopImmediatePropagation(),window.close(),setTimeout(()=>{let e=document.getElementById("quit-hint");e||(e=document.createElement("div"),e.id="quit-hint",e.textContent="Press \u2318Q to quit",e.style.cssText="position:fixed;left:50%;top:40%;transform:translateX(-50%);z-index:99;padding:16px 28px;background:#000c;color:#fff;font:bold 32px system-ui,sans-serif;border-radius:14px;pointer-events:none;transition:opacity .4s",document.body.appendChild(e)),e.style.opacity="1",clearTimeout(e.hideTimer),e.hideTimer=setTimeout(()=>{e.style.opacity="0"},2500)},400)))},!0)}function Fg(n=0){let t=n,e=null,i=!1;return(s,r)=>(r&&(t=s),i?(r&&e===null&&(e=s+.5),e!==null&&s>=e&&(i=!1)):s-t>=7&&(i=!0,e=null),i)}var zg=.25;function kg(){let n=new Map,t=new Map,e=0;return i=>{let s=!1,r=i-e>=zg,o=navigator.getGamepads?[...navigator.getGamepads()]:[];for(let a of o){if(!a||!a.connected)continue;a.buttons.some(h=>h&&(h.pressed||h.value>.5))&&(s=!0);let c=n.get(a.index)||a.axes,l=t.get(a.index)||new Set;a.axes.forEach((h,f)=>{if(!Number.isFinite(h))return;let d=Math.abs(h-(c[f]??h))>.06;f<=1?(Math.abs(h)>.35||d)&&(s=!0):f<=3?d&&(s=!0):Math.abs(h)>1.05?l.add(f):l.has(f)&&(s=!0)}),t.set(a.index,l),(r||!n.has(a.index))&&n.set(a.index,[...a.axes])}return r&&(e=i),s}}var Vg=`
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
`,th=n=>String(n).replace(/[&<>]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;"})[t]),Gg=n=>n.map(([t,e])=>`<div class="keyhud-pill"><span class="keyhud-keys">${[].concat(t).map(i=>`<span class="keyhud-k">${th(i)}</span>`).join("")}</span><span>${th(e)}</span></div>`).join("");function eh({top:n,side:t,menuSide:e="top"}){let i=document.createElement("style");i.textContent=Vg,document.head.appendChild(i);let s=[["keyhud-top",n],["keyhud-side",t]].map(([h,f])=>{let d=document.createElement("div");return d.id=h,d.className="keyhud",d.innerHTML=Gg(f),document.body.appendChild(d),d});e==="left"&&s[0].classList.add("left");let r=new Set,o=!1;addEventListener("keydown",h=>{r.add(h.code),o=!0},!0),addEventListener("keyup",h=>{r.delete(h.code)},!0),addEventListener("blur",()=>r.clear());let a=()=>performance.now()/1e3,c=kg(),l=Fg(a());setInterval(()=>{let h=a(),f=r.size>0||o||c(h);o=!1;let d=l(h,f);for(let m of s)m.classList.toggle("show",d)},50)}var nh=["launch","ball","hop","reset"];function Wg(n,t,e){let i=Math.hypot(n,t);if(!i)return[0,0];let s=Math.min(i,e)/i/e;return[n*s,t*s]}function Xg({x:n=0,y:t=0,...e}){let i=s=>({pressed:!!s,value:s?1:0});return{index:99,id:"On-screen joystick",mapping:"",connected:!0,axes:[n,t,0,0],buttons:nh.map(s=>i(e[s]))}}var Ro=class{constructor(){this.x=0,this.y=0,this.held={},this.tapped={}}press(t){this.held[t]=this.tapped[t]=!0}release(t){this.held[t]=!1}stick(t,e){this.x=t,this.y=e}read(){let t={x:this.x,y:this.y};for(let e of nh)t[e]=!!(this.held[e]||this.tapped[e]);return this.tapped={},t}},jg=`
body.touch .keyhud { display: none !important; } /* the keyboard keys */
/* the game's own HUD, moved clear of the controls */
body.touch #meter { right: calc(env(safe-area-inset-right) + 48vmin); bottom: calc(env(safe-area-inset-bottom) + 9vmin); width: 6vmin; height: 34vmin; border-width: 0.8vmin; }
body.touch #meter-label { right: calc(env(safe-area-inset-right) + 45vmin); bottom: calc(env(safe-area-inset-bottom) + 3vmin); width: 12vmin; font-size: 3.2vmin; }
body.touch #hold { left: auto; right: calc(env(safe-area-inset-right) + 10.5vmin); bottom: calc(env(safe-area-inset-bottom) + 47vmin); width: 12vmin; height: 12vmin; }
.touchctl { position: fixed; z-index: 9; touch-action: none; -webkit-user-select: none; user-select: none; -webkit-touch-callout: none;
  display: flex; align-items: center; justify-content: center; border-radius: 50%; box-sizing: border-box; }
#touchctl-stick { left: calc(env(safe-area-inset-left) + 4vmin); bottom: calc(env(safe-area-inset-bottom) + 4vmin); width: 30vmin; height: 30vmin;
  background: rgba(20,16,50,0.28); border: 0.7vmin solid rgba(255,255,255,0.55); }
#touchctl-knob { position: absolute; left: 50%; top: 50%; width: 13vmin; height: 13vmin; margin: -6.5vmin 0 0 -6.5vmin; border-radius: 50%;
  background: #fff3b0; border: 0.6vmin solid #1d1238; box-shadow: 0 1vmin 2vmin rgba(20,16,50,0.4); pointer-events: none; }
#touchctl-launch { right: calc(env(safe-area-inset-right) + 4vmin); bottom: calc(env(safe-area-inset-bottom) + 4vmin); width: 25vmin; height: 25vmin;
  flex-direction: column; background: rgba(255,0,110,0.85); border: 0.7vmin solid #fff3b0; color: #fff; box-shadow: 0 1vmin 2.5vmin rgba(20,16,50,0.45); }
#touchctl-launch .touchctl-e { font-size: 10vmin; line-height: 1; }
#touchctl-launch .touchctl-t { font: 900 3.6vmin system-ui, sans-serif; margin-top: 0.5vmin; text-shadow: 0 0.3vmin 0 #1d1238; }
.touchctl-small { width: 12vmin; height: 12vmin; background: rgba(20,16,50,0.4); border: 0.5vmin solid rgba(255,255,255,0.6); font-size: 6.5vmin; }
#touchctl-ball { right: calc(env(safe-area-inset-right) + 10.5vmin); bottom: calc(env(safe-area-inset-bottom) + 32vmin); }
#touchctl-reset { right: calc(env(safe-area-inset-right) + 28vmin); bottom: calc(env(safe-area-inset-bottom) + 26vmin); }
#touchctl-hop { right: calc(env(safe-area-inset-right) + 32vmin); bottom: calc(env(safe-area-inset-bottom) + 8vmin); }
.touchctl.touchctl-on { filter: brightness(1.25); transform: scale(0.94); }
`,Ur=class{constructor(){this.state=new Ro;let t=document.createElement("style");t.textContent=jg,document.head.appendChild(t);let e=(a,c,l="")=>{let h=document.createElement("div");return h.id=a,h.className=`touchctl ${l}`.trim(),h.innerHTML=c,document.body.appendChild(h),h},i=e("touchctl-stick",'<div id="touchctl-knob"></div>'),s={launch:e("touchctl-launch",'<span class="touchctl-e">\u{1F680}</span><span class="touchctl-t">LAUNCH</span>'),hop:e("touchctl-hop","\u{1F998}","touchctl-small"),reset:e("touchctl-reset","\u21A9\uFE0F","touchctl-small"),ball:e("touchctl-ball","\u{1F3A8}","touchctl-small")};document.body.classList.add("touch");let r=(a,c,l)=>{let h=null;a.addEventListener("pointerdown",f=>{f.preventDefault(),h=f.pointerId,a.classList.add("touchctl-on");try{a.setPointerCapture(f.pointerId)}catch{}c(f)}),a.addEventListener("pointermove",f=>{f.pointerId===h&&c(f)});for(let f of["pointerup","pointercancel","lostpointercapture"])a.addEventListener(f,d=>{d.pointerId===h&&(h=null,a.classList.remove("touchctl-on"),l())})},o=i.firstChild;r(i,a=>{let c=i.getBoundingClientRect(),[l,h]=Wg(a.clientX-(c.left+c.width/2),a.clientY-(c.top+c.height/2),c.width/2);this.state.stick(l,h),o.style.transform=`translate(${l*c.width/2}px, ${h*c.width/2}px)`},()=>{this.state.stick(0,0),o.style.transform=""});for(let[a,c]of Object.entries(s))r(c,()=>this.state.held[a]||this.state.press(a),()=>this.state.release(a))}pad(){return Xg(this.state.read())}};$l();eh({top:[["N","New course"],["M","Menu"],["P","Parent settings"],["Esc","Quit"]],side:[["Hold Space","Charge, let go to launch"],[["\u2190","\u2192"],"Steer"],["\u2193","Brake"],["X","Hop"],["R","Reset"],["B","Change ball"]]});var sn=new URLSearchParams(location.search),Ne=Jl();cn.some(n=>n.id===sn.get("ball"))&&(Ne.ball=sn.get("ball"));var ce=n=>document.getElementById(n),qg=0,vs=1,Yg=[2],ih=3,Zg=.6,Jg={kid:{fill:1.4},adult:{cycle:.9}},Ze=new ps({antialias:!0});Ze.setPixelRatio(Math.min(devicePixelRatio,2));Ze.setSize(innerWidth,innerHeight);Ze.shadowMap.enabled=!0;Ze.shadowMap.type=oo;Ze.outputColorSpace=Kt;document.body.prepend(Ze.domElement);Ze.domElement.addEventListener("webglcontextlost",n=>{n.preventDefault(),setTimeout(()=>location.reload(),1500)});var hn=new mr;hn.background=new At(9428223);hn.fog=new pr(9428223,70,260);var ln=new Pe(72,innerWidth/innerHeight,.05,600),Uo=()=>{ln.aspect=innerWidth/innerHeight,ln.updateProjectionMatrix(),Ze.setSize(innerWidth,innerHeight),scrollTo(0,0)};addEventListener("resize",Uo);addEventListener("orientationchange",()=>setTimeout(Uo,300));visualViewport==null||visualViewport.addEventListener("resize",Uo);hn.add(new Ar(16777215,2864616,1.3));var ui=new Mr(16777215,2);ui.castShadow=!0;ui.shadow.mapSize.set(1024,1024);Object.assign(ui.shadow.camera,{left:-20,right:20,top:20,bottom:-20,near:1,far:120});hn.add(ui,ui.target);var hi=new Gt(new En(Yi,32,24),Po(Ne.ball));hi.castShadow=!0;hn.add(hi);var lh,Hr=(lh=globalThis.matchMedia)!=null&&lh.call(globalThis,"(pointer: coarse)").matches?new Ur:null,Ki=new Tr({extraPads:()=>Hr?[Hr.pad()]:[]}),k={mode:Zi[sn.get("mode")]?sn.get("mode"):Ne.mode,seed:parseInt(sn.get("seed"),10)||1+Math.floor(Math.random()*1e5),errors:0,track:null,marble:null,meshes:null,world:null,splashed:!1,thumbAt:-1,clock:0,charging:!1,chargeT:0,power:0,needRelease:!1,gems:0,points:0,time:0,finishedAt:-1,menu:!0,pick:0,heldBtn:new Map,hatLatch:new Map,stickLatch:0};function fi(n=k.seed){k.seed=n,jl(k.mode),k.meshes&&xo(k.meshes.group),k.world&&xo(k.world.group),k.track=Wl(n,k.mode==="adult"?.85:.15),k.marble=new Pr(k.track),k.meshes=ql(k.track,k.mode),hn.add(k.meshes.group),k.world=Ql(k.track),hn.add(k.world.group),k.gems=0,k.points=0,k.time=0,k.finishedAt=-1,k.charging=!1,k.needRelease=!0,Bo(),Ms()}var Br=["kid","adult"];function Ho(){k.menu=!0,k.pick=Br.indexOf(k.mode),Qi()}function Qi(){ce("menu").classList.toggle("open",k.menu),document.querySelectorAll("#menu .card").forEach((n,t)=>n.classList.toggle("on",t===k.pick))}function hh(){let n=Br[k.pick],t=n!==k.mode||!k.track;k.mode=n,Ne.mode=n,Rr(Ne),k.menu=!1,Qi(),t?fi():k.needRelease=!0,ys(`${Zi[n].label} MODE`,1.2),Ce("menu")}function Do(n=1){let t=cn.findIndex(i=>i.id===Ne.ball),e=cn[(t+n+cn.length)%cn.length];Ne.ball=e.id,Rr(Ne),hi.material=Po(e.id),ys(`${e.emoji} ${e.name}!`,1.2),Ce("menu")}function Kg(){let n=ce("fade");n.className="",n.offsetWidth,n.className="go"}function ys(n,t=1.6){let e=ce("banner");e.textContent=n,e.className="",e.offsetWidth,e.className="show",e.style.animationDuration=`${t}s`}function Ms(){let n=k.marble,t=k.track;if(ce("meter-fill").style.height=`${Math.round((k.charging?k.power:0)*100)}%`,ce("meter").classList.toggle("ready",!!(n!=null&&n.ready)),ce("status").textContent=n?n.finished?"FINISH!":k.charging?"LET GO TO LAUNCH!":n.ready?Hr?"HOLD LAUNCH":"HOLD THE TRIGGER":"":"",!t)return;let e=t.checkpoints.filter(s=>s<=n.checkpoint).length+1;ce("stage").textContent=`STAGE ${Math.min(e,t.stations.length-1)}/${t.stations.length-1}`,ce("gems").textContent=`\u{1F48E} ${k.gems}/${t.gems.length}`,ce("points").textContent=`\u2B50 ${k.points}`,ce("time").textContent=`${k.time.toFixed(1)}s`,ce("mode").textContent=Zi[k.mode].label;let i=cn.find(s=>s.id===Ne.ball)||cn[0];ce("ball").dataset.id!==i.id&&(ce("ball").dataset.id=i.id,i.photo?ce("ball").innerHTML=`<img src="${i.photo}" alt="" style="width:1.15em;height:1.15em;border-radius:50%;vertical-align:-0.2em;object-fit:cover">`:ce("ball").textContent=i.emoji),ce("speed-fill").style.width=`${Math.min(100,Math.abs(n.onTrack?n.v:Math.hypot(...n.vel))/25*100)}%`}var di=ce("parent"),uh=()=>{for(let n of di.querySelectorAll("button[data-key]"))n.classList.toggle("on",String(Ne[n.dataset.key])===n.dataset.value)};di.addEventListener("click",n=>{let t=n.target.closest("button[data-key]");if(t){let e=t.dataset.value==="true"?!0:t.dataset.value==="false"?!1:t.dataset.value;Ne[t.dataset.key]=e,Rr(Ne),uh(),t.dataset.key==="sound"&&yo(e),t.dataset.key==="mode"&&e!==k.mode&&(k.mode=e,fi())}n.target.closest("#new-course")&&fi(k.seed+1),n.target.closest("#parent-close")&&di.classList.remove("open")});var sh=(n=!di.classList.contains("open"))=>{uh(),di.classList.toggle("open",n)};yo(Ne.sound);addEventListener("touchend",()=>Nr());Hr&&(document.querySelector("#menu p").textContent="Tap KID or ADULT to go!",document.querySelectorAll("#menu .card").forEach((n,t)=>n.addEventListener("click",()=>{k.menu&&(k.pick=t,hh())})));addEventListener("keydown",n=>{n.repeat||((n.code==="KeyM"||n.code==="Tab")&&(n.preventDefault(),Ho()),n.code==="KeyN"&&!k.menu&&fi(k.seed+1),n.code==="KeyX"&&(k.hopKey=!0),n.code==="KeyR"&&(k.resetKey=!0),n.code==="KeyB"&&Do())});function Qg(n){k.clock+=n;let t=Ki.poll(n,{holdToggle:!0,hatMoves:!1}),e=t.kb.x,i=!!Ki.keys.ArrowDown||!!Ki.keys.KeyS,s=!!Ki.keys.Space,r=!!k.hopKey,o=!!k.resetKey,a=!1;k.hopKey=k.resetKey=!1;for(let c of t.pads){e+=c.x,c.y>.6&&(i=!0),c.pressed.includes(qg)&&(s=!0);let l=k.heldBtn.get(c.index)||[];c.pressed.some(d=>Yg.includes(d)&&!l.includes(d))&&(r=!0),c.pressed.includes(ih)&&!l.includes(ih)&&(o=!0);let h=c.hat[0]||-c.hat[1],f=k.hatLatch.get(c.index)||0;h&&!f&&!k.menu&&Do(h>0?1:-1),k.hatLatch.set(c.index,c.hat[0]||c.hat[1]?1:0),c.pressed.includes(vs)&&!l.includes(vs)&&(k.thumbAt=k.clock),!c.pressed.includes(vs)&&l.includes(vs)&&k.thumbAt>=0&&k.clock-k.thumbAt<Zg&&!k.menu&&Do(),c.pressed.includes(vs)||(k.thumbAt=-1),c.pressed.some(d=>!l.includes(d))&&(a=!0),k.heldBtn.set(c.index,c.pressed)}for(let c of t.events)c.type==="parent"?sh():c.type==="escape"?di.classList.contains("open")?sh(!1):k.menu&&k.track&&(k.menu=!1,Qi()):c.type==="toggle"?(k.menu&&k.track?(k.menu=!1,Qi()):Ho(),k.swallow=!0):c.type==="drop"&&c.pad===-1&&k.menu&&(a=!0);return ce("hold").style.opacity=t.holdProgress>.05?1:0,ce("hold-arc").style.strokeDashoffset=String(100-Math.min(1,t.holdProgress)*100),{steer:Math.max(-1,Math.min(1,e)),brake:i,trigger:s,hop:r,reset:o,anyPress:a}}var As=1/240,Co=0;function fh(n,t){let e=t||Qg(n);if(di.classList.contains("open")){Ao(0,!1,0),Mo(-1);return}if(k.menu){let r=e.steer>.5?1:e.steer<-.5?-1:0;r&&r!==k.stickLatch&&(k.pick=(k.pick+r+Br.length)%Br.length,Qi(),Ce("menu")),k.stickLatch=r,(Ki.keys.ArrowLeft||Ki.keys.ArrowRight)&&(k.stickLatch=r),e.anyPress&&!k.swallow&&hh(),k.swallow=!1;return}let i=k.marble;if(e.reset&&!i.finished){i.respawn("manual");for(let r of i.events)rh(r);k.charging=!1}if(e.trigger||(k.needRelease=!1),i.ready&&e.trigger&&!k.needRelease&&!i.finished){k.charging||(k.charging=!0,k.chargeT=0,Nr()),k.chargeT+=n;let r=Jg[k.mode];k.power=r.fill?Math.min(1,k.chargeT/r.fill):1-Math.abs(1-k.chargeT/r.cycle%2)}else if(k.charging&&(k.charging=!1,!e.trigger&&i.ready)){let r=i.launch(k.power);Ce("launch",r/ze.launchMax)}Mo(k.charging?k.power:-1),Co+=n;let s={steer:e.steer,brake:e.brake,hop:e.hop};for(;Co>=As;){i.step(As,s),s.hop=!1;for(let r of i.events)rh(r);Co-=As}i.finished?k.finishedAt<0?k.finishedAt=performance.now():performance.now()-k.finishedAt>4500&&fi(k.seed+1):k.time+=n,dh(),!i.onTrack&&!i.droppingIn&&i.pos[1]<bo+Yi&&!k.splashed&&(k.splashed=!0,k.world.splash(i.pos[0],i.pos[2]),Ce("splash")),i.onTrack&&(k.splashed=!1),Ao(Math.abs(i.v),i.onTrack,i.press)}function rh(n){let t=k.marble;n==="launch"||(n==="fly"?Ce("fly"):n==="land"?Ce("land",Math.abs(t.v)):n==="checkpoint"?(Ce("checkpoint"),ys("CHECKPOINT!",1.2)):n==="ready"?Ce("ready"):n==="respawn"?(Bo(),Kg(),Ce("respawn"),ys(t.lastRespawn==="fell"?"WHOOPS! TRY AGAIN":"RESET!",1.4),k.needRelease=!0):n==="hop"?Ce("hop"):n==="boost"?Ce("launch",.6):n==="finish"&&(Ce("finish"),ys(`FINISH! \u2B50 ${k.points}`,4)))}function dh(){let n=k.marble.pos;for(let t of k.meshes.gems){if(t.got)continue;t.mesh.position.distanceTo(new D(n[0],n[1],n[2]))<Yi+.35&&(t.got=!0,t.mesh.visible=!1,k.gems++,k.points+=ah,Ce("gem"),$g(`+${ah}`,t.mesh.position))}}var ah=5;function $g(n,t){let e=t.clone().project(ln);if(e.z>1)return;let i=document.createElement("div");i.className="plus",i.textContent=n,i.style.left=`${(e.x+1)/2*innerWidth}px`,i.style.top=`${(1-e.y)/2*innerHeight}px`,document.body.appendChild(i),setTimeout(()=>i.remove(),1e3)}var Io=new D,No=new D(0,1,0),Oo=new D,oh={};function ph(n){let t=k.marble,e=k.track,i=new D(...t.pos);if(t.onTrack||t.droppingIn){let s=Vn(e,Math.max(0,t.s-(t.v>=0?3.2:-3.2)),t.hint,oh),r=Math.cos(s.bank),o=Math.sin(s.bank),a=new D(s.U[0]*r+s.B[0]*o,s.U[1]*r+s.B[1]*o,s.U[2]*r+s.B[2]*o),c=new D(...Vn(e,t.s,t.hint,{}).T);n.pos.set(s.p[0],s.p[1],s.p[2]).addScaledVector(a,.42);let l=i.clone().sub(new D(...Vn(e,t.s,t.hint,{}).p));l.addScaledVector(a,-l.dot(a)),n.pos.addScaledVector(l,.5),n.look.copy(i).addScaledVector(c,t.v>=0?3:-3).addScaledVector(a,.15),n.up.copy(a)}else{let s=Vn(e,t.s,t.hint,oh),r=new D(s.T[0],0,s.T[2]);r.lengthSq()<.01&&r.set(0,0,-1),r.normalize(),n.pos.copy(i).addScaledVector(r,-3.4).add(new D(0,1.2,0)),n.look.copy(i).addScaledVector(r,3),n.up.set(0,1,0)}return n}var Gn={pos:new D,look:new D,up:new D};function Bo(){ph(Gn),Io.copy(Gn.pos),Oo.copy(Gn.look),No.copy(Gn.up)}function Fr(n){ph(Gn);let t=1-Math.exp(-n*12);Io.lerp(Gn.pos,t),Oo.lerp(Gn.look,t),No.lerp(Gn.up,1-Math.exp(-n*6)).normalize(),ln.position.copy(Io),ln.up.copy(No),ln.lookAt(Oo)}var t0=20,ch=new on,Lo=new D;function zr(n){let t=k.marble;if(hi.position.set(...t.pos),t.onTrack){let i=t.frame(),s=Math.cos(t.phi),r=Math.sin(t.phi),o=new D(s*i.U[0]-r*i.B[0],s*i.U[1]-r*i.B[1],s*i.U[2]-r*i.B[2]);Lo.crossVectors(o,new D(...t.vel)).divideScalar(Yi)}let e=Lo.length();e>.001&&n>0&&(ch.setFromAxisAngle(Lo.clone().divideScalar(e),Math.min(e,t0)*n),hi.quaternion.premultiply(ch)),ui.position.copy(hi.position).add(new D(15,30,10)),ui.target.position.copy(hi.position);for(let i of k.meshes.gems)i.mesh.rotation.y+=n*2}var xe={frames:0,time:0,slow:0,stage:0};function e0(n){if(n>.25){xe.frames=xe.time=0;return}if(xe.frames++,xe.time+=n,xe.time<3)return;let t=xe.frames/xe.time;sn.has("fps")&&(ce("fps").textContent=`${t.toFixed(0)} fps \xB7 quality ${xe.stage}`),xe.slow=t<40?xe.slow+1:0,xe.slow>=2&&xe.stage<2&&(xe.stage++,Ze.setPixelRatio(xe.stage===1?1:.75),xe.slow=0),xe.frames=xe.time=0}var n0=new br;function mh(){let n=n0.getDelta();e0(n);let t=Math.min(n,.05);requestAnimationFrame(mh);try{fh(t),k.track&&(Fr(t),zr(t),k.world.update(performance.now()/1e3,t),Ms()),Ze.render(hn,ln),k.errors=0}catch(e){if(console.error(e),++k.errors>30){k.errors=0;try{fi(k.seed+1)}catch{location.reload()}}}}fi();sn.has("shot")?(k.menu=!1,Qi()):Ho();if(sn.has("sim")){let n=(e,i)=>sn.has(e)?parseFloat(sn.get(e)):i;k.marble.launch(n("power",.6));let t={steer:n("steer",0),brake:!1,hop:!1};for(let e=0;e<n("sim",0);e+=As){k.marble.step(As,t);for(let i of k.marble.events);}dh(),Bo();for(let e=0;e<30;e++)Fr(1/60),zr(0);Ms()}window.__marble={get game(){return k},get camera(){return ln},get ball(){return Ne.ball},step(n=1/60,t){for(let e=0;e<Math.round(n*60);e++)fh(1/60,t),k.track&&(Fr(1/60),zr(1/60),Ms());Ze.render(hn,ln)}};sn.has("manual")?(k.track&&(Fr(0),zr(0),Ms()),Ze.render(hn,ln)):mh();})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2023 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
