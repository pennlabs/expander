import { Construct } from 'constructs';
import { App } from 'cdk8s';
import { Application, PennLabsChart } from '@pennlabs/kittyhawk';

export class MyChart extends PennLabsChart {
  constructor(scope: Construct) {
    super(scope);

    const domain = 'u.pennlabs.org';
    const image = 'pennlabs/expander';

    new Application(this, 'expander', {
      deployment: {
        image,
        env: [{
          name: "PLATFORM_URL",
          value: "https://platform.pennlabs.org/s"
        }]
      },
      ingress: {
        rules: [{
          host: domain,
          paths: ['/'],
          isSubdomain: true,
        }],
      },
    });
  }
}

const app = new App();
new MyChart(app);
app.synth();
