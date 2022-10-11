// git clone "git@github.com:material-icons/material-icons.git"
// cd material-icons/svg
// echo "/** @typedef {'$(echo * | sd "\\s[^$]" "' | '")'} ICONS */" | xclip

import { css } from "@emotion/css";
/**
 * @param {ICONS} iconName
 * @return {HTMLSpanElement}
 */

function icon(iconName, size) {
  return <span style={css({ fontSize: size })}>{iconName}</span>;
}
export default icon;

//typedef of possible icons.

/** @typedef {'10k' | '0mp' | '1mp' | '23' | '2mp' | '3mp' | '4mp' | '5mp' | '6mp' | '7mp' | '8mp' | '8_up_rating' | '9mp' | 'k' | 'k_plus' | 'x_mobiledata' | '0mp' | '1mp' | '2mp' | '3mp' | '4mp' | 'k' | 'k_plus' | 'mp' | '0fps' | '0fps_select' | '60' | 'd_rotation' | 'g_mobiledata' | 'k' | 'k_plus' | 'mp' | 'p' | 'g_mobiledata' | 'g_plus_mobiledata' | 'k' | 'k_plus' | 'mp' | 'g' | 'k' | 'k_plus' | 'mp' | '0fps' | '0fps_select' | '_ft_apart' | 'k' | 'k_plus' | 'mp' | 'k' | 'k_plus' | 'mp' | 'k' | 'k_plus' | 'mp' | 'k' | 'k_plus' | 'mp' | 'bc' | 'ccess_alarm' | 'ccess_alarms' | 'ccessibility' | 'ccessibility_new' | 'ccessible' | 'ccessible_forward' | 'ccess_time' | 'ccess_time_filled' | 'ccount_balance' | 'ccount_balance_wallet' | 'ccount_box' | 'ccount_circle' | 'ccount_tree' | 'c_unit' | 'db' | 'dd' | 'dd_alarm' | 'dd_alert' | 'dd_a_photo' | 'dd_box' | 'dd_business' | 'dd_card' | 'dd_chart' | 'ddchart' | 'dd_circle' | 'dd_circle_outline' | 'dd_comment' | 'dd_home' | 'dd_home_work' | 'dd_ic_call' | 'dd_link' | 'dd_location' | 'dd_location_alt' | 'dd_moderator' | 'dd_photo_alternate' | 'dd_reaction' | 'dd_road' | 'dd_shopping_cart' | 'dd_task' | 'dd_to_drive' | 'dd_to_home_screen' | 'dd_to_photos' | 'dd_to_queue' | 'df_scanner' | 'djust' | 'dmin_panel_settings' | 'dobe' | 'ds_click' | 'd_units' | 'griculture' | 'ir' | 'irlines' | 'irline_seat_flat' | 'irline_seat_flat_angled' | 'irline_seat_individual_suite' | 'irline_seat_legroom_extra' | 'irline_seat_legroom_normal' | 'irline_seat_legroom_reduced' | 'irline_seat_recline_extra' | 'irline_seat_recline_normal' | 'irline_stops' | 'irplanemode_active' | 'irplanemode_inactive' | 'irplane_ticket' | 'irplay' | 'irport_shuttle' | 'larm' | 'larm_add' | 'larm_off' | 'larm_on' | 'lbum' | 'lign_horizontal_center' | 'lign_horizontal_left' | 'lign_horizontal_right' | 'lign_vertical_bottom' | 'lign_vertical_center' | 'lign_vertical_top' | 'll_inbox' | 'll_inclusive' | 'll_out' | 'lternate_email' | 'lt_route' | 'mp_stories' | 'nalytics' | 'nchor' | 'ndroid' | 'nimation' | 'nnouncement' | 'od' | 'partment' | 'pi' | 'pp_blocking' | 'pple' | 'pp_registration' | 'pproval' | 'pps' | 'pp_settings_alt' | 'pp_shortcut' | 'pps_outage' | 'rchitecture' | 'rchive' | 'rea_chart' | 'rrow_back' | 'rrow_back_ios' | 'rrow_back_ios_new' | 'rrow_circle_down' | 'rrow_circle_left' | 'rrow_circle_right' | 'rrow_circle_up' | 'rrow_downward' | 'rrow_drop_down' | 'rrow_drop_down_circle' | 'rrow_drop_up' | 'rrow_forward' | 'rrow_forward_ios' | 'rrow_left' | 'rrow_outward' | 'rrow_right' | 'rrow_right_alt' | 'rrow_upward' | 'rticle' | 'rt_track' | 'spect_ratio' | 'ssessment' | 'ssignment' | 'ssignment_ind' | 'ssignment_late' | 'ssignment_return' | 'ssignment_returned' | 'ssignment_turned_in' | 'ssistant' | 'ssistant_direction' | 'ssistant_photo' | 'ssist_walker' | 'ssured_workload' | 'tm' | 'ttach_email' | 'ttach_file' | 'ttachment' | 'ttach_money' | 'ttractions' | 'ttribution' | 'udio_file' | 'udiotrack' | 'uto_awesome' | 'uto_awesome_mosaic' | 'uto_awesome_motion' | 'uto_delete' | 'uto_fix_high' | 'uto_fix_normal' | 'uto_fix_off' | 'utofps_select' | 'uto_graph' | 'uto_mode' | 'utorenew' | 'uto_stories' | 'v_timer' | 'aby_changing_station' | 'ack_hand' | 'ackpack' | 'ackspace' | 'ackup' | 'ackup_table' | 'adge' | 'akery_dining' | 'alance' | 'alcony' | 'allot' | 'ar_chart' | 'arcode' | 'atch_prediction' | 'athroom' | 'athtub' | 'attery_0_bar' | 'attery_1_bar' | 'attery_20' | 'attery_2_bar' | 'attery_30' | 'attery_3_bar' | 'attery_4_bar' | 'attery_50' | 'attery_5_bar' | 'attery_60' | 'attery_6_bar' | 'attery_80' | 'attery_90' | 'attery_alert' | 'attery_charging_20' | 'attery_charging_30' | 'attery_charging_50' | 'attery_charging_60' | 'attery_charging_80' | 'attery_charging_90' | 'attery_charging_full' | 'attery_full' | 'attery_saver' | 'attery_std' | 'attery_unknown' | 'each_access' | 'ed' | 'edroom_baby' | 'edroom_child' | 'edroom_parent' | 'edtime' | 'edtime_off' | 'eenhere' | 'ento' | 'ike_scooter' | 'iotech' | 'lender' | 'lind' | 'linds' | 'linds_closed' | 'lock' | 'loodtype' | 'luetooth' | 'luetooth_audio' | 'luetooth_connected' | 'luetooth_disabled' | 'luetooth_drive' | 'luetooth_searching' | 'lur_circular' | 'lur_linear' | 'lur_off' | 'lur_on' | 'olt' | 'ook' | 'ookmark' | 'ookmark_add' | 'ookmark_added' | 'ookmark_border' | 'ookmark_remove' | 'ookmarks' | 'ook_online' | 'order_all' | 'order_bottom' | 'order_clear' | 'order_color' | 'order_horizontal' | 'order_inner' | 'order_left' | 'order_outer' | 'order_right' | 'order_style' | 'order_top' | 'order_vertical' | 'oy' | 'randing_watermark' | 'reakfast_dining' | 'rightness_1' | 'rightness_2' | 'rightness_3' | 'rightness_4' | 'rightness_5' | 'rightness_6' | 'rightness_7' | 'rightness_auto' | 'rightness_high' | 'rightness_low' | 'rightness_medium' | 'roadcast_on_home' | 'roadcast_on_personal' | 'roken_image' | 'rowse_gallery' | 'rowser_not_supported' | 'rowser_updated' | 'runch_dining' | 'rush' | 'ubble_chart' | 'ug_report' | 'uild' | 'uild_circle' | 'ungalow' | 'urst_mode' | 'us_alert' | 'usiness' | 'usiness_center' | 'abin' | 'able' | 'ached' | 'ake' | 'alculate' | 'alendar_month' | 'alendar_today' | 'alendar_view_day' | 'alendar_view_month' | 'alendar_view_week' | 'all' | 'all_end' | 'all_made' | 'all_merge' | 'all_missed' | 'all_missed_outgoing' | 'all_received' | 'all_split' | 'all_to_action' | 'amera' | 'amera_alt' | 'amera_enhance' | 'amera_front' | 'amera_indoor' | 'amera_outdoor' | 'amera_rear' | 'amera_roll' | 'ameraswitch' | 'ampaign' | 'ancel' | 'ancel_presentation' | 'ancel_schedule_send' | 'andlestick_chart' | 'ar_crash' | 'ard_giftcard' | 'ard_membership' | 'ard_travel' | 'arpenter' | 'ar_rental' | 'ar_repair' | 'ases' | 'asino' | 'ast' | 'ast_connected' | 'ast_for_education' | 'astle' | 'atching_pokemon' | 'ategory' | 'elebration' | 'ell_tower' | 'ell_wifi' | 'enter_focus_strong' | 'enter_focus_weak' | 'hair' | 'hair_alt' | 'halet' | 'hange_circle' | 'hange_history' | 'harging_station' | 'hat' | 'hat_bubble' | 'hat_bubble_outline' | 'heck' | 'heck_box' | 'heck_box_outline_blank' | 'heck_circle' | 'heck_circle_outline' | 'hecklist' | 'hecklist_rtl' | 'heckroom' | 'hevron_left' | 'hevron_right' | 'hild_care' | 'hild_friendly' | 'hrome_reader_mode' | 'hurch' | 'ircle' | 'ircle_notifications' | 'lass' | 'lean_hands' | 'leaning_services' | 'lear' | 'lear_all' | 'lose' | 'losed_caption' | 'losed_caption_disabled' | 'losed_caption_off' | 'lose_fullscreen' | 'loud' | 'loud_circle' | 'loud_done' | 'loud_download' | 'loud_off' | 'loud_queue' | 'loud_sync' | 'loud_upload' | 'o2' | 'ode' | 'ode_off' | 'offee' | 'offee_maker' | 'ollections' | 'ollections_bookmark' | 'olorize' | 'olor_lens' | 'omment' | 'omment_bank' | 'omments_disabled' | 'ommit' | 'ommute' | 'ompare' | 'ompare_arrows' | 'ompass_calibration' | 'ompost' | 'ompress' | 'omputer' | 'onfirmation_number' | 'onnected_tv' | 'onnecting_airports' | 'onnect_without_contact' | 'onstruction' | 'ontact_emergency' | 'ontactless' | 'ontact_mail' | 'ontact_page' | 'ontact_phone' | 'ontacts' | 'ontact_support' | 'ontent_copy' | 'ontent_cut' | 'ontent_paste' | 'ontent_paste_go' | 'ontent_paste_off' | 'ontent_paste_search' | 'ontrast' | 'ontrol_camera' | 'ontrol_point' | 'ontrol_point_duplicate' | 'ookie' | 'o_present' | 'opy_all' | 'opyright' | 'oronavirus' | 'orporate_fare' | 'ottage' | 'ountertops' | 'reate' | 'reate_new_folder' | 'redit_card' | 'redit_card_off' | 'redit_score' | 'rib' | 'risis_alert' | 'rop' | 'rop_16_9' | 'rop_3_2' | 'rop_5_4' | 'rop_7_5' | 'rop_din' | 'rop_free' | 'rop_landscape' | 'rop_original' | 'rop_portrait' | 'rop_rotate' | 'rop_square' | 'ruelty_free' | 'ss' | 'urrency_bitcoin' | 'urrency_exchange' | 'urrency_franc' | 'urrency_lira' | 'urrency_pound' | 'urrency_ruble' | 'urrency_rupee' | 'urrency_yen' | 'urrency_yuan' | 'urtains' | 'urtains_closed' | 'yclone' | 'angerous' | 'ark_mode' | 'ashboard' | 'ashboard_customize' | 'ata_array' | 'ata_exploration' | 'ata_object' | 'ata_saver_off' | 'ata_saver_on' | 'ataset' | 'ataset_linked' | 'ata_thresholding' | 'ata_usage' | 'ate_range' | 'eblur' | 'eck' | 'ehaze' | 'elete' | 'elete_forever' | 'elete_outline' | 'elete_sweep' | 'elivery_dining' | 'ensity_large' | 'ensity_medium' | 'ensity_small' | 'eparture_board' | 'escription' | 'eselect' | 'esign_services' | 'esk' | 'esktop_access_disabled' | 'esktop_mac' | 'esktop_windows' | 'etails' | 'eveloper_board' | 'eveloper_board_off' | 'eveloper_mode' | 'evice_hub' | 'evices' | 'evices_fold' | 'evices_other' | 'evice_thermostat' | 'evice_unknown' | 'ialer_sip' | 'ialpad' | 'iamond' | 'ifference' | 'ining' | 'inner_dining' | 'irections' | 'irections_bike' | 'irections_boat' | 'irections_boat_filled' | 'irections_bus' | 'irections_bus_filled' | 'irections_car' | 'irections_car_filled' | 'irections_off' | 'irections_railway' | 'irections_railway_filled' | 'irections_run' | 'irections_subway' | 'irections_subway_filled' | 'irections_transit' | 'irections_transit_filled' | 'irections_walk' | 'irty_lens' | 'isabled_by_default' | 'isabled_visible' | 'isc_full' | 'iscord' | 'iscount' | 'isplay_settings' | 'iversity_1' | 'iversity_2' | 'iversity_3' | 'ivide' | 'ns' | 'ock' | 'ocument_scanner' | 'o_disturb' | 'o_disturb_alt' | 'o_disturb_off' | 'o_disturb_on' | 'omain' | 'omain_add' | 'omain_disabled' | 'omain_verification' | 'one' | 'one_all' | 'one_outline' | 'o_not_disturb' | 'o_not_disturb_alt' | 'o_not_disturb_off' | 'o_not_disturb_on' | 'o_not_disturb_on_total_silence' | 'o_not_step' | 'o_not_touch' | 'onut_large' | 'onut_small' | 'oor_back' | 'oorbell' | 'oor_front' | 'oor_sliding' | 'ouble_arrow' | 'ownhill_skiing' | 'ownload' | 'ownload_done' | 'ownload_for_offline' | 'ownloading' | 'rafts' | 'rag_handle' | 'rag_indicator' | 'raw' | 'rive_eta' | 'rive_file_move' | 'rive_file_move_rtl' | 'rive_file_rename_outline' | 'rive_folder_upload' | 'ry' | 'ry_cleaning' | 'uo' | 'vr' | 'ynamic_feed' | 'ynamic_form' | 'arbuds' | 'arbuds_battery' | 'ast' | 'co' | 'dgesensor_high' | 'dgesensor_low' | 'dit' | 'dit_attributes' | 'dit_calendar' | 'dit_location' | 'dit_location_alt' | 'dit_note' | 'dit_notifications' | 'dit_off' | 'dit_road' | 'gg' | 'gg_alt' | 'ject' | 'lderly' | 'lderly_woman' | 'lectrical_services' | 'lectric_bike' | 'lectric_bolt' | 'lectric_car' | 'lectric_meter' | 'lectric_moped' | 'lectric_rickshaw' | 'lectric_scooter' | 'levator' | 'mail' | 'mergency' | 'mergency_recording' | 'mergency_share' | '_mobiledata' | 'moji_emotions' | 'moji_events' | 'moji_flags' | 'moji_food_beverage' | 'moji_nature' | 'moji_objects' | 'moji_people' | 'moji_symbols' | 'moji_transportation' | 'nergy_savings_leaf' | 'ngineering' | 'nhanced_encryption' | 'qualizer' | 'quals' | 'rror' | 'rror_outline' | 'scalator' | 'scalator_warning' | 'uro' | 'uro_symbol' | 'vent' | 'vent_available' | 'vent_busy' | 'vent_note' | 'vent_repeat' | 'vent_seat' | 'v_station' | 'xit_to_app' | 'xpand' | 'xpand_circle_down' | 'xpand_less' | 'xpand_more' | 'xplicit' | 'xplore' | 'xplore_off' | 'xposure' | 'xposure_neg_1' | 'xposure_neg_2' | 'xposure_plus_1' | 'xposure_plus_2' | 'xposure_zero' | 'xtension' | 'xtension_off' | 'ace' | 'ace_2' | 'ace_3' | 'ace_4' | 'ace_5' | 'ace_6' | 'acebook' | 'ace_retouching_natural' | 'ace_retouching_off' | 'act_check' | 'actory' | 'amily_restroom' | 'astfood' | 'ast_forward' | 'ast_rewind' | 'avorite' | 'avorite_border' | 'ax' | 'eatured_play_list' | 'eatured_video' | 'eed' | 'eedback' | 'emale' | 'ence' | 'estival' | 'iber_dvr' | 'iber_manual_record' | 'iber_new' | 'iber_pin' | 'iber_smart_record' | 'ile_copy' | 'ile_download' | 'ile_download_done' | 'ile_download_off' | 'ile_open' | 'ile_present' | 'ile_upload' | 'ilter' | 'ilter_1' | 'ilter_2' | 'ilter_3' | 'ilter_4' | 'ilter_5' | 'ilter_6' | 'ilter_7' | 'ilter_8' | 'ilter_9' | 'ilter_9_plus' | 'ilter_alt' | 'ilter_alt_off' | 'ilter_b_and_w' | 'ilter_center_focus' | 'ilter_drama' | 'ilter_frames' | 'ilter_hdr' | 'ilter_list' | 'ilter_list_off' | 'ilter_none' | 'ilter_tilt_shift' | 'ilter_vintage' | 'ind_in_page' | 'ind_replace' | 'ingerprint' | 'ire_extinguisher' | 'ire_hydrant_alt' | 'ireplace' | 'ire_truck' | 'irst_page' | 'itbit' | 'itness_center' | 'it_screen' | 'lag' | 'lag_circle' | 'laky' | 'lare' | 'lash_auto' | 'lashlight_off' | 'lashlight_on' | 'lash_off' | 'lash_on' | 'latware' | 'light' | 'light_class' | 'light_land' | 'light_takeoff' | 'lip' | 'lip_camera_android' | 'lip_camera_ios' | 'lip_to_back' | 'lip_to_front' | 'lood' | 'lourescent' | 'luorescent' | 'lutter_dash' | 'md_bad' | 'md_good' | 'older' | 'older_copy' | 'older_delete' | 'older_off' | 'older_open' | 'older_shared' | 'older_special' | 'older_zip' | 'ollow_the_signs' | 'ont_download' | 'ont_download_off' | 'ood_bank' | 'orest' | 'ork_left' | 'ork_right' | 'ormat_align_center' | 'ormat_align_justify' | 'ormat_align_left' | 'ormat_align_right' | 'ormat_bold' | 'ormat_clear' | 'ormat_color_fill' | 'ormat_color_reset' | 'ormat_color_text' | 'ormat_indent_decrease' | 'ormat_indent_increase' | 'ormat_italic' | 'ormat_line_spacing' | 'ormat_list_bulleted' | 'ormat_list_numbered' | 'ormat_list_numbered_rtl' | 'ormat_overline' | 'ormat_paint' | 'ormat_quote' | 'ormat_shapes' | 'ormat_size' | 'ormat_strikethrough' | 'ormat_textdirection_l_to_r' | 'ormat_textdirection_r_to_l' | 'ormat_underlined' | 'ort' | 'orum' | 'orward' | 'orward_10' | 'orward_30' | 'orward_5' | 'orward_to_inbox' | 'oundation' | 'ree_breakfast' | 'ree_cancellation' | 'ront_hand' | 'ullscreen' | 'ullscreen_exit' | 'unctions' | 'amepad' | 'ames' | 'arage' | 'as_meter' | 'avel' | 'enerating_tokens' | 'esture' | 'et_app' | 'if' | 'if_box' | 'irl' | 'ite' | '_mobiledata' | 'olf_course' | 'pp_bad' | 'pp_good' | 'pp_maybe' | 'ps_fixed' | 'ps_not_fixed' | 'ps_off' | 'rade' | 'radient' | 'rading' | 'rain' | 'raphic_eq' | 'rass' | 'reater_than' | 'reater_than_equal' | 'rid_3x3' | 'rid_4x4' | 'rid_goldenratio' | 'rid_off' | 'rid_on' | 'rid_view' | 'roup' | 'roup_add' | 'roup_off' | 'roup_remove' | 'roups' | 'roups_2' | 'roups_3' | 'roup_work' | '_translate' | 'ail' | 'andshake' | 'andyman' | 'ardware' | 'd' | 'dr_auto' | 'dr_auto_select' | 'dr_enhanced_select' | 'dr_off' | 'dr_off_select' | 'dr_on' | 'dr_on_select' | 'dr_plus' | 'dr_strong' | 'dr_weak' | 'eadphones' | 'eadphones_battery' | 'eadset' | 'eadset_mic' | 'eadset_off' | 'ealing' | 'ealth_and_safety' | 'earing' | 'earing_disabled' | 'eart_broken' | 'eat_pump' | 'eight' | 'elp' | 'elp_center' | 'elp_outline' | 'evc' | 'exagon' | 'ide_image' | 'ide_source' | 'ighlight' | 'ighlight_alt' | 'ighlight_off' | 'igh_quality' | 'iking' | 'istory' | 'istory_edu' | 'istory_toggle_off' | 'ive' | 'ls' | 'ls_off' | '_mobiledata' | 'oliday_village' | 'ome' | 'ome_max' | 'ome_mini' | 'ome_repair_service' | 'ome_work' | 'orizontal_distribute' | 'orizontal_rule' | 'orizontal_split' | 'otel' | 'otel_class' | 'ot_tub' | 'ourglass_bottom' | 'ourglass_disabled' | 'ourglass_empty' | 'ourglass_full' | 'ourglass_top' | 'ouse' | 'ouseboat' | 'ouse_siding' | 'ow_to_reg' | 'ow_to_vote' | '_plus_mobiledata' | 'tml' | 'ttp' | 'ttps' | 'ub' | 'vac' | 'cecream' | 'ce_skating' | 'mage' | 'mage_aspect_ratio' | 'mage_not_supported' | 'mage_search' | 'magesearch_roller' | 'mportant_devices' | 'mport_contacts' | 'mport_export' | 'nbox' | 'ncomplete_circle' | 'ndeterminate_check_box' | 'nfo' | 'nput' | 'nsert_chart' | 'nsert_chart_outlined' | 'nsert_comment' | 'nsert_drive_file' | 'nsert_emoticon' | 'nsert_invitation' | 'nsert_link' | 'nsert_page_break' | 'nsert_photo' | 'nsights' | 'nstall_desktop' | 'nstall_mobile' | 'ntegration_instructions' | 'nterests' | 'nterpreter_mode' | 'nventory' | 'nventory_2' | 'nvert_colors' | 'nvert_colors_off' | 'os_share' | 'ron' | 'so' | 'avascript' | 'oin_full' | 'oin_inner' | 'oin_left' | 'oin_right' | 'ayaking' | 'ebab_dining' | 'ey' | 'eyboard' | 'eyboard_alt' | 'eyboard_arrow_down' | 'eyboard_arrow_left' | 'eyboard_arrow_right' | 'eyboard_arrow_up' | 'eyboard_backspace' | 'eyboard_capslock' | 'eyboard_command_key' | 'eyboard_control_key' | 'eyboard_double_arrow_down' | 'eyboard_double_arrow_left' | 'eyboard_double_arrow_right' | 'eyboard_double_arrow_up' | 'eyboard_hide' | 'eyboard_option_key' | 'eyboard_return' | 'eyboard_tab' | 'eyboard_voice' | 'ey_off' | 'ing_bed' | 'itchen' | 'itesurfing' | 'abel' | 'abel_important' | 'abel_off' | 'an' | 'andscape' | 'andslide' | 'anguage' | 'aptop' | 'aptop_chromebook' | 'aptop_mac' | 'aptop_windows' | 'ast_page' | 'aunch' | 'ayers' | 'ayers_clear' | 'eaderboard' | 'eak_add' | 'eak_remove' | 'eave_bags_at_home' | 'egend_toggle' | 'ens' | 'ens_blur' | 'ess_than' | 'ess_than_equal' | 'ibrary_add' | 'ibrary_add_check' | 'ibrary_books' | 'ibrary_music' | 'ight' | 'ightbulb' | 'ightbulb_circle' | 'ight_mode' | 'inear_scale' | 'ine_axis' | 'ine_style' | 'ine_weight' | 'ink' | 'inked_camera' | 'ink_off' | 'iquor' | 'ist' | 'ist_alt' | 'ive_help' | 'ive_tv' | 'iving' | 'ocal_activity' | 'ocal_airport' | 'ocal_atm' | 'ocal_bar' | 'ocal_cafe' | 'ocal_car_wash' | 'ocal_convenience_store' | 'ocal_dining' | 'ocal_drink' | 'ocal_fire_department' | 'ocal_florist' | 'ocal_gas_station' | 'ocal_grocery_store' | 'ocal_hospital' | 'ocal_hotel' | 'ocal_laundry_service' | 'ocal_library' | 'ocal_mall' | 'ocal_movies' | 'ocal_offer' | 'ocal_parking' | 'ocal_pharmacy' | 'ocal_phone' | 'ocal_pizza' | 'ocal_play' | 'ocal_police' | 'ocal_post_office' | 'ocal_printshop' | 'ocal_see' | 'ocal_shipping' | 'ocal_taxi' | 'ocation_city' | 'ocation_disabled' | 'ocation_off' | 'ocation_on' | 'ocation_searching' | 'ock' | 'ock_clock' | 'ock_open' | 'ock_person' | 'ock_reset' | 'og_in' | 'ogin' | 'ogo_dev' | 'og_out' | 'ogout' | 'ooks' | 'ooks_3' | 'ooks_4' | 'ooks_5' | 'ooks_6' | 'ooks_one' | 'ooks_two' | 'oop' | 'oupe' | 'ow_priority' | 'oyalty' | 'te_mobiledata' | 'te_plus_mobiledata' | 'uggage' | 'unch_dining' | 'yrics' | 'acro_off' | 'ail' | 'ail_lock' | 'ail_outline' | 'ale' | 'an' | 'an_2' | 'an_3' | 'an_4' | 'anage_accounts' | 'anage_history' | 'anage_search' | 'ap' | 'aps_home_work' | 'aps_ugc' | 'argin' | 'ark_as_unread' | 'ark_chat_read' | 'ark_chat_unread' | 'ark_email_read' | 'ark_email_unread' | 'arkunread' | 'ark_unread_chat_alt' | 'arkunread_mailbox' | 'asks' | 'aximize' | 'edia_bluetooth_off' | 'edia_bluetooth_on' | 'ediation' | 'edical_information' | 'edical_services' | 'edication' | 'edication_liquid' | 'eeting_room' | 'emory' | 'enu' | 'enu_book' | 'enu_open' | 'erge' | 'erge_type' | 'essage' | 'ic' | 'ic_external_off' | 'ic_external_on' | 'ic_none' | 'ic_off' | 'icrowave' | 'ilitary_tech' | 'inimize' | 'inor_crash' | 'inus' | 'iscellaneous_services' | 'issed_video_call' | 'ms' | 'obiledata_off' | 'obile_friendly' | 'obile_off' | 'obile_screen_share' | 'ode' | 'ode_comment' | 'ode_edit' | 'ode_edit_outline' | 'ode_fan_off' | 'odel_training' | 'ode_night' | 'ode_of_travel' | 'ode_standby' | 'onetization_on' | 'oney' | 'oney_off' | 'oney_off_csred' | 'onitor' | 'onitor_heart' | 'onitor_weight' | 'onochrome_photos' | 'ood' | 'ood_bad' | 'oped' | 'ore' | 'ore_horiz' | 'ore_time' | 'ore_vert' | 'osque' | 'otion_photos_auto' | 'otion_photos_off' | 'otion_photos_on' | 'otion_photos_pause' | 'otion_photos_paused' | 'otorcycle' | 'ouse' | 'ove_down' | 'ove_to_inbox' | 'ove_up' | 'ovie' | 'ovie_creation' | 'ovie_filter' | 'oving' | 'p' | 'ultiline_chart' | 'ultiple_stop' | 'useum' | 'usic_note' | 'usic_off' | 'usic_video' | 'y_location' | 'at' | 'ature' | 'ature_people' | 'avigate_before' | 'avigate_next' | 'avigation' | 'earby_error' | 'earby_off' | 'ear_me' | 'ear_me_disabled' | 'est_cam_wired_stand' | 'etwork_cell' | 'etwork_check' | 'etwork_locked' | 'etwork_ping' | 'etwork_wifi' | 'etwork_wifi_1_bar' | 'etwork_wifi_2_bar' | 'etwork_wifi_3_bar' | 'ew_label' | 'ew_releases' | 'ewspaper' | 'ext_plan' | 'ext_week' | 'fc' | 'ightlife' | 'ightlight' | 'ightlight_round' | 'ight_shelter' | 'ights_stay' | 'o_accounts' | 'o_adult_content' | 'o_backpack' | 'o_cell' | 'o_crash' | 'o_drinks' | 'o_encryption' | 'o_encryption_gmailerrorred' | 'o_flash' | 'o_food' | 'oise_aware' | 'oise_control_off' | 'o_luggage' | 'o_meals' | 'o_meeting_room' | 'o_photography' | 'ordic_walking' | 'orth' | 'orth_east' | 'orth_west' | 'o_sim' | 'o_stroller' | 'ot_accessible' | 'ote' | 'ote_add' | 'ote_alt' | 'ot_equal' | 'otes' | 'otification_add' | 'otification_important' | 'otifications' | 'otifications_active' | 'otifications_none' | 'otifications_off' | 'otifications_paused' | 'ot_interested' | 'ot_listed_location' | 'o_transfer' | 'ot_started' | 'umbers' | 'ffline_bolt' | 'ffline_pin' | 'ffline_share' | 'il_barrel' | 'ndemand_video' | 'n_device_training' | 'nline_prediction' | 'pacity' | 'pen_in_browser' | 'pen_in_full' | 'pen_in_new' | 'pen_in_new_off' | 'pen_with' | 'ther_houses' | 'utbond' | 'utbound' | 'utbox' | 'utdoor_grill' | 'utlet' | 'utlined_flag' | 'utput' | 'adding' | 'ages' | 'ageview' | 'aid' | 'alette' | 'anorama' | 'anorama_fish_eye' | 'anorama_horizontal' | 'anorama_horizontal_select' | 'anorama_photosphere' | 'anorama_photosphere_select' | 'anorama_vertical' | 'anorama_vertical_select' | 'anorama_wide_angle' | 'anorama_wide_angle_select' | 'an_tool' | 'an_tool_alt' | 'aragliding' | 'ark' | 'arty_mode' | 'assword' | 'attern' | 'ause' | 'ause_circle' | 'ause_circle_filled' | 'ause_circle_outline' | 'ause_presentation' | 'ayment' | 'ayments' | 'aypal' | 'edal_bike' | 'ending' | 'ending_actions' | 'entagon' | 'eople' | 'eople_alt' | 'eople_outline' | 'ercent' | 'ercentage' | 'erm_camera_mic' | 'erm_contact_calendar' | 'erm_data_setting' | 'erm_device_information' | 'erm_identity' | 'erm_media' | 'erm_phone_msg' | 'erm_scan_wifi' | 'erson' | 'erson_2' | 'erson_3' | 'erson_4' | 'erson_add' | 'erson_add_alt' | 'erson_add_alt_1' | 'erson_add_disabled' | 'ersonal_injury' | 'ersonal_video' | 'erson_off' | 'erson_outline' | 'erson_pin' | 'erson_pin_circle' | 'erson_remove' | 'erson_remove_alt_1' | 'erson_search' | 'est_control' | 'est_control_rodent' | 'ets' | 'hishing' | 'hone' | 'hone_android' | 'hone_bluetooth_speaker' | 'hone_callback' | 'hone_disabled' | 'hone_enabled' | 'hone_forwarded' | 'hone_in_talk' | 'hone_iphone' | 'honelink' | 'honelink_erase' | 'honelink_lock' | 'honelink_off' | 'honelink_ring' | 'honelink_setup' | 'hone_locked' | 'hone_missed' | 'hone_paused' | 'hoto' | 'hoto_album' | 'hoto_camera' | 'hoto_camera_back' | 'hoto_camera_front' | 'hoto_filter' | 'hoto_library' | 'hoto_size_select_actual' | 'hoto_size_select_large' | 'hoto_size_select_small' | 'hp' | 'iano' | 'iano_off' | 'icture_as_pdf' | 'icture_in_picture' | 'icture_in_picture_alt' | 'ie_chart' | 'ie_chart_outline' | 'in' | 'inch' | 'in_drop' | 'in_end' | 'in_invoke' | 'in_off' | 'ivot_table_chart' | 'ix' | 'lace' | 'lagiarism' | 'lay_arrow' | 'lay_circle' | 'lay_circle_filled' | 'lay_circle_filled_white' | 'lay_circle_outline' | 'lay_disabled' | 'lay_for_work' | 'lay_lesson' | 'laylist_add' | 'laylist_add_check' | 'laylist_add_check_circle' | 'laylist_add_circle' | 'laylist_play' | 'laylist_remove' | 'lumbing' | 'lus' | 'lus_minus' | 'lus_minus_alt' | 'lus_one' | 'odcasts' | 'oint_of_sale' | 'olicy' | 'oll' | 'olyline' | 'olymer' | 'ool' | 'ortable_wifi_off' | 'ortrait' | 'ost_add' | 'ower' | 'ower_input' | 'ower_off' | 'ower_settings_new' | 'recision_manufacturing' | 'regnant_woman' | 'resent_to_all' | 'review' | 'rice_change' | 'rice_check' | 'rint' | 'rint_disabled' | 'riority_high' | 'rivacy_tip' | 'rivate_connectivity' | 'roduction_quantity_limits' | 'ropane' | 'ropane_tank' | 'sychology' | 'sychology_alt' | 'ublic' | 'ublic_off' | 'ublish' | 'ublished_with_changes' | 'unch_clock' | 'ush_pin' | 'r_code' | 'rcode' | 'r_code_2' | 'r_code_scanner' | 'uery_builder' | 'uery_stats' | 'uestion_answer' | 'uestion_mark' | 'ueue' | 'ueue_music' | 'ueue_play_next' | 'uickreply' | 'uiz' | 'uora' | 'adar' | 'adio' | 'adio_button_checked' | 'adio_button_unchecked' | 'ailway_alert' | 'amen_dining' | 'amp_left' | 'amp_right' | 'ate_review' | 'aw_off' | 'aw_on' | 'ead_more' | 'eal_estate_agent' | 'eceipt' | 'eceipt_long' | 'ecent_actors' | 'ecommend' | 'ecord_voice_over' | 'ectangle' | 'ecycling' | 'eddit' | 'edeem' | 'edo' | 'educe_capacity' | 'efresh' | 'emember_me' | 'emove' | 'emove_circle' | 'emove_circle_outline' | 'emove_done' | 'emove_from_queue' | 'emove_moderator' | 'emove_red_eye' | 'emove_road' | 'emove_shopping_cart' | 'eorder' | 'epartition' | 'epeat' | 'epeat_on' | 'epeat_one' | 'epeat_one_on' | 'eplay' | 'eplay_10' | 'eplay_30' | 'eplay_5' | 'eplay_circle_filled' | 'eply' | 'eply_all' | 'eport' | 'eport_gmailerrorred' | 'eport_off' | 'eport_problem' | 'equest_page' | 'equest_quote' | 'eset_tv' | 'estart_alt' | 'estaurant' | 'estaurant_menu' | 'estore' | 'estore_from_trash' | 'estore_page' | 'eviews' | 'ice_bowl' | 'ing_volume' | '_mobiledata' | 'ocket' | 'ocket_launch' | 'oller_shades' | 'oller_shades_closed' | 'oller_skating' | 'oofing' | 'oom' | 'oom_preferences' | 'oom_service' | 'otate_90_degrees_ccw' | 'otate_90_degrees_cw' | 'otate_left' | 'otate_right' | 'oundabout_left' | 'oundabout_right' | 'ounded_corner' | 'oute' | 'outer' | 'owing' | 'ss_feed' | 'svp' | 'tt' | 'ule' | 'ule_folder' | 'un_circle' | 'unning_with_errors' | 'v_hookup' | 'afety_check' | 'afety_divider' | 'ailing' | 'anitizer' | 'atellite' | 'atellite_alt' | 'ave' | 'ave_all' | 'ave_alt' | 'ave_as' | 'aved_search' | 'avings' | 'cale' | 'canner' | 'catter_plot' | 'chedule' | 'chedule_send' | 'chema' | 'chool' | 'cience' | 'core' | 'coreboard' | 'creen_lock_landscape' | 'creen_lock_portrait' | 'creen_lock_rotation' | 'creen_rotation' | 'creen_rotation_alt' | 'creen_search_desktop' | 'creen_share' | 'creenshot' | 'creenshot_monitor' | 'cuba_diving' | 'd' | 'd_card' | 'd_card_alert' | 'd_storage' | 'earch' | 'earch_off' | 'ecurity' | 'ecurity_update' | 'ecurity_update_good' | 'ecurity_update_warning' | 'egment' | 'elect_all' | 'elf_improvement' | 'ell' | 'end' | 'end_and_archive' | 'end_time_extension' | 'end_to_mobile' | 'ensor_door' | 'ensor_occupied' | 'ensors' | 'ensors_off' | 'ensor_window' | 'entiment_dissatisfied' | 'entiment_neutral' | 'entiment_satisfied' | 'entiment_satisfied_alt' | 'entiment_slightly_dissatisfied' | 'entiment_very_dissatisfied' | 'entiment_very_satisfied' | 'et_meal' | 'ettings' | 'ettings_accessibility' | 'ettings_applications' | 'ettings_backup_restore' | 'ettings_bluetooth' | 'ettings_brightness' | 'ettings_cell' | 'ettings_ethernet' | 'ettings_input_antenna' | 'ettings_input_component' | 'ettings_input_composite' | 'ettings_input_hdmi' | 'ettings_input_svideo' | 'ettings_overscan' | 'ettings_phone' | 'ettings_power' | 'ettings_remote' | 'ettings_suggest' | 'ettings_system_daydream' | 'ettings_voice' | 'evere_cold' | 'hape_line' | 'hare' | 'hare_arrival_time' | 'hare_location' | 'hield' | 'hield_moon' | 'hop' | 'hop_2' | 'hopify' | 'hopping_bag' | 'hopping_basket' | 'hopping_cart' | 'hopping_cart_checkout' | 'hop_two' | 'hortcut' | 'hort_text' | 'how_chart' | 'hower' | 'huffle' | 'huffle_on' | 'hutter_speed' | 'ick' | 'ignal_cellular_0_bar' | 'ignal_cellular_1_bar' | 'ignal_cellular_2_bar' | 'ignal_cellular_3_bar' | 'ignal_cellular_4_bar' | 'ignal_cellular_alt' | 'ignal_cellular_alt_1_bar' | 'ignal_cellular_alt_2_bar' | 'ignal_cellular_connected_no_internet_0_bar' | 'ignal_cellular_connected_no_internet_1_bar' | 'ignal_cellular_connected_no_internet_2_bar' | 'ignal_cellular_connected_no_internet_3_bar' | 'ignal_cellular_connected_no_internet_4_bar' | 'ignal_cellular_nodata' | 'ignal_cellular_no_sim' | 'ignal_cellular_null' | 'ignal_cellular_off' | 'ignal_wifi_0_bar' | 'ignal_wifi_1_bar' | 'ignal_wifi_1_bar_lock' | 'ignal_wifi_2_bar' | 'ignal_wifi_2_bar_lock' | 'ignal_wifi_3_bar' | 'ignal_wifi_3_bar_lock' | 'ignal_wifi_4_bar' | 'ignal_wifi_4_bar_lock' | 'ignal_wifi_bad' | 'ignal_wifi_connected_no_internet_4' | 'ignal_wifi_off' | 'ignal_wifi_statusbar_4_bar' | 'ignal_wifi_statusbar_connected_no_internet_4' | 'ignal_wifi_statusbar_null' | 'ign_language' | 'ignpost' | 'im_card' | 'im_card_alert' | 'im_card_download' | 'ingle_bed' | 'ip' | 'kateboarding' | 'kip_next' | 'kip_previous' | 'ledding' | 'lideshow' | 'low_motion_video' | 'mart_button' | 'mart_display' | 'martphone' | 'mart_screen' | 'mart_toy' | 'moke_free' | 'moking_rooms' | 'ms' | 'ms_failed' | 'napchat' | 'nippet_folder' | 'nooze' | 'nowboarding' | 'nowmobile' | 'nowshoeing' | 'oap' | 'ocial_distance' | 'olar_power' | 'ort' | 'ort_by_alpha' | 'os' | 'oup_kitchen' | 'ource' | 'outh' | 'outh_america' | 'outh_east' | 'outh_west' | 'pa' | 'pace_bar' | 'pace_dashboard' | 'patial_audio' | 'patial_audio_off' | 'patial_tracking' | 'peaker' | 'peaker_group' | 'peaker_notes' | 'peaker_notes_off' | 'peaker_phone' | 'peed' | 'pellcheck' | 'plitscreen' | 'poke' | 'ports' | 'ports_bar' | 'ports_baseball' | 'ports_basketball' | 'ports_cricket' | 'ports_esports' | 'ports_football' | 'ports_golf' | 'ports_gymnastics' | 'ports_handball' | 'ports_hockey' | 'ports_kabaddi' | 'ports_martial_arts' | 'ports_mma' | 'ports_motorsports' | 'ports_rugby' | 'ports_score' | 'ports_soccer' | 'ports_tennis' | 'ports_volleyball' | 'quare' | 'quare_foot' | 'sid_chart' | 'tacked_bar_chart' | 'tacked_line_chart' | 'tadium' | 'tairs' | 'tar' | 'tar_border' | 'tar_border_purple500' | 'tar_half' | 'tar_outline' | 'tar_purple500' | 'tar_rate' | 'tars' | 'tart' | 'tay_current_landscape' | 'tay_current_portrait' | 'tay_primary_landscape' | 'tay_primary_portrait' | 'ticky_note_2' | 'top' | 'top_circle' | 'top_screen_share' | 'torage' | 'tore' | 'torefront' | 'tore_mall_directory' | 'torm' | 'traight' | 'traighten' | 'tream' | 'treetview' | 'trikethrough_s' | 'troller' | 'tyle' | 'ubdirectory_arrow_left' | 'ubdirectory_arrow_right' | 'ubject' | 'ubscript' | 'ubscriptions' | 'ubtitles' | 'ubtitles_off' | 'ubway' | 'ummarize' | 'uperscript' | 'upervised_user_circle' | 'upervisor_account' | 'upport' | 'upport_agent' | 'urfing' | 'urround_sound' | 'wap_calls' | 'wap_horiz' | 'wap_horizontal_circle' | 'wap_vert' | 'wap_vertical_circle' | 'wipe' | 'wipe_down' | 'wipe_down_alt' | 'wipe_left' | 'wipe_left_alt' | 'wipe_right' | 'wipe_right_alt' | 'wipe_up' | 'wipe_up_alt' | 'wipe_vertical' | 'witch_access_shortcut' | 'witch_access_shortcut_add' | 'witch_account' | 'witch_camera' | 'witch_left' | 'witch_right' | 'witch_video' | 'ynagogue' | 'ync' | 'ync_alt' | 'ync_disabled' | 'ync_lock' | 'ync_problem' | 'ystem_security_update' | 'ystem_security_update_good' | 'ystem_security_update_warning' | 'ystem_update' | 'ystem_update_alt' | 'ab' | 'able_bar' | 'able_chart' | 'able_restaurant' | 'able_rows' | 'ablet' | 'ablet_android' | 'ablet_mac' | 'able_view' | 'ab_unselected' | 'ag' | 'ag_faces' | 'akeout_dining' | 'ap_and_play' | 'apas' | 'ask' | 'ask_alt' | 'axi_alert' | 'elegram' | 'emple_buddhist' | 'emple_hindu' | 'erminal' | 'errain' | 'ext_decrease' | 'ext_fields' | 'ext_format' | 'ext_increase' | 'ext_rotate_up' | 'ext_rotate_vertical' | 'ext_rotation_angledown' | 'ext_rotation_angleup' | 'ext_rotation_down' | 'ext_rotation_none' | 'extsms' | 'ext_snippet' | 'exture' | 'heater_comedy' | 'heaters' | 'hermostat' | 'hermostat_auto' | 'humb_down' | 'humb_down_alt' | 'humb_down_off_alt' | 'humbs_up_down' | 'humb_up' | 'humb_up_alt' | 'humb_up_off_alt' | 'hunderstorm' | 'iktok' | 'imelapse' | 'imeline' | 'imer' | 'imer_10' | 'imer_10_select' | 'imer_3' | 'imer_3_select' | 'imer_off' | 'ime_to_leave' | 'ips_and_updates' | 'ire_repair' | 'itle' | 'oc' | 'oday' | 'oggle_off' | 'oggle_on' | 'oken' | 'oll' | 'onality' | 'opic' | 'ornado' | 'ouch_app' | 'our' | 'oys' | 'rack_changes' | 'raffic' | 'rain' | 'ram' | 'ranscribe' | 'ransfer_within_a_station' | 'ransform' | 'ransgender' | 'ransit_enterexit' | 'ranslate' | 'ravel_explore' | 'rending_down' | 'rending_flat' | 'rending_up' | 'rip_origin' | 'roubleshoot' | 'ry' | 'sunami' | 'ty' | 'une' | 'ungsten' | 'urned_in' | 'urned_in_not' | 'urn_left' | 'urn_right' | 'urn_sharp_left' | 'urn_sharp_right' | 'urn_slight_left' | 'urn_slight_right' | 'v' | 'v_off' | 'wo_wheeler' | 'ype_specimen' | 'mbrella' | 'narchive' | 'ndo' | 'nfold_less' | 'nfold_less_double' | 'nfold_more' | 'nfold_more_double' | 'npublished' | 'nsubscribe' | 'pcoming' | 'pdate' | 'pdate_disabled' | 'pgrade' | 'pload' | 'pload_file' | 'sb' | 'sb_off' | '_turn_left' | '_turn_right' | 'accines' | 'ape_free' | 'aping_rooms' | 'erified' | 'erified_user' | 'ertical_align_bottom' | 'ertical_align_center' | 'ertical_align_top' | 'ertical_distribute' | 'ertical_shades' | 'ertical_shades_closed' | 'ertical_split' | 'ibration' | 'ideo_call' | 'ideocam' | 'ideo_camera_back' | 'ideo_camera_front' | 'ideocam_off' | 'ideo_chat' | 'ideo_file' | 'ideogame_asset' | 'ideogame_asset_off' | 'ideo_label' | 'ideo_library' | 'ideo_settings' | 'ideo_stable' | 'iew_agenda' | 'iew_array' | 'iew_carousel' | 'iew_column' | 'iew_comfy' | 'iew_comfy_alt' | 'iew_compact' | 'iew_compact_alt' | 'iew_cozy' | 'iew_day' | 'iew_headline' | 'iew_in_ar' | 'iew_kanban' | 'iew_list' | 'iew_module' | 'iew_quilt' | 'iew_sidebar' | 'iew_stream' | 'iew_timeline' | 'iew_week' | 'ignette' | 'illa' | 'isibility' | 'isibility_off' | 'oice_chat' | 'oicemail' | 'oice_over_off' | 'olcano' | 'olume_down' | 'olume_mute' | 'olume_off' | 'olume_up' | 'olunteer_activism' | 'pn_key' | 'pn_key_off' | 'pn_lock' | 'rpano' | 'allet' | 'allpaper' | 'arehouse' | 'arning' | 'arning_amber' | 'ash' | 'atch' | 'atch_later' | 'atch_off' | 'ater' | 'ater_damage' | 'ater_drop' | 'aterfall_chart' | 'aves' | 'aving_hand' | 'b_auto' | 'b_cloudy' | 'b_incandescent' | 'b_iridescent' | 'b_shade' | 'b_sunny' | 'b_twilight' | 'c' | 'eb' | 'eb_asset' | 'eb_asset_off' | 'ebhook' | 'eb_stories' | 'echat' | 'eekend' | 'est' | 'hatsapp' | 'hatshot' | 'heelchair_pickup' | 'here_to_vote' | 'idgets' | 'idth_full' | 'idth_normal' | 'idth_wide' | 'ifi' | 'ifi_1_bar' | 'ifi_2_bar' | 'ifi_calling' | 'ifi_calling_3' | 'ifi_channel' | 'ifi_find' | 'ifi_lock' | 'ifi_off' | 'ifi_password' | 'ifi_protected_setup' | 'ifi_tethering' | 'ifi_tethering_error' | 'ifi_tethering_error_rounded' | 'ifi_tethering_off' | 'indow' | 'ind_power' | 'ine_bar' | 'oman' | 'oman_2' | 'oo_commerce' | 'ordpress' | 'ork' | 'ork_history' | 'ork_off' | 'ork_outline' | 'orkspace_premium' | 'orkspaces' | 'rap_text' | 'rong_location' | 'ysiwyg' | 'ard' | 'outube_searched_for' | 'oom_in' | 'oom_in_map' | 'oom_out' | 'oom_out_map'} ICONS */