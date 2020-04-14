var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Aeromobile = /** @class */ (function () {
    function Aeromobile(sigla) {
        this.Sigla = sigla;
    }
    Object.defineProperty(Aeromobile.prototype, "getCodAeromobile", {
        get: function () {
            return this.Sigla;
        },
        enumerable: true,
        configurable: true
    });
    Aeromobile.prototype.Higher = function (plane) {
        var IsHigher;
        if (plane instanceof Aliante && this instanceof Aliante) {
            var effAero1 = this.getEffAero;
            var effAero2 = plane.getEffAero;
            if (effAero1 > effAero2)
                IsHigher = true;
            else
                IsHigher = false;
        }
        else if (plane instanceof AereoMotore && this instanceof AereoMotore) {
            var potProp1 = this.getPotProp;
            var potProp2 = plane.getPotProp;
            if (potProp1 > potProp2)
                IsHigher = true;
            else
                IsHigher = false;
        }
        return IsHigher;
    };
    return Aeromobile;
}());
var Aliante = /** @class */ (function (_super) {
    __extends(Aliante, _super);
    function Aliante(sigla, eff_aerodinam) {
        var _this = _super.call(this, sigla) || this;
        _this.Sigla = sigla;
        _this.EfficienzaAerodinamica = eff_aerodinam;
        return _this;
    }
    Object.defineProperty(Aliante.prototype, "getEffAero", {
        get: function () {
            return this.EfficienzaAerodinamica;
        },
        enumerable: true,
        configurable: true
    });
    return Aliante;
}(Aeromobile));
var AereoMotore = /** @class */ (function (_super) {
    __extends(AereoMotore, _super);
    function AereoMotore(sigla, pot_prop) {
        var _this = _super.call(this, sigla) || this;
        _this.Sigla = sigla;
        _this.PotenzaPropulsore = pot_prop;
        return _this;
    }
    Object.defineProperty(AereoMotore.prototype, "getPotProp", {
        get: function () {
            return this.PotenzaPropulsore;
        },
        enumerable: true,
        configurable: true
    });
    return AereoMotore;
}(Aeromobile));
var boeing = new AereoMotore("BG777", 10000);
var airbus = new AereoMotore("AB878", 15000);
var alias = new Aliante("AL969", 5000);
var compare = boeing.Higher(airbus);
if (compare) {
    console.log("Il velivolo è PIÙ efficiente di quello comparato.");
}
else {
    console.log("Il velivolo è MENO efficiente di quello comparato.");
}
//# sourceMappingURL=Aeromobili.js.map