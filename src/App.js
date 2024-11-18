import Accordion from "./components/Accordion";
import{UseRefExample,UseMemoExample,UseCallbackExample,UseReducerExample,UseLayoutEffectExample,UseImperativeHandleExample} from './hooks/index'

const App = () => {
  return (
    <div className="container">
      <div className="text-center mt-2">
        <h2>یادگیری و استفاده از هوک های ری اکت 🚀</h2>
      </div>
      <hr className="text-danger" />
      <Accordion title="مثال هوک useRef" heading="headingOne">
        <UseRefExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="مثال هوک useMemo" heading="headingTwo">
        <UseMemoExample />
      </Accordion>
      <hr className="text-primary" />
      <Accordion title="مثال هوک useCallBack" heading="headingThree">
        <UseCallbackExample />
      </Accordion>
      <hr className="text-success" />
      <Accordion title="مثال هوک useReducer" heading="headingFour">
        <UseReducerExample />
      </Accordion>
      <hr className="text-success" />
      <Accordion title="مثال هوک useLayoutEffect" heading="headingFive">
        <UseLayoutEffectExample />
      </Accordion>
      <hr className="text-success" />
      <Accordion title="مثال هوک useLayoutEffect" heading="headingSix">
        <UseImperativeHandleExample />
      </Accordion>
      <hr className="text-success" />
    </div>
  );
};

export default App;
