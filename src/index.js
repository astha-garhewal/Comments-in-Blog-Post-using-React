import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = function() {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div>
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam"
                    text="I like your post." 
                    date="Today at 5:00 PM" 
                    avatar={faker.image.avatar()} 
                />
            </ApprovalCard>
            
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    text="Nice post!" 
                    date="Today at 9:00 PM" 
                    avatar={faker.image.avatar()}
                />
           </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    text="Valuable!" 
                    date="Today at 9:30 PM" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author="Ema" 
                    text="Great work." 
                    date="Today at 1:00 PM" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard> 
            <ApprovalCard>
                <CommentDetail 
                    author="Jonas" 
                    text="Well said." 
                    date="Today at 10:00 PM" 
                    avatar={faker.image.avatar()}
                />
            </ApprovalCard> 
         
    </div>
    );
};

ReactDOM.render(<App />, document.querySelector('#root'));