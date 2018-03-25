import React from 'react'

const Community = () => {
  return (
    <div className="container">
      <h1 className="title">Comments</h1>
      <hr />
      <article className="media">
        <figure className="media-left">
          <p className="image">
            <span className="icon is-large"><i className="fas fa-3x fa-user-circle"></i></span>
          </p>
        </figure>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>Barbara Middleton</strong>
              <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
              <br />
              <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
            </p>
          </div>

          <article className="media">
            <figure className="media-left">
            <p className="image">
              <span className="icon is-large"><i className="fas fa-3x fa-user-circle"></i></span>
            </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Sean Brown</strong>
                  <br />
                  Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.
                  <br />
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>

              <article className="media">
                Vivamus quis semper metus, non tincidunt dolor. Vivamus in mi eu lorem cursus ullamcorper sit amet nec massa.
              </article>

              <article className="media">
                Morbi vitae diam et purus tincidunt porttitor vel vitae augue. Praesent malesuada metus sed pharetra euismod. Cras tellus odio, tincidunt iaculis diam non, porta aliquet tortor.
              </article>
            </div>
          </article>

          <article className="media">
            <figure className="media-left">
            <p className="image">
              <span className="icon is-large"><i className="fas fa-3x fa-user-circle"></i></span>
            </p>
            </figure>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>Kayli Eunice </strong>
                  <br />
                  Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.
                  <br />
                  <small><a>Like</a> · <a>Reply</a> · 2 hrs</small>
                </p>
              </div>
            </div>
          </article>
        </div>
      </article>
      <article className="media">
        <figure className="media-left">
          <p className="image">
            <span className="icon is-large"><i className="fas fa-3x fa-user-circle"></i></span>
          </p>
        </figure>
        <div className="media-content">
          <div className="field">
            <p className="control">
              <textarea className="textarea" placeholder="Add a comment..."></textarea>
            </p>
          </div>
          <div className="field">
            <p className="control">
              <button className="button">Post comment</button>
            </p>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Community