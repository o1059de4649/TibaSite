import React, { Component, useState } from 'react';
import * as CommonMethods from '../common/commonMethods';
import './Table.css'

export function TableEx(props) {

    return (
        <table>
            <thead>
                <tr>
                    {props.columns.map((data, index) =>
                        <th key={index}>{data}</th>
                    )}
                </tr>
            </thead>
            <tbody>
                {props.modelList.map((model, modelIndex) =>
                    <tr key={modelIndex}>
                        {model.map((property, propertyIndex) =>
                            <td key={propertyIndex}>{property}</td>
                        )}
                    </tr>
                )}
            </tbody>
        </table>
    );
}


