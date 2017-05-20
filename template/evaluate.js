import path from 'path';
import {transform} from 'babel-core';
import Module from 'module';
import babelConfig from '../babelrc.json';

function evaluate(contents, filename = '') {
	const m = new Module(filename, module.parent);

	m.filename = filename;
	m.paths =  Module._nodeModulePaths(path.dirname(filename));

  const code = transform(contents, babelConfig).code;
	m._compile(code, filename);

	return m.exports;
}

export default evaluate;
