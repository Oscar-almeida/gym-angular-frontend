(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{OJZh:function(t,e,i){"use strict";i.r(e),i.d(e,"InventarioModule",(function(){return xt}));var a=i("PVWW"),n=i("XNiG"),r=i("1G5W"),o=i("fXoL"),c=i("2Vo4"),s=i("kicF");let l=(()=>{class t{constructor(t){this._inventarioService=t,this.onInventariosCambios=new c.a([]),this.onInventarioCambios=new c.a(null)}resolve(t,e){return this.routeParams=t.params.id,new Promise(this.routeParams?(t,e)=>{Promise.all([this.ObtenerInvetarioPorId()]).then(()=>{t()},e)}:(t,e)=>{Promise.all([this.ObtenerInventario()]).then(()=>{t()},e)})}ObtenerInventario(){return new Promise((t,e)=>{this._inventarioService.ObtenerInvetario().subscribe(e=>{this.inventarios=e,this.onInventariosCambios.next(e),t(e)},t=>{})})}ObtenerInvetarioPorId(){return new Promise((t,e)=>{"nuevo"==this.routeParams?(this.onInventarioCambios.next(null),t(null)):this._inventarioService.ObtenerInvetarioPorId(parseInt(this.routeParams)).subscribe(e=>{this.inventario=e,this.onInventarioCambios.next(e),t(e)},t=>{})})}AgregarInventario(t){return this._inventarioService.AgregarInventario(t)}ModificarInventario(t,e){return this._inventarioService.ModificarInventario(t,e)}}return t.\u0275fac=function(e){return new(e||t)(o.Zb(s.f))},t.\u0275prov=o.Lb({token:t,factory:t.\u0275fac}),t})();var b=i("3Pt+"),d=i("tyNb"),m=i("dNgK"),p=i("B9zo"),u=i("XiUz"),h=i("bTqV"),v=i("NFeN"),f=i("ofXK"),g=i("wZkO"),x=i("EwFO"),w=i("kmnG"),D=i("qFsG");function U(t,e){if(1&t&&o.Qb(0,"img",25),2&t){const t=o.hc();o.oc("src",t.inventario.imagen,o.Gc)}}function V(t,e){1&t&&o.Qb(0,"img",25),2&t&&o.oc("src","assets/images/ecommerce/product-image-placeholder.png",o.Gc)}function I(t,e){if(1&t&&(o.Vb(0,"div",26),o.Qc(1),o.Ub()),2&t){const t=o.hc();o.Db(1),o.Sc(" ",t.inventario.nombre," ")}}function S(t,e){1&t&&(o.Vb(0,"div",26),o.Qc(1," Nuevo inventario "),o.Ub())}function y(t,e){if(1&t){const t=o.Wb();o.Vb(0,"button",27),o.dc("click",(function(){return o.Ec(t),o.hc().CrearInventario()})),o.Vb(1,"span"),o.Qc(2,"AGREGAR"),o.Ub(),o.Ub()}if(2&t){const t=o.hc();o.oc("disabled",t.inventarioForm.invalid)}}function C(t,e){if(1&t){const t=o.Wb();o.Vb(0,"button",27),o.dc("click",(function(){return o.Ec(t),o.hc().ModificarInventario()})),o.Vb(1,"span"),o.Qc(2,"GUARDAR"),o.Ub(),o.Ub()}if(2&t){const t=o.hc();o.oc("disabled",t.inventarioForm.invalid||t.inventarioForm.pristine)}}const _=function(){return{delay:"50ms",scale:"0.2"}},O=function(t){return{value:"*",params:t}},Q=function(){return{delay:"100ms",x:"-25px"}};let k=(()=>{class t{constructor(t,e,i,a){this._inventarioResolveService=t,this._formBuilder=e,this._router=i,this._matSnackBar=a,this._unsubscribeAll=new n.a}ngOnInit(){this._inventarioResolveService.onInventarioCambios.pipe(Object(r.a)(this._unsubscribeAll)).subscribe(t=>{t?(this.pageType="editar",this.inventario=t):(this.pageType="nuevo",this.inventario={id:null,cantidadDisponible:null,cantidadTotal:null,descripcion:null,fechaCreacion:null,fechaModificacion:null,nombre:null,imagen:null}),this.inventarioForm=this.CrearFormulario()})}ngOnDestroy(){this._unsubscribeAll.next(),this._unsubscribeAll.complete()}CrearFormulario(){return this._formBuilder.group({nombre:[this.inventario.nombre],descripcion:[this.inventario.descripcion],cantidadTotal:[this.inventario.cantidadTotal],cantidadDisponible:[this.inventario.cantidadDisponible],imagen:[this.inventario.imagen]})}CrearInventario(){const t=this.inventarioForm.getRawValue();this._inventarioResolveService.AgregarInventario(t).pipe(Object(r.a)(this._unsubscribeAll)).subscribe(t=>{this._inventarioResolveService.onInventarioCambios.next(t),this._matSnackBar.open("Inventario creado","Ok",{verticalPosition:"bottom",horizontalPosition:"right",duration:5e3}),this._router.navigate(["/app/inventario"])},t=>{this._matSnackBar.open("\xa1Error! Intenta de nuevo","Ok",{verticalPosition:"bottom",horizontalPosition:"right",duration:5e3})})}ModificarInventario(){const t=this.inventarioForm.getRawValue();t.id=this.inventario.id,this._inventarioResolveService.ModificarInventario(t,this.inventario.id).subscribe(t=>{this._matSnackBar.open("Inventario guardado","Ok",{verticalPosition:"bottom",horizontalPosition:"right",duration:5e3})},t=>{this._matSnackBar.open("\xa1Error! Intenta de nuevo","Ok",{verticalPosition:"bottom",horizontalPosition:"right",duration:5e3})})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(l),o.Pb(b.d),o.Pb(d.f),o.Pb(m.a))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-inventario"]],decls:50,vars:16,consts:[["id","inventario",1,"page-layout","carded","fullwidth","inner-scroll"],[1,"top-bg","accent"],[1,"center"],["fxLayout","row","fxLayoutAlign","space-between center",1,"header","accent"],["fxLayout","row","fxLayoutAlign","start center"],["mat-icon-button","",1,"mr-0","mr-sm-16",3,"routerLink"],[1,"inventario-image","mr-8","mr-sm-16"],[3,"src",4,"ngIf"],["fxLayout","column","fxLayoutAlign","start start"],["class","h2",4,"ngIf"],[1,"subtitle","secondary-text"],["mat-raised-button","","class","save-inventario-button",3,"disabled","click",4,"ngIf"],[1,"content-card"],[1,"content"],["name","inventarioForm","fxLayout","column","fxFlex","",1,"inventario","w-100-p",3,"formGroup"],["label","Informacion basica"],["fusePerfectScrollbar","",1,"tab-content","p-24"],["appearance","outline","floatLabel","always",1,"w-100-p"],["matInput","","placeholder","Nombre","name","nombre","formControlName","nombre","required",""],["matInput","","placeholder","Inventario descripcion","name","descripcion","formControlName","descripcion","rows","5"],["label","Inventario"],["matInput","","placeholder","Cantidad total","name","cantidadTotal","formControlName","cantidadTotal","type","number"],["matInput","","placeholder","Cantidad disponible","name","cantidadDisponible","formControlName","cantidadDisponible","type","number"],["label","Imagen"],["matInput","","placeholder","Url temporal","name","imagen","formControlName","imagen","type","text"],[3,"src"],[1,"h2"],["mat-raised-button","",1,"save-inventario-button",3,"disabled","click"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Qb(1,"div",1),o.Vb(2,"div",2),o.Vb(3,"div",3),o.Vb(4,"div",4),o.Vb(5,"button",5),o.Vb(6,"mat-icon"),o.Qc(7,"arrow_back"),o.Ub(),o.Ub(),o.Vb(8,"div",6),o.Oc(9,U,1,1,"img",7),o.Oc(10,V,1,1,"img",7),o.Ub(),o.Vb(11,"div",8),o.Oc(12,I,2,1,"div",9),o.Oc(13,S,2,0,"div",9),o.Vb(14,"div",10),o.Vb(15,"span"),o.Qc(16,"Inventario Detalles"),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Oc(17,y,3,1,"button",11),o.Oc(18,C,3,1,"button",11),o.Ub(),o.Vb(19,"div",12),o.Vb(20,"div",13),o.Vb(21,"form",14),o.Vb(22,"mat-tab-group"),o.Vb(23,"mat-tab",15),o.Vb(24,"div",16),o.Vb(25,"mat-form-field",17),o.Vb(26,"mat-label"),o.Qc(27,"Nombre"),o.Ub(),o.Qb(28,"input",18),o.Ub(),o.Vb(29,"mat-form-field",17),o.Vb(30,"mat-label"),o.Qc(31,"Inventario descripcion"),o.Ub(),o.Vb(32,"textarea",19),o.Qc(33,"                                    "),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Vb(34,"mat-tab",20),o.Vb(35,"div",16),o.Vb(36,"mat-form-field",17),o.Vb(37,"mat-label"),o.Qc(38,"Cantidad total"),o.Ub(),o.Qb(39,"input",21),o.Ub(),o.Vb(40,"mat-form-field",17),o.Vb(41,"mat-label"),o.Qc(42,"Cantidad disponible"),o.Ub(),o.Qb(43,"input",22),o.Ub(),o.Ub(),o.Ub(),o.Vb(44,"mat-tab",23),o.Vb(45,"div",16),o.Vb(46,"mat-form-field",17),o.Vb(47,"mat-label"),o.Qc(48,"Cargar imagen de inventario"),o.Ub(),o.Qb(49,"input",24),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.Db(5),o.oc("routerLink","/app/inventario"),o.Db(3),o.oc("@animate",o.rc(11,O,o.qc(10,_))),o.Db(1),o.oc("ngIf",e.inventario.imagen),o.Db(1),o.oc("ngIf",!e.inventario.imagen),o.Db(1),o.oc("@animate",o.rc(14,O,o.qc(13,Q))),o.Db(1),o.oc("ngIf","editar"===e.pageType),o.Db(1),o.oc("ngIf","nuevo"===e.pageType),o.Db(4),o.oc("ngIf","nuevo"===e.pageType),o.Db(1),o.oc("ngIf","editar"===e.pageType),o.Db(3),o.oc("formGroup",e.inventarioForm))},directives:[p.a,u.c,u.b,h.b,d.g,v.a,f.t,b.s,b.l,u.a,b.f,g.b,g.a,x.a,w.c,w.f,D.b,b.c,b.k,b.e,b.q,b.o],styles:["#inventario .header .inventario-image{overflow:hidden;width:56px;min-width:56px;max-width:56px;height:56px;min-height:56px;max-height:56px;border-radius:4px}#inventario .header .inventario-image img{height:100%;width:auto;max-width:none}#inventario .header .subtitle{margin:6px 0 0}#inventario .content .mat-tab-body-wrapper,#inventario .content .mat-tab-group,#inventario .content .tab-content{flex:1 1 auto;max-width:100%}#inventario .content .mat-tab-body-content{display:flex}#inventario .content .mat-tab-label{height:64px}#inventario .content .inventario-image{overflow:hidden;width:128px;height:128px;margin-right:16px;margin-bottom:16px;border-radius:4px}#inventario .content .inventario-image img{height:100%;width:auto;max-width:none}#inventario .content .mat-form-field-appearance-outline .mat-form-field-prefix,#inventario .content .mat-form-field-appearance-outline .mat-form-field-suffix{top:0}"],encapsulation:2,data:{animation:a.a}}),t})();var P=i("M9IT"),R=i("Dh3D"),L=i("0EQZ"),T=i("jD4G"),A=i("VRyK"),N=i("lJxs");class H extends L.b{constructor(t,e,i){super(),this._inventarioResolveService=t,this._matPaginator=e,this._matSort=i,this._filterChange=new c.a(""),this._filteredDataChange=new c.a([]),this.filteredData=this._inventarioResolveService.inventarios}connect(t){const e=[this._inventarioResolveService.onInventariosCambios,this._matPaginator.page,this._filterChange,this._matSort.sortChange];return Object(A.a)(...e).pipe(Object(N.a)(()=>{let t=this._inventarioResolveService.inventarios.slice();return t=this.filterData(t),this.filteredData=[...t],t=this.sortData(t),t.splice(this._matPaginator.pageIndex*this._matPaginator.pageSize,this._matPaginator.pageSize)}))}get filteredData(){return this._filteredDataChange.value}set filteredData(t){this._filteredDataChange.next(t)}get filter(){return this._filterChange.value}set filter(t){this._filterChange.next(t)}filterData(t){return this.filter?T.a.filterArrayByString(t,this.filter):t}sortData(t){return this._matSort.active&&""!==this._matSort.direction?t.sort((t,e)=>{let i="",a="";switch(this._matSort.active){case"id":[i,a]=[t.id,e.id];break;case"nombre":[i,a]=[t.nombre,e.nombre];break;case"cantidadTotal":[i,a]=[t.cantidadTotal,e.cantidadTotal];break;case"cantidadDisponible":[i,a]=[t.cantidadDisponible,e.cantidadDisponible]}return((isNaN(+i)?i:+i)<(isNaN(+a)?a:+a)?-1:1)*("asc"===this._matSort.direction?1:-1)}):t}disconnect(t){}}var z=i("xgIS"),F=i("Kj3r"),q=i("/uUt"),G=i("+0xr"),j=i("znSr"),B=i("FKr1");const M=["filter"];function E(t,e){1&t&&(o.Vb(0,"mat-header-cell",31),o.Qc(1,"ID"),o.Ub())}function K(t,e){if(1&t&&(o.Vb(0,"mat-cell"),o.Vb(1,"p",32),o.Qc(2),o.Ub(),o.Ub()),2&t){const t=e.$implicit;o.Db(2),o.Rc(t.id)}}function $(t,e){1&t&&o.Qb(0,"mat-header-cell")}function J(t,e){if(1&t&&o.Qb(0,"img",35),2&t){const t=o.hc().$implicit;o.oc("alt",t.name)("src",t.imagen,o.Gc)}}function W(t,e){1&t&&o.Qb(0,"img",36),2&t&&o.oc("src","assets/images/ecommerce/product-image-placeholder.png",o.Gc)}function X(t,e){if(1&t&&(o.Vb(0,"mat-cell"),o.Oc(1,J,1,2,"img",33),o.Oc(2,W,1,1,"img",34),o.Ub()),2&t){const t=e.$implicit;o.Db(1),o.oc("ngIf",t.imagen),o.Db(1),o.oc("ngIf",!t.imagen)}}function Z(t,e){1&t&&(o.Vb(0,"mat-header-cell",31),o.Qc(1,"Nombre"),o.Ub())}function Y(t,e){if(1&t&&(o.Vb(0,"mat-cell"),o.Vb(1,"p",32),o.Qc(2),o.Ub(),o.Ub()),2&t){const t=e.$implicit;o.Db(2),o.Rc(t.nombre)}}function tt(t,e){1&t&&(o.Vb(0,"mat-header-cell",37),o.Qc(1,"Cantidad Total"),o.Ub())}function et(t,e){if(1&t&&(o.Vb(0,"mat-cell",38),o.Vb(1,"p",39),o.Qc(2),o.Ub(),o.Ub()),2&t){const t=e.$implicit;o.Db(2),o.Sc(" ",t.cantidadTotal," ")}}function it(t,e){1&t&&(o.Vb(0,"mat-header-cell",40),o.Qc(1,"Cantidad disponible"),o.Ub())}const at=function(t,e,i){return{"red-500":t,"amber-500":e,"green-600":i}};function nt(t,e){if(1&t&&(o.Vb(0,"mat-cell",41),o.Qb(1,"span",42),o.Vb(2,"span"),o.Qc(3),o.Ub(),o.Ub()),2&t){const t=e.$implicit;o.Db(1),o.oc("ngClass",o.tc(2,at,t.cantidadDisponible<=5,t.cantidadDisponible>5&&t.cantidadDisponible<=25,t.cantidadDisponible>25)),o.Db(2),o.Sc(" ",t.cantidadDisponible," ")}}function rt(t,e){1&t&&o.Qb(0,"mat-header-row")}function ot(t,e){1&t&&o.Qb(0,"mat-row",43),2&t&&o.oc("routerLink",e.$implicit.id)}const ct=function(){return{delay:"50ms",scale:"0.2"}},st=function(t){return{value:"*",params:t}},lt=function(){return{delay:"100ms",x:"-25px"}},bt=function(){return{value:"50"}},dt=function(){return[5,10,25,100]};let mt=(()=>{class t{constructor(t){this._inventarioResolveService=t,this.displayedColumns=["id","imagen","nombre","cantidadTotal","cantidadDisponible"],this._unsuscribeAll=new n.a}ngOnInit(){this.dataSource=new H(this._inventarioResolveService,this.paginator,this.sort),Object(z.a)(this.filter.nativeElement,"keyup").pipe(Object(r.a)(this._unsuscribeAll),Object(F.a)(150),Object(q.a)()).subscribe(()=>{this.dataSource&&(this.dataSource.filter=this.filter.nativeElement.value)})}}return t.\u0275fac=function(e){return new(e||t)(o.Pb(l))},t.\u0275cmp=o.Jb({type:t,selectors:[["app-inventarios"]],viewQuery:function(t,e){var i;1&t&&(o.Kc(P.a,!0),o.Kc(R.a,!0),o.Kc(M,!0)),2&t&&(o.zc(i=o.ec())&&(e.paginator=i.first),o.zc(i=o.ec())&&(e.sort=i.first),o.zc(i=o.ec())&&(e.filter=i.first))},decls:40,vars:20,consts:[["id","inventarios",1,"page-layout","carded","fullwidth","inner-scroll"],[1,"top-bg","accent"],[1,"center"],["fxLayout","column","fxLayoutAlign","center center","fxLayout.gt-sm","row","fxLayoutAlign.gt-sm","space-between center",1,"header","accent"],["fxLayout","row","fxLayoutAlign","start center",1,"logo","mb-24","mb-md-0"],[1,"logo-icon","s-32","mr-16"],[1,"logo-text","h1"],[1,"search-wrapper","mx-32","mx-md-0"],["fxFlex","","fxLayout","row","fxLayoutAlign","start center",1,"search"],["placeholder","Buscar..."],["filter",""],["mat-raised-button","",1,"add-inventario-button","fuse-white","mt-24","mt-md-0",3,"routerLink"],[1,"content-card"],["matSort","","fusePerfectScrollbar","",1,"inventarios-table",3,"dataSource"],["table",""],["matColumnDef","id"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","imagen"],[4,"matHeaderCellDef"],["matColumnDef","nombre"],["matColumnDef","cantidadTotal"],["mat-sort-header","","fxHide","","fxShow.gt-xs","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-xs","",4,"matCellDef"],["matColumnDef","cantidadDisponible"],["mat-sort-header","","fxHide","","fxShow.gt-sm","",4,"matHeaderCellDef"],["fxHide","","fxShow.gt-sm","",4,"matCellDef"],[4,"matHeaderRowDef","matHeaderRowDefSticky"],["class","inventario","matRipple","",3,"routerLink",4,"matRowDef","matRowDefColumns"],[3,"length","pageIndex","pageSize","pageSizeOptions"],["paginator",""],["mat-sort-header",""],[1,"text-truncate"],["class","inventario-image",3,"alt","src",4,"ngIf"],[3,"src",4,"ngIf"],[1,"inventario-image",3,"alt","src"],[3,"src"],["mat-sort-header","","fxHide","","fxShow.gt-xs",""],["fxHide","","fxShow.gt-xs",""],[1,"price","text-truncate"],["mat-sort-header","","fxHide","","fxShow.gt-sm",""],["fxHide","","fxShow.gt-sm",""],[1,"quantity-indicator","text-truncate",3,"ngClass"],["matRipple","",1,"inventario",3,"routerLink"]],template:function(t,e){1&t&&(o.Vb(0,"div",0),o.Qb(1,"div",1),o.Vb(2,"div",2),o.Vb(3,"div",3),o.Vb(4,"div",4),o.Vb(5,"mat-icon",5),o.Qc(6," motorcycle "),o.Ub(),o.Vb(7,"span",6),o.Qc(8," Inventario "),o.Ub(),o.Ub(),o.Vb(9,"div",7),o.Vb(10,"div",8),o.Vb(11,"mat-icon"),o.Qc(12,"search"),o.Ub(),o.Qb(13,"input",9,10),o.Ub(),o.Ub(),o.Vb(15,"button",11),o.Vb(16,"span"),o.Qc(17,"Agregar inventario"),o.Ub(),o.Ub(),o.Ub(),o.Vb(18,"div",12),o.Vb(19,"mat-table",13,14),o.Tb(21,15),o.Oc(22,E,2,0,"mat-header-cell",16),o.Oc(23,K,3,1,"mat-cell",17),o.Sb(),o.Tb(24,18),o.Oc(25,$,1,0,"mat-header-cell",19),o.Oc(26,X,3,2,"mat-cell",17),o.Sb(),o.Tb(27,20),o.Oc(28,Z,2,0,"mat-header-cell",16),o.Oc(29,Y,3,1,"mat-cell",17),o.Sb(),o.Tb(30,21),o.Oc(31,tt,2,0,"mat-header-cell",22),o.Oc(32,et,3,1,"mat-cell",23),o.Sb(),o.Tb(33,24),o.Oc(34,it,2,0,"mat-header-cell",25),o.Oc(35,nt,4,6,"mat-cell",26),o.Sb(),o.Oc(36,rt,1,0,"mat-header-row",27),o.Oc(37,ot,1,1,"mat-row",28),o.Ub(),o.Qb(38,"mat-paginator",29,30),o.Ub(),o.Ub(),o.Ub()),2&t&&(o.Db(5),o.oc("@animate",o.rc(13,st,o.qc(12,ct))),o.Db(2),o.oc("@animate",o.rc(16,st,o.qc(15,lt))),o.Db(8),o.oc("routerLink","nuevo"),o.Db(4),o.oc("dataSource",e.dataSource)("@animateStagger",o.qc(18,bt)),o.Db(17),o.oc("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!0),o.Db(1),o.oc("matRowDefColumns",e.displayedColumns),o.Db(1),o.oc("length",e.dataSource.filteredData.length)("pageIndex",0)("pageSize",10)("pageSizeOptions",o.qc(19,dt)))},directives:[p.a,u.c,u.b,v.a,u.a,h.b,d.g,G.j,R.a,x.a,G.c,G.e,G.b,G.g,G.i,P.a,G.d,R.b,G.a,f.t,j.b,f.q,j.a,G.f,G.h,B.r],styles:["@media screen and (max-width:959px){app-inventarios #inventarios .top-bg{height:256px}}app-inventarios #inventarios>.center>.header .search-wrapper{width:100%;max-width:480px;border-radius:28px;overflow:hidden;box-shadow:0 2px 1px -1px rgba(0,0,0,.2),0 1px 1px 0 rgba(0,0,0,.14),0 1px 3px 0 rgba(0,0,0,.12)}@media screen and (max-width:599px){app-inventarios #inventarios>.center>.header .search-wrapper{width:100%}}app-inventarios #inventarios>.center>.header .search-wrapper .search{width:100%;height:48px;line-height:48px;padding:0 18px}app-inventarios #inventarios>.center>.header .search-wrapper .search input{width:100%;height:48px;min-height:48px;max-height:48px;padding:0 16px;border:none;outline:none}@media screen and (max-width:959px){app-inventarios #inventarios>.center>.header{padding:8px 0;height:192px!important;min-height:192px!important;max-height:192px!important}}app-inventarios .inventarios-table{flex:1 1 auto;border-bottom:1px solid rgba(0,0,0,.12);overflow:auto;-webkit-overflow-scrolling:touch}app-inventarios .inventarios-table .mat-header-row{min-height:64px}app-inventarios .inventarios-table .inventario{position:relative;cursor:pointer;height:84px}app-inventarios .inventarios-table .mat-cell{min-width:0;display:flex;align-items:center}app-inventarios .inventarios-table .mat-column-id,app-inventarios .inventarios-table .mat-column-imagen{flex:0 1 84px}app-inventarios .inventarios-table .mat-column-imagen .inventario-image{width:52px;height:52px;border:1px solid rgba(0,0,0,.12)}app-inventarios .inventarios-table .mat-column-category{flex:0 1 240px}app-inventarios .inventarios-table .mat-column-price,app-inventarios .inventarios-table .mat-column-quantity{flex:0 1 160px}app-inventarios .inventarios-table .mat-column-active{flex:0 1 80px}app-inventarios .inventarios-table .quantity-indicator{display:inline-block;vertical-align:middle;width:8px;height:8px;border-radius:4px;margin-right:8px}app-inventarios .inventarios-table .quantity-indicator+span{display:inline-block;vertical-align:middle}app-inventarios .inventarios-table .active-icon{border-radius:50%}"],encapsulation:2,data:{animation:a.a}}),t})();var pt=i("5HBU"),ut=i("LPQX"),ht=i("A5z7"),vt=i("7EHt"),ft=i("d3UM");const gt=[{path:"",component:mt,resolve:{data:l}},{path:":id",component:k,resolve:{data:l}},{path:"nuevo",component:k},{path:"**",redirectTo:"",pathMatch:"prefix"}];let xt=(()=>{class t{}return t.\u0275mod=o.Nb({type:t}),t.\u0275inj=o.Mb({factory:function(e){return new(e||t)},providers:[l],imports:[[d.j.forChild(gt),h.c,ht.a,vt.a,w.e,v.b,D.c,P.b,B.s,ft.b,R.c,m.b,G.k,g.c,pt.a,ut.h]]}),t})()}}]);