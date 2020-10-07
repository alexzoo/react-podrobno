import React, {useState} from 'react';
import {action} from '@storybook/addon-actions'
import {UncontrolledOnOff} from "./UncontrolledOnOff";

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff
}

export const ModeChanging = () => {
    return <UncontrolledOnOff/>
}