import React, { Component } from 'react'
import qs from 'qs'

export class AragonPerVote extends Component {
  
  render() {
    const p = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
    console.log(p);
    return (
      <iframe
      title="Aragon Per Vote"
        src={`https://nansen-pro.d5.ai/public/dashboard/41ccb06d-58b5-4b9f-9318-8a03d066fb2d?voting_app_contract_address=${p.voting_app_contract_address}&vote_id=${p.vote_id}`}
        frameborder="0"
        width="100%"
        height="1000px"
        allowtransparency
      ></iframe>
    )
  }
}

export default AragonPerVote;
