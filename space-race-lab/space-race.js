(()=>{var Ud=/\/[^/]+-lab\//.test(location.pathname);if(Ud)for(let n of["getItem","setItem","removeItem"]){let t=Storage.prototype[n];Storage.prototype[n]=function(e,...i){return t.call(this,`lab:${e}`,...i)}}var oo=.0033528106647474805,Vi=6378137*(1-oo),Is=oo*(2-oo),wc=.00108262668,ge=7292115e-11,mr=9.80665,Tc=101325,lo=1e5,te=Math.PI/180;var ei=(n,t)=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]],co=(n,t)=>[n[0]-t[0],n[1]-t[1],n[2]-t[2]],Ue=(n,t)=>[n[0]*t,n[1]*t,n[2]*t],$t=(n,t)=>n[0]*t[0]+n[1]*t[1]+n[2]*t[2],Be=(n,t)=>[n[1]*t[2]-n[2]*t[1],n[2]*t[0]-n[0]*t[2],n[0]*t[1]-n[1]*t[0]],Kt=n=>Math.sqrt(n[0]*n[0]+n[1]*n[1]+n[2]*n[2]),le=n=>{let t=Kt(n)||1;return[n[0]/t,n[1]/t,n[2]/t]},Ac=(n,t,e)=>[n[0]+(t[0]-n[0])*e,n[1]+(t[1]-n[1])*e,n[2]+(t[2]-n[2])*e],ni=(n,t,e)=>n<t?t:n>e?e:n;var pn=(n,t)=>{let e=Math.cos(t),i=Math.sin(t);return[e*n[0]-i*n[1],i*n[0]+e*n[1],n[2]]},ho=(n,t,e=0)=>pn(n,e+ge*t),mn=(n,t,e=0)=>pn(n,-(e+ge*t));function bi(n,t,e=0){let i=Math.sin(n*te),s=Math.cos(n*te),r=6378137/Math.sqrt(1-Is*i*i);return[(r+e)*s*Math.cos(t*te),(r+e)*s*Math.sin(t*te),(r*(1-Is)+e)*i]}function ze(n){let t=n[0]*n[0]+n[1]*n[1],e=n[2]*n[2],i=t+e;return 6378137*Vi/Math.sqrt((Vi*Vi*t+6378137*6378137*e)/i)}var Rc=n=>Kt(n)-ze(n),uo=n=>le([n[0],n[1],n[2]/(1-Is)]);function wn(n){let t=uo(n),e=le(Be([0,0,1],t)),i=Be(t,e);return{e,n:i,u:t}}function gr(n){return{lat:Math.atan2(n[2]/(1-Is),Math.hypot(n[0],n[1]))/te,lon:Math.atan2(n[1],n[0])/te}}function Gi(n,t){let e=(n[0]*t[0]+n[1]*t[1]+n[2]*t[2])/(Kt(n)*Kt(t));return 6378137*Math.acos(e>1?1:e<-1?-1:e)}function Cc(n,t,e){let i=n[0]*n[0]+n[1]*n[1]+n[2]*n[2],s=Math.sqrt(i),r=-3986004418e5/(i*s);if(!t)return e[0]=r*n[0],e[1]=r*n[1],e[2]=r*n[2],e;let a=1.5*wc*6378137*6378137/i,o=5*n[2]*n[2]/i;return e[0]=r*n[0]*(1+a*(1-o)),e[1]=r*n[1]*(1+a*(1-o)),e[2]=r*n[2]*(1+a*(3-o)),e}function Us(n,t,e=0){let i=ho(bi(n.lat,n.lon,n.height),t,e);return{r:i,v:[-ge*i[1],ge*i[0],0]}}var Wi=[[0,-.0065],[11e3,0],[2e4,.001],[32e3,.0028],[47e3,0],[51e3,-.0028],[71e3,-.002],[84852,0]],fo=[{T:288.15,p:101325}];for(let n=1;n<Wi.length;n++){let[t,e]=Wi[n-1],i=Wi[n][0],s=fo[n-1],r=s.T+e*(i-t);fo.push({T:r,p:e===0?s.p*Math.exp(-9.80665*(i-t)/(287.053*s.T)):s.p*Math.pow(s.T/r,9.80665/(287.053*e))})}var Fn=[[86,186.87,.37338,6958e-9],[90,186.87,.18359,3416e-9],[95,188.42,.075966,1393e-9],[100,195.08,.032011,5604e-10],[110,240,.0071042,9708e-11],[120,360,.0025382,2222e-11],[130,469.27,.0012505,8152e-12],[140,559.63,72028e-8,3831e-12],[150,634.39,45422e-8,2076e-12],[160,696.29,30395e-8,1233e-12],[180,790.07,15271e-8,5194e-13],[200,854.56,84736e-9,2541e-13],[250,941.33,24767e-9,6073e-14],[300,976.01,87704e-10,1916e-14],[350,990.06,34498e-10,7014e-15],[400,995.83,14518e-10,2803e-15],[450,998.22,64468e-11,1184e-15],[500,999.24,30236e-11,5215e-16],[600,999.85,8213e-11,1137e-16],[700,999.97,31908e-12,307e-16],[800,999.99,17036e-12,1136e-17],[900,1e3,10873e-12,5759e-18],[1e3,1e3,75138e-13,3561e-18]];function Pc(n,t){let e=6356766*n/(6356766+n),i=Wi.length-1;for(;i>0&&e<Wi[i][0];)i--;let[s,r]=Wi[i],a=fo[i],o=a.T+r*(e-s);return t.T=o,t.p=r===0?a.p*Math.exp(-9.80665*(e-s)/(287.053*a.T)):a.p*Math.pow(a.T/o,9.80665/(287.053*r)),t.rho=t.p/(287.053*o),t.a=Math.sqrt(1.4*287.053*o),t}var Lc=Pc(86e3,{});Fn[0][2]=Lc.p;Fn[0][3]=Lc.rho;function Ic(n,t={}){if(n<0&&(n=0),n<=86e3)return Pc(n,t);let e=n/1e3;if(e>=1e3){let o=Fn[Fn.length-2],l=Fn[Fn.length-1],c=(l[0]-o[0])/Math.log(o[3]/l[3]),h=Math.exp(-(e-1e3)/c);return t.T=1e3,t.p=l[2]*h,t.rho=l[3]*h,t.a=Math.sqrt(1.4*287.053*1e3),t}let i=0;for(;e>Fn[i+1][0];)i++;let s=Fn[i],r=Fn[i+1],a=(e-s[0])/(r[0]-s[0]);return t.T=s[1]+(r[1]-s[1])*a,t.p=s[2]*Math.pow(r[2]/s[2],a),t.rho=s[3]*Math.pow(r[3]/s[3],a),t.a=Math.sqrt(1.4*287.053*t.T),t}var Bn=2*Math.PI,ii=n=>(n%Bn+Bn)%Bn,Dc=(n,t,e=3986004418e5)=>Math.sqrt(e*(2/n-1/t)),Dd=(n,t=3986004418e5)=>Bn*Math.sqrt(n*n*n/t);function Xi(n,t,e=3986004418e5){let i=Kt(n),s=$t(t,t),r=Be(n,t),a=Kt(r),o=$t(n,t),l=[((s-e/i)*n[0]-o*t[0])/e,((s-e/i)*n[1]-o*t[1])/e,((s-e/i)*n[2]-o*t[2])/e],c=Kt(l),h=s/2-e/i,u=Math.abs(h)<1e-9?1/0:-e/(2*h),f=Math.acos(Math.max(-1,Math.min(1,r[2]/a))),p=[-r[1],r[0],0],g=Kt(p),_=c<1e-10,m=g<1e-10*a,d=m?0:ii(Math.atan2(p[1],p[0])),S=m?[1,0,0]:Ue(p,1/g),x=Ue(r,1/a),w=Be(x,S),A=_?0:ii(Math.atan2($t(l,w),$t(l,S))),T=ii(Math.atan2($t(n,w),$t(n,S))),R=ii(T-A),F=a*a/e;return{a:u,e:c,i:f,raan:d,argp:A,nu:R,p:F,h:a,energy:h,rp:F/(1+c),ra:c<1?F/(1-c):1/0,period:c<1?Dd(u,e):1/0}}function Nc(n,t,e,i=3986004418e5){if(e===0)return{r:n.slice(),v:t.slice()};let s=Kt(n),r=$t(t,t),a=$t(n,t),o=2/s-r/i,l=Math.sqrt(i);if(o>0){let S=Bn/(l*Math.pow(o,1.5));e=e%S}let c=o>1e-12?l*e*o:Math.sign(e)*Math.sqrt(-1/o)*Math.log(Math.max(1e-300,-2*i*o*e/(a+Math.sign(e)*Math.sqrt(-i/o)*(1-s*o)))),h=.5,u=1/6,f=0,p=s;for(let S=0;S<60;S++){if(f=c*c*o,f>1e-6){let A=Math.sqrt(f);h=(1-Math.cos(A))/f,u=(A-Math.sin(A))/(A*f)}else if(f<-1e-6){let A=Math.sqrt(-f);h=(1-Math.cosh(A))/f,u=(Math.sinh(A)-A)/(A*-f)}else h=.5-f/24+f*f/720,u=1/6-f/120+f*f/5040;p=c*c*h+a/l*c*(1-f*u)+s*(1-f*h);let x=c*c*c*u+a/l*c*c*h+s*c*(1-f*u)-l*e,w=x/p;if(c-=w,Math.abs(w)<1e-9*(1+Math.abs(c)))break}if(f=c*c*o,f>1e-6){let S=Math.sqrt(f);h=(1-Math.cos(S))/f,u=(S-Math.sin(S))/(S*f)}else if(f<-1e-6){let S=Math.sqrt(-f);h=(1-Math.cosh(S))/f,u=(Math.sinh(S)-S)/(S*-f)}else h=.5-f/24,u=1/6-f/120;p=c*c*h+a/l*c*(1-f*u)+s*(1-f*h);let g=1-c*c*h/s,_=e-c*c*c*u/l,m=1-c*c*h/p,d=l/(p*s)*c*(f*u-1);return{r:[g*n[0]+_*t[0],g*n[1]+_*t[1],g*n[2]+_*t[2]],v:[d*n[0]+m*t[0],d*n[1]+m*t[1],d*n[2]+m*t[2]]}}function Uc(n,t,e=3986004418e5){let i=2*Math.atan2(Math.sqrt(1-n.e)*Math.sin(t/2),Math.sqrt(1+n.e)*Math.cos(t/2));return ii(i-n.e*Math.sin(i))/Math.sqrt(e/(n.a*n.a*n.a))}function _r(n,t,e=3986004418e5){let i=Uc(n,t,e)-Uc(n,n.nu,e);return i<0?i+n.period:i}function Oc(n,t,e=3986004418e5){if(!(n.e<1)||n.rp>=t||n.ra<=t)return n.e<1&&n.ra<=t?0:1/0;let i=Bn-Math.acos(Math.max(-1,Math.min(1,(n.p/t-1)/n.e)));return _r(n,i,e)}function Fc(n,t,e,{ground:i=0,theta0:s=0,n:r=96}={}){let a=Xi(n,t);if(!(a.e<1))return{orbit:!1,escape:!0,el:a,points:[]};let o=le([($t(t,t)-3986004418e5/Kt(n))*n[0]-$t(n,t)*t[0],($t(t,t)-3986004418e5/Kt(n))*n[1]-$t(n,t)*t[1],($t(t,t)-3986004418e5/Kt(n))*n[2]-$t(n,t)*t[2]]),l=le(Be(n,t)),c=Be(l,a.e>1e-9?o:le(n)),h=a.e>1e-9?o:le(n),u=a.e>1e-9?a.nu:0,f=A=>{let T=a.p/(1+a.e*Math.cos(A));return ei(Ue(h,T*Math.cos(A)),Ue(c,T*Math.sin(A)))},p=A=>a.e>1e-9?_r(a,A):ii(A-u)/Bn*a.period,g={el:a,points:[],orbit:a.rp>6378137+i+1},_=Math.PI,m=f(_);if(g.apo={r:m,dt:p(_),alt:a.ra-6378137},g.peri={r:f(0),dt:p(0),alt:a.rp-6378137},g.orbit){for(let A=0;A<=r;A++){let T=u+Bn*A/r;g.points.push({r:f(T),dt:A===r?a.period:p(T)})}return g}let d=6378137+i,S=u;for(let A=0;A<4;A++){let T=(a.p/d-1)/a.e;if(T<-1||T>1)break;S=Bn-Math.acos(T),d=ze(f(S))+i}let x=ii(S-u);for(let A=0;A<=r;A++){let T=u+x*A/r,R=A===0?0:p(T),F=f(T);g.points.push({r:F,dt:R,ecef:mn(F,e+R,s)})}let w=g.points[g.points.length-1];return g.impact={ecef:w.ecef,dt:w.dt},ii(Math.PI-u)>x?g.apo=null:g.apo.ecef=mn(m,e+g.apo.dt,s),g}function po(n){let t=n.count||1;return{count:t,dry:n.dry*t,prop:n.prop*t,Fvac:n.thrustVac*t,Fsl:n.thrustVac*(n.ispSL/n.ispVac)*t,mdot:n.thrustVac*t/(mr*n.ispVac),area:Math.PI/4*n.diameter*n.diameter*t,throttle:n.throttle||null,parallel:!!n.parallel}}function mo(n){let t=n.stages.map(po),e=n.stages.map((a,o)=>({prop:t[o].prop,lit:a.ignite?.at==="liftoff",on:!0,done:!1})),i=()=>e.reduce((a,o,l)=>a+(o.on?t[l].dry:0),0)+n.payload.mass+(n.fairing?.mass||0),s=[],r=0;for(let a=0;a<50;a++){if(!e.some(p=>p.lit)){let p=e.findIndex(g=>g.on&&!g.done);if(p<0)break;e[p].lit=!0}let o=1/0,l=0,c=0,h=[];e.forEach((p,g)=>{p.lit&&(o=Math.min(o,p.prop/t[g].mdot),l+=t[g].Fvac,c+=t[g].mdot,h.push(n.stages[g].name||n.stages[g].id))});let u=i()+e.reduce((p,g)=>p+(g.on?g.prop:0),0),f=l/c*Math.log(u/(u-c*o));r+=f,s.push({label:h.join(" + "),dv:f,burn:o,m0:u,m1:u-c*o}),e.forEach((p,g)=>{p.lit&&(p.prop-=t[g].mdot*o,p.prop<=1e-9*t[g].prop&&(p.prop=0,p.lit=!1,p.done=!0,n.stages[g].drop&&(p.on=!1)))})}return{total:r,parts:s}}var Bc=(n,t)=>{if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=n[e-1],s=n[e];return i[1]+(s[1]-i[1])*(t-i[0])/(s[0]-i[0])}return n[n.length-1][1]};function xr(n,t,e){let{e:i,n:s,u:r}=wn(n),a=Math.cos(t*te),o=Math.sin(t*te),l=Math.cos(e*te),c=Math.sin(e*te);return[a*(l*s[0]+c*i[0])+o*r[0],a*(l*s[1]+c*i[1])+o*r[1],a*(l*s[2]+c*i[2])+o*r[2]]}var go=(n,t)=>[t[0]+ge*n[1],t[1]-ge*n[0],t[2]];function Ds(n,t){let{e,n:i,u:s}=wn(n),r=ni($t(t,s),-1,1);return{pitch:Math.asin(r)/te,heading:(Math.atan2($t(t,e),$t(t,i))/te+360)%360}}function zc(n,t,e=!1,i=7800){let s=Math.asin(t[2]/Kt(t)),r=Math.cos(n*te)/Math.cos(s),a=Math.abs(r)>1?Math.PI/2:Math.asin(r);e&&(a=Math.PI-a);let o=i*Math.sin(a)-ge*Math.hypot(t[0],t[1]),l=i*Math.cos(a);return{inertial:a/te,surface:(Math.atan2(o,l)/te+360)%360}}function Nd(n,t){let e=n.key==="alt"?"alt":"time",i=n.table[n.table.length-1][0],s={breaks:e==="time"?n.table.map(a=>a[0]):[],init(a){a.gs.az=n.azimuth??(n.inclination!=null?zc(n.inclination,a.r,n.south).surface:t?.azimuth??90)},steer(a,o,l,c,h){let u=h.flight;if(u.gs.kick)return u.gs.kick;let f=e==="alt"?Rc(o):a;return n.then==="prograde"&&f>i?le(go(o,l)):xr(o,Bc(n.table,f),u.gs.az)},onIgnite(a,o){n.upper==="apogeeKick"&&o>0&&(a.gs.kick=le(a.v))},cutoff:null},r=n.cutoff;return r?.speed?s.cutoff=(a,o,l)=>r.speed-Kt(go(o,l)):r?.inertialSpeed?s.cutoff=(a,o,l)=>r.inertialSpeed-Kt(l):r?.time&&(s.cutoff=a=>r.time-a,s.breaks.push(r.time)),s}function Od(n){let t=6378137+n.target.perigee,e=6378137+n.target.apogee,i=-3986004418e5/(t+e),s=n.closeAt,r=n.blend??10;return{breaks:[...n.table.map(a=>a[0]),s,s+r],init(a){a.gs.az=n.azimuth??zc(n.target.inc,a.r,n.south).surface},steer(a,o,l,c,h){let u=h.flight,f=xr(o,Bc(n.table,a),u.gs.az);if(a<s)return f;if(!(h.aT>0))return le(l);let p=Kt(o),g=Ue(o,1/p),_=ni(Math.cos(n.target.inc*te)/Math.hypot(g[0],g[1]),-1,1),m=n.south?Math.PI-Math.asin(_):Math.asin(_),d=le(Be([0,0,1],g)),S=Be(g,d),x=[Math.cos(m)*S[0]+Math.sin(m)*d[0],Math.cos(m)*S[1]+Math.sin(m)*d[1],Math.cos(m)*S[2]+Math.sin(m)*d[2]],w=Be(g,x),A=$t(l,g),T=$t(l,x),R=$t(l,w),F=Dc(t,(t+e)/2),M=Math.max(h.ve/h.aT*(1-Math.exp(-Math.max(F-T,1)/h.ve)),8),y=6*(t-p)/(M*M)-4*A/M,U=ni((y+3986004418e5/(p*p)-T*T/p)/h.aT,-.5,.92),D=Math.sqrt(1-U*U),V=ni(R/12/h.aT,-.3,.3),C=Math.sqrt(1-V*V),N=[D*(C*x[0]-V*w[0])+U*g[0],D*(C*x[1]-V*w[1])+U*g[1],D*(C*x[2]-V*w[2])+U*g[2]];return a<s+r?le(Ac(f,N,(a-s)/r)):N},cutoff(a,o,l,c){return c.stages.some((h,u)=>h.attached&&c.nums[u].parallel)?1:i-($t(l,l)/2-3986004418e5/Kt(o))}}}function Fd(n){return{breaks:[],cutoff:null,init(t){t.control.heading??=n?.azimuth??90},throttle:t=>t.control.throttle,steer(t,e,i,s,r){let a=r.flight.control;if(a.mode==="prograde")return le(i);if(a.mode==="surface"){let o=go(e,i);return Kt(o)>5?le(o):xr(e,90,0)}return xr(e,a.pitch,a.heading)}}}var Bd={breaks:[],cutoff:null,init(){},steer:(n,t,e)=>le(e)};function vr(n,{site:t}={}){return n?n.type==="manual"?Fd(t):n.type==="ascent"?Od(n):Nd(n,t):Bd}var zd=6509137,kd=6508137,Hd={id:"body",name:"A coasting body",stages:[],payload:{mass:1e3},drag:{table:[[0,2.2]],area:1}},Ns=1e-9,Vd=0;function Vc({id:n,vehicle:t=Hd,site:e=null,program:i=null,opts:s={},initial:r=null,t:a=0}={}){let o={dt:.05,j2:!1,drag:!0,gravity:!0,vacuum:!1,rails:!0,theta0:0,...s},l=t.stages.map(po),c={id:n??`flight-${++Vd}`,vehicle:t,site:e,program:i,opts:o,nums:l,t:a,tLiftoff:r?a:null,phase:r?"flight":"pad",r:[0,0,0],v:[0,0,0],dir:[0,0,1],stages:t.stages.map((h,u)=>({id:h.id,prop:l[u].prop,lit:!1,shut:!1,attached:!0})),fairing:!!t.fairing,fixed:0,area:0,loss:{dv:0,gravity:0,drag:0,steer:0},control:{pitch:90,heading:null,mode:"hold",throttle:1},gs:{},events:[],timers:[],rail:null,flags:{},track:[],stats:{maxQ:0,maxG:0,maxAlt:-1/0,maxSpeed:0,maxInertial:0,maxPeri:-1/0},tm:{thrust:0,q:0,mach:0,g:0,mass:0,alt:0,speed:0,vs:0,mdot:0},prev:{t:a,r:[0,0,0],v:[0,0,0]},guidance:vr(i,{site:e}),y:new Float64Array(10+l.length)};if(vo(c),r)c.r=r.r.slice(),c.v=r.v.slice(),c.padEcef=mn(c.r,a,o.theta0),c.ground=-1/0,c.flags.lifted=!0,qi(c);else{let h=Us(e,a,o.theta0);c.r=h.r,c.v=h.v,c.padEcef=mn(h.r,a,o.theta0),c.ground=e.height,c.dir=uo(h.r),qi(c)}return c.prev.r=c.r.slice(),c.prev.v=c.v.slice(),c}function vo(n){let t=n.vehicle,e=t.payload.mass+(n.fairing?t.fairing.mass:0),i=0,s=0;n.stages.forEach((r,a)=>{r.attached&&(e+=n.nums[a].dry,n.nums[a].parallel?s+=n.nums[a].area:i=Math.max(i,n.nums[a].area))}),n.fixed=e,n.area=t.drag.area??(i+s||Math.PI/4*(t.payload.diameter||.5)**2)}var Gd=n=>n.fixed+n.stages.reduce((t,e)=>t+(e.attached?e.prop:0),0),xo=n=>n.stages.some(t=>t.lit),Wd=(n,t)=>{if(t<=n[0][0])return n[0][1];for(let e=1;e<n.length;e++)if(t<=n[e][0]){let i=n[e-1],s=n[e];return i[1]+(s[1]-i[1])*(t-i[0])/(s[0]-i[0])}return n[n.length-1][1]},Tn=[0,0,0],yr={},Mr={aT:0,ve:0,flight:null};function si(n,t,e,i,s){let r=n.opts,a=[e[0],e[1],e[2]],o=[e[3],e[4],e[5]],l=Kt(a),c=l-ze(a);r.gravity?Cc(a,r.j2,Tn):Tn[0]=Tn[1]=Tn[2]=0;let h=0,u=0,f=295;r.vacuum||(Ic(c,yr),h=yr.p,u=yr.rho,f=yr.a);let p=o[0]+ge*a[1],g=o[1]-ge*a[0],_=o[2],m=Math.sqrt(p*p+g*g+_*_),d=n.fixed,S=0,x=0,w=n.throttle;for(let N=0;N<n.stages.length;N++){let H=n.stages[N];if(i[10+N]=0,!H.attached)continue;let Q=e[10+N]>0?e[10+N]:0;if(d+=Q,H.lit){let k=n.nums[N],Z=k.throttle?ni(w,k.throttle[0],1):1,K=Z*(k.Fvac-(k.Fvac-k.Fsl)*h/Tc);K>0&&(S+=K),x+=Z*k.mdot,i[10+N]=-Z*k.mdot}}let A=S/d,T=n.dir;(S>0||s)&&(Mr.aT=A,Mr.ve=x>0?S/x:0,Mr.flight=n,T=n.guidance.steer(t,a,o,d,Mr));let R=0,F=0,M=0;if(r.drag&&u>0&&m>0){let N=-.5*u*m*Wd(n.vehicle.drag.table,m/f)*n.area/d;R=N*p,F=N*g,M=N*_}i[0]=o[0],i[1]=o[1],i[2]=o[2],i[3]=Tn[0]+A*T[0]+R,i[4]=Tn[1]+A*T[1]+F,i[5]=Tn[2]+A*T[2]+M;let y=T[0],U=T[1],D=T[2];m>.5&&(y=p/m,U=g/m,D=_/m);let V=S>0?1:0,C=ge*ge;i[6]=A,i[7]=-V*((Tn[0]+C*a[0])*y+(Tn[1]+C*a[1])*U+Tn[2]*D),i[8]=-V*(R*y+F*U+M*D),i[9]=A-A*(T[0]*y+T[1]*U+T[2]*D),s&&(s.thrust=S,s.mdot=x,s.mass=d,s.alt=c,s.speed=m,s.mach=m/f,s.q=.5*u*m*m,s.p=h,s.g=Math.hypot(A*T[0]+R,A*T[1]+F,A*T[2]+M)/mr,s.vs=(a[0]*o[0]+a[1]*o[1]+a[2]*o[2])/l,s.dir=T,s.air=[p,g,_])}function Sr(n,t,e,i,s){let r=e.length,a=n._k1||=new Float64Array(r),o=n._k2||=new Float64Array(r),l=n._k3||=new Float64Array(r),c=n._k4||=new Float64Array(r),h=n._w||=new Float64Array(r);si(n,t,e,a);for(let u=0;u<r;u++)h[u]=e[u]+.5*i*a[u];si(n,t+.5*i,h,o);for(let u=0;u<r;u++)h[u]=e[u]+.5*i*o[u];si(n,t+.5*i,h,l);for(let u=0;u<r;u++)h[u]=e[u]+i*l[u];si(n,t+i,h,c);for(let u=0;u<r;u++)s[u]=e[u]+i/6*(a[u]+2*o[u]+2*l[u]+c[u]);return s}var br=n=>{let t=n.y;return t[0]=n.r[0],t[1]=n.r[1],t[2]=n.r[2],t[3]=n.v[0],t[4]=n.v[1],t[5]=n.v[2],t[6]=n.loss.dv,t[7]=n.loss.gravity,t[8]=n.loss.drag,t[9]=n.loss.steer,n.stages.forEach((e,i)=>{t[10+i]=e.prop}),t},Xd=(n,t)=>{n.r=[t[0],t[1],t[2]],n.v=[t[3],t[4],t[5]],n.loss.dv=t[6],n.loss.gravity=t[7],n.loss.drag=t[8],n.loss.steer=t[9],n.stages.forEach((e,i)=>{e.prop=t[10+i]>0?t[10+i]:0})},ie={},Os=new Float64Array(64);function qi(n){n.throttle=n.guidance.throttle?n.guidance.throttle(n):1,si(n,n.t-(n.tLiftoff??n.t),br(n),Os,ie);let t=n.tm;t.thrust=ie.thrust,t.q=ie.q,t.mach=ie.mach,t.g=n.phase==="flight"?ie.g:1,t.mass=ie.mass,t.alt=ie.alt,t.speed=ie.speed,t.vs=ie.vs,t.mdot=ie.mdot,ie.thrust>0?n.dir=ie.dir.slice():ie.q>20&&n.phase==="flight"&&(n.dir=le(ie.air))}function Gc(n,t,e,i,s){si(n,e,i,Os,ie);let r=[i[0],i[1],i[2]],a=mn(r,n.tLiftoff+e,n.opts.theta0);return{name:t,t:e,alt:ie.alt,speed:ie.speed,inertial:Math.hypot(i[3],i[4],i[5]),mach:ie.mach,q:ie.q,vs:ie.vs,g:ie.g,mass:ie.mass,downrange:Gi(a,n.padEcef),ecef:a,loss:{dv:i[6],gravity:i[7],drag:i[8],steer:i[9]},...s}}function wi(n,t,e,i=n.t-n.tLiftoff,s=br(n)){let r=Gc(n,t,i,s,e);return n.events.push(r),r}function Ei(n,t){let e=n.stages[t];e.lit||e.shut||!e.attached||(e.lit=!0,n.rail=null,wi(n,"ignition",{stage:e.id}),n.guidance.onIgnite?.(n,t))}function Er(n,t,e){let i=n.stages[t];wi(n,e,{stage:i.id}),i.lit=!1,i.shut=!0;let s=n.vehicle.stages[t].drop;s&&(s.delay>0?n.timers.push({t:n.t+s.delay,do:"drop",i:t}):wr(n,t)),!n.stages.some(r=>r.attached&&!r.shut)&&n.vehicle.payload.sepDelay!=null&&!n.flags.payloadTimer&&(n.flags.payloadTimer=!0,n.timers.push({t:n.t+n.vehicle.payload.sepDelay,do:"payload"}))}function wr(n,t){let e=n.stages[t];if(!e.attached)return;let i=n.nums[t].dry+e.prop;e.attached=!1,e.lit=!1,e.shut=!0,vo(n),wi(n,"separation",{stage:e.id,mass:i}),n.vehicle.stages.forEach((s,r)=>{let a=n.stages[r],o=s.ignite;if(!o||a.lit||a.shut||!a.attached)return;let l=o.of?o.of===e.id:r===t+1;o.at==="sep"&&l&&(o.delay>0?n.timers.push({t:n.t+o.delay,do:"ignite",i:r}):Ei(n,r)),o.at==="apogee"&&l&&(a.armed=!0,(n.flags.apogee||!n.opts.gravity)&&Ei(n,r))})}function yo(n){for(let t=0;t<n.timers.length;t++){let e=n.timers[t];e.t>n.t+Ns||(n.timers.splice(t--,1),e.do==="drop"?wr(n,e.i):e.do==="ignite"?Ei(n,e.i):e.do==="payload"&&wi(n,"payload",{payload:n.vehicle.payload.name}))}}function Wc(n){n.flags.apogee=!0,n.stages.forEach((t,e)=>{t.armed&&!t.lit&&!t.shut&&Ei(n,e)})}function Mo(n,t){if(n.phase==="flight"){if(t==="cutoff"&&n.stages.map((e,i)=>e.lit?i:-1).filter(e=>e>=0).forEach(e=>Er(n,e,"cutoff")),t==="stage"){let e=n.stages.map((r,a)=>r.attached&&n.nums[a].parallel?a:-1).filter(r=>r>=0);if(e.length){e.forEach(r=>wr(n,r)),qi(n);return}let i=n.stages.findIndex(r=>r.attached),s=n.stages.length-1;if(i<0)return;i===s?n.stages[i].lit?Er(n,i,"cutoff"):n.stages[i].shut||Ei(n,i):(wr(n,i),!n.stages[i+1].lit&&!n.stages[i+1].shut&&(n.timers=n.timers.filter(r=>!(r.do==="ignite"&&r.i===i+1)),Ei(n,i+1)))}qi(n)}}function Xc(n){if(n.phase!=="pad")return n;let t=Us(n.site,n.t,n.opts.theta0);return n.r=t.r,n.v=t.v,n.prev={t:n.t,r:t.r.slice(),v:t.v.slice()},n.phase="flight",n.tLiftoff=n.t,n.guidance.init?.(n),wi(n,"liftoff",{mass:Gd(n)}),n.vehicle.stages.forEach((e,i)=>{e.ignite?.at==="liftoff"&&Ei(n,i)}),n.track.push([0,...n.padEcef,0]),qi(n),n}var qd=[{name:"impact",dir:-1,stop:!0,g:(n,t,e,i)=>i.alt-n.ground,when:(n,t)=>n.flags.lifted&&t>.5},{name:"cutoff",dir:-1,stop:!0,g:(n,t,e)=>n.guidance.cutoff(t,e,[e[3],e[4],e[5]],n),when:n=>n.guidance.cutoff&&!n.flags.cut&&xo(n)},{name:"apogee",dir:-1,stop:!0,g:(n,t,e,i)=>i.vs,when:n=>!n.flags.apogee},{name:"mach1",dir:1,g:(n,t,e,i)=>i.mach-1,when:n=>!n.flags.mach1},{name:"space",dir:1,g:(n,t,e,i)=>i.alt-lo,when:()=>!0},{name:"entry",dir:-1,g:(n,t,e,i)=>i.alt-lo,when:()=>!0}],_o=(n,t,e,i)=>(si(n,e,i,Os,ie),t.g(n,e,i,ie));function Yd(n){let t=n.opts,e=n.t-n.tLiftoff,i=br(n).slice(),s=n._y1||=new Float64Array(i.length),r=n._yx||=new Float64Array(i.length);n.throttle=n.guidance.throttle?n.guidance.throttle(n):1;let a=(Math.floor(e/t.dt+1e-7)+1)*t.dt-e,o=-1;for(let u of n.timers)u.t-n.t<a&&(a=Math.max(u.t-n.t,0));for(let u of n.guidance.breaks)u>e+Ns&&u-e<a&&(a=u-e);if(n.stages.forEach((u,f)=>{if(!u.lit)return;let p=n.nums[f],g=p.throttle?ni(n.throttle,p.throttle[0],1):1,_=u.prop/(g*p.mdot);_<=a+Ns&&(a=Math.min(a,_),o=f)}),a<=0){yo(n);return}if(!n.flags.lifted){if(si(n,e,i,Os,ie),ie.thrust/ie.mass<=3986004418e5/Kt(n.r)**2){n.stages.forEach((f,p)=>{f.prop=Math.max(0,f.prop+Os[10+p]*a)}),n.t+=a;let u=Us(n.site,n.t,t.theta0);n.r=u.r,n.v=u.v,n.prev={t:n.t,r:u.r.slice(),v:u.v.slice()},kc(n,o);return}n.flags.lifted=!0}Sr(n,e,i,a,s);let l=[];for(let u of qd){if(!u.when(n,e))continue;let f=_o(n,u,e,i),p=_o(n,u,e+a,s);if(!(u.dir<0?f>0&&p<=0:f<0&&p>=0))continue;let g=0,_=a;for(let m=0;m<44;m++){let d=.5*(g+_),S=_o(n,u,e+d,Sr(n,e,i,d,r));(u.dir<0?S>0:S<0)?g=d:_=d}l.push({c:u,at:_})}l.sort((u,f)=>u.at-f.at);let c=l.find(u=>u.c.stop&&(u.c.name!=="apogee"||n.stages.some(f=>f.armed&&!f.lit&&!f.shut))),h=c?c.at:a;c&&(Sr(n,e,i,h,s),o=-1),n.prev={t:n.t,r:n.r,v:n.v},Xd(n,s),n.t+=h,o>=0&&(n.stages[o].prop=0);for(let u of l){if(u.at>h)break;let f=u.c.name,p=u.at===h?br(n).slice():Sr(n,e,i,u.at,r).slice();if(f==="cutoff"){n.flags.cut=!0,n.stages.map((g,_)=>g.lit?_:-1).filter(g=>g>=0).forEach(g=>Er(n,g,"cutoff"));continue}n.events.push(Gc(n,f,e+u.at,p)),f==="mach1"&&(n.flags.mach1=!0),f==="apogee"&&(n.stats.maxAlt=Math.max(n.stats.maxAlt,n.events[n.events.length-1].alt),Wc(n)),f==="impact"&&(n.phase="landed",n.landEcef=mn(n.r,n.t,t.theta0),n.stages.forEach(g=>{g.lit=!1}),n.v=[-ge*n.r[1],ge*n.r[0],0])}kc(n,o)}function kc(n,t){n.stages.forEach((c,h)=>{c.lit&&c.prop<=0&&Er(n,h,"burnout")}),yo(n),n.fairing&&n.vehicle.fairing.jettisonAlt!=null&&n.tm.alt>n.vehicle.fairing.jettisonAlt&&(n.fairing=!1,vo(n),wi(n,"fairing",{mass:n.vehicle.fairing.mass}));let e=n.tm.q,i=n._last;qi(n);let s=n.tm,r=n.stats,a=n.t-n.tLiftoff;!n.flags.maxq&&n.flags.lifted&&s.q<e&&e>500&&i&&(n.flags.maxq=!0,n.events.push({...i,name:"maxq"}),n.events.sort((c,h)=>c.t-h.t)),n._last={name:"",t:a,alt:s.alt,speed:s.speed,mach:s.mach,q:s.q,g:s.g,vs:s.vs,mass:s.mass,inertial:Kt(n.v)},s.q>r.maxQ&&(r.maxQ=s.q),s.g>r.maxG&&n.phase==="flight"&&(r.maxG=s.g),s.alt>r.maxAlt&&(r.maxAlt=s.alt),s.speed>r.maxSpeed&&(r.maxSpeed=s.speed);let o=Kt(n.v);o>r.maxInertial&&(r.maxInertial=o);let l=$d(n.r,n.v)-6378137;l>r.maxPeri&&(r.maxPeri=l),(a-(n._tTrack??-1)>=.5-Ns||n.phase==="landed")&&(n._tTrack=a,qc(n))}function $d(n,t){let e=n[1]*t[2]-n[2]*t[1],i=n[2]*t[0]-n[0]*t[2],s=n[0]*t[1]-n[1]*t[0],r=e*e+i*i+s*s,a=Math.sqrt(Math.max(0,1+2*(.5*(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])-3986004418e5/Kt(n))*r/(3986004418e5*3986004418e5)));return r/3986004418e5/(1+a)}function qc(n){let t=mn(n.r,n.t,n.opts.theta0);n.track.push([n.t-n.tLiftoff,t[0],t[1],t[2],Kt(n.r)-ze(n.r)]),n.track.length>9e3&&(n.track=n.track.filter((e,i)=>i%2===0||i>8e3))}function Zd(n){let t=Xi(n.r,n.v);n.rail={t0:n.t,r0:n.r.slice(),v0:n.v.slice(),el:t,tExit:n.t+Oc(t,kd),tApo:!n.flags.apogee&&t.e<1&&t.e>1e-9?n.t+_r(t,Math.PI):1/0,tSample:n.t+20},n.tm.thrust=0,n.tm.q=0,n.tm.g=0,n.tm.mdot=0}function Hc(n,t){let e=Nc(n.rail.r0,n.rail.v0,t-n.rail.t0);n.r=e.r,n.v=e.v,n.t=t}function Jd(n,t){let e=n.rail,i=Math.min(t,e.tExit,e.tApo);for(let r of n.timers)r.t<i&&(i=r.t);for(;e.tSample<i;)Hc(n,e.tSample),qc(n),e.tSample+=20;Hc(n,i),n.prev={t:n.t,r:n.r,v:n.v};let s=Kt(n.r);n.tm.alt=s-ze(n.r),n.tm.vs=(n.r[0]*n.v[0]+n.r[1]*n.v[1]+n.r[2]*n.v[2])/s,n.tm.speed=Math.hypot(n.v[0]+ge*n.r[1],n.v[1]-ge*n.r[0],n.v[2]),n.tm.mach=0,n.tm.alt>n.stats.maxAlt&&(n.stats.maxAlt=n.tm.alt),i===e.tApo&&(e.tApo=1/0,wi(n,"apogee"),Wc(n)),i===e.tExit&&(n.rail=null),yo(n)}function So(n,t){if(n.phase==="pad"){if(t>n.t){n.t=t;let e=Us(n.site,t,n.opts.theta0);n.r=e.r,n.v=e.v,n.prev={t,r:e.r,v:e.v}}return n}for(let e=0;n.t<t-Ns&&n.phase==="flight";e++)n.rail&&xo(n)&&(n.rail=null),!n.rail&&n.opts.rails&&!n.opts.j2&&!xo(n)&&Kt(n.r)>zd&&Zd(n),n.rail?Jd(n,t):Yd(n);return n.phase==="landed"&&t>n.t&&(n.t=t,n.r=ho(n.landEcef,t,n.opts.theta0),n.v=[-ge*n.r[1],ge*n.r[0],0],n.prev={t,r:n.r,v:n.v}),n}function Yc(n={}){let t={t:0,flights:[],opts:n,add(e){let i=Vc({...e,t:t.t,opts:{...n,...e.opts}});return t.flights.push(i),i},launch(e){return So(e,t.t),Xc(e)},remove(e){t.flights=t.flights.filter(i=>i!==e)},advance(e,i=1/0){let s=t.t,r=t.t+e,a=i<1/0?performance.now():0,o=Math.min(e,2);for(;t.t<r;){t.t=Math.min(r,t.t+o);for(let l of t.flights)So(l,t.t);if(i<1/0&&performance.now()-a>i)break;t.flights.some(l=>l.phase==="flight"&&!l.rail)||(o=r-t.t||o)}return t.t-s}};return t}function $c(n,t){let e=n.prev,i=n.t-e.t;if(!(i>0)||t>=n.t)return{r:n.r,v:n.v,t:n.t};let s=Math.max(0,(t-e.t)/i),r=i,a=s*s,o=a*s,l=2*o-3*a+1,c=o-2*a+s,h=-2*o+3*a,u=o-a;return{r:[0,1,2].map(f=>l*e.r[f]+c*r*e.v[f]+h*n.r[f]+u*r*n.v[f]),v:[0,1,2].map(f=>e.v[f]+(n.v[f]-e.v[f])*s),t:Math.max(t,e.t)}}function Zc(n){let t=l=>n.events.find(c=>c.name===l),e=l=>n.events.filter(c=>c.name===l),i=n.events.filter(l=>l.name==="burnout"||l.name==="cutoff"),s=i[i.length-1]||null,r=t("impact")||null,a=Xi(n.r,n.v),o=n.phase==="flight"&&a.e<1&&a.rp-6378137>12e4&&!n.stages.some(l=>l.lit);return{liftoffMass:t("liftoff")?.mass??0,apogee:n.stats.maxAlt,range:r?r.downrange:null,flightTime:r?r.t:null,burnout:s,firstBurnout:i[0]||null,impact:r,maxQ:n.stats.maxQ,maxG:n.stats.maxG,maxSpeed:n.stats.maxSpeed,maxInertialSpeed:n.stats.maxInertial,maxPeriapsis:n.stats.maxPeri,mach1:t("mach1")||null,maxq:t("maxq")||null,separations:e("separation"),losses:s?s.loss:{...n.loss},propLeft:n.stages.reduce((l,c)=>l+(c.attached?c.prop:0),0),inOrbit:o,orbit:{periAlt:a.rp-6378137,apoAlt:a.ra-6378137,inc:a.i/te,period:a.period,a:a.a,e:a.e}}}function Jc(n,t=n){let e=t.r,i=t.v,s=n.tm,r=Xi(e,i),a=mn(e,t.t,n.opts.theta0),o=gr(a),l=Ds(e,n.dir);return{t:n.tLiftoff==null?0:t.t-n.tLiftoff,phase:n.phase,rails:!!n.rail,alt:s.alt,speed:s.speed,inertial:Kt(i),vs:s.vs,mach:s.mach,q:s.q,g:s.g,thrust:s.thrust,mass:s.mass,prop:n.stages.reduce((c,h)=>c+(h.attached?h.prop:0),0),downrange:Gi(a,n.padEcef),lat:o.lat,lon:o.lon,pitch:l.pitch,heading:l.heading,apoAlt:r.e<1?r.ra-(r.rp>6378137?6378137:ze(e)):1/0,periAlt:r.rp-(r.rp>6378137?6378137:ze(e)),inc:r.i/te,period:r.period,ecc:r.e,dv:n.loss.dv,gravityLoss:n.loss.gravity,dragLoss:n.loss.drag,steerLoss:n.loss.steer}}var Fs={id:"v2",name:"V-2 / R-1",long:"V-2 (A-4) and its Soviet copy, the R-1",nation:"USA / USSR",year:1946,look:"v2",length:14.04,payload:{name:"instruments (in place of the warhead)",mass:1e3,diameter:.9},stages:[{id:"A4",name:"A-4",count:1,diameter:1.65,length:14.04,dry:3008,prop:8797,thrustVac:288800,ispVac:231,ispSL:196.1,ignite:{at:"liftoff"}}],drag:{table:[[0,.15],[.6,.15],[.8,.17],[.95,.25],[1.05,.36],[1.2,.4],[1.5,.35],[2,.27],[2.5,.22],[3,.19],[4,.16],[5,.15]]},flights:[{id:"vertical",name:"Sounding flight, straight up",site:"whiteSands",sites:["whiteSands","kapustinYar"],date:"17 December 1946",title:"V-2 No. 17, White Sands",story:"The captured V-2s carried instruments instead of a warhead: cosmic-ray counters, cameras, fruit flies. Straight up, engine run dry, and the first photographs of the Earth from space.",program:{type:"pitch",azimuth:0,table:[[0,90]]},real:[["apogee",187e3,"m"],["burnTime",68,"s"]],realNote:"White Sands flights reached 160 to 187 km in 1946-47; the record was 213 km (1951)."},{id:"range",name:"Range flight, 320 km",site:"kapustinYar",sites:["kapustinYar","whiteSands"],date:"10 October 1948",title:"R-1, Kapustin Yar",story:"The rocket as its builders meant it: a pitch-over on gyros, the engine cut at a set speed, then a ballistic arc. Korolev's R-1 flew this at Kapustin Yar in 1948.",program:{type:"pitch",table:[[0,90],[4,90],[47,42.69]],cutoff:{speed:1612}},real:[["range",32e4,"m"],["apogee",88e3,"m"],["burnoutSpeed",1600,"m/s"],["flightTime",320,"s"]],realNote:"Published A-4 / R-1 figures: 320 km (R-1: 270 km with a full warhead), 88 km high, about 5,760 km/h at cutoff."}]};var Kd=Fs.stages[0],Kc={id:"bumper",name:"Bumper-WAC",long:"Bumper: a V-2 with a WAC Corporal second stage",nation:"USA",year:1949,look:"bumper",length:17.25,payload:{name:"telemetry",mass:23,diameter:.3},stages:[{...Kd,id:"V2",name:"V-2",dry:3258,drop:{delay:0}},{id:"WAC",name:"WAC Corporal",count:1,diameter:.3,length:5.8,dry:117,prop:160,thrustVac:6700,ispVac:200,ispSL:170,ignite:{at:"sep",of:"V2",delay:0}}],drag:Fs.drag,flights:[{id:"bumper5",name:"Bumper 5, straight up",site:"whiteSands",sites:["whiteSands","canaveral"],date:"24 February 1949",title:"Bumper 5, White Sands",story:"The V-2 does the heavy lifting; at burnout the little WAC Corporal lights and leaves it behind. Two stages: the trick every orbital rocket since has used.",program:{type:"pitch",azimuth:0,table:[[0,90]],cutoff:{time:57.8}},real:[["apogee",393e3,"m"],["burnoutSpeed",2300,"m/s"]],realNote:"Bumper 5: 393 km, 8,290 km/h. A record that stood until 1956."}]};var jc={id:"r7",name:"R-7 / Sputnik",long:"R-7 Semyorka, 8K71PS: the Sputnik launcher",nation:"USSR",year:1957,look:"r7",length:29.17,payload:{name:"Sputnik 1 (PS-1)",mass:83.6,diameter:.58,sepDelay:20},fairing:{mass:500,jettisonAlt:null},stages:[{id:"BVGD",name:"Strap-ons B V G D",count:4,parallel:!0,diameter:2.68,length:19.6,dry:3400,prop:39600,thrustVac:97e4,ispVac:306,ispSL:250,ignite:{at:"liftoff"},drop:{delay:0}},{id:"A",name:"Core, Block A",count:1,diameter:2.95,length:28,dry:7495,prop:86505,thrustVac:912e3,ispVac:308,ispSL:241,ignite:{at:"liftoff"}}],drag:{table:[[0,.3],[.6,.3],[.9,.42],[1.1,.62],[1.4,.56],[2,.42],[3,.32],[5,.26],[8,.24]]},flights:[{id:"sputnik",name:"Sputnik 1 to orbit",site:"tyuratam",sites:["tyuratam","kapustinYar","canaveral","whiteSands"],date:"4 October 1957",title:"Sputnik 1, Tyuratam",story:"Twenty times the V-2's lift-off mass, five engines burning from the pad, the strap-ons falling away at two minutes. Five minutes after lift-off the core and an 84 kg sphere are in orbit, and the race is on.",program:{type:"ascent",target:{perigee:215e3,apogee:939e3,inc:65.1},table:[[0,90],[8,90],[30,79.3],[60,57.9],[90,38.6],[122,25.8]],closeAt:126,blend:10},real:[["perigee",215e3,"m"],["apogee",939e3,"m"],["inclination",65.1,"deg"],["period",96.2*60,"s"],["cutoff",295.4,"s"]],realNote:"Sputnik 1: 215 x 939 km, 65.1 degrees, once round every 96.2 minutes. The core ran dry a second early; the plan was 1,450 km."}]};var Qc={id:"juno1",name:"Juno I / Explorer 1",long:"Juno I (Jupiter-C): the Explorer 1 launcher",nation:"USA",year:1958,look:"juno1",length:21.2,payload:{name:"Explorer 1",mass:8.3,diameter:.15},stages:[{id:"S1",name:"Redstone",count:1,diameter:1.78,length:17.5,dry:3769,prop:24820,thrustVac:416100,ispVac:265,ispSL:235,ignite:{at:"liftoff"},drop:{delay:5}},{id:"S2",name:"Stage 2: 11 Sergeants",count:1,diameter:.8,length:1.2,dry:119,prop:221,thrustVac:73400,ispVac:220,ispSL:190,ignite:{at:"apogee",of:"S1"},drop:{delay:2}},{id:"S3",name:"Stage 3: 3 Sergeants",count:1,diameter:.4,length:1.2,dry:34,prop:60.3,thrustVac:2e4,ispVac:220,ispSL:190,ignite:{at:"sep",of:"S2"},drop:{delay:2}},{id:"S4",name:"Stage 4: 1 Sergeant",count:1,diameter:.15,length:1.2,dry:5.67,prop:22.6,thrustVac:8e3,ispVac:235,ispSL:200,ignite:{at:"sep",of:"S3"}}],drag:{table:[[0,.25],[.6,.25],[.9,.35],[1.1,.5],[1.5,.42],[2,.34],[3,.26],[5,.22]]},flights:[{id:"explorer1",name:"Explorer 1 to orbit",site:"canaveral",sites:["canaveral","whiteSands","tyuratam","kapustinYar"],date:"31 January 1958",title:"Explorer 1, Cape Canaveral",story:"America's answer, four months after Sputnik: von Braun's Redstone throws a spinning tub of solid rockets to the top of its arc, and they fire level. Explorer 1 finds the Van Allen belts.",program:{type:"pitch",azimuth:111.04,table:[[0,90],[10,90],[40,70.66],[100,44.87],[155,36.27]],upper:"apogeeKick"},real:[["perigee",358e3,"m"],["apogee",255e4,"m"],["inclination",33.24,"deg"],["period",114.8*60,"s"]],realNote:"Explorer 1: 358 x 2,550 km, 33.24 degrees, 114.8 minutes. It stayed up until 1970."}]};var zn={whiteSands:{id:"whiteSands",name:"White Sands",where:"New Mexico, USA",nation:"USA",lat:32.4002,lon:-106.3776,height:1200,azimuth:0,note:"Launch Complex 33, the Army's V-2 pad from 1946. The range runs north."},kapustinYar:{id:"kapustinYar",name:"Kapustin Yar",where:"Astrakhan, USSR",nation:"USSR",lat:48.57,lon:45.9,height:0,azimuth:105,note:"The first Soviet rocket range: captured A-4s from October 1947, the R-1 from 1948."},tyuratam:{id:"tyuratam",name:"Tyuratam (Baikonur)",where:"Kazakh SSR, USSR",nation:"USSR",lat:45.9203,lon:63.3422,height:100,azimuth:35,note:"Site 1, the R-7 pad: Sputnik in 1957, Gagarin in 1961."},canaveral:{id:"canaveral",name:"Cape Canaveral",where:"Florida, USA",nation:"USA",lat:28.4444,lon:-80.5706,height:3,azimuth:105,note:"Launch Complex 26A: Explorer 1, 31 January 1958. Bumper 8 flew from the Cape in 1950."}};var bo={v2:Fs,bumper:Kc,r7:jc,juno1:Qc};var Jl="160";var jd=0,th=1,Qd=2;var Iu=1,tf=2,Xn=3,Cn=0,Ve=1,je=2;var di=0,gs=1,js=2,eh=3,nh=4,ef=5,Li=100,nf=101,sf=102,ih=103,sh=104,rf=200,af=201,of=202,lf=203,sl=204,rl=205,cf=206,hf=207,uf=208,df=209,ff=210,pf=211,mf=212,gf=213,_f=214,xf=0,vf=1,yf=2,sa=3,Mf=4,Sf=5,bf=6,Ef=7,Kl=0,wf=1,Tf=2,fi=0,Af=1,Rf=2,Cf=3,Pf=4,Lf=5,If=6;var Uu=300,vs=301,ys=302,al=303,ol=304,Xa=306,Ms=1e3,vn=1001,ll=1002,$e=1003,rh=1004;var Eo=1005;var ln=1006,Uf=1007;var Qs=1008;var pi=1009,Df=1010,Nf=1011,jl=1012,Du=1013,hi=1014,ui=1015,tr=1016,Nu=1017,Ou=1018,Di=1020,Of=1021,yn=1023,Ff=1024,Bf=1025,Ni=1026,Ss=1027,zf=1028,Fu=1029,kf=1030,Bu=1031,zu=1033,wo=33776,To=33777,Ao=33778,Ro=33779,ah=35840,oh=35841,lh=35842,ch=35843,ku=36196,hh=37492,uh=37496,dh=37808,fh=37809,ph=37810,mh=37811,gh=37812,_h=37813,xh=37814,vh=37815,yh=37816,Mh=37817,Sh=37818,bh=37819,Eh=37820,wh=37821,Co=36492,Th=36494,Ah=36495,Hf=36283,Rh=36284,Ch=36285,Ph=36286;var ra=2300,aa=2301,Po=2302,Lh=2400,Ih=2401,Uh=2402;var Hu=3e3,Oi=3001,Vf=3200,Gf=3201,Ql=0,Wf=1,cn="",xe="srgb",$n="srgb-linear",tc="display-p3",qa="display-p3-linear",oa="linear",ce="srgb",la="rec709",ca="p3";var Yi=7680;var Dh=519,Xf=512,qf=513,Yf=514,Vu=515,$f=516,Zf=517,Jf=518,Kf=519,cl=35044;var Nh="300 es",hl=1035,Yn=2e3,ha=2001,mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;let i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;let s=this._listeners[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;let i=this._listeners[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},ke=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oh=1234567,Xs=Math.PI/180,er=180/Math.PI;function Rn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ke[n&255]+ke[n>>8&255]+ke[n>>16&255]+ke[n>>24&255]+"-"+ke[t&255]+ke[t>>8&255]+"-"+ke[t>>16&15|64]+ke[t>>24&255]+"-"+ke[e&63|128]+ke[e>>8&255]+"-"+ke[e>>16&255]+ke[e>>24&255]+ke[i&255]+ke[i>>8&255]+ke[i>>16&255]+ke[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function ec(n,t){return(n%t+t)%t}function jf(n,t,e,i,s){return i+(n-t)*(s-i)/(e-t)}function Qf(n,t,e){return n!==t?(e-n)/(t-n):0}function qs(n,t,e){return(1-e)*n+e*t}function tp(n,t,e,i){return qs(n,t,1-Math.exp(-e*i))}function ep(n,t=1){return t-Math.abs(ec(n,t*2)-t)}function np(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*(3-2*n))}function ip(n,t,e){return n<=t?0:n>=e?1:(n=(n-t)/(e-t),n*n*n*(n*(n*6-15)+10))}function sp(n,t){return n+Math.floor(Math.random()*(t-n+1))}function rp(n,t){return n+Math.random()*(t-n)}function ap(n){return n*(.5-Math.random())}function op(n){n!==void 0&&(Oh=n);let t=Oh+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function lp(n){return n*Xs}function cp(n){return n*er}function ul(n){return(n&n-1)===0&&n!==0}function hp(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ua(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function up(n,t,e,i,s){let r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+i)/2),h=a((t+i)/2),u=r((t-i)/2),f=a((t-i)/2),p=r((i-t)/2),g=a((i-t)/2);switch(s){case"XYX":n.set(o*h,l*u,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*u,o*c);break;case"ZXZ":n.set(l*u,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function An(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}var Gu={DEG2RAD:Xs,RAD2DEG:er,generateUUID:Rn,clamp:Me,euclideanModulo:ec,mapLinear:jf,inverseLerp:Qf,lerp:qs,damp:tp,pingpong:ep,smoothstep:np,smootherstep:ip,randInt:sp,randFloat:rp,randFloatSpread:ap,seededRandom:op,degToRad:lp,radToDeg:cp,isPowerOfTwo:ul,ceilPowerOfTwo:hp,floorPowerOfTwo:ua,setQuaternionFromProperEuler:up,normalize:ee,denormalize:An},at=class n{constructor(t=0,e=0){n.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Jt=class n{constructor(t,e,i,s,r,a,o,l,c){n.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],u=i[7],f=i[2],p=i[5],g=i[8],_=s[0],m=s[3],d=s[6],S=s[1],x=s[4],w=s[7],A=s[2],T=s[5],R=s[8];return r[0]=a*_+o*S+l*A,r[3]=a*m+o*x+l*T,r[6]=a*d+o*w+l*R,r[1]=c*_+h*S+u*A,r[4]=c*m+h*x+u*T,r[7]=c*d+h*w+u*R,r[2]=f*_+p*S+g*A,r[5]=f*m+p*x+g*T,r[8]=f*d+p*w+g*R,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=u*_,t[1]=(s*c-h*i)*_,t[2]=(o*i-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(i*l-c*e)*_,t[8]=(a*e-i*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Lo.makeScale(t,e)),this}rotate(t){return this.premultiply(Lo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Lo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Lo=new Jt;function Wu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function da(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function dp(){let n=da("canvas");return n.style.display="block",n}var Fh={};function Ys(n){n in Fh||(Fh[n]=!0,console.warn(n))}var Bh=new Jt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),zh=new Jt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Tr={[$n]:{transfer:oa,primaries:la,toReference:n=>n,fromReference:n=>n},[xe]:{transfer:ce,primaries:la,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[qa]:{transfer:oa,primaries:ca,toReference:n=>n.applyMatrix3(zh),fromReference:n=>n.applyMatrix3(Bh)},[tc]:{transfer:ce,primaries:ca,toReference:n=>n.convertSRGBToLinear().applyMatrix3(zh),fromReference:n=>n.applyMatrix3(Bh).convertLinearToSRGB()}},fp=new Set([$n,qa]),ne={enabled:!0,_workingColorSpace:$n,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!fp.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,t,e){if(this.enabled===!1||t===e||!t||!e)return n;let i=Tr[t].toReference,s=Tr[e].fromReference;return s(i(n))},fromWorkingColorSpace:function(n,t){return this.convert(n,this._workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this._workingColorSpace)},getPrimaries:function(n){return Tr[n].primaries},getTransfer:function(n){return n===cn?oa:Tr[n].transfer}};function _s(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Io(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}var $i,fa=class{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{$i===void 0&&($i=da("canvas")),$i.width=t.width,$i.height=t.height;let i=$i.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=$i}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=da("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_s(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(_s(e[i]/255)*255):e[i]=_s(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},pp=0,pa=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=Rn(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Uo(s[a].image)):r.push(Uo(s[a]))}else r=Uo(s);i.url=r}return e||(t.images[this.uuid]=i),i}};function Uo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fa.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var mp=0,hn=class n extends mi{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=vn,s=vn,r=ln,a=Qs,o=yn,l=pi,c=n.DEFAULT_ANISOTROPY,h=cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=Rn(),this.name="",this.source=new pa(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Oi?xe:cn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Uu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ms:t.x=t.x-Math.floor(t.x);break;case vn:t.x=t.x<0?0:1;break;case ll:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ms:t.y=t.y-Math.floor(t.y);break;case vn:t.y=t.y<0?0:1;break;case ll:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===xe?Oi:Hu}set encoding(t){Ys("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=t===Oi?xe:cn}};hn.DEFAULT_IMAGE=null;hn.DEFAULT_MAPPING=Uu;hn.DEFAULT_ANISOTROPY=1;var pe=class n{constructor(t=0,e=0,i=0,s=1){n.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(c+1)/2,w=(p+1)/2,A=(d+1)/2,T=(h+f)/4,R=(u+_)/4,F=(g+m)/4;return x>w&&x>A?x<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(x),s=T/i,r=R/i):w>A?w<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),i=T/s,r=F/s):A<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),i=R/r,s=F/r),this.set(i,s,r,e),this}let S=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(u-_)/S,this.z=(f-h)/S,this.w=Math.acos((c+p+d-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},dl=class extends mi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);let s={width:t,height:e,depth:1};i.encoding!==void 0&&(Ys("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===Oi?xe:cn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new hn(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(t,e,i=1){(this.width!==t||this.height!==e||this.depth!==i)&&(this.width=t,this.height=e,this.depth=i,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;let e=Object.assign({},t.texture.image);return this.texture.source=new pa(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},Zn=class extends dl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ma=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var fl=class extends hn{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=$e,this.minFilter=$e,this.wrapR=vn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gi=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],u=i[s+3],f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o,d=l*f+c*p+h*g+u*_,S=d>=0?1:-1,x=1-d*d;if(x>Number.EPSILON){let A=Math.sqrt(x),T=Math.atan2(A,d*S);m=Math.sin(m*T)/A,o=Math.sin(o*T)/A}let w=o*S;if(l=l*m+f*w,c=c*m+p*w,h=h*m+g*w,u=u*m+_*w,m===1-o){let A=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=A,c*=A,h*=A,u*=A}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),u=o(r/2),f=l(i/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=i+o+u;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(i>o&&i>u){let p=2*Math.sqrt(1+i-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){let p=2*Math.sqrt(1+o-i-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{let p=2*Math.sqrt(1+u-i-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let i=this._x,s=this._y,r=this._z,a=this._w,o=a*t._w+i*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let p=1-e;return this._w=p*a+e*this._w,this._x=p*i+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=i*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=Math.random(),e=Math.sqrt(1-t),i=Math.sqrt(t),s=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(s),i*Math.sin(r),i*Math.cos(r),e*Math.sin(s))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class n{constructor(t=0,e=0,i=0){n.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(kh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(kh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),u=2*(r*i-a*e);return this.x=e+l*c+a*u-o*h,this.y=i+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,i=Math.sqrt(1-t**2);return this.x=i*Math.cos(e),this.y=i*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Do=new L,kh=new gi,un=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(gn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(gn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=gn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(t.matrixWorld),this.expandByPoint(gn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ar.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ar.copy(i.boundingBox)),Ar.applyMatrix4(t.matrixWorld),this.union(Ar)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,gn),gn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Bs),Rr.subVectors(this.max,Bs),Zi.subVectors(t.a,Bs),Ji.subVectors(t.b,Bs),Ki.subVectors(t.c,Bs),ri.subVectors(Ji,Zi),ai.subVectors(Ki,Ji),Ti.subVectors(Zi,Ki);let e=[0,-ri.z,ri.y,0,-ai.z,ai.y,0,-Ti.z,Ti.y,ri.z,0,-ri.x,ai.z,0,-ai.x,Ti.z,0,-Ti.x,-ri.y,ri.x,0,-ai.y,ai.x,0,-Ti.y,Ti.x,0];return!No(e,Zi,Ji,Ki,Rr)||(e=[1,0,0,0,1,0,0,0,1],!No(e,Zi,Ji,Ki,Rr))?!1:(Cr.crossVectors(ri,ai),e=[Cr.x,Cr.y,Cr.z],No(e,Zi,Ji,Ki,Rr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,gn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(gn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}},kn=[new L,new L,new L,new L,new L,new L,new L,new L],gn=new L,Ar=new un,Zi=new L,Ji=new L,Ki=new L,ri=new L,ai=new L,Ti=new L,Bs=new L,Rr=new L,Cr=new L,Ai=new L;function No(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ai.fromArray(n,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),l=t.dot(Ai),c=e.dot(Ai),h=i.dot(Ai);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var gp=new un,zs=new L,Oo=new L,Pn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):gp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;zs.subVectors(t,this.center);let e=zs.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(zs,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(zs.copy(t.center).add(Oo)),this.expandByPoint(zs.copy(t.center).sub(Oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}},Hn=new L,Fo=new L,Pr=new L,oi=new L,Bo=new L,Lr=new L,zo=new L,ga=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Hn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Hn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Hn.copy(this.origin).addScaledVector(this.direction,e),Hn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fo.copy(t).add(e).multiplyScalar(.5),Pr.copy(e).sub(t).normalize(),oi.copy(this.origin).sub(Fo);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Pr),o=oi.dot(this.direction),l=-oi.dot(Pr),c=oi.lengthSq(),h=Math.abs(1-a*a),u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){let _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fo).addScaledVector(Pr,f),p}intersectSphere(t,e){Hn.subVectors(t.center,this.origin);let i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(i=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(i=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Hn)!==null}intersectTriangle(t,e,i,s,r){Bo.subVectors(e,t),Lr.subVectors(i,t),zo.crossVectors(Bo,Lr);let a=this.direction.dot(zo),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;oi.subVectors(this.origin,t);let l=o*this.direction.dot(Lr.crossVectors(oi,Lr));if(l<0)return null;let c=o*this.direction.dot(Bo.cross(oi));if(c<0||l+c>a)return null;let h=-o*oi.dot(zo);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},he=class n{constructor(t,e,i,s,r,a,o,l,c,h,u,f,p,g,_,m){n.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,i,s,r,a,o,l,c,h,u,f,p,g,_,m){let d=this.elements;return d[0]=t,d[4]=e,d[8]=i,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,i=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),a=1/ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){let f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){let f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){let f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(_p,t,xp)}lookAt(t,e,i){let s=this.elements;return en.subVectors(t,e),en.lengthSq()===0&&(en.z=1),en.normalize(),li.crossVectors(i,en),li.lengthSq()===0&&(Math.abs(i.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),li.crossVectors(i,en)),li.normalize(),Ir.crossVectors(en,li),s[0]=li.x,s[4]=Ir.x,s[8]=en.x,s[1]=li.y,s[5]=Ir.y,s[9]=en.y,s[2]=li.z,s[6]=Ir.z,s[10]=en.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],u=i[5],f=i[9],p=i[13],g=i[2],_=i[6],m=i[10],d=i[14],S=i[3],x=i[7],w=i[11],A=i[15],T=s[0],R=s[4],F=s[8],M=s[12],y=s[1],U=s[5],D=s[9],V=s[13],C=s[2],N=s[6],H=s[10],Q=s[14],k=s[3],Z=s[7],K=s[11],W=s[15];return r[0]=a*T+o*y+l*C+c*k,r[4]=a*R+o*U+l*N+c*Z,r[8]=a*F+o*D+l*H+c*K,r[12]=a*M+o*V+l*Q+c*W,r[1]=h*T+u*y+f*C+p*k,r[5]=h*R+u*U+f*N+p*Z,r[9]=h*F+u*D+f*H+p*K,r[13]=h*M+u*V+f*Q+p*W,r[2]=g*T+_*y+m*C+d*k,r[6]=g*R+_*U+m*N+d*Z,r[10]=g*F+_*D+m*H+d*K,r[14]=g*M+_*V+m*Q+d*W,r[3]=S*T+x*y+w*C+A*k,r[7]=S*R+x*U+w*N+A*Z,r[11]=S*F+x*D+w*H+A*K,r[15]=S*M+x*V+w*Q+A*W,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+i*c*f+s*o*p-i*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+i*a*p+r*o*h-i*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-i*a*f+i*l*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],S=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,x=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,w=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,A=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,T=e*S+i*x+s*w+r*A;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let R=1/T;return t[0]=S*R,t[1]=(_*f*r-u*m*r-_*s*p+i*m*p+u*s*d-i*f*d)*R,t[2]=(o*m*r-_*l*r+_*s*c-i*m*c-o*s*d+i*l*d)*R,t[3]=(u*l*r-o*f*r-u*s*c+i*f*c+o*s*p-i*l*p)*R,t[4]=x*R,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*R,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*R,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*R,t[8]=w*R,t[9]=(g*u*r-h*_*r-g*i*p+e*_*p+h*i*d-e*u*d)*R,t[10]=(a*_*r-g*o*r+g*i*c-e*_*c-a*i*d+e*o*d)*R,t[11]=(h*o*r-a*u*r-h*i*c+e*u*c+a*i*p-e*o*p)*R,t[12]=A*R,t[13]=(h*_*s-g*u*s+g*i*f-e*_*f-h*i*m+e*u*m)*R,t[14]=(g*o*s-a*_*s-g*i*l+e*_*l+a*i*m-e*o*m)*R,t[15]=(a*u*s-h*o*s+h*i*l-e*u*l-a*i*f+e*o*f)*R,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,S=l*c,x=l*h,w=l*u,A=i.x,T=i.y,R=i.z;return s[0]=(1-(_+d))*A,s[1]=(p+w)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(p-w)*T,s[5]=(1-(f+d))*T,s[6]=(m+S)*T,s[7]=0,s[8]=(g+x)*R,s[9]=(m-S)*R,s[10]=(1-(f+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements,r=ji.set(s[0],s[1],s[2]).length(),a=ji.set(s[4],s[5],s[6]).length(),o=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],_n.copy(this);let c=1/r,h=1/a,u=1/o;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=u,_n.elements[9]*=u,_n.elements[10]*=u,e.setFromRotationMatrix(_n),i.x=r,i.y=a,i.z=o,this}makePerspective(t,e,i,s,r,a,o=Yn){let l=this.elements,c=2*r/(e-t),h=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),p,g;if(o===Yn)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===ha)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=Yn){let l=this.elements,c=1/(e-t),h=1/(i-s),u=1/(a-r),f=(e+t)*c,p=(i+s)*h,g,_;if(o===Yn)g=(a+r)*u,_=-2*u;else if(o===ha)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},ji=new L,_n=new he,_p=new L(0,0,0),xp=new L(1,1,1),li=new L,Ir=new L,en=new L,Hh=new he,Vh=new gi,_a=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hh,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Vh.setFromEuler(this),this.setFromQuaternion(Vh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};_a.DEFAULT_ORDER="XYZ";var xa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},vp=0,Gh=new L,Qi=new gi,Vn=new he,Ur=new L,ks=new L,yp=new L,Mp=new gi,Wh=new L(1,0,0),Xh=new L(0,1,0),qh=new L(0,0,1),Sp={type:"added"},bp={type:"removed"},Ge=class n extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=Rn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new L,e=new _a,i=new gi,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new Jt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new xa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.multiply(Qi),this}rotateOnWorldAxis(t,e){return Qi.setFromAxisAngle(t,e),this.quaternion.premultiply(Qi),this}rotateX(t){return this.rotateOnAxis(Wh,t)}rotateY(t){return this.rotateOnAxis(Xh,t)}rotateZ(t){return this.rotateOnAxis(qh,t)}translateOnAxis(t,e){return Gh.copy(t).applyQuaternion(this.quaternion),this.position.add(Gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wh,t)}translateY(t){return this.translateOnAxis(Xh,t)}translateZ(t){return this.translateOnAxis(qh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Vn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Ur.copy(t):Ur.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vn.lookAt(ks,Ur,this.up):Vn.lookAt(Ur,ks,this.up),this.quaternion.setFromRotationMatrix(Vn),s&&(Vn.extractRotation(s.matrixWorld),Qi.setFromRotationMatrix(Vn),this.quaternion.premultiply(Qi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(Sp)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bp)),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Vn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Vn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Vn),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,t,yp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ks,Mp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++){let r=e[i];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){let i=this.parent;if(t===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++){let o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}};Ge.DEFAULT_UP=new L(0,1,0);Ge.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ge.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xn=new L,Gn=new L,ko=new L,Wn=new L,ts=new L,es=new L,Yh=new L,Ho=new L,Vo=new L,Go=new L,Dr=!1,Ui=class n{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){xn.subVectors(s,e),Gn.subVectors(i,e),ko.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(Gn),l=xn.dot(ko),c=Gn.dot(Gn),h=Gn.dot(ko),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;let f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getUV(t,e,i,s,r,a,o,l){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),this.getInterpolation(t,e,i,s,r,a,o,l)}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wn.x),l.addScaledVector(a,Wn.y),l.addScaledVector(o,Wn.z),l)}static isFrontFacing(t,e,i,s){return xn.subVectors(i,e),Gn.subVectors(t,e),xn.cross(Gn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),xn.cross(Gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,i,s,r){return Dr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Dr=!0),n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;ts.subVectors(s,i),es.subVectors(r,i),Ho.subVectors(t,i);let l=ts.dot(Ho),c=es.dot(Ho);if(l<=0&&c<=0)return e.copy(i);Vo.subVectors(t,s);let h=ts.dot(Vo),u=es.dot(Vo);if(h>=0&&u<=h)return e.copy(s);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(ts,a);Go.subVectors(t,r);let p=ts.dot(Go),g=es.dot(Go);if(g>=0&&p<=g)return e.copy(r);let _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(es,o);let m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Yh.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Yh,o);let d=1/(m+_+f);return a=_*d,o=f*d,e.copy(i).addScaledVector(ts,a).addScaledVector(es,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Xu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},Nr={h:0,s:0,l:0};function Wo(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}var Gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=xe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=ec(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Wo(a,r,t+1/3),this.g=Wo(a,r,t),this.b=Wo(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=xe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=xe){let i=Xu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_s(t.r),this.g=_s(t.g),this.b=_s(t.b),this}copyLinearToSRGB(t){return this.r=Io(t.r),this.g=Io(t.g),this.b=Io(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=xe){return ne.fromWorkingColorSpace(He.copy(this),t),Math.round(Me(He.r*255,0,255))*65536+Math.round(Me(He.g*255,0,255))*256+Math.round(Me(He.b*255,0,255))}getHexString(t=xe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(He.copy(this),e);let i=He.r,s=He.g,r=He.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case i:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-i)/u+2;break;case r:l=(i-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(He.copy(this),e),t.r=He.r,t.g=He.g,t.b=He.b,t}getStyle(t=xe){ne.fromWorkingColorSpace(He.copy(this),t);let e=He.r,i=He.g,s=He.b;return t!==xe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ci),this.setHSL(ci.h+t,ci.s+e,ci.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ci),t.getHSL(Nr);let i=qs(ci.h,Nr.h,e),s=qs(ci.s,Nr.s,e),r=qs(ci.l,Nr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},He=new Gt;Gt.NAMES=Xu;var Ep=0,Ln=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=Rn(),this.name="",this.type="Material",this.blending=gs,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sl,this.blendDst=rl,this.blendEquation=Li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=sa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Yi,this.stencilZFail=Yi,this.stencilZPass=Yi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(i.blending=this.blending),this.side!==Cn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==sl&&(i.blendSrc=this.blendSrc),this.blendDst!==rl&&(i.blendDst=this.blendDst),this.blendEquation!==Li&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==sa&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dh&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Yi&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Yi&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Yi&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},bs=class extends Ln{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ye=new L,Or=new at,sn=class{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Or.fromBufferAttribute(this,e),Or.applyMatrix3(t),this.setXY(e,Or.x,Or.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix3(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyMatrix4(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.applyNormalMatrix(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ye.fromBufferAttribute(this,e),ye.transformDirection(t),this.setXYZ(e,ye.x,ye.y,ye.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=ee(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),s=ee(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==cl&&(t.usage=this.usage),t}};var va=class extends sn{constructor(t,e,i){super(new Uint16Array(t),e,i)}};var ya=class extends sn{constructor(t,e,i){super(new Uint32Array(t),e,i)}};var jt=class extends sn{constructor(t,e,i){super(new Float32Array(t),e,i)}};var wp=0,on=new he,Xo=new Ge,ns=new L,nn=new un,Hs=new un,Re=new L,Se=class n extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Rn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Wu(t)?ya:va)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Jt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return on.makeRotationFromQuaternion(t),this.applyMatrix4(on),this}rotateX(t){return on.makeRotationX(t),this.applyMatrix4(on),this}rotateY(t){return on.makeRotationY(t),this.applyMatrix4(on),this}rotateZ(t){return on.makeRotationZ(t),this.applyMatrix4(on),this}translate(t,e,i){return on.makeTranslation(t,e,i),this.applyMatrix4(on),this}scale(t,e,i){return on.makeScale(t,e,i),this.applyMatrix4(on),this}lookAt(t){return Xo.lookAt(t),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(t){let e=[];for(let i=0,s=t.length;i<s;i++){let r=t[i];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];nn.setFromBufferAttribute(r),this.morphTargetsRelative?(Re.addVectors(this.boundingBox.min,nn.min),this.boundingBox.expandByPoint(Re),Re.addVectors(this.boundingBox.max,nn.max),this.boundingBox.expandByPoint(Re)):(this.boundingBox.expandByPoint(nn.min),this.boundingBox.expandByPoint(nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new L,1/0);return}if(t){let i=this.boundingSphere.center;if(nn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Hs.setFromBufferAttribute(o),this.morphTargetsRelative?(Re.addVectors(nn.min,Hs.min),nn.expandByPoint(Re),Re.addVectors(nn.max,Hs.max),nn.expandByPoint(Re)):(nn.expandByPoint(Hs.min),nn.expandByPoint(Hs.max))}nn.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Re.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Re));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Re.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(t,c),Re.add(ns)),s=Math.max(s,i.distanceToSquared(Re))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.array,s=e.position.array,r=e.normal.array,a=e.uv.array,o=s.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new sn(new Float32Array(4*o),4));let l=this.getAttribute("tangent").array,c=[],h=[];for(let y=0;y<o;y++)c[y]=new L,h[y]=new L;let u=new L,f=new L,p=new L,g=new at,_=new at,m=new at,d=new L,S=new L;function x(y,U,D){u.fromArray(s,y*3),f.fromArray(s,U*3),p.fromArray(s,D*3),g.fromArray(a,y*2),_.fromArray(a,U*2),m.fromArray(a,D*2),f.sub(u),p.sub(u),_.sub(g),m.sub(g);let V=1/(_.x*m.y-m.x*_.y);isFinite(V)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-_.y).multiplyScalar(V),S.copy(p).multiplyScalar(_.x).addScaledVector(f,-m.x).multiplyScalar(V),c[y].add(d),c[U].add(d),c[D].add(d),h[y].add(S),h[U].add(S),h[D].add(S))}let w=this.groups;w.length===0&&(w=[{start:0,count:i.length}]);for(let y=0,U=w.length;y<U;++y){let D=w[y],V=D.start,C=D.count;for(let N=V,H=V+C;N<H;N+=3)x(i[N+0],i[N+1],i[N+2])}let A=new L,T=new L,R=new L,F=new L;function M(y){R.fromArray(r,y*3),F.copy(R);let U=c[y];A.copy(U),A.sub(R.multiplyScalar(R.dot(U))).normalize(),T.crossVectors(F,U);let V=T.dot(h[y])<0?-1:1;l[y*4]=A.x,l[y*4+1]=A.y,l[y*4+2]=A.z,l[y*4+3]=V}for(let y=0,U=w.length;y<U;++y){let D=w[y],V=D.start,C=D.count;for(let N=V,H=V+C;N<H;N+=3)M(i[N+0]),M(i[N+1]),M(i[N+2])}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new sn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Re.fromBufferAttribute(t,e),Re.normalize(),t.setXYZ(e,Re.x,Re.y,Re.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h),p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new sn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){let f=c[h],p=t(f,i);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone(e));let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$h=new he,Ri=new ga,Fr=new Pn,Zh=new L,is=new L,ss=new L,rs=new L,qo=new L,Br=new L,zr=new at,kr=new at,Hr=new at,Jh=new L,Kh=new L,jh=new L,Vr=new L,Gr=new L,se=class extends Ge{constructor(t=new Se,e=new bs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Br.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],u=r[l];h!==0&&(qo.fromBufferAttribute(u,t),a?Br.addScaledVector(qo,h):Br.addScaledVector(qo.sub(e),h))}e.add(Br)}return e}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(r),Ri.copy(t.ray).recast(t.near),!(Fr.containsPoint(Ri.origin)===!1&&(Ri.intersectSphere(Fr,Zh)===null||Ri.origin.distanceToSquared(Zh)>(t.far-t.near)**2))&&($h.copy(r).invert(),Ri.copy(t.ray).applyMatrix4($h),!(i.boundingBox!==null&&Ri.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Ri)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let w=S,A=x;w<A;w+=3){let T=o.getX(w),R=o.getX(w+1),F=o.getX(w+2);s=Wr(this,d,t,i,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let S=o.getX(m),x=o.getX(m+1),w=o.getX(m+2);s=Wr(this,a,t,i,c,h,u,S,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){let m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let w=S,A=x;w<A;w+=3){let T=w,R=w+1,F=w+2;s=Wr(this,d,t,i,c,h,u,T,R,F),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){let S=m,x=m+1,w=m+2;s=Wr(this,a,t,i,c,h,u,S,x,w),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function Tp(n,t,e,i,s,r,a,o){let l;if(t.side===Ve?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Cn,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Gr);return c<e.near||c>e.far?null:{distance:c,point:Gr.clone(),object:n}}function Wr(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,is),n.getVertexPosition(l,ss),n.getVertexPosition(c,rs);let h=Tp(n,t,e,i,is,ss,rs,Vr);if(h){s&&(zr.fromBufferAttribute(s,o),kr.fromBufferAttribute(s,l),Hr.fromBufferAttribute(s,c),h.uv=Ui.getInterpolation(Vr,is,ss,rs,zr,kr,Hr,new at)),r&&(zr.fromBufferAttribute(r,o),kr.fromBufferAttribute(r,l),Hr.fromBufferAttribute(r,c),h.uv1=Ui.getInterpolation(Vr,is,ss,rs,zr,kr,Hr,new at),h.uv2=h.uv1),a&&(Jh.fromBufferAttribute(a,o),Kh.fromBufferAttribute(a,l),jh.fromBufferAttribute(a,c),h.normal=Ui.getInterpolation(Vr,is,ss,rs,Jh,Kh,jh,new L),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Ui.getNormal(is,ss,rs,u.normal),h.face=u}return h}var In=class n extends Se{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],u=[],f=0,p=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new jt(c,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(u,2));function g(_,m,d,S,x,w,A,T,R,F,M){let y=w/R,U=A/F,D=w/2,V=A/2,C=T/2,N=R+1,H=F+1,Q=0,k=0,Z=new L;for(let K=0;K<H;K++){let W=K*U-V;for(let ot=0;ot<N;ot++){let q=ot*y-D;Z[_]=q*S,Z[m]=W*x,Z[d]=C,c.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[d]=T>0?1:-1,h.push(Z.x,Z.y,Z.z),u.push(ot/R),u.push(1-K/F),Q+=1}}for(let K=0;K<F;K++)for(let W=0;W<R;W++){let ot=f+W+N*K,q=f+W+N*(K+1),et=f+(W+1)+N*(K+1),ft=f+(W+1)+N*K;l.push(ot,q,ft),l.push(q,et,ft),k+=6}o.addGroup(p,k,M),p+=k,f+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Es(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ye(n){let t={};for(let e=0;e<n.length;e++){let i=Es(n[e]);for(let s in i)t[s]=i[s]}return t}function Ap(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function qu(n){return n.getRenderTarget()===null?n.outputColorSpace:ne.workingColorSpace}var Ya={clone:Es,merge:Ye},Rp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Ln{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rp,this.fragmentShader=Cp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Es(t.uniforms),this.uniformsGroups=Ap(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}},Ma=class extends Ge{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Yn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ze=class extends Ma{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=er*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return er*2*Math.atan(Math.tan(Xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xs*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},as=-90,os=1,pl=class extends Ge{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ze(as,os,t,e);s.layers=this.layers,this.add(s);let r=new Ze(as,os,t,e);r.layers=this.layers,this.add(r);let a=new Ze(as,os,t,e);a.layers=this.layers,this.add(a);let o=new Ze(as,os,t,e);o.layers=this.layers,this.add(o);let l=new Ze(as,os,t,e);l.layers=this.layers,this.add(l);let c=new Ze(as,os,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===Yn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ha)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,o),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Sa=class extends hn{constructor(t,e,i,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:vs,super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ml=class extends Zn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];e.encoding!==void 0&&(Ys("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),e.colorSpace=e.encoding===Oi?xe:cn),this.texture=new Sa(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:ln}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Es(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ve,blending:di});r.uniforms.tEquirect.value=e;let a=new se(s,r),o=e.minFilter;return e.minFilter===Qs&&(e.minFilter=ln),new pl(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}},Yo=new L,Pp=new L,Lp=new Jt,qn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=Yo.subVectors(i,e).cross(Pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let i=t.delta(Yo),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||Lp.getNormalMatrix(t),s=this.coplanarPoint(Yo).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ci=new Pn,Xr=new L,nr=class{constructor(t=new qn,e=new qn,i=new qn,s=new qn,r=new qn,a=new qn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Yn){let i=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],S=s[13],x=s[14],w=s[15];if(i[0].setComponents(l-r,f-c,m-p,w-d).normalize(),i[1].setComponents(l+r,f+c,m+p,w+d).normalize(),i[2].setComponents(l+a,f+h,m+g,w+S).normalize(),i[3].setComponents(l-a,f-h,m-g,w-S).normalize(),i[4].setComponents(l-o,f-u,m-_,w-x).normalize(),e===Yn)i[5].setComponents(l+o,f+u,m+_,w+x).normalize();else if(e===ha)i[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ci.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ci.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ci)}intersectsSprite(t){return Ci.center.set(0,0,0),Ci.radius=.7071067811865476,Ci.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ci)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Yu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Ip(n,t){let e=t.isWebGL2,i=new WeakMap;function s(c,h){let u=c.array,f=c.usage,p=u.byteLength,g=n.createBuffer();n.bindBuffer(h,g),n.bufferData(h,u,f),c.onUploadCallback();let _;if(u instanceof Float32Array)_=n.FLOAT;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(e)_=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)_=n.SHORT;else if(u instanceof Uint32Array)_=n.UNSIGNED_INT;else if(u instanceof Int32Array)_=n.INT;else if(u instanceof Int8Array)_=n.BYTE;else if(u instanceof Uint8Array)_=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)_=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:g,type:_,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version,size:p}}function r(c,h,u){let f=h.array,p=h._updateRange,g=h.updateRanges;if(n.bindBuffer(u,c),p.count===-1&&g.length===0&&n.bufferSubData(u,0,f),g.length!==0){for(let _=0,m=g.length;_<m;_++){let d=g[_];e?n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f,d.start,d.count):n.bufferSubData(u,d.start*f.BYTES_PER_ELEMENT,f.subarray(d.start,d.start+d.count))}h.clearUpdateRanges()}p.count!==-1&&(e?n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):n.bufferSubData(u,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);let h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){let f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);let u=i.get(c);if(u===void 0)i.set(c,s(c,h));else if(u.version<c.version){if(u.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(u.buffer,c,h),u.version=c.version}}return{get:a,remove:o,update:l}}var gl=class n extends Se{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){let S=d*f-a;for(let x=0;x<c;x++){let w=x*u-r;g.push(w,-S,0),_.push(0,0,1),m.push(x/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){let x=S+c*d,w=S+c*(d+1),A=S+1+c*(d+1),T=S+1+c*d;p.push(x,w,T),p.push(w,A,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Up=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dp=`#ifdef USE_ALPHAHASH
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
#endif`,Np=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Op=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fp=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Bp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,zp=`#ifdef USE_AOMAP
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
#endif`,kp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Hp=`#ifdef USE_BATCHING
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
#endif`,Vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,Gp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Wp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,qp=`#ifdef USE_IRIDESCENCE
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
#endif`,Yp=`#ifdef USE_BUMPMAP
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
#endif`,$p=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Zp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Qp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,em=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,nm=`#define PI 3.141592653589793
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
} // validated`,im=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,sm=`vec3 transformedNormal = objectNormal;
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
#endif`,rm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,am=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,om=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cm="gl_FragColor = linearToOutputTexel( gl_FragColor );",hm=`
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
}`,um=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,pm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mm=`#ifdef USE_ENVMAP
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
#endif`,gm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_m=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ym=`#ifdef USE_GRADIENTMAP
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
}`,Mm=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Sm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Em=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wm=`uniform bool receiveShadow;
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
#endif`,Tm=`#ifdef USE_ENVMAP
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
#endif`,Am=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lm=`PhysicalMaterial material;
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
#endif`,Im=`struct PhysicalMaterial {
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
}`,Um=`
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
#endif`,Dm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Nm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Om=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Fm=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,zm=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,km=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Hm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Vm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Gm=`#if defined( USE_POINTS_UV )
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
#endif`,Wm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qm=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ym=`#ifdef USE_MORPHNORMALS
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
#endif`,$m=`#ifdef USE_MORPHTARGETS
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
#endif`,Zm=`#ifdef USE_MORPHTARGETS
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
#endif`,Jm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Km=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,t1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,e1=`#ifdef USE_NORMALMAP
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
#endif`,n1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,i1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,s1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,r1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,a1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,o1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,l1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,c1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,u1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,d1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,f1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,p1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,m1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,g1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,_1=`float getShadowMask() {
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
}`,x1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,v1=`#ifdef USE_SKINNING
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
#endif`,y1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,M1=`#ifdef USE_SKINNING
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
#endif`,S1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,b1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,E1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,w1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,T1=`#ifdef USE_TRANSMISSION
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
#endif`,A1=`#ifdef USE_TRANSMISSION
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
#endif`,R1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,C1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,P1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,L1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,I1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,U1=`uniform sampler2D t2D;
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
}`,D1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,N1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,O1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,F1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,B1=`#include <common>
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
}`,z1=`#if DEPTH_PACKING == 3200
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
}`,k1=`#define DISTANCE
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
}`,H1=`#define DISTANCE
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
}`,V1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,G1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,W1=`uniform float scale;
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
}`,X1=`uniform vec3 diffuse;
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
}`,q1=`#include <common>
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
}`,Y1=`uniform vec3 diffuse;
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
}`,$1=`#define LAMBERT
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
}`,Z1=`#define LAMBERT
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
}`,J1=`#define MATCAP
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
}`,K1=`#define MATCAP
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
}`,j1=`#define NORMAL
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
}`,Q1=`#define NORMAL
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
}`,t0=`#define PHONG
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
}`,e0=`#define PHONG
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
}`,n0=`#define STANDARD
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
}`,i0=`#define STANDARD
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
}`,s0=`#define TOON
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
}`,r0=`#define TOON
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
}`,a0=`uniform float size;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 color;
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
}`,h0=`uniform float rotation;
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
}`,u0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:Up,alphahash_pars_fragment:Dp,alphamap_fragment:Np,alphamap_pars_fragment:Op,alphatest_fragment:Fp,alphatest_pars_fragment:Bp,aomap_fragment:zp,aomap_pars_fragment:kp,batching_pars_vertex:Hp,batching_vertex:Vp,begin_vertex:Gp,beginnormal_vertex:Wp,bsdfs:Xp,iridescence_fragment:qp,bumpmap_pars_fragment:Yp,clipping_planes_fragment:$p,clipping_planes_pars_fragment:Zp,clipping_planes_pars_vertex:Jp,clipping_planes_vertex:Kp,color_fragment:jp,color_pars_fragment:Qp,color_pars_vertex:tm,color_vertex:em,common:nm,cube_uv_reflection_fragment:im,defaultnormal_vertex:sm,displacementmap_pars_vertex:rm,displacementmap_vertex:am,emissivemap_fragment:om,emissivemap_pars_fragment:lm,colorspace_fragment:cm,colorspace_pars_fragment:hm,envmap_fragment:um,envmap_common_pars_fragment:dm,envmap_pars_fragment:fm,envmap_pars_vertex:pm,envmap_physical_pars_fragment:Tm,envmap_vertex:mm,fog_vertex:gm,fog_pars_vertex:_m,fog_fragment:xm,fog_pars_fragment:vm,gradientmap_pars_fragment:ym,lightmap_fragment:Mm,lightmap_pars_fragment:Sm,lights_lambert_fragment:bm,lights_lambert_pars_fragment:Em,lights_pars_begin:wm,lights_toon_fragment:Am,lights_toon_pars_fragment:Rm,lights_phong_fragment:Cm,lights_phong_pars_fragment:Pm,lights_physical_fragment:Lm,lights_physical_pars_fragment:Im,lights_fragment_begin:Um,lights_fragment_maps:Dm,lights_fragment_end:Nm,logdepthbuf_fragment:Om,logdepthbuf_pars_fragment:Fm,logdepthbuf_pars_vertex:Bm,logdepthbuf_vertex:zm,map_fragment:km,map_pars_fragment:Hm,map_particle_fragment:Vm,map_particle_pars_fragment:Gm,metalnessmap_fragment:Wm,metalnessmap_pars_fragment:Xm,morphcolor_vertex:qm,morphnormal_vertex:Ym,morphtarget_pars_vertex:$m,morphtarget_vertex:Zm,normal_fragment_begin:Jm,normal_fragment_maps:Km,normal_pars_fragment:jm,normal_pars_vertex:Qm,normal_vertex:t1,normalmap_pars_fragment:e1,clearcoat_normal_fragment_begin:n1,clearcoat_normal_fragment_maps:i1,clearcoat_pars_fragment:s1,iridescence_pars_fragment:r1,opaque_fragment:a1,packing:o1,premultiplied_alpha_fragment:l1,project_vertex:c1,dithering_fragment:h1,dithering_pars_fragment:u1,roughnessmap_fragment:d1,roughnessmap_pars_fragment:f1,shadowmap_pars_fragment:p1,shadowmap_pars_vertex:m1,shadowmap_vertex:g1,shadowmask_pars_fragment:_1,skinbase_vertex:x1,skinning_pars_vertex:v1,skinning_vertex:y1,skinnormal_vertex:M1,specularmap_fragment:S1,specularmap_pars_fragment:b1,tonemapping_fragment:E1,tonemapping_pars_fragment:w1,transmission_fragment:T1,transmission_pars_fragment:A1,uv_pars_fragment:R1,uv_pars_vertex:C1,uv_vertex:P1,worldpos_vertex:L1,background_vert:I1,background_frag:U1,backgroundCube_vert:D1,backgroundCube_frag:N1,cube_vert:O1,cube_frag:F1,depth_vert:B1,depth_frag:z1,distanceRGBA_vert:k1,distanceRGBA_frag:H1,equirect_vert:V1,equirect_frag:G1,linedashed_vert:W1,linedashed_frag:X1,meshbasic_vert:q1,meshbasic_frag:Y1,meshlambert_vert:$1,meshlambert_frag:Z1,meshmatcap_vert:J1,meshmatcap_frag:K1,meshnormal_vert:j1,meshnormal_frag:Q1,meshphong_vert:t0,meshphong_frag:e0,meshphysical_vert:n0,meshphysical_frag:i0,meshtoon_vert:s0,meshtoon_frag:r0,points_vert:a0,points_frag:o0,shadow_vert:l0,shadow_frag:c0,sprite_vert:h0,sprite_frag:u0},ct={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},Je={basic:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ye([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ye([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ye([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ye([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ye([ct.points,ct.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ye([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ye([ct.common,ct.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ye([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ye([ct.sprite,ct.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ye([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ye([ct.lights,ct.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};Je.physical={uniforms:Ye([Je.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};var qr={r:0,b:0,g:0};function d0(n,t,e,i,s,r,a){let o=new Gt(0),l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(m,d){let S=!1,x=d.isScene===!0?d.background:null;x&&x.isTexture&&(x=(d.backgroundBlurriness>0?e:t).get(x)),x===null?_(o,l):x&&x.isColor&&(_(x,1),S=!0);let w=n.xr.getEnvironmentBlendMode();w==="additive"?i.buffers.color.setClear(0,0,0,1,a):w==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Xa)?(h===void 0&&(h=new se(new In(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Es(Je.backgroundCube.uniforms),vertexShader:Je.backgroundCube.vertexShader,fragmentShader:Je.backgroundCube.fragmentShader,side:Ve,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,h.material.toneMapped=ne.getTransfer(x.colorSpace)!==ce,(u!==x||f!==x.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),h.layers.enableAll(),m.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new se(new gl(2,2),new rn({name:"BackgroundMaterial",uniforms:Es(Je.background.uniforms),vertexShader:Je.background.vertexShader,fragmentShader:Je.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=ne.getTransfer(x.colorSpace)!==ce,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||f!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,u=x,f=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function _(m,d){m.getRGB(qr,qu(n)),i.buffers.color.setClear(qr.r,qr.g,qr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,_(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,_(o,l)},render:g}}function f0(n,t,e,i){let s=n.getParameter(n.MAX_VERTEX_ATTRIBS),r=i.isWebGL2?null:t.get("OES_vertex_array_object"),a=i.isWebGL2||r!==null,o={},l=m(null),c=l,h=!1;function u(C,N,H,Q,k){let Z=!1;if(a){let K=_(Q,H,N);c!==K&&(c=K,p(c.object)),Z=d(C,Q,H,k),Z&&S(C,Q,H,k)}else{let K=N.wireframe===!0;(c.geometry!==Q.id||c.program!==H.id||c.wireframe!==K)&&(c.geometry=Q.id,c.program=H.id,c.wireframe=K,Z=!0)}k!==null&&e.update(k,n.ELEMENT_ARRAY_BUFFER),(Z||h)&&(h=!1,F(C,N,H,Q),k!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function f(){return i.isWebGL2?n.createVertexArray():r.createVertexArrayOES()}function p(C){return i.isWebGL2?n.bindVertexArray(C):r.bindVertexArrayOES(C)}function g(C){return i.isWebGL2?n.deleteVertexArray(C):r.deleteVertexArrayOES(C)}function _(C,N,H){let Q=H.wireframe===!0,k=o[C.id];k===void 0&&(k={},o[C.id]=k);let Z=k[N.id];Z===void 0&&(Z={},k[N.id]=Z);let K=Z[Q];return K===void 0&&(K=m(f()),Z[Q]=K),K}function m(C){let N=[],H=[],Q=[];for(let k=0;k<s;k++)N[k]=0,H[k]=0,Q[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:H,attributeDivisors:Q,object:C,attributes:{},index:null}}function d(C,N,H,Q){let k=c.attributes,Z=N.attributes,K=0,W=H.getAttributes();for(let ot in W)if(W[ot].location>=0){let et=k[ot],ft=Z[ot];if(ft===void 0&&(ot==="instanceMatrix"&&C.instanceMatrix&&(ft=C.instanceMatrix),ot==="instanceColor"&&C.instanceColor&&(ft=C.instanceColor)),et===void 0||et.attribute!==ft||ft&&et.data!==ft.data)return!0;K++}return c.attributesNum!==K||c.index!==Q}function S(C,N,H,Q){let k={},Z=N.attributes,K=0,W=H.getAttributes();for(let ot in W)if(W[ot].location>=0){let et=Z[ot];et===void 0&&(ot==="instanceMatrix"&&C.instanceMatrix&&(et=C.instanceMatrix),ot==="instanceColor"&&C.instanceColor&&(et=C.instanceColor));let ft={};ft.attribute=et,et&&et.data&&(ft.data=et.data),k[ot]=ft,K++}c.attributes=k,c.attributesNum=K,c.index=Q}function x(){let C=c.newAttributes;for(let N=0,H=C.length;N<H;N++)C[N]=0}function w(C){A(C,0)}function A(C,N){let H=c.newAttributes,Q=c.enabledAttributes,k=c.attributeDivisors;H[C]=1,Q[C]===0&&(n.enableVertexAttribArray(C),Q[C]=1),k[C]!==N&&((i.isWebGL2?n:t.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](C,N),k[C]=N)}function T(){let C=c.newAttributes,N=c.enabledAttributes;for(let H=0,Q=N.length;H<Q;H++)N[H]!==C[H]&&(n.disableVertexAttribArray(H),N[H]=0)}function R(C,N,H,Q,k,Z,K){K===!0?n.vertexAttribIPointer(C,N,H,k,Z):n.vertexAttribPointer(C,N,H,Q,k,Z)}function F(C,N,H,Q){if(i.isWebGL2===!1&&(C.isInstancedMesh||Q.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;x();let k=Q.attributes,Z=H.getAttributes(),K=N.defaultAttributeValues;for(let W in Z){let ot=Z[W];if(ot.location>=0){let q=k[W];if(q===void 0&&(W==="instanceMatrix"&&C.instanceMatrix&&(q=C.instanceMatrix),W==="instanceColor"&&C.instanceColor&&(q=C.instanceColor)),q!==void 0){let et=q.normalized,ft=q.itemSize,Tt=e.get(q);if(Tt===void 0)continue;let _t=Tt.buffer,Dt=Tt.type,Nt=Tt.bytesPerElement,bt=i.isWebGL2===!0&&(Dt===n.INT||Dt===n.UNSIGNED_INT||q.gpuType===Du);if(q.isInterleavedBufferAttribute){let Lt=q.data,P=Lt.stride,lt=q.offset;if(Lt.isInstancedInterleavedBuffer){for(let J=0;J<ot.locationSize;J++)A(ot.location+J,Lt.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=Lt.meshPerAttribute*Lt.count)}else for(let J=0;J<ot.locationSize;J++)w(ot.location+J);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let J=0;J<ot.locationSize;J++)R(ot.location+J,ft/ot.locationSize,Dt,et,P*Nt,(lt+ft/ot.locationSize*J)*Nt,bt)}else{if(q.isInstancedBufferAttribute){for(let Lt=0;Lt<ot.locationSize;Lt++)A(ot.location+Lt,q.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let Lt=0;Lt<ot.locationSize;Lt++)w(ot.location+Lt);n.bindBuffer(n.ARRAY_BUFFER,_t);for(let Lt=0;Lt<ot.locationSize;Lt++)R(ot.location+Lt,ft/ot.locationSize,Dt,et,ft*Nt,ft/ot.locationSize*Lt*Nt,bt)}}else if(K!==void 0){let et=K[W];if(et!==void 0)switch(et.length){case 2:n.vertexAttrib2fv(ot.location,et);break;case 3:n.vertexAttrib3fv(ot.location,et);break;case 4:n.vertexAttrib4fv(ot.location,et);break;default:n.vertexAttrib1fv(ot.location,et)}}}}T()}function M(){D();for(let C in o){let N=o[C];for(let H in N){let Q=N[H];for(let k in Q)g(Q[k].object),delete Q[k];delete N[H]}delete o[C]}}function y(C){if(o[C.id]===void 0)return;let N=o[C.id];for(let H in N){let Q=N[H];for(let k in Q)g(Q[k].object),delete Q[k];delete N[H]}delete o[C.id]}function U(C){for(let N in o){let H=o[N];if(H[C.id]===void 0)continue;let Q=H[C.id];for(let k in Q)g(Q[k].object),delete Q[k];delete H[C.id]}}function D(){V(),h=!0,c!==l&&(c=l,p(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:D,resetDefaultState:V,dispose:M,releaseStatesOfGeometry:y,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:w,disableUnusedAttributes:T}}function p0(n,t,e,i){let s=i.isWebGL2,r;function a(h){r=h}function o(h,u){n.drawArrays(r,h,u),e.update(u,r,1)}function l(h,u,f){if(f===0)return;let p,g;if(s)p=n,g="drawArraysInstanced";else if(p=t.get("ANGLE_instanced_arrays"),g="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[g](r,h,u,f),e.update(u,r,f)}function c(h,u,f){if(f===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<f;g++)this.render(h[g],u[g]);else{p.multiDrawArraysWEBGL(r,h,0,u,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_];e.update(g,r,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function m0(n,t,e){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let R=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function r(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext",o=e.precision!==void 0?e.precision:"highp",l=r(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);let c=a||t.has("WEBGL_draw_buffers"),h=e.logarithmicDepthBuffer===!0,u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),f=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),_=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),d=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,w=a||t.has("OES_texture_float"),A=x&&w,T=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:s,getMaxPrecision:r,precision:o,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:_,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:w,floatVertexTextures:A,maxSamples:T}}function g0(n){let t=this,e=null,i=0,s=!1,r=!1,a=new qn,o=new Jt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let p=u.length!==0||f||i!==0||s;return s=f,i=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){let g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=n.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let S=r?0:i,x=S*4,w=d.clippingState||null;l.value=w,w=h(g,f,x,p);for(let A=0;A!==x;++A)w[A]=e[A];d.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(u,f,p,g){let _=u!==null?u.length:0,m=null;if(_!==0){if(m=l.value,g!==!0||m===null){let d=p+_*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let x=0,w=p;x!==_;++x,w+=4)a.copy(u[x]).applyMatrix4(S,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function _0(n){let t=new WeakMap;function e(a,o){return o===al?a.mapping=vs:o===ol&&(a.mapping=ys),a}function i(a){if(a&&a.isTexture){let o=a.mapping;if(o===al||o===ol)if(t.has(a)){let l=t.get(a).texture;return e(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new ml(l.height/2);return c.fromEquirectangularTexture(n,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}var ba=class extends Ma{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},fs=4,Qh=[.125,.215,.35,.446,.526,.582],Ii=20,$o=new ba,tu=new Gt,Zo=null,Jo=0,Ko=0,Pi=(1+Math.sqrt(5))/2,ls=1/Pi,eu=[new L(1,1,1),new L(-1,1,1),new L(1,1,-1),new L(-1,1,-1),new L(0,Pi,ls),new L(0,Pi,-ls),new L(ls,0,Pi),new L(-ls,0,Pi),new L(Pi,ls,0),new L(-Pi,ls,0)],Ea=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel(),this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=su(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=iu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Zo,Jo,Ko),t.scissorTest=!1,Yr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===vs||t.mapping===ys?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zo=this._renderer.getRenderTarget(),Jo=this._renderer.getActiveCubeFace(),Ko=this._renderer.getActiveMipmapLevel();let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:tr,format:yn,colorSpace:$n,depthBuffer:!1},s=nu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nu(t,e,i);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=x0(r)),this._blurMaterial=v0(r,t,e)}return s}_compileMaterial(t){let e=new se(this._lodPlanes[0],t);this._renderer.compile(e,$o)}_sceneToCubeUV(t,e,i,s){let o=new Ze(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(tu),h.toneMapping=fi,h.autoClear=!1;let p=new bs({name:"PMREM.Background",side:Ve,depthWrite:!1,depthTest:!1}),g=new se(new In,p),_=!1,m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(tu),_=!0);for(let d=0;d<6;d++){let S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));let x=this._cubeSize;Yr(s,S*x,d>2?x:0,x,x),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===vs||t.mapping===ys;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=su()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=iu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new se(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;Yr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,$o)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;for(let s=1;s<this._lodPlanes.length;s++){let r=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=eu[(s-1)%eu.length];this._blur(t,s-1,s,r,a)}e.autoClear=i}_blur(t,e,i,s,r){let a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,u=new se(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ii-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ii;m>Ii&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ii}`);let d=[],S=0;for(let R=0;R<Ii;++R){let F=R/_,M=Math.exp(-F*F/2);d.push(M),R===0?S+=M:R<m&&(S+=2*M)}for(let R=0;R<d.length;R++)d[R]=d[R]/S;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-i;let w=this._sizeLods[s],A=3*w*(s>x-fs?s-x+fs:0),T=4*(this._cubeSize-w);Yr(e,A,T,3*w,2*w),l.setRenderTarget(e),l.render(u,$o)}};function x0(n){let t=[],e=[],i=[],s=n,r=n-fs+1+Qh.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);e.push(o);let l=1/o;a>n-fs?l=Qh[a-n+fs-1]:a===0&&(l=0),i.push(l);let c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,S=new Float32Array(_*g*p),x=new Float32Array(m*g*p),w=new Float32Array(d*g*p);for(let T=0;T<p;T++){let R=T%3*2/3-1,F=T>2?0:-1,M=[R,F,0,R+2/3,F,0,R+2/3,F+1,0,R,F,0,R+2/3,F+1,0,R,F+1,0];S.set(M,_*g*T),x.set(f,m*g*T);let y=[T,T,T,T,T,T];w.set(y,d*g*T)}let A=new Se;A.setAttribute("position",new sn(S,_)),A.setAttribute("uv",new sn(x,m)),A.setAttribute("faceIndex",new sn(w,d)),t.push(A),s>fs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function nu(n,t,e){let i=new Zn(n,t,e);return i.texture.mapping=Xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function v0(n,t,e){let i=new Float32Array(Ii),s=new L(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Ii,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:nc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function iu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:nc(),fragmentShader:`

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
		`,blending:di,depthTest:!1,depthWrite:!1})}function su(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:nc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:di,depthTest:!1,depthWrite:!1})}function nc(){return`

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
	`}function y0(n){let t=new WeakMap,e=null;function i(o){if(o&&o.isTexture){let l=o.mapping,c=l===al||l===ol,h=l===vs||l===ys;if(c||h)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let u=t.get(o);return e===null&&(e=new Ea(n)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),t.set(o,u),u.texture}else{if(t.has(o))return t.get(o).texture;{let u=o.image;if(c&&u&&u.height>0||h&&u&&s(u)){e===null&&(e=new Ea(n));let f=c?e.fromEquirectangular(o):e.fromCubemap(o);return t.set(o,f),o.addEventListener("dispose",r),f.texture}else return null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function M0(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(i){i.isWebGL2?(e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance")):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(i){let s=e(i);return s===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function S0(n,t,e,i){let s={},r=new WeakMap;function a(u){let f=u.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);for(let g in f.morphAttributes){let _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){let f=u.attributes;for(let g in f)t.update(f[g],n.ARRAY_BUFFER);let p=u.morphAttributes;for(let g in p){let _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],n.ARRAY_BUFFER)}}function c(u){let f=[],p=u.index,g=u.attributes.position,_=0;if(p!==null){let S=p.array;_=p.version;for(let x=0,w=S.length;x<w;x+=3){let A=S[x+0],T=S[x+1],R=S[x+2];f.push(A,T,T,R,R,A)}}else if(g!==void 0){let S=g.array;_=g.version;for(let x=0,w=S.length/3-1;x<w;x+=3){let A=x+0,T=x+1,R=x+2;f.push(A,T,T,R,R,A)}}else return;let m=new(Wu(f)?ya:va)(f,1);m.version=_;let d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){let f=r.get(u);if(f){let p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function b0(n,t,e,i){let s=i.isWebGL2,r;function a(p){r=p}let o,l;function c(p){o=p.type,l=p.bytesPerElement}function h(p,g){n.drawElements(r,g,o,p*l),e.update(g,r,1)}function u(p,g,_){if(_===0)return;let m,d;if(s)m=n,d="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),d="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[d](r,g,o,p*l,_),e.update(g,r,_)}function f(p,g,_){if(_===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<_;d++)this.render(p[d]/l,g[d]);else{m.multiDrawElementsWEBGL(r,g,0,o,p,0,_);let d=0;for(let S=0;S<_;S++)d+=g[S];e.update(d,r,1)}}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=u,this.renderMultiDraw=f}function E0(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function w0(n,t){return n[0]-t[0]}function T0(n,t){return Math.abs(t[1])-Math.abs(n[1])}function A0(n,t,e){let i={},s=new Float32Array(8),r=new WeakMap,a=new pe,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,h,u){let f=c.morphTargetInfluences;if(t.isWebGL2===!0){let p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=p!==void 0?p.length:0,_=r.get(h);if(_===void 0||_.count!==g){let C=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",C)};_!==void 0&&_.texture.dispose();let S=h.morphAttributes.position!==void 0,x=h.morphAttributes.normal!==void 0,w=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],T=h.morphAttributes.normal||[],R=h.morphAttributes.color||[],F=0;S===!0&&(F=1),x===!0&&(F=2),w===!0&&(F=3);let M=h.attributes.position.count*F,y=1;M>t.maxTextureSize&&(y=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let U=new Float32Array(M*y*4*g),D=new ma(U,M,y,g);D.type=ui,D.needsUpdate=!0;let V=F*4;for(let N=0;N<g;N++){let H=A[N],Q=T[N],k=R[N],Z=M*y*4*N;for(let K=0;K<H.count;K++){let W=K*V;S===!0&&(a.fromBufferAttribute(H,K),U[Z+W+0]=a.x,U[Z+W+1]=a.y,U[Z+W+2]=a.z,U[Z+W+3]=0),x===!0&&(a.fromBufferAttribute(Q,K),U[Z+W+4]=a.x,U[Z+W+5]=a.y,U[Z+W+6]=a.z,U[Z+W+7]=0),w===!0&&(a.fromBufferAttribute(k,K),U[Z+W+8]=a.x,U[Z+W+9]=a.y,U[Z+W+10]=a.z,U[Z+W+11]=k.itemSize===4?a.w:1)}}_={count:g,texture:D,size:new at(M,y)},r.set(h,_),h.addEventListener("dispose",C)}let m=0;for(let S=0;S<f.length;S++)m+=f[S];let d=h.morphTargetsRelative?1:1-m;u.getUniforms().setValue(n,"morphTargetBaseInfluence",d),u.getUniforms().setValue(n,"morphTargetInfluences",f),u.getUniforms().setValue(n,"morphTargetsTexture",_.texture,e),u.getUniforms().setValue(n,"morphTargetsTextureSize",_.size)}else{let p=f===void 0?0:f.length,g=i[h.id];if(g===void 0||g.length!==p){g=[];for(let x=0;x<p;x++)g[x]=[x,0];i[h.id]=g}for(let x=0;x<p;x++){let w=g[x];w[0]=x,w[1]=f[x]}g.sort(T0);for(let x=0;x<8;x++)x<p&&g[x][1]?(o[x][0]=g[x][0],o[x][1]=g[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(w0);let _=h.morphAttributes.position,m=h.morphAttributes.normal,d=0;for(let x=0;x<8;x++){let w=o[x],A=w[0],T=w[1];A!==Number.MAX_SAFE_INTEGER&&T?(_&&h.getAttribute("morphTarget"+x)!==_[A]&&h.setAttribute("morphTarget"+x,_[A]),m&&h.getAttribute("morphNormal"+x)!==m[A]&&h.setAttribute("morphNormal"+x,m[A]),s[x]=T,d+=T):(_&&h.hasAttribute("morphTarget"+x)===!0&&h.deleteAttribute("morphTarget"+x),m&&h.hasAttribute("morphNormal"+x)===!0&&h.deleteAttribute("morphNormal"+x),s[x]=0)}let S=h.morphTargetsRelative?1:1-d;u.getUniforms().setValue(n,"morphTargetBaseInfluence",S),u.getUniforms().setValue(n,"morphTargetInfluences",s)}}return{update:l}}function R0(n,t,e,i){let s=new WeakMap;function r(l){let c=i.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}var wa=class extends hn{constructor(t,e,i,s,r,a,o,l,c,h){if(h=h!==void 0?h:Ni,h!==Ni&&h!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Ni&&(i=hi),i===void 0&&h===Ss&&(i=Di),super(null,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:$e,this.minFilter=l!==void 0?l:$e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},$u=new hn,Zu=new wa(1,1);Zu.compareFunction=Vu;var Ju=new ma,Ku=new fl,ju=new Sa,ru=[],au=[],ou=new Float32Array(16),lu=new Float32Array(9),cu=new Float32Array(4);function Ts(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=ru[s];if(r===void 0&&(r=new Float32Array(s),ru[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function be(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ee(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function $a(n,t){let e=au[t];e===void 0&&(e=new Int32Array(t),au[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function C0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function P0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2fv(this.addr,t),Ee(e,t)}}function L0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(be(e,t))return;n.uniform3fv(this.addr,t),Ee(e,t)}}function I0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4fv(this.addr,t),Ee(e,t)}}function U0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;cu.set(i),n.uniformMatrix2fv(this.addr,!1,cu),Ee(e,i)}}function D0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;lu.set(i),n.uniformMatrix3fv(this.addr,!1,lu),Ee(e,i)}}function N0(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(be(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(be(e,i))return;ou.set(i),n.uniformMatrix4fv(this.addr,!1,ou),Ee(e,i)}}function O0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function F0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2iv(this.addr,t),Ee(e,t)}}function B0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3iv(this.addr,t),Ee(e,t)}}function z0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4iv(this.addr,t),Ee(e,t)}}function k0(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function H0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(be(e,t))return;n.uniform2uiv(this.addr,t),Ee(e,t)}}function V0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(be(e,t))return;n.uniform3uiv(this.addr,t),Ee(e,t)}}function G0(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(be(e,t))return;n.uniform4uiv(this.addr,t),Ee(e,t)}}function W0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r=this.type===n.SAMPLER_2D_SHADOW?Zu:$u;e.setTexture2D(t||r,s)}function X0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Ku,s)}function q0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||ju,s)}function Y0(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ju,s)}function $0(n){switch(n){case 5126:return C0;case 35664:return P0;case 35665:return L0;case 35666:return I0;case 35674:return U0;case 35675:return D0;case 35676:return N0;case 5124:case 35670:return O0;case 35667:case 35671:return F0;case 35668:case 35672:return B0;case 35669:case 35673:return z0;case 5125:return k0;case 36294:return H0;case 36295:return V0;case 36296:return G0;case 35678:case 36198:case 36298:case 36306:case 35682:return W0;case 35679:case 36299:case 36307:return X0;case 35680:case 36300:case 36308:case 36293:return q0;case 36289:case 36303:case 36311:case 36292:return Y0}}function Z0(n,t){n.uniform1fv(this.addr,t)}function J0(n,t){let e=Ts(t,this.size,2);n.uniform2fv(this.addr,e)}function K0(n,t){let e=Ts(t,this.size,3);n.uniform3fv(this.addr,e)}function j0(n,t){let e=Ts(t,this.size,4);n.uniform4fv(this.addr,e)}function Q0(n,t){let e=Ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function tg(n,t){let e=Ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function eg(n,t){let e=Ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function ng(n,t){n.uniform1iv(this.addr,t)}function ig(n,t){n.uniform2iv(this.addr,t)}function sg(n,t){n.uniform3iv(this.addr,t)}function rg(n,t){n.uniform4iv(this.addr,t)}function ag(n,t){n.uniform1uiv(this.addr,t)}function og(n,t){n.uniform2uiv(this.addr,t)}function lg(n,t){n.uniform3uiv(this.addr,t)}function cg(n,t){n.uniform4uiv(this.addr,t)}function hg(n,t,e){let i=this.cache,s=t.length,r=$a(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||$u,r[a])}function ug(n,t,e){let i=this.cache,s=t.length,r=$a(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ku,r[a])}function dg(n,t,e){let i=this.cache,s=t.length,r=$a(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||ju,r[a])}function fg(n,t,e){let i=this.cache,s=t.length,r=$a(e,s);be(i,r)||(n.uniform1iv(this.addr,r),Ee(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ju,r[a])}function pg(n){switch(n){case 5126:return Z0;case 35664:return J0;case 35665:return K0;case 35666:return j0;case 35674:return Q0;case 35675:return tg;case 35676:return eg;case 5124:case 35670:return ng;case 35667:case 35671:return ig;case 35668:case 35672:return sg;case 35669:case 35673:return rg;case 5125:return ag;case 36294:return og;case 36295:return lg;case 36296:return cg;case 35678:case 36198:case 36298:case 36306:case 35682:return hg;case 35679:case 36299:case 36307:return ug;case 35680:case 36300:case 36308:case 36293:return dg;case 36289:case 36303:case 36311:case 36292:return fg}}var _l=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=$0(e.type)}},xl=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=pg(e.type)}},vl=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},jo=/(\w+)(\])?(\[|\.)?/g;function hu(n,t){n.seq.push(t),n.map[t.id]=t}function mg(n,t,e){let i=n.name,s=i.length;for(jo.lastIndex=0;;){let r=jo.exec(i),a=jo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){hu(e,c===void 0?new _l(o,n,t):new xl(o,n,t));break}else{let u=e.map[o];u===void 0&&(u=new vl(o),hu(e,u)),e=u}}}var xs=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){let r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);mg(r,a,this)}}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};function uu(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}var gg=37297,_g=0;function xg(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function vg(n){let t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(n),i;switch(t===e?i="":t===ca&&e===la?i="LinearDisplayP3ToLinearSRGB":t===la&&e===ca&&(i="LinearSRGBToLinearDisplayP3"),n){case $n:case qa:return[i,"LinearTransferOETF"];case xe:case tc:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function du(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+xg(n.getShaderSource(t),a)}else return s}function yg(n,t){let e=vg(t);return`vec4 ${n}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function Mg(n,t){let e;switch(t){case Af:e="Linear";break;case Rf:e="Reinhard";break;case Cf:e="OptimizedCineon";break;case Pf:e="ACESFilmic";break;case If:e="AgX";break;case Lf:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function Sg(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ps).join(`
`)}function bg(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ps).join(`
`)}function Eg(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function wg(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ps(n){return n!==""}function fu(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function pu(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(n){return n.replace(Tg,Rg)}var Ag=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Rg(n,t){let e=Xt[t];if(e===void 0){let i=Ag.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}var Cg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function mu(n){return n.replace(Cg,Pg)}function Pg(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function gu(n){let t="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Lg(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Iu?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===tf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(t="SHADOWMAP_TYPE_VSM"),t}function Ig(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case vs:case ys:t="ENVMAP_TYPE_CUBE";break;case Xa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ug(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case ys:t="ENVMAP_MODE_REFRACTION";break}return t}function Dg(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kl:t="ENVMAP_BLENDING_MULTIPLY";break;case wf:t="ENVMAP_BLENDING_MIX";break;case Tf:t="ENVMAP_BLENDING_ADD";break}return t}function Ng(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Og(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=Lg(e),c=Ig(e),h=Ug(e),u=Dg(e),f=Ng(e),p=e.isWebGL2?"":Sg(e),g=bg(e),_=Eg(r),m=s.createProgram(),d,S,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ps).join(`
`),d.length>0&&(d+=`
`),S=[p,"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_].filter(ps).join(`
`),S.length>0&&(S+=`
`)):(d=[gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ps).join(`
`),S=[p,gu(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,_,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.useLegacyLights?"#define LEGACY_LIGHTS":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==fi?"#define TONE_MAPPING":"",e.toneMapping!==fi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==fi?Mg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,yg("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ps).join(`
`)),a=yl(a),a=fu(a,e),a=pu(a,e),o=yl(o),o=fu(o,e),o=pu(o,e),a=mu(a),o=mu(o),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[g,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,S=["precision mediump sampler2DArray;","#define varying in",e.glslVersion===Nh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Nh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);let w=x+d+a,A=x+S+o,T=uu(s,s.VERTEX_SHADER,w),R=uu(s,s.FRAGMENT_SHADER,A);s.attachShader(m,T),s.attachShader(m,R),e.index0AttributeName!==void 0?s.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function F(D){if(n.debug.checkShaderErrors){let V=s.getProgramInfoLog(m).trim(),C=s.getShaderInfoLog(T).trim(),N=s.getShaderInfoLog(R).trim(),H=!0,Q=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,m,T,R);else{let k=du(s,T,"vertex"),Z=du(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Program Info Log: `+V+`
`+k+`
`+Z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(C===""||N==="")&&(Q=!1);Q&&(D.diagnostics={runnable:H,programLog:V,vertexShader:{log:C,prefix:d},fragmentShader:{log:N,prefix:S}})}s.deleteShader(T),s.deleteShader(R),M=new xs(s,m),y=wg(s,m)}let M;this.getUniforms=function(){return M===void 0&&F(this),M};let y;this.getAttributes=function(){return y===void 0&&F(this),y};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(m,gg)),U},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=_g++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=R,this}var Fg=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new Sl(t),e.set(t,i)),i}},Sl=class{constructor(t){this.id=Fg++,this.code=t,this.usedTimes=0}};function Bg(n,t,e,i,s,r,a){let o=new xa,l=new Ml,c=[],h=s.isWebGL2,u=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return M===0?"uv":`uv${M}`}function m(M,y,U,D,V){let C=D.fog,N=V.geometry,H=M.isMeshStandardMaterial?D.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||H),k=Q&&Q.mapping===Xa?Q.image.height:null,Z=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));let K=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,W=K!==void 0?K.length:0,ot=0;N.morphAttributes.position!==void 0&&(ot=1),N.morphAttributes.normal!==void 0&&(ot=2),N.morphAttributes.color!==void 0&&(ot=3);let q,et,ft,Tt;if(Z){let We=Je[Z];q=We.vertexShader,et=We.fragmentShader}else q=M.vertexShader,et=M.fragmentShader,l.update(M),ft=l.getVertexShaderID(M),Tt=l.getFragmentShaderID(M);let _t=n.getRenderTarget(),Dt=V.isInstancedMesh===!0,Nt=V.isBatchedMesh===!0,bt=!!M.map,Lt=!!M.matcap,P=!!Q,lt=!!M.aoMap,J=!!M.lightMap,rt=!!M.bumpMap,j=!!M.normalMap,At=!!M.displacementMap,gt=!!M.emissiveMap,b=!!M.metalnessMap,v=!!M.roughnessMap,B=M.anisotropy>0,it=M.clearcoat>0,nt=M.iridescence>0,tt=M.sheen>0,Et=M.transmission>0,ut=B&&!!M.anisotropyMap,xt=it&&!!M.clearcoatMap,Pt=it&&!!M.clearcoatNormalMap,Bt=it&&!!M.clearcoatRoughnessMap,O=nt&&!!M.iridescenceMap,ht=nt&&!!M.iridescenceThicknessMap,wt=tt&&!!M.sheenColorMap,vt=tt&&!!M.sheenRoughnessMap,yt=!!M.specularMap,dt=!!M.specularColorMap,It=!!M.specularIntensityMap,Wt=Et&&!!M.transmissionMap,Ut=Et&&!!M.thicknessMap,Rt=!!M.gradientMap,st=!!M.alphaMap,I=M.alphaTest>0,pt=!!M.alphaHash,mt=!!M.extensions,zt=!!N.attributes.uv1,Ot=!!N.attributes.uv2,re=!!N.attributes.uv3,ae=fi;return M.toneMapped&&(_t===null||_t.isXRRenderTarget===!0)&&(ae=n.toneMapping),{isWebGL2:h,shaderID:Z,shaderType:M.type,shaderName:M.name,vertexShader:q,fragmentShader:et,defines:M.defines,customVertexShaderID:ft,customFragmentShaderID:Tt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Nt,instancing:Dt,instancingColor:Dt&&V.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:_t===null?n.outputColorSpace:_t.isXRRenderTarget===!0?_t.texture.colorSpace:$n,map:bt,matcap:Lt,envMap:P,envMapMode:P&&Q.mapping,envMapCubeUVHeight:k,aoMap:lt,lightMap:J,bumpMap:rt,normalMap:j,displacementMap:f&&At,emissiveMap:gt,normalMapObjectSpace:j&&M.normalMapType===Wf,normalMapTangentSpace:j&&M.normalMapType===Ql,metalnessMap:b,roughnessMap:v,anisotropy:B,anisotropyMap:ut,clearcoat:it,clearcoatMap:xt,clearcoatNormalMap:Pt,clearcoatRoughnessMap:Bt,iridescence:nt,iridescenceMap:O,iridescenceThicknessMap:ht,sheen:tt,sheenColorMap:wt,sheenRoughnessMap:vt,specularMap:yt,specularColorMap:dt,specularIntensityMap:It,transmission:Et,transmissionMap:Wt,thicknessMap:Ut,gradientMap:Rt,opaque:M.transparent===!1&&M.blending===gs,alphaMap:st,alphaTest:I,alphaHash:pt,combine:M.combine,mapUv:bt&&_(M.map.channel),aoMapUv:lt&&_(M.aoMap.channel),lightMapUv:J&&_(M.lightMap.channel),bumpMapUv:rt&&_(M.bumpMap.channel),normalMapUv:j&&_(M.normalMap.channel),displacementMapUv:At&&_(M.displacementMap.channel),emissiveMapUv:gt&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:v&&_(M.roughnessMap.channel),anisotropyMapUv:ut&&_(M.anisotropyMap.channel),clearcoatMapUv:xt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Bt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:O&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ht&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(M.sheenRoughnessMap.channel),specularMapUv:yt&&_(M.specularMap.channel),specularColorMapUv:dt&&_(M.specularColorMap.channel),specularIntensityMapUv:It&&_(M.specularIntensityMap.channel),transmissionMapUv:Wt&&_(M.transmissionMap.channel),thicknessMapUv:Ut&&_(M.thicknessMap.channel),alphaMapUv:st&&_(M.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(j||B),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUv1s:zt,vertexUv2s:Ot,vertexUv3s:re,pointsUvs:V.isPoints===!0&&!!N.attributes.uv&&(bt||st),fog:!!C,useFog:M.fog===!0,fogExp2:C&&C.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:ot,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:ae,useLegacyLights:n._useLegacyLights,decodeVideoTexture:bt&&M.map.isVideoTexture===!0&&ne.getTransfer(M.map.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===je,flipSided:M.side===Ve,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:mt&&M.extensions.derivatives===!0,extensionFragDepth:mt&&M.extensions.fragDepth===!0,extensionDrawBuffers:mt&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:mt&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:mt&&M.extensions.clipCullDistance&&i.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function d(M){let y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(let U in M.defines)y.push(U),y.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(S(y,M),x(y,M),y.push(n.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function S(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function x(M,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),M.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),M.push(o.mask)}function w(M){let y=g[M.type],U;if(y){let D=Je[y];U=Ya.clone(D.uniforms)}else U=M.uniforms;return U}function A(M,y){let U;for(let D=0,V=c.length;D<V;D++){let C=c[D];if(C.cacheKey===y){U=C,++U.usedTimes;break}}return U===void 0&&(U=new Og(n,y,M,r),c.push(U)),U}function T(M){if(--M.usedTimes===0){let y=c.indexOf(M);c[y]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function F(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:w,acquireProgram:A,releaseProgram:T,releaseShaderCache:R,programs:c,dispose:F}}function zg(){let n=new WeakMap;function t(r){let a=n.get(r);return a===void 0&&(a={},n.set(r,a)),a}function e(r){n.delete(r)}function i(r,a,o){n.get(r)[a]=o}function s(){n=new WeakMap}return{get:t,remove:e,update:i,dispose:s}}function kg(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function _u(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function xu(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u,f,p,g,_,m){let d=n[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},n[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?i.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){let d=a(u,f,p,g,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||kg),i.length>1&&i.sort(f||_u),s.length>1&&s.sort(f||_u)}function h(){for(let u=t,f=n.length;u<f;u++){let p=n[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Hg(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new xu,n.set(i,[a])):s>=r.length?(a=new xu,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Vg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Gg(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}var Wg=0;function Xg(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qg(n,t){let e=new Vg,i=Gg(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)s.probe.push(new L);let r=new L,a=new he,o=new he;function l(h,u){let f=0,p=0,g=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let _=0,m=0,d=0,S=0,x=0,w=0,A=0,T=0,R=0,F=0,M=0;h.sort(Xg);let y=u===!0?Math.PI:1;for(let D=0,V=h.length;D<V;D++){let C=h[D],N=C.color,H=C.intensity,Q=C.distance,k=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=N.r*H*y,p+=N.g*H*y,g+=N.b*H*y;else if(C.isLightProbe){for(let Z=0;Z<9;Z++)s.probe[Z].addScaledVector(C.sh.coefficients[Z],H);M++}else if(C.isDirectionalLight){let Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity*y),C.castShadow){let K=C.shadow,W=i.get(C);W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,s.directionalShadow[_]=W,s.directionalShadowMap[_]=k,s.directionalShadowMatrix[_]=C.shadow.matrix,w++}s.directional[_]=Z,_++}else if(C.isSpotLight){let Z=e.get(C);Z.position.setFromMatrixPosition(C.matrixWorld),Z.color.copy(N).multiplyScalar(H*y),Z.distance=Q,Z.coneCos=Math.cos(C.angle),Z.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),Z.decay=C.decay,s.spot[d]=Z;let K=C.shadow;if(C.map&&(s.spotLightMap[R]=C.map,R++,K.updateMatrices(C),C.castShadow&&F++),s.spotLightMatrix[d]=K.matrix,C.castShadow){let W=i.get(C);W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,s.spotShadow[d]=W,s.spotShadowMap[d]=k,T++}d++}else if(C.isRectAreaLight){let Z=e.get(C);Z.color.copy(N).multiplyScalar(H),Z.halfWidth.set(C.width*.5,0,0),Z.halfHeight.set(0,C.height*.5,0),s.rectArea[S]=Z,S++}else if(C.isPointLight){let Z=e.get(C);if(Z.color.copy(C.color).multiplyScalar(C.intensity*y),Z.distance=C.distance,Z.decay=C.decay,C.castShadow){let K=C.shadow,W=i.get(C);W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,s.pointShadow[m]=W,s.pointShadowMap[m]=k,s.pointShadowMatrix[m]=C.shadow.matrix,A++}s.point[m]=Z,m++}else if(C.isHemisphereLight){let Z=e.get(C);Z.skyColor.copy(C.color).multiplyScalar(H*y),Z.groundColor.copy(C.groundColor).multiplyScalar(H*y),s.hemi[x]=Z,x++}}S>0&&(t.isWebGL2?n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):n.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_FLOAT_1,s.rectAreaLTC2=ct.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(s.rectAreaLTC1=ct.LTC_HALF_1,s.rectAreaLTC2=ct.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),s.ambient[0]=f,s.ambient[1]=p,s.ambient[2]=g;let U=s.hash;(U.directionalLength!==_||U.pointLength!==m||U.spotLength!==d||U.rectAreaLength!==S||U.hemiLength!==x||U.numDirectionalShadows!==w||U.numPointShadows!==A||U.numSpotShadows!==T||U.numSpotMaps!==R||U.numLightProbes!==M)&&(s.directional.length=_,s.spot.length=d,s.rectArea.length=S,s.point.length=m,s.hemi.length=x,s.directionalShadow.length=w,s.directionalShadowMap.length=w,s.pointShadow.length=A,s.pointShadowMap.length=A,s.spotShadow.length=T,s.spotShadowMap.length=T,s.directionalShadowMatrix.length=w,s.pointShadowMatrix.length=A,s.spotLightMatrix.length=T+R-F,s.spotLightMap.length=R,s.numSpotLightShadowsWithMaps=F,s.numLightProbes=M,U.directionalLength=_,U.pointLength=m,U.spotLength=d,U.rectAreaLength=S,U.hemiLength=x,U.numDirectionalShadows=w,U.numPointShadows=A,U.numSpotShadows=T,U.numSpotMaps=R,U.numLightProbes=M,s.version=Wg++)}function c(h,u){let f=0,p=0,g=0,_=0,m=0,d=u.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){let w=h[S];if(w.isDirectionalLight){let A=s.directional[f];A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),f++}else if(w.isSpotLight){let A=s.spot[g];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(w.matrixWorld),r.setFromMatrixPosition(w.target.matrixWorld),A.direction.sub(r),A.direction.transformDirection(d),g++}else if(w.isRectAreaLight){let A=s.rectArea[_];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(d),o.identity(),a.copy(w.matrixWorld),a.premultiply(d),o.extractRotation(a),A.halfWidth.set(w.width*.5,0,0),A.halfHeight.set(0,w.height*.5,0),A.halfWidth.applyMatrix4(o),A.halfHeight.applyMatrix4(o),_++}else if(w.isPointLight){let A=s.point[p];A.position.setFromMatrixPosition(w.matrixWorld),A.position.applyMatrix4(d),p++}else if(w.isHemisphereLight){let A=s.hemi[m];A.direction.setFromMatrixPosition(w.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:s}}function vu(n,t){let e=new qg(n,t),i=[],s=[];function r(){i.length=0,s.length=0}function a(u){i.push(u)}function o(u){s.push(u)}function l(u){e.setup(i,u)}function c(u){e.setupView(i,u)}return{init:r,state:{lightsArray:i,shadowsArray:s,lights:e},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Yg(n,t){let e=new WeakMap;function i(r,a=0){let o=e.get(r),l;return o===void 0?(l=new vu(n,t),e.set(r,[l])):a>=o.length?(l=new vu(n,t),o.push(l)):l=o[a],l}function s(){e=new WeakMap}return{get:i,dispose:s}}var bl=class extends Ln{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Vf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},El=class extends Ln{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}},$g=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zg=`uniform sampler2D shadow_pass;
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
}`;function Jg(n,t,e){let i=new nr,s=new at,r=new at,a=new pe,o=new bl({depthPacking:Gf}),l=new El,c={},h=e.maxTextureSize,u={[Cn]:Ve,[Ve]:Cn,[je]:je},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:$g,fragmentShader:Zg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new Se;g.setAttribute("position",new sn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new se(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Iu;let d=this.type;this.render=function(T,R,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let M=n.getRenderTarget(),y=n.getActiveCubeFace(),U=n.getActiveMipmapLevel(),D=n.state;D.setBlending(di),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=d!==Xn&&this.type===Xn,C=d===Xn&&this.type!==Xn;for(let N=0,H=T.length;N<H;N++){let Q=T[N],k=Q.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let Z=k.getFrameExtents();if(s.multiply(Z),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/Z.x),s.x=r.x*Z.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/Z.y),s.y=r.y*Z.y,k.mapSize.y=r.y)),k.map===null||V===!0||C===!0){let W=this.type!==Xn?{minFilter:$e,magFilter:$e}:{};k.map!==null&&k.map.dispose(),k.map=new Zn(s.x,s.y,W),k.map.texture.name=Q.name+".shadowMap",k.camera.updateProjectionMatrix()}n.setRenderTarget(k.map),n.clear();let K=k.getViewportCount();for(let W=0;W<K;W++){let ot=k.getViewport(W);a.set(r.x*ot.x,r.y*ot.y,r.x*ot.z,r.y*ot.w),D.viewport(a),k.updateMatrices(Q,W),i=k.getFrustum(),w(R,F,k.camera,Q,this.type)}k.isPointLightShadow!==!0&&this.type===Xn&&S(k,F),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,y,U)};function S(T,R){let F=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Zn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(R,null,F,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(R,null,F,p,_,null)}function x(T,R,F,M){let y=null,U=F.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(U!==void 0)y=U;else if(y=F.isPointLight===!0?l:o,n.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){let D=y.uuid,V=R.uuid,C=c[D];C===void 0&&(C={},c[D]=C);let N=C[V];N===void 0&&(N=y.clone(),C[V]=N,R.addEventListener("dispose",A)),y=N}if(y.visible=R.visible,y.wireframe=R.wireframe,M===Xn?y.side=R.shadowSide!==null?R.shadowSide:R.side:y.side=R.shadowSide!==null?R.shadowSide:u[R.side],y.alphaMap=R.alphaMap,y.alphaTest=R.alphaTest,y.map=R.map,y.clipShadows=R.clipShadows,y.clippingPlanes=R.clippingPlanes,y.clipIntersection=R.clipIntersection,y.displacementMap=R.displacementMap,y.displacementScale=R.displacementScale,y.displacementBias=R.displacementBias,y.wireframeLinewidth=R.wireframeLinewidth,y.linewidth=R.linewidth,F.isPointLight===!0&&y.isMeshDistanceMaterial===!0){let D=n.properties.get(y);D.light=F}return y}function w(T,R,F,M,y){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&y===Xn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,T.matrixWorld);let V=t.update(T),C=T.material;if(Array.isArray(C)){let N=V.groups;for(let H=0,Q=N.length;H<Q;H++){let k=N[H],Z=C[k.materialIndex];if(Z&&Z.visible){let K=x(T,Z,M,y);T.onBeforeShadow(n,T,R,F,V,K,k),n.renderBufferDirect(F,null,V,K,T,k),T.onAfterShadow(n,T,R,F,V,K,k)}}}else if(C.visible){let N=x(T,C,M,y);T.onBeforeShadow(n,T,R,F,V,N,null),n.renderBufferDirect(F,null,V,N,T,null),T.onAfterShadow(n,T,R,F,V,N,null)}}let D=T.children;for(let V=0,C=D.length;V<C;V++)w(D[V],R,F,M,y)}function A(T){T.target.removeEventListener("dispose",A);for(let F in c){let M=c[F],y=T.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}function Kg(n,t,e){let i=e.isWebGL2;function s(){let I=!1,pt=new pe,mt=null,zt=new pe(0,0,0,0);return{setMask:function(Ot){mt!==Ot&&!I&&(n.colorMask(Ot,Ot,Ot,Ot),mt=Ot)},setLocked:function(Ot){I=Ot},setClear:function(Ot,re,ae,Te,We){We===!0&&(Ot*=Te,re*=Te,ae*=Te),pt.set(Ot,re,ae,Te),zt.equals(pt)===!1&&(n.clearColor(Ot,re,ae,Te),zt.copy(pt))},reset:function(){I=!1,mt=null,zt.set(-1,0,0,0)}}}function r(){let I=!1,pt=null,mt=null,zt=null;return{setTest:function(Ot){Ot?Nt(n.DEPTH_TEST):bt(n.DEPTH_TEST)},setMask:function(Ot){pt!==Ot&&!I&&(n.depthMask(Ot),pt=Ot)},setFunc:function(Ot){if(mt!==Ot){switch(Ot){case xf:n.depthFunc(n.NEVER);break;case vf:n.depthFunc(n.ALWAYS);break;case yf:n.depthFunc(n.LESS);break;case sa:n.depthFunc(n.LEQUAL);break;case Mf:n.depthFunc(n.EQUAL);break;case Sf:n.depthFunc(n.GEQUAL);break;case bf:n.depthFunc(n.GREATER);break;case Ef:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}mt=Ot}},setLocked:function(Ot){I=Ot},setClear:function(Ot){zt!==Ot&&(n.clearDepth(Ot),zt=Ot)},reset:function(){I=!1,pt=null,mt=null,zt=null}}}function a(){let I=!1,pt=null,mt=null,zt=null,Ot=null,re=null,ae=null,Te=null,We=null;return{setTest:function(oe){I||(oe?Nt(n.STENCIL_TEST):bt(n.STENCIL_TEST))},setMask:function(oe){pt!==oe&&!I&&(n.stencilMask(oe),pt=oe)},setFunc:function(oe,Xe,En){(mt!==oe||zt!==Xe||Ot!==En)&&(n.stencilFunc(oe,Xe,En),mt=oe,zt=Xe,Ot=En)},setOp:function(oe,Xe,En){(re!==oe||ae!==Xe||Te!==En)&&(n.stencilOp(oe,Xe,En),re=oe,ae=Xe,Te=En)},setLocked:function(oe){I=oe},setClear:function(oe){We!==oe&&(n.clearStencil(oe),We=oe)},reset:function(){I=!1,pt=null,mt=null,zt=null,Ot=null,re=null,ae=null,Te=null,We=null}}}let o=new s,l=new r,c=new a,h=new WeakMap,u=new WeakMap,f={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,w=null,A=null,T=null,R=null,F=null,M=new Gt(0,0,0),y=0,U=!1,D=null,V=null,C=null,N=null,H=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,Z=0,K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(K)[1]),k=Z>=1):K.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),k=Z>=2);let W=null,ot={},q=n.getParameter(n.SCISSOR_BOX),et=n.getParameter(n.VIEWPORT),ft=new pe().fromArray(q),Tt=new pe().fromArray(et);function _t(I,pt,mt,zt){let Ot=new Uint8Array(4),re=n.createTexture();n.bindTexture(I,re),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ae=0;ae<mt;ae++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(pt,0,n.RGBA,1,1,zt,0,n.RGBA,n.UNSIGNED_BYTE,Ot):n.texImage2D(pt+ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ot);return re}let Dt={};Dt[n.TEXTURE_2D]=_t(n.TEXTURE_2D,n.TEXTURE_2D,1),Dt[n.TEXTURE_CUBE_MAP]=_t(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Dt[n.TEXTURE_2D_ARRAY]=_t(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Dt[n.TEXTURE_3D]=_t(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Nt(n.DEPTH_TEST),l.setFunc(sa),gt(!1),b(th),Nt(n.CULL_FACE),j(di);function Nt(I){f[I]!==!0&&(n.enable(I),f[I]=!0)}function bt(I){f[I]!==!1&&(n.disable(I),f[I]=!1)}function Lt(I,pt){return p[I]!==pt?(n.bindFramebuffer(I,pt),p[I]=pt,i&&(I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=pt),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=pt)),!0):!1}function P(I,pt){let mt=_,zt=!1;if(I)if(mt=g.get(pt),mt===void 0&&(mt=[],g.set(pt,mt)),I.isWebGLMultipleRenderTargets){let Ot=I.texture;if(mt.length!==Ot.length||mt[0]!==n.COLOR_ATTACHMENT0){for(let re=0,ae=Ot.length;re<ae;re++)mt[re]=n.COLOR_ATTACHMENT0+re;mt.length=Ot.length,zt=!0}}else mt[0]!==n.COLOR_ATTACHMENT0&&(mt[0]=n.COLOR_ATTACHMENT0,zt=!0);else mt[0]!==n.BACK&&(mt[0]=n.BACK,zt=!0);zt&&(e.isWebGL2?n.drawBuffers(mt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(mt))}function lt(I){return m!==I?(n.useProgram(I),m=I,!0):!1}let J={[Li]:n.FUNC_ADD,[nf]:n.FUNC_SUBTRACT,[sf]:n.FUNC_REVERSE_SUBTRACT};if(i)J[ih]=n.MIN,J[sh]=n.MAX;else{let I=t.get("EXT_blend_minmax");I!==null&&(J[ih]=I.MIN_EXT,J[sh]=I.MAX_EXT)}let rt={[rf]:n.ZERO,[af]:n.ONE,[of]:n.SRC_COLOR,[sl]:n.SRC_ALPHA,[ff]:n.SRC_ALPHA_SATURATE,[uf]:n.DST_COLOR,[cf]:n.DST_ALPHA,[lf]:n.ONE_MINUS_SRC_COLOR,[rl]:n.ONE_MINUS_SRC_ALPHA,[df]:n.ONE_MINUS_DST_COLOR,[hf]:n.ONE_MINUS_DST_ALPHA,[pf]:n.CONSTANT_COLOR,[mf]:n.ONE_MINUS_CONSTANT_COLOR,[gf]:n.CONSTANT_ALPHA,[_f]:n.ONE_MINUS_CONSTANT_ALPHA};function j(I,pt,mt,zt,Ot,re,ae,Te,We,oe){if(I===di){d===!0&&(bt(n.BLEND),d=!1);return}if(d===!1&&(Nt(n.BLEND),d=!0),I!==ef){if(I!==S||oe!==U){if((x!==Li||T!==Li)&&(n.blendEquation(n.FUNC_ADD),x=Li,T=Li),oe)switch(I){case gs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFunc(n.ONE,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case gs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case js:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case eh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case nh:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,A=null,R=null,F=null,M.set(0,0,0),y=0,S=I,U=oe}return}Ot=Ot||pt,re=re||mt,ae=ae||zt,(pt!==x||Ot!==T)&&(n.blendEquationSeparate(J[pt],J[Ot]),x=pt,T=Ot),(mt!==w||zt!==A||re!==R||ae!==F)&&(n.blendFuncSeparate(rt[mt],rt[zt],rt[re],rt[ae]),w=mt,A=zt,R=re,F=ae),(Te.equals(M)===!1||We!==y)&&(n.blendColor(Te.r,Te.g,Te.b,We),M.copy(Te),y=We),S=I,U=!1}function At(I,pt){I.side===je?bt(n.CULL_FACE):Nt(n.CULL_FACE);let mt=I.side===Ve;pt&&(mt=!mt),gt(mt),I.blending===gs&&I.transparent===!1?j(di):j(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),o.setMask(I.colorWrite);let zt=I.stencilWrite;c.setTest(zt),zt&&(c.setMask(I.stencilWriteMask),c.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),c.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),B(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Nt(n.SAMPLE_ALPHA_TO_COVERAGE):bt(n.SAMPLE_ALPHA_TO_COVERAGE)}function gt(I){D!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),D=I)}function b(I){I!==jd?(Nt(n.CULL_FACE),I!==V&&(I===th?n.cullFace(n.BACK):I===Qd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):bt(n.CULL_FACE),V=I}function v(I){I!==C&&(k&&n.lineWidth(I),C=I)}function B(I,pt,mt){I?(Nt(n.POLYGON_OFFSET_FILL),(N!==pt||H!==mt)&&(n.polygonOffset(pt,mt),N=pt,H=mt)):bt(n.POLYGON_OFFSET_FILL)}function it(I){I?Nt(n.SCISSOR_TEST):bt(n.SCISSOR_TEST)}function nt(I){I===void 0&&(I=n.TEXTURE0+Q-1),W!==I&&(n.activeTexture(I),W=I)}function tt(I,pt,mt){mt===void 0&&(W===null?mt=n.TEXTURE0+Q-1:mt=W);let zt=ot[mt];zt===void 0&&(zt={type:void 0,texture:void 0},ot[mt]=zt),(zt.type!==I||zt.texture!==pt)&&(W!==mt&&(n.activeTexture(mt),W=mt),n.bindTexture(I,pt||Dt[I]),zt.type=I,zt.texture=pt)}function Et(){let I=ot[W];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function ut(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xt(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Bt(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function O(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function wt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function vt(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function yt(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function dt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function It(I){ft.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ft.copy(I))}function Wt(I){Tt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Tt.copy(I))}function Ut(I,pt){let mt=u.get(pt);mt===void 0&&(mt=new WeakMap,u.set(pt,mt));let zt=mt.get(I);zt===void 0&&(zt=n.getUniformBlockIndex(pt,I.name),mt.set(I,zt))}function Rt(I,pt){let zt=u.get(pt).get(I);h.get(pt)!==zt&&(n.uniformBlockBinding(pt,zt,I.__bindingPointIndex),h.set(pt,zt))}function st(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},W=null,ot={},p={},g=new WeakMap,_=[],m=null,d=!1,S=null,x=null,w=null,A=null,T=null,R=null,F=null,M=new Gt(0,0,0),y=0,U=!1,D=null,V=null,C=null,N=null,H=null,ft.set(0,0,n.canvas.width,n.canvas.height),Tt.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Nt,disable:bt,bindFramebuffer:Lt,drawBuffers:P,useProgram:lt,setBlending:j,setMaterial:At,setFlipSided:gt,setCullFace:b,setLineWidth:v,setPolygonOffset:B,setScissorTest:it,activeTexture:nt,bindTexture:tt,unbindTexture:Et,compressedTexImage2D:ut,compressedTexImage3D:xt,texImage2D:yt,texImage3D:dt,updateUBOMapping:Ut,uniformBlockBinding:Rt,texStorage2D:wt,texStorage3D:vt,texSubImage2D:Pt,texSubImage3D:Bt,compressedTexSubImage2D:O,compressedTexSubImage3D:ht,scissor:It,viewport:Wt,reset:st}}function jg(n,t,e,i,s,r,a){let o=s.isWebGL2,l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap,u,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(b,v){return p?new OffscreenCanvas(b,v):da("canvas")}function _(b,v,B,it){let nt=1;if((b.width>it||b.height>it)&&(nt=it/Math.max(b.width,b.height)),nt<1||v===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){let tt=v?ua:Math.floor,Et=tt(nt*b.width),ut=tt(nt*b.height);u===void 0&&(u=g(Et,ut));let xt=B?g(Et,ut):u;return xt.width=Et,xt.height=ut,xt.getContext("2d").drawImage(b,0,0,Et,ut),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+Et+"x"+ut+")."),xt}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function m(b){return ul(b.width)&&ul(b.height)}function d(b){return o?!1:b.wrapS!==vn||b.wrapT!==vn||b.minFilter!==$e&&b.minFilter!==ln}function S(b,v){return b.generateMipmaps&&v&&b.minFilter!==$e&&b.minFilter!==ln}function x(b){n.generateMipmap(b)}function w(b,v,B,it,nt=!1){if(o===!1)return v;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let tt=v;if(v===n.RED&&(B===n.FLOAT&&(tt=n.R32F),B===n.HALF_FLOAT&&(tt=n.R16F),B===n.UNSIGNED_BYTE&&(tt=n.R8)),v===n.RED_INTEGER&&(B===n.UNSIGNED_BYTE&&(tt=n.R8UI),B===n.UNSIGNED_SHORT&&(tt=n.R16UI),B===n.UNSIGNED_INT&&(tt=n.R32UI),B===n.BYTE&&(tt=n.R8I),B===n.SHORT&&(tt=n.R16I),B===n.INT&&(tt=n.R32I)),v===n.RG&&(B===n.FLOAT&&(tt=n.RG32F),B===n.HALF_FLOAT&&(tt=n.RG16F),B===n.UNSIGNED_BYTE&&(tt=n.RG8)),v===n.RGBA){let Et=nt?oa:ne.getTransfer(it);B===n.FLOAT&&(tt=n.RGBA32F),B===n.HALF_FLOAT&&(tt=n.RGBA16F),B===n.UNSIGNED_BYTE&&(tt=Et===ce?n.SRGB8_ALPHA8:n.RGBA8),B===n.UNSIGNED_SHORT_4_4_4_4&&(tt=n.RGBA4),B===n.UNSIGNED_SHORT_5_5_5_1&&(tt=n.RGB5_A1)}return(tt===n.R16F||tt===n.R32F||tt===n.RG16F||tt===n.RG32F||tt===n.RGBA16F||tt===n.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function A(b,v,B){return S(b,B)===!0||b.isFramebufferTexture&&b.minFilter!==$e&&b.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?v.mipmaps.length:1}function T(b){return b===$e||b===rh||b===Eo?n.NEAREST:n.LINEAR}function R(b){let v=b.target;v.removeEventListener("dispose",R),M(v),v.isVideoTexture&&h.delete(v)}function F(b){let v=b.target;v.removeEventListener("dispose",F),U(v)}function M(b){let v=i.get(b);if(v.__webglInit===void 0)return;let B=b.source,it=f.get(B);if(it){let nt=it[v.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&y(b),Object.keys(it).length===0&&f.delete(B)}i.remove(b)}function y(b){let v=i.get(b);n.deleteTexture(v.__webglTexture);let B=b.source,it=f.get(B);delete it[v.__cacheKey],a.memory.textures--}function U(b){let v=b.texture,B=i.get(b),it=i.get(v);if(it.__webglTexture!==void 0&&(n.deleteTexture(it.__webglTexture),a.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(B.__webglFramebuffer[nt]))for(let tt=0;tt<B.__webglFramebuffer[nt].length;tt++)n.deleteFramebuffer(B.__webglFramebuffer[nt][tt]);else n.deleteFramebuffer(B.__webglFramebuffer[nt]);B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer[nt])}else{if(Array.isArray(B.__webglFramebuffer))for(let nt=0;nt<B.__webglFramebuffer.length;nt++)n.deleteFramebuffer(B.__webglFramebuffer[nt]);else n.deleteFramebuffer(B.__webglFramebuffer);if(B.__webglDepthbuffer&&n.deleteRenderbuffer(B.__webglDepthbuffer),B.__webglMultisampledFramebuffer&&n.deleteFramebuffer(B.__webglMultisampledFramebuffer),B.__webglColorRenderbuffer)for(let nt=0;nt<B.__webglColorRenderbuffer.length;nt++)B.__webglColorRenderbuffer[nt]&&n.deleteRenderbuffer(B.__webglColorRenderbuffer[nt]);B.__webglDepthRenderbuffer&&n.deleteRenderbuffer(B.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let nt=0,tt=v.length;nt<tt;nt++){let Et=i.get(v[nt]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),a.memory.textures--),i.remove(v[nt])}i.remove(v),i.remove(b)}let D=0;function V(){D=0}function C(){let b=D;return b>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+s.maxTextures),D+=1,b}function N(b){let v=[];return v.push(b.wrapS),v.push(b.wrapT),v.push(b.wrapR||0),v.push(b.magFilter),v.push(b.minFilter),v.push(b.anisotropy),v.push(b.internalFormat),v.push(b.format),v.push(b.type),v.push(b.generateMipmaps),v.push(b.premultiplyAlpha),v.push(b.flipY),v.push(b.unpackAlignment),v.push(b.colorSpace),v.join()}function H(b,v){let B=i.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){let it=b.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ft(B,b,v);return}}e.bindTexture(n.TEXTURE_2D,B.__webglTexture,n.TEXTURE0+v)}function Q(b,v){let B=i.get(b);if(b.version>0&&B.__version!==b.version){ft(B,b,v);return}e.bindTexture(n.TEXTURE_2D_ARRAY,B.__webglTexture,n.TEXTURE0+v)}function k(b,v){let B=i.get(b);if(b.version>0&&B.__version!==b.version){ft(B,b,v);return}e.bindTexture(n.TEXTURE_3D,B.__webglTexture,n.TEXTURE0+v)}function Z(b,v){let B=i.get(b);if(b.version>0&&B.__version!==b.version){Tt(B,b,v);return}e.bindTexture(n.TEXTURE_CUBE_MAP,B.__webglTexture,n.TEXTURE0+v)}let K={[Ms]:n.REPEAT,[vn]:n.CLAMP_TO_EDGE,[ll]:n.MIRRORED_REPEAT},W={[$e]:n.NEAREST,[rh]:n.NEAREST_MIPMAP_NEAREST,[Eo]:n.NEAREST_MIPMAP_LINEAR,[ln]:n.LINEAR,[Uf]:n.LINEAR_MIPMAP_NEAREST,[Qs]:n.LINEAR_MIPMAP_LINEAR},ot={[Xf]:n.NEVER,[Kf]:n.ALWAYS,[qf]:n.LESS,[Vu]:n.LEQUAL,[Yf]:n.EQUAL,[Jf]:n.GEQUAL,[$f]:n.GREATER,[Zf]:n.NOTEQUAL};function q(b,v,B){if(B?(n.texParameteri(b,n.TEXTURE_WRAP_S,K[v.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,K[v.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,K[v.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,W[v.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,W[v.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(v.wrapS!==vn||v.wrapT!==vn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(v.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(v.minFilter)),v.minFilter!==$e&&v.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,ot[v.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){let it=t.get("EXT_texture_filter_anisotropic");if(v.magFilter===$e||v.minFilter!==Eo&&v.minFilter!==Qs||v.type===ui&&t.has("OES_texture_float_linear")===!1||o===!1&&v.type===tr&&t.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||i.get(v).__currentAnisotropy)&&(n.texParameterf(b,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),i.get(v).__currentAnisotropy=v.anisotropy)}}function et(b,v){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,v.addEventListener("dispose",R));let it=v.source,nt=f.get(it);nt===void 0&&(nt={},f.set(it,nt));let tt=N(v);if(tt!==b.__cacheKey){nt[tt]===void 0&&(nt[tt]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,B=!0),nt[tt].usedTimes++;let Et=nt[b.__cacheKey];Et!==void 0&&(nt[b.__cacheKey].usedTimes--,Et.usedTimes===0&&y(v)),b.__cacheKey=tt,b.__webglTexture=nt[tt].texture}return B}function ft(b,v,B){let it=n.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),v.isData3DTexture&&(it=n.TEXTURE_3D);let nt=et(b,v),tt=v.source;e.bindTexture(it,b.__webglTexture,n.TEXTURE0+B);let Et=i.get(tt);if(tt.version!==Et.__version||nt===!0){e.activeTexture(n.TEXTURE0+B);let ut=ne.getPrimaries(ne.workingColorSpace),xt=v.colorSpace===cn?null:ne.getPrimaries(v.colorSpace),Pt=v.colorSpace===cn||ut===xt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let Bt=d(v)&&m(v.image)===!1,O=_(v.image,Bt,!1,s.maxTextureSize);O=gt(v,O);let ht=m(O)||o,wt=r.convert(v.format,v.colorSpace),vt=r.convert(v.type),yt=w(v.internalFormat,wt,vt,v.colorSpace,v.isVideoTexture);q(it,v,ht);let dt,It=v.mipmaps,Wt=o&&v.isVideoTexture!==!0&&yt!==ku,Ut=Et.__version===void 0||nt===!0,Rt=A(v,O,ht);if(v.isDepthTexture)yt=n.DEPTH_COMPONENT,o?v.type===ui?yt=n.DEPTH_COMPONENT32F:v.type===hi?yt=n.DEPTH_COMPONENT24:v.type===Di?yt=n.DEPTH24_STENCIL8:yt=n.DEPTH_COMPONENT16:v.type===ui&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===Ni&&yt===n.DEPTH_COMPONENT&&v.type!==jl&&v.type!==hi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=hi,vt=r.convert(v.type)),v.format===Ss&&yt===n.DEPTH_COMPONENT&&(yt=n.DEPTH_STENCIL,v.type!==Di&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Di,vt=r.convert(v.type))),Ut&&(Wt?e.texStorage2D(n.TEXTURE_2D,1,yt,O.width,O.height):e.texImage2D(n.TEXTURE_2D,0,yt,O.width,O.height,0,wt,vt,null));else if(v.isDataTexture)if(It.length>0&&ht){Wt&&Ut&&e.texStorage2D(n.TEXTURE_2D,Rt,yt,It[0].width,It[0].height);for(let st=0,I=It.length;st<I;st++)dt=It[st],Wt?e.texSubImage2D(n.TEXTURE_2D,st,0,0,dt.width,dt.height,wt,vt,dt.data):e.texImage2D(n.TEXTURE_2D,st,yt,dt.width,dt.height,0,wt,vt,dt.data);v.generateMipmaps=!1}else Wt?(Ut&&e.texStorage2D(n.TEXTURE_2D,Rt,yt,O.width,O.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,O.width,O.height,wt,vt,O.data)):e.texImage2D(n.TEXTURE_2D,0,yt,O.width,O.height,0,wt,vt,O.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Wt&&Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,yt,It[0].width,It[0].height,O.depth);for(let st=0,I=It.length;st<I;st++)dt=It[st],v.format!==yn?wt!==null?Wt?e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,O.depth,wt,dt.data,0,0):e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,st,yt,dt.width,dt.height,O.depth,0,dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage3D(n.TEXTURE_2D_ARRAY,st,0,0,0,dt.width,dt.height,O.depth,wt,vt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,st,yt,dt.width,dt.height,O.depth,0,wt,vt,dt.data)}else{Wt&&Ut&&e.texStorage2D(n.TEXTURE_2D,Rt,yt,It[0].width,It[0].height);for(let st=0,I=It.length;st<I;st++)dt=It[st],v.format!==yn?wt!==null?Wt?e.compressedTexSubImage2D(n.TEXTURE_2D,st,0,0,dt.width,dt.height,wt,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,st,yt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Wt?e.texSubImage2D(n.TEXTURE_2D,st,0,0,dt.width,dt.height,wt,vt,dt.data):e.texImage2D(n.TEXTURE_2D,st,yt,dt.width,dt.height,0,wt,vt,dt.data)}else if(v.isDataArrayTexture)Wt?(Ut&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Rt,yt,O.width,O.height,O.depth),e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,O.width,O.height,O.depth,wt,vt,O.data)):e.texImage3D(n.TEXTURE_2D_ARRAY,0,yt,O.width,O.height,O.depth,0,wt,vt,O.data);else if(v.isData3DTexture)Wt?(Ut&&e.texStorage3D(n.TEXTURE_3D,Rt,yt,O.width,O.height,O.depth),e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,O.width,O.height,O.depth,wt,vt,O.data)):e.texImage3D(n.TEXTURE_3D,0,yt,O.width,O.height,O.depth,0,wt,vt,O.data);else if(v.isFramebufferTexture){if(Ut)if(Wt)e.texStorage2D(n.TEXTURE_2D,Rt,yt,O.width,O.height);else{let st=O.width,I=O.height;for(let pt=0;pt<Rt;pt++)e.texImage2D(n.TEXTURE_2D,pt,yt,st,I,0,wt,vt,null),st>>=1,I>>=1}}else if(It.length>0&&ht){Wt&&Ut&&e.texStorage2D(n.TEXTURE_2D,Rt,yt,It[0].width,It[0].height);for(let st=0,I=It.length;st<I;st++)dt=It[st],Wt?e.texSubImage2D(n.TEXTURE_2D,st,0,0,wt,vt,dt):e.texImage2D(n.TEXTURE_2D,st,yt,wt,vt,dt);v.generateMipmaps=!1}else Wt?(Ut&&e.texStorage2D(n.TEXTURE_2D,Rt,yt,O.width,O.height),e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,vt,O)):e.texImage2D(n.TEXTURE_2D,0,yt,wt,vt,O);S(v,ht)&&x(it),Et.__version=tt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function Tt(b,v,B){if(v.image.length!==6)return;let it=et(b,v),nt=v.source;e.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+B);let tt=i.get(nt);if(nt.version!==tt.__version||it===!0){e.activeTexture(n.TEXTURE0+B);let Et=ne.getPrimaries(ne.workingColorSpace),ut=v.colorSpace===cn?null:ne.getPrimaries(v.colorSpace),xt=v.colorSpace===cn||Et===ut?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,v.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,v.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let Pt=v.isCompressedTexture||v.image[0].isCompressedTexture,Bt=v.image[0]&&v.image[0].isDataTexture,O=[];for(let st=0;st<6;st++)!Pt&&!Bt?O[st]=_(v.image[st],!1,!0,s.maxCubemapSize):O[st]=Bt?v.image[st].image:v.image[st],O[st]=gt(v,O[st]);let ht=O[0],wt=m(ht)||o,vt=r.convert(v.format,v.colorSpace),yt=r.convert(v.type),dt=w(v.internalFormat,vt,yt,v.colorSpace),It=o&&v.isVideoTexture!==!0,Wt=tt.__version===void 0||it===!0,Ut=A(v,ht,wt);q(n.TEXTURE_CUBE_MAP,v,wt);let Rt;if(Pt){It&&Wt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,dt,ht.width,ht.height);for(let st=0;st<6;st++){Rt=O[st].mipmaps;for(let I=0;I<Rt.length;I++){let pt=Rt[I];v.format!==yn?vt!==null?It?e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I,0,0,pt.width,pt.height,vt,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I,dt,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I,0,0,pt.width,pt.height,vt,yt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I,dt,pt.width,pt.height,0,vt,yt,pt.data)}}}else{Rt=v.mipmaps,It&&Wt&&(Rt.length>0&&Ut++,e.texStorage2D(n.TEXTURE_CUBE_MAP,Ut,dt,O[0].width,O[0].height));for(let st=0;st<6;st++)if(Bt){It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,O[st].width,O[st].height,vt,yt,O[st].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,dt,O[st].width,O[st].height,0,vt,yt,O[st].data);for(let I=0;I<Rt.length;I++){let mt=Rt[I].image[st].image;It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I+1,0,0,mt.width,mt.height,vt,yt,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I+1,dt,mt.width,mt.height,0,vt,yt,mt.data)}}else{It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,vt,yt,O[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,dt,vt,yt,O[st]);for(let I=0;I<Rt.length;I++){let pt=Rt[I];It?e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I+1,0,0,vt,yt,pt.image[st]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+st,I+1,dt,vt,yt,pt.image[st])}}}S(v,wt)&&x(n.TEXTURE_CUBE_MAP),tt.__version=nt.version,v.onUpdate&&v.onUpdate(v)}b.__version=v.version}function _t(b,v,B,it,nt,tt){let Et=r.convert(B.format,B.colorSpace),ut=r.convert(B.type),xt=w(B.internalFormat,Et,ut,B.colorSpace);if(!i.get(v).__hasExternalTextures){let Bt=Math.max(1,v.width>>tt),O=Math.max(1,v.height>>tt);nt===n.TEXTURE_3D||nt===n.TEXTURE_2D_ARRAY?e.texImage3D(nt,tt,xt,Bt,O,v.depth,0,Et,ut,null):e.texImage2D(nt,tt,xt,Bt,O,0,Et,ut,null)}e.bindFramebuffer(n.FRAMEBUFFER,b),j(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,nt,i.get(B).__webglTexture,0,rt(v)):(nt===n.TEXTURE_2D||nt>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,nt,i.get(B).__webglTexture,tt),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Dt(b,v,B){if(n.bindRenderbuffer(n.RENDERBUFFER,b),v.depthBuffer&&!v.stencilBuffer){let it=o===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(B||j(v)){let nt=v.depthTexture;nt&&nt.isDepthTexture&&(nt.type===ui?it=n.DEPTH_COMPONENT32F:nt.type===hi&&(it=n.DEPTH_COMPONENT24));let tt=rt(v);j(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,tt,it,v.width,v.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,tt,it,v.width,v.height)}else n.renderbufferStorage(n.RENDERBUFFER,it,v.width,v.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(v.depthBuffer&&v.stencilBuffer){let it=rt(v);B&&j(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,it,n.DEPTH24_STENCIL8,v.width,v.height):j(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,it,n.DEPTH24_STENCIL8,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,v.width,v.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{let it=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let nt=0;nt<it.length;nt++){let tt=it[nt],Et=r.convert(tt.format,tt.colorSpace),ut=r.convert(tt.type),xt=w(tt.internalFormat,Et,ut,tt.colorSpace),Pt=rt(v);B&&j(v)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,xt,v.width,v.height):j(v)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,xt,v.width,v.height):n.renderbufferStorage(n.RENDERBUFFER,xt,v.width,v.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Nt(b,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,b),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),H(v.depthTexture,0);let it=i.get(v.depthTexture).__webglTexture,nt=rt(v);if(v.depthTexture.format===Ni)j(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,it,0);else if(v.depthTexture.format===Ss)j(v)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0,nt):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,it,0);else throw new Error("Unknown depthTexture format")}function bt(b){let v=i.get(b),B=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!v.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Nt(v.__webglFramebuffer,b)}else if(B){v.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer[it]),v.__webglDepthbuffer[it]=n.createRenderbuffer(),Dt(v.__webglDepthbuffer[it],b,!1)}else e.bindFramebuffer(n.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=n.createRenderbuffer(),Dt(v.__webglDepthbuffer,b,!1);e.bindFramebuffer(n.FRAMEBUFFER,null)}function Lt(b,v,B){let it=i.get(b);v!==void 0&&_t(it.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),B!==void 0&&bt(b)}function P(b){let v=b.texture,B=i.get(b),it=i.get(v);b.addEventListener("dispose",F),b.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=v.version,a.memory.textures++);let nt=b.isWebGLCubeRenderTarget===!0,tt=b.isWebGLMultipleRenderTargets===!0,Et=m(b)||o;if(nt){B.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[ut]=[];for(let xt=0;xt<v.mipmaps.length;xt++)B.__webglFramebuffer[ut][xt]=n.createFramebuffer()}else B.__webglFramebuffer[ut]=n.createFramebuffer()}else{if(o&&v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let ut=0;ut<v.mipmaps.length;ut++)B.__webglFramebuffer[ut]=n.createFramebuffer()}else B.__webglFramebuffer=n.createFramebuffer();if(tt)if(s.drawBuffers){let ut=b.texture;for(let xt=0,Pt=ut.length;xt<Pt;xt++){let Bt=i.get(ut[xt]);Bt.__webglTexture===void 0&&(Bt.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&j(b)===!1){let ut=tt?v:[v];B.__webglMultisampledFramebuffer=n.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let xt=0;xt<ut.length;xt++){let Pt=ut[xt];B.__webglColorRenderbuffer[xt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,B.__webglColorRenderbuffer[xt]);let Bt=r.convert(Pt.format,Pt.colorSpace),O=r.convert(Pt.type),ht=w(Pt.internalFormat,Bt,O,Pt.colorSpace,b.isXRRenderTarget===!0),wt=rt(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,ht,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,B.__webglColorRenderbuffer[xt])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=n.createRenderbuffer(),Dt(B.__webglDepthRenderbuffer,b,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(nt){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),q(n.TEXTURE_CUBE_MAP,v,Et);for(let ut=0;ut<6;ut++)if(o&&v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)_t(B.__webglFramebuffer[ut][xt],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,xt);else _t(B.__webglFramebuffer[ut],b,v,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);S(v,Et)&&x(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(tt){let ut=b.texture;for(let xt=0,Pt=ut.length;xt<Pt;xt++){let Bt=ut[xt],O=i.get(Bt);e.bindTexture(n.TEXTURE_2D,O.__webglTexture),q(n.TEXTURE_2D,Bt,Et),_t(B.__webglFramebuffer,b,Bt,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,0),S(Bt,Et)&&x(n.TEXTURE_2D)}e.unbindTexture()}else{let ut=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?ut=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(ut,it.__webglTexture),q(ut,v,Et),o&&v.mipmaps&&v.mipmaps.length>0)for(let xt=0;xt<v.mipmaps.length;xt++)_t(B.__webglFramebuffer[xt],b,v,n.COLOR_ATTACHMENT0,ut,xt);else _t(B.__webglFramebuffer,b,v,n.COLOR_ATTACHMENT0,ut,0);S(v,Et)&&x(ut),e.unbindTexture()}b.depthBuffer&&bt(b)}function lt(b){let v=m(b)||o,B=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let it=0,nt=B.length;it<nt;it++){let tt=B[it];if(S(tt,v)){let Et=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ut=i.get(tt).__webglTexture;e.bindTexture(Et,ut),x(Et),e.unbindTexture()}}}function J(b){if(o&&b.samples>0&&j(b)===!1){let v=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],B=b.width,it=b.height,nt=n.COLOR_BUFFER_BIT,tt=[],Et=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ut=i.get(b),xt=b.isWebGLMultipleRenderTargets===!0;if(xt)for(let Pt=0;Pt<v.length;Pt++)e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ut.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglFramebuffer);for(let Pt=0;Pt<v.length;Pt++){tt.push(n.COLOR_ATTACHMENT0+Pt),b.depthBuffer&&tt.push(Et);let Bt=ut.__ignoreDepthValues!==void 0?ut.__ignoreDepthValues:!1;if(Bt===!1&&(b.depthBuffer&&(nt|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(nt|=n.STENCIL_BUFFER_BIT)),xt&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ut.__webglColorRenderbuffer[Pt]),Bt===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[Et]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[Et])),xt){let O=i.get(v[Pt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,O,0)}n.blitFramebuffer(0,0,B,it,0,0,B,it,nt,n.NEAREST),c&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,tt)}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),xt)for(let Pt=0;Pt<v.length;Pt++){e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.RENDERBUFFER,ut.__webglColorRenderbuffer[Pt]);let Bt=i.get(v[Pt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ut.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+Pt,n.TEXTURE_2D,Bt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ut.__webglMultisampledFramebuffer)}}function rt(b){return Math.min(s.maxSamples,b.samples)}function j(b){let v=i.get(b);return o&&b.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function At(b){let v=a.render.frame;h.get(b)!==v&&(h.set(b,v),b.update())}function gt(b,v){let B=b.colorSpace,it=b.format,nt=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===hl||B!==$n&&B!==cn&&(ne.getTransfer(B)===ce?o===!1?t.has("EXT_sRGB")===!0&&it===yn?(b.format=hl,b.minFilter=ln,b.generateMipmaps=!1):v=fa.sRGBToLinear(v):(it!==yn||nt!==pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),v}this.allocateTextureUnit=C,this.resetTextureUnits=V,this.setTexture2D=H,this.setTexture2DArray=Q,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=Lt,this.setupRenderTarget=P,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=J,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=_t,this.useMultisampledRTT=j}function Qg(n,t,e){let i=e.isWebGL2;function s(r,a=cn){let o,l=ne.getTransfer(a);if(r===pi)return n.UNSIGNED_BYTE;if(r===Nu)return n.UNSIGNED_SHORT_4_4_4_4;if(r===Ou)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Df)return n.BYTE;if(r===Nf)return n.SHORT;if(r===jl)return n.UNSIGNED_SHORT;if(r===Du)return n.INT;if(r===hi)return n.UNSIGNED_INT;if(r===ui)return n.FLOAT;if(r===tr)return i?n.HALF_FLOAT:(o=t.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(r===Of)return n.ALPHA;if(r===yn)return n.RGBA;if(r===Ff)return n.LUMINANCE;if(r===Bf)return n.LUMINANCE_ALPHA;if(r===Ni)return n.DEPTH_COMPONENT;if(r===Ss)return n.DEPTH_STENCIL;if(r===hl)return o=t.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(r===zf)return n.RED;if(r===Fu)return n.RED_INTEGER;if(r===kf)return n.RG;if(r===Bu)return n.RG_INTEGER;if(r===zu)return n.RGBA_INTEGER;if(r===wo||r===To||r===Ao||r===Ro)if(l===ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===wo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ao)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ro)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===wo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===To)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ao)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ro)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ah||r===oh||r===lh||r===ch)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===ah)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===oh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===lh)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ch)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===ku)return o=t.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===hh||r===uh)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(r===hh)return l===ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===uh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===dh||r===fh||r===ph||r===mh||r===gh||r===_h||r===xh||r===vh||r===yh||r===Mh||r===Sh||r===bh||r===Eh||r===wh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(r===dh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===fh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ph)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===mh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===gh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_h)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===xh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===vh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===yh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Sh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Eh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===wh)return l===ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Co||r===Th||r===Ah)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(r===Co)return l===ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Th)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ah)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Hf||r===Rh||r===Ch||r===Ph)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(r===Co)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Rh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Ph)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Di?i?n.UNSIGNED_INT_24_8:(o=t.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[r]!==void 0?n[r]:null}return{convert:s}}var wl=class extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}},Qt=class extends Ge{constructor(){super(),this.isGroup=!0,this.type="Group"}},t2={type:"move"},$s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,i),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(t2)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new Qt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},Tl=class extends mi{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null,_=e.getContextAttributes(),m=null,d=null,S=[],x=[],w=new at,A=null,T=new Ze;T.layers.enable(1),T.viewport=new pe;let R=new Ze;R.layers.enable(2),R.viewport=new pe;let F=[T,R],M=new wl;M.layers.enable(1),M.layers.enable(2);let y=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let et=S[q];return et===void 0&&(et=new $s,S[q]=et),et.getTargetRaySpace()},this.getControllerGrip=function(q){let et=S[q];return et===void 0&&(et=new $s,S[q]=et),et.getGripSpace()},this.getHand=function(q){let et=S[q];return et===void 0&&(et=new $s,S[q]=et),et.getHandSpace()};function D(q){let et=x.indexOf(q.inputSource);if(et===-1)return;let ft=S[et];ft!==void 0&&(ft.update(q.inputSource,q.frame,c||a),ft.dispatchEvent({type:q.type,data:q.inputSource}))}function V(){s.removeEventListener("select",D),s.removeEventListener("selectstart",D),s.removeEventListener("selectend",D),s.removeEventListener("squeeze",D),s.removeEventListener("squeezestart",D),s.removeEventListener("squeezeend",D),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",C);for(let q=0;q<S.length;q++){let et=x[q];et!==null&&(x[q]=null,S[q].disconnect(et))}y=null,U=null,t.setRenderTarget(m),p=null,f=null,u=null,s=null,d=null,ot.stop(),i.isPresenting=!1,t.setPixelRatio(A),t.setSize(w.width,w.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){o=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(q){if(s=q,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",D),s.addEventListener("selectstart",D),s.addEventListener("selectend",D),s.addEventListener("squeeze",D),s.addEventListener("squeezestart",D),s.addEventListener("squeezeend",D),s.addEventListener("end",V),s.addEventListener("inputsourceschange",C),_.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(w),s.renderState.layers===void 0||t.capabilities.isWebGL2===!1){let et={antialias:s.renderState.layers===void 0?_.antialias:!0,alpha:!0,depth:_.depth,stencil:_.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),d=new Zn(p.framebufferWidth,p.framebufferHeight,{format:yn,type:pi,colorSpace:t.outputColorSpace,stencilBuffer:_.stencil})}else{let et=null,ft=null,Tt=null;_.depth&&(Tt=_.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=_.stencil?Ss:Ni,ft=_.stencil?Di:hi);let _t={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(_t),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),d=new Zn(f.textureWidth,f.textureHeight,{format:yn,type:pi,depthTexture:new wa(f.textureWidth,f.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:_.stencil,colorSpace:t.outputColorSpace,samples:_.antialias?4:0});let Dt=t.properties.get(d);Dt.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ot.setContext(s),ot.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function C(q){for(let et=0;et<q.removed.length;et++){let ft=q.removed[et],Tt=x.indexOf(ft);Tt>=0&&(x[Tt]=null,S[Tt].disconnect(ft))}for(let et=0;et<q.added.length;et++){let ft=q.added[et],Tt=x.indexOf(ft);if(Tt===-1){for(let Dt=0;Dt<S.length;Dt++)if(Dt>=x.length){x.push(ft),Tt=Dt;break}else if(x[Dt]===null){x[Dt]=ft,Tt=Dt;break}if(Tt===-1)break}let _t=S[Tt];_t&&_t.connect(ft)}}let N=new L,H=new L;function Q(q,et,ft){N.setFromMatrixPosition(et.matrixWorld),H.setFromMatrixPosition(ft.matrixWorld);let Tt=N.distanceTo(H),_t=et.projectionMatrix.elements,Dt=ft.projectionMatrix.elements,Nt=_t[14]/(_t[10]-1),bt=_t[14]/(_t[10]+1),Lt=(_t[9]+1)/_t[5],P=(_t[9]-1)/_t[5],lt=(_t[8]-1)/_t[0],J=(Dt[8]+1)/Dt[0],rt=Nt*lt,j=Nt*J,At=Tt/(-lt+J),gt=At*-lt;et.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(gt),q.translateZ(At),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();let b=Nt+At,v=bt+At,B=rt-gt,it=j+(Tt-gt),nt=Lt*bt/v*b,tt=P*bt/v*b;q.projectionMatrix.makePerspective(B,it,nt,tt,b,v),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function k(q,et){et===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(et.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(s===null)return;M.near=R.near=T.near=q.near,M.far=R.far=T.far=q.far,(y!==M.near||U!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),y=M.near,U=M.far);let et=q.parent,ft=M.cameras;k(M,et);for(let Tt=0;Tt<ft.length;Tt++)k(ft[Tt],et);ft.length===2?Q(M,T,R):M.projectionMatrix.copy(T.projectionMatrix),Z(q,M,et)};function Z(q,et,ft){ft===null?q.matrix.copy(et.matrixWorld):(q.matrix.copy(ft.matrixWorld),q.matrix.invert(),q.matrix.multiply(et.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(et.projectionMatrix),q.projectionMatrixInverse.copy(et.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=er*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(q){l=q,f!==null&&(f.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)};let K=null;function W(q,et){if(h=et.getViewerPose(c||a),g=et,h!==null){let ft=h.views;p!==null&&(t.setRenderTargetFramebuffer(d,p.framebuffer),t.setRenderTarget(d));let Tt=!1;ft.length!==M.cameras.length&&(M.cameras.length=0,Tt=!0);for(let _t=0;_t<ft.length;_t++){let Dt=ft[_t],Nt=null;if(p!==null)Nt=p.getViewport(Dt);else{let Lt=u.getViewSubImage(f,Dt);Nt=Lt.viewport,_t===0&&(t.setRenderTargetTextures(d,Lt.colorTexture,f.ignoreDepthValues?void 0:Lt.depthStencilTexture),t.setRenderTarget(d))}let bt=F[_t];bt===void 0&&(bt=new Ze,bt.layers.enable(_t),bt.viewport=new pe,F[_t]=bt),bt.matrix.fromArray(Dt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Dt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Nt.x,Nt.y,Nt.width,Nt.height),_t===0&&(M.matrix.copy(bt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),Tt===!0&&M.cameras.push(bt)}}for(let ft=0;ft<S.length;ft++){let Tt=x[ft],_t=S[ft];Tt!==null&&_t!==void 0&&_t.update(Tt,et,c||a)}K&&K(q,et),et.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:et}),g=null}let ot=new Yu;ot.setAnimationLoop(W),this.setAnimationLoop=function(q){K=q},this.dispose=function(){}}};function e2(n,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,qu(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,S,x,w){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,w)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,x):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Ve&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Ve&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let S=t.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;let x=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*x,e(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,x){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=x*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),t.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Ve&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){let S=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function n2(n,t,e,i){let s={},r={},a=[],o=e.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,x){let w=x.program;i.uniformBlockBinding(S,w)}function c(S,x){let w=s[S.id];w===void 0&&(g(S),w=h(S),s[S.id]=w,S.addEventListener("dispose",m));let A=x.program;i.updateUBOMapping(S,A);let T=t.render.frame;r[S.id]!==T&&(f(S),r[S.id]=T)}function h(S){let x=u();S.__bindingPointIndex=x;let w=n.createBuffer(),A=S.__size,T=S.usage;return n.bindBuffer(n.UNIFORM_BUFFER,w),n.bufferData(n.UNIFORM_BUFFER,A,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,w),w}function u(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){let x=s[S.id],w=S.uniforms,A=S.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let T=0,R=w.length;T<R;T++){let F=Array.isArray(w[T])?w[T]:[w[T]];for(let M=0,y=F.length;M<y;M++){let U=F[M];if(p(U,T,M,A)===!0){let D=U.__offset,V=Array.isArray(U.value)?U.value:[U.value],C=0;for(let N=0;N<V.length;N++){let H=V[N],Q=_(H);typeof H=="number"||typeof H=="boolean"?(U.__data[0]=H,n.bufferSubData(n.UNIFORM_BUFFER,D+C,U.__data)):H.isMatrix3?(U.__data[0]=H.elements[0],U.__data[1]=H.elements[1],U.__data[2]=H.elements[2],U.__data[3]=0,U.__data[4]=H.elements[3],U.__data[5]=H.elements[4],U.__data[6]=H.elements[5],U.__data[7]=0,U.__data[8]=H.elements[6],U.__data[9]=H.elements[7],U.__data[10]=H.elements[8],U.__data[11]=0):(H.toArray(U.__data,C),C+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,D,U.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(S,x,w,A){let T=S.value,R=x+"_"+w;if(A[R]===void 0)return typeof T=="number"||typeof T=="boolean"?A[R]=T:A[R]=T.clone(),!0;{let F=A[R];if(typeof T=="number"||typeof T=="boolean"){if(F!==T)return A[R]=T,!0}else if(F.equals(T)===!1)return F.copy(T),!0}return!1}function g(S){let x=S.uniforms,w=0,A=16;for(let R=0,F=x.length;R<F;R++){let M=Array.isArray(x[R])?x[R]:[x[R]];for(let y=0,U=M.length;y<U;y++){let D=M[y],V=Array.isArray(D.value)?D.value:[D.value];for(let C=0,N=V.length;C<N;C++){let H=V[C],Q=_(H),k=w%A;k!==0&&A-k<Q.boundary&&(w+=A-k),D.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=Q.storage}}}let T=w%A;return T>0&&(w+=A-T),S.__size=w,S.__cache={},this}function _(S){let x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function m(S){let x=S.target;x.removeEventListener("dispose",m);let w=a.indexOf(x.__bindingPointIndex);a.splice(w,1),n.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function d(){for(let S in s)n.deleteBuffer(s[S]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}var ir=class{constructor(t={}){let{canvas:e=dp(),context:i=null,depth:s=!0,stencil:r=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;let p=new Uint32Array(4),g=new Int32Array(4),_=null,m=null,d=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=xe,this._useLegacyLights=!1,this.toneMapping=fi,this.toneMappingExposure=1;let x=this,w=!1,A=0,T=0,R=null,F=-1,M=null,y=new pe,U=new pe,D=null,V=new Gt(0),C=0,N=e.width,H=e.height,Q=1,k=null,Z=null,K=new pe(0,0,N,H),W=new pe(0,0,N,H),ot=!1,q=new nr,et=!1,ft=!1,Tt=null,_t=new he,Dt=new at,Nt=new L,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Lt(){return R===null?Q:1}let P=i;function lt(E,z){for(let X=0;X<E.length;X++){let Y=E[X],G=e.getContext(Y,z);if(G!==null)return G}return null}try{let E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Jl}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",I,!1),e.addEventListener("webglcontextcreationerror",pt,!1),P===null){let z=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&z.shift(),P=lt(z,E),P===null)throw lt(z)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&P instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),P.getShaderPrecisionFormat===void 0&&(P.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let J,rt,j,At,gt,b,v,B,it,nt,tt,Et,ut,xt,Pt,Bt,O,ht,wt,vt,yt,dt,It,Wt;function Ut(){J=new M0(P),rt=new m0(P,J,t),J.init(rt),dt=new Qg(P,J,rt),j=new Kg(P,J,rt),At=new E0(P),gt=new zg,b=new jg(P,J,j,gt,rt,dt,At),v=new _0(x),B=new y0(x),it=new Ip(P,rt),It=new f0(P,J,it,rt),nt=new S0(P,it,At,It),tt=new R0(P,nt,it,At),wt=new A0(P,rt,b),Bt=new g0(gt),Et=new Bg(x,v,B,J,rt,It,Bt),ut=new e2(x,gt),xt=new Hg,Pt=new Yg(J,rt),ht=new d0(x,v,B,j,tt,f,l),O=new Jg(x,tt,rt),Wt=new n2(P,At,rt,j),vt=new p0(P,J,At,rt),yt=new b0(P,J,At,rt),At.programs=Et.programs,x.capabilities=rt,x.extensions=J,x.properties=gt,x.renderLists=xt,x.shadowMap=O,x.state=j,x.info=At}Ut();let Rt=new Tl(x,P);this.xr=Rt,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let E=J.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=J.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(E){E!==void 0&&(Q=E,this.setSize(N,H,!1))},this.getSize=function(E){return E.set(N,H)},this.setSize=function(E,z,X=!0){if(Rt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}N=E,H=z,e.width=Math.floor(E*Q),e.height=Math.floor(z*Q),X===!0&&(e.style.width=E+"px",e.style.height=z+"px"),this.setViewport(0,0,E,z)},this.getDrawingBufferSize=function(E){return E.set(N*Q,H*Q).floor()},this.setDrawingBufferSize=function(E,z,X){N=E,H=z,Q=X,e.width=Math.floor(E*X),e.height=Math.floor(z*X),this.setViewport(0,0,E,z)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy(K)},this.setViewport=function(E,z,X,Y){E.isVector4?K.set(E.x,E.y,E.z,E.w):K.set(E,z,X,Y),j.viewport(y.copy(K).multiplyScalar(Q).floor())},this.getScissor=function(E){return E.copy(W)},this.setScissor=function(E,z,X,Y){E.isVector4?W.set(E.x,E.y,E.z,E.w):W.set(E,z,X,Y),j.scissor(U.copy(W).multiplyScalar(Q).floor())},this.getScissorTest=function(){return ot},this.setScissorTest=function(E){j.setScissorTest(ot=E)},this.setOpaqueSort=function(E){k=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor.apply(ht,arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha.apply(ht,arguments)},this.clear=function(E=!0,z=!0,X=!0){let Y=0;if(E){let G=!1;if(R!==null){let Mt=R.texture.format;G=Mt===zu||Mt===Bu||Mt===Fu}if(G){let Mt=R.texture.type,Ct=Mt===pi||Mt===hi||Mt===jl||Mt===Di||Mt===Nu||Mt===Ou,Ft=ht.getClearColor(),kt=ht.getClearAlpha(),qt=Ft.r,Ht=Ft.g,Vt=Ft.b;Ct?(p[0]=qt,p[1]=Ht,p[2]=Vt,p[3]=kt,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=qt,g[1]=Ht,g[2]=Vt,g[3]=kt,P.clearBufferiv(P.COLOR,0,g))}else Y|=P.COLOR_BUFFER_BIT}z&&(Y|=P.DEPTH_BUFFER_BIT),X&&(Y|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",I,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),xt.dispose(),Pt.dispose(),gt.dispose(),v.dispose(),B.dispose(),tt.dispose(),It.dispose(),Wt.dispose(),Et.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",We),Rt.removeEventListener("sessionend",oe),Tt&&(Tt.dispose(),Tt=null),Xe.stop()};function st(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function I(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let E=At.autoReset,z=O.enabled,X=O.autoUpdate,Y=O.needsUpdate,G=O.type;Ut(),At.autoReset=E,O.enabled=z,O.autoUpdate=X,O.needsUpdate=Y,O.type=G}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function mt(E){let z=E.target;z.removeEventListener("dispose",mt),zt(z)}function zt(E){Ot(E),gt.remove(E)}function Ot(E){let z=gt.get(E).programs;z!==void 0&&(z.forEach(function(X){Et.releaseProgram(X)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,z,X,Y,G,Mt){z===null&&(z=bt);let Ct=G.isMesh&&G.matrixWorld.determinant()<0,Ft=Cd(E,z,X,Y,G);j.setMaterial(Y,Ct);let kt=X.index,qt=1;if(Y.wireframe===!0){if(kt=nt.getWireframeAttribute(X),kt===void 0)return;qt=2}let Ht=X.drawRange,Vt=X.attributes.position,ve=Ht.start*qt,tn=(Ht.start+Ht.count)*qt;Mt!==null&&(ve=Math.max(ve,Mt.start*qt),tn=Math.min(tn,(Mt.start+Mt.count)*qt)),kt!==null?(ve=Math.max(ve,0),tn=Math.min(tn,kt.count)):Vt!=null&&(ve=Math.max(ve,0),tn=Math.min(tn,Vt.count));let Ae=tn-ve;if(Ae<0||Ae===1/0)return;It.setup(G,Y,Ft,X,kt);let On,de=vt;if(kt!==null&&(On=it.get(kt),de=yt,de.setIndex(On)),G.isMesh)Y.wireframe===!0?(j.setLineWidth(Y.wireframeLinewidth*Lt()),de.setMode(P.LINES)):de.setMode(P.TRIANGLES);else if(G.isLine){let Yt=Y.linewidth;Yt===void 0&&(Yt=1),j.setLineWidth(Yt*Lt()),G.isLineSegments?de.setMode(P.LINES):G.isLineLoop?de.setMode(P.LINE_LOOP):de.setMode(P.LINE_STRIP)}else G.isPoints?de.setMode(P.POINTS):G.isSprite&&de.setMode(P.TRIANGLES);if(G.isBatchedMesh)de.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else if(G.isInstancedMesh)de.renderInstances(ve,Ae,G.count);else if(X.isInstancedBufferGeometry){let Yt=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,io=Math.min(X.instanceCount,Yt);de.renderInstances(ve,Ae,io)}else de.render(ve,Ae)};function re(E,z,X){E.transparent===!0&&E.side===je&&E.forceSinglePass===!1?(E.side=Ve,E.needsUpdate=!0,pr(E,z,X),E.side=Cn,E.needsUpdate=!0,pr(E,z,X),E.side=je):pr(E,z,X)}this.compile=function(E,z,X=null){X===null&&(X=E),m=Pt.get(X),m.init(),S.push(m),X.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),E!==X&&E.traverseVisible(function(G){G.isLight&&G.layers.test(z.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights(x._useLegacyLights);let Y=new Set;return E.traverse(function(G){let Mt=G.material;if(Mt)if(Array.isArray(Mt))for(let Ct=0;Ct<Mt.length;Ct++){let Ft=Mt[Ct];re(Ft,X,G),Y.add(Ft)}else re(Mt,X,G),Y.add(Mt)}),S.pop(),m=null,Y},this.compileAsync=function(E,z,X=null){let Y=this.compile(E,z,X);return new Promise(G=>{function Mt(){if(Y.forEach(function(Ct){gt.get(Ct).currentProgram.isReady()&&Y.delete(Ct)}),Y.size===0){G(E);return}setTimeout(Mt,10)}J.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let ae=null;function Te(E){ae&&ae(E)}function We(){Xe.stop()}function oe(){Xe.start()}let Xe=new Yu;Xe.setAnimationLoop(Te),typeof self<"u"&&Xe.setContext(self),this.setAnimationLoop=function(E){ae=E,Rt.setAnimationLoop(E),E===null?Xe.stop():Xe.start()},Rt.addEventListener("sessionstart",We),Rt.addEventListener("sessionend",oe),this.render=function(E,z){if(z!==void 0&&z.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),z.parent===null&&z.matrixWorldAutoUpdate===!0&&z.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(z),z=Rt.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,z,R),m=Pt.get(E,S.length),m.init(),S.push(m),_t.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),q.setFromProjectionMatrix(_t),ft=this.localClippingEnabled,et=Bt.init(this.clippingPlanes,ft),_=xt.get(E,d.length),_.init(),d.push(_),En(E,z,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(k,Z),this.info.render.frame++,et===!0&&Bt.beginShadows();let X=m.state.shadowsArray;if(O.render(X,E,z),et===!0&&Bt.endShadows(),this.info.autoReset===!0&&this.info.reset(),ht.render(_,E),m.setupLights(x._useLegacyLights),z.isArrayCamera){let Y=z.cameras;for(let G=0,Mt=Y.length;G<Mt;G++){let Ct=Y[G];vc(_,E,Ct,Ct.viewport)}}else vc(_,E,z);R!==null&&(b.updateMultisampleRenderTarget(R),b.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,z),It.resetDefaultState(),F=-1,M=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function En(E,z,X,Y){if(E.visible===!1)return;if(E.layers.test(z.layers)){if(E.isGroup)X=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(z);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||q.intersectsSprite(E)){Y&&Nt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(_t);let Ct=tt.update(E),Ft=E.material;Ft.visible&&_.push(E,Ct,Ft,X,Nt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||q.intersectsObject(E))){let Ct=tt.update(E),Ft=E.material;if(Y&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Nt.copy(E.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Nt.copy(Ct.boundingSphere.center)),Nt.applyMatrix4(E.matrixWorld).applyMatrix4(_t)),Array.isArray(Ft)){let kt=Ct.groups;for(let qt=0,Ht=kt.length;qt<Ht;qt++){let Vt=kt[qt],ve=Ft[Vt.materialIndex];ve&&ve.visible&&_.push(E,Ct,ve,X,Nt.z,Vt)}}else Ft.visible&&_.push(E,Ct,Ft,X,Nt.z,null)}}let Mt=E.children;for(let Ct=0,Ft=Mt.length;Ct<Ft;Ct++)En(Mt[Ct],z,X,Y)}function vc(E,z,X,Y){let G=E.opaque,Mt=E.transmissive,Ct=E.transparent;m.setupLightsView(X),et===!0&&Bt.setGlobalState(x.clippingPlanes,X),Mt.length>0&&Rd(G,Mt,z,X),Y&&j.viewport(y.copy(Y)),G.length>0&&fr(G,z,X),Mt.length>0&&fr(Mt,z,X),Ct.length>0&&fr(Ct,z,X),j.buffers.depth.setTest(!0),j.buffers.depth.setMask(!0),j.buffers.color.setMask(!0),j.setPolygonOffset(!1)}function Rd(E,z,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;let Mt=rt.isWebGL2;Tt===null&&(Tt=new Zn(1,1,{generateMipmaps:!0,type:J.has("EXT_color_buffer_half_float")?tr:pi,minFilter:Qs,samples:Mt?4:0})),x.getDrawingBufferSize(Dt),Mt?Tt.setSize(Dt.x,Dt.y):Tt.setSize(ua(Dt.x),ua(Dt.y));let Ct=x.getRenderTarget();x.setRenderTarget(Tt),x.getClearColor(V),C=x.getClearAlpha(),C<1&&x.setClearColor(16777215,.5),x.clear();let Ft=x.toneMapping;x.toneMapping=fi,fr(E,X,Y),b.updateMultisampleRenderTarget(Tt),b.updateRenderTargetMipmap(Tt);let kt=!1;for(let qt=0,Ht=z.length;qt<Ht;qt++){let Vt=z[qt],ve=Vt.object,tn=Vt.geometry,Ae=Vt.material,On=Vt.group;if(Ae.side===je&&ve.layers.test(Y.layers)){let de=Ae.side;Ae.side=Ve,Ae.needsUpdate=!0,yc(ve,X,Y,tn,Ae,On),Ae.side=de,Ae.needsUpdate=!0,kt=!0}}kt===!0&&(b.updateMultisampleRenderTarget(Tt),b.updateRenderTargetMipmap(Tt)),x.setRenderTarget(Ct),x.setClearColor(V,C),x.toneMapping=Ft}function fr(E,z,X){let Y=z.isScene===!0?z.overrideMaterial:null;for(let G=0,Mt=E.length;G<Mt;G++){let Ct=E[G],Ft=Ct.object,kt=Ct.geometry,qt=Y===null?Ct.material:Y,Ht=Ct.group;Ft.layers.test(X.layers)&&yc(Ft,z,X,kt,qt,Ht)}}function yc(E,z,X,Y,G,Mt){E.onBeforeRender(x,z,X,Y,G,Mt),E.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),G.onBeforeRender(x,z,X,Y,E,Mt),G.transparent===!0&&G.side===je&&G.forceSinglePass===!1?(G.side=Ve,G.needsUpdate=!0,x.renderBufferDirect(X,z,Y,G,E,Mt),G.side=Cn,G.needsUpdate=!0,x.renderBufferDirect(X,z,Y,G,E,Mt),G.side=je):x.renderBufferDirect(X,z,Y,G,E,Mt),E.onAfterRender(x,z,X,Y,G,Mt)}function pr(E,z,X){z.isScene!==!0&&(z=bt);let Y=gt.get(E),G=m.state.lights,Mt=m.state.shadowsArray,Ct=G.state.version,Ft=Et.getParameters(E,G.state,Mt,z,X),kt=Et.getProgramCacheKey(Ft),qt=Y.programs;Y.environment=E.isMeshStandardMaterial?z.environment:null,Y.fog=z.fog,Y.envMap=(E.isMeshStandardMaterial?B:v).get(E.envMap||Y.environment),qt===void 0&&(E.addEventListener("dispose",mt),qt=new Map,Y.programs=qt);let Ht=qt.get(kt);if(Ht!==void 0){if(Y.currentProgram===Ht&&Y.lightsStateVersion===Ct)return Sc(E,Ft),Ht}else Ft.uniforms=Et.getUniforms(E),E.onBuild(X,Ft,x),E.onBeforeCompile(Ft,x),Ht=Et.acquireProgram(Ft,kt),qt.set(kt,Ht),Y.uniforms=Ft.uniforms;let Vt=Y.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Vt.clippingPlanes=Bt.uniform),Sc(E,Ft),Y.needsLights=Ld(E),Y.lightsStateVersion=Ct,Y.needsLights&&(Vt.ambientLightColor.value=G.state.ambient,Vt.lightProbe.value=G.state.probe,Vt.directionalLights.value=G.state.directional,Vt.directionalLightShadows.value=G.state.directionalShadow,Vt.spotLights.value=G.state.spot,Vt.spotLightShadows.value=G.state.spotShadow,Vt.rectAreaLights.value=G.state.rectArea,Vt.ltc_1.value=G.state.rectAreaLTC1,Vt.ltc_2.value=G.state.rectAreaLTC2,Vt.pointLights.value=G.state.point,Vt.pointLightShadows.value=G.state.pointShadow,Vt.hemisphereLights.value=G.state.hemi,Vt.directionalShadowMap.value=G.state.directionalShadowMap,Vt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Vt.spotShadowMap.value=G.state.spotShadowMap,Vt.spotLightMatrix.value=G.state.spotLightMatrix,Vt.spotLightMap.value=G.state.spotLightMap,Vt.pointShadowMap.value=G.state.pointShadowMap,Vt.pointShadowMatrix.value=G.state.pointShadowMatrix),Y.currentProgram=Ht,Y.uniformsList=null,Ht}function Mc(E){if(E.uniformsList===null){let z=E.currentProgram.getUniforms();E.uniformsList=xs.seqWithValue(z.seq,E.uniforms)}return E.uniformsList}function Sc(E,z){let X=gt.get(E);X.outputColorSpace=z.outputColorSpace,X.batching=z.batching,X.instancing=z.instancing,X.instancingColor=z.instancingColor,X.skinning=z.skinning,X.morphTargets=z.morphTargets,X.morphNormals=z.morphNormals,X.morphColors=z.morphColors,X.morphTargetsCount=z.morphTargetsCount,X.numClippingPlanes=z.numClippingPlanes,X.numIntersection=z.numClipIntersection,X.vertexAlphas=z.vertexAlphas,X.vertexTangents=z.vertexTangents,X.toneMapping=z.toneMapping}function Cd(E,z,X,Y,G){z.isScene!==!0&&(z=bt),b.resetTextureUnits();let Mt=z.fog,Ct=Y.isMeshStandardMaterial?z.environment:null,Ft=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$n,kt=(Y.isMeshStandardMaterial?B:v).get(Y.envMap||Ct),qt=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Ht=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Vt=!!X.morphAttributes.position,ve=!!X.morphAttributes.normal,tn=!!X.morphAttributes.color,Ae=fi;Y.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ae=x.toneMapping);let On=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,de=On!==void 0?On.length:0,Yt=gt.get(Y),io=m.state.lights;if(et===!0&&(ft===!0||E!==M)){let an=E===M&&Y.id===F;Bt.setState(Y,E,an)}let me=!1;Y.version===Yt.__version?(Yt.needsLights&&Yt.lightsStateVersion!==io.state.version||Yt.outputColorSpace!==Ft||G.isBatchedMesh&&Yt.batching===!1||!G.isBatchedMesh&&Yt.batching===!0||G.isInstancedMesh&&Yt.instancing===!1||!G.isInstancedMesh&&Yt.instancing===!0||G.isSkinnedMesh&&Yt.skinning===!1||!G.isSkinnedMesh&&Yt.skinning===!0||G.isInstancedMesh&&Yt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Yt.instancingColor===!1&&G.instanceColor!==null||Yt.envMap!==kt||Y.fog===!0&&Yt.fog!==Mt||Yt.numClippingPlanes!==void 0&&(Yt.numClippingPlanes!==Bt.numPlanes||Yt.numIntersection!==Bt.numIntersection)||Yt.vertexAlphas!==qt||Yt.vertexTangents!==Ht||Yt.morphTargets!==Vt||Yt.morphNormals!==ve||Yt.morphColors!==tn||Yt.toneMapping!==Ae||rt.isWebGL2===!0&&Yt.morphTargetsCount!==de)&&(me=!0):(me=!0,Yt.__version=Y.version);let Mi=Yt.currentProgram;me===!0&&(Mi=pr(Y,z,G));let bc=!1,Ls=!1,so=!1,Fe=Mi.getUniforms(),Si=Yt.uniforms;if(j.useProgram(Mi.program)&&(bc=!0,Ls=!0,so=!0),Y.id!==F&&(F=Y.id,Ls=!0),bc||M!==E){Fe.setValue(P,"projectionMatrix",E.projectionMatrix),Fe.setValue(P,"viewMatrix",E.matrixWorldInverse);let an=Fe.map.cameraPosition;an!==void 0&&an.setValue(P,Nt.setFromMatrixPosition(E.matrixWorld)),rt.logarithmicDepthBuffer&&Fe.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Fe.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Ls=!0,so=!0)}if(G.isSkinnedMesh){Fe.setOptional(P,G,"bindMatrix"),Fe.setOptional(P,G,"bindMatrixInverse");let an=G.skeleton;an&&(rt.floatVertexTextures?(an.boneTexture===null&&an.computeBoneTexture(),Fe.setValue(P,"boneTexture",an.boneTexture,b)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}G.isBatchedMesh&&(Fe.setOptional(P,G,"batchingTexture"),Fe.setValue(P,"batchingTexture",G._matricesTexture,b));let ro=X.morphAttributes;if((ro.position!==void 0||ro.normal!==void 0||ro.color!==void 0&&rt.isWebGL2===!0)&&wt.update(G,X,Mi),(Ls||Yt.receiveShadow!==G.receiveShadow)&&(Yt.receiveShadow=G.receiveShadow,Fe.setValue(P,"receiveShadow",G.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Si.envMap.value=kt,Si.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),Ls&&(Fe.setValue(P,"toneMappingExposure",x.toneMappingExposure),Yt.needsLights&&Pd(Si,so),Mt&&Y.fog===!0&&ut.refreshFogUniforms(Si,Mt),ut.refreshMaterialUniforms(Si,Y,Q,H,Tt),xs.upload(P,Mc(Yt),Si,b)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(xs.upload(P,Mc(Yt),Si,b),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Fe.setValue(P,"center",G.center),Fe.setValue(P,"modelViewMatrix",G.modelViewMatrix),Fe.setValue(P,"normalMatrix",G.normalMatrix),Fe.setValue(P,"modelMatrix",G.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){let an=Y.uniformsGroups;for(let ao=0,Id=an.length;ao<Id;ao++)if(rt.isWebGL2){let Ec=an[ao];Wt.update(Ec,Mi),Wt.bind(Ec,Mi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mi}function Pd(E,z){E.ambientLightColor.needsUpdate=z,E.lightProbe.needsUpdate=z,E.directionalLights.needsUpdate=z,E.directionalLightShadows.needsUpdate=z,E.pointLights.needsUpdate=z,E.pointLightShadows.needsUpdate=z,E.spotLights.needsUpdate=z,E.spotLightShadows.needsUpdate=z,E.rectAreaLights.needsUpdate=z,E.hemisphereLights.needsUpdate=z}function Ld(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,z,X){gt.get(E.texture).__webglTexture=z,gt.get(E.depthTexture).__webglTexture=X;let Y=gt.get(E);Y.__hasExternalTextures=!0,Y.__hasExternalTextures&&(Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||J.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,z){let X=gt.get(E);X.__webglFramebuffer=z,X.__useDefaultFramebuffer=z===void 0},this.setRenderTarget=function(E,z=0,X=0){R=E,A=z,T=X;let Y=!0,G=null,Mt=!1,Ct=!1;if(E){let kt=gt.get(E);kt.__useDefaultFramebuffer!==void 0?(j.bindFramebuffer(P.FRAMEBUFFER,null),Y=!1):kt.__webglFramebuffer===void 0?b.setupRenderTarget(E):kt.__hasExternalTextures&&b.rebindTextures(E,gt.get(E.texture).__webglTexture,gt.get(E.depthTexture).__webglTexture);let qt=E.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(Ct=!0);let Ht=gt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ht[z])?G=Ht[z][X]:G=Ht[z],Mt=!0):rt.isWebGL2&&E.samples>0&&b.useMultisampledRTT(E)===!1?G=gt.get(E).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[X]:G=Ht,y.copy(E.viewport),U.copy(E.scissor),D=E.scissorTest}else y.copy(K).multiplyScalar(Q).floor(),U.copy(W).multiplyScalar(Q).floor(),D=ot;if(j.bindFramebuffer(P.FRAMEBUFFER,G)&&rt.drawBuffers&&Y&&j.drawBuffers(E,G),j.viewport(y),j.scissor(U),j.setScissorTest(D),Mt){let kt=gt.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+z,kt.__webglTexture,X)}else if(Ct){let kt=gt.get(E.texture),qt=z||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,kt.__webglTexture,X||0,qt)}F=-1},this.readRenderTargetPixels=function(E,z,X,Y,G,Mt,Ct){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ft=gt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ct!==void 0&&(Ft=Ft[Ct]),Ft){j.bindFramebuffer(P.FRAMEBUFFER,Ft);try{let kt=E.texture,qt=kt.format,Ht=kt.type;if(qt!==yn&&dt.convert(qt)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}let Vt=Ht===tr&&(J.has("EXT_color_buffer_half_float")||rt.isWebGL2&&J.has("EXT_color_buffer_float"));if(Ht!==pi&&dt.convert(Ht)!==P.getParameter(P.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ht===ui&&(rt.isWebGL2||J.has("OES_texture_float")||J.has("WEBGL_color_buffer_float")))&&!Vt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}z>=0&&z<=E.width-Y&&X>=0&&X<=E.height-G&&P.readPixels(z,X,Y,G,dt.convert(qt),dt.convert(Ht),Mt)}finally{let kt=R!==null?gt.get(R).__webglFramebuffer:null;j.bindFramebuffer(P.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(E,z,X=0){let Y=Math.pow(2,-X),G=Math.floor(z.image.width*Y),Mt=Math.floor(z.image.height*Y);b.setTexture2D(z,0),P.copyTexSubImage2D(P.TEXTURE_2D,X,0,0,E.x,E.y,G,Mt),j.unbindTexture()},this.copyTextureToTexture=function(E,z,X,Y=0){let G=z.image.width,Mt=z.image.height,Ct=dt.convert(X.format),Ft=dt.convert(X.type);b.setTexture2D(X,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,X.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,X.unpackAlignment),z.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,Y,E.x,E.y,G,Mt,Ct,Ft,z.image.data):z.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,Y,E.x,E.y,z.mipmaps[0].width,z.mipmaps[0].height,Ct,z.mipmaps[0].data):P.texSubImage2D(P.TEXTURE_2D,Y,E.x,E.y,Ct,Ft,z.image),Y===0&&X.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),j.unbindTexture()},this.copyTextureToTexture3D=function(E,z,X,Y,G=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}let Mt=E.max.x-E.min.x+1,Ct=E.max.y-E.min.y+1,Ft=E.max.z-E.min.z+1,kt=dt.convert(Y.format),qt=dt.convert(Y.type),Ht;if(Y.isData3DTexture)b.setTexture3D(Y,0),Ht=P.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)b.setTexture2DArray(Y,0),Ht=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,Y.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,Y.unpackAlignment);let Vt=P.getParameter(P.UNPACK_ROW_LENGTH),ve=P.getParameter(P.UNPACK_IMAGE_HEIGHT),tn=P.getParameter(P.UNPACK_SKIP_PIXELS),Ae=P.getParameter(P.UNPACK_SKIP_ROWS),On=P.getParameter(P.UNPACK_SKIP_IMAGES),de=X.isCompressedTexture?X.mipmaps[G]:X.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,de.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,de.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,E.min.x),P.pixelStorei(P.UNPACK_SKIP_ROWS,E.min.y),P.pixelStorei(P.UNPACK_SKIP_IMAGES,E.min.z),X.isDataTexture||X.isData3DTexture?P.texSubImage3D(Ht,G,z.x,z.y,z.z,Mt,Ct,Ft,kt,qt,de.data):X.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),P.compressedTexSubImage3D(Ht,G,z.x,z.y,z.z,Mt,Ct,Ft,kt,de.data)):P.texSubImage3D(Ht,G,z.x,z.y,z.z,Mt,Ct,Ft,kt,qt,de),P.pixelStorei(P.UNPACK_ROW_LENGTH,Vt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,ve),P.pixelStorei(P.UNPACK_SKIP_PIXELS,tn),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ae),P.pixelStorei(P.UNPACK_SKIP_IMAGES,On),G===0&&Y.generateMipmaps&&P.generateMipmap(Ht),j.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?b.setTextureCube(E,0):E.isData3DTexture?b.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?b.setTexture2DArray(E,0):b.setTexture2D(E,0),j.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,j.reset(),It.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=t===tc?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===qa?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===xe?Oi:Hu}set outputEncoding(t){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=t===Oi?xe:$n}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(t){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=t}},Al=class extends ir{};Al.prototype.isWebGL1Renderer=!0;var Ta=class extends Ge{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}},Aa=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=cl,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Rn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return console.warn("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Rn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qe=new L,dn=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyMatrix4(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.applyNormalMatrix(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)qe.fromBufferAttribute(this,e),qe.transformDirection(t),this.setXYZ(e,qe.x,qe.y,qe.z);return this}setX(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ee(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),s=ee(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ee(e,this.array),i=ee(i,this.array),s=ee(s,this.array),r=ee(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new sn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},sr=class extends Ln{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},cs,Vs=new L,hs=new L,us=new L,ds=new at,Gs=new at,Qu=new he,$r=new L,Ws=new L,Zr=new L,yu=new at,Qo=new at,Mu=new at,Ra=class extends Ge{constructor(t=new sr){if(super(),this.isSprite=!0,this.type="Sprite",cs===void 0){cs=new Se;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Aa(e,5);cs.setIndex([0,1,2,0,2,3]),cs.setAttribute("position",new dn(i,3,0,!1)),cs.setAttribute("uv",new dn(i,2,3,!1))}this.geometry=cs,this.material=t,this.center=new at(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Qu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),us.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-us.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;Jr($r.set(-.5,-.5,0),us,a,hs,s,r),Jr(Ws.set(.5,-.5,0),us,a,hs,s,r),Jr(Zr.set(.5,.5,0),us,a,hs,s,r),yu.set(0,0),Qo.set(1,0),Mu.set(1,1);let o=t.ray.intersectTriangle($r,Ws,Zr,!1,Vs);if(o===null&&(Jr(Ws.set(-.5,.5,0),us,a,hs,s,r),Qo.set(0,1),o=t.ray.intersectTriangle($r,Zr,Ws,!1,Vs),o===null))return;let l=t.ray.origin.distanceTo(Vs);l<t.near||l>t.far||e.push({distance:l,point:Vs.clone(),uv:Ui.getInterpolation(Vs,$r,Ws,Zr,yu,Qo,Mu,new at),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Jr(n,t,e,i,s,r){ds.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Gs.x=r*ds.x-s*ds.y,Gs.y=s*ds.x+r*ds.y):Gs.copy(ds),n.copy(t),n.x+=Gs.x,n.y+=Gs.y,n.applyMatrix4(Qu)}var rr=class extends Ln{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Su=new he,Rl=new ga,Kr=new Pn,jr=new L,Ca=class extends Ge{constructor(t=new Se,e=new rr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Kr.copy(i.boundingSphere),Kr.applyMatrix4(s),Kr.radius+=r,t.ray.intersectsSphere(Kr)===!1)return;Su.copy(s).invert(),Rl.copy(t.ray).applyMatrix4(Su);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,u=i.attributes.position;if(c!==null){let f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){let m=c.getX(g);jr.fromBufferAttribute(u,m),bu(jr,m,l,s,t,e,this)}}else{let f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)jr.fromBufferAttribute(u,g),bu(jr,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function bu(n,t,e,i,s,r,a){let o=Rl.distanceSqToPoint(n);if(o<e){let l=new L;Rl.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}var Jn=class extends hn{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},fn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],f=i[s+1]-h,p=(a-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new at:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e){let i=new L,s=[],r=[],a=[],o=new L,l=new he;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),u<=c&&(c=u,i.set(0,1,0)),f<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(l.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ar=class extends fn{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e){let i=e||new at,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,p=c-this.aY;l=f*h-p*u+this.aX,c=f*u+p*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Cl=class extends ar{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function ic(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,u){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,p=(o-a)/h-(l-a)/(h+u)+(l-o)/u;f*=h,p*=h,s(a,o,f,p)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}var Qr=new L,tl=new ic,el=new ic,nl=new ic,Pl=class extends fn{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new L){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Qr.subVectors(s[0],s[1]).add(s[0]),c=Qr);let u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Qr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Qr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);_<1e-4&&(_=1),g<1e-4&&(g=_),m<1e-4&&(m=_),tl.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,_,m),el.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,_,m),nl.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,_,m)}else this.curveType==="catmullrom"&&(tl.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),el.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),nl.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return i.set(tl.calc(l),el.calc(l),nl.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Eu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function i2(n,t){let e=1-n;return e*e*t}function s2(n,t){return 2*(1-n)*n*t}function r2(n,t){return n*n*t}function Zs(n,t,e,i){return i2(n,t)+s2(n,e)+r2(n,i)}function a2(n,t){let e=1-n;return e*e*e*t}function o2(n,t){let e=1-n;return 3*e*e*n*t}function l2(n,t){return 3*(1-n)*n*n*t}function c2(n,t){return n*n*n*t}function Js(n,t,e,i,s){return a2(n,t)+o2(n,e)+l2(n,i)+c2(n,s)}var Pa=class extends fn{constructor(t=new at,e=new at,i=new at,s=new at){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ll=class extends fn{constructor(t=new L,e=new L,i=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new L){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y),Js(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},La=class extends fn{constructor(t=new at,e=new at){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new at){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new at){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Il=class extends fn{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ia=class extends fn{constructor(t=new at,e=new at,i=new at){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new at){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Zs(t,s.x,r.x,a.x),Zs(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ul=class extends fn{constructor(t=new L,e=new L,i=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new L){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(Zs(t,s.x,r.x,a.x),Zs(t,s.y,r.y,a.y),Zs(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ua=class extends fn{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new at){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return i.set(Eu(o,l.x,c.x,h.x,u.x),Eu(o,l.y,c.y,h.y,u.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new at().fromArray(s))}return this}},Dl=Object.freeze({__proto__:null,ArcCurve:Cl,CatmullRomCurve3:Pl,CubicBezierCurve:Pa,CubicBezierCurve3:Ll,EllipseCurve:ar,LineCurve:La,LineCurve3:Il,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:Ul,SplineCurve:Ua}),Nl=class extends fn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Dl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new Dl[s.type]().fromJSON(s))}return this}},Da=class extends Nl{constructor(t){super(),this.type="Path",this.currentPoint=new at,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new La(this.currentPoint.clone(),new at(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ia(this.currentPoint.clone(),new at(t,e),new at(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Pa(this.currentPoint.clone(),new at(t,e),new at(i,s),new at(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new Ua(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new ar(t,e,i,s,r,a,o,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},Na=class n extends Se{constructor(t=[new at(0,-.5),new at(.5,0),new at(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Me(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,u=new L,f=new at,p=new L,g=new L,_=new L,m=0,d=0;for(let S=0;S<=t.length-1;S++)switch(S){case 0:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,_.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case t.length-1:l.push(_.x,_.y,_.z);break;default:m=t[S+1].x-t[S].x,d=t[S+1].y-t[S].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=_.x,p.y+=_.y,p.z+=_.z,p.normalize(),l.push(p.x,p.y,p.z),_.copy(g)}for(let S=0;S<=e;S++){let x=i+S*h*s,w=Math.sin(x),A=Math.cos(x);for(let T=0;T<=t.length-1;T++){u.x=t[T].x*w,u.y=t[T].y,u.z=t[T].x*A,a.push(u.x,u.y,u.z),f.x=S/e,f.y=T/(t.length-1),o.push(f.x,f.y);let R=l[3*T+0]*w,F=l[3*T+1],M=l[3*T+0]*A;c.push(R,F,M)}}for(let S=0;S<e;S++)for(let x=0;x<t.length-1;x++){let w=x+S*t.length,A=w,T=w+t.length,R=w+t.length+1,F=w+1;r.push(A,T,F),r.push(R,F,T)}this.setIndex(r),this.setAttribute("position",new jt(a,3)),this.setAttribute("uv",new jt(o,2)),this.setAttribute("normal",new jt(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}};var _i=class n extends Se{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],u=[],f=[],p=[],g=0,_=[],m=i/2,d=0;S(),a===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new jt(u,3)),this.setAttribute("normal",new jt(f,3)),this.setAttribute("uv",new jt(p,2));function S(){let w=new L,A=new L,T=0,R=(e-t)/i;for(let F=0;F<=r;F++){let M=[],y=F/r,U=y*(e-t)+t;for(let D=0;D<=s;D++){let V=D/s,C=V*l+o,N=Math.sin(C),H=Math.cos(C);A.x=U*N,A.y=-y*i+m,A.z=U*H,u.push(A.x,A.y,A.z),w.set(N,R,H).normalize(),f.push(w.x,w.y,w.z),p.push(V,1-y),M.push(g++)}_.push(M)}for(let F=0;F<s;F++)for(let M=0;M<r;M++){let y=_[M][F],U=_[M+1][F],D=_[M+1][F+1],V=_[M][F+1];h.push(y,U,V),h.push(U,D,V),T+=6}c.addGroup(d,T,0),d+=T}function x(w){let A=g,T=new at,R=new L,F=0,M=w===!0?t:e,y=w===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*y,0),f.push(0,y,0),p.push(.5,.5),g++;let U=g;for(let D=0;D<=s;D++){let C=D/s*l+o,N=Math.cos(C),H=Math.sin(C);R.x=M*H,R.y=m*y,R.z=M*N,u.push(R.x,R.y,R.z),f.push(0,y,0),T.x=N*.5+.5,T.y=H*.5*y+.5,p.push(T.x,T.y),g++}for(let D=0;D<s;D++){let V=A+D,C=U+D;w===!0?h.push(C,C+1,V):h.push(C+1,C,V),F+=3}c.addGroup(d,F,w===!0?1:2),d+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var or=class extends Da{constructor(t){super(t),this.uuid=Rn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Da().fromJSON(s))}return this}},h2={triangulate:function(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=td(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c,h,u,f,p;if(i&&(r=m2(n,t,r,e)),n.length>80*e){o=c=n[0],l=h=n[1];for(let g=e;g<s;g+=e)u=n[g],f=n[g+1],u<o&&(o=u),f<l&&(l=f),u>c&&(c=u),f>h&&(h=f);p=Math.max(c-o,h-l),p=p!==0?32767/p:0}return lr(r,a,e,o,l,p,0),a}};function td(n,t,e,i,s){let r,a;if(s===T2(n,t,e,i)>0)for(r=t;r<e;r+=i)a=wu(r,n[r],n[r+1],a);else for(r=e-i;r>=t;r-=i)a=wu(r,n[r],n[r+1],a);return a&&Za(a,a.next)&&(hr(a),a=a.next),a}function Fi(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Za(e,e.next)||fe(e.prev,e,e.next)===0)){if(hr(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function lr(n,t,e,i,s,r,a){if(!n)return;!a&&r&&y2(n,i,s,r);let o=n,l,c;for(;n.prev!==n.next;){if(l=n.prev,c=n.next,r?d2(n,i,s,r):u2(n)){t.push(l.i/e|0),t.push(n.i/e|0),t.push(c.i/e|0),hr(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=f2(Fi(n),t,e),lr(n,t,e,i,s,r,2)):a===2&&p2(n,t,e,i,s,r):lr(Fi(n),t,e,i,s,r,1);break}}}function u2(n){let t=n.prev,e=n,i=n.next;if(fe(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=s<r?s<a?s:a:r<a?r:a,u=o<l?o<c?o:c:l<c?l:c,f=s>r?s>a?s:a:r>a?r:a,p=o>l?o>c?o:c:l>c?l:c,g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=p&&ms(s,o,r,l,a,c,g.x,g.y)&&fe(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function d2(n,t,e,i){let s=n.prev,r=n,a=n.next;if(fe(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,u=r.y,f=a.y,p=o<l?o<c?o:c:l<c?l:c,g=h<u?h<f?h:f:u<f?u:f,_=o>l?o>c?o:c:l>c?l:c,m=h>u?h>f?h:f:u>f?u:f,d=Ol(p,g,t,e,i),S=Ol(_,m,t,e,i),x=n.prevZ,w=n.nextZ;for(;x&&x.z>=d&&w&&w.z<=S;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ms(o,h,l,u,c,f,x.x,x.y)&&fe(x.prev,x,x.next)>=0||(x=x.prevZ,w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ms(o,h,l,u,c,f,w.x,w.y)&&fe(w.prev,w,w.next)>=0))return!1;w=w.nextZ}for(;x&&x.z>=d;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=m&&x!==s&&x!==a&&ms(o,h,l,u,c,f,x.x,x.y)&&fe(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;w&&w.z<=S;){if(w.x>=p&&w.x<=_&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&ms(o,h,l,u,c,f,w.x,w.y)&&fe(w.prev,w,w.next)>=0)return!1;w=w.nextZ}return!0}function f2(n,t,e){let i=n;do{let s=i.prev,r=i.next.next;!Za(s,r)&&ed(s,i,i.next,r)&&cr(s,r)&&cr(r,s)&&(t.push(s.i/e|0),t.push(i.i/e|0),t.push(r.i/e|0),hr(i),hr(i.next),i=n=r),i=i.next}while(i!==n);return Fi(i)}function p2(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&b2(a,o)){let l=nd(a,o);a=Fi(a,a.next),l=Fi(l,l.next),lr(a,t,e,i,s,r,0),lr(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function m2(n,t,e,i){let s=[],r,a,o,l,c;for(r=0,a=t.length;r<a;r++)o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=td(n,o,l,i,!1),c===c.next&&(c.steiner=!0),s.push(S2(c));for(s.sort(g2),r=0;r<s.length;r++)e=_2(s[r],e);return e}function g2(n,t){return n.x-t.x}function _2(n,t){let e=x2(n,t);if(!e)return t;let i=nd(e,n);return Fi(i,i.next),Fi(e,e.next)}function x2(n,t){let e=t,i=-1/0,s,r=n.x,a=n.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){let f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>i&&(i=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;let o=s,l=s.x,c=s.y,h=1/0,u;e=s;do r>=e.x&&e.x>=l&&r!==e.x&&ms(a<c?r:i,a,l,c,a<c?i:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),cr(e,n)&&(u<h||u===h&&(e.x>s.x||e.x===s.x&&v2(s,e)))&&(s=e,h=u)),e=e.next;while(e!==o);return s}function v2(n,t){return fe(n.prev,n,t.prev)<0&&fe(t.next,n,n.next)<0}function y2(n,t,e,i){let s=n;do s.z===0&&(s.z=Ol(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,M2(s)}function M2(n){let t,e,i,s,r,a,o,l,c=1;do{for(e=n,n=null,r=null,a=0;e;){for(a++,i=e,o=0,t=0;t<c&&(o++,i=i.nextZ,!!i);t++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||e.z<=i.z)?(s=e,e=e.nextZ,o--):(s=i,i=i.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;e=i}r.nextZ=null,c*=2}while(a>1);return n}function Ol(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function S2(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function ms(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function b2(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!E2(n,t)&&(cr(n,t)&&cr(t,n)&&w2(n,t)&&(fe(n.prev,n,t.prev)||fe(n,t.prev,t))||Za(n,t)&&fe(n.prev,n,n.next)>0&&fe(t.prev,t,t.next)>0)}function fe(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Za(n,t){return n.x===t.x&&n.y===t.y}function ed(n,t,e,i){let s=ea(fe(n,t,e)),r=ea(fe(n,t,i)),a=ea(fe(e,i,n)),o=ea(fe(e,i,t));return!!(s!==r&&a!==o||s===0&&ta(n,e,t)||r===0&&ta(n,i,t)||a===0&&ta(e,n,i)||o===0&&ta(e,t,i))}function ta(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ea(n){return n>0?1:n<0?-1:0}function E2(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&ed(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function cr(n,t){return fe(n.prev,n,n.next)<0?fe(n,t,n.next)>=0&&fe(n,n.prev,t)>=0:fe(n,t,n.prev)<0||fe(n,n.next,t)<0}function w2(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function nd(n,t){let e=new Fl(n.i,n.x,n.y),i=new Fl(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wu(n,t,e,i){let s=new Fl(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function hr(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Fl(n,t,e){this.i=n,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function T2(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}var Ks=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Tu(t),Au(i,t);let a=t.length;e.forEach(Tu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Au(i,e[l]);let o=h2.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Tu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Au(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}var Oa=class n extends Se{constructor(t=new or([new at(.5,.5),new at(-.5,.5),new at(-.5,-.5),new at(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new jt(s,3)),this.setAttribute("uv",new jt(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1,f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,d=e.extrudePath,S=e.UVGenerator!==void 0?e.UVGenerator:A2,x,w=!1,A,T,R,F;d&&(x=d.getSpacedPoints(h),w=!0,f=!1,A=d.computeFrenetFrames(h,!1),T=new L,R=new L,F=new L),f||(m=0,p=0,g=0,_=0);let M=o.extractPoints(c),y=M.shape,U=M.holes;if(!Ks.isClockWise(y)){y=y.reverse();for(let P=0,lt=U.length;P<lt;P++){let J=U[P];Ks.isClockWise(J)&&(U[P]=J.reverse())}}let V=Ks.triangulateShape(y,U),C=y;for(let P=0,lt=U.length;P<lt;P++){let J=U[P];y=y.concat(J)}function N(P,lt,J){return lt||console.error("THREE.ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(lt,J)}let H=y.length,Q=V.length;function k(P,lt,J){let rt,j,At,gt=P.x-lt.x,b=P.y-lt.y,v=J.x-P.x,B=J.y-P.y,it=gt*gt+b*b,nt=gt*B-b*v;if(Math.abs(nt)>Number.EPSILON){let tt=Math.sqrt(it),Et=Math.sqrt(v*v+B*B),ut=lt.x-b/tt,xt=lt.y+gt/tt,Pt=J.x-B/Et,Bt=J.y+v/Et,O=((Pt-ut)*B-(Bt-xt)*v)/(gt*B-b*v);rt=ut+gt*O-P.x,j=xt+b*O-P.y;let ht=rt*rt+j*j;if(ht<=2)return new at(rt,j);At=Math.sqrt(ht/2)}else{let tt=!1;gt>Number.EPSILON?v>Number.EPSILON&&(tt=!0):gt<-Number.EPSILON?v<-Number.EPSILON&&(tt=!0):Math.sign(b)===Math.sign(B)&&(tt=!0),tt?(rt=-b,j=gt,At=Math.sqrt(it)):(rt=gt,j=b,At=Math.sqrt(it/2))}return new at(rt/At,j/At)}let Z=[];for(let P=0,lt=C.length,J=lt-1,rt=P+1;P<lt;P++,J++,rt++)J===lt&&(J=0),rt===lt&&(rt=0),Z[P]=k(C[P],C[J],C[rt]);let K=[],W,ot=Z.concat();for(let P=0,lt=U.length;P<lt;P++){let J=U[P];W=[];for(let rt=0,j=J.length,At=j-1,gt=rt+1;rt<j;rt++,At++,gt++)At===j&&(At=0),gt===j&&(gt=0),W[rt]=k(J[rt],J[At],J[gt]);K.push(W),ot=ot.concat(W)}for(let P=0;P<m;P++){let lt=P/m,J=p*Math.cos(lt*Math.PI/2),rt=g*Math.sin(lt*Math.PI/2)+_;for(let j=0,At=C.length;j<At;j++){let gt=N(C[j],Z[j],rt);_t(gt.x,gt.y,-J)}for(let j=0,At=U.length;j<At;j++){let gt=U[j];W=K[j];for(let b=0,v=gt.length;b<v;b++){let B=N(gt[b],W[b],rt);_t(B.x,B.y,-J)}}}let q=g+_;for(let P=0;P<H;P++){let lt=f?N(y[P],ot[P],q):y[P];w?(R.copy(A.normals[0]).multiplyScalar(lt.x),T.copy(A.binormals[0]).multiplyScalar(lt.y),F.copy(x[0]).add(R).add(T),_t(F.x,F.y,F.z)):_t(lt.x,lt.y,0)}for(let P=1;P<=h;P++)for(let lt=0;lt<H;lt++){let J=f?N(y[lt],ot[lt],q):y[lt];w?(R.copy(A.normals[P]).multiplyScalar(J.x),T.copy(A.binormals[P]).multiplyScalar(J.y),F.copy(x[P]).add(R).add(T),_t(F.x,F.y,F.z)):_t(J.x,J.y,u/h*P)}for(let P=m-1;P>=0;P--){let lt=P/m,J=p*Math.cos(lt*Math.PI/2),rt=g*Math.sin(lt*Math.PI/2)+_;for(let j=0,At=C.length;j<At;j++){let gt=N(C[j],Z[j],rt);_t(gt.x,gt.y,u+J)}for(let j=0,At=U.length;j<At;j++){let gt=U[j];W=K[j];for(let b=0,v=gt.length;b<v;b++){let B=N(gt[b],W[b],rt);w?_t(B.x,B.y+x[h-1].y,x[h-1].x+J):_t(B.x,B.y,u+J)}}}et(),ft();function et(){let P=s.length/3;if(f){let lt=0,J=H*lt;for(let rt=0;rt<Q;rt++){let j=V[rt];Dt(j[2]+J,j[1]+J,j[0]+J)}lt=h+m*2,J=H*lt;for(let rt=0;rt<Q;rt++){let j=V[rt];Dt(j[0]+J,j[1]+J,j[2]+J)}}else{for(let lt=0;lt<Q;lt++){let J=V[lt];Dt(J[2],J[1],J[0])}for(let lt=0;lt<Q;lt++){let J=V[lt];Dt(J[0]+H*h,J[1]+H*h,J[2]+H*h)}}i.addGroup(P,s.length/3-P,0)}function ft(){let P=s.length/3,lt=0;Tt(C,lt),lt+=C.length;for(let J=0,rt=U.length;J<rt;J++){let j=U[J];Tt(j,lt),lt+=j.length}i.addGroup(P,s.length/3-P,1)}function Tt(P,lt){let J=P.length;for(;--J>=0;){let rt=J,j=J-1;j<0&&(j=P.length-1);for(let At=0,gt=h+m*2;At<gt;At++){let b=H*At,v=H*(At+1),B=lt+rt+b,it=lt+j+b,nt=lt+j+v,tt=lt+rt+v;Nt(B,it,nt,tt)}}}function _t(P,lt,J){l.push(P),l.push(lt),l.push(J)}function Dt(P,lt,J){bt(P),bt(lt),bt(J);let rt=s.length/3,j=S.generateTopUV(i,s,rt-3,rt-2,rt-1);Lt(j[0]),Lt(j[1]),Lt(j[2])}function Nt(P,lt,J,rt){bt(P),bt(lt),bt(rt),bt(lt),bt(J),bt(rt);let j=s.length/3,At=S.generateSideWallUV(i,s,j-6,j-3,j-2,j-1);Lt(At[0]),Lt(At[1]),Lt(At[3]),Lt(At[1]),Lt(At[2]),Lt(At[3])}function bt(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function Lt(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return R2(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Dl[s.type]().fromJSON(s)),new n(i,t.options)}},A2={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new at(r,a),new at(o,l),new at(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],u=t[i*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],m=t[r*3+1],d=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new at(a,1-l),new at(c,1-u),new at(f,1-g),new at(_,1-d)]:[new at(o,1-l),new at(h,1-u),new at(p,1-g),new at(m,1-d)]}};function R2(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Fa=class n extends Se{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],u=new L,f=new L,p=[],g=[],_=[],m=[];for(let d=0;d<=i;d++){let S=[],x=d/i,w=0;d===0&&a===0?w=.5/e:d===i&&l===Math.PI&&(w=-.5/e);for(let A=0;A<=e;A++){let T=A/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+w,1-x),S.push(c++)}h.push(S)}for(let d=0;d<i;d++)for(let S=0;S<e;S++){let x=h[d][S+1],w=h[d][S],A=h[d+1][S],T=h[d+1][S+1];(d!==0||a>0)&&p.push(x,w,T),(d!==i-1||l<Math.PI)&&p.push(w,A,T)}this.setIndex(p),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(_,3)),this.setAttribute("uv",new jt(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ba=class extends Se{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],i=new Set,s=new L,r=new L;if(t.index!==null){let a=t.attributes.position,o=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let u=l[c],f=u.start,p=u.count;for(let g=f,_=f+p;g<_;g+=3)for(let m=0;m<3;m++){let d=o.getX(g+m),S=o.getX(g+(m+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,S),Ru(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}}else{let a=t.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){let h=3*o+c,u=3*o+(c+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,u),Ru(s,r,i)===!0&&(e.push(s.x,s.y,s.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new jt(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Ru(n,t,e){let i=`${n.x},${n.y},${n.z}-${t.x},${t.y},${t.z}`,s=`${t.x},${t.y},${t.z}-${n.x},${n.y},${n.z}`;return e.has(i)===!0||e.has(s)===!0?!1:(e.add(i),e.add(s),!0)}var za=class extends Ln{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Kn=class extends Ln{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ql,this.normalScale=new at(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Kl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};function na(n,t,e){return!n||!e&&n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function C2(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}var ws=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break i;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break n}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Bl=class extends ws{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Lh,endingEnd:Lh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ih:r=t,o=2*e-i;break;case Uh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Ih:a=t,l=2*i-e;break;case Uh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(i-e)/(s-e),_=g*g,m=_*g,d=-f*m+2*f*_-f*g,S=(1+f)*m+(-1.5-2*f)*_+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*_+.5*g,w=p*m-p*_;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+S*a[c+A]+x*a[l+A]+w*a[u+A];return r}},zl=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),u=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*u+a[l+f]*h;return r}},kl=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Mn=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=na(e,this.TimeBufferType),this.values=na(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:na(t.times,Array),values:na(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s)}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new kl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new zl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Bl(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case ra:e=this.InterpolantFactoryMethodDiscrete;break;case aa:e=this.InterpolantFactoryMethodLinear;break;case Po:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ra;case this.InterpolantFactoryMethodLinear:return aa;case this.InterpolantFactoryMethodSmooth:return Po}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&C2(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Po,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let u=o*i,f=u-i,p=u+i;for(let g=0;g!==i;++g){let _=e[u+g];if(_!==e[f+g]||_!==e[p+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let u=o*i,f=a*i;for(let p=0;p!==i;++p)e[f+p]=e[u+p]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Mn.prototype.TimeBufferType=Float32Array;Mn.prototype.ValueBufferType=Float32Array;Mn.prototype.DefaultInterpolation=aa;var Bi=class extends Mn{};Bi.prototype.ValueTypeName="bool";Bi.prototype.ValueBufferType=Array;Bi.prototype.DefaultInterpolation=ra;Bi.prototype.InterpolantFactoryMethodLinear=void 0;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Hl=class extends Mn{};Hl.prototype.ValueTypeName="color";var Vl=class extends Mn{};Vl.prototype.ValueTypeName="number";var Gl=class extends ws{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)gi.slerpFlat(r,0,a,c-o,a,c,l);return r}},ur=class extends Mn{InterpolantFactoryMethodLinear(t){return new Gl(this.times,this.values,this.getValueSize(),t)}};ur.prototype.ValueTypeName="quaternion";ur.prototype.DefaultInterpolation=aa;ur.prototype.InterpolantFactoryMethodSmooth=void 0;var zi=class extends Mn{};zi.prototype.ValueTypeName="string";zi.prototype.ValueBufferType=Array;zi.prototype.DefaultInterpolation=ra;zi.prototype.InterpolantFactoryMethodLinear=void 0;zi.prototype.InterpolantFactoryMethodSmooth=void 0;var Wl=class extends Mn{};Wl.prototype.ValueTypeName="vector";var Xl=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}},P2=new Xl,ql=class{constructor(t){this.manager=t!==void 0?t:P2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}};ql.DEFAULT_MATERIAL_NAME="__DEFAULT";var ka=class extends Ge{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}};var il=new he,Cu=new L,Pu=new L,Yl=class{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new at(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nr,this._frameExtents=new at(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,i=this.matrix;Cu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Cu),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),il.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(il),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(il)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $l=class extends Yl{constructor(){super(new ba(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ha=class extends ka{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ge.DEFAULT_UP),this.updateMatrix(),this.target=new Ge,this.shadow=new $l}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}},Va=class extends ka{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ga=class extends Se{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(t){return super.copy(t),this.instanceCount=t.instanceCount,this}toJSON(){let t=super.toJSON();return t.instanceCount=this.instanceCount,t.isInstancedBufferGeometry=!0,t}};var sc="\\[\\]\\.:\\/",L2=new RegExp("["+sc+"]","g"),rc="[^"+sc+"]",I2="[^"+sc.replace("\\.","")+"]",U2=/((?:WC+[\/:])*)/.source.replace("WC",rc),D2=/(WCOD+)?/.source.replace("WCOD",I2),N2=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",rc),O2=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",rc),F2=new RegExp("^"+U2+D2+N2+O2+"$"),B2=["material","materials","bones","map"],Zl=class{constructor(t,e,i){let s=i||ue.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ue=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(L2,"")}static parseTrackName(t){let e=F2.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);B2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ue.Composite=Zl;ue.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ue.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ue.prototype.GetterByBindingType=[ue.prototype._getValue_direct,ue.prototype._getValue_array,ue.prototype._getValue_arrayElement,ue.prototype._getValue_toArray];ue.prototype.SetterByBindingTypeAndVersioning=[[ue.prototype._setValue_direct,ue.prototype._setValue_direct_setNeedsUpdate,ue.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_array,ue.prototype._setValue_array_setNeedsUpdate,ue.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_arrayElement,ue.prototype._setValue_arrayElement_setNeedsUpdate,ue.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ue.prototype._setValue_fromArray,ue.prototype._setValue_fromArray_setNeedsUpdate,ue.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var q_=new Float32Array(1);var ki=class extends Aa{constructor(t,e,i=1){super(t,e),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}clone(t){let e=super.clone(t);return e.meshPerAttribute=this.meshPerAttribute,e}toJSON(t){let e=super.toJSON(t);return e.isInstancedInterleavedBuffer=!0,e.meshPerAttribute=this.meshPerAttribute,e}};var Lu=new L,ia=new L,Wa=class{constructor(t=new L,e=new L){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Lu.subVectors(t,this.start),ia.subVectors(this.end,this.start);let i=ia.dot(ia),r=ia.dot(Lu)/i;return e&&(r=Me(r,0,1)),r}closestPointToPoint(t,e,i){let s=this.closestPointToPointParameter(t,e);return this.delta(i).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jl);var id=new un,Ja=new L,As=class extends Ga{constructor(){super(),this.isLineSegmentsGeometry=!0,this.type="LineSegmentsGeometry";let t=[-1,2,0,1,2,0,-1,1,0,1,1,0,-1,0,0,1,0,0,-1,-1,0,1,-1,0],e=[-1,2,1,2,-1,1,1,1,-1,-1,1,-1,-1,-2,1,-2],i=[0,2,1,2,3,1,2,4,3,4,5,3,4,6,5,6,7,5];this.setIndex(i),this.setAttribute("position",new jt(t,3)),this.setAttribute("uv",new jt(e,2))}applyMatrix4(t){let e=this.attributes.instanceStart,i=this.attributes.instanceEnd;return e!==void 0&&(e.applyMatrix4(t),i.applyMatrix4(t),e.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}setPositions(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new ki(e,6,1);return this.setAttribute("instanceStart",new dn(i,3,0)),this.setAttribute("instanceEnd",new dn(i,3,3)),this.computeBoundingBox(),this.computeBoundingSphere(),this}setColors(t){let e;t instanceof Float32Array?e=t:Array.isArray(t)&&(e=new Float32Array(t));let i=new ki(e,6,1);return this.setAttribute("instanceColorStart",new dn(i,3,0)),this.setAttribute("instanceColorEnd",new dn(i,3,3)),this}fromWireframeGeometry(t){return this.setPositions(t.attributes.position.array),this}fromEdgesGeometry(t){return this.setPositions(t.attributes.position.array),this}fromMesh(t){return this.fromWireframeGeometry(new Ba(t.geometry)),this}fromLineSegments(t){let e=t.geometry;return this.setPositions(e.attributes.position.array),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new un);let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;t!==void 0&&e!==void 0&&(this.boundingBox.setFromBufferAttribute(t),id.setFromBufferAttribute(e),this.boundingBox.union(id))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pn),this.boundingBox===null&&this.computeBoundingBox();let t=this.attributes.instanceStart,e=this.attributes.instanceEnd;if(t!==void 0&&e!==void 0){let i=this.boundingSphere.center;this.boundingBox.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Ja.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Ja)),Ja.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(Ja));this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error("THREE.LineSegmentsGeometry.computeBoundingSphere(): Computed radius is NaN. The instanced position data is likely to have NaN values.",this)}}toJSON(){}applyMatrix(t){return console.warn("THREE.LineSegmentsGeometry: applyMatrix() has been renamed to applyMatrix4()."),this.applyMatrix4(t)}};ct.line={worldUnits:{value:1},linewidth:{value:1},resolution:{value:new at(1,1)},dashOffset:{value:0},dashScale:{value:1},dashSize:{value:1},gapSize:{value:1}};Je.line={uniforms:Ya.merge([ct.common,ct.fog,ct.line]),vertexShader:`
		#include <common>
		#include <color_pars_vertex>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>
		#include <clipping_planes_pars_vertex>

		uniform float linewidth;
		uniform vec2 resolution;

		attribute vec3 instanceStart;
		attribute vec3 instanceEnd;

		attribute vec3 instanceColorStart;
		attribute vec3 instanceColorEnd;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#ifdef USE_DASH

			uniform float dashScale;
			attribute float instanceDistanceStart;
			attribute float instanceDistanceEnd;
			varying float vLineDistance;

		#endif

		void trimSegment( const in vec4 start, inout vec4 end ) {

			// trim end segment so it terminates between the camera plane and the near plane

			// conservative estimate of the near plane
			float a = projectionMatrix[ 2 ][ 2 ]; // 3nd entry in 3th column
			float b = projectionMatrix[ 3 ][ 2 ]; // 3nd entry in 4th column
			float nearEstimate = - 0.5 * b / a;

			float alpha = ( nearEstimate - start.z ) / ( end.z - start.z );

			end.xyz = mix( start.xyz, end.xyz, alpha );

		}

		void main() {

			#ifdef USE_COLOR

				vColor.xyz = ( position.y < 0.5 ) ? instanceColorStart : instanceColorEnd;

			#endif

			#ifdef USE_DASH

				vLineDistance = ( position.y < 0.5 ) ? dashScale * instanceDistanceStart : dashScale * instanceDistanceEnd;
				vUv = uv;

			#endif

			float aspect = resolution.x / resolution.y;

			// camera space
			vec4 start = modelViewMatrix * vec4( instanceStart, 1.0 );
			vec4 end = modelViewMatrix * vec4( instanceEnd, 1.0 );

			#ifdef WORLD_UNITS

				worldStart = start.xyz;
				worldEnd = end.xyz;

			#else

				vUv = uv;

			#endif

			// special case for perspective projection, and segments that terminate either in, or behind, the camera plane
			// clearly the gpu firmware has a way of addressing this issue when projecting into ndc space
			// but we need to perform ndc-space calculations in the shader, so we must address this issue directly
			// perhaps there is a more elegant solution -- WestLangley

			bool perspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 ); // 4th entry in the 3rd column

			if ( perspective ) {

				if ( start.z < 0.0 && end.z >= 0.0 ) {

					trimSegment( start, end );

				} else if ( end.z < 0.0 && start.z >= 0.0 ) {

					trimSegment( end, start );

				}

			}

			// clip space
			vec4 clipStart = projectionMatrix * start;
			vec4 clipEnd = projectionMatrix * end;

			// ndc space
			vec3 ndcStart = clipStart.xyz / clipStart.w;
			vec3 ndcEnd = clipEnd.xyz / clipEnd.w;

			// direction
			vec2 dir = ndcEnd.xy - ndcStart.xy;

			// account for clip-space aspect ratio
			dir.x *= aspect;
			dir = normalize( dir );

			#ifdef WORLD_UNITS

				vec3 worldDir = normalize( end.xyz - start.xyz );
				vec3 tmpFwd = normalize( mix( start.xyz, end.xyz, 0.5 ) );
				vec3 worldUp = normalize( cross( worldDir, tmpFwd ) );
				vec3 worldFwd = cross( worldDir, worldUp );
				worldPos = position.y < 0.5 ? start: end;

				// height offset
				float hw = linewidth * 0.5;
				worldPos.xyz += position.x < 0.0 ? hw * worldUp : - hw * worldUp;

				// don't extend the line if we're rendering dashes because we
				// won't be rendering the endcaps
				#ifndef USE_DASH

					// cap extension
					worldPos.xyz += position.y < 0.5 ? - hw * worldDir : hw * worldDir;

					// add width to the box
					worldPos.xyz += worldFwd * hw;

					// endcaps
					if ( position.y > 1.0 || position.y < 0.0 ) {

						worldPos.xyz -= worldFwd * 2.0 * hw;

					}

				#endif

				// project the worldpos
				vec4 clip = projectionMatrix * worldPos;

				// shift the depth of the projected points so the line
				// segments overlap neatly
				vec3 clipPose = ( position.y < 0.5 ) ? ndcStart : ndcEnd;
				clip.z = clipPose.z * clip.w;

			#else

				vec2 offset = vec2( dir.y, - dir.x );
				// undo aspect ratio adjustment
				dir.x /= aspect;
				offset.x /= aspect;

				// sign flip
				if ( position.x < 0.0 ) offset *= - 1.0;

				// endcaps
				if ( position.y < 0.0 ) {

					offset += - dir;

				} else if ( position.y > 1.0 ) {

					offset += dir;

				}

				// adjust for linewidth
				offset *= linewidth;

				// adjust for clip-space to screen-space conversion // maybe resolution should be based on viewport ...
				offset /= resolution.y;

				// select end
				vec4 clip = ( position.y < 0.5 ) ? clipStart : clipEnd;

				// back to clip space
				offset *= clip.w;

				clip.xy += offset;

			#endif

			gl_Position = clip;

			vec4 mvPosition = ( position.y < 0.5 ) ? start : end; // this is an approximation

			#include <logdepthbuf_vertex>
			#include <clipping_planes_vertex>
			#include <fog_vertex>

		}
		`,fragmentShader:`
		uniform vec3 diffuse;
		uniform float opacity;
		uniform float linewidth;

		#ifdef USE_DASH

			uniform float dashOffset;
			uniform float dashSize;
			uniform float gapSize;

		#endif

		varying float vLineDistance;

		#ifdef WORLD_UNITS

			varying vec4 worldPos;
			varying vec3 worldStart;
			varying vec3 worldEnd;

			#ifdef USE_DASH

				varying vec2 vUv;

			#endif

		#else

			varying vec2 vUv;

		#endif

		#include <common>
		#include <color_pars_fragment>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>
		#include <clipping_planes_pars_fragment>

		vec2 closestLineToLine(vec3 p1, vec3 p2, vec3 p3, vec3 p4) {

			float mua;
			float mub;

			vec3 p13 = p1 - p3;
			vec3 p43 = p4 - p3;

			vec3 p21 = p2 - p1;

			float d1343 = dot( p13, p43 );
			float d4321 = dot( p43, p21 );
			float d1321 = dot( p13, p21 );
			float d4343 = dot( p43, p43 );
			float d2121 = dot( p21, p21 );

			float denom = d2121 * d4343 - d4321 * d4321;

			float numer = d1343 * d4321 - d1321 * d4343;

			mua = numer / denom;
			mua = clamp( mua, 0.0, 1.0 );
			mub = ( d1343 + d4321 * ( mua ) ) / d4343;
			mub = clamp( mub, 0.0, 1.0 );

			return vec2( mua, mub );

		}

		void main() {

			#include <clipping_planes_fragment>

			#ifdef USE_DASH

				if ( vUv.y < - 1.0 || vUv.y > 1.0 ) discard; // discard endcaps

				if ( mod( vLineDistance + dashOffset, dashSize + gapSize ) > dashSize ) discard; // todo - FIX

			#endif

			float alpha = opacity;

			#ifdef WORLD_UNITS

				// Find the closest points on the view ray and the line segment
				vec3 rayEnd = normalize( worldPos.xyz ) * 1e5;
				vec3 lineDir = worldEnd - worldStart;
				vec2 params = closestLineToLine( worldStart, worldEnd, vec3( 0.0, 0.0, 0.0 ), rayEnd );

				vec3 p1 = worldStart + lineDir * params.x;
				vec3 p2 = rayEnd * params.y;
				vec3 delta = p1 - p2;
				float len = length( delta );
				float norm = len / linewidth;

				#ifndef USE_DASH

					#ifdef USE_ALPHA_TO_COVERAGE

						float dnorm = fwidth( norm );
						alpha = 1.0 - smoothstep( 0.5 - dnorm, 0.5 + dnorm, norm );

					#else

						if ( norm > 0.5 ) {

							discard;

						}

					#endif

				#endif

			#else

				#ifdef USE_ALPHA_TO_COVERAGE

					// artifacts appear on some hardware if a derivative is taken within a conditional
					float a = vUv.x;
					float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
					float len2 = a * a + b * b;
					float dlen = fwidth( len2 );

					if ( abs( vUv.y ) > 1.0 ) {

						alpha = 1.0 - smoothstep( 1.0 - dlen, 1.0 + dlen, len2 );

					}

				#else

					if ( abs( vUv.y ) > 1.0 ) {

						float a = vUv.x;
						float b = ( vUv.y > 0.0 ) ? vUv.y - 1.0 : vUv.y + 1.0;
						float len2 = a * a + b * b;

						if ( len2 > 1.0 ) discard;

					}

				#endif

			#endif

			vec4 diffuseColor = vec4( diffuse, alpha );

			#include <logdepthbuf_fragment>
			#include <color_fragment>

			gl_FragColor = vec4( diffuseColor.rgb, alpha );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>
			#include <fog_fragment>
			#include <premultiplied_alpha_fragment>

		}
		`};var Rs=class extends rn{constructor(t){super({type:"LineMaterial",uniforms:Ya.clone(Je.line.uniforms),vertexShader:Je.line.vertexShader,fragmentShader:Je.line.fragmentShader,clipping:!0}),this.isLineMaterial=!0,this.setValues(t)}get color(){return this.uniforms.diffuse.value}set color(t){this.uniforms.diffuse.value=t}get worldUnits(){return"WORLD_UNITS"in this.defines}set worldUnits(t){t===!0?this.defines.WORLD_UNITS="":delete this.defines.WORLD_UNITS}get linewidth(){return this.uniforms.linewidth.value}set linewidth(t){this.uniforms.linewidth&&(this.uniforms.linewidth.value=t)}get dashed(){return"USE_DASH"in this.defines}set dashed(t){t===!0!==this.dashed&&(this.needsUpdate=!0),t===!0?this.defines.USE_DASH="":delete this.defines.USE_DASH}get dashScale(){return this.uniforms.dashScale.value}set dashScale(t){this.uniforms.dashScale.value=t}get dashSize(){return this.uniforms.dashSize.value}set dashSize(t){this.uniforms.dashSize.value=t}get dashOffset(){return this.uniforms.dashOffset.value}set dashOffset(t){this.uniforms.dashOffset.value=t}get gapSize(){return this.uniforms.gapSize.value}set gapSize(t){this.uniforms.gapSize.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}get resolution(){return this.uniforms.resolution.value}set resolution(t){this.uniforms.resolution.value.copy(t)}get alphaToCoverage(){return"USE_ALPHA_TO_COVERAGE"in this.defines}set alphaToCoverage(t){this.defines&&(t===!0!==this.alphaToCoverage&&(this.needsUpdate=!0),t===!0?(this.defines.USE_ALPHA_TO_COVERAGE="",this.extensions.derivatives=!0):(delete this.defines.USE_ALPHA_TO_COVERAGE,this.extensions.derivatives=!1))}};var sd=new L,rd=new L,De=new pe,Ne=new pe,Un=new pe,oc=new L,lc=new he,Oe=new Wa,ad=new L,Ka=new un,ja=new Pn,Dn=new pe,Nn,Hi;function od(n,t,e){return Dn.set(0,0,-t,1).applyMatrix4(n.projectionMatrix),Dn.multiplyScalar(1/Dn.w),Dn.x=Hi/e.width,Dn.y=Hi/e.height,Dn.applyMatrix4(n.projectionMatrixInverse),Dn.multiplyScalar(1/Dn.w),Math.abs(Math.max(Dn.x,Dn.y))}function z2(n,t){let e=n.matrixWorld,i=n.geometry,s=i.attributes.instanceStart,r=i.attributes.instanceEnd,a=Math.min(i.instanceCount,s.count);for(let o=0,l=a;o<l;o++){Oe.start.fromBufferAttribute(s,o),Oe.end.fromBufferAttribute(r,o),Oe.applyMatrix4(e);let c=new L,h=new L;Nn.distanceSqToSegment(Oe.start,Oe.end,h,c),h.distanceTo(c)<Hi*.5&&t.push({point:h,pointOnLine:c,distance:Nn.origin.distanceTo(h),object:n,face:null,faceIndex:o,uv:null,uv1:null})}}function k2(n,t,e){let i=t.projectionMatrix,r=n.material.resolution,a=n.matrixWorld,o=n.geometry,l=o.attributes.instanceStart,c=o.attributes.instanceEnd,h=Math.min(o.instanceCount,l.count),u=-t.near;Nn.at(1,Un),Un.w=1,Un.applyMatrix4(t.matrixWorldInverse),Un.applyMatrix4(i),Un.multiplyScalar(1/Un.w),Un.x*=r.x/2,Un.y*=r.y/2,Un.z=0,oc.copy(Un),lc.multiplyMatrices(t.matrixWorldInverse,a);for(let f=0,p=h;f<p;f++){if(De.fromBufferAttribute(l,f),Ne.fromBufferAttribute(c,f),De.w=1,Ne.w=1,De.applyMatrix4(lc),Ne.applyMatrix4(lc),De.z>u&&Ne.z>u)continue;if(De.z>u){let x=De.z-Ne.z,w=(De.z-u)/x;De.lerp(Ne,w)}else if(Ne.z>u){let x=Ne.z-De.z,w=(Ne.z-u)/x;Ne.lerp(De,w)}De.applyMatrix4(i),Ne.applyMatrix4(i),De.multiplyScalar(1/De.w),Ne.multiplyScalar(1/Ne.w),De.x*=r.x/2,De.y*=r.y/2,Ne.x*=r.x/2,Ne.y*=r.y/2,Oe.start.copy(De),Oe.start.z=0,Oe.end.copy(Ne),Oe.end.z=0;let _=Oe.closestPointToPointParameter(oc,!0);Oe.at(_,ad);let m=Gu.lerp(De.z,Ne.z,_),d=m>=-1&&m<=1,S=oc.distanceTo(ad)<Hi*.5;if(d&&S){Oe.start.fromBufferAttribute(l,f),Oe.end.fromBufferAttribute(c,f),Oe.start.applyMatrix4(a),Oe.end.applyMatrix4(a);let x=new L,w=new L;Nn.distanceSqToSegment(Oe.start,Oe.end,w,x),e.push({point:w,pointOnLine:x,distance:Nn.origin.distanceTo(w),object:n,face:null,faceIndex:f,uv:null,uv1:null})}}}var Qa=class extends se{constructor(t=new As,e=new Rs({color:Math.random()*16777215})){super(t,e),this.isLineSegments2=!0,this.type="LineSegments2"}computeLineDistances(){let t=this.geometry,e=t.attributes.instanceStart,i=t.attributes.instanceEnd,s=new Float32Array(2*e.count);for(let a=0,o=0,l=e.count;a<l;a++,o+=2)sd.fromBufferAttribute(e,a),rd.fromBufferAttribute(i,a),s[o]=o===0?0:s[o-1],s[o+1]=s[o]+sd.distanceTo(rd);let r=new ki(s,2,1);return t.setAttribute("instanceDistanceStart",new dn(r,1,0)),t.setAttribute("instanceDistanceEnd",new dn(r,1,1)),this}raycast(t,e){let i=this.material.worldUnits,s=t.camera;s===null&&!i&&console.error('LineSegments2: "Raycaster.camera" needs to be set in order to raycast against LineSegments2 while worldUnits is set to false.');let r=t.params.Line2!==void 0&&t.params.Line2.threshold||0;Nn=t.ray;let a=this.matrixWorld,o=this.geometry,l=this.material;Hi=l.linewidth+r,o.boundingSphere===null&&o.computeBoundingSphere(),ja.copy(o.boundingSphere).applyMatrix4(a);let c;if(i)c=Hi*.5;else{let u=Math.max(s.near,ja.distanceToPoint(Nn.origin));c=od(s,u,l.resolution)}if(ja.radius+=c,Nn.intersectsSphere(ja)===!1)return;o.boundingBox===null&&o.computeBoundingBox(),Ka.copy(o.boundingBox).applyMatrix4(a);let h;if(i)h=Hi*.5;else{let u=Math.max(s.near,Ka.distanceToPoint(Nn.origin));h=od(s,u,l.resolution)}Ka.expandByScalar(h),Nn.intersectsBox(Ka)!==!1&&(i?z2(this,e):k2(this,s,e))}};var ld=[[-596,-800,-599,-805,-602,-810,-623,-809,-645,-809,-657,-806,-657,-805,-663,-803,-640,-803,-619,-804,-611,-800,-606,-796,-596,-800],[-1592,-795,-1611,-796,-1624,-793,-1630,-789,-1631,-789,-1637,-786,-1637,-786,-1631,-782,-1612,-784,-1602,-787,-1595,-790,-1592,-795],[-452,-780,-439,-785,-435,-791,-434,-795,-433,-800,-449,-803,-465,-806,-484,-808,-505,-810,-529,-810,-542,-806,-540,-802,-519,-799,-510,-796,-504,-792,-499,-788,-493,-785,-487,-780,-487,-780,-482,-780,-467,-778,-452,-780],[-1212,-735,-1199,-737,-1187,-735,-1193,-738,-1202,-741,-1216,-740,-1226,-737,-1226,-737,-1224,-733,-1212,-735],[-1256,-735,-1240,-739,-1246,-738,-1259,-737,-1273,-735,-1273,-735,-1266,-732,-1256,-735],[-990,-719,-979,-721,-968,-720,-962,-725,-970,-724,-982,-725,-994,-724,-1008,-725,-1018,-723,-1023,-719,-1023,-719,-1017,-717,-1004,-719,-990,-719],[-685,-710,-683,-714,-685,-718,-688,-722,-700,-723,-711,-725,-724,-725,-719,-721,-731,-722,-742,-724,-750,-721,-750,-717,-739,-713,-739,-713,-732,-712,-721,-712,-718,-707,-717,-703,-717,-695,-712,-690,-703,-689,-697,-693,-695,-696,-691,-701,-687,-705,-685,-710],[-586,-642,-590,-644,-598,-642,-606,-643,-613,-645,-620,-648,-625,-651,-626,-655,-626,-659,-621,-662,-628,-664,-637,-665,-643,-668,-649,-672,-655,-676,-657,-680,-653,-684,-648,-687,-640,-689,-632,-692,-628,-696,-626,-700,-623,-704,-618,-707,-615,-711,-614,-720,-611,-724,-610,-728,-607,-732,-608,-737,-614,-741,-620,-744,-633,-746,-637,-749,-644,-753,-659,-756,-672,-758,-684,-760,-698,-762,-706,-766,-722,-767,-740,-766,-756,-767,-772,-767,-769,-771,-754,-773,-743,-776,-737,-779,-748,-782,-765,-781,-779,-784,-780,-788,-780,-792,-768,-795,-766,-799,-754,-803,-732,-804,-714,-807,-700,-810,-682,-813,-657,-815,-633,-817,-616,-820,-597,-824,-587,-828,-582,-832,-570,-829,-554,-826,-536,-823,-515,-820,-498,-817,-473,-817,-448,-818,-428,-821,-422,-817,-408,-814,-382,-813,-363,-811,-344,-809,-323,-808,-301,-806,-285,-803,-293,-800,-297,-796,-297,-793,-316,-793,-337,-795,-356,-795,-359,-791,-358,-783,-353,-781,-339,-779,-322,-777,-310,-774,-298,-771,-289,-767,-275,-765,-262,-764,-255,-763,-239,-762,-225,-761,-212,-759,-200,-757,-189,-754,-175,-751,-166,-748,-157,-745,-154,-741,-165,-739,-161,-735,-154,-731,-144,-730,-133,-727,-123,-724,-115,-720,-110,-715,-103,-713,-91,-713,-86,-717,-74,-717,-74,-713,-69,-709,-58,-710,-55,-714,-43,-715,-30,-713,-18,-712,-7,-712,-2,-716,9,-713,19,-711,30,-710,41,-709,52,-706,63,-705,71,-702,77,-699,85,-701,95,-700,102,-705,108,-708,120,-706,124,-702,134,-700,147,-700,151,-704,159,-700,170,-699,182,-699,193,-699,204,-700,215,-701,219,-704,226,-707,237,-705,248,-705,260,-705,271,-705,281,-703,292,-702,300,-699,310,-698,320,-697,328,-694,333,-688,339,-685,349,-687,353,-690,362,-692,372,-692,379,-695,386,-698,397,-695,400,-691,409,-689,420,-686,429,-685,441,-683,449,-681,457,-678,465,-676,474,-677,483,-674,490,-671,499,-671,508,-669,509,-665,518,-662,526,-661,536,-659,545,-658,554,-659,564,-660,572,-662,573,-667,581,-670,587,-673,599,-674,606,-677,614,-680,624,-680,632,-678,641,-674,650,-676,660,-677,669,-679,679,-679,689,-679,697,-690,697,-692,696,-697,686,-699,678,-703,679,-707,691,-707,689,-711,684,-714,679,-719,687,-722,699,-723,710,-721,716,-717,719,-713,725,-710,731,-707,733,-704,739,-699,745,-698,756,-697,766,-696,776,-695,781,-691,784,-687,791,-683,801,-681,809,-679,815,-675,821,-674,828,-672,838,-673,847,-672,857,-671,868,-672,875,-669,880,-662,884,-665,888,-670,897,-672,906,-672,916,-671,926,-672,935,-672,942,-671,950,-672,958,-674,967,-672,978,-672,987,-671,997,-672,1004,-669,1009,-666,1016,-663,1028,-656,1035,-657,1042,-660,1049,-663,1062,-669,1072,-670,1081,-670,1092,-668,1102,-667,1111,-664,1117,-661,1129,-661,1136,-659,1144,-661,1149,-664,1156,-667,1167,-667,1174,-669,1186,-672,1198,-673,1209,-672,1217,-669,1223,-666,1232,-665,1241,-666,1252,-667,1261,-666,1270,-666,1279,-667,1288,-668,1297,-666,1308,-664,1318,-664,1329,-664,1339,-663,1348,-662,1350,-657,1351,-653,1357,-656,1359,-660,1362,-664,1366,-668,1375,-670,1386,-669,1399,-669,1408,-668,1421,-668,1431,-668,1444,-668,1455,-669,1462,-672,1460,-676,1466,-679,1477,-681,1488,-684,1501,-686,1515,-687,1525,-689,1536,-689,1543,-686,1552,-688,1559,-691,1568,-694,1580,-695,1592,-696,1597,-700,1608,-702,1616,-706,1627,-707,1638,-707,1649,-708,1661,-708,1673,-708,1684,-710,1695,-712,1705,-714,1712,-717,1711,-721,1706,-724,1701,-729,1698,-732,1693,-737,1680,-738,1674,-742,1661,-744,1656,-748,1650,-751,1642,-755,1638,-759,1636,-762,1635,-767,1635,-771,1641,-775,1643,-778,1647,-782,1666,-783,1670,-788,1652,-789,1637,-791,1618,-792,1609,-797,1607,-802,1603,-806,1598,-809,1611,-813,1616,-817,1625,-821,1637,-824,1651,-827,1666,-830,1689,-833,1694,-838,1723,-840,1725,-841,1732,-844,1760,-842,1783,-845,1800,-847,1800,-900,-1800,-900,-1800,-847,-1799,-847,-1791,-841,-1773,-845,-1771,-844,-1769,-843,-1765,-842,-1762,-841,-1761,-841,-1759,-841,-1758,-841,-1744,-845,-1731,-841,-1729,-841,-1700,-839,-1690,-841,-1685,-842,-1670,-846,-1642,-848,-1619,-851,-1581,-854,-1552,-851,-1509,-853,-1485,-856,-1459,-853,-1431,-850,-1429,-846,-1468,-845,-1501,-843,-1509,-839,-1536,-837,-1534,-832,-1530,-828,-1527,-825,-1529,-820,-1545,-818,-1553,-814,-1568,-811,-1544,-812,-1521,-810,-1506,-813,-1489,-810,-1472,-807,-1464,-803,-1468,-799,-1481,-797,-1495,-794,-1516,-793,-1534,-792,-1553,-791,-1560,-787,-1573,-784,-1581,-780,-1584,-769,-1579,-770,-1570,-773,-1553,-772,-1537,-771,-1529,-775,-1513,-774,-1500,-772,-1487,-769,-1476,-766,-1461,-765,-1461,-761,-1465,-757,-1462,-754,-1449,-752,-1443,-755,-1428,-753,-1416,-751,-1402,-751,-1389,-750,-1375,-747,-1364,-745,-1352,-743,-1344,-744,-1337,-744,-1323,-743,-1309,-745,-1296,-745,-1282,-743,-1269,-744,-1254,-745,-1240,-745,-1226,-745,-1211,-745,-1197,-745,-1187,-742,-1175,-740,-1162,-742,-1150,-741,-1139,-737,-1133,-740,-1129,-744,-1123,-747,-1113,-744,-1101,-748,-1087,-749,-1076,-752,-1061,-751,-1049,-749,-1034,-750,-1020,-751,-1006,-753,-1001,-749,-1008,-745,-1013,-742,-1025,-741,-1031,-737,-1033,-734,-1037,-726,-1029,-728,-1016,-728,-1003,-728,-991,-729,-981,-732,-977,-736,-963,-736,-950,-735,-937,-733,-924,-732,-914,-734,-901,-733,-892,-726,-884,-730,-873,-732,-860,-731,-852,-735,-839,-735,-827,-736,-815,-739,-807,-735,-803,-731,-793,-735,-779,-734,-769,-736,-762,-740,-749,-739,-739,-737,-728,-734,-716,-733,-702,-731,-689,-730,-680,-728,-674,-725,-671,-720,-673,-716,-676,-712,-679,-709,-682,-705,-685,-701,-685,-697,-684,-693,-680,-690,-676,-685,-674,-681,-676,-677,-677,-673,-673,-669,-667,-666,-661,-662,-654,-659,-646,-656,-642,-652,-636,-649,-630,-646,-620,-646,-614,-643,-607,-641,-599,-640,-592,-637,-586,-634,-578,-633,-572,-635,-576,-639,-586,-642],[-677,-538,-664,-544,-650,-547,-655,-552,-664,-552,-670,-549,-673,-553,-681,-556,-692,-555,-700,-552,-710,-551,-723,-545,-733,-540,-747,-528,-738,-530,-724,-537,-711,-541,-706,-536,-703,-529,-693,-525,-686,-526,-686,-526,-682,-531,-677,-538],[-585,-511,-577,-515,-580,-519,-594,-522,-598,-518,-607,-523,-612,-518,-600,-512,-591,-515,-585,-511],[703,-497,687,-498,687,-492,689,-488,689,-486,696,-489,705,-491,706,-493,703,-497],[1454,-408,1464,-411,1469,-410,1477,-408,1483,-409,1484,-421,1480,-424,1479,-432,1476,-429,1469,-436,1467,-436,1460,-435,1454,-427,1453,-420,1447,-412,1447,-407,1454,-408],[1730,-409,1732,-413,1740,-409,1742,-413,1742,-418,1739,-422,1732,-430,1727,-434,1731,-439,1723,-439,1715,-442,1712,-449,1706,-459,1698,-464,1693,-466,1684,-466,1678,-463,1667,-462,1665,-459,1670,-451,1683,-441,1689,-439,1697,-436,1705,-430,1711,-425,1716,-418,1719,-415,1721,-410,1728,-405,1730,-409],[1746,-362,1753,-372,1754,-365,1758,-368,1760,-376,1768,-379,1774,-380,1780,-376,1785,-377,1783,-386,1780,-392,1772,-391,1769,-394,1770,-399,1769,-401,1765,-406,1760,-413,1752,-417,1751,-414,1747,-413,1752,-405,1749,-399,1738,-395,1739,-391,1746,-388,1747,-380,1747,-374,1743,-367,1743,-365,1738,-361,1731,-352,1726,-345,1730,-345,1736,-350,1743,-353,1746,-362],[1671,-222,1667,-224,1662,-221,1655,-217,1648,-211,1642,-204,1640,-201,1645,-201,1650,-205,1655,-208,1658,-211,1666,-217,1671,-222],[1784,-173,1787,-176,1786,-182,1779,-183,1774,-182,1773,-177,1777,-174,1781,-175,1784,-173],[1794,-168,1787,-170,1786,-166,1791,-164,1794,-164,1800,-161,1800,-166,1794,-168],[-1799,-165,-1800,-166,-1800,-161,-1798,-160,-1799,-165],[1678,-165,1675,-166,1672,-162,1672,-159,1678,-165],[1671,-149,1673,-157,1670,-156,1668,-157,1666,-154,1666,-146,1671,-149],[501,-136,502,-148,505,-152,504,-157,502,-160,499,-154,497,-157,499,-165,498,-169,495,-171,494,-180,490,-191,485,-205,479,-224,475,-238,471,-249,463,-252,454,-256,448,-253,440,-250,438,-245,437,-236,433,-228,433,-221,434,-213,439,-212,439,-208,444,-201,445,-194,442,-190,440,-183,440,-174,443,-169,444,-162,449,-162,455,-160,459,-158,463,-158,469,-152,477,-146,480,-141,479,-137,483,-138,488,-131,489,-125,492,-120,495,-125,498,-129,501,-136],[1436,-138,1439,-145,1446,-142,1449,-146,1454,-150,1453,-154,1455,-163,1456,-168,1459,-169,1462,-178,1461,-183,1464,-190,1475,-195,1482,-200,1488,-204,1487,-206,1493,-213,1497,-223,1501,-221,1505,-226,1507,-224,1509,-235,1516,-241,1521,-245,1529,-253,1531,-261,1532,-266,1531,-273,1536,-281,1535,-290,1533,-295,1531,-304,1531,-309,1529,-316,1525,-326,1517,-330,1513,-338,1510,-343,1507,-352,1503,-357,1501,-364,1499,-371,1500,-374,1494,-378,1483,-378,1474,-382,1469,-386,1463,-390,1455,-386,1449,-384,1450,-379,1445,-381,1436,-388,1427,-385,1422,-384,1416,-383,1406,-380,1400,-374,1398,-366,1396,-361,1391,-357,1381,-356,1384,-351,1382,-344,1377,-351,1368,-353,1374,-347,1375,-341,1379,-336,1378,-329,1370,-338,1364,-341,1360,-349,1352,-345,1352,-339,1346,-332,1341,-328,1343,-326,1330,-320,1323,-320,1313,-315,1295,-316,1282,-319,1271,-323,1261,-322,1251,-327,1242,-330,1240,-335,1237,-339,1228,-339,1222,-340,1213,-338,1206,-339,1199,-340,1193,-345,1190,-345,1185,-347,1180,-351,1173,-350,1166,-350,1156,-344,1150,-342,1150,-336,1155,-335,1157,-333,1157,-329,1158,-322,1157,-316,1152,-306,1150,-300,1150,-295,1146,-288,1146,-285,1142,-281,1140,-273,1135,-265,1133,-261,1138,-265,1134,-256,1139,-259,1142,-263,1142,-258,1137,-250,1136,-247,1134,-244,1135,-238,1137,-236,1138,-231,1137,-225,1141,-218,1142,-225,1146,-218,1155,-215,1159,-211,1167,-207,1172,-206,1174,-207,1182,-204,1188,-203,1190,-200,1193,-200,1198,-200,1209,-197,1214,-192,1217,-187,1222,-182,1223,-178,1223,-173,1230,-164,1234,-173,1239,-171,1235,-166,1238,-161,1243,-163,1244,-156,1249,-151,1252,-147,1257,-145,1257,-142,1261,-143,1261,-141,1266,-140,1271,-138,1278,-143,1284,-149,1290,-149,1296,-150,1294,-144,1299,-136,1303,-134,1302,-131,1306,-125,1312,-122,1317,-123,1326,-121,1326,-116,1318,-113,1324,-111,1330,-114,1336,-118,1344,-120,1347,-119,1353,-122,1359,-120,1363,-120,1365,-119,1370,-124,1367,-129,1363,-133,1360,-133,1361,-137,1358,-142,1354,-147,1355,-150,1363,-156,1371,-159,1376,-162,1383,-168,1386,-168,1391,-171,1393,-174,1402,-177,1409,-174,1411,-168,1413,-164,1414,-158,1417,-150,1416,-146,1416,-143,1415,-137,1417,-129,1418,-127,1417,-124,1419,-119,1421,-113,1421,-110,1425,-107,1428,-112,1429,-118,1431,-119,1432,-123,1435,-128,1436,-134,1436,-138],[1621,-105,1624,-108,1617,-108,1613,-102,1619,-104,1621,-105],[1207,-102,1203,-103,1190,-96,1199,-94,1204,-97,1208,-100,1207,-102],[1609,-99,1605,-99,1598,-98,1596,-96,1597,-92,1604,-94,1607,-96,1609,-99],[1617,-96,1615,-98,1608,-89,1606,-83,1609,-83,1613,-91,1617,-96],[1244,-101,1236,-104,1235,-102,1236,-99,1240,-93,1250,-89,1251,-87,1259,-84,1266,-84,1270,-83,1273,-84,1270,-87,1259,-91,1251,-94,1244,-101],[1179,-81,1183,-84,1189,-83,1191,-87,1180,-89,1173,-90,1167,-90,1171,-85,1176,-84,1179,-81],[1229,-81,1228,-86,1213,-89,1199,-88,1199,-84,1207,-82,1213,-85,1220,-85,1229,-81],[1599,-83,1599,-85,1591,-81,1586,-78,1582,-74,1584,-73,1588,-76,1596,-80,1599,-83],[1575,-73,1573,-74,1569,-72,1565,-68,1565,-66,1571,-70,1575,-73],[1086,-68,1105,-69,1108,-65,1126,-69,1130,-76,1145,-78,1157,-84,1146,-88,1135,-83,1126,-84,1115,-83,1106,-81,1094,-77,1087,-76,1083,-78,1065,-74,1063,-69,1054,-69,1061,-59,1073,-60,1081,-63,1085,-64,1086,-68],[1347,-62,1342,-69,1341,-61,1343,-58,1345,-54,1347,-57,1347,-62],[1559,-68,1556,-69,1552,-65,1547,-59,1545,-51,1547,-50,1548,-53,1551,-56,1555,-62,1560,-65,1559,-68],[1520,-55,1515,-56,1513,-58,1508,-61,1502,-63,1497,-63,1489,-60,1483,-57,1484,-54,1493,-56,1498,-55,1500,-50,1501,-50,1502,-55,1508,-55,1511,-51,1516,-48,1515,-42,1521,-41,1523,-43,1523,-49,1520,-55],[1272,-35,1269,-38,1262,-36,1260,-32,1270,-31,1272,-35],[1305,-31,1308,-39,1300,-34,1292,-34,1286,-34,1279,-34,1281,-28,1294,-28,1305,-31],[1531,-45,1528,-48,1526,-42,1524,-38,1520,-35,1514,-30,1507,-27,1509,-25,1515,-28,1518,-30,1522,-32,1526,-37,1530,-40,1531,-45],[1341,-12,1344,-28,1355,-34,1363,-23,1374,-17,1383,-17,1392,-21,1399,-24,1410,-26,1427,-33,1446,-39,1453,-44,1458,-49,1460,-55,1476,-61,1479,-66,1470,-67,1472,-74,1481,-80,1487,-91,1493,-91,1493,-95,1500,-97,1497,-99,1508,-103,1507,-106,1500,-107,1498,-104,1489,-103,1479,-101,1471,-95,1466,-89,1460,-81,1447,-76,1439,-79,1433,-82,1434,-90,1426,-93,1421,-92,1410,-91,1401,-83,1391,-81,1389,-84,1376,-84,1380,-76,1387,-73,1384,-62,1379,-54,1360,-45,1352,-45,1337,-35,1334,-40,1330,-41,1328,-37,1328,-33,1320,-28,1331,-25,1338,-25,1337,-22,1322,-22,1318,-16,1309,-14,1305,-9,1319,-7,1324,-4,1340,-8,1341,-12],[1252,14,1244,4,1237,2,1227,4,1211,4,1202,2,1200,-5,1209,-14,1215,-10,1233,-6,1233,-11,1228,-9,1224,-15,1215,-19,1225,-32,1223,-35,1232,-47,1232,-53,1226,-56,1222,-53,1227,-45,1217,-49,1215,-46,1216,-42,1209,-36,1210,-26,1203,-29,1204,-41,1204,-55,1198,-57,1194,-54,1197,-45,1195,-35,1191,-35,1188,-28,1192,-21,1193,-14,1198,2,1200,6,1209,13,1217,10,1229,9,1241,9,1251,16,1252,14],[1287,11,1286,3,1281,4,1280,-3,1284,-8,1281,-9,1277,-3,1274,10,1276,18,1279,22,1280,16,1286,15,1287,11],[1058,-59,1047,-59,1039,-50,1026,-42,1022,-36,1014,-28,1009,-21,1001,-7,993,2,990,10,986,18,977,25,972,33,964,39,954,50,953,55,959,54,975,52,984,43,991,36,997,32,1006,21,1017,21,1025,14,1031,6,1038,1,1034,-7,1040,-11,1044,-11,1045,-18,1049,-23,1056,-24,1061,-31,1059,-43,1058,-59],[1179,18,1190,9,1178,8,1175,1,1175,-8,1166,-15,1165,-25,1161,-40,1160,-37,1149,-41,1145,-35,1138,-34,1133,-31,1121,-35,1117,-30,1110,-30,1102,-29,1101,-16,1096,-13,1091,-5,1090,4,1091,13,1097,20,1104,17,1112,19,1114,27,1118,29,1130,31,1137,39,1142,45,1146,49,1155,54,1162,61,1167,69,1171,69,1176,64,1177,60,1183,57,1192,54,1191,50,1184,50,1186,45,1179,41,1173,32,1180,23,1179,18],[1264,84,1265,78,1265,72,1262,63,1258,73,1254,68,1257,60,1254,56,1242,62,1239,69,1242,74,1236,78,1233,74,1228,75,1221,69,1219,72,1223,80,1229,83,1235,87,1238,82,1246,85,1248,90,1255,90,1254,98,1262,93,1263,88,1264,84],[812,62,803,60,799,68,797,82,801,98,808,93,813,86,818,75,816,65,812,62],[-609,101,-618,100,-619,101,-617,104,-617,108,-611,109,-609,109,-609,101],[1240,103,1236,100,1233,93,1230,90,1224,97,1226,100,1228,103,1229,109,1235,109,1233,103,1241,112,1240,103],[1185,93,1172,84,1177,91,1184,97,1190,104,1195,114,1197,106,1190,100,1185,93],[1219,119,1225,116,1231,116,1231,112,1226,107,1220,104,1220,109,1220,114,1219,119],[1255,122,1258,110,1250,113,1250,110,1253,104,1248,101,1248,108,1245,109,1243,115,1249,114,1249,118,1243,126,1252,125,1255,122],[1215,131,1213,122,1208,127,1203,135,1212,134,1215,131],[1213,185,1219,182,1222,185,1223,182,1222,178,1225,171,1223,163,1217,159,1215,151,1217,143,1223,142,1227,143,1240,138,1239,132,1242,130,1241,125,1233,130,1229,136,1227,132,1220,138,1211,136,1206,139,1207,143,1210,145,1207,148,1206,144,1201,150,1199,154,1199,164,1203,160,1204,176,1207,185,1213,185],[-656,182,-658,180,-666,180,-672,179,-672,184,-671,185,-663,185,-658,184,-656,182],[-769,179,-772,177,-778,179,-783,182,-782,185,-778,185,-776,185,-769,184,-764,182,-762,179,-769,179],[-726,199,-717,197,-716,199,-708,199,-702,196,-700,196,-698,193,-692,193,-693,190,-688,190,-683,186,-687,182,-692,184,-696,184,-700,184,-701,182,-705,182,-707,184,-710,183,-714,176,-717,178,-717,180,-724,182,-728,181,-735,182,-739,180,-745,183,-744,187,-734,185,-727,184,-723,187,-728,191,-728,195,-734,196,-732,199,-726,199],[1103,187,1095,182,1087,185,1086,194,1091,198,1102,201,1108,201,1110,197,1106,193,1103,187],[-1555,191,-1557,189,-1559,191,-1559,193,-1561,197,-1560,198,-1559,200,-1559,202,-1559,203,-1558,202,-1554,201,-1552,200,-1551,199,-1548,195,-1548,195,-1552,192,-1555,191],[-1561,206,-1564,206,-1566,208,-1567,209,-1567,209,-1566,210,-1563,209,-1560,208,-1561,206],[-1568,212,-1568,211,-1573,211,-1573,212,-1568,212],[-1577,213,-1577,213,-1578,213,-1581,213,-1583,215,-1583,216,-1580,217,-1579,217,-1577,213],[-1593,220,-1595,219,-1598,221,-1597,221,-1596,222,-1594,222,-1593,220],[-797,228,-793,224,-783,225,-780,223,-771,217,-765,212,-762,212,-756,210,-757,207,-749,207,-742,203,-743,201,-750,199,-756,199,-763,200,-778,199,-771,204,-775,207,-781,207,-785,210,-787,216,-793,216,-802,218,-805,220,-818,222,-822,224,-818,226,-828,227,-835,222,-839,222,-841,219,-845,218,-850,219,-844,222,-842,226,-838,228,-833,230,-825,231,-823,232,-814,231,-806,231,-797,228],[-775,238,-778,237,-780,243,-784,246,-782,252,-779,252,-775,243,-775,238],[1212,228,1207,220,1202,228,1201,236,1207,245,1215,253,1220,250,1218,244,1212,228],[-778,266,-789,264,-790,268,-785,269,-778,268,-778,266],[-770,266,-772,259,-774,260,-773,265,-778,269,-778,270,-770,266],[1346,341,1348,338,1342,332,1338,335,1333,333,1330,327,1324,330,1324,335,1329,341,1335,339,1339,344,1346,341],[346,357,339,352,340,351,340,350,330,346,325,347,323,351,327,351,328,351,329,354,337,354,346,357],[237,357,242,354,250,354,258,354,257,352,263,353,262,350,247,349,247,351,235,353,237,357],[155,382,152,374,153,371,151,366,143,370,138,371,124,376,126,381,137,380,148,381,155,382],[92,412,98,405,97,392,92,392,88,389,84,392,84,404,82,410,87,409,92,412],[1410,371,1406,363,1408,358,1403,351,1390,347,1372,346,1358,335,1351,338,1351,346,1333,344,1322,339,1310,339,1320,331,1313,315,1307,310,1302,314,1304,323,1298,326,1294,333,1304,336,1309,342,1319,347,1326,354,1346,357,1357,355,1367,373,1374,368,1389,378,1394,382,1401,394,1399,406,1403,412,1414,414,1419,400,1419,392,1410,382,1410,371],[96,422,92,414,88,416,85,423,87,426,94,430,96,422],[1439,442,1446,440,1453,444,1455,433,1441,430,1432,420,1416,427,1411,416,1400,416,1398,426,1403,433,1414,434,1417,448,1420,456,1431,445,1439,442],[-637,466,-629,464,-620,464,-625,460,-629,460,-641,464,-644,467,-640,470,-637,466],[-618,491,-623,491,-636,494,-645,499,-642,500,-629,497,-618,493,-618,491],[-1235,485,-1240,484,-1257,488,-1260,492,-1269,495,-1270,498,-1281,500,-1284,505,-1284,508,-1273,506,-1267,504,-1258,503,-1254,500,-1249,495,-1239,491,-1235,485],[-561,507,-568,498,-561,502,-555,499,-558,496,-549,493,-545,496,-535,492,-538,485,-531,487,-530,482,-526,475,-531,467,-535,466,-542,468,-540,476,-542,478,-554,469,-560,469,-553,474,-563,476,-573,476,-593,476,-594,479,-588,483,-592,485,-584,491,-574,507,-567,513,-559,516,-554,516,-556,513,-561,507],[-1327,540,-1327,540,-1327,540,-1327,540,-1317,541,-1320,530,-1312,522,-1316,522,-1322,526,-1325,531,-1331,534,-1332,539,-1332,542,-1327,540],[1436,507,1447,490,1432,493,1426,479,1435,468,1435,461,1427,467,1421,460,1419,468,1420,478,1419,489,1421,496,1422,510,1416,519,1417,533,1426,538,1422,542,1427,544,1429,537,1433,527,1432,518,1436,507],[-68,523,-86,517,-100,518,-92,529,-97,539,-83,547,-76,551,-67,552,-57,546,-62,539,-60,532,-68,523],[127,556,121,548,110,554,109,558,124,561,127,556],[-1530,571,-1540,567,-1545,570,-1547,575,-1538,578,-1532,580,-1526,579,-1521,576,-1530,571],[-30,586,-41,576,-31,577,-20,577,-22,569,-31,560,-21,559,-11,546,-4,545,2,533,5,529,17,527,16,521,11,518,14,513,6,508,-8,508,-25,505,-30,507,-36,502,-45,503,-52,500,-58,502,-43,512,-34,514,-50,516,-53,520,-42,523,-48,528,-46,535,-31,534,-29,540,-36,546,-48,548,-51,551,-47,555,-50,558,-56,553,-56,563,-61,568,-58,578,-50,586,-42,586,-30,586],[-1656,599,-1662,598,-1668,599,-1675,602,-1665,604,-1657,603,-1656,599],[-793,622,-797,616,-801,617,-804,620,-803,621,-799,624,-795,624,-793,622],[-819,627,-831,622,-838,622,-840,625,-833,629,-819,629,-819,627],[-1717,638,-1711,636,-1705,637,-1697,634,-1687,633,-1688,632,-1695,630,-1703,632,-1707,634,-1716,633,-1718,634,-1717,638],[-852,657,-850,652,-845,654,-839,651,-828,648,-816,645,-816,640,-808,641,-801,637,-810,634,-825,637,-831,641,-841,636,-855,631,-859,636,-872,635,-864,640,-862,648,-859,657,-852,657],[-145,665,-147,658,-136,651,-149,644,-178,637,-187,635,-200,636,-228,640,-218,644,-240,649,-222,651,-222,654,-243,656,-237,663,-221,664,-206,657,-191,663,-178,660,-162,665,-145,665],[-759,671,-770,671,-772,676,-768,681,-759,683,-751,680,-751,676,-752,674,-759,671],[-1750,666,-1743,663,-1746,671,-1719,669,-1699,660,-1709,655,-1725,654,-1726,645,-1730,643,-1739,643,-1747,646,-1760,649,-1762,654,-1772,655,-1784,654,-1789,657,-1787,661,-1799,659,-1794,654,-1800,650,-1800,690,-1775,682,-1749,672,-1750,666],[-956,691,-963,688,-976,691,-984,690,-998,694,-989,697,-982,701,-972,699,-966,697,-963,695,-956,691],[1800,708,1789,708,1787,711,1800,715,1800,708],[-1787,709,-1800,708,-1800,715,-1799,716,-1790,716,-1776,713,-1777,711,-1787,709],[-905,695,-906,685,-892,693,-880,686,-883,679,-874,672,-863,679,-856,688,-855,699,-841,698,-826,697,-813,692,-812,687,-820,681,-813,676,-814,671,-833,664,-847,663,-858,666,-861,661,-870,652,-873,648,-885,641,-899,640,-907,636,-908,630,-919,628,-932,620,-942,609,-946,601,-947,589,-932,588,-928,578,-923,571,-909,573,-890,569,-880,565,-873,560,-861,557,-850,553,-834,552,-823,551,-824,543,-821,533,-814,522,-799,512,-791,515,-786,526,-791,541,-798,547,-782,551,-771,558,-765,565,-766,572,-773,581,-785,588,-773,599,-778,608,-781,623,-774,626,-757,623,-747,622,-738,624,-729,621,-717,615,-714,611,-696,611,-696,602,-693,590,-684,588,-676,582,-662,588,-652,599,-646,603,-638,594,-625,582,-614,570,-618,563,-605,558,-596,552,-580,549,-573,546,-569,538,-562,536,-558,533,-557,521,-564,518,-571,514,-588,511,-600,502,-617,501,-639,503,-654,503,-664,502,-672,495,-685,491,-700,477,-711,468,-703,470,-687,483,-666,491,-651,492,-642,487,-651,481,-648,470,-645,462,-632,457,-615,459,-605,470,-604,463,-598,459,-610,453,-633,447,-642,443,-654,435,-661,436,-662,445,-644,453,-660,453,-671,451,-670,448,-680,443,-691,440,-701,437,-707,430,-708,429,-708,423,-705,418,-701,418,-702,421,-699,419,-700,416,-706,415,-711,415,-719,413,-723,413,-729,412,-737,409,-722,411,-719,409,-733,406,-740,406,-740,408,-743,405,-740,404,-742,397,-749,389,-750,392,-752,392,-755,395,-753,390,-751,388,-751,384,-754,380,-759,372,-760,373,-757,379,-762,383,-763,392,-765,387,-763,381,-770,382,-763,379,-763,370,-760,369,-759,366,-757,356,-764,348,-774,345,-781,339,-786,339,-791,335,-792,332,-803,325,-809,320,-813,314,-815,307,-813,300,-810,292,-805,285,-805,280,-801,269,-801,262,-801,258,-804,252,-807,251,-812,252,-813,256,-817,259,-822,267,-827,275,-829,279,-827,286,-829,291,-837,299,-841,301,-851,296,-853,297,-858,302,-864,304,-875,303,-884,304,-892,303,-896,302,-894,299,-894,295,-892,293,-894,292,-898,293,-902,291,-909,291,-916,297,-925,296,-932,298,-938,297,-947,295,-956,287,-966,283,-971,278,-974,274,-974,267,-973,262,-971,259,-971,259,-971,259,-975,250,-977,243,-978,229,-979,224,-977,219,-974,214,-972,206,-965,199,-963,193,-959,188,-948,186,-944,181,-935,184,-928,185,-920,187,-914,189,-908,193,-905,199,-905,207,-903,210,-896,213,-885,215,-877,215,-871,215,-868,213,-868,208,-874,203,-876,196,-874,195,-876,190,-878,183,-881,185,-883,185,-883,184,-881,183,-881,181,-883,176,-882,175,-883,171,-882,170,-884,165,-886,163,-887,162,-889,159,-886,157,-885,159,-882,157,-881,157,-879,159,-876,159,-875,158,-874,158,-869,158,-864,158,-861,159,-860,160,-857,160,-854,159,-852,159,-850,160,-845,159,-844,158,-841,156,-838,154,-834,153,-831,150,-832,149,-833,147,-832,143,-834,140,-835,136,-836,131,-835,129,-835,124,-836,123,-837,119,-837,116,-839,114,-838,111,-837,109,-834,104,-830,100,-825,96,-822,92,-822,90,-818,90,-817,90,-814,88,-809,89,-805,91,-799,93,-796,96,-790,96,-791,95,-785,94,-781,92,-777,89,-774,87,-768,86,-761,93,-757,94,-757,98,-755,106,-749,111,-743,111,-742,113,-734,112,-726,117,-722,120,-718,124,-714,124,-711,121,-713,118,-714,115,-719,114,-716,110,-716,104,-721,99,-717,91,-713,91,-710,99,-714,102,-714,110,-702,114,-703,118,-699,122,-696,115,-689,114,-682,109,-682,106,-673,105,-662,106,-657,102,-649,101,-643,104,-643,106,-631,107,-619,107,-627,104,-624,99,-616,99,-608,94,-607,86,-602,86,-598,84,-591,80,-585,73,-585,68,-581,68,-575,63,-571,60,-559,58,-558,60,-550,60,-540,58,-536,56,-529,54,-518,46,-517,42,-513,42,-511,37,-505,19,-500,17,-499,10,-507,2,-504,-1,-486,-2,-486,-12,-478,-6,-466,-9,-449,-16,-444,-21,-446,-27,-434,-24,-415,-29,-400,-29,-385,-37,-372,-48,-365,-51,-356,-51,-352,-55,-349,-67,-347,-73,-351,-90,-356,-96,-370,-110,-377,-122,-384,-130,-387,-131,-390,-138,-389,-157,-392,-172,-393,-179,-396,-183,-398,-196,-408,-209,-409,-219,-418,-224,-420,-230,-431,-230,-446,-234,-454,-238,-465,-241,-476,-249,-485,-259,-486,-266,-485,-272,-487,-282,-489,-287,-496,-292,-507,-310,-516,-318,-523,-322,-527,-332,-534,-338,-538,-344,-549,-350,-557,-348,-562,-349,-571,-344,-578,-345,-584,-339,-585,-344,-572,-353,-574,-360,-567,-364,-568,-369,-577,-382,-592,-387,-612,-389,-623,-388,-621,-394,-623,-402,-621,-407,-627,-410,-638,-412,-647,-408,-651,-411,-650,-421,-643,-424,-638,-420,-635,-426,-644,-429,-652,-435,-653,-445,-656,-450,-665,-450,-673,-456,-676,-463,-666,-470,-656,-472,-660,-481,-672,-487,-678,-499,-687,-503,-691,-507,-688,-518,-682,-523,-686,-523,-695,-523,-699,-525,-708,-529,-710,-538,-714,-539,-726,-535,-737,-528,-749,-523,-753,-516,-750,-510,-755,-504,-756,-487,-752,-477,-741,-469,-756,-466,-747,-458,-744,-441,-732,-445,-727,-424,-734,-421,-737,-434,-743,-432,-740,-418,-737,-399,-732,-393,-735,-383,-736,-372,-732,-371,-726,-355,-719,-339,-714,-324,-717,-309,-714,-301,-715,-289,-709,-276,-707,-257,-704,-236,-701,-214,-702,-198,-704,-183,-714,-178,-715,-174,-734,-164,-752,-153,-760,-146,-764,-138,-763,-135,-771,-122,-781,-104,-790,-84,-794,-79,-798,-72,-805,-65,-812,-61,-809,-57,-814,-47,-811,-40,-803,-34,-798,-27,-800,-22,-804,-27,-810,-22,-808,-20,-809,-11,-806,-9,-804,-3,-800,4,-801,8,-795,10,-789,14,-790,17,-786,18,-787,23,-784,26,-779,27,-775,33,-771,38,-775,41,-773,47,-775,56,-773,58,-775,67,-779,72,-782,75,-784,81,-782,83,-784,84,-786,87,-791,90,-796,89,-798,86,-802,83,-804,83,-805,81,-800,75,-803,74,-804,73,-809,72,-811,78,-812,76,-815,77,-817,81,-821,82,-824,83,-828,83,-829,81,-830,82,-835,84,-837,87,-836,88,-836,91,-839,93,-843,95,-846,96,-847,99,-850,101,-849,98,-851,96,-853,98,-857,99,-858,101,-858,104,-857,108,-859,109,-857,111,-861,114,-865,118,-867,121,-872,125,-877,129,-876,131,-874,129,-873,130,-875,133,-878,134,-879,131,-885,132,-888,133,-893,135,-898,135,-901,137,-906,139,-912,139,-917,141,-922,145,-934,156,-939,159,-947,162,-953,161,-961,158,-966,157,-973,159,-980,161,-989,166,-997,167,-1008,172,-1017,176,-1019,179,-1025,180,-1035,183,-1039,187,-1050,193,-1055,199,-1057,204,-1054,205,-1055,208,-1053,211,-1053,214,-1056,219,-1057,223,-1060,228,-1069,238,-1079,245,-1084,252,-1093,256,-1094,258,-1093,264,-1098,267,-1104,272,-1106,279,-1112,279,-1118,285,-1122,290,-1123,293,-1128,300,-1132,308,-1131,312,-1139,316,-1142,315,-1148,318,-1149,314,-1148,309,-1147,302,-1143,298,-1136,291,-1134,288,-1133,288,-1131,284,-1130,284,-1128,278,-1125,275,-1122,272,-1116,267,-1113,257,-1110,253,-1107,248,-1107,243,-1102,243,-1098,238,-1094,234,-1094,232,-1099,228,-1100,228,-1103,234,-1109,240,-1117,245,-1122,247,-1121,255,-1123,260,-1128,263,-1135,268,-1136,266,-1138,269,-1145,271,-1151,277,-1150,278,-1146,277,-1142,281,-1142,286,-1149,293,-1155,296,-1159,302,-1163,308,-1167,316,-1171,325,-1173,330,-1179,336,-1184,337,-1185,340,-1191,341,-1194,343,-1204,344,-1206,346,-1207,352,-1217,362,-1225,376,-1225,378,-1230,381,-1237,390,-1239,398,-1244,403,-1242,411,-1242,420,-1245,428,-1241,437,-1239,455,-1241,469,-1244,477,-1247,482,-1246,484,-1231,480,-1226,471,-1223,474,-1225,482,-1228,490,-1230,490,-1249,500,-1256,504,-1274,508,-1280,517,-1279,523,-1291,528,-1293,536,-1305,543,-1305,548,-1311,552,-1320,555,-1322,564,-1335,572,-1341,581,-1350,582,-1366,582,-1378,585,-1399,595,-1408,597,-1426,601,-1440,600,-1459,605,-1471,609,-1482,607,-1480,600,-1486,599,-1497,597,-1506,594,-1517,592,-1519,597,-1514,607,-1503,610,-1506,613,-1519,607,-1526,601,-1540,594,-1533,589,-1542,581,-1553,577,-1563,574,-1566,570,-1581,565,-1584,560,-1596,556,-1603,556,-1612,554,-1622,550,-1631,547,-1648,544,-1649,546,-1638,550,-1629,553,-1618,559,-1606,560,-1601,564,-1587,570,-1585,572,-1577,576,-1576,583,-1570,589,-1582,586,-1585,588,-1591,584,-1597,589,-1600,586,-1604,591,-1614,587,-1620,587,-1621,593,-1619,596,-1625,600,-1638,598,-1647,603,-1653,605,-1654,611,-1661,615,-1657,621,-1649,626,-1646,631,-1638,632,-1631,631,-1623,635,-1615,635,-1608,638,-1610,642,-1615,644,-1608,648,-1614,648,-1625,646,-1628,643,-1635,646,-1650,644,-1664,647,-1668,651,-1681,657,-1667,661,-1645,666,-1637,666,-1638,661,-1617,661,-1625,667,-1637,671,-1644,676,-1654,680,-1668,684,-1662,689,-1644,689,-1632,694,-1629,699,-1619,703,-1609,704,-1590,709,-1581,708,-1566,714,-1551,711,-1543,707,-1539,709,-1522,708,-1523,706,-1507,704,-1497,705,-1476,702,-1457,701,-1449,700,-1436,702,-1421,699,-1410,697,-1391,695,-1375,690,-1365,689,-1356,693,-1344,696,-1329,695,-1314,699,-1298,702,-1291,698,-1284,700,-1281,705,-1274,704,-1258,695,-1244,702,-1243,694,-1231,696,-1227,699,-1215,698,-1199,694,-1176,690,-1162,688,-1152,689,-1139,684,-1153,679,-1135,677,-1108,678,-1099,680,-1089,674,-1078,679,-1088,683,-1082,687,-1070,687,-1062,688,-1053,686,-1043,680,-1032,681,-1015,676,-999,678,-984,678,-986,684,-977,686,-961,682,-961,673,-955,681,-947,681,-942,691,-953,697,-965,701,-964,712,-952,719,-939,718,-929,713,-915,702,-924,697,-905,695],[-1142,731,-1147,727,-1124,730,-1111,725,-1099,730,-1090,726,-1082,717,-1077,721,-1084,731,-1075,732,-1065,731,-1054,727,-1048,717,-1045,710,-1028,705,-1010,700,-1011,696,-1027,695,-1021,691,-1024,688,-1042,689,-1060,692,-1071,691,-1090,688,-1120,686,-1133,685,-1139,690,-1152,693,-1161,692,-1173,700,-1167,701,-1151,702,-1137,702,-1124,704,-1143,706,-1165,705,-1179,705,-1184,709,-1161,713,-1177,713,-1194,716,-1186,723,-1179,727,-1152,733,-1142,731],[-1045,734,-1054,728,-1069,735,-1066,736,-1053,736,-1045,734],[-763,731,-763,728,-773,729,-784,729,-795,727,-798,728,-809,733,-808,737,-804,738,-781,737,-763,731],[-866,732,-858,725,-849,733,-823,738,-806,727,-807,721,-788,724,-778,727,-756,722,-742,718,-741,713,-722,716,-712,709,-688,705,-679,701,-670,692,-688,687,-664,681,-649,678,-634,669,-619,669,-622,662,-639,650,-651,654,-667,664,-680,663,-681,657,-671,651,-657,646,-653,644,-647,634,-650,627,-663,629,-688,637,-674,629,-663,623,-662,619,-689,623,-710,629,-722,634,-719,637,-734,642,-748,647,-748,644,-777,642,-786,646,-779,653,-760,653,-740,655,-743,658,-739,663,-727,673,-729,677,-733,681,-748,686,-769,689,-762,691,-773,698,-782,698,-790,702,-795,699,-813,697,-849,700,-871,703,-887,704,-895,708,-885,712,-899,712,-902,722,-894,731,-884,735,-858,738,-866,732],[-1004,738,-992,736,-974,738,-971,735,-981,730,-965,726,-967,717,-984,713,-993,714,-1e3,717,-1025,725,-1025,728,-1004,727,-1015,734,-1004,738],[1436,732,1421,732,1400,733,1399,734,1408,738,1421,739,1435,735,1436,732],[-932,728,-943,720,-954,721,-960,729,-960,734,-955,739,-945,741,-924,741,-905,739,-920,730,-932,728],[-1205,714,-1231,709,-1236,713,-1259,719,-1256,722,-1248,730,-1239,737,-1249,743,-1215,744,-1201,742,-1176,742,-1166,739,-1155,735,-1168,732,-1192,725,-1205,718,-1205,714],[1507,751,1496,747,1480,748,1461,752,1464,755,1482,753,1507,751],[-936,750,-942,746,-956,747,-968,749,-963,754,-949,756,-940,753,-936,750],[1451,756,1443,748,1406,748,1390,746,1370,753,1375,759,1388,761,1415,761,1451,756],[-985,767,-977,763,-977,757,-982,750,-998,749,-1009,751,-1009,756,-1025,756,-1026,763,-1015,763,-1e3,766,-986,766,-985,767],[-1082,762,-1078,758,-1069,760,-1059,760,-1057,755,-1063,750,-1097,749,-1122,744,-1137,744,-1139,747,-1118,752,-1163,750,-1177,752,-1163,762,-1154,765,-1126,761,-1108,755,-1091,755,-1105,764,-1096,768,-1085,767,-1082,762],[575,707,569,706,537,708,534,712,516,715,515,720,525,722,524,728,544,736,535,737,559,746,556,751,579,756,612,763,645,764,662,768,682,769,689,765,682,762,646,757,616,753,585,743,570,733,554,724,556,715,575,707],[-947,771,-936,768,-916,768,-907,764,-910,761,-898,758,-892,756,-878,756,-864,755,-848,757,-828,758,-811,757,-801,753,-798,749,-805,747,-819,744,-832,746,-861,744,-882,744,-898,745,-924,748,-928,754,-929,759,-939,763,-960,764,-971,768,-967,772,-947,771],[-1162,776,-1163,769,-1171,765,-1180,765,-1199,761,-1215,759,-1229,761,-1229,761,-1212,769,-1191,775,-1176,775,-1162,776],[1070,770,1072,765,1082,767,1111,767,1133,762,1141,758,1139,753,1128,750,1102,745,1094,742,1106,740,1121,738,1130,740,1135,733,1140,736,1156,738,1188,736,1190,731,1232,730,1233,737,1254,736,1270,736,1286,730,1291,724,1285,720,1297,712,1313,708,1323,718,1339,714,1356,717,1375,713,1382,716,1399,715,1391,724,1405,728,1495,722,1504,716,1530,708,1570,710,1590,709,1598,705,1597,697,1609,694,1623,696,1641,697,1659,695,1678,696,1696,687,1708,690,1700,697,1705,701,1736,698,1757,699,1786,694,1800,690,1800,650,1800,650,1787,645,1774,646,1783,641,1789,633,1794,630,1795,626,1792,623,1774,625,1746,618,1737,617,1722,610,1707,603,1703,599,1689,606,1663,598,1658,602,1649,597,1635,599,1632,592,1620,582,1621,578,1632,576,1631,562,1621,561,1617,553,1621,549,1604,543,1600,532,1585,530,1582,519,1568,510,1564,517,1560,532,1554,554,1559,568,1568,574,1568,578,1584,581,1602,593,1619,603,1637,611,1645,626,1633,625,1627,616,1601,605,1593,618,1567,614,1542,598,1550,591,1528,589,1513,588,1513,595,1498,597,1485,592,1455,593,1422,590,1390,571,1351,547,1367,546,1372,540,1382,538,1388,543,1399,542,1413,531,1414,522,1406,512,1405,500,1401,484,1386,470,1382,463,1369,451,1355,440,1349,434,1335,428,1329,428,1323,433,1309,426,1308,422,1304,423,1300,419,1297,416,1297,409,1292,407,1290,405,1286,402,1280,400,1275,398,1275,393,1274,392,1278,391,1283,386,1292,374,1295,368,1295,356,1291,351,1282,349,1274,345,1265,344,1264,349,1266,357,1261,367,1269,369,1262,377,1257,379,1256,378,1253,377,1252,379,1250,379,1247,381,1250,385,1252,387,1251,388,1254,394,1253,396,1247,397,1243,399,1229,396,1221,392,1211,389,1216,394,1214,398,1222,404,1216,409,1208,406,1196,399,1190,393,1180,392,1175,387,1181,381,1189,379,1189,374,1197,372,1208,379,1217,375,1224,375,1225,369,1211,367,1206,361,1197,356,1192,349,1202,344,1206,334,1212,325,1219,317,1219,309,1213,307,1215,301,1221,298,1219,290,1217,282,1211,281,1204,271,1196,257,1187,245,1173,236,1159,228,1148,227,1142,222,1138,225,1132,221,1118,216,1108,214,1104,203,1099,203,1096,210,1099,214,1085,217,1081,216,1067,207,1059,198,1057,191,1064,180,1074,167,1083,161,1089,153,1093,134,1092,117,1084,110,1072,104,1064,95,1052,86,1048,92,1051,99,1043,105,1035,106,1031,112,1026,122,1017,126,1008,126,1010,134,1001,134,1e3,123,995,108,992,100,992,92,999,92,1003,83,1005,74,1010,69,1016,67,1021,62,1024,61,1030,55,1034,49,1034,42,1033,37,1034,34,1035,28,1039,25,1042,16,1042,13,1035,12,1026,20,1014,28,1013,33,1007,39,1006,48,1002,53,1003,60,1001,65,997,68,995,73,990,79,985,84,983,78,982,84,983,90,986,99,985,107,988,114,984,120,985,131,981,136,978,148,976,161,972,169,965,164,954,157,948,158,942,160,945,173,943,182,935,194,937,197,931,199,924,207,921,212,920,217,918,222,914,228,905,228,906,224,903,218,898,220,897,219,894,220,890,221,889,217,882,217,870,215,870,207,865,202,851,195,839,183,832,177,822,170,822,166,817,163,808,160,803,159,800,151,802,138,803,130,799,121,799,104,793,103,789,95,792,92,783,89,779,83,775,80,766,89,761,103,757,113,754,118,749,127,746,140,744,146,735,160,731,179,728,192,728,204,726,214,712,208,705,209,692,221,696,225,693,228,682,237,674,239,671,247,664,254,645,252,629,252,615,251,596,254,585,256,574,257,570,270,565,271,557,270,547,265,535,268,525,276,515,279,509,288,501,301,496,300,489,303,486,299,480,300,482,295,481,293,484,286,488,277,493,275,495,271,502,267,502,263,501,259,502,256,505,253,507,250,508,248,507,255,510,260,513,261,516,258,516,252,514,246,516,242,518,243,518,240,526,242,534,242,540,241,547,248,554,254,561,261,564,264,565,263,564,259,563,257,564,249,568,242,574,239,581,237,587,236,592,230,595,227,598,225,598,223,594,217,593,214,589,211,585,204,580,205,578,202,577,197,578,191,577,189,572,189,566,186,565,181,563,179,557,179,553,176,553,172,548,170,542,170,536,167,531,167,524,164,522,159,522,156,512,152,496,147,487,140,482,139,479,140,474,136,467,134,459,133,456,133,454,130,451,130,450,127,445,127,442,126,435,126,432,132,433,138,431,141,429,148,426,152,428,153,427,157,428,159,428,163,426,168,423,171,423,175,418,178,412,187,409,195,402,202,398,203,391,213,390,220,391,226,385,237,380,241,375,243,372,249,372,251,369,256,366,258,362,266,356,274,351,281,346,281,348,286,348,290,350,294,349,295,346,291,344,283,342,278,339,276,336,280,331,284,324,299,323,298,327,287,333,277,341,261,345,256,348,250,357,239,355,238,355,231,367,222,369,220,372,210,370,208,371,198,375,186,379,184,384,180,390,168,393,159,398,154,412,145,417,139,423,133,426,130,431,127,433,124,433,120,427,117,431,115,435,113,437,109,441,104,446,104,456,107,466,108,475,111,480,112,484,114,489,114,493,114,497,116,503,117,507,120,511,120,511,117,510,112,510,106,508,103,506,92,501,81,495,68,486,53,477,42,466,29,456,20,441,11,431,3,420,-9,418,-14,416,-17,409,-21,406,-25,403,-26,401,-33,398,-37,396,-43,392,-47,387,-59,388,-65,394,-68,395,-71,392,-77,393,-80,392,-85,395,-91,399,-101,403,-103,405,-108,404,-118,406,-126,406,-142,408,-147,405,-154,401,-161,395,-167,385,-171,374,-176,363,-187,359,-188,352,-196,348,-198,347,-205,352,-213,354,-218,354,-221,356,-221,355,-231,354,-235,356,-237,355,-241,350,-245,342,-248,330,-254,326,-257,327,-261,329,-262,328,-267,326,-275,325,-283,322,-288,315,-293,313,-294,309,-299,306,-304,301,-311,289,-322,282,-328,275,-332,264,-336,259,-337,258,-339,252,-338,247,-340,236,-338,230,-339,226,-339,215,-343,207,-344,201,-348,196,-348,192,-345,189,-344,184,-340,184,-341,182,-339,183,-333,179,-326,182,-324,182,-317,176,-307,171,-299,171,-299,163,-286,156,-278,152,-271,150,-261,147,-254,144,-239,144,-227,143,-221,139,-217,134,-209,128,-197,126,-190,118,-181,117,-173,116,-167,118,-158,121,-149,122,-144,125,-135,127,-131,133,-125,136,-120,137,-113,137,-107,134,-104,131,-98,129,-92,129,-90,132,-86,129,-76,127,-69,122,-63,123,-61,122,-58,119,-50,111,-40,101,-30,94,-21,88,-11,88,-8,90,-5,93,3,95,10,93,12,96,23,98,31,94,37,89,39,87,44,85,45,85,48,75,44,71,45,67,42,59,43,54,49,50,56,43,63,36,63,27,63,19,61,11,59,-5,53,-11,50,-20,47,-29,50,-33,50,-40,52,-46,52,-58,50,-65,47,-75,43,-77,44,-80,44,-90,48,-99,56,-108,61,-114,68,-117,69,-124,73,-129,78,-131,82,-132,89,-137,95,-141,99,-143,100,-146,102,-147,107,-148,109,-151,110,-157,115,-161,115,-163,118,-163,120,-166,122,-167,124,-168,132,-167,136,-171,144,-176,147,-172,149,-167,156,-165,161,-165,167,-163,172,-161,181,-163,191,-164,196,-163,201,-165,206,-171,210,-170,214,-170,219,-166,222,-163,227,-163,230,-160,237,-154,244,-151,245,-148,251,-148,256,-144,263,-138,266,-131,276,-126,280,-117,281,-109,288,-104,291,-96,299,-98,312,-94,320,-93,326,-87,332,-77,337,-69,341,-62,351,-59,358,-52,358,-46,353,-36,354,-26,352,-22,352,-12,357,-1,359,5,363,15,366,32,368,48,369,53,367,63,371,73,371,77,369,84,369,95,374,102,372,102,367,110,371,111,369,106,364,106,359,109,357,108,348,101,343,103,338,109,338,111,333,115,331,127,328,131,329,139,327,152,323,157,314,166,312,180,308,191,303,196,305,201,310,198,318,201,322,209,327,215,328,229,326,232,322,236,322,239,320,249,319,252,316,265,316,275,313,285,310,289,309,297,312,301,315,310,316,317,314,320,309,322,313,330,310,338,310,343,312,346,315,345,316,348,321,350,328,351,331,351,331,355,339,360,346,360,346,359,354,361,358,358,363,362,367,356,366,347,368,340,362,325,361,317,366,306,367,304,363,297,361,287,367,276,367,270,377,263,382,268,390,262,395,273,404,288,405,292,412,311,411,323,417,335,420,352,420,369,413,383,409,395,411,404,410,416,415,417,420,415,426,409,430,403,431,400,434,387,443,375,447,367,452,374,454,382,462,377,466,391,470,391,473,382,471,374,470,368,467,358,466,350,463,350,457,355,454,365,455,363,451,352,449,339,444,333,446,335,450,325,453,326,455,336,459,333,461,317,463,317,467,307,466,304,460,296,453,296,450,291,448,288,449,286,437,280,433,277,426,280,420,281,416,290,413,288,411,276,410,272,407,264,402,260,406,261,408,254,409,249,409,237,407,244,401,239,400,233,400,228,405,226,403,228,397,234,392,230,390,235,385,240,382,240,377,231,379,234,374,228,373,232,364,225,364,217,368,213,376,211,383,207,388,202,393,202,396,200,397,200,399,194,403,193,407,194,414,195,417,194,419,192,420,189,423,185,425,175,429,169,432,160,435,152,442,154,443,149,447,149,451,143,452,140,448,137,451,137,455,137,455,139,456,131,457,123,454,124,449,123,446,126,441,135,436,140,428,151,420,159,420,162,417,159,415,168,412,175,409,184,404,185,402,183,398,177,403,169,404,164,398,172,394,171,389,166,388,161,380,157,379,157,382,159,388,161,390,157,395,154,400,150,402,147,406,141,408,136,412,129,413,121,417,112,424,105,429,102,439,97,440,89,444,84,442,79,438,74,437,65,431,46,434,31,431,30,425,30,419,21,412,8,410,7,407,1,401,-3,393,1,387,-5,383,-7,376,-14,374,-21,367,-34,367,-44,367,-50,363,-54,359,-59,360,-62,364,-65,369,-75,371,-79,368,-84,370,-89,369,-87,377,-88,383,-93,384,-95,387,-94,394,-90,398,-90,402,-88,408,-88,412,-90,415,-90,419,-90,426,-94,430,-80,437,-68,436,-54,436,-43,434,-35,435,-19,434,-14,440,-12,460,-22,471,-30,476,-45,480,-46,487,-33,489,-16,486,-19,498,-10,493,13,501,16,509,25,511,33,513,38,516,47,531,61,535,69,535,71,537,79,537,81,535,88,540,86,544,85,550,81,555,81,565,83,568,85,571,94,572,98,574,106,577,105,572,103,569,104,566,109,565,107,561,104,562,97,555,99,550,99,546,110,544,109,540,120,542,125,545,136,541,141,538,148,541,164,545,176,549,186,547,187,544,197,544,199,549,213,552,211,560,211,568,216,574,225,578,233,570,241,570,243,578,244,584,241,583,234,586,233,592,246,595,259,596,269,594,280,595,291,600,281,605,263,604,245,601,229,598,223,604,213,607,215,617,211,626,215,632,224,638,247,649,254,651,253,655,239,660,222,657,212,650,214,644,198,636,178,627,171,613,178,606,188,601,179,590,168,587,164,570,159,561,147,562,141,554,129,554,126,563,118,574,110,589,104,595,84,583,70,581,57,586,53,597,50,620,59,626,86,635,105,645,124,659,148,678,164,686,192,698,214,703,230,702,245,710,264,710,282,712,313,705,300,702,311,696,321,699,338,693,365,691,403,679,411,675,411,668,400,663,384,660,339,668,332,666,348,659,349,644,362,641,370,638,371,643,365,648,372,651,396,645,404,648,398,655,421,665,430,664,439,661,445,668,437,674,442,680,435,686,463,683,468,677,456,676,456,670,463,667,479,669,481,675,502,680,537,689,545,688,535,682,547,681,554,684,573,685,588,689,599,683,611,689,600,695,606,699,635,695,649,692,685,681,692,686,682,691,681,694,669,695,673,699,667,707,667,710,685,719,692,728,699,730,726,728,728,722,718,714,725,711,728,704,726,690,737,684,732,677,713,663,724,662,728,665,739,668,742,673,751,678,745,683,749,690,738,691,736,696,744,706,731,714,749,721,747,728,752,729,757,723,753,713,764,712,759,719,776,723,797,723,815,718,806,726,805,736,823,739,847,738,868,739,860,745,872,751,883,751,903,756,929,758,932,760,959,761,967,759,989,764,1008,764,1010,769,1020,773,1044,777,1061,774,1047,771,1070,770],[-938,775,-943,775,-962,776,-964,778,-944,778,-937,776,-938,775],[-1102,777,-1121,774,-1135,777,-1127,781,-1113,782,-1099,780,-1102,777],[247,779,225,774,207,777,214,779,208,783,229,785,233,781,247,779],[-1097,786,-1109,784,-1125,784,-1125,786,-1115,788,-1110,788,-1097,786],[-958,781,-973,779,-981,781,-986,785,-986,789,-973,788,-968,788,-956,784,-958,781],[-1001,783,-997,779,-1013,780,-1029,783,-1052,784,-1042,787,-1054,789,-1055,793,-1035,792,-1008,788,-1001,783],[1051,783,994,779,1013,792,1021,793,1028,793,1054,787,1051,783],[183,797,215,790,190,786,185,778,176,776,171,768,159,768,138,774,147,777,132,780,112,789,104,797,132,800,137,797,151,797,155,800,170,801,183,797],[254,804,274,801,259,795,230,794,201,796,199,798,185,799,174,803,205,806,219,804,229,807,254,804],[511,805,498,804,489,803,488,802,476,800,465,802,471,806,448,806,468,808,483,808,485,805,491,808,500,809,515,807,511,805],[999,789,978,788,950,790,933,794,925,801,912,803,938,810,959,813,979,807,1002,798,999,789],[-870,797,-858,793,-872,790,-890,783,-908,782,-929,783,-940,788,-939,791,-931,794,-950,794,-961,797,-967,802,-960,806,-953,809,-943,810,-947,812,-924,813,-911,807,-894,805,-878,803,-870,797],[-685,831,-658,830,-637,829,-618,826,-619,824,-643,819,-668,817,-677,815,-655,815,-678,809,-695,806,-712,798,-732,796,-739,794,-769,793,-755,792,-762,790,-754,785,-763,782,-779,779,-784,775,-798,772,-796,770,-779,770,-779,768,-806,762,-832,765,-861,763,-876,764,-895,765,-896,770,-878,772,-883,779,-876,780,-850,775,-863,782,-880,784,-872,788,-854,790,-851,793,-865,797,-869,803,-842,802,-834,801,-818,805,-841,806,-876,805,-894,809,-902,813,-914,816,-916,819,-901,821,-889,821,-870,823,-855,827,-843,826,-832,823,-824,829,-811,830,-793,831,-762,832,-757,831,-728,832,-707,832,-685,831],[-271,835,-208,827,-227,823,-265,823,-319,822,-314,820,-279,821,-248,818,-229,821,-221,817,-232,812,-206,815,-158,819,-128,817,-122,813,-163,806,-168,804,-200,802,-177,801,-189,794,-197,788,-197,776,-185,770,-200,769,-217,766,-198,761,-196,752,-207,752,-194,743,-216,742,-204,738,-208,735,-222,733,-236,733,-223,726,-223,722,-243,726,-248,723,-234,721,-221,715,-218,707,-235,705,-243,709,-255,714,-252,708,-264,702,-237,702,-223,701,-250,693,-277,685,-307,681,-318,681,-328,677,-342,667,-364,660,-370,659,-384,657,-398,655,-407,648,-407,641,-412,635,-428,627,-424,619,-429,611,-434,601,-448,600,-463,609,-483,609,-492,614,-499,624,-516,636,-521,643,-523,652,-537,661,-533,668,-540,672,-530,684,-515,687,-511,691,-509,699,-520,696,-526,694,-535,693,-547,696,-548,703,-544,708,-534,708,-514,706,-531,712,-540,715,-550,714,-558,717,-547,726,-553,730,-561,736,-573,747,-586,751,-586,755,-613,761,-634,762,-661,761,-685,761,-697,764,-714,770,-688,773,-668,774,-710,776,-733,780,-732,784,-694,789,-657,794,-653,798,-680,801,-672,805,-637,812,-622,813,-627,818,-603,820,-572,822,-541,822,-530,819,-504,824,-480,821,-466,820,-445,817,-469,822,-468,826,-434,832,-399,832,-386,835,-351,836,-271,835]];function ud(){let e=document.createElement("canvas");e.width=2048,e.height=1024;let i=e.getContext("2d"),s=i.createLinearGradient(0,0,0,1024);for(let[l,c]of[[0,"#16324d"],[.12,"#0e2f52"],[.5,"#0b3a66"],[.88,"#0e2f52"],[1,"#1a3550"]])s.addColorStop(l,c);i.fillStyle=s,i.fillRect(0,0,2048,1024);let r=i.createLinearGradient(0,0,0,1024),a=l=>(90-l)/180;for(let[l,c]of[[90,"#f2f5f7"],[74,"#e6ecef"],[66,"#8d9684"],[56,"#55693f"],[46,"#7b8052"],[38,"#a39a66"],[28,"#c2ad7b"],[18,"#a8a064"],[8,"#4f7438"],[-6,"#45702f"],[-18,"#8f9258"],[-27,"#b9a473"],[-36,"#7d8850"],[-52,"#66755a"],[-62,"#dfe6ea"],[-90,"#f4f7f9"]])r.addColorStop(a(l),c);i.fillStyle=r,i.strokeStyle="rgba(20, 40, 30, 0.35)",i.lineWidth=1;for(let l of ld){i.beginPath();for(let c=0;c<l.length;c+=2){let h=(l[c]/10+180)/360*2048,u=(90-l[c+1]/10)/180*1024;c?i.lineTo(h,u):i.moveTo(h,u)}i.closePath(),i.fill(),i.stroke()}let o=new Jn(e);return o.colorSpace=xe,o.anisotropy=8,o.wrapS=Ms,o}var H2=n=>{let t=gr(n);return[(t.lon+180)/360,(t.lat+90)/180]};function dd(n){let i=[],s=[],r=[],a=[],o=1-4e3/6378137;for(let h=0;h<=96;h++)for(let u=0;u<=192;u++){let f=90-180*h/96,p=-180+360*u/192,g=bi(f,p,0),_=Math.hypot(...g);i.push(g[0]*o,g[1]*o,g[2]*o),r.push(g[0]/_,g[1]/_,g[2]/_),s.push(u/192,1-h/96)}for(let h=0;h<96;h++)for(let u=0;u<192;u++){let f=h*193+u,p=f+192+1;a.push(f,p,f+1,f+1,p,p+1)}let l=new Se;l.setAttribute("position",new jt(i,3)),l.setAttribute("normal",new jt(r,3)),l.setAttribute("uv",new jt(s,2)),l.setIndex(a);let c=new se(l,new Kn({map:n}));return c.frustumCulled=!1,c}function cd(n,t,e,i,s,r){let a=bi(n.lat,n.lon,n.height),{e:o,n:l,u:c}=wn(a),h=a.map(A=>A/Math.hypot(...a)),u=new L(0,0,1).cross(new L(...h)).normalize(),f=new L(...h).cross(u),p=[],g=[],_=[],m=[],d=[],S=(A,T)=>{let R=A/6378137,F=Math.cos(T),M=Math.sin(T),y=[0,1,2].map(H=>h[H]*Math.cos(R)+(f.getComponent(H)*F+u.getComponent(H)*M)*Math.sin(R)),U=i(A),D=ze(y)+U,V=y.map(H=>H*D),C=[V[0]-a[0],V[1]-a[1],V[2]-a[2]];p.push(C[0],C[1],C[2]),_.push(y[0],y[1],y[2]);let N=r(V,A,[C[0]*o[0]+C[1]*o[1]+C[2]*o[2],C[0]*l[0]+C[1]*l[1]+C[2]*l[2]]);g.push(N[0],N[1]),m.push(1,1,1,N[2]??1)};S(0,0),t.forEach(A=>{for(let T=0;T<e;T++)S(A,2*Math.PI*T/e)});for(let A=0;A<e;A++)d.push(0,1+A,1+(A+1)%e);for(let A=0;A<t.length-1;A++)for(let T=0;T<e;T++){let R=1+A*e+T,F=1+A*e+(T+1)%e,M=R+e,y=F+e;d.push(R,M,F,F,M,y)}let x=new Se;x.setAttribute("position",new jt(p,3)),x.setAttribute("normal",new jt(_,3)),x.setAttribute("uv",new jt(g,2)),x.setAttribute("color",new jt(m,4)),x.setIndex(d);let w=new se(x,s);return w.frustumCulled=!1,w}var hd=(n,t,e)=>Array.from({length:e},(i,s)=>n*Math.pow(t/n,s/(e-1))),V2={whiteSands:"#c9b48c",kapustinYar:"#9c9468",tyuratam:"#b09f72",canaveral:"#7f8a5c"};function G2(){let t=document.createElement("canvas");t.width=t.height=256;let e=t.getContext("2d"),i=e.createImageData(256,256),s=7,r=()=>(s=s*16807%2147483647)/2147483647,a=f=>Array.from({length:f*f},r),o=a(8),l=a(32),c=a(128),h=(f,p,g,_)=>{let m=g*p,d=_*p,S=Math.floor(m)%p,x=Math.floor(d)%p,w=(S+1)%p,A=(x+1)%p,T=m-Math.floor(m),R=d-Math.floor(d),F=T*T*(3-2*T),M=R*R*(3-2*R);return(f[x*p+S]*(1-F)+f[x*p+w]*F)*(1-M)+(f[A*p+S]*(1-F)+f[A*p+w]*F)*M};for(let f=0;f<256;f++)for(let p=0;p<256;p++){let g=.5*h(o,8,p/256,f/256)+.3*h(l,32,p/256,f/256)+.2*h(c,128,p/256,f/256),_=105+150*g,m=(f*256+p)*4;i.data[m]=i.data[m+1]=i.data[m+2]=_,i.data[m+3]=255}e.putImageData(i,0,0);let u=new Jn(t);return u.wrapS=u.wrapT=Ms,u.anisotropy=8,u.colorSpace=xe,u}function fd(n,t,e){let i=bi(n.lat,n.lon,n.height),s=new Qt;s.userData.pad=i;let r=F=>n.height*(1-Math.min(1,Math.max(0,(F-15e4)/35e4))),a=cd(n,hd(30,3e6,64),96,r,new Kn({map:t}),F=>H2(F));a.renderOrder=-5,s.add(a);let o=G2(),l=new Gt(V2[n.id]||"#a39a66"),c=(F,M,y)=>{let U=cd(n,hd(8,F,40),64,D=>n.height,new Kn({map:o,color:l,transparent:!0,vertexColors:!0,depthTest:!1,depthWrite:!1}),(D,V,C)=>[C[0]/M,C[1]/M,1-Math.min(1,Math.max(0,(V-.5*F)/(.5*F)))**2]);return U.renderOrder=y,U},h=c(7e4,9e3,-4),u=c(2500,260,-3);s.add(h,u),s.userData.aprons=[h,u];let{e:f,n:p,u:g}=wn(i),_=new Qt;_.matrixAutoUpdate=!1,_.matrix.makeBasis(new L(...f),new L(...g),new L(...p).negate());let m=e,d=new Kn({color:"#9b9a94"}),S=new Kn({color:"#4b4f55"}),x=new Kn({color:"#7d2f28"}),w=new se(new _i(m*2.2,m*2.2,.6,48),d);w.position.y=-.9,_.add(w);let A=new se(new _i(m*.12,m*.16,.6,24),S);A.position.y=-.3,_.add(A);let T=new se(new In(m*.6,.5,m*14),d);T.position.set(0,-.95,m*9),_.add(T);let R=new se(new In(m*1.2,m*.35,m*.8),d);R.position.set(-m*1.2,m*.17-.6,m*12),_.add(R);for(let[F,M]of[[1,1],[-1,1],[1,-1],[-1,-1]]){let y=new se(new _i(.12,.3,m*2.2,6),x);y.position.set(F*m*1.7,m*1.1-.6,M*m*1.7),_.add(y)}return s.add(_),s.userData.local=_,s}function pd(){let n=new Fa(1,96,48),t=(r,a)=>new rn({side:r,transparent:!0,depthWrite:!1,blending:js,uniforms:{sun:{value:new L(1,0,0)},k:{value:1}},vertexShader:`#include <common>
#include <logdepthbuf_pars_vertex>
varying vec3 vN; varying vec3 vV; varying vec3 vW;
void main(){ vec4 mv = modelViewMatrix * vec4(position,1.0); vN = normalize(normalMatrix * normal); vV = normalize(-mv.xyz); vW = normalize(mat3(modelMatrix) * normal); gl_Position = projectionMatrix * mv;
#include <logdepthbuf_vertex>
}`,fragmentShader:`#include <logdepthbuf_pars_fragment>
uniform vec3 sun; uniform float k; varying vec3 vN; varying vec3 vV; varying vec3 vW;
void main(){
#include <logdepthbuf_fragment>
 float d = dot(normalize(vN), normalize(vV)); float day = clamp(dot(normalize(vW), sun) * 2.0 + 0.6, 0.08, 1.0);
 ${a}
 gl_FragColor = vec4(vec3(0.35, 0.62, 1.0) * a * day * k, 1.0); }`}),e=new se(n,t(Cn,"float a = pow(1.0 - clamp(d, 0.0, 1.0), 4.0) * 0.55;"));e.scale.setScalar(6408137);let i=new se(n,t(Ve,"float a = pow(clamp(-d * 4.6, 0.0, 1.0), 4.0) * 0.8;"));i.scale.setScalar(6528137),e.frustumCulled=i.frustumCulled=!1,e.renderOrder=2,i.renderOrder=1;let s=new Qt;return s.add(e,i),s.userData.mats=[e.material,i.material],s}function md(){let n=11,t=()=>(n=n*16807%2147483647)/2147483647,e=[],i=[];for(let a=0;a<2200;a++){let o=2*t()-1,l=2*Math.PI*t(),c=Math.sqrt(1-o*o),h=.35+.65*t()**3,u=t();e.push(c*Math.cos(l),c*Math.sin(l),o),i.push(h*(.85+.15*u),h*.92,h*(1-.15*u))}let s=new Se;s.setAttribute("position",new jt(e,3)),s.setAttribute("color",new jt(i,3));let r=new Ca(s,new rr({size:1.6,sizeAttenuation:!1,vertexColors:!0,depthTest:!1,depthWrite:!1,blending:js}));return r.frustumCulled=!1,r.renderOrder=-20,r.scale.setScalar(4e8),r}var Ce=(n,t,e=40)=>new se(new Na(n.map(([i,s])=>new at(i,s)),e),t),cc=(n,t,e)=>{let i=document.createElement("canvas");i.width=n,i.height=t,e(i.getContext("2d"),n,t);let s=new Jn(i);return s.colorSpace=xe,s.anisotropy=4,s},Ke=(n,t)=>new za({color:n,roughness:.55,metalness:.15,...t}),gd;function jn(n,t){gd||=cc(8,128,(s,r,a)=>{let o=s.createLinearGradient(0,0,0,a);o.addColorStop(0,"rgba(255,250,235,0.95)"),o.addColorStop(.15,"rgba(255,225,150,0.85)"),o.addColorStop(.45,"rgba(255,150,60,0.5)"),o.addColorStop(1,"rgba(255,80,20,0)"),s.fillStyle=o,s.fillRect(0,0,r,a)});let e=(s,r,a,o)=>{let l=new _i(s,r,a,16,1,!0);l.translate(0,-a/2,0);let c=new se(l,new bs({map:gd,transparent:!0,opacity:o,depthWrite:!1,side:je,toneMapped:!1}));return c.renderOrder=6,c},i=new Qt;return i.add(e(n,n*1.5,t,.5),e(n*.6,n*.2,t*.55,.9)),i.visible=!1,i}function hc(n,t,e,i,s,r,a=.08,o=0,l=.5){let c=new Qt,h=new or;h.moveTo(0,0),h.lineTo(i,0),h.lineTo(i,e),h.lineTo(0,t+(t-e)*l),h.closePath();let u=new Oa(h,{depth:a,bevelEnabled:!1});u.translate(s,o,-a/2);for(let f=0;f<n;f++){let p=new se(u,Array.isArray(r)?r[f%r.length]:r);p.rotation.y=f*2*Math.PI/n+Math.PI/4,c.add(p)}return c}function _d(n=14.04){let t=cc(256,512,(r,a,o)=>{r.fillStyle="#f1efe8",r.fillRect(0,0,a,o);let l=[[0,.3,0],[.3,.58,1],[.58,.8,0]];r.fillStyle="#16171a";for(let[c,h,u]of l)for(let f=0;f<4;f++)(f+u)%2===0&&r.fillRect(f*a/4,o*(1-h),a/4,o*(h-c));r.fillRect(0,0,a,o*.035)}),e=[[.36,0],[.47,.05],[.62,1],[.76,2.6],[.825,4.6],[.825,7.4]];for(let r=1;r<=14;r++){let a=7.4+6.639999999999999*r/14;if(a>n){e.push([.825*Math.pow(Math.max(0,1-((n-7.4)/6.64)**2),.8),n]);break}e.push([.825*Math.pow(Math.max(0,1-((a-7.4)/6.64)**2),.8),a])}let i=new Qt;i.add(Ce(e,Ke("#ffffff",{map:t}))),i.add(hc(4,3.9,1.9,1,.76,[Ke("#16171a"),Ke("#f1efe8")],.1,0,.35));let s=Ce([[.2,.25],[.37,-.25]],Ke("#3a3a3d",{side:je}),20);return i.add(s),i}function xd(){let n=_d(),t=jn(.4,11);n.add(t);let e=new Qt;return e.add(n),{group:e,parts:{A4:n},flames:{A4:[t]},length:14.04}}function W2(){let n=_d(11.6),t=jn(.4,11);n.add(t);let e=new Qt,i=Ke("#ece9df");e.add(Ce([[.1,0],[.15,.1],[.15,4.8],[0,5.8]],i,20)),e.add(hc(3,.6,.3,.3,.15,Ke("#16171a"),.03,.05,.4));let s=Ce([[.152,3.9],[.152,4.3]],Ke("#16171a"),20);e.add(s);let r=jn(.09,3);e.add(r),e.position.y=11.45;let a=new Qt;return a.add(n,e),{group:a,parts:{V2:n,WAC:e},flames:{V2:[t],WAC:[r]},length:17.25}}function X2(){let n=Ke("#aeb4ac"),t=Ke("#6b755e"),e=Ke("#35383b",{side:je}),i=Ke("#e9edf0"),s=new Qt;s.add(Ce([[1.02,0],[1.02,2.2],[1.3,9],[1.475,16.5],[1.475,19.2],[1,24.5],[1,26],[0,29.17]],n,40)),s.add(Ce([[1.31,9.2],[1.476,16.5],[1.476,19.2]],i,40)),s.add(Ce([[1.01,24.2],[1.01,26.05]],t,40));for(let c=0;c<4;c++){let h=c*Math.PI/2+Math.PI/4,u=Ce([[.25,.3],[.42,-.5]],e,14);u.position.set(Math.cos(h)*.5,0,Math.sin(h)*.5),s.add(u)}let r=[0,1,2,3].map(c=>{let h=c*Math.PI/2+Math.PI/4,u=jn(.38,18);return u.position.set(Math.cos(h)*.5,-.4,Math.sin(h)*.5),s.add(u),u}),a=new Qt,o=[];a.userData.spread=!0;for(let c=0;c<4;c++){let h=new Qt,u=c*Math.PI/2;h.add(Ce([[1.2,0],[1.34,.6],[1.34,3.2],[.72,12],[.2,19.2],[0,19.6]],n,28)),h.add(Ce([[1.345,.6],[1.345,3.2]],t,28)),h.add(Ce([[.73,12],[.36,17]],i,28));for(let f=0;f<4;f++){let p=f*Math.PI/2+Math.PI/4,g=Ce([[.25,.3],[.42,-.5]],e,14);g.position.set(Math.cos(p)*.55,0,Math.sin(p)*.55),h.add(g);let _=jn(.38,18);_.position.set(Math.cos(p)*.55,-.4,Math.sin(p)*.55),h.add(_),o.push(_)}h.position.set(Math.cos(u)*2.55,0,Math.sin(u)*2.55),h.rotation.set(0,-u,0),h.rotateZ(.058),a.add(h)}let l=new Qt;return l.add(s,a),{group:l,parts:{A:s,BVGD:a},flames:{A:r,BVGD:o},length:29.17}}function q2(){let n=cc(256,512,(p,g,_)=>{p.fillStyle="#f3f3ee",p.fillRect(0,0,g,_),p.fillStyle="#17181b";for(let m=0;m<4;m++)p.fillRect(m*g/4,_*.42,g/8,_*.2);p.fillRect(0,_*.93,g,_*.07),p.font="bold 40px sans-serif",p.fillText("UE",g*.3,_*.25)}),t=Ke("#ffffff",{map:n}),e=Ke("#f3f3ee"),i=Ke("#17181b"),s=new Qt;s.add(Ce([[.89,0],[.89,15.2],[.8,16.4],[.45,17.5],[0,17.5]],t,36)),s.add(hc(4,2.2,1,.95,.89,e,.08,0,.5)),s.add(Ce([[.3,.3],[.5,-.4]],Ke("#3a3a3d",{side:je}),18));let r=jn(.45,13);s.add(r);let a=new Qt;a.add(Ce([[.3,0],[.42,.1],[.42,1.15],[.2,1.2]],i,28));for(let p=0;p<6;p++){let g=new se(new In(.06,1,.02),e),_=p*Math.PI/3;g.position.set(Math.cos(_)*.425,.6,Math.sin(_)*.425),g.rotation.y=-_+Math.PI/2,a.add(g)}a.position.y=17.5;let o=new Qt;o.add(Ce([[.2,0],[.2,.3]],e,20)),o.position.y=18.6;let l=new Qt;l.add(Ce([[.076,0],[.076,1.75],[0,2.03]],e,16));for(let p=0;p<4;p++){let g=Ce([[.078,.25+p*.38],[.078,.4+p*.38]],i,16);l.add(g)}l.position.y=18.9;let c=jn(.35,5),h=jn(.18,3),u=jn(.07,2);a.add(c),o.add(h),l.add(u);let f=new Qt;return f.add(s,a,o,l),{group:f,parts:{S1:s,S2:a,S3:o,S4:l},flames:{S1:[r],S2:[c],S3:[h],S4:[u]},length:21.2}}var Y2={v2:xd,bumper:W2,r7:X2,juno1:q2},vd=n=>(Y2[n.look]||xd)();var Cs=class{constructor(t,e,i,s=1){this.max=t,this.geo=new As,this.geo.setPositions(new Float32Array(t*6)),this.buf=this.geo.attributes.instanceStart.data,this.geo.instanceCount=0,this.mat=new Rs({color:e,linewidth:i,transparent:!0,opacity:s,depthWrite:!1}),this.mesh=new Qa(this.geo,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=4}set(t,e){let i=Math.max(0,Math.min(e-1,this.max)),s=this.buf.array;for(let r=0;r<i;r++){let a=r*3,o=r*6;s[o]=t[a],s[o+1]=t[a+1],s[o+2]=t[a+2],s[o+3]=t[a+3],s[o+4]=t[a+4],s[o+5]=t[a+5]}this.buf.needsUpdate=!0,this.geo.instanceCount=i}},uc=(n,t,e)=>{let i=Math.min(1,Math.max(0,(e-n)/(t-n)));return i*i*(3-2*i)};function yd(n,t){let e=new ir({canvas:n,antialias:!0,logarithmicDepthBuffer:!0,powerPreference:"high-performance"});e.setPixelRatio(Math.min(devicePixelRatio||1,2));let i=new Ta,s=new Ze(46,1,.5,3e9),r=new Ha("#fff4e0",2.7),a=new Va("#9db4d6",.75);i.add(r,r.target,a);let o=new Qt,l=new Qt;o.matrixAutoUpdate=l.matrixAutoUpdate=!1,i.add(o,l);let c=ud(),h=dd(c),u=pd(),f=md();h.renderOrder=-6,o.add(h,u),l.add(f);let p=new Qt;i.add(p);let g={flown:new Cs(9200,"#ffc857",2.5),ahead:new Cs(200,"#6fd3ff",2,.9),orbit:new Cs(200,"#6fd3ff",2,.9),ground:new Cs(9200,"#ffffff",1.5,.45)},_=new Qt;_.add(g.orbit.mesh),l.add(_);let m;{let y=document.createElement("canvas");y.width=y.height=64;let U=y.getContext("2d"),D=U.createRadialGradient(32,32,2,32,32,32);D.addColorStop(0,"rgba(255,255,255,0.9)"),D.addColorStop(.5,"rgba(235,235,235,0.45)"),D.addColorStop(1,"rgba(220,220,220,0)"),U.fillStyle=D,U.fillRect(0,0,64,64),m=new Jn(y)}let d={renderer:e,scene:i,camera:s,mode:"chase",orbital:!1,flight:null,rocket:null,site:null,ground:null,chase:{az:200,el:6,dist:60},mapCam:{az:0,el:14,zoom:1},centre:{az:0,el:25,zoom:1},focus:null,pred:null,labels:{},puffs:[],lastPuff:0,seen:0,debris:[],tLines:0,sunEci:[1,0,0]},S=(y,U)=>{let D=document.createElement("div");return D.className=U,D.innerHTML="<span></span>",D.style.display="none",t.appendChild(D),d.labels[y]=D,D};S("ap","ap"),S("pe","pe"),S("hit","hit"),S("me","me");for(let y of Object.values(zn))S(`site-${y.id}`,"site").firstChild.textContent=y.name;d.resize=()=>{let y=n.clientWidth||innerWidth,U=n.clientHeight||innerHeight;e.setSize(y,U,!1),s.aspect=y/U,s.updateProjectionMatrix();for(let D of Object.values(g))D.mat.resolution.set(y,U);d.w=y,d.h=U},addEventListener("resize",d.resize),d.resize(),d.setFlight=(y,U)=>{d.flight=y,d.plan=U,d.site=y.site,d.seen=0,d.pred=null,d.focus=null,d.ground&&o.remove(d.ground),p.clear(),d.rocket=vd(y.vehicle),p.add(d.rocket.group),d.ground=fd(y.site,c,d.rocket.length);let D=d.ground.userData.pad;d.ground.position.set(D[0],D[1],D[2]),o.add(d.ground),d.ground.add(g.flown.mesh,g.ahead.mesh,g.ground.mesh);for(let K of Object.values(g))K.set([],0);for(let K of d.puffs)d.ground.add(K);for(let K of d.puffs)K.visible=!1;d.debris=[],d.orbital=!!U?.real?.some(K=>K[0]==="perigee");let V=U?.program?.azimuth??y.site.azimuth??90,C=d.rocket.length;d.chase.az=V+100,d.chase.el=5,d.chase.dist=C*(s.aspect<1?3.4:2.3),d.mapCam.az=V+90,d.mapCam.el=12,d.mapCam.zoom=1,d.centre.zoom=1,d.centre.el=25,d.centre.az=null;let{e:N,n:H,u:Q}=wn(y.r),k=(V+60)*te,Z=ei(Ue(H,Math.cos(k)),Ue(N,Math.sin(k)));d.sunEci=le(ei(Ue(Z,Math.cos(42*te)),Ue(Q,Math.sin(42*te))))};let x=new Map,w=0,A=()=>d.mode==="chase"?d.chase:d.orbital?d.centre:d.mapCam,T=y=>{let U=A();d.mode==="chase"?U.dist=Math.min(4e7,Math.max(d.rocket.length*.8,U.dist*y)):U.zoom=Math.min(30,Math.max(.05,U.zoom*y))};n.addEventListener("pointerdown",y=>{if(n.setPointerCapture(y.pointerId),x.set(y.pointerId,[y.clientX,y.clientY]),x.size===2){let[U,D]=[...x.values()];w=Math.hypot(U[0]-D[0],U[1]-D[1])}}),n.addEventListener("pointermove",y=>{let U=x.get(y.pointerId);if(!U)return;let D=y.clientX-U[0],V=y.clientY-U[1];if(U[0]=y.clientX,U[1]=y.clientY,x.size===1){let C=A();C.az=(C.az??0)-D*.35,C.el=Math.min(89,Math.max(-89,C.el+V*.3))}else if(x.size===2){let[C,N]=[...x.values()],H=Math.hypot(C[0]-N[0],C[1]-N[1]);w>0&&H>0&&T(w/H),w=H}});let R=y=>{x.delete(y.pointerId),w=0};n.addEventListener("pointerup",R),n.addEventListener("pointercancel",R),n.addEventListener("wheel",y=>{y.preventDefault(),T(Math.exp(y.deltaY*.0015))},{passive:!1}),d.zoomBy=T;let F=new he,M=new L;return d.update=(y,U)=>{let D=d.flight;if(!D)return;let V=$c(D,y.t),C=(D.opts.theta0||0)+ge*V.t,N=D.tm,H=d.rocket.length,Q=D.phase==="flight"&&D.tm.alt>D.ground+30;d.pred=Q?Fc(V.r,V.v,V.t,{ground:D.ground,theta0:D.opts.theta0}):null;let k=d.pred&&!d.pred.escape?d.pred:null,Z=pn(D.padEcef,C);!d.orbital&&k&&(k.orbit||k.el.ra-6378137>15e5)&&(d.orbital=!0);let K,W,ot,q=[0,0,0],et=s.fov*te/2,ft=Math.atan(Math.tan(et)*s.aspect),Tt=(O,ht)=>{let wt=O.az*te,vt=O.el*te;return[ht*Math.cos(vt)*Math.sin(wt),ht*Math.sin(vt),-ht*Math.cos(vt)*Math.cos(wt)]};if(d.mode==="chase"){let{e:O,n:ht,u:wt}=wn(V.r);K=V.r,W=[O,wt,Ue(ht,-1)];let vt=[$t(D.dir,W[0]),$t(D.dir,W[1]),$t(D.dir,W[2])];q=Ue(vt,H*.5),ot=ei(q,Tt(d.chase,d.chase.dist));let yt=-(N.alt-D.ground)+2.5;ot[1]<yt&&(ot[1]=yt)}else if(d.orbital){if(K=[0,0,0],W=[[1,0,0],[0,0,1],[0,-1,0]],d.centre.az==null){let ht=[$t(V.r,W[0]),$t(V.r,W[1]),$t(V.r,W[2])];d.centre.az=Math.atan2(ht[0],-ht[2])/te+25}let O=Math.max(6378137*1.25,k?.orbit?k.el.ra:0);ot=Tt(d.centre,O/Math.tan(Math.min(et,ft))*1.12*d.centre.zoom)}else{let O=k?.impact?.ecef||D.landEcef||pn(V.r,-C),ht=Gi(O,D.padEcef),wt=Math.max(k?.apo?k.el.ra-6378137:0,D.stats.maxAlt,N.alt,2e4),vt=le(ei(le(D.padEcef),le(O))),yt=Ue(vt,ze(vt)+D.ground),dt={p:yt,half:Math.max(ht*.62,15e3),top:wt},It=d.focus?Math.min(1,U*3):1;d.focus||=dt,d.focus={p:d.focus.p.map((st,I)=>st+(dt.p[I]-st)*It),half:d.focus.half+(dt.half-d.focus.half)*It,top:d.focus.top+(dt.top-d.focus.top)*It},K=pn(d.focus.p,C);let{e:Wt,n:Ut,u:Rt}=wn(K);W=[Wt,Rt,Ue(Ut,-1)],q=[0,d.focus.top*.42,0],ot=ei(q,Tt(d.mapCam,Math.max(d.focus.half/Math.tan(ft),d.focus.top*.62/Math.tan(et))*1.18*d.mapCam.zoom)),ot[1]<500&&(ot[1]=500)}let _t=O=>{let ht=[O[0]-K[0],O[1]-K[1],O[2]-K[2]];return[$t(ht,W[0]),$t(ht,W[1]),$t(ht,W[2])]},Dt=O=>[$t(O,W[0]),$t(O,W[1]),$t(O,W[2])],Nt=Math.cos(C),bt=Math.sin(C),Lt=_t([0,0,0]);F.set(W[0][0]*Nt+W[0][1]*bt,-W[0][0]*bt+W[0][1]*Nt,W[0][2],Lt[0],W[1][0]*Nt+W[1][1]*bt,-W[1][0]*bt+W[1][1]*Nt,W[1][2],Lt[1],W[2][0]*Nt+W[2][1]*bt,-W[2][0]*bt+W[2][1]*Nt,W[2][2],Lt[2],0,0,0,1),o.matrix.copy(F),o.matrixWorldNeedsUpdate=!0,F.set(W[0][0],W[0][1],W[0][2],Lt[0],W[1][0],W[1][1],W[1][2],Lt[1],W[2][0],W[2][1],W[2][2],Lt[2],0,0,0,1),l.matrix.copy(F),l.matrixWorldNeedsUpdate=!0,f.position.set(K[0],K[1],K[2]);let P=_t(V.r),lt=le(Dt(D.dir)),J=Be(lt,[0,0,1]);Kt(J)<.05&&(J=Be(lt,[1,0,0])),J=le(J);let rt=Be(J,lt);p.position.set(P[0],P[1],P[2]),F.makeBasis(M.set(...J).clone(),new L(...lt),new L(...rt)),p.quaternion.setFromRotationMatrix(F),p.visible=d.mode==="chase"||!d.orbital;let j=.85+.3*Math.random(),At=1+Math.min(1.8,Math.max(0,N.alt)/3e4),gt=1+Math.min(1.5,Math.max(0,N.alt)/4e4);for(D.stages.forEach(O=>{for(let ht of d.rocket.flames[O.id]||[])ht.visible=O.lit&&D.phase==="flight",ht.scale.set(At,j*gt,At)});d.seen<D.events.length;d.seen++){let O=D.events[d.seen];if(O.name!=="separation")continue;let ht=d.rocket.parts[O.stage];ht&&d.debris.push({part:ht,t0:V.t,a:Math.max(4,N.g*9.8),y0:ht.position.y})}for(let O of d.debris){let ht=Math.max(0,V.t-O.t0);O.part.position.y=O.y0-.5*O.a*ht*ht-3*ht,O.part.visible=ht<60&&O.part.position.y>-4e4,O.part.userData.spread&&O.part.children.forEach((wt,vt)=>{let yt=vt*Math.PI/2,dt=2.55+4*ht+1.5*ht*ht;wt.position.x=Math.cos(yt)*dt,wt.position.z=Math.sin(yt)*dt})}let b=[0,1,2].map(O=>K[O]+ot[0]*W[0][O]+ot[1]*W[1][O]+ot[2]*W[2][O]),v=Math.max(0,Kt(b)-ze(b)),B=Math.exp(-v/8500),it=Dt(d.sunEci);r.position.set(it[0]*1e7,it[1]*1e7,it[2]*1e7),r.target.position.set(0,0,0);let nt=Math.pow(B,.75);e.setClearColor(new Gt(.3*nt+.004,.52*nt+.006,.86*nt+.014),1),f.material.color.setScalar(Math.min(1,Math.max(0,(1-Math.pow(B,.4)-.3)/.7)));let tt=pn(d.sunEci,-C);u.userData.mats[0].uniforms.sun.value.set(tt[0],tt[1],tt[2]),u.userData.mats[1].uniforms.sun.value.set(tt[0],tt[1],tt[2]),u.userData.mats[0].uniforms.k.value=uc(3e4,12e4,v),u.userData.mats[1].uniforms.k.value=uc(4e4,22e4,v);let Et=1-uc(25e3,9e4,v);if(d.ground.userData.aprons[0].material.opacity=Et,d.ground.userData.aprons[1].material.opacity=Et,d.ground.userData.aprons[0].visible=d.ground.userData.aprons[1].visible=Et>.01,d.ground.userData.local.visible=v<3e5,D.phase==="flight"&&N.thrust>0&&N.alt<45e3&&V.t-d.lastPuff>.07*(1+N.speed/300)){d.lastPuff=V.t;let O=d.puffs.find(ht=>!ht.visible);if(!O&&d.puffs.length<140&&(O=new Ra(new sr({map:m,transparent:!0,depthWrite:!1})),O.renderOrder=5,d.puffs.push(O),d.ground.add(O)),O){let ht=pn(V.r,-C),wt=D.padEcef,vt=Ue(pn(D.dir,-C),-H*.25);O.position.set(ht[0]-wt[0]+vt[0],ht[1]-wt[1]+vt[1],ht[2]-wt[2]+vt[2]),O.userData.t0=V.t,O.userData.k=H/14*(1+N.alt/8e3),O.visible=!0}}else V.t<d.lastPuff&&(d.lastPuff=V.t);for(let O of d.puffs){if(!O.visible)continue;let ht=V.t-O.userData.t0;if(ht>14||ht<0){O.visible=!1;continue}O.scale.setScalar(O.userData.k*(5+9*ht)),O.material.opacity=.55*(1-ht/14)}if(d.tLines-=U,d.tLines<=0){d.tLines=.12;let O=D.padEcef,ht=D.track,wt=ht.length,vt=new Float32Array((wt+1)*3),yt=new Float32Array((wt+1)*3),dt=Math.min(4e3,Math.max(40,v*.01)),It=(Ut,Rt)=>{vt[Ut*3]=Rt[0]-O[0],vt[Ut*3+1]=Rt[1]-O[1],vt[Ut*3+2]=Rt[2]-O[2];let st=(ze(Rt)+dt+(d.orbital?0:D.ground))/Kt(Rt);yt[Ut*3]=Rt[0]*st-O[0],yt[Ut*3+1]=Rt[1]*st-O[1],yt[Ut*3+2]=Rt[2]*st-O[2]};for(let Ut=0;Ut<wt;Ut++)It(Ut,[ht[Ut][1],ht[Ut][2],ht[Ut][3]]);let Wt=D.tLiftoff!=null&&D.phase==="flight";if(Wt&&It(wt,pn(V.r,-C)),g.flown.set(vt,wt+(Wt?1:0)),g.ground.set(yt,wt+(Wt?1:0)),g.ground.mesh.visible=d.mode==="map"||v>4e4,k&&!k.orbit){let Ut=new Float32Array(k.points.length*3);k.points.forEach((Rt,st)=>{Ut[st*3]=Rt.ecef[0]-O[0],Ut[st*3+1]=Rt.ecef[1]-O[1],Ut[st*3+2]=Rt.ecef[2]-O[2]}),g.ahead.set(Ut,k.points.length),g.ahead.mesh.visible=!0}else g.ahead.mesh.visible=!1;if(k&&k.orbit){let Ut=new Float32Array(k.points.length*3);k.points.forEach((Rt,st)=>{Ut[st*3]=Rt.r[0]-V.r[0],Ut[st*3+1]=Rt.r[1]-V.r[1],Ut[st*3+2]=Rt.r[2]-V.r[2]}),g.orbit.set(Ut,k.points.length),_.position.set(V.r[0],V.r[1],V.r[2]),g.orbit.mesh.visible=!0,d.orbitR0=V.r}else g.orbit.mesh.visible=!1}let ut=d.mode==="map"?3:2;g.flown.mat.linewidth=ut,g.ahead.mat.linewidth=ut-.5,g.orbit.mat.linewidth=ut-.5,s.position.set(ot[0],ot[1],ot[2]),s.up.set(0,1,0),s.lookAt(q[0],q[1],q[2]),s.updateMatrixWorld(),e.render(i,s);let xt=(O,ht,wt)=>{let vt=d.labels[O];if(!ht){vt.style.display="none";return}let yt=co(ht,ot),dt=Kt(yt),It=co(Lt,ot),Wt=$t(It,yt)/dt,Ut=Wt>0&&Wt<dt&&Math.sqrt(Math.max(0,$t(It,It)-Wt*Wt))<Vi-3e4;if(M.set(ht[0],ht[1],ht[2]).project(s),Ut||M.z>1||Math.abs(M.x)>1.05||Math.abs(M.y)>1.05){vt.style.display="none";return}vt.style.display="",vt.style.transform=`translate(${((M.x+1)/2*d.w).toFixed(1)}px, ${((1-M.y)/2*d.h).toFixed(1)}px)`,wt!=null&&vt.firstChild.textContent!==wt&&(vt.firstChild.textContent=wt)},Pt=O=>_t(pn(O,C)),Bt=d.mode==="map"||d.chase.dist>3e4;xt("ap",k?.apo&&Bt?k.orbit?_t(k.apo.r):Pt(k.apo.ecef):null,k?.apo?`Ap ${d.fmt(k.el.ra-6378137)}`:""),xt("pe",k?.orbit&&Bt?_t(k.peri.r):null,k?.orbit?`Pe ${d.fmt(k.el.rp-6378137)}`:""),xt("hit",k&&!k.orbit&&k.impact&&Bt?Pt(k.impact.ecef):D.landEcef&&Bt?Pt(D.landEcef):null,D.landEcef?"Impact":k?.impact?`Impact in ${d.fmtT(k.impact.dt)}`:""),xt("me",Bt&&D.phase!=="pad"?P:null,D.vehicle.name.split(" / ")[0]);for(let O of Object.values(zn))xt(`site-${O.id}`,d.mode==="map"&&d.orbital?Pt(bi(O.lat,O.lon,O.height)):null)},d.fmt=y=>`${(y/1e3).toFixed(0)} km`,d.fmtT=y=>`${y.toFixed(0)} s`,d}var xi=!1,dc=n=>{xi=!!n},fc=()=>xi,Pe=(n,t=0)=>n.toLocaleString("en-US",{minimumFractionDigits:t,maximumFractionDigits:t});function Sn(n){if(!Number.isFinite(n))return["escape",""];if(xi){let t=n/.3048,e=n/1609.344;return Math.abs(e)<5?[Pe(t),"ft"]:[Pe(e,Math.abs(e)<1e3?1:0),"mi"]}return Math.abs(n)<1e4?[Pe(n),"m"]:[Pe(n/1e3,Math.abs(n)<1e6?1:0),"km"]}var vi=n=>xi?[Pe(n*2.2369363),"mph"]:[Pe(n),"m/s"],pc=n=>xi?[Pe(n*2.2046226),"lb"]:n>=2e4?[Pe(n/1e3,1),"t"]:[Pe(n),"kg"],to=n=>xi?[Pe(n*.0208854),"psf"]:[Pe(n/1e3,1),"kPa"],Md=n=>xi?[Pe(n*.2248089/1e3),"klbf"]:[Pe(n/1e3),"kN"],we=n=>xi?`${Pe(n*2.2369363)} mph`:`${Pe(n/1e3,2)} km/s`,mc=n=>{let t=Math.abs(n),e=Math.floor(t/3600),i=Math.floor(t/60)%60,s=Math.floor(t)%60,r=a=>String(a).padStart(2,"0");return`T${n<0?"-":"+"}${e?`${e}:`:""}${r(i)}:${r(s)}`},Qn=n=>n>=10800?`${Pe(n/3600,2)} h`:n>=600?`${Pe(n/60,1)} min`:`${Pe(n,n<100?1:0)} s`,bn=([n,t])=>`${n}<small>${t}</small>`,Qe=([n,t])=>`${n} ${t}`.trim();var St=n=>document.getElementById(n),Le=new URLSearchParams(location.search),Ie=document.body,yi=Object.values(bo).flatMap(n=>n.flights.map(t=>({vehicle:n,plan:t}))),gc=[1,2,5,10,25,50,100,250,1e3,5e3,25e3],Ps=9400,Z2=10500,Ed={get:n=>{try{return localStorage.getItem(`space-race:${n}`)}catch{return null}},set:(n,t)=>{try{localStorage.setItem(`space-race:${n}`,t)}catch{}}},ti=yd(St("view"),St("labels"));ti.fmt=n=>Qe(Sn(n));ti.fmtT=n=>Qn(n);var $={world:null,flight:null,view:ti,pick:yi[0],siteId:null,manual:!1,warp:1,paused:!1,reported:!1,seen:0,keys:new Set,VEHICLES:bo,SITES:zn,FLIGHTS:yi};window.game=$;$.select=(n,t)=>{$.pick=n,$.siteId=t&&n.plan.sites.includes(t)||t&&zn[t]?t:n.plan.site,$.prepare(),dr()};$.prepare=()=>{let{vehicle:n,plan:t}=$.pick,e=zn[$.siteId||t.site];$.world=Yc(),$.flight=$.world.add({vehicle:n,site:e,program:$.manual?{type:"manual"}:t.program}),$.manual&&($.flight.control.heading=t.program.azimuth??e.azimuth??90),$.ideal=mo(n),$.reported=!1,$.seen=0,$.paused=!1,$.setWarp(1),ti.setFlight($.flight,t),ti.mode="chase",Ie.classList.remove("flying","reporting","reported"),Ie.classList.toggle("manual",$.manual),St("m-title").textContent=n.name,St("m-sub").textContent=`${e.name} \xB7 ${$.manual?"flown by hand":t.date}`,St("ticker").innerHTML="",St("b-go").style.display="",St("b-view").textContent="Map",St("b-pause").textContent="\u275A\u275A",xc(!0)};$.launch=()=>{$.flight.phase==="pad"&&(Ie.classList.remove("picking"),Ie.classList.add("flying"),$.world.launch($.flight),St("b-go").style.display="none")};$.restart=()=>{let n=Ie.classList.contains("picking");$.prepare(),Ie.classList.toggle("picking",n)};$.setWarp=n=>{$.warp=n,St("warp").textContent=`\xD7${n.toLocaleString("en-US")}`};$.warpStep=n=>$.setWarp(gc[Math.min(gc.length-1,Math.max(0,gc.findIndex(t=>t>=$.warp)+n))]);$.pause=(n=!$.paused)=>{$.paused=n,St("b-pause").textContent=n?"\u25B6":"\u275A\u275A"};$.setView=(n=ti.mode==="chase"?"map":"chase")=>{ti.mode=n,ti.focus=null,St("b-view").textContent=n==="chase"?"Map":"Rocket"};$.takeControl=()=>{let n=$.flight;if($.manual)return;$.manual=!0,Ie.classList.add("manual");let t=Ds(n.r,n.dir);n.control.pitch=Math.round(t.pitch),n.control.heading=n.gs.az??Math.round(t.heading),n.control.mode="hold",n.guidance=vr({type:"manual"},{site:n.site}),n.program={type:"manual"},St("m-sub").textContent=`${n.site.name} \xB7 flown by hand`,_c()};$.stage=()=>Mo($.flight,"stage");$.cutoff=()=>Mo($.flight,"cutoff");$.jump=n=>{$.flight.phase==="pad"&&$.launch(),$.world.advance(n-($.world.t-$.flight.tLiftoff))};var _c=()=>{let n=$.flight.control.mode;St("b-pro").classList.toggle("on",n!=="hold"),St("b-hold").classList.toggle("on",n==="hold")};function dr(){let{vehicle:n,plan:t}=$.pick;St("flights").innerHTML=yi.map((e,i)=>{let s=mo(e.vehicle).total,r=e.vehicle.nation==="USSR"?"ussr":e.vehicle.nation==="USA"?"usa":"both";return`<button data-i="${i}" class="${e===$.pick?"on":""}"><i class="tag ${r}"></i><div><b>${e.vehicle.name}: ${e.plan.name}</b><span class="date">${e.plan.title}, ${e.plan.date}</span></div><div class="dvm">${(s/1e3).toFixed(1)} km/s<small>${s>Ps?"can orbit":`${Math.round(s/Ps*100)}% of orbit`}</small></div></button>`}).join(""),St("story").textContent=t.story,St("sites").innerHTML="<label>Launch site</label>"+t.sites.map(e=>`<button class="chip ${e===($.siteId||t.site)?"on":""}" data-site="${e}">${zn[e].name}${e===t.site?" (as flown)":""}</button>`).join(""),St("c-auto").classList.toggle("on",!$.manual),St("c-manual").classList.toggle("on",$.manual),St("c-metric").classList.toggle("on",!fc()),St("c-imperial").classList.toggle("on",fc())}St("flights").addEventListener("click",n=>{let t=n.target.closest("button");t&&$.select(yi[+t.dataset.i])});St("sites").addEventListener("click",n=>{let t=n.target.closest("button");t&&$.select($.pick,t.dataset.site)});var wd=n=>{$.manual=n,$.prepare(),Ie.classList.add("picking"),dr()};St("c-auto").onclick=()=>wd(!1);St("c-manual").onclick=()=>wd(!0);var Td=n=>{dc(n),Ed.set("units",n?"imperial":"metric"),dr(),xc(!0)};St("c-metric").onclick=()=>Td(!1);St("c-imperial").onclick=()=>Td(!0);St("p-pad").onclick=()=>Ie.classList.remove("picking");St("p-launch").onclick=()=>$.launch();St("b-go").onclick=()=>$.launch();St("b-pause").onclick=()=>$.pause();St("b-slow").onclick=()=>$.warpStep(-1);St("b-fast").onclick=()=>$.warpStep(1);St("b-view").onclick=()=>$.setView();St("b-take").onclick=()=>$.takeControl();St("b-menu").onclick=()=>{Ie.classList.remove("reporting"),Ie.classList.add("picking"),dr()};St("b-report").onclick=()=>no();St("r-close").onclick=()=>Ie.classList.remove("reporting");St("r-again").onclick=()=>{$.prepare(),Ie.classList.remove("picking")};St("r-next").onclick=()=>{$.prepare(),Ie.classList.add("picking"),dr()};St("b-cut").onclick=()=>$.cutoff();St("b-stage").onclick=()=>$.stage();St("b-pro").onclick=()=>{let n=$.flight.control;n.mode=$.flight.tm.alt>6e4?"prograde":"surface",_c()};St("b-hold").onclick=()=>{let n=$.flight,t=Ds(n.r,n.dir);n.control.pitch=Math.round(t.pitch),n.control.heading=Math.round(t.heading),n.control.mode="hold",_c()};for(let[n,t]of[["b-up","up"],["b-down","down"],["b-left","left"],["b-right","right"]]){let e=St(n),i=r=>{r.preventDefault(),$.keys.add(t),e.classList.add("on")},s=()=>{$.keys.delete(t),e.classList.remove("on")};e.addEventListener("pointerdown",i),e.addEventListener("pointerup",s),e.addEventListener("pointerleave",s),e.addEventListener("pointercancel",s)}var eo={KeyW:"up",ArrowUp:"up",KeyS:"down",ArrowDown:"down",KeyA:"left",ArrowLeft:"left",KeyD:"right",ArrowRight:"right"};addEventListener("keydown",n=>{if(eo[n.code]){$.keys.add(eo[n.code]),n.preventDefault();return}n.repeat||(n.code==="Space"?(n.preventDefault(),$.flight.phase==="pad"?$.launch():$.manual&&$.stage()):n.code==="KeyP"?$.pause():n.code==="Comma"?$.warpStep(-1):n.code==="Period"?$.warpStep(1):n.code==="KeyM"?$.setView():n.code==="KeyR"?$.restart():n.code==="KeyX"&&$.manual?$.cutoff():n.code==="KeyG"&&$.manual?St("b-pro").onclick():n.code==="KeyH"&&$.manual?St("b-hold").onclick():n.code==="Escape"&&St("b-menu").onclick())});addEventListener("keyup",n=>{eo[n.code]&&$.keys.delete(eo[n.code])});var J2={liftoff:()=>"Lift-off",mach1:n=>`Mach 1 at ${Qe(Sn(n.alt))}`,maxq:n=>`Max Q: ${Qe(to(n.q))} at ${Qe(Sn(n.alt))}`,burnout:(n,t)=>`${t} burnout: ${Qe(vi(n.speed))}`,cutoff:(n,t)=>`${t} engine cutoff: ${Qe(vi(n.speed))}`,separation:(n,t)=>`${t} dropped`,ignition:(n,t)=>n.t>.01?`${t} ignition`:null,space:()=>"Above 100 km: in space",apogee:n=>`Highest point: ${Qe(Sn(n.alt))} above the ground`,entry:()=>"Back down through 100 km",impact:n=>`Impact ${Qe(Sn(n.downrange))} downrange, ${Qe(vi(n.speed))}`,payload:n=>`${n.payload} released`,fairing:()=>"Fairing away"},Sd=0;function xc(n){let t=$.flight,e=Jc(t),i=(u,f)=>{let p=St(u);p._h!==f&&(p._h=f,p.innerHTML=f)};i("clock",mc(e.t)),i("t-alt",bn(Sn(e.alt))),i("t-spd",bn(vi(e.speed))),i("t-vs",bn(vi(e.vs))),i("t-dr",bn(Sn(e.downrange)));let s=t.phase==="flight"&&e.alt>t.ground+30;i("t-ap",s?bn(Sn(e.apoAlt)):"\u2013"),i("t-pe",s?e.periAlt<-1e6?"<small>under ground</small>":bn(Sn(e.periAlt)):"\u2013"),i("t-in",bn(vi(e.inertial))),i("t-mach",e.alt<9e4?e.mach.toFixed(2):"\u2013"),i("t-q",bn(to(e.q))),i("t-g",`${e.g.toFixed(2)}<small>g</small>`),i("t-mass",bn(pc(e.mass)));let r=t.nums.reduce((u,f)=>u+f.prop,0);i("t-prop",`${Math.round(e.prop/r*100)}<small>%</small>`),i("t-pitch",`${e.pitch.toFixed(1)}<small>\xB0</small>`),i("t-hdg",e.pitch>89.5?"\u2013":`${e.heading.toFixed(0).padStart(3,"0")}<small>\xB0</small>`),i("t-thr",bn(Md(e.thrust)));let a=t.stages.filter(u=>u.lit).map(u=>t.vehicle.stages.find(f=>f.id===u.id).name.split(":")[0].split(",")[0]);i("t-stage",`<small style="margin:0;color:inherit;font-size:11px">${a.length?a.join(" + "):t.phase==="pad"?"ready":"engines off"}</small>`);let o=St("state"),l=s&&e.periAlt>12e4&&!a.length,c=$.paused?"PAUSED":t.phase==="pad"?"ON THE PAD":t.phase==="landed"?"IMPACT":a.length?"POWERED FLIGHT":l?"IN ORBIT":t.rail?"COASTING (ON RAILS)":"COASTING";o.textContent!==c&&(o.textContent=c),o.className=t.phase==="landed"?"bad":l||a.length?"":"warn";let h=u=>`${Math.min(100,Math.max(0,u/Z2*100)).toFixed(2)}%`;for(St("dv-have").style.width=h($.ideal.total),St("dv-spent").style.width=h(e.dv),St("dv-kept").style.width=h(Math.min(e.dv,e.speed)),St("dv-orbit").style.left=h(Ps),i("dv-head",`spent ${we(e.dv)} of ${we($.ideal.total)}`),i("dv-need",`orbit \u2248 ${we(Ps)}`),i("dv-loss",`<b>${we(e.speed)}</b> speed now \xB7 lost to gravity ${Math.round(e.gravityLoss)}, air ${Math.round(e.dragLoss)}, steering ${Math.round(e.steerLoss)} m/s`),$.manual&&i("man-read",`pitch ${t.control.mode==="hold"?`${t.control.pitch.toFixed(0)}\xB0`:"prograde"} \xB7 heading ${String(Math.round(t.control.heading??0)).padStart(3,"0")}\xB0`);$.seen<t.events.length;$.seen++){let u=t.events[$.seen],f=u.stage?t.vehicle.stages.find(_=>_.id===u.stage)?.name.split(":")[0]:"",p=J2[u.name]?.(u,f);if(!p)continue;let g=document.createElement("div");for(g.textContent=`${mc(u.t)}  ${p}`,St("ticker").appendChild(g);St("ticker").children.length>4;)St("ticker").firstChild.remove();setTimeout(()=>g.remove(),9e3)}if(!$.reported&&t.phase!=="pad"){let u=t.events[t.events.length-1];(t.phase==="landed"||l&&(u.name==="payload"||e.t-u.t>45))&&($.reported=!0,$.warp>100&&$.setWarp(1),no())}}function no(){let n=$.flight,{vehicle:t,plan:e}=$.pick,i=Zc(n),s=!$.manual&&n.site.id===e.site,r=[],a=e.real.some(g=>g[0]==="perigee"),o=g=>Qe(Sn(g)),l=g=>Qe(vi(g)),c={apogee:()=>o(a&&i.inOrbit?i.orbit.apoAlt:i.apogee),perigee:()=>i.orbit.periAlt<0?`${o(-i.orbit.periAlt)} under ground`:o(i.orbit.periAlt),range:()=>i.range==null?"still flying":o(i.range),flightTime:()=>i.flightTime==null?"still flying":Qn(i.flightTime),burnTime:()=>i.firstBurnout?Qn(i.firstBurnout.t):"\u2013",burnoutSpeed:()=>i.burnout?l(i.burnout.speed):"\u2013",cutoff:()=>i.burnout?Qn(i.burnout.t):"\u2013",inclination:()=>`${i.orbit.inc.toFixed(2)}\xB0`,period:()=>i.inOrbit?Qn(i.orbit.period):"no orbit"},h={apogee:a?"Apogee (highest point of the orbit)":"Apogee (highest point)",perigee:"Perigee (lowest point of the orbit)",range:"Range",flightTime:"Time of flight",burnTime:"Engine burn",burnoutSpeed:"Speed at burnout",cutoff:"Final engine cutoff",inclination:"Inclination",period:"Once round"},u={m:o,"m/s":l,s:Qn,deg:g=>`${g}\xB0`};for(let[g,_,m]of e.real)r.push([h[g],c[g](),u[m](_)]);r.push(["Top speed over the ground",l(i.maxSpeed),""],["Max Q on the way up (air pressure on the nose)",i.maxq?Qe(to(i.maxq.q)):"\u2013",""],["Most g",`${i.maxG.toFixed(1)} g`,""],["Mass at lift-off",Qe(pc(i.liftoffMass)),""],["Delta-v spent",we(i.losses.dv),""],["  lost to gravity",we(i.losses.gravity),""],["  lost to the air",we(i.losses.drag),""],["  lost to steering",we(i.losses.steer),""]),St("r-title").textContent=`${e.title}: flight report`,St("r-verdict").className=`verdict ${i.inOrbit?"ok":""}`,St("r-verdict").textContent=i.inOrbit?`IN ORBIT: ${o(i.orbit.periAlt)} \xD7 ${o(i.orbit.apoAlt)}, once round every ${Qn(i.orbit.period)}`:n.phase==="landed"?`Came down ${o(i.range)} away after ${Qn(i.flightTime)}. Highest: ${o(i.apogee)}.`:`Still flying. Highest so far: ${o(i.apogee)}.`,St("r-rows").innerHTML=r.map(([g,_,m])=>`<tr><td>${g}</td><td>${_}</td><td class="real">${m}</td></tr>`).join("");let f=$.ideal.total,p=7800;St("r-why").innerHTML=i.inOrbit?`<div class="why"><b>Why it stays up.</b> It is moving sideways at ${we(Math.hypot(...n.v))}: so fast that the ground curves away beneath it as quickly as it falls. Getting there took ${we(i.losses.dv)} of delta-v; gravity took ${we(i.losses.gravity)} of that on the way up, the air ${we(i.losses.drag)}, steering ${we(i.losses.steer)}. The Earth's spin gave ${we((i.burnout?.inertial??0)-(i.burnout?.speed??0))} for free.</div>`:`<div class="why"><b>Why it can't reach orbit.</b> A low orbit needs about ${we(p)} sideways, and about ${we(Ps)} of delta-v once gravity and the air have taken their share. With its tanks full, in a vacuum, with no gravity at all, the ${t.name.split(" / ")[0]} has ${we(f)}: <b>${Math.round(f/Ps*100)}% of the way</b>. Its best speed on this flight was ${we(i.maxInertialSpeed)}. No way of steering it changes that: the rocket equation says a single stage that is ${Math.round((1-$.ideal.parts[0].m1/$.ideal.parts[0].m0)*100)}% propellant, with this engine, cannot do it.<br><br><b>What could.</b> Bigger, better engines, and <b>staging</b>: dropping empty tanks on the way. In 1957 the Soviet R-7 did it with five engines burning from the pad and four of them dropped on the way; in 1958 the American Juno I did it with four stages.</div>
       <div class="row" style="margin-top:8px"><button class="chip" data-go="r7">Fly the R-7 with Sputnik</button><button class="chip" data-go="juno1">Fly Juno I with Explorer 1</button>${t.id==="v2"?'<button class="chip" data-go="bumper">Try two stages: Bumper</button>':""}</div>`,St("r-note").textContent=`${e.realNote}${s?"":" (You flew it "+($.manual?"by hand":"from "+n.site.name)+": the real figures are for the flight as it was flown.)"}`,Ie.classList.add("reporting","reported"),Ie.classList.remove("picking")}St("r-why").addEventListener("click",n=>{let t=n.target.closest("[data-go]");t&&($.manual=!1,$.select(yi.find(e=>e.vehicle.id===t.dataset.go)),Ie.classList.remove("reporting"))});$.report=no;var bd=performance.now();function Ad(n){let t=Math.min(.1,(n-bd)/1e3);bd=n;let e=$.flight;if($.manual&&e.phase==="flight"&&!$.paused){let i=e.control,s=14*t,r=$.keys;r.size&&i.mode!=="hold"&&St("b-hold").onclick(),r.has("up")&&(i.pitch=Math.min(90,i.pitch+s)),r.has("down")&&(i.pitch=Math.max(-90,i.pitch-s)),r.has("left")&&(i.heading=(i.heading-s+360)%360),r.has("right")&&(i.heading=(i.heading+s)%360)}$.paused||$.world.advance(t*(e.phase==="pad"?1:$.warp),14),ti.update($.world,t),(Sd-=t)<=0&&(Sd=.1,xc()),requestAnimationFrame(Ad)}dc((Le.get("units")||Ed.get("units"))==="imperial");$.manual=Le.has("manual");var K2=yi.find(n=>n.vehicle.id===Le.get("rocket")&&(!Le.get("flight")||n.plan.id===Le.get("flight")))||yi.find(n=>n.vehicle.id===Le.get("rocket"))||yi[0];$.select(K2,Le.get("site"));(Le.has("rocket")||Le.has("auto")||Le.has("t"))&&Ie.classList.remove("picking");(Le.has("auto")||Le.has("t"))&&$.launch();Le.has("t")&&$.jump(+Le.get("t"));Le.has("warp")&&$.setWarp(Math.max(1,+Le.get("warp")||1));Le.get("view")==="map"&&$.setView("map");Le.has("report")&&no();requestAnimationFrame(Ad);})();
