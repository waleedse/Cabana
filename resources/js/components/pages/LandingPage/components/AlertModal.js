import React, { useEffect, useState } from 'react';

const AlertModal = () => {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        let currentModalState = localStorage.getItem("modalState");
        if (!currentModalState) {
            setShowModal(true)
        }
    }, [])
    return (

        <div class={showModal && "modal fade show"} id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" style={{ display: 'block', paddingRight: '10px' }} aria-modal="true">
            <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title title" id="exampleModalLongTitle" style={{ fontWeight: 700 }}><strong> 🚨 Important Public Awareness Announcement 🚨
                        </strong></h5>
                        <button type="button" onClick={() => { localStorage.setItem("modalState", false), setShowModal(false) }} class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        Beware of fraudulent schemes claiming to be associated with Aurum Markets! Aurum Markets DOES NOT offer trading robots or funded accounts.
                        <br /><br />
                        🚫 Don't fall for scams! Protect yourself from these fraudsters.
                        <br /><br />
                        For accurate information and promotions, always contact Aurum Markets's official support or visit their website. Your financial security matters!
                        <br /><br />
                        Spread the word and stay vigilant! #CabanaCapitalAwareness
                    </div>
                    {/* <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div> */}
                </div>
            </div>
        </div>

    );
};

export default AlertModal;
