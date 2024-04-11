import Card from 'react-bootstrap/Card';

const PicPhotoList = ({list, LinkRouter}) => {
  // console.log("click2");
  // console.log(list);

  return (
    <LinkRouter to={`${'/photo/'}${list.id}`} tabIndex={600}>
      <Card>
          <div className='imgDate'>
            <Card.Img variant="top" src={list.image.url} />
            <span>{list.date}</span>
          </div>
          <Card.Body>
            <Card.Text style={{ fontSize: '0.75em' }}>{list.tag}</Card.Text>
            <Card.Title style={{ fontSize: '1.34em' }}>{list.title}</Card.Title>
          </Card.Body>
      </Card>
    </LinkRouter>
  );
}

export default PicPhotoList;