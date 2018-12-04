import {Panel} from '@osjs/panels';

export default class ConkyWidget extends Widget {
  constructor(core,options) {
    super(core,options,{
      canvas: true,
      fps: 1,

      dimensions: {
        width: 50,
        height: 400
      }
    },{
      style: {
        background: '#000000'
      }
    });
  }
  onDestroy() {}
  onResize() {}
  onMove() {}
  render({canvas,context,width,height}) {
    const style = this.options.style;
    
    context.fillStyle = style.background;
    context.fillRect(0,0,width,height);
  }
}
