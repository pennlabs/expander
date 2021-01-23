import { Construct } from "constructs";
import { App, Stack, Workflow } from "cdkactions";
import { DeployJob, DockerPublishJob } from "@pennlabs/kraken";

export class ExpanderStack extends Stack {
  constructor(scope: Construct, name: string) {
    super(scope, name);
    const workflow = new Workflow(this, 'build-and-deploy', {
      name: 'Build and Deploy',
      on: 'push',
    });

    const publishJob = new DockerPublishJob(workflow, 'publish', {
      imageName: 'expander'
    });

    new DeployJob(workflow, {}, {
      needs: [publishJob.id]
    });
  }
}

const app = new App();
new ExpanderStack(app, 'platform');
app.synth();
