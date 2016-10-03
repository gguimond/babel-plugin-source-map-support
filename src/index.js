module.exports = function (babel) {
    return {
        visitor: {
            Program(path, state) {
                const identifier = babel.types.identifier('sourceMapSupport');
                const importDefaultSpecifier = babel.types.importDefaultSpecifier(identifier);
                const importDeclaration = babel.types.importDeclaration([importDefaultSpecifier], babel.types.stringLiteral('source-map-support'));
                path.unshiftContainer('body', babel.types.expressionStatement(babel.types.callExpression(babel.types.memberExpression(identifier,babel.types.identifier('install')),[])));
                path.unshiftContainer('body', importDeclaration);
            }
        }
    }
}