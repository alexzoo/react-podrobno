import React from 'react';
import {action} from '@storybook/addon-actions'
import UncontrolledAccordion from "./UncontrolledAccordion";
import {useState} from "react";

export default {
    title: 'UncontrolledAccordion stories',
    component: UncontrolledAccordion
}

// export const UncontrolledAccordionTitle = () => <UncontrolledAccordion titleValue={'UncontrolledAccordion'}/>


export const ChangingMode = () => {
    return <UncontrolledAccordion titleValue={'Users'}/>
}