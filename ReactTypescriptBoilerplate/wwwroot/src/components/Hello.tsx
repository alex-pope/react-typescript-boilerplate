import * as React from "react";
import { Button } from 'react-bootstrap';

export interface HelloProps { compiler: string; framework: string; }

export const Hello = (props: HelloProps) =>
    <h1>
        Hello from {props.compiler} and {props.framework}!<br/>
        <Button>Test Button</Button>
    </h1>;