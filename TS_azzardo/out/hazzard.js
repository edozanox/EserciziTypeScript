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
var Azzardo = /** @class */ (function () {
    function Azzardo() {
    }
    return Azzardo;
}());
var Dado = /** @class */ (function (_super) {
    __extends(Dado, _super);
    function Dado() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dado.prototype.Lancia = function () {
        var numero_estratto = getRandomInt(1, 6);
        return numero_estratto;
    };
    return Dado;
}(Azzardo));
var Moneta = /** @class */ (function (_super) {
    __extends(Moneta, _super);
    function Moneta() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Moneta.prototype.Lancia = function () {
        var faccia_estratta = getRandomInt(0, 1);
        return faccia_estratta;
    };
    return Moneta;
}(Azzardo));
function getRandomInt(val_min, val_max) {
    var min = Math.ceil(val_min);
    var max = Math.floor(val_max);
    var rndm = Math.floor(Math.random() * (max - min + 1)) + min;
    return rndm;
}
function AvviaLancio() {
    var OggLanciato;
    var valoreLancio = 0;
    var opzioni = document.getElementsByName("scelta");
    var selezione = document.querySelector("input[name = scelta]:checked").value;
    if (selezione == null) {
        document.getElementById("ValLancio").innerHTML = "Nessuna opzione di lancio selezionata!";
    }
    if (selezione == "dado") {
        OggLanciato = new Dado();
        valoreLancio = OggLanciato.Lancia();
        document.getElementById("ValLancio").innerHTML = valoreLancio.toString();
    }
    else if (selezione = "moneta") {
        OggLanciato = new Moneta();
        valoreLancio = OggLanciato.Lancia();
        if (valoreLancio == 1) {
            document.getElementById("ValLancio").innerHTML = "CROCE";
        }
        else {
            document.getElementById("ValLancio").innerHTML = "TESTA";
        }
    }
}
//# sourceMappingURL=hazzard.js.map