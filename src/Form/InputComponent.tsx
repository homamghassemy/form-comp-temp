import React from 'react'
import { IInputData } from './Models'

export default class InputComponent extends React.Component<IInputData> {
    constructor(props: IInputData) {
        super(props)
        this.onChange = this.onChange.bind(this)
    }

    onChange(e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
        this.props.onChange && this.props.onChange({
            name: this.props.name,
            value: e.currentTarget.value
        })
    }

    render() {
        const value: string | undefined = this.props.value
        const name: string = this.props.name
        const type: string = this.props.type ? this.props.type : "text"

        return (
            <fieldset>
                <label>
                    {this.props.label}
                    {
                        this.props.type === 'textarea'
                            ? (<textarea name={name} value={value} onChange={this.onChange} />)
                            : (<input type={type} name={name} value={value} onChange={this.onChange} />)
                    }
                </label>
            </fieldset>
        )
    }
}
