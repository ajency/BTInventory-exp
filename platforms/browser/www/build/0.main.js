webpackJsonp([0],{

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_tags_input__ = __webpack_require__(273);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPageModule", function() { return ModalPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ModalPageModule = (function () {
    function ModalPageModule() {
    }
    return ModalPageModule;
}());
ModalPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]),
            __WEBPACK_IMPORTED_MODULE_3_ionic_tags_input__["a" /* IonTagsInputModule */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__modal__["a" /* ModalPage */]
        ]
    })
], ModalPageModule);

//# sourceMappingURL=modal.module.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(96);
/* unused harmony export CITY_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonTagsInput; });



/**
 * Generated class for the IonTagsInput directive.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/DirectiveMetadata-class.html
 * for more info on Angular Directives.
 */
var CITY_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* forwardRef */])(function () { return IonTagsInput; }),
    multi: true
};
var IonTagsInput = (function () {
    function IonTagsInput(plt, ref) {
        this.plt = plt;
        this.ref = ref;
        this._editTag = '';
        this._tags = [];
        this._isFocus = false;
        this._colors = ['#4a8bfc', '#32db64', '#f53d3d', '#ffc125', '#767676', '#7e60ff', '#222', '#bcbcbc'];
        this.mode = '';
        this.readonly = false;
        this.color = '';
        this.hideRemove = false;
        this.maxTags = -1;
        this.placeholder = '+Tag';
        this.type = 'text';
        this.separatorStr = ',';
        this.once = true;
        this.canEnterAdd = true;
        this.canBackspaceRemove = true;
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
    }
    IonTagsInput.prototype.ngOnInit = function () {
        var _this = this;
        if (this.mode === '') {
            this.plt.ready().then(function () {
                _this.initMode();
                _this.initRandomColor();
            });
        }
    };
    IonTagsInput.prototype.initRandomColor = function () {
        if (this.color !== 'random')
            return;
        var tagsEve = this.tags.nativeElement.children;
        for (var _i = 0, tagsEve_1 = tagsEve; _i < tagsEve_1.length; _i++) {
            var eve = tagsEve_1[_i];
            if (eve.style['backgroundColor'] === '') {
                eve.style['backgroundColor'] = this.getRandomColor();
            }
        }
    };
    IonTagsInput.prototype.addRandomColor = function () {
        if (this.color !== 'random')
            return;
        var tagsEve = this.tags.nativeElement.children;
        console.log(tagsEve);
        tagsEve[tagsEve.length - 1].style['backgroundColor'] = this.getRandomColor();
    };
    IonTagsInput.prototype.keyAddTag = function () {
        var tagStr = this._editTag.trim();
        if (!this.canEnterAdd)
            return;
        if (!this.verifyTag(tagStr))
            return;
        if (!this.isOnce(tagStr)) {
            this._editTag = '';
            return;
        }
        this.pushTag(tagStr);
    };
    IonTagsInput.prototype.separatorStrAddTag = function () {
        var lastIndex = this._editTag.length - 1;
        var tagStr = '';
        if (!this.separatorStr)
            return;
        if (this._editTag[lastIndex] === this.separatorStr) {
            tagStr = this._editTag.split(this.separatorStr)[0].trim();
            if (this.verifyTag(tagStr) && this.isOnce(tagStr)) {
                this.pushTag(tagStr);
            }
            else {
                this._editTag = '';
            }
        }
    };
    IonTagsInput.prototype.keyRemoveTag = function () {
        if (!this.canBackspaceRemove)
            return;
        if (this._editTag === '') {
            this.removeTag(-1);
            this._editTag = '';
        }
    };
    IonTagsInput.prototype.btnRemoveTag = function ($index) {
        this.removeTag($index);
    };
    IonTagsInput.prototype.verifyTag = function (tagStr) {
        if (typeof this.verifyMethod === 'function') {
            if (!this.verifyMethod(tagStr)) {
                this._editTag = '';
                return false;
            }
            else {
                return true;
            }
        }
        if (!tagStr.trim()) {
            this._editTag = '';
            return false;
        }
        else {
            return true;
        }
    };
    IonTagsInput.prototype.pushTag = function (tagStr) {
        if (this.maxTags !== -1 && this._tags.length >= this.maxTags) {
            this._editTag = '';
            return;
        }
        this._tags.push(tagStr.trim());
        this.ref.detectChanges();
        this.addRandomColor();
        this.onChange.emit(this._tags);
        this._editTag = '';
    };
    IonTagsInput.prototype.removeTag = function ($index) {
        if (this._tags.length > 0) {
            if ($index === -1) {
                this._tags.pop();
                this.onChange.emit(this._tags);
            }
            else if ($index > -1) {
                this._tags.splice($index, 1);
                this.onChange.emit(this._tags);
            }
        }
    };
    IonTagsInput.prototype.isOnce = function (tagStr) {
        if (!this.once)
            return true;
        var tags = this._tags;
        return tags.every(function (e) {
            return e !== tagStr;
        });
    };
    IonTagsInput.prototype._click = function (ev) {
        this.input.nativeElement.focus();
        this._isFocus = true;
        ev.preventDefault();
        ev.stopPropagation();
    };
    IonTagsInput.prototype._blur = function () {
        this.input.nativeElement.blur();
        this._isFocus = false;
    };
    IonTagsInput.prototype._focus = function () {
        if (!this._isFocus) {
            this._isFocus = true;
        }
    };
    IonTagsInput.prototype.writeValue = function (val) {
        this._tags = val;
    };
    IonTagsInput.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._tags);
    };
    IonTagsInput.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    IonTagsInput.prototype.setValue = function (val) {
        this._tags = val;
        if (this._tags) {
            this._onChanged(this._tags);
        }
    };
    IonTagsInput.prototype.initMode = function () {
        this.mode = this.plt.is('ios') ? 'ios' : this.plt.is('android') ? 'md' : this.plt.is('windows') ? 'mp' : '';
    };
    IonTagsInput.prototype.getRandomColor = function () {
        var max = this._colors.length + 1;
        var index = Math.floor(Math.random() * max);
        return this._colors[index];
    };
    IonTagsInput.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */], args: [{
                    selector: 'ion-tags-input',
                    providers: [CITY_PICKER_VALUE_ACCESSOR],
                    template: "\n    <div [class]=\"'ion-tags-input tit-border-color '  + (readonly ? 'readonly' : color)\" [class.active]=\"_isFocus\">\n      <div class=\"iti-tags-wrap\" #tags>\n        <span  *ngFor=\"let tag of _tags; let $index = index;\"\n               [class]=\"'iti-tag iti-tag-color ' + color + ' iti-tag-' + mode\">\n          {{tag}}\n          <a [hidden]=\"hideRemove || readonly\" \n             class=\"iti-tag-rm\"\n             (click)=\"btnRemoveTag($index)\"></a>\n       </span>\n      </div>\n      <input #tagsInput\n             [hidden]=\"readonly\"\n             [disabled]=\"readonly\"\n             class=\"iti-input\" [type]=\"type\"\n             [placeholder]=\"placeholder\"\n             [(ngModel)]=\"_editTag\"\n             (blur)=\"_blur()\"\n             (focus)=\"_focus()\"\n             (keyup.backspace)=\"keyRemoveTag($event); false\"\n             (keyup)=\"separatorStrAddTag()\"\n             (keyup.enter)=\"keyAddTag()\">\n    </div>\n  "
                },] },
    ];
    /** @nocollapse */
    IonTagsInput.ctorParameters = [
        { type: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* Platform */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* ChangeDetectorRef */], },
    ];
    IonTagsInput.propDecorators = {
        'input': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */], args: ['tagsInput',] },],
        'tags': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */], args: ['tags',] },],
        'mode': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'readonly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'color': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'hideRemove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'maxTags': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'placeholder': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'type': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'separatorStr': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'once': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'canEnterAdd': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'canBackspaceRemove': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'verifyMethod': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Output */] },],
        '_click': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* HostListener */], args: ['click', ['$event'],] },],
    };
    return IonTagsInput;
}());
//# sourceMappingURL=ion-tags-input.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(96);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalPage; });
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
 * Generated class for the ModalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ModalPage = (function () {
    function ModalPage(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.tags = ['Alias 1', 'Another Alias'];
    }
    ModalPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    return ModalPage;
}());
ModalPage = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'page-modal',template:/*ion-inline-start:"/home/ajantoniof/.bin/bt/Inventory/src/pages/modal/modal.html"*/'<!--\n  Generated template for the ModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-toolbar>\n	<ion-title>\n	  <!-- Assign Product Family -->\n	  Add/Edit Aliases\n	</ion-title>\n	<ion-buttons start>\n	  <button ion-button (click)="dismiss()">\n		<span ion-text color="primary" showWhen="ios">Cancel</span>\n		<ion-icon name="md-close" showWhen="android,core"></ion-icon>\n	  </button>\n	</ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n	<!-- Product Family content -->\n	<!-- <ion-item>\n		<ion-input type="text" placeholder="Start typing family name..."></ion-input>\n	</ion-item> -->\n\n\n	<!-- Map a listing content -->\n	<ion-grid class="alias-grid">\n		<ion-row>\n			<ion-col col-6>\n				<strong>Existing Aliases</strong>\n				<ion-tags-input [(ngModel)]="tags" [mode]="\'dark\'"></ion-tags-input>\n			</ion-col>\n			<ion-col col-6>\n				<strong>Add a new Alias</strong>\n				<ion-list>\n				<ion-item>\n				    <ion-label>Add Alias</ion-label>\n				    <ion-select [(ngModel)]="alias">\n				      <ion-option value="default">default</ion-option>\n				      <ion-option value="1">1</ion-option>\n				      <ion-option value="2">2</ion-option>\n				    </ion-select>\n				</ion-item>\n\n				<ion-item>\n					<ion-input small type="text" placeholder="Start typing family name..."></ion-input>\n				</ion-item>\n\n				<ion-item>\n					<button ion-button small color="secondary">\n						Add\n					</button>\n				</ion-item>\n				</ion-list>\n\n				<div>\n					<a href="#">Bulk Upload Aliases by CSV File</a>\n				</div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n\n<!-- Product Family content -->\n<!-- <ion-footer>\n  <ion-toolbar>\n		<ion-buttons end>\n		  <button ion-button color="secondary">\n			Save\n		  </button>\n		  <button ion-button color="danger" clear (click)="dismiss()">\n			Cancel\n		  </button>\n		</ion-buttons>\n  </ion-toolbar>\n</ion-footer>-->'/*ion-inline-end:"/home/ajantoniof/.bin/bt/Inventory/src/pages/modal/modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */]])
], ModalPage);

//# sourceMappingURL=modal.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ion_tags_input_module__ = __webpack_require__(274);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ion_tags_input_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ion_tags_input__ = __webpack_require__(270);
/* unused harmony reexport IonTagsInput */
/**
 * Created by hsuanlee on 2017/4/12.
 */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ion_tags_input__ = __webpack_require__(270);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonTagsInputModule; });




/** @hidden */
var IonTagsInputModule = (function () {
    function IonTagsInputModule() {
    }
    IonTagsInputModule.forRoot = function () {
        return {
            ngModule: IonTagsInputModule, providers: []
        };
    };
    IonTagsInputModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_2__angular_core__["a" /* NgModule */], args: [{
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_common__["c" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */],
                        __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* ReactiveFormsModule */]
                    ],
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ion_tags_input__["a" /* IonTagsInput */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ion_tags_input__["a" /* IonTagsInput */]
                    ]
                },] },
    ];
    /** @nocollapse */
    IonTagsInputModule.ctorParameters = [];
    return IonTagsInputModule;
}());
//# sourceMappingURL=ion-tags-input.module.js.map

/***/ })

});
//# sourceMappingURL=0.main.js.map