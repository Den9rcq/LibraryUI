const $ = function (selector) {
    return new $.prototype.init(selector);
};

$.prototype.init = function (selector) {
    if (!selector) {
        return this;                                                //^ Возвращает пустой объект - {}
    }

    if (selector.tagName) {
        this[0] = selector;
        this.length = 1;
        return this;
    }

    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;       //^ Свойство показывающие количество элементов
    return this;
};

$.prototype.init.prototype = $.prototype;                           //^ На объекте который создаётся при помощи $ мы можем использовать методы внутри прототипа этой функции

window.$ = $;                                                       //^ Записываем в глобальный объект

export default $;
