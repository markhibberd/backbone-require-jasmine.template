MFLAGS = -s
MAKEFLAGS = ${MFLAGS}
ENVIRONMENT = default
STAMP = `date +"%s"`
STAMPED = dist.${STAMP}
DIST = gen/dist
DIST_STAMPED = gen/${STAMPED}
LIVE = gen/live


.PHONY: dist live test test-node test-phantom

default: test

test-node:
	node test/node-runner.js

test-phantom:
	phantomjs test/phantom-runner.js test/runner.html

test: test-node test-phantom

dist:
	rm -rf ${DIST}
	node build/r.js -o build/app.build.js

live: dist
	cp -r ${DIST} ${DIST_STAMPED}
	[ -e ${LIVE} ] && rm ${LIVE}
	ln -s ${STAMPED} ${LIVE}
