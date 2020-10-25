import React, {useState} from 'react';

export default function Preview(props) {
  return (
        <div className="card">
                <div className="portfolioProp">
                    <div className="project">
                        <div className="title">
                            <strong>{props.email}</strong>
                        </div>
                        <br />
                        <div className="description">
                            <strong>{props.message}</strong>
                        </div>
                    </div>
                </div>
        </div>
  )
}
