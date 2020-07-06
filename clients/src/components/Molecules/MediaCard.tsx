/** @jsx jsx */
import { RouteComponentProps, withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { restaurantArea } from '@/const/restaurant';
import { jsx, SerializedStyles } from '@emotion/core';

interface Props extends RouteComponentProps<{}> {
  area: string;
  mediaUrl: string;
  mediaSize: SerializedStyles;
  restaurantId: number;
  restaurantName: string;
}

const MediaCard = (props: Props): JSX.Element => {
  const { area, mediaUrl, mediaSize, restaurantName, restaurantId } = props;
  return (
    <Card>
      <CardActionArea onClick={(): void => props.history.push(`/detail/${restaurantId}`)}>
        <CardMedia image={mediaUrl} css={mediaSize} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {restaurantName}
          </Typography>
          <Typography>エリア： {restaurantArea[area]}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withRouter(MediaCard);
