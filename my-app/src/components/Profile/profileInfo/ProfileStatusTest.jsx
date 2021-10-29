import React from "react";
import ProfileStatus from "./ProfileStatus";
import {create} from  "react-test-renderer"

describe("ProfileStatus component",()=>{
    test("status from props should bbe in the state", ()=>{
        const component = create(<ProfileStatus status="Subscribe to basic"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("Subscribe to basic");

    });
    test("")
})