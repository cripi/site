if (!("onhashchange" in window) || $.browser.msie) { 
    var prevHash = window.location.hash;
    window.setInterval(function () {
       if (window.location.hash != prevHash) {
          storedHash = window.location.hash;
            $(window).trigger('hashchange');
       }
    }, 100);
}


BEM.DOM.decl('b-page', {
    HASH: ['index', 'faq', 'interface-development', 'interface-design', 'javascript'],

    onSetMod: {
        'js': function(){
            var self = this;
            self._bMenu = self.findBlockInside('b-menu');
            _menuItems = self._bMenu.elem('item');

            self._menuItems = {};

            _menuItems.map(function(i){
                var item = _menuItems.eq(i);
                self._menuItems[item.data('hash')] = item;

            });

            texts = self.findBlocksInside('b-static-text');

            self._texts = {};
            for (var i = 0; i < texts.length; i++){
                var item = texts[i];
                self._texts[item.domElem.data('hash')] = item;
            };

            this.bindToWin('hashchange', self._hashChange);
            self._hashChange();
        }
    },

    _hashChange: function(){
        var self = this;

        if (self._current) {
            self._flushOld();
        }

        self._pageHash = window.location.hash.substring(1);
        if (self.HASH.indexOf(self._pageHash) == -1) {
            self._pageHash = 'index';
        }

        self._current = self._pageHash;

        self._showPage(self._pageHash);
    },

    _showPage: function(page){
        this._bMenu.setMod(this._menuItems[page], 'state', 'current');
        this._texts[page].setMod('visible', 'yes');
    },
    _flushOld: function(){
        this._bMenu.delMod(this._menuItems[this._current], 'state');
        this._texts[this._current].delMod('visible')
    }
});
