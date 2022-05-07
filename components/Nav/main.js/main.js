import React from 'react';
import nav from './components/Nav';
import Mindmap from '.components/Mindmap'
function app() {
    const categories = [
        {
            name: ""
        }
    ]
    return (
        <div>
            <Nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a href="#home"></a>
                    </li>
                    <li className="mx-2">
                        <a href="#themap"></a>
                    </li>
                </ul>
            </Nav>
            
            <main>
                <Mindmap></Mindmap>
            </main>          
        
        </div>
    );
}

export default App;