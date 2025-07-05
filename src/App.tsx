import { useState } from 'react'
import CodeMirror from '@uiw/react-codemirror';

export function App() {
    const [data, setData] = useState<string>("");

    const onDataChange = (newData: string) => {
            setData(newData);
        }

    return (
        <CodeMirror
            width={"100vh"}
            height={"100vw"}
            value={data}
            onChange={onDataChange}
        />
    );

}
export default App
