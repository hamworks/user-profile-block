<?php
/**
 * @var string $class_name
 * @var int $user_id
 */

?>
<div class="wp-block-user-profile-block-user-profile <?php echo esc_attr( $class_name ); ?>">
	<div class="wp-block-user-profile-block-user-profile-media">
		<div class="wp-block-user-profile-block-user-profile-media__avatar">
			<?php echo get_avatar( $user_id ); ?>
		</div>
		<div class="wp-block-user-profile-block-user-profile-media__body">
			<h3><?php echo esc_html( get_the_author_meta( 'display_name', $user_id ) ); ?></h3>
			<?php echo esc_html( get_the_author_meta( 'description', $user_id ) ); ?>
		</div>
	</div>
</div>
