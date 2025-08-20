
import { FormBuilder } from '@react-form-builder/designer';
import { builderViewWithCss } from '@react-form-builder/components-rsuite';

function App() {
  return (
    <div style={{ height: '100vh', width: '100%' }}>
      <FormBuilder view={builderViewWithCss} />
    </div>
  );
}

export default App;
