// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React from 'react';
import {
  AddMemberModal,
  ManageMembersModal,
  DeleteChannelModal,
  NewChannelModal,
  LeaveChannelModal,
  ViewChannelDetailsModal,
  ViewMembersModal,
  EditChannelModal,
  BanModal,
  JoinMeetingModal,
} from '../../components/ChannelModals';

const ModalManager = ({
  modal,
  setModal,
  notGroup,
  activeChannel,
  meetingInfo,
  userId,
  onAddMember,
  handleChannelDeletion,
  handleJoinMeeting,
  handleMessageAll,
  handleDeleteMemberships,
  handlePickerChange,
  formatMemberships,
  activeChannelMemberships,
  selectedMembers,
  onCreateChannel,
  activeChannelModerators,
  handleLeaveChannel,
  banList,
  banUser,
  unbanUser,
}) => {
  if (!modal) {
    return null;
  }

  switch (modal) {
    case 'AddMembers':
      return (
        <AddMemberModal
          onClose={() => setModal('')}
          channel={activeChannel}
          onSubmit={onAddMember}
          notGroup={notGroup}
          handlePickerChange={handlePickerChange}
          members={activeChannelMemberships}
        />
      );
    case 'ManageMembers':
      return (
        <ManageMembersModal
          onClose={() => setModal('')}
          channel={activeChannel}
          userId={userId}
          handleDeleteMemberships={handleDeleteMemberships}
          handlePickerChange={handlePickerChange}
          members={formatMemberships(activeChannelMemberships)}
          selectedMembers={selectedMembers}
        />
      );
    case 'NewChannel':
      return (
        <NewChannelModal
          onClose={() => setModal('')}
          onCreateChannel={onCreateChannel}
        />
      );
    case 'ViewDetails':
      return (
        <ViewChannelDetailsModal
          onClose={() => setModal('')}
          channel={activeChannel}
          moderators={activeChannelModerators}
        />
      );
    case 'LeaveChannel':
      return (
        <LeaveChannelModal
          onClose={() => setModal('')}
          handleLeaveChannel={handleLeaveChannel}
          channel={activeChannel}
        />
      );
    case 'ViewMembers':
      return (
        <ViewMembersModal
          onClose={() => setModal('')}
          channel={activeChannel}
          members={activeChannelMemberships}
          moderators={activeChannelModerators}
        />
      );
    case 'EditChannel':
      return (
        <EditChannelModal
          onClose={() => setModal('')}
          channel={activeChannel}
          userId={userId}
        />
      );
    case 'Ban':
      return (
        <BanModal
          onClose={() => setModal('')}
          handlePickerChange={handlePickerChange}
          channel={activeChannel}
          members={activeChannelMemberships}
          moderators={activeChannelModerators}
          banList={banList}
          banUser={banUser}
          unbanUser={unbanUser}
        />
      );
    case 'DeleteChannel':
      return (
        <DeleteChannelModal
          onClose={() => setModal('')}
          channel={activeChannel}
          handleChannelDeletion={handleChannelDeletion}
        />
      );
    case 'JoinMeeting':
      return (
        <JoinMeetingModal
          onClose={() => setModal('')}
          meetingInfo={meetingInfo}
          handleJoinMeeting={handleJoinMeeting}
          handleMessageAll={handleMessageAll}
        />
      );
    default:
      console.log('Unknown modal type called');
      return null;
  }
};

export default ModalManager;
