import { Construct } from 'constructs';
import { App, Chart, ChartProps } from 'cdk8s';
import { WebService } from './lib/web-service';

export class MyChart extends Chart {
  constructor(scope: Construct, id: string, props: ChartProps = { }) {
    super(scope, id, props);

    // define resources here
    new WebService( this, 'hello-k8s', { image: 'paulbouwer/hello-kubernetes:1.7', replicas: 2 });
    new WebService( this, 'ghost', { image: 'ghost', containerPort: 2368 });
  }
}

const app = new App();
new MyChart(app, 'cdk8s-webservice');
app.synth();
