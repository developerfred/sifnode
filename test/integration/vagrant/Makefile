# default to running tests

# where to mount the sifnode tree
BASEDIR=/sifnode

.PHONY: all
all: 
	-$(MAKE) test
	$(MAKE) pulldata

.depend data: 
	mkdir -p $@

.depend/up: | .depend
	vagrant up
	touch $@

.depend/setup: .depend/up
	vagrant ssh -c "cd ${BASEDIR} && bash test/integration/setup-linux-environment.sh"
	touch $@

.PHONY: test
test: .depend/setup data
	vagrant ssh -c "cd ${BASEDIR} && bash -x test/integration/start-integration-env.sh" 2>&1 | tee data/testrun.sh

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
	@vagrant ssh -c "cd /sifnode/smart-contracts && truffle networks" > data/trufflenetworks.txt
	
cmds:
	@vagrant ssh -c "docker exec integration_sifnode1_1 cat /tmp/testrun.sh"

cmdsrm:
	vagrant ssh -c "docker exec integration_sifnode1_1 bash -c 'rm -f /tmp/testrun.sh'"

