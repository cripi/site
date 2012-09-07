({
    "all": {
        "": "\n// XXX: Support tanker-like syntax of keys in `i-bem__i18n`\n// i18n['prj']['keyset']['key'](params);\nvar i18n = i18n || {};\n\n(function(bem_, undefined) {\n\nvar cache = {},\n    // {String[]} A stack used for restoring context with dynamic keysets\n    stack = [],\n    /** {String} */\n    MOD_DELIM = '_',\n    /** {String} */\n    ELEM_DELIM = '__',\n    /** {String} */\n    DEFAULT_LANG = 'ru';\n\nfunction bemName(decl) {\n\n    typeof decl === 'string' && (decl = { block: decl });\n\n    return decl.block +\n        (decl.elem ? (ELEM_DELIM + decl.elem) : '') +\n        (decl.modName ? MOD_DELIM + decl.modName + MOD_DELIM + decl.modVal : '');\n\n}\n\nfunction bemParse(name) {\n\n    var bemitem = {};\n\n    name.split(ELEM_DELIM).forEach(function(item, i) {\n        var keys = [ i ? 'elem' : 'block', 'mod', 'val' ];\n\n        item.split(MOD_DELIM).forEach(function(part, j) {\n            bemitem[keys[j]] = part;\n        });\n    });\n\n    return bemitem;\n\n}\n\nfunction _pushStack(name) {\n    if(!name) return false;\n\n    var len = stack.length;\n    return !(len && stack[len - 1] === name) && stack.push(name);\n}\n\nfunction _popStack(name) {\n    var len = stack.length;\n    return len && stack[len - 1] !== name && stack.pop();\n}\n\n/**\n * @constructor\n */\nfunction _i18n() {\n    this._lang = '';\n    this._prj = 'lego'; // FIXME: bem-bl?\n    this._keyset = '';\n    this._key = '';\n}\n\n_i18n.prototype = {\n\n    lang : function(name) {\n        this._lang = name;\n        return this;\n    },\n\n    project : function(name) {\n        this._prj = name;\n        return this;\n    },\n\n    keyset : function(name) {\n        _pushStack(this._keyset);\n\n        this._keyset = bemName(name);\n        return this;\n    },\n\n    key : function(name) {\n        this._key = name;\n        return this;\n    },\n\n    /**\n     * FIXME: Move legacy-syntax support into separat method\n     * @param {Object|Function} v\n     */\n    decl : function(v) {\n        var bemitem = bemParse(this._keyset),\n            // tanker legacy syntax\n            prj = bemitem.block === 'i-tanker' ? 'tanker' : this._prj,\n            keyset = bemitem.elem || this._keyset,\n            key = this._key;\n\n        prj = i18n[prj] || (i18n[prj] = {});\n        keyset = prj[keyset] || (prj[keyset] = {});\n        keyset[key] = typeof v === 'function' ? v : (function(p) { return (v); });\n\n        // `BEM.I18N` syntax\n        var l = cache[this._lang] || (cache[this._lang] = {}),\n            k = l[this._keyset] || (l[this._keyset] = {});\n\n        k[key] = v;\n    },\n\n    val : function(params, thisCtx) {\n        var value = cache[this._lang] && cache[this._lang][this._keyset];\n        if(!value) {\n            console && console.log &&\n                console.log(\"[Error] keyset: \" + this._keyset + \" key: \" + this._key + \" (lang: \" + this._lang + \")\");\n            return '';\n        }\n\n        value = value[this._key];\n        if(!value) return '';\n\n        try{\n            return typeof value === 'string' ?\n                value : thisCtx ? value.call(thisCtx, params) : value.call(this, params);\n        } catch(e) {\n            throw \"[Error] keyset: \" + this._keyset + \" key: \" + this._key + \" (lang: \" + this._lang + \")\";\n        }\n    },\n\n    _c : function() { return cache; }\n\n};\n\n/**\n * @namespace\n * @lends BEM.I18N\n */\nbem_.I18N = (function(base) {\n\n    /**\n     * Shortcut to get key value\n     *\n     * @param {String|Object} keyset\n     * @param {String} key\n     * @param {Object} [params]\n     * @return {String}\n     */\n    var klass = function(keyset, key, params) {\n        return klass.keyset(keyset).key(key, params);\n    };\n\n    ['project', 'keyset'].forEach(function(p) {\n        klass[p] = function(v) { this._i18n[p](v); return this; };\n    });\n\n    /**\n     * @param {String} name Key name\n     * @param {Object} params\n     * @return {String}\n     */\n    klass.key = function(name, params) {\n        var proto = this._i18n,\n            _keyset, result;\n\n        proto.lang(this._currentLang).key(name);\n\n        result = proto.val.call(proto, params, klass);\n\n        // восстанавливаем значение предыдущего кейсета, если нужно\n        _keyset = _popStack(proto._keyset);\n        _keyset && proto.keyset(_keyset);\n\n        return result;\n    };\n\n    /**\n     * Declaration of translations\n     *\n     * @param {String|Object} bemitem\n     * @param {Object} keysets\n     * @param {Object} [declProps] declaration params\n     */\n    klass.decl = function(bemitem, keysets, declProps) {\n        var proto = this._i18n, k;\n\n        declProps || (declProps = {});\n        declProps.lang && proto.lang(declProps.lang);\n\n        proto.keyset(bemitem);\n\n        for(k in keysets)\n            proto.key(k).decl(keysets[k]);\n\n        return this;\n    };\n\n    /**\n     * Get/set current language\n     *\n     * @param {String} [lang]\n     * @return {String}\n     */\n    klass.lang = function(lang) {\n        typeof lang !== undefined\n            && (this._currentLang = lang);\n\n        return this._currentLang;\n    };\n\n    klass._i18n = base;\n\n    klass._currentLang = DEFAULT_LANG;\n\n    return klass;\n\n}(new _i18n()));\n\n/** Global */\nBEM = this.BEM = bem_;\n\n})(typeof BEM === 'undefined' ? {} : BEM);\n"
    }
})
