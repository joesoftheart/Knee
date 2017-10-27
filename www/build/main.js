webpackJsonp([6],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewCasePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_service__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the NewCasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewCasePage = (function () {
    function NewCasePage(navCtrl, navParams, barcodeScanner, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.barcodeScanner = barcodeScanner;
        this.dataService = dataService;
        this.products = [];
        this.productFound = false;
        this.dataService.getListDetails()
            .subscribe(function (response) {
            _this.products = response;
            console.log(_this.products);
            var myJSONText = JSON.stringify(response);
            console.log(myJSONText);
        });
    }
    NewCasePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NewCasePage');
    };
    NewCasePage.prototype.scan = function () {
        var _this = this;
        var scanOption = {
            "preferFrontCamera": false,
            "showFlipCameraButton": false,
            "showTorchButton": false,
            "prompt": "ให้ตำแหน่งของ barcode อยู่ภายในพื้นที่ scan",
        };
        this.selectedProduct = {};
        this.barcodeScanner.scan(scanOption).then(function (barcodeData) {
            _this.selectedProduct = _this.products.find(function (product) { return product.plu === barcodeData.text; });
            if (_this.selectedProduct !== undefined) {
                _this.productFound = true;
            }
            else {
                _this.productFound = false;
            }
        }, function (err) {
        });
    };
    NewCasePage.prototype.encodeText = function () {
        var _this = this;
        this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodeData).then(function (encodedData) {
            console.log(encodedData);
            _this.encodedData = encodedData;
        }, function (err) {
            console.log("Error occured : " + err);
        });
    };
    NewCasePage.prototype.service = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__service_service__["a" /* ServicePage */]);
    };
    return NewCasePage;
}());
NewCasePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-new-case',template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\pages\new-case\new-case.html"*/'<!--\n\n  Generated template for the NewCasePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header >\n\n    <ion-navbar hideBackButton>\n\n        <ion-icon  name="logo-android"></ion-icon>\n\n          <ion-buttons end>\n\n            <button ion-button icon-only (click)="openModal()">\n\n                <ion-icon name="exit"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n\n\n\n\n\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n\n\n<ion-content padding id="new-case">\n\n\n\n    <ion-row>\n\n        <ion-col col-8>\n\n            <ion-item>\n\n                <ion-label text-rigth><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n\n                <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n              </ion-item>\n\n      </ion-col>\n\n      <ion-col col-4>\n\n          <button ion-button outline block icon-right  >hn</button>\n\n      </ion-col>\n\n      </ion-row>\n\n      <ion-row>\n\n          <ion-col col-12>\n\n          <ion-item>\n\n            <ion-label>select</ion-label>\n\n            <ion-select [(ngModel)]="hospital" action-sheet>\n\n              <ion-option value="rama">rama</ion-option>\n\n              <ion-option value="siriraj">siriraj</ion-option>\n\n              <ion-option value="saymai">saymai</ion-option>\n\n              <ion-option value="sanamchai">sanamchai</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n        </ion-col>\n\n        </ion-row>\n\n      \n\n        <ion-row>\n\n          <ion-col>\n\n              <p>Patient</p>\n\n            <ion-item >\n\n              <ion-input type="text" placeholder="NAME"></ion-input>\n\n            </ion-item>\n\n            <ion-item >\n\n              <ion-input type="text" placeholder="HN"></ion-input>\n\n            </ion-item>\n\n            <ion-item >\n\n                <ion-input type="text" placeholder="sex"></ion-input>\n\n              </ion-item>\n\n              <ion-item >\n\n                <ion-input type="text" placeholder="AGE (number)"></ion-input>\n\n              </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n              <p>Case type</p>\n\n              <ion-row>\n\n                <ion-col>\n\n                    <button ion-button full>Primary Hip</button>\n\n                </ion-col>\n\n                <ion-col>\n\n                    <button ion-button full>Revision Hip</button>\n\n                  </ion-col>\n\n              </ion-row>\n\n              <ion-row>\n\n                  <ion-col>\n\n                      <button ion-button full>Primary Knee</button>\n\n                  </ion-col>\n\n                  <ion-col>\n\n                      <button ion-button full>Revision Knee</button>\n\n                    </ion-col>\n\n                </ion-row>\n\n\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <button ion-button (click)="service()">Service</button>\n\n            <button ion-button (click)="scan()">Scan ... </button>\n\n            <ion-card *ngIf="productFound">\n\n                <ion-card-header>\n\n                  <h2>Price: $ {{selectedProduct.price}}</h2>\n\n                </ion-card-header>\n\n                <ion-card-content>\n\n                  <ul>\n\n                    <li>{{selectedProduct.plu}}</li>\n\n                    <li>{{selectedProduct.name}}</li>\n\n                    <li>{{selectedProduct.desc}}</li>\n\n                  </ul>\n\n                </ion-card-content>\n\n              </ion-card>\n\n        </ion-row>\n\n       \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\pages\new-case\new-case.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_3__providers_data_service_data_service__["a" /* DataServiceProvider */]])
], NewCasePage);

//# sourceMappingURL=new-case.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServicePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ServicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ServicePage = (function () {
    function ServicePage(navCtrl, navParams, dataService) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataService = dataService;
        this.products = [];
        this.productFound = false;
        this.dataService.load()
            .subscribe(function (response) {
            _this.products = response;
            console.log(_this.products);
            _this.selectedProduct = {};
            _this.selectedProduct = _this.products;
            if (_this.selectedProduct !== undefined) {
                _this.productFound = true;
            }
            else {
                _this.productFound = false;
            }
        });
    }
    ServicePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ServicePage');
    };
    ServicePage.prototype.load = function () {
    };
    return ServicePage;
}());
ServicePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-service',template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\pages\service\service.html"*/'<!--\n  Generated template for the ServicePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>service</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-row *ngFor="let item of selectedProduct; let i = index" >\n          <ion-card *ngIf="productFound" >\n              <ion-card-content>\n                <ul>\n                  <li>{{item.hospital_name_thai}}</li>\n                </ul>\n              </ion-card-content>\n            </ion-card>\n      </ion-row>\n \n</ion-content>\n'/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\pages\service\service.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_data_service_data_service__["a" /* DataServiceProvider */]])
], ServicePage);

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formbuilder, alertCtrl, app) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.alertCtrl = alertCtrl;
        this.app = app;
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.formregister = formbuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password_confirm: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, this.equalto('password')])],
            brand: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.equalto = function (field_name) {
        return function (control) {
            var input = control.value;
            var isValid = control.root.value[field_name] == input;
            if (!isValid)
                return { 'equalTo': { isValid: isValid } };
            else
                return null;
        };
    };
    SignupPage.prototype.onRegister = function (value) {
        this.suscessfull();
    };
    SignupPage.prototype.suscessfull = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Register successfully',
            message: 'Go to login',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        var root = _this.app.getRootNav();
                        root.popToRoot();
                    }
                }
            ]
        });
        alert.present();
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  \n\n    <ion-navbar>\n\n      <ion-title>signup</ion-title>\n\n    </ion-navbar>\n\n  \n\n  </ion-header>\n\n  \n\n  \n\n  <ion-content padding id="signup" >\n\n  <ion-grid  >\n\n    <ion-row>\n\n      <ion-col text text-center>\n\n          Signup Page\n\n      </ion-col>\n\n  \n\n    </ion-row>\n\n  </ion-grid>\n\n  <ion-grid>\n\n  \n\n   <form [formGroup]= "formregister" (ngSubmit)="onRegister(formregister.value)">\n\n  \n\n      <ion-row>\n\n          <ion-col>\n\n           <ion-item>\n\n             <ion-label stacked>Email</ion-label>\n\n             <ion-input type="email"  placeholder="email" formControlName="email"></ion-input>\n\n           </ion-item>\n\n           <ion-item *ngIf="formregister.controls.email.hasError(\'pattern\') && formregister.controls.email.touched">\n\n              <p><font color="red"> * Email is invalid format</font></p>\n\n            </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n         <ion-col>\n\n          <ion-item>\n\n            <ion-label stacked>Password</ion-label>\n\n            <ion-input type="password" placeholder="password" formControlName="password"></ion-input>\n\n            </ion-item>\n\n            <ion-item *ngIf="formregister.controls.password.hasError(\'required\') && formregister.controls.password.touched">\n\n                <p><font color="red"> * Password is required</font></p>\n\n              </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-item>\n\n              <ion-label stacked>ConFirmPassword</ion-label>\n\n              <ion-input type="password" placeholder="confirmPassword" formControlName="password_confirm" ></ion-input>\n\n             </ion-item>\n\n             <ion-item *ngIf="formregister.controls.password_confirm.hasError(\'equalTo\') && formregister.controls.password_confirm.touched">\n\n                <p><font color="red">  * Password mismatch</font></p>\n\n              </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n              <ion-item>\n\n                <ion-label stacked>Brand</ion-label>\n\n                <ion-select [(ngModel)]="Brand" formControlName="brand">\n\n                  <ion-option value="Brand1">Brand 1</ion-option>\n\n                  <ion-option value="Brand2">Brand 2</ion-option>\n\n                  <ion-option value="Brand3">Brand 3</ion-option>\n\n                  <ion-option value="Brand4">Brand 4</ion-option>\n\n                  <ion-option value="Brand5">Brand 5</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <ion-item *ngIf="formregister.controls.brand.hasError(\'required\') && formregister.controls.brand.touched">\n\n                  <p><font color="red"> * Brand is required</font></p>\n\n                </ion-item>\n\n          </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button full type="submit" [disabled]="!formregister.valid">Sign up</button>\n\n          </ion-col>\n\n        </ion-row>\n\n   </form>\n\n  \n\n  </ion-grid>\n\n  \n\n  </ion-content>\n\n  '/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\pages\signup\signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, formbuilder, alertCtrl, splashScreen) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formbuilder = formbuilder;
        this.alertCtrl = alertCtrl;
        this.splashScreen = splashScreen;
        this.splashScreen.show();
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.loginform = formbuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].pattern(emailRegex)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.onlogin = function (value) {
        if (value.email == "admin@admin.com" && value.password == "admin") {
            window.localStorage.setItem('email', value.email);
            window.localStorage.setItem('password', value.password);
            this.suscessfull(value.email);
        }
        else {
            this.nosuscess();
        }
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage.prototype.go = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    WelcomePage.prototype.suscessfull = function (name) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Login Suscess',
            message: 'Welcome ' + name,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    WelcomePage.prototype.nosuscess = function () {
        var alert = this.alertCtrl.create({
            title: 'Login faile',
            message: 'username or password isincorrect',
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\pages\welcome\welcome.html"*/'<ion-content padding id="welcome">\n\n  <ion-row center text-center>\n\n    <ion-col >\n\n        <img src="assets/imgs/THKJR.png" class="logo"/>\n\n    </ion-col>\n\n  </ion-row>\n\n \n\n  <ion-grid>\n\n    <ion-row>\n\n      <ion-col>\n\n        <font size="6">Welcome to Thai HipKnee </font>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n\n\n  <ion-grid >\n\n      <form [formGroup]= "loginform" (ngSubmit)="onlogin(loginform.value)" >\n\n        <ion-row>\n\n            <ion-item>\n\n                  <ion-label stacked>Email</ion-label>\n\n                  <ion-input type="email"  placeholder="admin@aadmin.com"  formControlName="email" ></ion-input>\n\n            </ion-item>\n\n             <ion-item *ngIf="loginform.controls.email.hasError(\'pattern\') && loginform.controls.email.touched">\n\n                <p><font color="red"> * Email is invalid format</font></p>\n\n              </ion-item>\n\n            <ion-item>\n\n                  <ion-label stacked>Password</ion-label>\n\n                  <ion-input type="password"  placeholder="admin"  formControlName="password"></ion-input>\n\n                </ion-item>\n\n              <ion-col center text-center>\n\n                <!-- <button ion-button full color="lightText" [disabled]= "!loginform.valid"  type="submit" >Log in</button> -->\n\n                <button ion-button full (click)="go()">Log in</button>\n\n              </ion-col>\n\n        </ion-row>\n\n      </form>\n\n      <ion-row>\n\n          <ion-col center text-center>\n\n            <button ion-button full color="success" (click)="signup()">Sign up</button>\n\n          </ion-col>\n\n        </ion-row>\n\n  </ion-grid>\n\n\n\n\n\n</ion-content>\n\n<!-- <ion-footer>\n\n  <ion-toolbar>\n\n    <ion-icon name="cog"></ion-icon>\n\n  </ion-toolbar>\n\n</ion-footer> -->\n\n'/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\pages\welcome\welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 115:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		275,
		5
	],
	"../pages/new-case/new-case.module": [
		274,
		4
	],
	"../pages/service/service.module": [
		276,
		3
	],
	"../pages/signup/signup.module": [
		277,
		2
	],
	"../pages/tabspage/tabspage.module": [
		278,
		1
	],
	"../pages/welcome/welcome.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_case_new_case__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = (function () {
    function HomePage(navCtrl, toast, navParams, app) {
        this.navCtrl = navCtrl;
        this.toast = toast;
        this.navParams = navParams;
        this.app = app;
        this.myDataArray = ['1', '2', '3', '1', '2', '3', '1', '2', '3'];
        this.event = {
            month: '1990-02-19',
            timeStarts: '07:43',
            timeEnds: '1990-02-20'
        };
        this.myDataArray;
        this.email = window.localStorage.getItem('email');
    }
    HomePage.prototype.logout = function () {
        // Remove API token 
        window.localStorage.removeItem('email');
        window.localStorage.removeItem('password');
        var root = this.app.getRootNav();
        root.popToRoot();
    };
    HomePage.prototype.newcase = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__new_case_new_case__["a" /* NewCasePage */]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\pages\home\home.html"*/'\n\n  <ion-header >\n\n    <ion-navbar hideBackButton>\n\n        \n\n        <img src="assets/imgs/icon-40.png" class="logo"/> {{email}}\n\n          <ion-buttons end>\n\n            <button ion-button icon-only (click)="logout()">\n\n                <ion-icon name="exit"></ion-icon>\n\n            </button>\n\n          </ion-buttons>\n\n\n\n\n\n\n\n      </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-row>\n\n    <ion-col col-8>\n\n        <ion-item>\n\n            <ion-label text-rigth><ion-icon ios="ios-calendar" md="md-calendar"></ion-icon></ion-label>\n\n            <ion-datetime displayFormat="DD/MMM/YYYY" [(ngModel)]="myDate"></ion-datetime>\n\n          </ion-item>\n\n  </ion-col>\n\n  <ion-col col-4>\n\n      <button ion-button outline icon-right block>hn</button>\n\n  </ion-col>\n\n  </ion-row>\n\n  <ion-row>\n\n      <ion-col col-8>\n\n      <button ion-button outline icon-right block>Hospital <ion-icon name="medkit"></ion-icon></button>\n\n    </ion-col>\n\n    <ion-col col-4>\n\n        <button ion-button outline icon-right block><ion-icon name="add" md="md-add"></ion-icon></button>\n\n    </ion-col>\n\n    </ion-row>\n\n   \n\n   \n\n    <ion-row text-center style="margin-left: 4%;margin-right: 4%;">\n\n      <ion-col style="background-color:#00BFA5">No</ion-col>\n\n      <ion-col style="background-color: #00BFA5">HN</ion-col>\n\n      <ion-col style="background-color: #00BFA5">Opt</ion-col>\n\n      <ion-col style="background-color: #00BFA5">Date</ion-col>\n\n    </ion-row>\n\n    <ion-scroll scrollY="true" class="ion-scroll">\n\n    <ion-row  *ngFor="let item of myDataArray;">\n\n   \n\n        <hr>\n\n        <ion-col class="colshow" style="background-color: #E0F2F1">sdcds</ion-col>\n\n        <ion-col class="colshow" style="background-color: #E0F2F1">sdcsd</ion-col>\n\n        <ion-col class="colshow" style="background-color: #E0F2F1">scsds</ion-col>\n\n        <ion-col class="colshow" style="background-color: #E0F2F1">sdcsd</ion-col>\n\n      </ion-row>\n\n    </ion-scroll>\n\n    \n\n    \n\n \n\n\n\n\n\n     <ion-row certer text-center>\n\n         <ion-col align-items: flex-start>\n\n                <button ion-button (click)="newcase()">Newcase  </button>   \n\n         </ion-col>\n\n     </ion-row>\n\n\n\n\n\n   \n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabspagePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the TabspagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabspagePage = (function () {
    function TabspagePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    TabspagePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TabspagePage');
    };
    return TabspagePage;
}());
TabspagePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tabspage',template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\pages\tabspage\tabspage.html"*/'<!--\n\n  Generated template for the TabspagePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>tabspage</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\pages\tabspage\tabspage.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], TabspagePage);

//# sourceMappingURL=tabspage.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabspage_tabspage__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_new_case_new_case__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_service_service__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_data_service_data_service__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabspage_tabspage__["a" /* TabspagePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_new_case_new_case__["a" /* NewCasePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_service_service__["a" /* ServicePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/new-case/new-case.module#NewCasePageModule', name: 'NewCasePage', segment: 'new-case', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/service/service.module#ServicePageModule', name: 'ServicePage', segment: 'service', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tabspage/tabspage.module#TabspagePageModule', name: 'TabspagePage', segment: 'tabspage', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* HttpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_signup_signup__["a" /* SignupPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_tabspage_tabspage__["a" /* TabspagePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_new_case_new_case__["a" /* NewCasePage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_service_service__["a" /* ServicePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_barcode_scanner__["a" /* BarcodeScanner */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_data_service_data_service__["a" /* DataServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_16__ionic_native_sqlite__["a" /* SQLite */],
            __WEBPACK_IMPORTED_MODULE_17__ionic_native_toast__["a" /* Toast */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__ = __webpack_require__(80);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = (function () {
    function MyApp(platform, toast, toastCtrl, statusBar, splashScreen) {
        this.toast = toast;
        this.toastCtrl = toastCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        function onExit() {
            var _this = this;
            platform.registerBackButtonAction(function () {
                var lastTimeBackPress = 0;
                var timePeriodToExit = 2000;
                // get current active page
                if (new Date().getTime() - lastTimeBackPress < timePeriodToExit) {
                    _this.platform.exitApp(); //Exit from app
                }
                else {
                    var toast_1 = _this.toastCtrl.create({
                        message: 'Press back again to exit App?',
                        duration: 3000,
                        position: 'bottom'
                    });
                    toast_1.present();
                    lastTimeBackPress = new Date().getTime();
                }
            });
        }
        function onLoad() {
            document.addEventListener("deviceready", onDeviceReady, false);
        }
        // device APIs are available
        //
        function onDeviceReady() {
            document.addEventListener("pause", onPause, false);
            document.addEventListener("resume", onResume, false);
            document.addEventListener("menubutton", onMenuKeyDown, false);
            // Add similar listeners for other events
        }
        function onPause() {
            // Handle the pause event
        }
        function onResume() {
            // Handle the resume event
        }
        function onMenuKeyDown() {
            // Handle the menubutton event
        }
        function showToast() {
            var toast = this.Toast.create({
                message: 'Press Again to exit',
                duration: 2000,
                position: 'bottom'
            });
            toast.onDidDismiss(function () {
                console.log('Dismissed toast');
            });
            toast.present();
        }
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\tonkh\Desktop\Knee\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\tonkh\Desktop\Knee\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DataServiceProvider = (function () {
    function DataServiceProvider(http) {
        this.http = http;
        console.log('Hello DataServiceProvider Provider');
    }
    DataServiceProvider.prototype.getListDetails = function () {
        return this.http.get('assets/data/products.json').map(function (res) { return res.json(); });
    };
    DataServiceProvider.prototype.load = function () {
        return this.http.get('assets/data/hospital.json').map(function (res) { return res.json().hospital; });
    };
    return DataServiceProvider;
}());
DataServiceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], DataServiceProvider);

//# sourceMappingURL=data-service.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map