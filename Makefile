
build/build.js: components index.js lib/*.js
	@component build

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
