# default to running tests

# where to mount the sifnode tree
BASEDIR=/sifnode

all: test

.depend data: 
	mkdir -p $@

.depend/up: | .depend
	vagrant up
	touch $@

.depend/setup: .depend/up
	vagrant ssh -c "cd ${BASEDIR} && bash test/integration/setup-linux-environment.sh"
	touch $@

.PHONY: test
test: .depend/setup
	vagrant ssh -c "cd ${BASEDIR} && bash -x test/integration/start-integration-env.sh"

# convenience targets

up: .depend/up

reload:
	vagrant reload

clean:
	vagrant destroy -f
	rm -rf .depend

pulldata: data
	@vagrant ssh -c "docker exec integration_sifnode1_1 cat /tmp/testrun.sh" > data/clicmds.txt
	@vagrant ssh -c "docker logs integration_sifnode1_1" > data/integrationlog.txt
	@vagrant ssh -c "docker logs genesis_ganachecli_1" > data/ganachelog.txt
	@vagrant ssh -c "docker logs genesis_ganachecli_1" > data/ganachelog.txt
	@vagrant ssh -c "cat /sifnode/smart-contracts/.env" > data/env
	
cmds:
	@vagrant ssh -c "docker exec integration_sifnode1_1 cat /tmp/testrun.sh"

cmdsrm:
	vagrant ssh -c "docker exec integration_sifnode1_1 bash -c 'rm -f /tmp/testrun.sh'"

