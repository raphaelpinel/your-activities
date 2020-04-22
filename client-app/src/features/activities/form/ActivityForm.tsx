import React, { useState, FormEvent } from 'react';
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import { v4 as uuid } from 'uuid';

interface IProps {
  setEditMode: (editMode: boolean) => void;
  activity: IActivity | null;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  submitting: boolean;
}

export const ActivityForm: React.FC<IProps> = ({
  setEditMode,
  activity: initialFormState,
  createActivity,
  editActivity,
  submitting,
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: '',
      };
    }
  };

  const [activity, setActivity] = useState<IActivity>(initializeForm());
  const handleSubmit = () => {
    if (activity.id.length === 0) {
      let newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity);
    } else {
      editActivity(activity);
    }
  };
  const handleInputChange = (event: FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input placeholder="Title" name="title" value={activity.title} onChange={handleInputChange} />
        <Form.TextArea
          rows={2}
          placeholder="Description"
          name="description"
          value={activity.description}
          onChange={handleInputChange}
        />
        <Form.Input placeholder="Category" name="category" value={activity.category} onChange={handleInputChange} />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          name="date"
          value={activity.date}
          onChange={handleInputChange}
        />
        <Form.Input placeholder="City" name="city" value={activity.city} onChange={handleInputChange} />
        <Form.Input placeholder="Venue" name="venue" value={activity.venue} onChange={handleInputChange} />
        <Button floated="right" positive type="submit" content="Submit" loading={submitting} />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          type="button"
          content="Cancel"
          style={{ marginRight: 10 }}
        />
      </Form>
    </Segment>
  );
};
