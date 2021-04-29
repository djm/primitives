import * as React from 'react';
import * as ScrollArea from './ScrollArea';
import { css } from '../../../../stitches.config';

export default { title: 'Components/ScrollArea' };

export const Basic = () => {
  const [count, setCount] = React.useState(30);
  const [props, setProps] = React.useState({} as any);
  return (
    <>
      <div style={{ margin: '20px auto', width: 'max-content', textAlign: 'center' }}>
        <form
          onChange={(event) => {
            const formData = new FormData(event.currentTarget);
            const entries = (formData as any).entries();
            const cleanup = [...entries].map(([key, value]: any) => [key, value || undefined]);
            const props = Object.fromEntries(cleanup);
            setProps(props);
          }}
        >
          <label>
            type:{' '}
            <select name="type">
              <option></option>
              <option>always</option>
              <option>auto</option>
              <option>scroll</option>
              <option>hover</option>
            </select>
          </label>{' '}
          <label>
            dir:{' '}
            <select name="dir">
              <option></option>
              <option>ltr</option>
              <option>rtl</option>
            </select>
          </label>{' '}
          <label>
            scrollHideDelay: <input type="number" name="scrollHideDelay" />
          </label>
        </form>
        <button onClick={() => setCount((count) => count + 1)}>Add content</button>
      </div>

      <ScrollAreaStory
        {...props}
        key={props.type}
        style={{ width: '800px', height: '800px', margin: '30px auto' }}
      >
        {Array.from({ length: count }).map((_, index) => (
          <Copy key={index} />
        ))}
        {count > 30 && <p style={{ width: '1500%', marginTop: 0 }}>Really wide content</p>}
      </ScrollAreaStory>
    </>
  );
};

export const Resizable = () => (
  <div
    style={{
      width: 800,
      height: 800,
      padding: 20,
      resize: 'both',
      border: '1px solid gray',
      overflow: 'hidden',
    }}
  >
    <ScrollAreaStory>
      {Array.from({ length: 30 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>
  </div>
);

export const Chromatic = () => (
  <>
    <h1>Vertical</h1>
    <h2>Auto with overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Auto without overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      <Copy style={{ height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Always with overflow</h2>
    <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Always without overflow</h2>
    <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      <Copy style={{ height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Scroll with overflow</h2>
    <ScrollAreaStory type="scroll" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Scroll without overflow</h2>
    <ScrollAreaStory type="scroll" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      <Copy style={{ height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Hover with overflow</h2>
    <ScrollAreaStory type="hover" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Hover without overflow</h2>
    <ScrollAreaStory type="hover" style={{ width: 200, height: 200 }} vertical horizontal={false}>
      <Copy style={{ height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h1>Horizontal</h1>
    <h2>Auto with overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Auto without overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      <Copy style={{ width: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Always with overflow</h2>
    <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Always without overflow</h2>
    <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      <Copy style={{ width: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Scroll with overflow</h2>
    <ScrollAreaStory type="scroll" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Scroll without overflow</h2>
    <ScrollAreaStory type="scroll" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      <Copy style={{ width: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Hover with overflow</h2>
    <ScrollAreaStory type="hover" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Hover without overflow</h2>
    <ScrollAreaStory type="hover" style={{ width: 200, height: 200 }} vertical={false} horizontal>
      <Copy style={{ width: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h1>Both</h1>
    <h2>Auto with overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Auto with horizontal overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical horizontal>
      {Array.from({ length: 1 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Auto with vertical overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} style={{ width: 50, overflow: 'hidden' }} />
      ))}
    </ScrollAreaStory>

    <h2>Auto without overflow</h2>
    <ScrollAreaStory type="auto" style={{ width: 200, height: 200 }} vertical horizontal>
      <Copy style={{ width: 50, height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Always with overflow</h2>
    <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Always without overflow</h2>
    <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical horizontal>
      <Copy style={{ width: 50, height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Scroll with overflow</h2>
    <ScrollAreaStory type="scroll" style={{ width: 200, height: 200 }} vertical horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Scroll without overflow</h2>
    <ScrollAreaStory type="scroll" style={{ width: 200, height: 200 }} vertical horizontal>
      <Copy style={{ width: 50, height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h2>Hover with overflow</h2>
    <ScrollAreaStory type="hover" style={{ width: 200, height: 200 }} vertical horizontal>
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Hover without overflow</h2>
    <ScrollAreaStory type="hover" style={{ width: 200, height: 200 }} vertical horizontal>
      <Copy style={{ width: 50, height: 50, overflow: 'hidden' }} />
    </ScrollAreaStory>

    <h1>Min thumb size</h1>
    <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical horizontal>
      {Array.from({ length: 30 }).map((_, index) => (
        <Copy key={index} style={{ width: '1000%' }} />
      ))}
    </ScrollAreaStory>

    <h1>RTL</h1>
    <h2>Prop</h2>
    <ScrollAreaStory
      type="always"
      dir="rtl"
      style={{ width: 200, height: 200 }}
      vertical
      horizontal
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <Copy key={index} />
      ))}
    </ScrollAreaStory>

    <h2>Inherited</h2>
    <div dir="rtl">
      <ScrollAreaStory type="always" style={{ width: 200, height: 200 }} vertical horizontal>
        {Array.from({ length: 3 }).map((_, index) => (
          <Copy key={index} />
        ))}
      </ScrollAreaStory>
    </div>
  </>
);

const ScrollAreaStory = ({ children, vertical = true, horizontal = true, ...props }: any) => (
  <ScrollArea.Root {...props} className={scrollAreaClass}>
    <ScrollArea.Viewport className={scrollAreaViewportClass}>{children}</ScrollArea.Viewport>
    {vertical && (
      <ScrollArea.Scrollbar className={scrollbarVerticalClass} orientation="vertical">
        <ScrollArea.Thumb className={thumbVerticalClass} />
      </ScrollArea.Scrollbar>
    )}
    {horizontal && (
      <ScrollArea.Scrollbar className={scrollbarHorizontalClass} orientation="horizontal">
        <ScrollArea.Thumb className={thumbHorizontalClass} />
      </ScrollArea.Scrollbar>
    )}
    <ScrollArea.Corner className={cornerClass} />
  </ScrollArea.Root>
);

const Copy = (props: any) => (
  <p style={{ width: '500%', marginTop: 0, ...props.style }}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet eros iaculis, bibendum
    tellus ac, lobortis odio. Aliquam bibendum elit est, in iaculis est commodo id. Donec pulvinar
    est libero. Proin consectetur pellentesque molestie. Fusce mi ante, ullamcorper eu ante finibus,
    finibus pellentesque turpis. Mauris convallis, leo in vulputate varius, sapien lectus suscipit
    eros, ac semper odio sapien sit amet magna. Sed mattis turpis et lacinia ultrices. Nulla a
    commodo mauris. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
    ridiculus mus. Pellentesque id tempor metus. Pellentesque faucibus tortor non nisi maximus
    dignissim. Etiam leo nisi, molestie a porttitor at, euismod a libero. Nullam placerat tristique
    enim nec pulvinar. Sed eleifend dictum nulla a aliquam. Sed tempus ipsum eget urna posuere
    aliquam. Nulla maximus tortor dui, sed laoreet odio aliquet ac. Vestibulum dolor orci, lacinia
    finibus vehicula eget, posuere ac lectus. Quisque non felis at ipsum scelerisque condimentum. In
    pharetra semper arcu, ut hendrerit sem auctor vel. Aliquam non lacinia elit, a facilisis ante.
    Praesent eget eros augue. Praesent nunc orci, ullamcorper non pulvinar eu, elementum id nibh.
    Nam id lorem euismod, sodales augue quis, porttitor magna. Vivamus ut nisl velit. Nam ultrices
    maximus felis, quis ullamcorper quam luctus et.
  </p>
);

const SCROLLBAR_SIZE = 8;
const SCROLLBAR_HOVER_SIZE = 12;

const RECOMMENDED_CSS__SCROLLAREA__ROOT: any = {
  width: '100%',
  height: '100%',
};

const scrollAreaClass = css({
  ...RECOMMENDED_CSS__SCROLLAREA__ROOT,
  border: '1px solid black',
});

const RECOMMENDED_CSS__SCROLLAREA__VIEWPORT: any = {
  width: '100%',
  height: '100%',
};

const scrollAreaViewportClass = css({
  ...RECOMMENDED_CSS__SCROLLAREA__VIEWPORT,
});

const RECOMMENDED_CSS__SCROLLBAR__ROOT: any = {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
};

const scrollbarClass = css({
  ...RECOMMENDED_CSS__SCROLLBAR__ROOT,
  transition: '160ms ease-out',
  transitionProperty: 'background, opacity, width, height',
  padding: 2,
  background: 'rgba(0, 0, 0, 0.3)',
  '&:hover': {
    background: 'rgba(0, 0, 0, 0.5)',
  },
});

const scrollbarVerticalClass = css(scrollbarClass, {
  width: SCROLLBAR_SIZE,
  '&:hover': {
    width: SCROLLBAR_HOVER_SIZE,
  },
});

const RECOMMENDED_CSS__SCROLLBAR__HORIZONTAL: any = {
  flexDirection: 'column',
};

const scrollbarHorizontalClass = css(scrollbarClass, {
  ...RECOMMENDED_CSS__SCROLLBAR__HORIZONTAL,
  height: SCROLLBAR_SIZE,
  '&:hover': {
    height: SCROLLBAR_HOVER_SIZE,
  },
});

const RECOMMENDED_CSS__SCROLLBAR__THUMB: any = {
  flex: 1,
};

const thumbClass = css({
  ...RECOMMENDED_CSS__SCROLLBAR__THUMB,
  background: 'black',
  borderRadius: SCROLLBAR_SIZE,
});

const thumbHorizontalClass = css(thumbClass, {
  // minWidth: 40,
});

const thumbVerticalClass = css(thumbClass, {
  // minHeight: 40,
});

const cornerClass = css({
  background: 'black',
});
